(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[32],{1079:function(e,t,n){e.exports={BranchMenu:"Style_BranchMenu__2s6dB",branchName:"Style_branchName__YisEW",branchTagWrapper:"Style_branchTagWrapper__Cq2Vq",branchNameInButton:"Style_branchNameInButton__2kCc8"}},1080:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=(r=n(1081))&&r.__esModule?r:{default:r};t.default=o,e.exports=o},1081:function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!==typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n(0)),a=l(n(1082)),i=l(n(44));function l(e){return e&&e.__esModule?e:{default:e}}function c(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}var u=function(e,t){return o.createElement(i.default,Object.assign({},e,{ref:t,icon:a.default}))};u.displayName="EllipsisOutlined";var s=o.forwardRef(u);t.default=s},1082:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"ellipsis",theme:"outlined"}},1089:function(e,t,n){"use strict";n.d(t,"a",(function(){return z}));var r=n(328),o=n(0),a=n.n(o),i=n(204),l=n(5),c=n.n(l),u={adjustX:1,adjustY:1},s=[0,0],f={topLeft:{points:["bl","tl"],overflow:u,offset:[0,-4],targetOffset:s},topCenter:{points:["bc","tc"],overflow:u,offset:[0,-4],targetOffset:s},topRight:{points:["br","tr"],overflow:u,offset:[0,-4],targetOffset:s},bottomLeft:{points:["tl","bl"],overflow:u,offset:[0,4],targetOffset:s},bottomCenter:{points:["tc","bc"],overflow:u,offset:[0,4],targetOffset:s},bottomRight:{points:["tr","br"],overflow:u,offset:[0,4],targetOffset:s}};function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(c){o=!0,a=c}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function m(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.forwardRef((function(e,t){var n=e.prefixCls,r=void 0===n?"rc-dropdown":n,a=e.transitionName,l=e.animation,u=e.align,s=e.placement,b=void 0===s?"bottomLeft":s,y=e.placements,d=void 0===y?f:y,v=e.getPopupContainer,h=e.showAction,g=e.hideAction,O=e.overlayClassName,C=e.overlayStyle,j=e.visible,w=e.trigger,P=void 0===w?["hover"]:w,N=m(e,["prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger"]),E=p(o.useState(),2),x=E[0],_=E[1],S="visible"in e?j:x,k=o.useRef(null);o.useImperativeHandle(t,(function(){return k.current}));var A=function(){var t=e.overlay;return"function"===typeof t?t():t},M=function(t){var n=e.onOverlayClick,r=A().props;_(!1),n&&n(t),r.onClick&&r.onClick(t)},T=function(){var e=A(),t={prefixCls:"".concat(r,"-menu"),onClick:M};return"string"===typeof e.type&&delete t.prefixCls,o.cloneElement(e,t)},B=g;return B||-1===P.indexOf("contextMenu")||(B=["click"]),o.createElement(i.a,Object.assign({},N,{prefixCls:r,ref:k,popupClassName:O,popupStyle:C,builtinPlacements:d,action:P,showAction:h,hideAction:B||[],popupPlacement:b,popupAlign:u,popupTransitionName:a,popupAnimation:l,popupVisible:S,stretch:function(){var t=e.minOverlayWidthMatchTrigger,n=e.alignPoint;return"minOverlayWidthMatchTrigger"in e?t:!n}()?"minWidth":"",popup:"function"===typeof e.overlay?T:T(),onPopupVisibleChange:function(t){var n=e.onVisibleChange;_(t),"function"===typeof n&&n(t)},getPopupContainer:v}),function(){var t=e.children,n=t.props?t.props:{},a=c()(n.className,function(){var t=e.openClassName;return void 0!==t?t:"".concat(r,"-open")}());return x&&t?o.cloneElement(t,{className:a}):t}())})),y=n(156),d=n.n(y),v=n(1080),h=n.n(v),g=n(84),O=n(86);function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(c){o=!0,a=c}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return w(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return w(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var P=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},N=g.a.Group,E=function(e){var t=o.useContext(O.b),n=t.getPopupContainer,r=t.getPrefixCls,a=t.direction,i=e.prefixCls,l=e.type,u=e.disabled,s=e.onClick,f=e.htmlType,p=e.children,m=e.className,b=e.overlay,y=e.trigger,d=e.align,v=e.visible,w=e.onVisibleChange,E=e.placement,x=e.getPopupContainer,_=e.href,S=e.icon,k=void 0===S?o.createElement(h.a,null):S,A=e.title,M=e.buttonsRender,T=P(e,["prefixCls","type","disabled","onClick","htmlType","children","className","overlay","trigger","align","visible","onVisibleChange","placement","getPopupContainer","href","icon","title","buttonsRender"]),R=r("dropdown-button",i),I={align:d,overlay:b,disabled:u,trigger:u?[]:y,onVisibleChange:w,getPopupContainer:x||n};"visible"in e&&(I.visible=v),I.placement="placement"in e?E:"rtl"===a?"bottomLeft":"bottomRight";var W=j(M([o.createElement(g.a,{type:l,disabled:u,onClick:s,htmlType:f,href:_,title:A},p),o.createElement(g.a,{type:l,icon:k})]),2),D=W[0],L=W[1];return o.createElement(N,C({},T,{className:c()(R,m)}),D,o.createElement(B,I,L))};E.__ANT_BUTTON=!0,E.defaultProps={type:"default",buttonsRender:function(e){return e}};var x=E,_=n(57),S=n(58),k=n(23);function A(){return(A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function M(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object(S.a)("topLeft","topCenter","topRight","bottomLeft","bottomCenter","bottomRight");var T=function(e){var t,n=o.useContext(O.b),r=n.getPopupContainer,a=n.getPrefixCls,i=n.direction,l=e.prefixCls,u=e.children,s=e.trigger,f=e.disabled,p=e.getPopupContainer,m=e.overlayClassName,y=a("dropdown",l),v=o.Children.only(u),h=Object(k.a)(v,{className:c()(v.props.className,"".concat(y,"-trigger"),M({},"".concat(y,"-rtl"),"rtl"===i)),disabled:f}),g=c()(m,M({},"".concat(y,"-rtl"),"rtl"===i)),C=f?[]:s;return C&&-1!==C.indexOf("contextMenu")&&(t=!0),o.createElement(b,A({alignPoint:t},e,{overlayClassName:g,prefixCls:y,getPopupContainer:p||r,transitionName:function(){var t=e.placement,n=void 0===t?"":t,r=e.transitionName;return void 0!==r?r:n.indexOf("top")>=0?"slide-down":"slide-up"}(),trigger:C,overlay:function(){return function(t){var n,r=e.overlay;n="function"===typeof r?r():r;var a=(n=o.Children.only(n)).props;Object(_.a)(!a.mode||"vertical"===a.mode,"Dropdown",'mode="'.concat(a.mode,"\" is not supported for Dropdown's Menu."));var i=a.selectable,l=void 0!==i&&i,c=a.focusable,u=void 0===c||c,s=o.createElement("span",{className:"".concat(t,"-menu-submenu-arrow")},o.createElement(d.a,{className:"".concat(t,"-menu-submenu-arrow-icon")}));return"string"===typeof n.type?r:Object(k.a)(n,{mode:"vertical",selectable:l,focusable:u,expandIcon:s})}(y)},placement:function(){var t=e.placement;return void 0!==t?t:"rtl"===i?"bottomRight":"bottomLeft"}()}),h)};T.Button=x,T.defaultProps={mouseEnterDelay:.15,mouseLeaveDelay:.1};var B=T,R=B,I=n(1019),W=n(1022),D=n(1079),L=n.n(D),V=n(1029);var z=a.a.memo((function(e){var t,n=e.branches,o=e.currentBranch,i=e.onBranchClick,l=!1,c=Object(r.a)(n);try{for(c.s();!(t=c.n()).done;){if(t.value.name===o){l=!0;break}}}catch(u){c.e(u)}finally{c.f()}return a.a.createElement(R,{trigger:["click"],overlay:a.a.createElement(I.a,{className:L.a.BranchMenu},n.map((function(e){return a.a.createElement(I.a.Item,{key:e.name,onClick:i(e)},a.a.createElement("div",{className:L.a.branchName,style:e.name===o?{fontWeight:"bold"}:{}},e.name),a.a.createElement("div",{className:L.a.branchTagWrapper},e.isDefault?a.a.createElement(W.a,{color:"blue"},"\u9ed8\u8ba4"):null))})))},a.a.createElement(g.a,null,l?"\u5206\u652f\uff1a":"Tree: ",a.a.createElement("div",{className:L.a.branchNameInButton},o),a.a.createElement(V.a,null)))}))},1286:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return y}));var r=n(328),o=n(7),a=n(9),i=n(18),l=n(17),c=n(0),u=n.n(c),s=n(42),f=n(20),p=n(19),m=n(1089),b=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).onBranchClick=function(t){return function(){var n=e.props,r=n.history,o=n.match.params,a=o.username,i=o.repository,l=o.objectType,c=o.path;return r.replace(f.Function.generateRepositoryCodeRoute({username:a,repository:i,objectType:l||p.b.TREE,branch:t.name,path:c}))}},e}return Object(a.a)(n,[{key:"render",value:function(){var e=this.props,t=e.match.params.branch,n=e.branches,o="";if(void 0===t){var a,i=Object(r.a)(n);try{for(i.s();!(a=i.n()).done;){var l=a.value;l.isDefault&&(o=l.name)}}catch(c){i.e(c)}finally{i.f()}}return u.a.createElement(m.a,{branches:n,currentBranch:t||o,onBranchClick:this.onBranchClick})}}]),n}(c.PureComponent),y=Object(s.f)(b)}}]);
//# sourceMappingURL=32.9eecb09f.chunk.js.map