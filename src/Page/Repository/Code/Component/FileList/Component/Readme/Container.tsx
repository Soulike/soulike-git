import React, {PureComponent} from 'react';
import View from './View';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {RepositoryInfo} from '../../../../../../../Api/RepositoryInfo';
import {join} from 'path';
import {mdConverter} from '../../../../../../../Singleton';
import {Interface as RouterInterface} from '../../../../../../../Router';
import {File} from '../../../../../../../Function';

interface Props extends RouteComponentProps<RouterInterface.RepositoryCode>
{
    commitHash: string,
}

interface State
{
    exists: boolean,
    readme: string,
    loading: boolean,
}

class Readme extends PureComponent<Props, State>
{
    constructor(props: Props)
    {
        super(props);
        this.state = {
            exists: false,
            readme: '',
            loading: true,
        };
    }

    async componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any)
    {
        const {match: {params: {username, repository, path}}, commitHash} = this.props;
        const {match: {params: {path: prevPath}}, commitHash: prevCommitHash} = prevProps;
        if (commitHash.length !== 0 && (prevPath !== path || prevCommitHash !== commitHash))
        {
            this.setState({loading: true});
            const info = await RepositoryInfo.fileInfo(username, repository, join(path ? path : '', 'README.md'), commitHash);
            this.setState({loading: false});
            if (info !== null && info.exists)
            {
                this.setState({loading: true});
                const raw = await RepositoryInfo.rawFile(username, repository, join(path ? path : '', 'README.md'), commitHash);
                this.setState({loading: false});
                if (raw !== null)
                {
                    this.setState({readme: await File.transformBlobToString(raw), exists: true});
                }
            }
            else
            {
                this.setState({exists: false});
            }
        }
    }

    render()
    {
        const {readme, exists, loading} = this.state;
        return (
            <View exists={exists} html={mdConverter.makeHtml(readme)} loading={loading} />
        );
    }
}

export default withRouter(Readme);