/*! For license information please see 15.0048ab70.chunk.js.LICENSE.txt */
(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[15],{1129:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(15);t.a=r.a.memo((function(e){return r.a.createElement(o.b,Object.assign({},e,{target:"_blank",rel:"noopener norefferrer"}))}))},1132:function(e,t,a){"use strict";var n=a(1129);a.d(t,"a",(function(){return n.a}))},1137:function(e,t,a){e.exports={SettingsTitle:"Style_SettingsTitle__rgD4i"}},1138:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(1137),i=a.n(o);var u=r.a.memo((function(e){var t=e.children;return r.a.createElement("h2",{className:i.a.SettingsTitle},t)}));a.d(t,"a",(function(){return u}))},1164:function(e,t,a){e.exports={GroupList:"Style_GroupList__1GfzT",groupWrapper:"Style_groupWrapper__2nh8Q",groupName:"Style_groupName__1jfy7"}},1177:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o={name:"team",theme:"outlined",icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M824.2 699.9a301.55 301.55 0 00-86.4-60.4C783.1 602.8 812 546.8 812 484c0-110.8-92.4-201.7-203.2-200-109.1 1.7-197 90.6-197 200 0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 00-86.4 60.4C345 754.6 314 826.8 312 903.8a8 8 0 008 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5A226.62 226.62 0 01612 684c60.9 0 118.2 23.7 161.3 66.8C814.5 792 838 846.3 840 904.3c.1 4.3 3.7 7.7 8 7.7h56a8 8 0 008-8.2c-2-77-33-149.2-87.8-203.9zM612 612c-34.2 0-66.4-13.3-90.5-37.5a126.86 126.86 0 01-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4 0 34.2-13.3 66.3-37.5 90.5A127.3 127.3 0 01612 612zM361.5 510.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 01-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.9-1.7-203.3 89.2-203.3 199.9 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 008 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.9-1 6.5-4.7 6-8.7z"}}]}},i=a(12),u=function(e,t){return r.a.createElement(i.a,Object.assign({},e,{ref:t,icon:o}))};u.displayName="TeamOutlined";t.a=r.a.forwardRef(u)},1178:function(e,t,a){"use strict";a(1135);var n=a(1134),r=(a(518),a(353)),o=(a(186),a(55)),i=a(270),u=(a(350),a(104)),s=a(0),c=a.n(s),l=a(1164),p=a.n(l),m=a(24),d=a(1177),g=a(1132);var f=function(e){var t=e.groups,a=e.loading,s=e.administratingGroups,l=s?s.map((function(e){return e.id})):[];return c.a.createElement(n.a,{className:p.a.GroupList,loading:a,locale:{emptyText:c.a.createElement(u.a,{description:"\u6ca1\u6709\u5c0f\u7ec4"})},dataSource:Object(i.a)(t),renderItem:function(e){var t=e.id,a=e.name;return c.a.createElement(g.a,{className:p.a.groupWrapper,to:m.Function.generateGroupRoute({id:t.toString()})},c.a.createElement(r.a,{className:p.a.group,size:"small"},c.a.createElement(r.a.Meta,{avatar:c.a.createElement(c.a.Fragment,null,c.a.createElement(d.a,null)," ",t),title:c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:p.a.groupName},a),l.includes(t)?c.a.createElement(o.a,{color:"blue"},"\u7ba1\u7406\u5458"):null)})))}})};a.d(t,"a",(function(){return f}))},1258:function(e,t,a){e.exports={Groups:"Style_Groups__SOEcz",title:"Style_title__JtSKn"}},1259:function(e,t,a){},1260:function(e,t,a){e.exports={JoinGroupModal:"Style_JoinGroupModal__1HZ54",input:"Style_input__3ZSsS"}},1261:function(e,t,a){"use strict";e.exports=function(e){return"number"===typeof e?e-e===0:"string"===typeof e&&""!==e.trim()&&(Number.isFinite?Number.isFinite(+e):isFinite(+e))}},1338:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),o=a(270),i=a(5),u=a(64),s=a(65),c=a(67),l=a(66),p=a(68),m=a(0),d=a.n(m),g=a(1258),f=a.n(g),v=a(1138),b=a(1178),h=(a(97),a(42)),E=(a(96),a(25)),O=a(1259),y=a.n(O),k=(a(519),a(356)),C=(a(517),a(348)),I=a(1260),S=a.n(I);var _=d.a.memo((function(e){const{visible:t,onCancel:a,onOk:n,groupId:r,onGroupIdInputChange:o}=e;return d.a.createElement(k.a,{title:"\u52a0\u5165\u5c0f\u7ec4",visible:t,onCancel:a,onOk:n,destroyOnClose:!0,className:S.a.JoinGroupModal,width:400},d.a.createElement("label",null,d.a.createElement(C.a,{placeholder:"\u5c0f\u7ec4\u7684 ID",className:S.a.input,value:r,onChange:o,autoFocus:!0})))})),G=a(1106);var j=d.a.memo((function(e){const{modalVisible:t,onModalCancel:a,onModalOk:n,onClick:r,onGroupIdInputChange:o,groupId:i}=e;return d.a.createElement(d.a.Fragment,null,d.a.createElement(E.a,{type:"primary",className:y.a.JoinGroupButton,onClick:r},d.a.createElement(G.a,null),"\u52a0\u5165"),d.a.createElement(_,{visible:t,onOk:n,onCancel:a,groupId:i,onGroupIdInputChange:o}))})),N=a(1261),M=a.n(N),x=a(38),w=a(136),F=new(a(273).EventEmitter);const J=Symbol();var V=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).onClick=function(){a.setState({modalVisible:!0,groupId:""})},a.onGroupIdInputChange=function(e){var t=e.target.value;(""===t||M()(t))&&a.setState({groupId:t})},a.onModalOk=Object(i.a)(r.a.mark((function e(){var t,n,o,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a.state.groupId,M()(t)){e.next=5;break}h.a.warn({message:"\u5c0f\u7ec4 ID \u5fc5\u987b\u662f\u6570\u5b57"}),e.next=10;break;case 5:return n=a.props.match.params,o=n.repository,i=n.username,e.next=8,x.c.addRepository({username:i,name:o},{id:Number.parseInt(t)});case 8:null!==e.sent&&(h.a.success({message:"\u52a0\u5165\u5c0f\u7ec4\u6210\u529f"}),F.emit(J),a.setState({modalVisible:!1}));case 10:case"end":return e.stop()}}),e)}))),a.onModalCancel=function(){a.setState({modalVisible:!1})},a.state={modalVisible:!1,groupId:""},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.modalVisible,a=e.groupId;return d.a.createElement(j,{modalVisible:t,onClick:this.onClick,onModalOk:this.onModalOk,onModalCancel:this.onModalCancel,onGroupIdInputChange:this.onGroupIdInputChange,groupId:a})}}]),t}(m.PureComponent),z=Object(w.f)(V);var T=d.a.memo((function(e){const{groups:t,loading:a}=e;return d.a.createElement("div",{className:f.a.Groups},d.a.createElement(v.a,null,d.a.createElement("div",{className:f.a.title},"\u5c0f\u7ec4",d.a.createElement(z,null))),d.a.createElement("div",{className:f.a.groupListWrapper},d.a.createElement(b.a,{groups:t,loading:a})))})),L=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).loadGroups=Object(i.a)(r.a.mark((function e(){var t,n,i,u;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.match.params,n=t.username,i=t.repository,a.setState({loading:!0}),e.next=4,x.c.getByRepository({username:n,name:i});case 4:null!==(u=e.sent)&&a.setState({groups:Object(o.a)(u)}),a.setState({loading:!1});case 7:case"end":return e.stop()}}),e)}))),a.state={groups:[],loading:!0},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loadGroups();case 2:F.on(J,this.loadGroups);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){F.removeListener(J,this.loadGroups)}},{key:"render",value:function(){var e=this.state,t=e.groups,a=e.loading;return d.a.createElement(T,{groups:t,loading:a})}}]),t}(m.PureComponent),W=Object(w.f)(L);a.d(t,"default",(function(){return W}))}}]);
//# sourceMappingURL=15.0048ab70.chunk.js.map