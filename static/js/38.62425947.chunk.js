(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[38],{1164:function(e,t,n){e.exports={Members:"Style_Members__1A1TA",topArea:"Style_topArea__2Rqcb",cardContent:"Style_cardContent__3XM0M",titleWrapper:"Style_titleWrapper__30lrm",name:"Style_name__35BXt",isAdminTagWrapper:"Style_isAdminTagWrapper__h56El",isAdminTag:"Style_isAdminTag__3vPt2",avatarWrapper:"Style_avatarWrapper__31DG6",avatar:"Style_avatar__39V_0"}},1165:function(e,t,n){e.exports={modalContent:"Style_modalContent__2QoB9",usernameInput:"Style_usernameInput__2TSrf"}},1412:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return q}));var a={};n.r(a),n.d(a,"addMember",(function(){return L}));var r=n(222),s=n(1),o=n.n(s),i=n(3),c=n(12),u=n(14),m=n(34),l=n(33),d=n(0),p=n.n(d),f=n(97),v=n(1164),b=n.n(v),h=n(931),x=n(1440),k=n(193),A=n(927),g=n(932),C=n(933),w=n(920),S=n(122),O=n(63),y=n(267),E=n(924),M=n(925),_=n(938),j=n(1165),P=n.n(j);var N=p.a.memo((function(e){var t=e.onClick,n=e.showModal,a=e.username,r=e.loading,s=e.onModalCancelClick,o=e.onModalOkClick,i=e.onUsernameChange;return p.a.createElement(p.a.Fragment,null,p.a.createElement(S.a,{type:"primary",onClick:t,loading:r,disabled:r},p.a.createElement(_.a,null),"\u6dfb\u52a0\u6210\u5458"),p.a.createElement(E.a,{destroyOnClose:!0,width:300,title:"\u6dfb\u52a0\u5c0f\u7ec4\u6210\u5458",visible:n,onOk:o,onCancel:s,confirmLoading:r},p.a.createElement("div",{className:P.a.modalContent},p.a.createElement(M.a,{value:a,onChange:i,autoFocus:!0,placeholder:"\u65b0\u5c0f\u7ec4\u6210\u5458\u7684\u7528\u6237\u540d",className:P.a.usernameInput}))))})),I=n(115),W=n(62),R=n(27),T=n(167),U=n(336),D=new(n(150).EventEmitter),L="addMember",B=function(e){Object(m.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).setStatePromise=Object(I.promisify)(r.setState),r.initModal=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.setStatePromise({username:""});case 1:case"end":return e.stop()}}),e)}))),r.onClick=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.setStatePromise({showModal:!0});case 2:return e.next=4,r.initModal();case 4:case"end":return e.stop()}}),e)}))),r.onModalOkClick=Object(i.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=r.props.match.params.id,n=r.state.username,T.b.Account.username(n)){e.next=6;break}U.a.error({message:"\u7528\u6237 ".concat(n," \u4e0d\u5b58\u5728")}),e.next=18;break;case 6:return e.next=8,r.setStatePromise({loading:!0});case 8:return e.next=10,R.d.addAccount({id:Number.parseInt(t)},{username:n});case 10:if(null===e.sent){e.next=16;break}return U.a.success({message:"\u6dfb\u52a0\u6210\u5458 ".concat(n," \u6210\u529f")}),e.next=15,r.setStatePromise({showModal:!1});case 15:D.emit(a.addMember);case 16:return e.next=18,r.setStatePromise({loading:!1});case 18:case"end":return e.stop()}}),e)}))),r.onModalCancelClick=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.setStatePromise({showModal:!1});case 2:case"end":return e.stop()}}),e)}))),r.onUsernameChange=function(e){r.setState({username:e.target.value})},r.state={showModal:!1,username:"",loading:!1},r}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.showModal,n=e.username,a=e.loading;return p.a.createElement(N,{loading:a,showModal:t,username:n,onClick:this.onClick,onModalCancelClick:this.onModalCancelClick,onModalOkClick:this.onModalOkClick,onUsernameChange:this.onUsernameChange})}}]),n}(d.PureComponent),F=Object(W.j)(B),z=n(225);var J=p.a.memo((function(e){var t=e.profiles,n=e.loading,a=e.isAdmin,r=e.adminUsernames,s=e.onSetAdminConfirm,o=e.onRemoveAccountConfirm,i=e.onRemoveAdminConfirm;return p.a.createElement("div",{className:b.a.Members},p.a.createElement("div",{className:b.a.topArea},p.a.createElement(h.a,{type:"info",showIcon:!0,message:"\u53ea\u6709\u5c0f\u7ec4\u6210\u5458\u53ef\u5c06\u4ed3\u5e93\u52a0\u5165\u5c0f\u7ec4"}),p.a.createElement("div",{className:b.a.addMemberButtonWrapper},a?p.a.createElement(F,null):null)),p.a.createElement(x.b,{loading:n,locale:{emptyText:p.a.createElement(k.a,{description:"\u6ca1\u6709\u6210\u5458"})},dataSource:Object(f.a)(t),renderItem:function(e){if(null!==e){var t=e.nickname,c=e.username,u=e.avatar;return p.a.createElement(A.a,{size:"small",key:c},p.a.createElement("div",{className:b.a.cardContent},p.a.createElement(y.a,{className:b.a.titleWrapper,to:O.Function.generatePersonalCenterRoute({username:c})},p.a.createElement("div",{className:b.a.avatarWrapper},p.a.createElement(z.a,{avatar:u})),p.a.createElement("div",{className:b.a.name},t,"(",c,")"),p.a.createElement("div",{className:b.a.isAdminTagWrapper},r.includes(c)?p.a.createElement(g.a,{color:"blue",className:b.a.isAdminTag},"\u7ba1\u7406\u5458"):null)),a?p.a.createElement("div",{className:b.a.buttonWrapper},p.a.createElement(C.b,{size:-1},r.includes(c)?p.a.createElement(w.a,{title:"\u786e\u8ba4\u64a4\u9500\u6210\u5458 ".concat(c," \u7684\u7ba1\u7406\u5458\u6743\u9650\uff1f"),onConfirm:i(c),disabled:n},p.a.createElement(S.a,{loading:n,disabled:n},"\u64a4\u9500\u7ba1\u7406\u5458")):p.a.createElement(w.a,{title:"\u786e\u8ba4\u8bbe\u7f6e\u6210\u5458 ".concat(c," \u4e3a\u7ba1\u7406\u5458\uff1f"),onConfirm:s(c),disabled:n},p.a.createElement(S.a,{type:"primary",loading:n,disabled:n},"\u8bbe\u4e3a\u7ba1\u7406\u5458")),p.a.createElement(w.a,{title:"\u786e\u8ba4\u79fb\u9664\u6210\u5458 ".concat(c,"\uff1f"),onConfirm:o(c),disabled:n},p.a.createElement(S.a,{type:"primary",danger:!0,loading:n,disabled:n},"\u79fb\u9664")))):null))}return null}}))})),X=function(e){Object(m.a)(n,e);var t=Object(l.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).setStatePromise=Object(I.promisify)(s.setState),s.onAddMemberListener=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.componentDidMount();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),s.removeAccount=function(){var e=Object(i.a)(o.a.mark((function e(t){var n,a,r,i,c,u,m;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.state,a=n.accounts,r=n.profiles,i=n.admins,c=a.filter((function(e){return e.username!==t})),u=r.filter((function(e){return null!==e&&e.username!==t})),m=i.filter((function(e){return e.username!==t})),e.next=6,s.setStatePromise({accounts:c,profiles:u,admins:m});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s.addAdmin=function(){var e=Object(i.a)(o.a.mark((function e(t){var n,a,i,c,u,m,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=s.state,a=n.accounts,i=n.admins,c=Array.from(i),u=Object(r.a)(a),e.prev=3,u.s();case 5:if((m=u.n()).done){e.next=12;break}if((l=m.value).username!==t){e.next=10;break}return c.push(l),e.abrupt("break",12);case 10:e.next=5;break;case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(3),u.e(e.t0);case 17:return e.prev=17,u.f(),e.finish(17);case 20:return e.next=22,s.setStatePromise({admins:c});case 22:case"end":return e.stop()}}),e,null,[[3,14,17,20]])})));return function(t){return e.apply(this,arguments)}}(),s.removeAdmin=function(){var e=Object(i.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.state.admins,a=n.filter((function(e){return e.username!==t})),e.next=4,s.setStatePromise({admins:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s.loadIsAdmin=Object(i.a)(o.a.mark((function e(){var t,n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.props.match.params.id,e.next=3,R.d.isAdmin({id:Number.parseInt(t)});case 3:if(null===(n=e.sent)){e.next=8;break}return a=n.isAdmin,e.next=8,s.setStatePromise({isAdmin:a});case 8:case"end":return e.stop()}}),e)}))),s.loadAccounts=Object(i.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.props.match.params.id,e.next=3,R.d.accounts({id:Number.parseInt(t)});case 3:if(null===(n=e.sent)){e.next=7;break}return e.next=7,s.setStatePromise({accounts:n});case 7:case"end":return e.stop()}}),e)}))),s.loadAdmins=Object(i.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.props.match.params.id,e.next=3,R.d.admins({id:Number.parseInt(t)});case 3:if(null===(n=e.sent)){e.next=7;break}return e.next=7,s.setStatePromise({admins:n});case 7:case"end":return e.stop()}}),e)}))),s.loadProfiles=Object(i.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.state.accounts,e.next=3,Promise.all(t.map((function(e){var t=e.username;return R.g.get({username:t})})));case 3:return n=e.sent,e.next=6,s.setStatePromise({profiles:n});case 6:case"end":return e.stop()}}),e)}))),s.onRemoveAccountConfirm=function(e){var t=s.props.match.params.id;return Object(i.a)(o.a.mark((function n(){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.setStatePromise({loading:!0});case 2:return n.next=4,R.d.removeAccounts({id:Number.parseInt(t)},[e]);case 4:if(null===n.sent){n.next=9;break}return U.a.success({message:"\u79fb\u9664\u6210\u5458\u6210\u529f"}),n.next=9,s.removeAccount(e);case 9:return n.next=11,s.setStatePromise({loading:!1});case 11:case"end":return n.stop()}}),n)})))},s.onSetAdminConfirm=function(e){var t=s.props.match.params.id;return Object(i.a)(o.a.mark((function n(){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.setStatePromise({loading:!0});case 2:return n.next=4,R.d.addAdmin({id:Number.parseInt(t)},{username:e});case 4:if(null===n.sent){n.next=9;break}return U.a.success({message:"\u6210\u529f\u8bbe\u7f6e ".concat(e," \u4e3a\u7ba1\u7406\u5458")}),n.next=9,s.addAdmin(e);case 9:return n.next=11,s.setStatePromise({loading:!1});case 11:case"end":return n.stop()}}),n)})))},s.onRemoveAdminConfirm=function(e){var t=s.props.match.params.id;return Object(i.a)(o.a.mark((function n(){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.setStatePromise({loading:!0});case 2:return n.next=4,R.d.removeAdmins({id:Number.parseInt(t)},[e]);case 4:if(null===n.sent){n.next=9;break}return U.a.success({message:"\u6210\u529f\u64a4\u9500 ".concat(e," \u7684\u7ba1\u7406\u5458\u8eab\u4efd")}),n.next=9,s.removeAdmin(e);case 9:return n.next=11,s.setStatePromise({loading:!1});case 11:case"end":return n.stop()}}),n)})))},s.state={accounts:[],admins:[],profiles:[],loading:!0,isAdmin:!1},D.on(a.addMember,s.onAddMemberListener),s}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setStatePromise({loading:!0});case 2:return e.next=4,Promise.all([this.loadAccounts(),this.loadAdmins(),this.loadIsAdmin()]);case 4:return e.next=6,this.loadProfiles();case 6:return e.next=8,this.setStatePromise({loading:!1});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(i.a)(o.a.mark((function e(t,n,a){var r,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.props.match.params.id,s=t.match.params.id,r===s){e.next=5;break}return e.next=5,this.componentDidMount();case 5:case"end":return e.stop()}}),e,this)})));return function(t,n,a){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){D.removeListener(a.addMember,this.onAddMemberListener)}},{key:"render",value:function(){var e=this.state,t=e.profiles,n=e.loading,a=e.isAdmin,r=e.admins;return p.a.createElement(J,{profiles:t,loading:n,isAdmin:a,adminUsernames:r.map((function(e){return e.username})),onRemoveAccountConfirm:this.onRemoveAccountConfirm,onSetAdminConfirm:this.onSetAdminConfirm,onRemoveAdminConfirm:this.onRemoveAdminConfirm})}}]),n}(d.PureComponent),q=Object(W.j)(X)}}]);
//# sourceMappingURL=38.62425947.chunk.js.map