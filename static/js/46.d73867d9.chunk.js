(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[46],{1056:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(0),o=n(149),a=n(91),c=n(346);function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var v=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},b=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(h,e);var t,n,i,b,g=(t=h,function(){var e,n=y(t);if(s()){var r=y(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return f(this,e)});function h(){var e;return l(this,h),(e=g.apply(this,arguments)).saveTooltip=function(t){e.tooltip=t},e.renderPopover=function(t){var n=t.getPrefixCls,a=e.props,c=a.prefixCls,i=v(a,["prefixCls"]);delete i.title;var l=n("popover",c);return r.createElement(o.a,u({},i,{prefixCls:l,ref:e.saveTooltip,overlay:e.getOverlay(l)}))},e}return n=h,(i=[{key:"getPopupDomNode",value:function(){return this.tooltip.getPopupDomNode()}},{key:"getOverlay",value:function(e){var t=this.props,n=t.title,o=t.content;return r.createElement(r.Fragment,null,n&&r.createElement("div",{className:"".concat(e,"-title")},Object(c.a)(n)),r.createElement("div",{className:"".concat(e,"-inner-content")},Object(c.a)(o)))}},{key:"render",value:function(){return r.createElement(a.a,null,this.renderPopover)}}])&&p(n.prototype,i),b&&p(n,b),h}(r.Component);b.defaultProps={placement:"top",transitionName:"zoom-big",trigger:"hover",mouseEnterDelay:.1,mouseLeaveDelay:.1,overlayStyle:{}}},1254:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return g}));n(62);var r=n(29),o=n(9),a=n(10),c=n(17),i=n(18),u=n(0),l=n.n(u),p=(n(496),n(1056)),f=(n(73),n(21)),s=(n(492),n(334)),y=n(344),m=n.n(y),v=n(1003);var b=l.a.memo((function(e){var t=e.username,n=e.repository,r=e.onCopy;return l.a.createElement(p.a,{title:"\u901a\u8fc7 HTTPS \u514b\u9686",trigger:"click",placement:"bottomLeft",overlayStyle:{width:"450px"},content:l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"\u4f7f\u7528 Git \u6765\u514b\u9686\u4ee5\u4e0b\u5730\u5740"),l.a.createElement(s.a,{value:"".concat(window.location.origin,"/").concat(t,"/").concat(n,".git"),addonAfter:l.a.createElement(m.a,{text:"".concat(window.location.origin,"/").concat(t,"/").concat(n,".git"),onCopy:r},l.a.createElement(v.a,null))}))},l.a.createElement(f.a,{type:"primary"},"\u514b\u9686"))})),g=function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).onCopy=function(e,t){t?r.a.success({message:"\u5730\u5740\u5df2\u6210\u529f\u590d\u5236"}):r.a.warning({message:"\u5730\u5740\u590d\u5236\u5931\u8d25\uff0c\u8bf7\u624b\u52a8\u590d\u5236"})},e}return Object(a.a)(n,[{key:"render",value:function(){var e=this.props,t=e.username,n=e.repository;return l.a.createElement(b,{username:t,repository:n,onCopy:this.onCopy})}}]),n}(u.PureComponent)}}]);
//# sourceMappingURL=46.d73867d9.chunk.js.map