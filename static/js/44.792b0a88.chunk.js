(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[44],{1107:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var r=n(0),o=n(231),a=n(96);function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},v=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(h,e);var t,n,c,v,b=(t=h,function(){var e,n=s(t);if(f()){var r=s(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return p(this,e)});function h(){var e;return u(this,h),(e=b.apply(this,arguments)).saveTooltip=function(t){e.tooltip=t},e.renderPopover=function(t){var n=t.getPrefixCls,a=e.props,c=a.prefixCls,u=m(a,["prefixCls"]);delete u.title;var l=n("popover",c);return r.createElement(o.a,i({},u,{prefixCls:l,ref:e.saveTooltip,overlay:e.getOverlay(l)}))},e}return n=h,(c=[{key:"getPopupDomNode",value:function(){return this.tooltip.getPopupDomNode()}},{key:"getOverlay",value:function(e){var t=this.props,n=t.title,o=t.content;return r.createElement("div",null,n&&r.createElement("div",{className:"".concat(e,"-title")},n),r.createElement("div",{className:"".concat(e,"-inner-content")},o))}},{key:"render",value:function(){return r.createElement(a.a,null,this.renderPopover)}}])&&l(n.prototype,c),v&&l(n,v),h}(r.Component);v.defaultProps={placement:"top",transitionName:"zoom-big",trigger:"hover",mouseEnterDelay:.1,mouseLeaveDelay:.1,overlayStyle:{}}},1218:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return h}));var r=n(9),o=n(10),a=n(17),c=n(18),i=n(0),u=n.n(i),l=n(1107),p=n(957),f=n(86),s=n(325),y=n.n(s),m=n(977);var v=u.a.memo((function(e){var t=e.username,n=e.repository,r=e.onCopy;return u.a.createElement(l.a,{title:"\u901a\u8fc7 HTTPS \u514b\u9686",trigger:"click",placement:"bottomLeft",overlayStyle:{width:"450px"},content:u.a.createElement(u.a.Fragment,null,u.a.createElement("p",null,"\u4f7f\u7528 Git \u6765\u514b\u9686\u4ee5\u4e0b\u5730\u5740"),u.a.createElement(p.a,{value:"".concat(window.location.origin,"/").concat(t,"/").concat(n,".git"),addonAfter:u.a.createElement(y.a,{text:"".concat(window.location.origin,"/").concat(t,"/").concat(n,".git"),onCopy:r},u.a.createElement(m.a,null))}))},u.a.createElement(f.a,{type:"primary"},"\u514b\u9686"))})),b=n(951),h=function(e){Object(c.a)(n,e);var t=Object(a.a)(n);function n(){var e;Object(r.a)(this,n);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).onCopy=function(e,t){t?b.a.success({message:"\u5730\u5740\u5df2\u6210\u529f\u590d\u5236"}):b.a.warning({message:"\u5730\u5740\u590d\u5236\u5931\u8d25\uff0c\u8bf7\u624b\u52a8\u590d\u5236"})},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.username,n=e.repository;return u.a.createElement(v,{username:t,repository:n,onCopy:this.onCopy})}}]),n}(i.PureComponent)}}]);
//# sourceMappingURL=44.792b0a88.chunk.js.map