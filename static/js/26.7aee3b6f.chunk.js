(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[26],{1191:function(e,a,t){e.exports={menuWrapper:"Style_menuWrapper__2m-La",menu:"Style_menu__1IHB3",menuItem:"Style_menuItem__3fZXi",checkIconWrapper:"Style_checkIconWrapper__e6U-7",name:"Style_name__1yAds",fullListLinkWrapper:"Style_fullListLinkWrapper__11lpU"}},1198:function(e,a,t){"use strict";t.d(a,"a",(function(){return j}));var n=t(11),r=t(12),c=t(21),s=t(20),i=t(0),o=t.n(i),m=t(94),l=t(218),u=t(1191),p=t.n(u),h=t(523),f=t(1129),v=t(187),d=t(108),b=t(1214),g={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M938 458.8l-29.6-312.6c-1.5-16.2-14.4-29-30.6-30.6L565.2 86h-.4c-3.2 0-5.7 1-7.6 2.9L88.9 557.2a9.96 9.96 0 000 14.1l363.8 363.8c1.9 1.9 4.4 2.9 7.1 2.9s5.2-1 7.1-2.9l468.3-468.3c2-2.1 3-5 2.8-8zM459.7 834.7L189.3 564.3 589 164.6 836 188l23.4 247-399.7 399.7zM680 256c-48.5 0-88 39.5-88 88s39.5 88 88 88 88-39.5 88-88-39.5-88-88-88zm0 120c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"}}]},name:"tag",theme:"outlined"},y=t(18),E=function(e,a){return i.createElement(y.a,Object.assign({},e,{ref:a,icon:g}))};E.displayName="TagOutlined";var k=i.forwardRef(E),O=t(1200),N=t(1147),_=t(1141),x=t(25),C=t(19),M=t(63);var B=o.a.memo(Object(M.f)((function(e){var a=o.a.createElement(b.a,null),t=o.a.createElement(k,null),n=o.a.createElement(O.a,null),r=e.branches,c=e.tagNames,s=e.visible,i=e.currentBranchOrTagOrCommitHash,u=e.onButtonClick,g=e.onBranchOrTagClickFactory,y=e.match.params,E=y.username,M=y.repositoryName,B=r.map((function(e){return e.name})),j=B.includes(i),S=c.includes(i),P=j?a:S?t:n,T=[],w=[];if(j){T.push(i);var L,I=1,W=Object(l.a)(B);try{for(W.s();!(L=W.n()).done;){var z=L.value;if(10===I)break;z!==i&&(T.push(z),I++)}}catch(V){W.e(V)}finally{W.f()}}else T.push.apply(T,Object(m.a)(B.slice(0,10)));if(S){w.push(i);var H,R=1,F=Object(l.a)(c);try{for(F.s();!(H=F.n()).done;){var A=H.value;if(10===R)break;A!==i&&(w.push(A),R++)}}catch(V){F.e(V)}finally{F.f()}}else w.push.apply(w,Object(m.a)(c.slice(0,10)));return o.a.createElement("div",{className:p.a.BranchOrTagMenu},o.a.createElement(h.a,{placement:"bottomLeft",visible:s,trigger:["click"],content:o.a.createElement("div",{className:p.a.menuWrapper},o.a.createElement(f.a,{defaultOpenKeys:["branch"],selectedKeys:[i],selectable:!1,className:p.a.menu,mode:"inline",inlineIndent:12,forceSubMenuRender:!0},o.a.createElement(f.a.SubMenu,{title:o.a.createElement("b",null,"\u5206\u652f"),key:"branch",icon:a},0===r.length?o.a.createElement(v.a,{description:"\u6682\u65e0\u5206\u652f",image:v.a.PRESENTED_IMAGE_SIMPLE}):T.map((function(e){return o.a.createElement(f.a.Item,{onClick:g(e),key:e},o.a.createElement("div",{className:p.a.menuItem},o.a.createElement("span",{className:p.a.checkIconWrapper},i===e?o.a.createElement(N.a,null):null),o.a.createElement("span",{className:p.a.name},e)))}))),o.a.createElement(f.a.Divider,null),o.a.createElement(f.a.Item,null,o.a.createElement("div",{className:p.a.fullListLinkWrapper},o.a.createElement(C.b,{to:x.Function.generateRepositoryBranchesRoute({username:E,repositoryName:M})},"\u67e5\u770b\u6240\u6709\u5206\u652f"))),o.a.createElement(f.a.Divider,null),o.a.createElement(f.a.SubMenu,{title:o.a.createElement("b",null,"\u6807\u7b7e"),key:"tag",icon:t},0===c.length?o.a.createElement(v.a,{description:"\u6682\u65e0\u6807\u7b7e",image:v.a.PRESENTED_IMAGE_SIMPLE}):w.map((function(e){return o.a.createElement(f.a.Item,{onClick:g(e),key:e},o.a.createElement("div",{className:p.a.menuItem},o.a.createElement("span",{className:p.a.checkIconWrapper},i===e?o.a.createElement(N.a,null):null),o.a.createElement("span",{className:p.a.name},e)))}))),o.a.createElement(f.a.Item,null,o.a.createElement("div",{className:p.a.fullListLinkWrapper},o.a.createElement(C.b,{to:x.Function.generateRepositoryTagsRoute({username:E,repositoryName:M})},"\u67e5\u770b\u6240\u6709\u6807\u7b7e")))))},o.a.createElement(d.a,{onClick:u},P,i,o.a.createElement(_.a,null))))}))),j=function(e){Object(c.a)(t,e);var a=Object(s.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).onButtonClick=function(){var e=r.state.visible;r.setState({visible:!e})},r.onBranchOrTagClickFactory=function(e){var a=r.props.onBranchOrTagClickFactory;return function(t){r.setState({visible:!1});var n=a(e);n&&n(t)}},r.state={visible:!1},r}return Object(r.a)(t,[{key:"render",value:function(){var e=this.props,a=e.branches,t=e.tagNames,n=e.currentBranchOrTagOrCommitHash,r=this.state.visible;return o.a.createElement(B,{visible:r,tagNames:t,branches:a,currentBranchOrTagOrCommitHash:n,onBranchOrTagClickFactory:this.onBranchOrTagClickFactory,onButtonClick:this.onButtonClick})}}]),t}(i.PureComponent)},1200:function(e,a,t){"use strict";var n=t(0),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M120 160H72c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V168c0-4.4-3.6-8-8-8zm833 0h-48c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V168c0-4.4-3.6-8-8-8zM200 736h112c4.4 0 8-3.6 8-8V168c0-4.4-3.6-8-8-8H200c-4.4 0-8 3.6-8 8v560c0 4.4 3.6 8 8 8zm321 0h48c4.4 0 8-3.6 8-8V168c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v560c0 4.4 3.6 8 8 8zm126 0h178c4.4 0 8-3.6 8-8V168c0-4.4-3.6-8-8-8H647c-4.4 0-8 3.6-8 8v560c0 4.4 3.6 8 8 8zm-255 0h48c4.4 0 8-3.6 8-8V168c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v560c0 4.4 3.6 8 8 8zm-79 64H201c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm257 0h-48c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm256 0H648c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h178c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm-385 0h-48c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}}]},name:"barcode",theme:"outlined"},c=t(18),s=function(e,a){return n.createElement(c.a,Object.assign({},e,{ref:a,icon:r}))};s.displayName="BarcodeOutlined";a.a=n.forwardRef(s)},1214:function(e,a,t){"use strict";var n=t(0),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M740 161c-61.8 0-112 50.2-112 112 0 50.1 33.1 92.6 78.5 106.9v95.9L320 602.4V318.1c44.2-15 76-56.9 76-106.1 0-61.8-50.2-112-112-112s-112 50.2-112 112c0 49.2 31.8 91 76 106.1V706c-44.2 15-76 56.9-76 106.1 0 61.8 50.2 112 112 112s112-50.2 112-112c0-49.2-31.8-91-76-106.1v-27.8l423.5-138.7a50.52 50.52 0 0034.9-48.2V378.2c42.9-15.8 73.6-57 73.6-105.2 0-61.8-50.2-112-112-112zm-504 51a48.01 48.01 0 0196 0 48.01 48.01 0 01-96 0zm96 600a48.01 48.01 0 01-96 0 48.01 48.01 0 0196 0zm408-491a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"branches",theme:"outlined"},c=t(18),s=function(e,a){return n.createElement(c.a,Object.assign({},e,{ref:a,icon:r}))};s.displayName="BranchesOutlined";a.a=n.forwardRef(s)},1262:function(e,a,t){e.exports={Commits:"Style_Commits__2OB1b",infoWrapper:"Style_infoWrapper__1B-0-",path:"Style_path__3KqyH",timeLineWrapper:"Style_timeLineWrapper__3aFXu",loadMoreButtonWrapper:"Style_loadMoreButtonWrapper__MQq-F"}},1378:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return j}));var n=t(94),r=t(1),c=t.n(r),s=t(3),i=t(11),o=t(12),m=t(21),l=t(20),u=t(0),p=t.n(u),h=t(1262),f=t.n(h),v=t(1124),d=t(108),b=t(342),g=t(218),y=t(63),E=t(25),k=t(1198),O=function(e){Object(m.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).onBranchOrTagClickFactory=function(a){return function(){var t=e.props,n=t.history,r=t.match.params,c=r.username,s=r.repositoryName,i=r.path;return n.replace(E.Function.generateRepositoryCommitsRoute({username:c,repositoryName:s,commitHash:a,path:i}))}},e}return Object(o.a)(t,[{key:"render",value:function(){var e=this.props,a=e.match.params.commitHash,t=e.branches,n=e.tagNames,r="";if(void 0===a){var c,s=Object(g.a)(t);try{for(s.s();!(c=s.n()).done;){var i=c.value;i.isDefault&&(r=i.name)}}catch(o){s.e(o)}finally{s.f()}}return p.a.createElement(k.a,{branches:t,tagNames:n,currentBranchOrTagOrCommitHash:a||r,onBranchOrTagClickFactory:this.onBranchOrTagClickFactory})}}]),t}(u.PureComponent),N=Object(y.f)(O);var _=p.a.memo((function(e){var a=e.branches,t=e.tagNames,n=e.loading,r=e.commits,c=e.path,s=e.repository,i=e.repository.name,o=e.onLoadMoreButtonClick;return p.a.createElement("div",{className:f.a.Commits},p.a.createElement(v.a,{spinning:n},p.a.createElement("div",{className:f.a.infoWrapper},p.a.createElement(N,{branches:a,tagNames:t}),"string"===typeof c?p.a.createElement("div",{className:f.a.path},i,"/",c):null),p.a.createElement("div",{className:f.a.timeLineWrapper},p.a.createElement(b.a,{commits:r,repository:s})),p.a.createElement("div",{className:f.a.loadMoreButtonWrapper},p.a.createElement(d.a,{disabled:n,loading:n,onClick:o},"\u52a0\u8f7d\u66f4\u65e9\u7684\u63d0\u4ea4\u5386\u53f2"))))})),x=t(40),C=t(333),M=t(71),B=function(e){Object(m.a)(t,e);var a=Object(l.a)(t);function t(e){var r;return Object(i.a)(this,t),(r=a.call(this,e)).setStatePromise=Object(M.promisify)(r.setState),r.init=Object(s.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.setStatePromise({branches:[],tagNames:[],commits:[]});case 2:case"end":return e.stop()}}),e)}))),r.loadBranches=Object(s.a)(c.a.mark((function e(){var a,t,n,s,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.props.match.params,t=a.username,n=a.repositoryName,e.next=3,x.i.branches({username:t,name:n});case 3:if(null===(s=e.sent)){e.next=8;break}return i=s.branches,e.next=8,r.setStatePromise({branches:i});case 8:case"end":return e.stop()}}),e)}))),r.loadTagNames=Object(s.a)(c.a.mark((function e(){var a,t,n,s,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.props.match.params,t=a.username,n=a.repositoryName,e.next=3,x.i.tagNames({username:t,name:n});case 3:if(null===(s=e.sent)){e.next=8;break}return i=s.tagNames,e.next=8,r.setStatePromise({tagNames:i});case 8:case"end":return e.stop()}}),e)}))),r.loadMoreCommits=Object(s.a)(c.a.mark((function e(){var a,s,i,o,m,l,u,p;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=r.props.match.params,s=a.username,i=a.repositoryName,o=a.commitHash,m=a.path,u=r.state.commits,"string"!==typeof m){e.next=8;break}return e.next=5,x.i.fileCommitHistory({username:s,name:i},m,o,u.length,t.COMMIT_AMOUNT_PER_PAGE);case 5:l=e.sent,e.next=11;break;case 8:return e.next=10,x.i.commitHistory({username:s,name:i},o,u.length,t.COMMIT_AMOUNT_PER_PAGE);case 10:l=e.sent;case 11:if(null===l){e.next=19;break}if(0!==(p=l.commits).length){e.next=17;break}C.a.success({message:"\u5df2\u52a0\u8f7d\u6240\u6709\u63d0\u4ea4\u5386\u53f2"}),e.next=19;break;case 17:return e.next=19,r.setStatePromise({commits:[].concat(Object(n.a)(u),Object(n.a)(p))});case 19:case"end":return e.stop()}}),e)}))),r.onLoadMoreButtonClick=Object(s.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.setStatePromise({loading:!0});case 2:return e.next=4,r.loadMoreCommits();case 4:return e.next=6,r.setStatePromise({loading:!1});case 6:case"end":return e.stop()}}),e)}))),r.state={branches:[],tagNames:[],loading:!1,commits:[]},r}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=Object(s.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.init();case 2:return e.next=4,this.setStatePromise({loading:!0});case 4:return e.next=6,Promise.all([this.loadBranches(),this.loadTagNames()]);case 6:return e.next=8,this.loadMoreCommits();case 8:return e.next=10,this.setStatePromise({loading:!1});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(s.a)(c.a.mark((function e(a,t,n){var r,s,i,o,m,l,u,p;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.props.match.params,s=r.username,i=r.repositoryName,o=r.commitHash,m=a.match.params,l=m.username,u=m.repositoryName,p=m.commitHash,s===l&&i===u){e.next=7;break}return e.next=5,this.componentDidMount();case 5:e.next=14;break;case 7:if(o===p){e.next=14;break}return e.next=10,this.setStatePromise({loading:!0,commits:[]});case 10:return e.next=12,this.loadMoreCommits();case 12:return e.next=14,this.setStatePromise({loading:!1});case 14:case"end":return e.stop()}}),e,this)})));return function(a,t,n){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,a=e.branches,t=e.loading,n=e.commits,r=e.tagNames,c=this.props.match.params,s=c.repositoryName,i=c.path,o=c.username;return p.a.createElement(_,{onLoadMoreButtonClick:this.onLoadMoreButtonClick,branches:a,loading:t,commits:n,tagNames:r,path:i,repository:{username:o,name:s}})}}]),t}(u.PureComponent);B.COMMIT_AMOUNT_PER_PAGE=50;var j=Object(y.f)(B)}}]);
//# sourceMappingURL=26.7aee3b6f.chunk.js.map