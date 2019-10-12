import React, {PureComponent} from 'react';
import View from './View';
import {Repository as RepositoryClass} from '../../../Class';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Interface as RouterInterface} from '../../../Router';
import {RepositoryInfo} from '../../../Api/RepositoryInfo';

interface Props extends RouteComponentProps<RouterInterface.RepositoryCode> {}

interface State
{
    repository: RepositoryClass,
    branches: Array<string>,
    commitCount: number,
    isEmpty: boolean,
    loading: boolean,
}

class Code extends PureComponent<Props, State>
{
    constructor(props: Props)
    {
        super(props);
        this.state = {
            repository: new RepositoryClass('', '', '', true),
            branches: [],
            commitCount: 0,
            isEmpty: false, // 是否是空仓库
            loading: true,
        };
    }

    async componentDidMount()
    {
        this.setState({loading: true});
        await this.setRepository();
        await this.setCommitCount();
        const {isEmpty} = this.state;
        if (!isEmpty)
        {
            await this.setBranches();
        }
        this.setState({loading: false});
    }

    async componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any)
    {
        const {match: {params: {branch: preBranch}}} = prevProps;
        const {match: {params: {branch}}} = this.props;
        if (preBranch !== branch)    // 分支切换，重新获取提交相关信息
        {
            this.setState({loading: true});
            await this.setCommitCount(branch);
            this.setState({loading: false});
        }
    }

    setRepository = async () =>
    {
        const {match: {params: {username, repository: name}}} = this.props;
        const repository = await RepositoryInfo.repository(username, name);
        // 设置仓库基本信息
        if (repository !== null)
        {
            this.setState({repository});
        }
    };

    setCommitCount = async (branch: string = 'HEAD') =>
    {
        const {match: {params: {username, repository: repositoryName}}} = this.props;
        const commitCountWrapper = await RepositoryInfo.commitCount(username, repositoryName, branch);
        // 查看 commit 次数是不是 0。如果是 0 就是空仓库，不再继续请求剩下的信息
        if (commitCountWrapper !== null)
        {
            const {commitCount} = commitCountWrapper;
            if (commitCount === 0)
            {
                this.setState({isEmpty: true});
            }
            else
            {
                this.setState({commitCount});
            }
        }
    };

    setBranches = async () =>
    {
        const {match: {params: {username, repository: repositoryName}}} = this.props;
        const branches = await RepositoryInfo.branch(username, repositoryName);
        if (branches !== null)
        {
            this.setState({branches});
        }
    };

    render()
    {
        const {repository, branches, commitCount, isEmpty, loading} = this.state;
        const {match: {params: {objectType}}} = this.props;
        return (<View isEmpty={isEmpty}
                      repository={repository}
                      commitCount={commitCount}
                      branches={branches}
                      objectType={objectType!} loading={loading} />);
    }

}

export default withRouter(Code);