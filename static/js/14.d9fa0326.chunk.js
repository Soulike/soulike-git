(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[14],{625:function(e,t,a){"use strict";var r=a(0),n=a(8),o=a.n(n),c=a(40),s=a(73);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var l=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a},u=function(e){return r.createElement(s.a,null,(function(t){var a,n,c,s=t.getPrefixCls,u=e.prefixCls,m=e.className,p=e.hoverable,f=void 0===p||p,d=l(e,["prefixCls","className","hoverable"]),h=s("card",u),y=o()("".concat(h,"-grid"),m,(a={},n="".concat(h,"-grid-hoverable"),c=f,n in a?Object.defineProperty(a,n,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[n]=c,a));return r.createElement("div",i({},d,{className:y}))}))};function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var p=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a},f=function(e){return r.createElement(s.a,null,(function(t){var a=t.getPrefixCls,n=e.prefixCls,c=e.className,s=e.avatar,i=e.title,l=e.description,u=p(e,["prefixCls","className","avatar","title","description"]),f=a("card",n),d=o()("".concat(f,"-meta"),c),h=s?r.createElement("div",{className:"".concat(f,"-meta-avatar")},s):null,y=i?r.createElement("div",{className:"".concat(f,"-meta-title")},i):null,v=l?r.createElement("div",{className:"".concat(f,"-meta-description")},l):null,b=y||v?r.createElement("div",{className:"".concat(f,"-meta-detail")},y,v):null;return r.createElement("div",m({},u,{className:d}),h,b)}))},d=a(118),h=a(806).a,y=a(772).a,v=a(134);function b(e){return(b="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function E(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function R(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function O(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(e,t){return!t||"object"!==b(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}a.d(t,"a",(function(){return k}));var _=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a};function j(e){return e.map((function(t,a){return r.createElement("li",{style:{width:"".concat(100/e.length,"%")},key:"action-".concat(a)},r.createElement("span",null,t))}))}var k=function(e){function t(){var e;return R(this,t),(e=C(this,N(t).apply(this,arguments))).onTabChange=function(t){e.props.onTabChange&&e.props.onTabChange(t)},e.renderCard=function(t){var a,n,s=t.getPrefixCls,i=t.direction,l=e.props,u=l.prefixCls,m=l.className,p=l.extra,f=l.headStyle,b=void 0===f?{}:f,R=l.bodyStyle,O=void 0===R?{}:R,C=l.title,N=l.loading,S=l.bordered,k=void 0===S||S,w=l.size,x=l.type,P=l.cover,B=l.actions,T=l.tabList,D=l.children,M=l.activeTabKey,A=l.defaultActiveTabKey,W=l.tabBarExtraContent,F=l.hoverable,U=_(l,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable"]),I=s("card",u),L=0===O.padding||"0px"===O.padding?{padding:24}:void 0,q=r.createElement("div",{className:"".concat(I,"-loading-content"),style:L},r.createElement(h,{gutter:8},r.createElement(y,{span:22},r.createElement("div",{className:"".concat(I,"-loading-block")}))),r.createElement(h,{gutter:8},r.createElement(y,{span:8},r.createElement("div",{className:"".concat(I,"-loading-block")})),r.createElement(y,{span:15},r.createElement("div",{className:"".concat(I,"-loading-block")}))),r.createElement(h,{gutter:8},r.createElement(y,{span:6},r.createElement("div",{className:"".concat(I,"-loading-block")})),r.createElement(y,{span:18},r.createElement("div",{className:"".concat(I,"-loading-block")}))),r.createElement(h,{gutter:8},r.createElement(y,{span:13},r.createElement("div",{className:"".concat(I,"-loading-block")})),r.createElement(y,{span:9},r.createElement("div",{className:"".concat(I,"-loading-block")}))),r.createElement(h,{gutter:8},r.createElement(y,{span:4},r.createElement("div",{className:"".concat(I,"-loading-block")})),r.createElement(y,{span:3},r.createElement("div",{className:"".concat(I,"-loading-block")})),r.createElement(y,{span:16},r.createElement("div",{className:"".concat(I,"-loading-block")})))),G=void 0!==M,K=(E(a={},G?"activeKey":"defaultActiveKey",G?M:A),E(a,"tabBarExtraContent",W),a),z=T&&T.length?r.createElement(d.a,g({},K,{className:"".concat(I,"-head-tabs"),size:"large",onChange:e.onTabChange}),T.map((function(e){return r.createElement(d.a.TabPane,{tab:e.tab,disabled:e.disabled,key:e.key})}))):null;(C||p||z)&&(n=r.createElement("div",{className:"".concat(I,"-head"),style:b},r.createElement("div",{className:"".concat(I,"-head-wrapper")},C&&r.createElement("div",{className:"".concat(I,"-head-title")},C),p&&r.createElement("div",{className:"".concat(I,"-extra")},p)),z));var H=P?r.createElement("div",{className:"".concat(I,"-cover")},P):null,X=r.createElement("div",{className:"".concat(I,"-body"),style:O},N?q:D),Y=B&&B.length?r.createElement("ul",{className:"".concat(I,"-actions")},j(B)):null,J=Object(c.a)(U,["onTabChange"]);return r.createElement(v.b.Consumer,null,(function(t){var a,c=w||t,s=o()(I,m,(E(a={},"".concat(I,"-loading"),N),E(a,"".concat(I,"-bordered"),k),E(a,"".concat(I,"-hoverable"),F),E(a,"".concat(I,"-contain-grid"),e.isContainGrid()),E(a,"".concat(I,"-contain-tabs"),T&&T.length),E(a,"".concat(I,"-").concat(c),c),E(a,"".concat(I,"-type-").concat(x),!!x),E(a,"".concat(I,"-rtl"),"rtl"===i),a));return r.createElement("div",g({},J,{className:s}),n,H,X,Y)}))},e}var a,n,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(t,e),a=t,(n=[{key:"isContainGrid",value:function(){var e;return r.Children.forEach(this.props.children,(function(t){t&&t.type&&t.type===u&&(e=!0)})),e}},{key:"render",value:function(){return r.createElement(s.a,null,this.renderCard)}}])&&O(a.prototype,n),i&&O(a,i),t}(r.Component);k.Grid=u,k.Meta=f},626:function(e,t,a){"use strict";a(43),a(627),a(315),a(624)},627:function(e,t,a){},637:function(e,t,a){e.exports={PageTitle:"Style_PageTitle__3R_vY"}},639:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(637),c=a.n(o);var s=function(e){var t=e.children;return n.a.createElement("h1",{className:c.a.PageTitle},t)};a.d(t,"a",(function(){return s}))},717:function(e,t,a){e.exports={Compare:"Style_Compare__1mDVF",detailWrapper:"Style_detailWrapper__1-wfW",detailTabs:"Style_detailTabs__L8UYT",pullRequestCommitsWrapper:"Style_pullRequestCommitsWrapper__3LPfG",tag:"Style_tag__3jX9P"}},718:function(e,t,a){e.exports={CompareCard:"Style_CompareCard__2IST9",selectorWrapper:"Style_selectorWrapper__328Ap",repositoriesSelectorWrapper:"Style_repositoriesSelectorWrapper__2pIWR",isMergeableIndicatorWrapper:"Style_isMergeableIndicatorWrapper__2PXxA"}},719:function(e,t,a){e.exports={RepositoriesSelector:"Style_RepositoriesSelector__17eFU",arrow:"Style_arrow__24B1h",target:"Style_target__21Y1o",source:"Style_source__GvP7D",targetRepositorySelectWrapper:"Style_targetRepositorySelectWrapper__3letX",sourceRepository:"Style_sourceRepository__1Uaey"}},720:function(e,t,a){},721:function(e,t,a){e.exports={CommentPoster:"Style_CommentPoster__PKPyi",contentWrapper:"Style_contentWrapper__1E6hF",content:"Style_content__3_2cW",tipWrapper:"Style_tipWrapper__2mBWC",previewWrapper:"Style_previewWrapper__1FsZA",buttonWrapper:"Style_buttonWrapper__1qKkZ"}},722:function(e,t,a){e.exports={PullRequestCommits:"Style_PullRequestCommits__AR2S5",loadMoreButtonWrapper:"Style_loadMoreButtonWrapper__lnbp6"}},723:function(e,t,a){e.exports={PullRequestDiffs:"Style_PullRequestDiffs__3mowa",loadMoreButtonWrapper:"Style_loadMoreButtonWrapper__t-c3B"}},774:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),o=a(4),c=a(10),s=a(11),i=a(25),l=a(24),u=a(26),m=a(0),p=a.n(m),f=(a(117),a(59)),d=(a(315),a(118)),h=(a(133),a(41)),y=(a(208),a(60)),v=a(717),b=a.n(v),g=a(639),E=(a(626),a(625)),R=a(718),O=a.n(R),C=a(64),N=a(106),S=(a(668),a(661)),_=a(719),j=a.n(_),k=a(79),w={name:"arrow-left",theme:"outlined",icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]}},x=a(13),P=function(e,t){return p.a.createElement(x.a,Object.assign({},e,{ref:t,icon:w}))};P.displayName="ArrowLeftOutlined";var B=p.a.forwardRef(P);var T=Object(k.f)(p.a.memo((function(e){var t=e.sourceRepositoryBranchNames,a=e.targetRepositoryBranchNames,r=e.onSourceRepositoryBranchSelectorChange,n=e.onTargetRepositoryBranchSelectorChange,o=e.loading,c=e.targetRepositories,s=e.onTargetRepositorySelectorChange,i=e.match.params,l=i.sourceRepositoryUsername,u=i.sourceRepositoryName,m=i.sourceRepositoryBranch,f=i.targetRepositoryBranch,d=i.username,h=i.repository;return p.a.createElement("div",{className:j.a.RepositoriesSelector},p.a.createElement("div",{className:j.a.target},p.a.createElement("div",{className:j.a.targetRepositorySelectWrapper},p.a.createElement(S.a,{loading:o,disabled:o,onChange:s,value:"".concat(d,"/").concat(h)},c.map((function(e){var t=e.username,a=e.name;return p.a.createElement(S.a.Option,{value:"".concat(t,"/").concat(a),key:"".concat(t,"/").concat(a)},t," / ",a)})))),p.a.createElement(S.a,{loading:o,disabled:o,onChange:n,value:f},a.map((function(e){return p.a.createElement(S.a.Option,{value:e,key:e},e)})))),p.a.createElement("div",{className:j.a.arrow},p.a.createElement(B,null)),p.a.createElement("div",{className:j.a.source},p.a.createElement("div",{className:j.a.sourceRepository},l," / ",u),p.a.createElement(S.a,{loading:o,disabled:o,onChange:r,value:m},t.map((function(e){return p.a.createElement(S.a.Option,{value:e,key:e},e)})))))}))),D=a(32),M=a(39),A=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).loadSourceRepositoryBranchNames=Object(o.a)(n.a.mark((function e(){var t,r,o,c,s,i;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.match.params,r=t.sourceRepositoryUsername,o=t.sourceRepositoryName,c={username:r,name:o},e.next=4,M.g.branchNames(c);case 4:null!==(s=e.sent)&&(i=s.branchNames,a.setState({sourceRepositoryBranchNames:i}));case 6:case"end":return e.stop()}}),e)}))),a.loadTargetRepositories=Object(o.a)(n.a.mark((function e(){var t,r,o,c,s,i;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.match.params,r=t.sourceRepositoryUsername,o=t.sourceRepositoryName,c={username:r,name:o},e.next=4,M.g.forkFrom(c);case 4:null!==(s=e.sent)&&(null!==(i=s.repository)?a.setState({targetRepositories:[i,c]}):a.setState({targetRepositories:[c]}));case 6:case"end":return e.stop()}}),e)}))),a.loadTargetRepositoryBranchNames=Object(o.a)(n.a.mark((function e(){var t,r,o,c,s,i;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.match.params,r=t.repository,o=t.username,c={username:o,name:r},e.next=4,M.g.branchNames(c);case 4:null!==(s=e.sent)&&(i=s.branchNames,a.setState({targetRepositoryBranchNames:i}));case 6:case"end":return e.stop()}}),e)}))),a.onTargetRepositorySelectorChange=function(e){var t=a.props,r=t.match.params,n=t.history,o=e.toString().split("/"),c=Object(N.a)(o,2),s=c[0],i=c[1];n.push(D.Function.generateRepositoryCompareRoute(Object(C.a)({},r,{username:s,repository:i})))},a.onSourceRepositoryBranchSelectorChange=function(e){var t=a.props,r=t.match.params;t.history.push(D.Function.generateRepositoryCompareRoute(Object(C.a)({},r,{sourceRepositoryBranch:e.toString()})))},a.onTargetRepositoryBranchSelectorChange=function(e){var t=a.props,r=t.match.params;t.history.push(D.Function.generateRepositoryCompareRoute(Object(C.a)({},r,{targetRepositoryBranch:e.toString()})))},a.state={sourceRepositoryBranchNames:[],targetRepositoryBranchNames:[],targetRepositories:[],loading:!1},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(o.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,Promise.all([this.loadSourceRepositoryBranchNames(),this.loadTargetRepositories(),this.loadTargetRepositoryBranchNames()]);case 3:this.setState({loading:!1});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.sourceRepositoryBranchNames,a=e.targetRepositoryBranchNames,r=e.loading,n=e.targetRepositories;return p.a.createElement(T,{sourceRepositoryBranchNames:t,targetRepositoryBranchNames:a,loading:r,targetRepositories:n,onTargetRepositorySelectorChange:this.onTargetRepositorySelectorChange,onSourceRepositoryBranchSelectorChange:this.onSourceRepositoryBranchSelectorChange,onTargetRepositoryBranchSelectorChange:this.onTargetRepositoryBranchSelectorChange})}}]),t}(m.PureComponent),W=Object(k.f)(A),F=(a(316),a(136)),U=a(720),I=a.n(U),L=a(601);var q=p.a.memo((function(e){var t=e.isMergeable,a=e.loading;return p.a.createElement("div",{className:I.a.IsMergeableIndicator},a?p.a.createElement(F.a,{showIcon:!0,icon:p.a.createElement(L.a,null),type:"info",message:"\u6b63\u5728\u68c0\u67e5\u662f\u5426\u53ef\u81ea\u52a8\u5408\u5e76"}):t?p.a.createElement(F.a,{showIcon:!0,type:"success",message:"\u53ef\u4ee5\u81ea\u52a8\u5408\u5e76"}):p.a.createElement(F.a,{showIcon:!0,type:"error",message:"\u4e0d\u80fd\u81ea\u52a8\u5408\u5e76\uff0c\u4f46\u60a8\u4ecd\u53ef\u521b\u5efa Pull Request"}))})),G=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).loadIsMergeable=Object(o.a)(n.a.mark((function e(){var t,r,o,c,s,i,l,u,m;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.match.params,r=t.username,o=t.repository,c=t.targetRepositoryBranch,s=t.sourceRepositoryUsername,i=t.sourceRepositoryName,l=t.sourceRepositoryBranch,e.next=3,M.f.isMergeable({username:s,name:i},l,{username:r,name:o},c);case 3:null!==(u=e.sent)&&(m=u.isMergeable,a.setState({isMergeable:m}));case 5:case"end":return e.stop()}}),e)}))),a.state={isMergeable:!0,loading:!1},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(o.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,this.loadIsMergeable();case 3:this.setState({loading:!1});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(o.a)(n.a.mark((function e(t,a,r){var o,c,s,i,l,u,m,p,f,d,h,y,v,b;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=this.props.match.params,c=o.username,s=o.repository,i=o.targetRepositoryBranch,l=o.sourceRepositoryUsername,u=o.sourceRepositoryName,m=o.sourceRepositoryBranch,p=t.match.params,f=p.username,d=p.repository,h=p.targetRepositoryBranch,y=p.sourceRepositoryUsername,v=p.sourceRepositoryName,b=p.sourceRepositoryBranch,c===f&&s===d&&i===h&&l===y&&u===v&&m===b){e.next=5;break}return e.next=5,this.componentDidMount();case 5:case"end":return e.stop()}}),e,this)})));return function(t,a,r){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.isMergeable,a=e.loading;return p.a.createElement(q,{isMergeable:t,loading:a})}}]),t}(m.PureComponent),K=Object(k.f)(G),z=a(617);var H=Object(k.f)(p.a.memo((function(e){var t=e.match.params,a=t.sourceRepositoryUsername,r=t.sourceRepositoryName,n=t.sourceRepositoryBranch,o=t.username,c=t.repository,s=t.targetRepositoryBranch,i=a===o&&r===c&&n===s;return p.a.createElement(E.a,{size:"small"},p.a.createElement("div",{className:O.a.CompareCard},p.a.createElement("div",{className:O.a.selectorWrapper},p.a.createElement("div",{className:O.a.iconWrapper},p.a.createElement(z.a,null)),p.a.createElement("div",{className:O.a.repositoriesSelectorWrapper},p.a.createElement(W,null))),i?null:p.a.createElement("div",{className:O.a.isMergeableIndicatorWrapper},p.a.createElement(K,null))))}))),X=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return p.a.createElement(H,null)}}]),t}(m.PureComponent),Y=(a(44),a(6)),J=(a(87),a(30)),Z=(a(628),a(629)),V=a(721),Q=a.n(V),$=a(289);var ee=p.a.memo((function(e){var t=e.title,a=e.onTitleChange,r=e.content,n=e.onContentChange,o=e.onTabChange,c=e.contentToPreview,s=e.submitting,i=e.onSubmitButtonClick;return p.a.createElement(E.a,{size:"small"},p.a.createElement("div",{className:Q.a.CommentPoster},p.a.createElement("div",{className:Q.a.titleWrapper},p.a.createElement(Z.a,{placeholder:"\u6807\u9898\uff08\u5fc5\u586b\uff09",size:"large",autoFocus:!0,value:t,onChange:a,disabled:s})),p.a.createElement("div",{className:Q.a.contentWrapper},p.a.createElement(d.a,{defaultActiveKey:"write",type:"card",onChange:o},p.a.createElement(d.a.TabPane,{key:"write",tab:"\u7f16\u8f91"},p.a.createElement(Z.a.TextArea,{placeholder:"\u8865\u5145\u8bf4\u660e\uff08\u9009\u586b\uff09",disabled:s,className:Q.a.content,value:r,onChange:n}),p.a.createElement("div",{className:Q.a.tipWrapper},p.a.createElement(F.a,{type:"info",message:"\u8865\u5145\u8bf4\u660e\u652f\u6301 Markdown \u8bed\u6cd5\u3002",showIcon:!0}))),p.a.createElement(d.a.TabPane,{key:"preview",tab:"\u9884\u89c8"},p.a.createElement("div",{className:Q.a.previewWrapper},p.a.createElement($.a,{markdown:c}))))),p.a.createElement("div",{className:Q.a.buttonWrapper},p.a.createElement(J.a,{loading:s,disabled:s,size:"large",type:"primary",onClick:i},"\u521b\u5efa Pull Request"))))})),te=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).onTitleChange=function(e){a.setState({title:e.target.value})},a.onContentChange=function(e){a.setState({content:e.target.value})},a.onTabChange=function(e){if("preview"===e){var t=a.state.content;a.setState({contentToPreview:t})}},a.onSubmitButtonClick=Object(o.a)(n.a.mark((function e(){var t,r,o,c,s,i,l,u,m,p,f,d;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a.state,r=t.title,o=t.content,0!==r.length){e.next=5;break}Y.a.warn({message:"\u6807\u9898\u4e0d\u80fd\u4e3a\u7a7a"}),e.next=12;break;case 5:return c=a.props,s=c.history,i=c.match.params,l=i.sourceRepositoryUsername,u=i.sourceRepositoryName,m=i.sourceRepositoryBranch,p=i.repository,f=i.username,d=i.targetRepositoryBranch,a.setState({submitting:!0}),e.next=9,M.e.add({title:r,content:o,sourceRepositoryUsername:l,sourceRepositoryName:u,sourceRepositoryBranchName:m,targetRepositoryUsername:f,targetRepositoryName:p,targetRepositoryBranchName:d});case 9:null!==e.sent&&(Y.a.success({message:"\u521b\u5efa Pull Request \u6210\u529f"}),setTimeout((function(){s.replace(D.Function.generateRepositoryPullRequestsRoute({username:f,repository:p}))}),1e3)),a.setState({submitting:!1});case 12:case"end":return e.stop()}}),e)}))),a.state={title:"",content:"",contentToPreview:"",submitting:!1},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.title,a=e.content,r=e.contentToPreview,n=e.submitting;return p.a.createElement(ee,{title:t,content:a,contentToPreview:r,onTitleChange:this.onTitleChange,onContentChange:this.onContentChange,onTabChange:this.onTabChange,submitting:n,onSubmitButtonClick:this.onSubmitButtonClick})}}]),t}(m.PureComponent),ae=Object(k.f)(te),re=a(20),ne=a(218),oe=a(722),ce=a.n(oe);var se=p.a.memo((function(e){var t=e.commits,a=e.loading,r=e.onLoadMoreButtonClick;return p.a.createElement("div",{className:ce.a.PullRequestCommits},p.a.createElement(f.a,{spinning:a},p.a.createElement(ne.a,{commits:t}),p.a.createElement("div",{className:ce.a.loadMoreButtonWrapper},p.a.createElement(J.a,{disabled:a,loading:a,onClick:r},"\u52a0\u8f7d\u66f4\u65e9\u7684\u63d0\u4ea4\u5386\u53f2"))))})),ie=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).init=Object(o.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){a.setState({commits:[]},(function(){return e()}))})));case 1:case"end":return e.stop()}}),e)}))),a.loadMoreCommits=Object(o.a)(n.a.mark((function e(){var r,o,c,s,i,l,u,m,p,f;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.props.match.params,o=r.sourceRepositoryUsername,c=r.sourceRepositoryName,s=r.sourceRepositoryBranch,i=r.username,l=r.repository,u=r.targetRepositoryBranch,m=a.state.commits,e.next=4,M.g.forkCommitHistory({username:o,name:c},s,{username:i,name:l},u,m.length,t.COMMIT_AMOUNT_PER_PAGE);case 4:null!==(p=e.sent)&&(0===(f=p.commits).length?Y.a.success({message:"\u5df2\u52a0\u8f7d\u6240\u6709\u63d0\u4ea4\u5386\u53f2"}):a.setState({commits:[].concat(Object(re.a)(m),Object(re.a)(f))}));case 6:case"end":return e.stop()}}),e)}))),a.onLoadMoreButtonClick=Object(o.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.setState({loading:!0});case 2:return e.next=4,a.loadMoreCommits();case 4:return e.next=6,a.setState({loading:!1});case 6:case"end":return e.stop()}}),e)}))),a.state={commits:[],loading:!1},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(o.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.init();case 2:return this.setState({loading:!0}),e.next=5,this.loadMoreCommits();case 5:this.setState({loading:!1});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(o.a)(n.a.mark((function e(t,a,r){var o,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=t.location.pathname,c=this.props.location.pathname,o===c){e.next=5;break}return e.next=5,this.componentDidMount();case 5:case"end":return e.stop()}}),e,this)})));return function(t,a,r){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.commits,a=e.loading;return p.a.createElement(se,{onLoadMoreButtonClick:this.onLoadMoreButtonClick,commits:t,loading:a})}}]),t}(m.PureComponent);ie.COMMIT_AMOUNT_PER_PAGE=50;var le=Object(k.f)(ie),ue=a(217),me=a(723),pe=a.n(me);var fe=p.a.memo((function(e){var t=e.fileDiffs,a=e.loading,r=e.fileDiffAmount,n=e.onLoadMoreButtonClick;return p.a.createElement("div",{className:pe.a.PullRequestDiffs},p.a.createElement(f.a,{spinning:a},p.a.createElement(ue.a,{fileDiffs:t,fileDiffAmount:r}),p.a.createElement("div",{className:pe.a.loadMoreButtonWrapper},p.a.createElement(J.a,{disabled:a,loading:a,onClick:n,size:"large",type:"primary"},"\u52a0\u8f7d\u66f4\u591a\u6587\u4ef6\u66f4\u6539"))))})),de=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).init=Object(o.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){a.setState({fileDiffs:[]},(function(){return e()}))})));case 1:case"end":return e.stop()}}),e)}))),a.loadFileDiffAmount=Object(o.a)(n.a.mark((function e(){var t,r,o,c,s,i,l,u,m;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.match.params,r=t.sourceRepositoryUsername,o=t.sourceRepositoryName,c=t.sourceRepositoryBranch,s=t.username,i=t.repository,l=t.targetRepositoryBranch,e.next=3,M.g.forkFileDiffAmount({username:r,name:o},c,{username:s,name:i},l);case 3:null!==(u=e.sent)&&(m=u.amount,a.setState({fileDiffAmount:m}));case 5:case"end":return e.stop()}}),e)}))),a.loadMoreFileDiffs=Object(o.a)(n.a.mark((function e(){var r,o,c,s,i,l,u,m,p,f;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.props.match.params,o=r.sourceRepositoryUsername,c=r.sourceRepositoryName,s=r.sourceRepositoryBranch,i=r.username,l=r.repository,u=r.targetRepositoryBranch,m=a.state.fileDiffs,e.next=4,M.g.forkFileDiff({username:o,name:c},s,{username:i,name:l},u,m.length,t.FILE_DIFF_AMOUNT_PER_PAGE);case 4:null!==(p=e.sent)&&(0===(f=p.fileDiffs).length?Y.a.success({message:"\u5df2\u52a0\u8f7d\u6240\u6709\u88ab\u4fee\u6539\u6587\u4ef6"}):a.setState({fileDiffs:[].concat(Object(re.a)(m),Object(re.a)(f))}));case 6:case"end":return e.stop()}}),e)}))),a.onLoadMoreButtonClick=Object(o.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({loading:!0}),e.next=3,a.loadMoreFileDiffs();case 3:a.setState({loading:!1});case 4:case"end":return e.stop()}}),e)}))),a.state={fileDiffs:[],fileDiffAmount:0,loading:!1},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(o.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.init();case 2:return this.setState({loading:!0}),e.next=5,Promise.all([this.loadFileDiffAmount(),this.loadMoreFileDiffs()]);case 5:this.setState({loading:!1});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(o.a)(n.a.mark((function e(t,a,r){var o,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=this.props.location.pathname,c=t.location.pathname,o===c){e.next=5;break}return e.next=5,this.componentDidMount();case 5:case"end":return e.stop()}}),e,this)})));return function(t,a,r){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.fileDiffs,a=e.loading,r=e.fileDiffAmount;return p.a.createElement(fe,{onLoadMoreButtonClick:this.onLoadMoreButtonClick,fileDiffs:t,loading:a,fileDiffAmount:r})}}]),t}(m.PureComponent);de.FILE_DIFF_AMOUNT_PER_PAGE=10;var he=Object(k.f)(de);var ye=Object(k.f)(p.a.memo((function(e){var t=e.match.params,a=t.sourceRepositoryUsername,r=t.sourceRepositoryName,n=t.sourceRepositoryBranch,o=t.username,c=t.repository,s=t.targetRepositoryBranch,i=e.commitAmount,l=e.fileDiffAmount,u=e.loading,m=a===o&&r===c&&n===s;return p.a.createElement("div",{className:b.a.Compare},p.a.createElement(g.a,null,"\u521b\u5efa Pull Request"),p.a.createElement("div",{className:b.a.compareCardWrapper},p.a.createElement(X,null)),p.a.createElement("div",{className:b.a.detailWrapper},p.a.createElement(f.a,{spinning:u},m?p.a.createElement(y.a,{description:"\u5fc5\u987b\u662f\u4e0d\u540c\u5206\u652f\u624d\u53ef\u521b\u5efa Pull Request"}):p.a.createElement("div",{className:b.a.detail},p.a.createElement("div",{className:b.a.commentPosterWrapper},p.a.createElement(ae,null)),p.a.createElement("div",{className:b.a.detailTabs},p.a.createElement(d.a,{defaultActiveKey:"commits",type:"card"},p.a.createElement(d.a.TabPane,{tab:p.a.createElement(p.a.Fragment,null,"\u63d0\u4ea4",p.a.createElement(h.a,{className:b.a.tag},i)),key:"commits"},p.a.createElement("div",{className:b.a.pullRequestCommitsWrapper},p.a.createElement(le,null))),p.a.createElement(d.a.TabPane,{tab:p.a.createElement(p.a.Fragment,null,"\u4fee\u6539\u7684\u6587\u4ef6",p.a.createElement(h.a,{className:b.a.tag},l)),key:"fileChanged"},p.a.createElement("div",{className:b.a.pullRequestFileDiffsWrapper},p.a.createElement(he,null)))))))))}))),ve=D.CONFIG.PAGE_ID_TO_ROUTE,be=D.CONFIG.PAGE_ID,ge=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).checkURLParameters=function(){var e=a.props,t=e.match.params,r=t.sourceRepositoryUsername,n=t.sourceRepositoryName,o=t.sourceRepositoryBranch,c=t.targetRepositoryBranch,s=e.history;void 0!==r&&void 0!==n&&void 0!==o&&void 0!==c||s.replace(ve[be.NOT_FOUND])},a.loadCommitAmount=Object(o.a)(n.a.mark((function e(){var t,r,o,c,s,i,l,u,m;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a.props.match.params,r=t.sourceRepositoryUsername,o=t.sourceRepositoryName,c=t.sourceRepositoryBranch,s=t.username,i=t.repository,l=t.targetRepositoryBranch,r!==s||o!==i||c!==l){e.next=5;break}a.setState({commitAmount:0}),e.next=9;break;case 5:return e.next=7,M.g.forkCommitAmount({username:r,name:o},c,{username:s,name:i},l);case 7:null!==(u=e.sent)&&(m=u.commitAmount,a.setState({commitAmount:m}));case 9:case"end":return e.stop()}}),e)}))),a.loadFileDiffAmount=Object(o.a)(n.a.mark((function e(){var t,r,o,c,s,i,l,u,m;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a.props.match.params,r=t.sourceRepositoryUsername,o=t.sourceRepositoryName,c=t.sourceRepositoryBranch,s=t.username,i=t.repository,l=t.targetRepositoryBranch,r!==s||o!==i||c!==l){e.next=5;break}a.setState({fileDiffAmount:0}),e.next=9;break;case 5:return e.next=7,M.g.forkFileDiffAmount({username:r,name:o},c,{username:s,name:i},l);case 7:null!==(u=e.sent)&&(m=u.amount,a.setState({fileDiffAmount:m}));case 9:case"end":return e.stop()}}),e)}))),a.state={commitAmount:0,fileDiffAmount:0,loading:!1},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(o.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.checkURLParameters(),this.setState({loading:!0}),e.next=4,Promise.all([this.loadCommitAmount(),this.loadFileDiffAmount()]);case 4:this.setState({loading:!1});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(o.a)(n.a.mark((function e(t,a,r){var o,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=this.props.location.pathname,c=t.location.pathname,o===c){e.next=5;break}return e.next=5,this.componentDidMount();case 5:case"end":return e.stop()}}),e,this)})));return function(t,a,r){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.commitAmount,a=e.fileDiffAmount,r=e.loading;return p.a.createElement(ye,{fileDiffAmount:a,loading:r,commitAmount:t})}}]),t}(m.PureComponent),Ee=Object(k.f)(ge);a.d(t,"default",(function(){return Ee}))}}]);
//# sourceMappingURL=14.d9fa0326.chunk.js.map