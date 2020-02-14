import React from 'react';
import Style from './Style.module.scss';
import {Commit as CommitClass, FileDiff} from '../../../../Class';
import {Spin} from 'antd';
import CommitInfoCard from './Component/CommitInfoCard';
import Diff from '../Diff';

interface IProps
{
    commit: CommitClass;
    diff: FileDiff[];
    loading: boolean;
}

function Commit(props: IProps)
{
    const {loading, diff, commit} = props;
    return (
        <div className={Style.Commit}>
            <Spin spinning={loading}>
                <div className={Style.commitInfoCardWrapper}>
                    <CommitInfoCard commit={commit} />
                </div>
                <div className={Style.diffWrapper}>
                    <Diff fileDiffs={diff} />
                </div>
            </Spin>
        </div>
    );
}

export default React.memo(Commit);