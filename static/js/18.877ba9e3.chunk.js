(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[18],{1020:function(s,u,t){s.exports={GroupList:"Style_GroupList__1GfzT",groupWrapper:"Style_groupWrapper__2nh8Q",groupName:"Style_groupName__1jfy7"}},1033:function(s,u,t){"use strict";var n=t(3),e=t(0),v={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M824.2 699.9a301.55 301.55 0 00-86.4-60.4C783.1 602.8 812 546.8 812 484c0-110.8-92.4-201.7-203.2-200-109.1 1.7-197 90.6-197 200 0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 00-86.4 60.4C345 754.6 314 826.8 312 903.8a8 8 0 008 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5A226.62 226.62 0 01612 684c60.9 0 118.2 23.7 161.3 66.8C814.5 792 838 846.3 840 904.3c.1 4.3 3.7 7.7 8 7.7h56a8 8 0 008-8.2c-2-77-33-149.2-87.8-203.9zM612 612c-34.2 0-66.4-13.3-90.5-37.5a126.86 126.86 0 01-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4 0 34.2-13.3 66.3-37.5 90.5A127.3 127.3 0 01612 612zM361.5 510.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 01-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.9-1.7-203.3 89.2-203.3 199.9 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 008 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.9-1 6.5-4.7 6-8.7z"}}]},name:"team",theme:"outlined"},c=v,h=t(9),m=function(S,G){return e.createElement(h.a,Object(n.a)(Object(n.a)({},S),{},{ref:G,icon:c}))};m.displayName="TeamOutlined";var f=u.a=e.forwardRef(m)},1034:function(s,u,t){"use strict";t.d(u,"a",function(){return F});var n=t(0),e=t.n(n),v=t(1020),c=t.n(v),h=t(1428),m=t(180),f=t(965),E=t(969),S=t(49),G=t(1033),O=t(276);function T(J){const{groups:x,loading:V,administratingGroups:N}=J,A=N?N.map(({id:g})=>g):[];return e.a.createElement(h.b,{className:c.a.GroupList,loading:V,locale:{emptyText:e.a.createElement(m.a,{description:"\u6CA1\u6709\u5C0F\u7EC4"})},dataSource:[...x],renderItem:({id:g,name:M})=>e.a.createElement(O.a,{className:c.a.groupWrapper,to:S.Function.generateGroupRoute({id:g.toString()})},e.a.createElement(f.a,{className:c.a.group,size:"small"},e.a.createElement(f.a.Meta,{avatar:e.a.createElement(e.a.Fragment,null,e.a.createElement(G.a,null)," ",g),title:e.a.createElement(e.a.Fragment,null,e.a.createElement("div",{className:c.a.groupName},M),A.includes(g)?e.a.createElement(E.a,{color:"blue"},"\u7BA1\u7406\u5458"):null)})))})}var F=T},1103:function(s,u,t){s.exports={Groups:"Style_Groups__SOEcz",title:"Style_title__JtSKn"}},1104:function(s,u,t){},1105:function(s,u,t){s.exports={JoinGroupModal:"Style_JoinGroupModal__1HZ54",input:"Style_input__3ZSsS"}},1106:function(s,u,t){"use strict";/*!
 * is-number <https://github.com/jonschlinkert/is-number>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Released under the MIT License.
 */s.exports=function(n){return typeof n=="number"?n-n==0:typeof n=="string"&&n.trim()!==""?Number.isFinite?Number.isFinite(+n):isFinite(+n):!1}},1396:function(s,u,t){"use strict";t.r(u),t.d(u,"default",function(){return X});var n=t(0),e=t.n(n),v=t(1103),c=t.n(v),h=t(994),m=t(1034),f=t(1104),E=t.n(f),S=t(102),G=t(1105),O=t.n(G),T=t(961),F=t(960);function J(d){const{visible:o,onCancel:a,onOk:l,groupId:i,onGroupIdInputChange:p}=d;return e.a.createElement(T.a,{title:"\u52A0\u5165\u5C0F\u7EC4",visible:o,onCancel:a,onOk:l,destroyOnClose:!0,className:O.a.JoinGroupModal,width:400},e.a.createElement("label",null,e.a.createElement(F.a,{placeholder:"\u5C0F\u7EC4\u7684 ID",className:O.a.input,value:i,onChange:p,autoFocus:!0})))}var x=e.a.memo(J),V=t(504);function N(d){const{modalVisible:o,onModalCancel:a,onModalOk:l,onClick:i,onGroupIdInputChange:p,groupId:I}=d;return e.a.createElement(e.a.Fragment,null,e.a.createElement(S.a,{type:"primary",className:E.a.JoinGroupButton,onClick:i},e.a.createElement(V.a,null),"\u52A0\u5165"),e.a.createElement(x,{visible:o,onOk:l,onCancel:a,groupId:I,onGroupIdInputChange:p}))}var A=e.a.memo(N),g=t(1106),M=t.n(g),P=t(27),j=t(47),z=t(345),R=t(135),B=new R.EventEmitter;const L=Symbol();var W=(d,o,a)=>new Promise((l,i)=>{var p=r=>{try{y(a.next(r))}catch(C){i(C)}},I=r=>{try{y(a.throw(r))}catch(C){i(C)}},y=r=>r.done?l(r.value):Promise.resolve(r.value).then(p,I);y((a=a.apply(d,o)).next())});class U extends n.PureComponent{constructor(o){super(o);this.onClick=()=>{this.setState({modalVisible:!0,groupId:""})},this.onGroupIdInputChange=a=>{const{value:l}=a.target;(l===""||M()(l))&&this.setState({groupId:l})},this.onModalOk=()=>W(this,null,function*(){const{groupId:a}=this.state;if(!M()(a))z.a.warn({message:"\u5C0F\u7EC4 ID \u5FC5\u987B\u662F\u6570\u5B57"});else{const{match:{params:{repositoryName:l,username:i}}}=this.props;(yield P.d.addRepository({username:i,name:l},{id:Number.parseInt(a)}))!==null&&(z.a.success({message:"\u52A0\u5165\u5C0F\u7EC4\u6210\u529F"}),B.emit(L),this.setState({modalVisible:!1}))}}),this.onModalCancel=()=>{this.setState({modalVisible:!1})},this.state={modalVisible:!1,groupId:""}}render(){const{modalVisible:o,groupId:a}=this.state;return e.a.createElement(A,{modalVisible:o,onClick:this.onClick,onModalOk:this.onModalOk,onModalCancel:this.onModalCancel,onGroupIdInputChange:this.onGroupIdInputChange,groupId:a})}}var Z=Object(j.j)(U);function H(d){const{groups:o,loading:a}=d;return e.a.createElement("div",{className:c.a.Groups},e.a.createElement(h.a,null,e.a.createElement("div",{className:c.a.title},"\u5C0F\u7EC4",e.a.createElement(Z,null))),e.a.createElement("div",{className:c.a.groupListWrapper},e.a.createElement(m.a,{groups:o,loading:a})))}var K=e.a.memo(H),D=(d,o,a)=>new Promise((l,i)=>{var p=r=>{try{y(a.next(r))}catch(C){i(C)}},I=r=>{try{y(a.throw(r))}catch(C){i(C)}},y=r=>r.done?l(r.value):Promise.resolve(r.value).then(p,I);y((a=a.apply(d,o)).next())});class Q extends n.PureComponent{constructor(o){super(o);this.loadGroups=()=>D(this,null,function*(){const{match:{params:{username:a,repositoryName:l}}}=this.props;this.setState({loading:!0});const i=yield P.d.getByRepository({username:a,name:l});i!==null&&this.setState({groups:[...i]}),this.setState({loading:!1})}),this.state={groups:[],loading:!0}}componentDidMount(){return D(this,null,function*(){yield this.loadGroups(),B.on(L,this.loadGroups)})}componentWillUnmount(){B.removeListener(L,this.loadGroups)}render(){const{groups:o,loading:a}=this.state;return e.a.createElement(K,{groups:o,loading:a})}}var X=Object(j.j)(Q)},993:function(s,u,t){s.exports={SettingsTitle:"Style_SettingsTitle__rgD4i"}},994:function(s,u,t){"use strict";t.d(u,"a",function(){return m});var n=t(0),e=t.n(n),v=t(993),c=t.n(v);function h(f){const{children:E}=f;return e.a.createElement("h2",{className:c.a.SettingsTitle},E)}var m=e.a.memo(h)}}]);

//# sourceMappingURL=18.877ba9e3.chunk.js.map