/*! For license information please see 16.e0d931b0.chunk.js.LICENSE.txt */
(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[16],{1e3:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(15);t.a=r.a.memo((function(e){return r.a.createElement(o.b,Object.assign({},e,{target:"_blank",rel:"noopener norefferrer"}))}))},1002:function(e,t,a){"use strict";var n=a(1e3);a.d(t,"a",(function(){return n.a}))},1005:function(e,t,a){e.exports={SettingsTitle:"Style_SettingsTitle__rgD4i"}},1006:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(0),r=a.n(n),o=a(1005),i=a.n(o);var u=r.a.memo((function(e){var t=e.children;return r.a.createElement("h2",{className:i.a.SettingsTitle},t)}))},1032:function(e,t,a){e.exports={GroupList:"Style_GroupList__1GfzT",groupWrapper:"Style_groupWrapper__2nh8Q",groupName:"Style_groupName__1jfy7"}},1042:function(e,t,a){"use strict";var n=a(0),r={name:"team",theme:"outlined",icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M824.2 699.9a301.55 301.55 0 00-86.4-60.4C783.1 602.8 812 546.8 812 484c0-110.8-92.4-201.7-203.2-200-109.1 1.7-197 90.6-197 200 0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 00-86.4 60.4C345 754.6 314 826.8 312 903.8a8 8 0 008 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5A226.62 226.62 0 01612 684c60.9 0 118.2 23.7 161.3 66.8C814.5 792 838 846.3 840 904.3c.1 4.3 3.7 7.7 8 7.7h56a8 8 0 008-8.2c-2-77-33-149.2-87.8-203.9zM612 612c-34.2 0-66.4-13.3-90.5-37.5a126.86 126.86 0 01-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4 0 34.2-13.3 66.3-37.5 90.5A127.3 127.3 0 01612 612zM361.5 510.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 01-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.9-1.7-203.3 89.2-203.3 199.9 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 008 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.9-1 6.5-4.7 6-8.7z"}}]}},o=a(12),i=function(e,t){return n.createElement(o.a,Object.assign({},e,{ref:t,icon:r}))};i.displayName="TeamOutlined";t.a=n.forwardRef(i)},1043:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var n=a(67),r=a(0),o=a.n(r),i=a(1032),u=a.n(i),s=a(1206),c=a(170),l=a(971),p=a(972),m=a(21),d=a(1042),g=a(1002);var f=function(e){var t=e.groups,a=e.loading,r=e.administratingGroups,i=r?r.map((function(e){return e.id})):[];return o.a.createElement(s.a,{className:u.a.GroupList,loading:a,locale:{emptyText:o.a.createElement(c.a,{description:"\u6ca1\u6709\u5c0f\u7ec4"})},dataSource:Object(n.a)(t),renderItem:function(e){var t=e.id,a=e.name;return o.a.createElement(g.a,{className:u.a.groupWrapper,to:m.Function.generateGroupRoute({id:t.toString()})},o.a.createElement(l.a,{className:u.a.group,size:"small"},o.a.createElement(l.a.Meta,{avatar:o.a.createElement(o.a.Fragment,null,o.a.createElement(d.a,null)," ",t),title:o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:u.a.groupName},a),i.includes(t)?o.a.createElement(p.a,{color:"blue"},"\u7ba1\u7406\u5458"):null)})))}})}},1121:function(e,t,a){e.exports={Groups:"Style_Groups__SOEcz",title:"Style_title__JtSKn"}},1122:function(e,t,a){},1123:function(e,t,a){e.exports={JoinGroupModal:"Style_JoinGroupModal__1HZ54",input:"Style_input__3ZSsS"}},1124:function(e,t,a){"use strict";e.exports=function(e){return"number"===typeof e?e-e===0:"string"===typeof e&&""!==e.trim()&&(Number.isFinite?Number.isFinite(+e):isFinite(+e))}},1209:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return L}));var n=a(1),r=a.n(n),o=a(67),i=a(3),u=a(8),s=a(10),c=a(17),l=a(18),p=a(0),m=a.n(p),d=a(1121),g=a.n(d),f=a(1006),v=a(1043),b=a(1122),h=a.n(b),E=a(82),y=a(1123),O=a.n(y),k=a(967),C=a(968);var I=m.a.memo((function(e){var t=e.visible,a=e.onCancel,n=e.onOk,r=e.groupId,o=e.onGroupIdInputChange;return m.a.createElement(k.a,{title:"\u52a0\u5165\u5c0f\u7ec4",visible:t,onCancel:a,onOk:n,destroyOnClose:!0,className:O.a.JoinGroupModal,width:400},m.a.createElement("label",null,m.a.createElement(C.a,{placeholder:"\u5c0f\u7ec4\u7684 ID",className:O.a.input,value:r,onChange:o,autoFocus:!0})))})),S=a(978);var _=m.a.memo((function(e){var t=e.modalVisible,a=e.onModalCancel,n=e.onModalOk,r=e.onClick,o=e.onGroupIdInputChange,i=e.groupId;return m.a.createElement(m.a.Fragment,null,m.a.createElement(E.a,{type:"primary",className:h.a.JoinGroupButton,onClick:r},m.a.createElement(S.a,null),"\u52a0\u5165"),m.a.createElement(I,{visible:t,onOk:n,onCancel:a,groupId:i,onGroupIdInputChange:o}))})),G=a(1124),j=a.n(G),N=a(28),M=a(117),x=a(961),w=new(a(249).EventEmitter),F=Symbol(),J=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).onClick=function(){n.setState({modalVisible:!0,groupId:""})},n.onGroupIdInputChange=function(e){var t=e.target.value;(""===t||j()(t))&&n.setState({groupId:t})},n.onModalOk=Object(i.a)(r.a.mark((function e(){var t,a,o,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.state.groupId,j()(t)){e.next=5;break}x.a.warn({message:"\u5c0f\u7ec4 ID \u5fc5\u987b\u662f\u6570\u5b57"}),e.next=10;break;case 5:return a=n.props.match.params,o=a.repository,i=a.username,e.next=8,N.d.addRepository({username:i,name:o},{id:Number.parseInt(t)});case 8:null!==e.sent&&(x.a.success({message:"\u52a0\u5165\u5c0f\u7ec4\u6210\u529f"}),w.emit(F),n.setState({modalVisible:!1}));case 10:case"end":return e.stop()}}),e)}))),n.onModalCancel=function(){n.setState({modalVisible:!1})},n.state={modalVisible:!1,groupId:""},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state,t=e.modalVisible,a=e.groupId;return m.a.createElement(_,{modalVisible:t,onClick:this.onClick,onModalOk:this.onModalOk,onModalCancel:this.onModalCancel,onGroupIdInputChange:this.onGroupIdInputChange,groupId:a})}}]),a}(p.PureComponent),V=Object(M.f)(J);var z=m.a.memo((function(e){var t=e.groups,a=e.loading;return m.a.createElement("div",{className:g.a.Groups},m.a.createElement(f.a,null,m.a.createElement("div",{className:g.a.title},"\u5c0f\u7ec4",m.a.createElement(V,null))),m.a.createElement("div",{className:g.a.groupListWrapper},m.a.createElement(v.a,{groups:t,loading:a})))})),T=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).loadGroups=Object(i.a)(r.a.mark((function e(){var t,a,i,u;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props.match.params,a=t.username,i=t.repository,n.setState({loading:!0}),e.next=4,N.d.getByRepository({username:a,name:i});case 4:null!==(u=e.sent)&&n.setState({groups:Object(o.a)(u)}),n.setState({loading:!1});case 7:case"end":return e.stop()}}),e)}))),n.state={groups:[],loading:!0},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loadGroups();case 2:w.on(F,this.loadGroups);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){w.removeListener(F,this.loadGroups)}},{key:"render",value:function(){var e=this.state,t=e.groups,a=e.loading;return m.a.createElement(z,{groups:t,loading:a})}}]),a}(p.PureComponent),L=Object(M.f)(T)}}]);
//# sourceMappingURL=16.e0d931b0.chunk.js.map