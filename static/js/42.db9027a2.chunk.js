(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[42],{1088:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n(0),o=n(140),a=n(112);function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},m=function(e){function t(){var e;return l(this,t),(e=p(this,s(t).apply(this,arguments))).saveTooltip=function(t){e.tooltip=t},e.renderPopover=function(t){var n=t.getPrefixCls,a=e.props,i=a.prefixCls,l=y(a,["prefixCls"]);delete l.title;var u=n("popover",i);return r.createElement(o.a,c({},l,{prefixCls:u,ref:e.saveTooltip,overlay:e.getOverlay(u)}))},e}var n,i,m;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),n=t,(i=[{key:"getPopupDomNode",value:function(){return this.tooltip.getPopupDomNode()}},{key:"getOverlay",value:function(e){var t=this.props,n=t.title,o=t.content;return r.createElement("div",null,n&&r.createElement("div",{className:"".concat(e,"-title")},n),r.createElement("div",{className:"".concat(e,"-inner-content")},o))}},{key:"render",value:function(){return r.createElement(a.a,null,this.renderPopover)}}])&&u(n.prototype,i),m&&u(n,m),t}(r.Component);m.defaultProps={placement:"top",transitionName:"zoom-big",trigger:"hover",mouseEnterDelay:.1,mouseLeaveDelay:.1,overlayStyle:{}}},1226:function(e,t,n){"use strict";n.r(t);n(79);var r=n(8),o=n(12),a=n(14),i=n(36),c=n(35),l=n(37),u=n(0),p=n.n(u),s=(n(482),n(1088)),f=(n(164),n(46)),y=(n(1059),n(1060)),m=n(323),v=n.n(m),b=n(1042);var g=p.a.memo((function(e){var t=e.username,n=e.repository,r=e.onCopy;return p.a.createElement(s.a,{title:"\u901a\u8fc7 HTTPS \u514b\u9686",trigger:"click",placement:"bottomLeft",overlayStyle:{width:"450px"},content:p.a.createElement(p.a.Fragment,null,p.a.createElement("p",null,"\u4f7f\u7528 Git \u6765\u514b\u9686\u4ee5\u4e0b\u5730\u5740"),p.a.createElement(y.a,{value:"".concat(window.location.origin,"/").concat(t,"/").concat(n,".git"),addonAfter:p.a.createElement(v.a,{text:"".concat(window.location.origin,"/").concat(t,"/").concat(n,".git"),onCopy:r},p.a.createElement(b.a,null))}))},p.a.createElement(f.a,{type:"primary"},"\u514b\u9686"))})),h=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,l=new Array(a),u=0;u<a;u++)l[u]=arguments[u];return(n=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).onCopy=function(e,t){t?r.a.success({message:"\u5730\u5740\u5df2\u6210\u529f\u590d\u5236"}):r.a.warning({message:"\u5730\u5740\u590d\u5236\u5931\u8d25\uff0c\u8bf7\u624b\u52a8\u590d\u5236"})},n}return Object(l.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){var e=this.props,t=e.username,n=e.repository;return p.a.createElement(g,{username:t,repository:n,onCopy:this.onCopy})}}]),t}(u.PureComponent);n.d(t,"default",(function(){return h}))}}]);
//# sourceMappingURL=42.db9027a2.chunk.js.map