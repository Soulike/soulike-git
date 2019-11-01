(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[15],{1035:function(e,t,n){e.exports={Repository:"Style_Repository__3C5oN",header:"Style_header__2LCJa",tabContent:"Style_tabContent__1JPyK",basicInfo:"Style_basicInfo__1CY_5",usernameAndName:"Style_usernameAndName__21Dhj"}},1247:function(e,t,n){"use strict";n.r(t);var r,a=n(4),o=n.n(a),i=n(10),c=n(50),s=n(72),l=n(270),u=n(269),p=n(271),f=n(0),b=n.n(f),y=(n(950),n(951)),m=(n(407),n(38)),h=n(1035),v=n.n(h),g=n(952),d=n(62),O=n(116);!function(e){e.CODE="CODE",e.ISSUES="ISSUES",e.PULL_REQUESTS="PULL_REQUESTS",e.SETTINGS="SETTINGS"}(r||(r={}));var E=r;var S=b.a.memo((function(e){var t=e.repository,n=t.username,r=t.name,a=t.isPublic,o=e.loading,i=e.onTabChange,c=e.tabActiveKey,s=e.showSettings,l=e.children;return o?null:b.a.createElement("div",{className:v.a.Repository},b.a.createElement("div",{className:v.a.header},b.a.createElement("div",{className:v.a.basicInfo},b.a.createElement(g.a,{isPublic:a}),b.a.createElement("div",{className:v.a.usernameAndName},b.a.createElement(d.b,{to:O.b.generatePersonalCenterRoute({username:n})},n)," / ",b.a.createElement(d.b,{to:O.b.generateRepositoryRoute({username:n,repository:r})},b.a.createElement("b",null,r))))),b.a.createElement(y.a,{defaultActiveKey:E.CODE,type:"card",className:v.a.tab,tabBarStyle:{padding:"0 calc(50% - 500px)",margin:"0"},onChange:i,activeKey:c},b.a.createElement(y.a.TabPane,{tab:b.a.createElement(b.a.Fragment,null,b.a.createElement(m.a,{type:"code"}),"\u4ee3\u7801"),key:E.CODE},b.a.createElement("div",{className:v.a.tabContent},l)),b.a.createElement(y.a.TabPane,{tab:b.a.createElement(b.a.Fragment,null,b.a.createElement(m.a,{type:"exclamation-circle"}),"Issues"),key:E.ISSUES},b.a.createElement("div",{className:v.a.tabContent},l)),b.a.createElement(y.a.TabPane,{tab:b.a.createElement(b.a.Fragment,null,b.a.createElement(m.a,{type:"pull-request"}),"Pull Requests"),key:E.PULL_REQUESTS},b.a.createElement("div",{className:v.a.tabContent},l)),s?b.a.createElement(y.a.TabPane,{tab:b.a.createElement(b.a.Fragment,null,b.a.createElement(m.a,{type:"setting"}),"\u8bbe\u7f6e"),key:E.SETTINGS},b.a.createElement("div",{className:v.a.tabContent},l)):null))})),C=n(272),P=n(164),T=n(3),k=n(197),_=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).setTitle=function(){var e=n.props.match.params,t=e.username,r=e.repository;document.title="".concat(r," - ").concat(t)},n.loadRepository=Object(i.a)(o.a.mark((function e(){var t,r,a,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props.match.params,r=t.username,a=t.repository,e.next=3,P.e.repository(r,a);case 3:null!==(i=e.sent)&&n.setState({repository:i});case 5:case"end":return e.stop()}}),e)}))),n.loadVisitorProfile=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.c.get();case 2:null!==(t=e.sent)&&n.setState({visitorProfile:t});case 4:case"end":return e.stop()}}),e)}))),n.setTabActiveKey=function(){var e=n.props.match.path,t=T.PAGE_ID.REPOSITORY,r=t.REPOSITORY,a=t.CODE,o=t.ISSUES,i=t.PULL_REQUESTS,c=t.SETTINGS;switch(e){case T.PAGE_ID_TO_ROUTE[a]:case T.PAGE_ID_TO_ROUTE[r]:n.setState({tabActiveKey:E.CODE});break;case T.PAGE_ID_TO_ROUTE[o]:n.setState({tabActiveKey:E.ISSUES});break;case T.PAGE_ID_TO_ROUTE[i]:n.setState({tabActiveKey:E.PULL_REQUESTS});break;case T.PAGE_ID_TO_ROUTE[c.SETTINGS]:n.setState({tabActiveKey:E.SETTINGS})}},n.onTabChange=function(e){var t=n.props.history,r=n.state.repository,a=r.username,o=r.name;switch(e){case E.CODE:t.push(O.b.generateRepositoryRoute({username:a,repository:o}));break;case E.ISSUES:t.push(O.b.generateRepositoryIssuesRoute({username:a,repository:o}));break;case E.PULL_REQUESTS:t.push(O.b.generateRepositoryPullRequestsRoute({username:a,repository:o}));break;case E.SETTINGS:t.push(O.b.generateRepositorySettingsRoute({username:a,repository:o}));break;default:return}},n.state={repository:new C.e("","","",!0),loading:!0,tabActiveKey:E.CODE,visitorProfile:null},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.isLoggedIn,this.setTitle(),this.setTabActiveKey(),this.setState({loading:!0}),e.next=6,this.loadRepository();case 6:if(!t){e.next=9;break}return e.next=9,this.loadVisitorProfile();case 9:this.setState({loading:!1});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(i.a)(o.a.mark((function e(t,n,r){var a,i,c,s,l,u,p,f,b,y,m;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=this.props,i=a.location.pathname,c=a.isLoggedIn,s=a.match.params,l=s.repository,u=s.username,p=t.location.pathname,f=t.isLoggedIn,b=t.match.params,y=b.repository,m=b.username,l===y&&u===m){e.next=5;break}return e.next=5,this.componentDidMount();case 5:if(i!==p&&this.setTabActiveKey(),!c||f){e.next=9;break}return e.next=9,this.loadVisitorProfile();case 9:case"end":return e.stop()}}),e,this)})));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.repository,n=e.loading,r=e.tabActiveKey,a=e.visitorProfile,o=this.props,i=o.children,c=o.isLoggedIn;return b.a.createElement(S,{showSettings:c&&null!==a&&t.username===a.username,repository:t,loading:n,onTabChange:this.onTabChange,tabActiveKey:r},i)}}]),t}(f.PureComponent),j=Object(k.b)((function(e){return{isLoggedIn:e.Root.isLoggedIn}}))(_);n.d(t,"default",(function(){return j}))},944:function(e,t,n){"use strict";n(97),n(958)},948:function(e,t,n){"use strict";var r=n(0),a=n(19),o=n.n(a),i=n(98),c=n(49),s=n(38),l=n(115);function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return!t||"object"!==u(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var v=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},g=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=y(this,m(t).apply(this,arguments))).handleClick=function(){var t=e.props,n=t.checked,r=t.onChange;r&&r(!n)},e.renderCheckableTag=function(t){var n,a=t.getPrefixCls,i=e.props,c=i.prefixCls,s=i.className,l=i.checked,u=v(i,["prefixCls","className","checked"]),b=a("tag",c),y=o()(b,(f(n={},"".concat(b,"-checkable"),!0),f(n,"".concat(b,"-checkable-checked"),l),n),s);return delete u.onChange,r.createElement("span",p({},u,{className:y,onClick:e.handleClick}))},e}var n,a,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,e),n=t,(a=[{key:"render",value:function(){return r.createElement(l.a,null,this.renderCheckableTag)}}])&&b(n.prototype,a),i&&b(n,i),t}(r.Component),d=n(132),O=Object(d.a)("pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime"),E=n(45),S=n(274);function C(e){return(C="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e,t){return!t||"object"!==C(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var I=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},R=new RegExp("^(".concat(O.join("|"),")(-inverse)?$")),x=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=_(this,j(t).call(this,e))).state={visible:!0},n.handleIconClick=function(e){n.setVisible(!1,e)},n.renderTag=function(e){var t=n.props,a=t.children,o=I(t,["children"]),c="onClick"in o||a&&"a"===a.type,s=Object(i.a)(o,["onClose","afterClose","color","visible","closable","prefixCls"]);return c?r.createElement(S.a,null,r.createElement("span",T({},s,{className:n.getTagClassName(e),style:n.getTagStyle()}),a,n.renderCloseIcon())):r.createElement("span",T({},s,{className:n.getTagClassName(e),style:n.getTagStyle()}),a,n.renderCloseIcon())},Object(E.a)(!("afterClose"in e),"Tag","'afterClose' will be deprecated, please use 'onClose', we will remove this in the next version."),n}var n,a,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(t,e),n=t,c=[{key:"getDerivedStateFromProps",value:function(e){return"visible"in e?{visible:e.visible}:null}}],(a=[{key:"getTagStyle",value:function(){var e=this.props,t=e.color,n=e.style,r=this.isPresetColor();return T({backgroundColor:t&&!r?t:void 0},n)}},{key:"getTagClassName",value:function(e){var t,n=e.getPrefixCls,r=this.props,a=r.prefixCls,i=r.className,c=r.color,s=this.state.visible,l=this.isPresetColor(),u=n("tag",a);return o()(u,(P(t={},"".concat(u,"-").concat(c),l),P(t,"".concat(u,"-has-color"),c&&!l),P(t,"".concat(u,"-hidden"),!s),t),i)}},{key:"setVisible",value:function(e,t){var n=this.props,r=n.onClose,a=n.afterClose;r&&r(t),a&&!r&&a(),t.defaultPrevented||"visible"in this.props||this.setState({visible:e})}},{key:"isPresetColor",value:function(){var e=this.props.color;return!!e&&R.test(e)}},{key:"renderCloseIcon",value:function(){return this.props.closable?r.createElement(s.a,{type:"close",onClick:this.handleIconClick}):null}},{key:"render",value:function(){return r.createElement(l.a,null,this.renderTag)}}])&&k(n.prototype,a),c&&k(n,c),t}(r.Component);x.CheckableTag=g,x.defaultProps={closable:!1},Object(c.polyfill)(x);t.a=x},952:function(e,t,n){"use strict";n(944);var r=n(948),a=n(968),o=n(0),i=n.n(o);var c=i.a.memo((function(e){var t=e.isPublic,n=Object(a.a)(e,["isPublic"]);return t?i.a.createElement(r.a,Object.assign({color:"blue"},n),"\u516c\u5171"):i.a.createElement(r.a,Object.assign({color:"gold"},n),"\u79c1\u4eba")}));n.d(t,"a",(function(){return c}))},958:function(e,t,n){},968:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,"a",(function(){return r}))}}]);
//# sourceMappingURL=15.442f35e3.chunk.js.map