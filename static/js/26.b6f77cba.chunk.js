(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[26],{1005:function(e,t,a){"use strict";var n=a(963);a.d(t,"a",(function(){return n.a}))},1174:function(e,t,a){e.exports={Repository:"Style_Repository__3C5oN",header:"Style_header__2LCJa",tabContent:"Style_tabContent__1JPyK",basicInfo:"Style_basicInfo__1CY_5",tagAndRepository:"Style_tagAndRepository__Vlrba",tag:"Style_tag__2txb4",usernameAndName:"Style_usernameAndName__21Dhj",forkFrom:"Style_forkFrom__gove8",text:"Style_text__3RKOo",buttonArea:"Style_buttonArea__WAwmq",buttonWrapper:"Style_buttonWrapper__3rI5T",tab:"Style_tab__2Ycb5"}},1175:function(e,t,a){},1407:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return X}));var n,r=a(1),s=a.n(r),c=a(3),o=a(85),u=a(0),i=a.n(u),l=a(1174),m=a.n(l),f=a(334),p=a(932),d=a(1005),b=a(19),E=a(63);!function(e){e.CODE="CODE",e.ISSUES="ISSUES",e.PULL_REQUESTS="PULL_REQUESTS",e.SETTINGS="SETTINGS"}(n||(n={}));var S=n,v=a(12),h=a(14),y=a(34),g=a(33),O=a(1175),k=a.n(O),j=a(933),x=a(122),N=a(190),_=a(78),w=a(946);var A=i.a.memo((function(e){var t=e.onClick,a=e.forkAmount,n=e.loading;return i.a.createElement(j.b,{className:k.a.ForkButton,size:-1},i.a.createElement(x.a,{onClick:t,disabled:n,loading:n,size:"small"},i.a.createElement(w.a,null),"Fork"),i.a.createElement(N.a,{title:a},i.a.createElement(x.a,{disabled:n,size:"small"},_.d.getNumberAbbreviation(a))))})),R=a(27),C=a(62),P=a(336),T=function(e){Object(y.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(v.a)(this,a),(n=t.call(this,e)).loadForkAmount=Object(c.a)(s.a.mark((function e(){var t,a,r,c,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props.match.params,a=t.username,r=t.repositoryName,e.next=3,R.j.forkAmount({username:a,name:r});case 3:null!==(c=e.sent)&&(o=c.amount,n.setState({forkAmount:o}));case 5:case"end":return e.stop()}}),e)}))),n.onClick=Object(c.a)(s.a.mark((function e(){var t,a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({loading:!0}),t=n.props.match.params,a=t.username,r=t.repositoryName,e.next=4,R.i.fork({username:a,name:r});case 4:null!==e.sent&&P.a.success({message:"fork \u6210\u529f",description:"\u53ef\u524d\u5f80\u4e2a\u4eba\u4e2d\u5fc3\u4ed3\u5e93\u5217\u8868\u67e5\u770b"}),n.setState({loading:!1});case 7:case"end":return e.stop()}}),e)}))),n.state={forkAmount:0,loading:!1},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=Object(c.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,this.loadForkAmount();case 3:this.setState({loading:!1});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.forkAmount,a=e.loading;return i.a.createElement(A,{onClick:this.onClick,forkAmount:t,loading:a})}}]),a}(u.PureComponent),I=Object(C.j)(T),L=a(948),F={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z"}}]},name:"exclamation-circle",theme:"outlined"},U=a(17),D=function(e,t){return u.createElement(U.a,Object.assign({},e,{ref:t,icon:F}))};D.displayName="ExclamationCircleOutlined";var z=u.forwardRef(D),M=a(952),G=a(941),Q=a(970),q=a(115),B=function(e){Object(y.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(v.a)(this,a),(n=t.call(this,e)).setStatePromise=Object(q.promisify)(n.setState),n.loadHasStared=Object(c.a)(s.a.mark((function e(){var t,a,r,c,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props.match.params,a=t.username,r=t.repositoryName,e.next=3,R.k.isStaredRepository({username:a,name:r});case 3:if(null===(c=e.sent)){e.next=8;break}return o=c.isStared,e.next=8,n.setStatePromise({hasStared:o});case 8:case"end":return e.stop()}}),e)}))),n.loadStarAmount=Object(c.a)(s.a.mark((function e(){var t,a,r,c,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props.match.params,a=t.username,r=t.repositoryName,e.next=3,R.k.getRepositoryStarAmount({username:a,name:r});case 3:if(null===(c=e.sent)){e.next=8;break}return o=c.amount,e.next=8,n.setStatePromise({starAmount:o});case 8:case"end":return e.stop()}}),e)}))),n.onClick=Object(c.a)(s.a.mark((function e(){var t,a,r,c,o,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state,a=t.hasStared,r=t.starAmount,c=n.props.match.params,o=c.username,u=c.repositoryName,e.next=4,n.setStatePromise({loading:!0});case 4:if(!a){e.next=13;break}return e.next=7,R.k.remove({username:o,name:u});case 7:if(null===e.sent){e.next=11;break}return e.next=11,n.setStatePromise({hasStared:!1,starAmount:r-1});case 11:e.next=19;break;case 13:return e.next=15,R.k.add({username:o,name:u});case 15:if(null===e.sent){e.next=19;break}return e.next=19,n.setStatePromise({hasStared:!0,starAmount:r+1});case 19:return e.next=21,n.setStatePromise({loading:!1});case 21:case"end":return e.stop()}}),e)}))),n.state={hasStared:!1,starAmount:0,loading:!1},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=Object(c.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setStatePromise({loading:!0});case 2:return e.next=4,Promise.all([this.loadHasStared(),this.loadStarAmount()]);case 4:return e.next=6,this.setStatePromise({loading:!1});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(c.a)(s.a.mark((function e(t,a,n){var r,c,o,u,i,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.props.match.params,c=r.username,o=r.repositoryName,u=t.match.params,i=u.username,l=u.repositoryName,c===i&&o===l){e.next=5;break}return e.next=5,this.componentDidMount();case 5:case"end":return e.stop()}}),e,this)})));return function(t,a,n){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.hasStared,a=e.loading,n=e.starAmount;return i.a.createElement(Q.a,{hasStared:t,loading:a,starAmount:n,onClick:this.onClick})}}]),a}(u.PureComponent),K=Object(C.j)(B),W=a(53);var H=i.a.memo(Object(W.b)((function(e){return{isLoggedIn:e.Root.isLoggedIn}}))((function(e){var t=e.repository,a=t.username,n=t.name,r=t.isPublic,s=e.forkFrom,c=e.loading,o=e.onTabChange,u=e.tabActiveKey,l=e.showSettings,v=e.children,h=e.openPullRequestAmount,y=e.openIssueAmount,g=e.isLoggedIn;return c?null:i.a.createElement("div",{className:m.a.Repository},i.a.createElement("div",{className:m.a.header},i.a.createElement("div",{className:m.a.basicInfo},i.a.createElement("div",{className:m.a.tagAndRepository},i.a.createElement("div",{className:m.a.tag},i.a.createElement(d.a,{isPublic:r})),i.a.createElement("div",{className:m.a.usernameAndName},i.a.createElement(b.b,{to:E.Function.generatePersonalCenterRoute({username:a})},a)," / ",i.a.createElement(b.b,{to:E.Function.generateRepositoryCodeRoute({username:a,repositoryName:n})},i.a.createElement("b",null,n)))),null===s?null:i.a.createElement("div",{className:m.a.forkFrom},i.a.createElement("div",{className:m.a.text},"fork \u81ea"),i.a.createElement(b.b,{to:E.Function.generatePersonalCenterRoute({username:s.username})},s.username)," / ",i.a.createElement(b.b,{to:E.Function.generateRepositoryCodeRoute({username:s.username,repositoryName:s.name})},i.a.createElement("b",null,s.name)))),i.a.createElement("div",{className:m.a.buttonArea},g?i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:m.a.buttonWrapper},i.a.createElement(K,null)),i.a.createElement("div",{className:m.a.buttonWrapper},i.a.createElement(I,null))):null)),i.a.createElement(f.a,{defaultActiveKey:S.CODE,type:"card",className:m.a.tab,tabBarStyle:{padding:"0 calc(50% - 500px)",margin:"0"},onChange:o,activeKey:u},i.a.createElement(f.a.TabPane,{tab:i.a.createElement(i.a.Fragment,null,i.a.createElement(L.a,null),"\u4ee3\u7801"),key:S.CODE},i.a.createElement("div",{className:m.a.tabContent},v)),i.a.createElement(f.a.TabPane,{tab:i.a.createElement(i.a.Fragment,null,i.a.createElement(z,null),"Issues ",i.a.createElement(p.a,{className:m.a.tag},y)),key:S.ISSUES},i.a.createElement("div",{className:m.a.tabContent},v)),i.a.createElement(f.a.TabPane,{tab:i.a.createElement(i.a.Fragment,null,i.a.createElement(M.a,null),"Pull Requests ",i.a.createElement(p.a,{className:m.a.tag},h)),key:S.PULL_REQUESTS},i.a.createElement("div",{className:m.a.tabContent},v)),l?i.a.createElement(f.a.TabPane,{tab:i.a.createElement(i.a.Fragment,null,i.a.createElement(G.a,null),"\u8bbe\u7f6e"),key:S.SETTINGS},i.a.createElement("div",{className:m.a.tabContent},v)):null))}))),J=a(149),Y=a(2),V=a(21);var X=i.a.memo((function(e){var t=Object(u.useState)(new J.i("","","",!0)),a=Object(o.a)(t,2),n=a[0],r=a[1],l=Object(u.useState)(!1),m=Object(o.a)(l,2),f=m[0],p=m[1],d=Object(u.useState)(S.CODE),b=Object(o.a)(d,2),v=b[0],h=b[1],y=Object(u.useState)(null),g=Object(o.a)(y,2),O=g[0],k=g[1],j=Object(u.useState)(0),x=Object(o.a)(j,2),N=x[0],_=x[1],w=Object(u.useState)(0),A=Object(o.a)(w,2),P=A[0],T=A[1],I=Object(u.useState)(!1),L=Object(o.a)(I,2),F=L[0],U=L[1],D=Object(C.f)(),z=Object(C.h)(),M=z.objectType,G=z.commitHash,Q=z.username,q=z.repositoryName,B=Object(C.i)().path,K=Object(W.d)((function(e){return e.Root})).isLoggedIn;Object(u.useEffect)((function(){void 0!==M&&void 0===G&&D.replace(Y.d[Y.b.NOT_FOUND])}),[M,G,D]),Object(u.useEffect)((function(){document.title="".concat(Q,"/").concat(q," - ").concat(Y.a)}),[Q,q]),Object(u.useLayoutEffect)((function(){var e=function(){var e=Object(c.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.i.shouldShowOptions({username:Q,name:q});case 2:null!==(t=e.sent)&&(a=t.showOptions,U(a));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();p(!0),e().finally((function(){return p(!1)}))}),[Q,q,K]),Object(u.useLayoutEffect)((function(){var e=Y.b.REPOSITORY,t=e.REPOSITORY,a=e.CODE,n=e.ISSUES,r=e.ISSUE,s=e.CREATE_ISSUE,c=e.PULL_REQUESTS,o=e.PULL_REQUEST,u=e.SETTINGS,i=e.CONFLICT;switch(B){case Y.d[a]:case Y.d[t]:h(S.CODE);break;case Y.d[s]:case Y.d[r]:case Y.d[n]:h(S.ISSUES);break;case Y.d[o]:case Y.d[c]:case Y.d[i]:h(S.PULL_REQUESTS);break;case Y.d[u.SETTINGS]:h(S.SETTINGS)}}),[B]),Object(u.useEffect)((function(){var e=function(){var e=Object(c.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.j.repository({username:Q},{name:q});case 2:if(null===(t=e.sent)){e.next=7;break}r(t),e.next=8;break;case 7:return e.abrupt("return",D.replace(Y.d[Y.b.NOT_FOUND]));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();p(!0),e().finally((function(){return p(!1)}))}),[Q,q,D]),Object(u.useEffect)((function(){var e=function(){var e=Object(c.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.j.forkFrom({username:Q,name:q});case 2:null!==(t=e.sent)&&(a=t.repository,k(a));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();p(!0),e().finally((function(){return p(!1)}))}),[Q,q]),Object(u.useEffect)((function(){var e=function(){var e=Object(c.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.h.getPullRequestAmount({username:Q,name:q},V.c.OPEN);case 2:null!==(t=e.sent)&&(a=t.amount,_(a));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();p(!0),e().finally((function(){return p(!1)}))}),[Q,q]),Object(u.useEffect)((function(){var e=function(){var e=Object(c.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.e.getAmountByRepository({username:Q,name:q},V.a.OPEN);case 2:null!==(t=e.sent)&&(a=t.amount,T(a));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();p(!0),e().finally((function(){return p(!1)}))}),[Q,q]);var X=e.children;return i.a.createElement(H,{showSettings:F,repository:n,loading:f,onTabChange:function(e){switch(e){case S.CODE:return D.push(E.Function.generateRepositoryCodeRoute({username:Q,repositoryName:q}));case S.ISSUES:return D.push(E.Function.generateRepositoryIssuesRoute({username:Q,repositoryName:q}));case S.PULL_REQUESTS:return D.push(E.Function.generateRepositoryPullRequestsRoute({username:Q,repositoryName:q}));case S.SETTINGS:return D.push(E.Function.generateRepositorySettingsRoute({username:Q,repositoryName:q}));default:return}},tabActiveKey:v,forkFrom:O,openPullRequestAmount:N,openIssueAmount:P},X)}))},963:function(e,t,a){"use strict";var n=a(224),r=a(0),s=a.n(r),c=a(932),o=a(966),u=a.n(o);t.a=s.a.memo((function(e){var t=e.isPublic,a=Object(n.a)(e,["isPublic"]);return t?s.a.createElement(c.a,Object.assign({className:u.a.AccessibilityTag,color:"blue"},a),"\u516c\u5f00"):s.a.createElement(c.a,Object.assign({className:u.a.AccessibilityTag,color:"gold"},a),"\u79c1\u4eba")}))},966:function(e,t,a){e.exports={AccessibilityTag:"Style_AccessibilityTag__4cAHc"}},970:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var n=a(1),r=a.n(n),s=a(3),c=a(0),o=a.n(c),u=a(933),i=a(122),l=a(190),m={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"}}]},name:"star",theme:"filled"},f=a(17),p=function(e,t){return c.createElement(f.a,Object.assign({},e,{ref:t,icon:m}))};p.displayName="StarFilled";var d=c.forwardRef(p),b={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"}}]},name:"star",theme:"outlined"},E=function(e,t){return c.createElement(f.a,Object.assign({},e,{ref:t,icon:b}))};E.displayName="StarOutlined";var S=c.forwardRef(E),v=a(78);var h=o.a.memo((function(e){var t=e.hasStared,a=e.starAmount,n=e.loading,c=e.onClick;return o.a.createElement(u.b,{size:-1},o.a.createElement(i.a,{size:"small",onClick:function(){var e=Object(s.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),"function"!==typeof c){e.next=4;break}return e.next=4,c(t);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),loading:n,disabled:n},t?o.a.createElement(o.a.Fragment,null,o.a.createElement(d,null)," Unstar"):o.a.createElement(o.a.Fragment,null,o.a.createElement(S,null)," Star")),o.a.createElement(l.a,{title:a},o.a.createElement(i.a,{size:"small",onClick:function(){var e=Object(s.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.preventDefault());case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},v.d.getNumberAbbreviation(a))))}))}}]);
//# sourceMappingURL=26.b6f77cba.chunk.js.map