import React, {PureComponent} from 'react';
import View from './View';
import {CONFIG, Function as RouterFunction, Interface as RouterInterface} from '../../../../Router';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Conflict as ConflictClass, PullRequest} from '../../../../Class';
import {PullRequest as PullRequestApi} from '../../../../Api';
import {notification} from 'antd';
import {PULL_REQUEST_STATUS} from '../../../../CONSTANT';

const {PAGE_ID, PAGE_ID_TO_ROUTE} = CONFIG;

export interface IConflictProps extends RouteComponentProps<RouterInterface.IRepositoryConflict> {}

interface IState
{
    pullRequest: PullRequest | null,
    conflicts: ConflictClass[],
    loading: boolean,
}

class Conflict extends PureComponent<IConflictProps, IState>
{
    constructor(props: IConflictProps)
    {
        super(props);
        this.state = {
            pullRequest: null,
            conflicts: [],
            loading: false,
        };
    }

    async componentDidMount()
    {
        this.checkURL();
        this.setState({loading: true});
        await this.loadPullRequest();
        await this.loadConflicts();
        this.setState({loading: false});
    }

    async componentDidUpdate(prevProps: Readonly<IConflictProps>, prevState: Readonly<IState>, snapshot?: any)
    {
        const {location: {pathname}} = this.props;
        const {location: {pathname: prevPathname}} = this.props;
        if (pathname !== prevPathname)
        {
            await this.componentDidMount();
        }
    }

    checkURL = () =>
    {
        const {match: {params: {no: noString}}, history} = this.props;
        const no = Number.parseInt(noString);
        if (Number.isNaN(no))
        {
            history.replace(PAGE_ID_TO_ROUTE[PAGE_ID.NOT_FOUND]);
        }
    };

    loadPullRequest = async () =>
    {
        return new Promise(async resolve =>
        {
            const {match: {params: {username, repository: name, no: noString}}, history} = this.props;
            const no = Number.parseInt(noString);
            const pullRequest = await PullRequestApi.get({username, name}, {no});
            if (pullRequest !== null)
            {
                const {status} = pullRequest;
                if (status !== PULL_REQUEST_STATUS.OPEN)
                {
                    notification.warn({message: `Pull Request #${no} 已关闭`});
                    history.replace(RouterFunction.generateRepositoryPullRequestRoute({
                        username, repository: name, no: noString,
                    }));
                    return resolve();
                }
                this.setState({pullRequest}, () => resolve());
            }
            else
            {
                resolve();
            }
        });
    };

    loadConflicts = async () =>
    {
        return new Promise(async resolve =>
        {
            const {pullRequest} = this.state;
            if (pullRequest === null)
            {
                resolve();
            }
            else
            {
                const {id} = pullRequest;
                const conflictsWrapper = await PullRequestApi.getConflicts({id});
                if (conflictsWrapper !== null)
                {
                    const {conflicts} = conflictsWrapper;
                    if (conflicts.length === 0)
                    {
                        const {match: {params: {username, repository, no}}, history} = this.props;
                        notification.warn({
                            message: `${username}/${repository} #${no} 没有合并冲突`,
                            description: '您可直接执行合并操作',
                        });
                        history.replace(RouterFunction.generateRepositoryPullRequestRoute({
                            username, repository, no,
                        }));
                        return resolve();
                    }
                    this.setState({conflicts}, () => resolve());
                }
                else
                {
                    resolve();
                }
            }
        });
    };

    render()
    {
        return (<View />);
    }
}

export default withRouter(Conflict);