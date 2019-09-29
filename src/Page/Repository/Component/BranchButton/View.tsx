import React from 'react';
import {Button, Dropdown, Icon, Menu} from 'antd';
import {MenuItemProps} from 'antd/lib/menu/MenuItem';

interface Props
{
    branches: Array<string>,
    branch: string,
    onBranchClick: (branch: string) => MenuItemProps['onClick'],
}

function BranchButtonView(props: Props)
{
    const {branches, branch, onBranchClick} = props;
    return (
        <Dropdown trigger={['click']} overlay={
            <Menu>
                {
                    branches.map(branch => <Menu.Item key={branch}
                                                      onClick={onBranchClick(branch)}>{branch}</Menu.Item>)
                }
            </Menu>
        }>
            <Button>{branch}<Icon type="caret-down" /></Button>
        </Dropdown>
    );
}

export default React.memo(BranchButtonView);