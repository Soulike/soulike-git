import React, {DOMAttributes} from 'react';
import Style from './Style.module.scss';
import {Button, Input, Switch} from 'antd';
import {InputProps} from 'antd/lib/input';
import {SwitchProps} from 'antd/lib/switch';

interface Props
{
    username: string,
    name: string,
    description: string,
    isPublic: boolean,

    onNameInputChange: InputProps['onChange'],
    onDescriptionInputChange: InputProps['onChange'],
    onIsPublicSwitchChange: SwitchProps['onChange'],
    onSubmit: DOMAttributes<HTMLFormElement>['onSubmit']

    submitting: boolean,
    loading: boolean,
}

function CreateRepositoryView(props: Props)
{
    const {
        username,
        name,
        description,
        isPublic,
        onNameInputChange,
        onDescriptionInputChange,
        onIsPublicSwitchChange,
        onSubmit,
        submitting,
        loading,
    } = props;
    return (
        <div className={Style.CreateRepository}>
            <h1 className={Style.title}>创建新仓库</h1>
            <form action="#" className={Style.form} onSubmit={onSubmit}>
                <label className={Style.label}>
                    <div className={Style.text}>仓库名</div>
                    <Input addonBefore={<div>{username} /</div>}
                           autoFocus={true}
                           value={name}
                           onChange={onNameInputChange}
                           disabled={loading} />
                </label>
                <label className={Style.label}>
                    <div className={Style.text}>描述（可选）</div>
                    <Input value={description} onChange={onDescriptionInputChange} disabled={loading} />
                </label>
                <label className={Style.label}>
                    <div className={Style.inlineText}>公开</div>
                    <Switch checked={isPublic} onChange={onIsPublicSwitchChange} disabled={loading} />
                    <div className={Style.inlineDescription}>
                        {
                            isPublic ?
                                '所有人都能看到该仓库' :
                                '只有你能看到该仓库'
                        }
                    </div>
                </label>
                <Button htmlType={'submit'}
                        type={'primary'}
                        block={true}
                        className={Style.submitButton}
                        loading={submitting}
                        disabled={submitting || loading}>创建仓库</Button>
            </form>
        </div>
    );
}

export default React.memo(CreateRepositoryView);