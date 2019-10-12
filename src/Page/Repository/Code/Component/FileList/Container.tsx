import React, {Component} from 'react';
import View from './View';
import {RepositoryInfo} from '../../../../../Api';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {ObjectType} from '../../../../../CONSTANT';
import {Commit} from '../../../../../Class';
import {Interface as RouterInterface} from '../../../../../Router';

interface Props extends RouteComponentProps<RouterInterface.RepositoryCode> {}

interface State
{
    fileList: Array<{ type: ObjectType, path: string, commit: Commit }>,
    lastCommit: Commit,
    loading: boolean,
}

class FileList extends Component<Props, State>
{
    constructor(props: Props)
    {
        super(props);
        this.state = {
            fileList: [],
            lastCommit: new Commit('', '', '', '', ''),
            loading: true,
        };
    }

    async componentDidMount()
    {
        const {match: {params: {username, repository: name, path, branch}}} = this.props;
        this.setState({loading: true});
        const [fileList, lastCommit] = await Promise.all([
            RepositoryInfo.directory(
                username, name,
                branch ? branch : 'HEAD',
                path === undefined ? '' : path + '/'),
            RepositoryInfo.lastCommit(username, name, branch ? branch : 'HEAD'),
        ]);
        this.setState({loading: false});

        if (fileList !== null)
        {
            this.setState({fileList});
        }
        if (lastCommit !== null)
        {
            this.setState({lastCommit});
        }
    }

    async componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any)
    {
        const {match: {params: {branch: preBranch, path: prePath}}} = prevProps;
        const {match: {params: {branch, path}}} = this.props;
        if (preBranch !== branch || prePath !== path)
        {
            await this.componentDidMount();
        }
    }

    render()
    {
        const {fileList, lastCommit, loading} = this.state;
        return (<View fileList={fileList} lastCommit={lastCommit} loading={loading} />);
    }
}

export default withRouter(FileList);