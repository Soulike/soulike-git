/*! For license information please see 14.a9b0c6b2.chunk.js.LICENSE.txt */
(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[14],{659:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(7);var s=o.a.memo((function(e){return o.a.createElement(r.b,Object.assign({},e,{target:"_blank",rel:"noopener norefferrer"}))}));a.d(t,"a",(function(){return s}))},669:function(e,t,a){e.exports={SettingsTitle:"Style_SettingsTitle__rgD4i"}},670:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(669),s=a.n(r);var i=o.a.memo((function(e){var t=e.children;return o.a.createElement("h2",{className:s.a.SettingsTitle},t)}));a.d(t,"a",(function(){return i}))},684:function(e,t,a){e.exports={GroupList:"Style_GroupList__1GfzT",groupWrapper:"Style_groupWrapper__2nh8Q",groupName:"Style_groupName__1jfy7"}},692:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r={name:"team",theme:"outlined",icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M824.2 699.9a301.55 301.55 0 00-86.4-60.4C783.1 602.8 812 546.8 812 484c0-110.8-92.4-201.7-203.2-200-109.1 1.7-197 90.6-197 200 0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 00-86.4 60.4C345 754.6 314 826.8 312 903.8a8 8 0 008 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5A226.62 226.62 0 01612 684c60.9 0 118.2 23.7 161.3 66.8C814.5 792 838 846.3 840 904.3c.1 4.3 3.7 7.7 8 7.7h56a8 8 0 008-8.2c-2-77-33-149.2-87.8-203.9zM612 612c-34.2 0-66.4-13.3-90.5-37.5a126.86 126.86 0 01-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4 0 34.2-13.3 66.3-37.5 90.5A127.3 127.3 0 01612 612zM361.5 510.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 01-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.9-1.7-203.3 89.2-203.3 199.9 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 008 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.9-1 6.5-4.7 6-8.7z"}}]}},s=a(6),i=function(e,t){return o.a.createElement(s.a,Object.assign({},e,{ref:t,icon:r}))};i.displayName="TeamOutlined";t.a=o.a.forwardRef(i)},693:function(e,t,a){"use strict";a(664);var n=a(663),o=(a(336),a(223)),r=(a(128),a(35)),s=(a(222),a(67)),i=a(0),l=a.n(i),u=a(684),c=a.n(u),p=a(22),m=a(692),d=a(659);var g=function(e){const{groups:t,loading:a,administratingGroups:i}=e,u=i?i.map(({id:e})=>e):[];return l.a.createElement(n.a,{className:c.a.GroupList,loading:a,locale:{emptyText:l.a.createElement(s.a,{description:"\u6ca1\u6709\u5c0f\u7ec4"})},dataSource:[...t],renderItem:({id:e,name:t})=>l.a.createElement(d.a,{className:c.a.groupWrapper,to:p.Function.generateGroupRoute({id:e.toString()})},l.a.createElement(o.a,{className:c.a.group,hoverable:!0,size:"small"},l.a.createElement(o.a.Meta,{avatar:l.a.createElement(l.a.Fragment,null,l.a.createElement(m.a,null)," ",e),title:l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:c.a.groupName},t),u.includes(e)?l.a.createElement(r.a,{color:"blue"},"\u7ba1\u7406\u5458"):null)})))})};a.d(t,"a",(function(){return g}))},763:function(e,t,a){e.exports={Groups:"Style_Groups__SOEcz",title:"Style_title__JtSKn"}},764:function(e,t,a){},765:function(e,t,a){e.exports={JoinGroupModal:"Style_JoinGroupModal__1HZ54",input:"Style_input__3ZSsS"}},766:function(e,t,a){"use strict";e.exports=function(e){return"number"===typeof e?e-e===0:"string"===typeof e&&""!==e.trim()&&(Number.isFinite?Number.isFinite(+e):isFinite(+e))}},800:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(763),s=a.n(r),i=a(670),l=a(693),u=(a(61),a(26)),c=(a(60),a(16)),p=a(764),m=a.n(p),d=(a(338),a(232)),g=(a(335),a(221)),h=a(765),f=a.n(h);var E=o.a.memo((function(e){const{visible:t,onCancel:a,onOk:n,groupId:r,onGroupIdInputChange:s}=e;return o.a.createElement(d.a,{title:"\u52a0\u5165\u5c0f\u7ec4",visible:t,onCancel:a,onOk:n,destroyOnClose:!0,className:f.a.JoinGroupModal,width:400},o.a.createElement("label",null,o.a.createElement(g.a,{placeholder:"\u5c0f\u7ec4\u7684 ID",className:f.a.input,value:r,onChange:s,autoFocus:!0})))})),v=a(638);var b=o.a.memo((function(e){const{modalVisible:t,onModalCancel:a,onModalOk:n,onClick:r,onGroupIdInputChange:s,groupId:i}=e;return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{type:"primary",className:m.a.JoinGroupButton,onClick:r},o.a.createElement(v.a,null),"\u52a0\u5165"),o.a.createElement(E,{visible:t,onOk:n,onCancel:a,groupId:i,onGroupIdInputChange:s}))})),C=a(766),I=a.n(C),S=a(225),_=a(85),G=new(a(175).EventEmitter);const y=Symbol();class N extends n.PureComponent{constructor(e){super(e),this.onClick=()=>{this.setState({modalVisible:!0,groupId:""})},this.onGroupIdInputChange=e=>{const{value:t}=e.target;(""===t||I()(t))&&this.setState({groupId:t})},this.onModalOk=async()=>{const{groupId:e}=this.state;if(I()(e)){const{match:{params:{repository:t,username:a}}}=this.props;null!==await S.a.addToGroup({username:a,name:t},{id:Number.parseInt(e)})&&(u.a.success({message:"\u52a0\u5165\u5c0f\u7ec4\u6210\u529f"}),G.emit(y),this.setState({modalVisible:!1}))}else u.a.warn({message:"\u5c0f\u7ec4 ID \u5fc5\u987b\u662f\u6570\u5b57"})},this.onModalCancel=()=>{this.setState({modalVisible:!1})},this.state={modalVisible:!1,groupId:""}}render(){const{modalVisible:e,groupId:t}=this.state;return o.a.createElement(b,{modalVisible:e,onClick:this.onClick,onModalOk:this.onModalOk,onModalCancel:this.onModalCancel,onGroupIdInputChange:this.onGroupIdInputChange,groupId:t})}}var k=Object(_.f)(N);var M=o.a.memo((function(e){const{groups:t,loading:a}=e;return o.a.createElement("div",{className:s.a.Groups},o.a.createElement(i.a,null,o.a.createElement("div",{className:s.a.title},"\u5c0f\u7ec4",o.a.createElement(k,null))),o.a.createElement("div",{className:s.a.groupListWrapper},o.a.createElement(l.a,{groups:t,loading:a})))})),O=a(27);class w extends n.PureComponent{constructor(e){super(e),this.loadGroups=async()=>{const{match:{params:{username:e,repository:t}}}=this.props;this.setState({loading:!0});const a=await O.h.groups({username:e,name:t});null!==a&&this.setState({groups:[...a]}),this.setState({loading:!1})},this.state={groups:[],loading:!0}}async componentDidMount(){await this.loadGroups(),G.on(y,this.loadGroups)}componentWillUnmount(){G.removeListener(y,this.loadGroups)}render(){const{groups:e,loading:t}=this.state;return o.a.createElement(M,{groups:e,loading:t})}}var x=Object(_.f)(w);a.d(t,"default",(function(){return x}))}}]);
//# sourceMappingURL=14.a9b0c6b2.chunk.js.map