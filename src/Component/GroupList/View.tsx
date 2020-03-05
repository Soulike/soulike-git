import React from 'react';
import Style from './Style.module.scss';
import {Group} from '../../Class';
import {Card, Empty, List, Tag} from 'antd';
import {Link} from 'react-router-dom';
import {Function as RouterFunction} from '../../Router';
import {TeamOutlined} from '@ant-design/icons';

interface IProps
{
    groups: Readonly<Readonly<Group>[]>,
    administratingGroups?: Readonly<Readonly<Group>[]>,
    loading: boolean,
}

function GroupList(props: Readonly<IProps>)
{
    const {groups, loading, administratingGroups} = props;
    const idsInAdministratingGroups = administratingGroups ? administratingGroups.map(({id}) => id) : [];
    return (
        <List className={Style.GroupList}
              loading={loading}
              locale={{emptyText: <Empty description={'没有小组'} />}} dataSource={[...groups]}
              renderItem={({id, name}) => (
                  <Link className={Style.groupWrapper}
                        target={'_blank'} rel={'noreferrer noopener'}
                        to={RouterFunction.generateGroupRoute({id: id.toString()})}>
                      <Card className={Style.group} hoverable={true} size={'small'}>
                          <Card.Meta avatar={
                              <>
                                  <TeamOutlined /> {id}
                              </>
                          } title={<>
                              <div className={Style.groupName}>{name}</div>
                              {idsInAdministratingGroups.includes(id) ? <Tag color={'blue'}>管理员</Tag> : null}
                          </>} />
                      </Card>
                  </Link>)
              }>
        </List>
    );
}

export default GroupList;