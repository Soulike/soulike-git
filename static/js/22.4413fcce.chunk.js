(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[22],{1001:function(e,t,n){"use strict";n(107),n(1002)},1002:function(e,t,n){},1003:function(e,t,n){"use strict";n.d(t,"a",(function(){return k}));var r=n(0),a=n(1),o=n(1004),i=n.n(o),c=n(15),u=n.n(c),s=n(108),l=n(286),f=n(22),d=n(133),p=n(40);function h(e){return(h="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t){return!t||"object"!==h(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var k=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=v(this,g(t).call(this,e))).saveSwitch=function(e){n.rcSwitch=e},n.renderSwitch=function(e){var t,a=e.getPrefixCls,o=n.props,c=o.prefixCls,d=o.size,p=o.loading,h=o.className,y=void 0===h?"":h,v=o.disabled,g=a("switch",c),C=u()(y,(m(t={},"".concat(g,"-small"),"small"===d),m(t,"".concat(g,"-loading"),p),t)),k=p?r.createElement(f.a,{type:"loading",className:"".concat(g,"-loading-icon")}):null;return r.createElement(l.a,{insertExtraNode:!0},r.createElement(i.a,b({},Object(s.a)(n.props,["loading"]),{prefixCls:g,className:C,disabled:v||p,ref:n.saveSwitch,loadingIcon:k})))},Object(p.a)("checked"in e||!("value"in e),"Switch","`value` is not validate prop, do you mean `checked`?"),n}var n,a,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(t,e),n=t,(a=[{key:"focus",value:function(){this.rcSwitch.focus()}},{key:"blur",value:function(){this.rcSwitch.blur()}},{key:"render",value:function(){return r.createElement(d.a,null,this.renderSwitch)}}])&&y(n.prototype,a),o&&y(n,o),t}(r.Component);k.__ANT_SWITCH=!0,k.propTypes={prefixCls:a.string,size:a.oneOf(["small","default","large"]),className:a.string}},1004:function(e,t,n){e.exports=n(1005)},1005:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(1),i=n.n(o),c=n(51);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=n(15),m=function(e){function t(e){var n,r,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,a=f(t).call(this,e),n=!a||"object"!==typeof a&&"function"!==typeof a?p(r):a,h(p(p(n)),"handleClick",(function(e){var t=n.state.checked,r=n.props.onClick,a=!t;n.setChecked(a,e),r&&r(a,e)})),h(p(p(n)),"handleKeyDown",(function(e){37===e.keyCode?n.setChecked(!1,e):39===e.keyCode&&n.setChecked(!0,e)})),h(p(p(n)),"handleMouseUp",(function(e){var t=n.props.onMouseUp;n.node&&n.node.blur(),t&&t(e)})),h(p(p(n)),"saveNode",(function(e){n.node=e}));var o=!1;return o="checked"in e?!!e.checked:!!e.defaultChecked,n.state={checked:o},n}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),n=t,o=[{key:"getDerivedStateFromProps",value:function(e){var t={},n=e.checked;return"checked"in e&&(t.checked=!!n),t}}],(r=[{key:"componentDidMount",value:function(){var e=this.props,t=e.autoFocus,n=e.disabled;t&&!n&&this.focus()}},{key:"setChecked",value:function(e,t){var n=this.props,r=n.disabled,a=n.onChange;r||("checked"in this.props||this.setState({checked:e}),a&&a(e,t))}},{key:"focus",value:function(){this.node.focus()}},{key:"blur",value:function(){this.node.blur()}},{key:"render",value:function(){var e,t=this.props,n=t.className,r=t.prefixCls,o=t.disabled,i=t.loadingIcon,c=t.checkedChildren,l=t.unCheckedChildren,f=s(t,["className","prefixCls","disabled","loadingIcon","checkedChildren","unCheckedChildren"]),d=this.state.checked,p=b((h(e={},n,!!n),h(e,r,!0),h(e,"".concat(r,"-checked"),d),h(e,"".concat(r,"-disabled"),o),e));return a.a.createElement("button",u({},f,{type:"button",role:"switch","aria-checked":d,disabled:o,className:p,ref:this.saveNode,onKeyDown:this.handleKeyDown,onClick:this.handleClick,onMouseUp:this.handleMouseUp}),i,a.a.createElement("span",{className:"".concat(r,"-inner")},d?c:l))}}])&&l(n.prototype,r),o&&l(n,o),t}(r.Component);m.propTypes={className:i.a.string,prefixCls:i.a.string,disabled:i.a.bool,checkedChildren:i.a.any,unCheckedChildren:i.a.any,onChange:i.a.func,onMouseUp:i.a.func,onClick:i.a.func,tabIndex:i.a.number,checked:i.a.bool,defaultChecked:i.a.bool,autoFocus:i.a.bool,loadingIcon:i.a.node},m.defaultProps={prefixCls:"rc-switch",checkedChildren:null,unCheckedChildren:null,className:"",defaultChecked:!1},Object(c.polyfill)(m),t.default=m},1057:function(e,t,n){e.exports={CreateRepository:"Style_CreateRepository__2Mw5u",title:"Style_title__13iw0",label:"Style_label__3gZrW",submitButton:"Style_submitButton__3gaVe",text:"Style_text__5znWR",inlineText:"Style_inlineText__1p1pR",inlineDescription:"Style_inlineDescription__2_j5X"}},1297:function(e,t,n){"use strict";n.r(t);n(92);var r=n(14),a=n(4),o=n.n(a),i=n(36),c=n(48),u=n(89),s=n(88),l=n(90),f=n(0),d=n.n(f),p=(n(430),n(134)),h=(n(1001),n(1003)),b=(n(431),n(284)),m=(n(960),n(962)),y=n(1057),v=n.n(y),g=n(955);var C=d.a.memo((function(e){var t=e.username,n=e.name,r=e.description,a=e.isPublic,o=e.onNameInputChange,i=e.onDescriptionInputChange,c=e.onIsPublicSwitchChange,u=e.onSubmit,s=e.submitting,l=e.loading;return d.a.createElement("div",{className:v.a.CreateRepository},d.a.createElement("h1",{className:v.a.title},"\u521b\u5efa\u65b0\u4ed3\u5e93"),d.a.createElement("form",{action:"#",className:v.a.form,onSubmit:u},d.a.createElement("label",{className:v.a.label},d.a.createElement("div",{className:v.a.text},"\u4ed3\u5e93\u540d"),d.a.createElement(b.a,{trigger:"focus",title:g.c.Repository.NAME},d.a.createElement(m.a,{addonBefore:d.a.createElement("div",null,t," /"),autoFocus:!0,value:n,onChange:o,disabled:l}))),d.a.createElement("label",{className:v.a.label},d.a.createElement("div",{className:v.a.text},"\u63cf\u8ff0\uff08\u53ef\u9009\uff09"),d.a.createElement(m.a,{value:r,onChange:i,disabled:l})),d.a.createElement("label",{className:v.a.label},d.a.createElement("div",{className:v.a.inlineText},"\u516c\u5f00"),d.a.createElement(h.a,{checked:a,onChange:c,disabled:l}),d.a.createElement("div",{className:v.a.inlineDescription},a?"\u6240\u6709\u4eba\u90fd\u80fd\u770b\u5230\u8be5\u4ed3\u5e93":"\u53ea\u6709\u6307\u5b9a\u7684\u4eba\u80fd\u770b\u5230\u8be5\u4ed3\u5e93")),d.a.createElement(p.a,{htmlType:"submit",type:"primary",block:!0,className:v.a.submitButton,loading:s,disabled:s||l},"\u521b\u5efa\u4ed3\u5e93")))})),k=n(291),S=n(210),E=n(102),w=n(91),N=n(169),O=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).setTitle=function(){document.title="\u521b\u5efa\u4ed3\u5e93 - ".concat(N.a.NAME)},n.loadUsername=function(){var e,t;return o.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o.a.awrap(k.a.get());case 2:null!==(e=r.sent)&&(t=e.username,n.setState({username:t}));case 4:case"end":return r.stop()}}))},n.onNameInputChange=function(e){n.setState({name:e.target.value})},n.onDescriptionInputChange=function(e){n.setState({description:e.target.value})},n.onIsPublicSwitchChange=function(e){n.setState({isPublic:e})},n.onSubmit=function(e){return o.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),!n.validateFormInput()){t.next=4;break}return t.next=4,o.a.awrap(n.submitForm());case 4:case"end":return t.stop()}}))},n.validateFormInput=function(){var e=n.state.name;return!!g.b.Repository.name(e)||(r.a.warn({message:g.a.Repository.NAME,description:g.c.Repository.NAME}),!1)},n.submitForm=function(){var e,t,a,i,c,u,s;return o.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return e=n.state,t=e.username,a=e.name,i=e.description,c=e.isPublic,n.setState({submitting:!0}),l.next=4,o.a.awrap(S.d.create({name:a,description:i,isPublic:c}));case 4:u=l.sent,n.setState({submitting:!1}),null!==u&&(s=n.props.history,r.a.success({message:"\u4ed3\u5e93\u521b\u5efa\u6210\u529f"}),s.push(w.b.generateRepositoryRoute({username:t,repository:a})));case 7:case"end":return l.stop()}}))},n.state={username:"",name:"",description:"",isPublic:!0,submitting:!1,loading:!0},n}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){return o.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setTitle(),this.setState({loading:!0}),e.next=4,o.a.awrap(this.loadUsername());case 4:this.setState({loading:!1});case 5:case"end":return e.stop()}}),null,this)}},{key:"render",value:function(){var e=this.state,t=e.username,n=e.name,r=e.description,a=e.isPublic,o=e.submitting,i=e.loading;return d.a.createElement(C,{username:t,name:n,description:r,isPublic:a,submitting:o,loading:i,onNameInputChange:this.onNameInputChange,onDescriptionInputChange:this.onDescriptionInputChange,onIsPublicSwitchChange:this.onIsPublicSwitchChange,onSubmit:this.onSubmit})}}]),t}(f.PureComponent),_=Object(E.f)(O);n.d(t,"default",(function(){return _}))},955:function(e,t,n){"use strict";var r={};n.r(r),n.d(r,"USERNAME",(function(){return S})),n.d(r,"PASSWORD",(function(){return E}));var a={};n.r(a),n.d(a,"NAME",(function(){return w}));var o={};n.r(o),n.d(o,"NICKNAME",(function(){return N})),n.d(o,"EMAIL",(function(){return O}));var i={};n.r(i),n.d(i,"NAME",(function(){return _}));var c={};n.r(c),n.d(c,"username",(function(){return P})),n.d(c,"password",(function(){return j}));var u={};n.r(u),n.d(u,"name",(function(){return A}));var s={};n.r(s),n.d(s,"nickname",(function(){return x})),n.d(s,"email",(function(){return M}));var l={};n.r(l),n.d(l,"name",(function(){return I}));var f={};n.r(f),n.d(f,"Account",(function(){return c})),n.d(f,"Group",(function(){return u})),n.d(f,"Profile",(function(){return s})),n.d(f,"Repository",(function(){return l}));var d={};n.r(d),n.d(d,"USERNAME",(function(){return R})),n.d(d,"PASSWORD",(function(){return D}));var p={};n.r(p),n.d(p,"NAME",(function(){return T}));var h={};n.r(h),n.d(h,"NICKNAME",(function(){return U}));var b={};n.r(b),n.d(b,"NAME",(function(){return F}));var m={};n.r(m),n.d(m,"Account",(function(){return d})),n.d(m,"Group",(function(){return p})),n.d(m,"Profile",(function(){return h})),n.d(m,"Repository",(function(){return b}));var y={};n.r(y),n.d(y,"USERNAME",(function(){return K})),n.d(y,"PASSWORD",(function(){return W}));var v={};n.r(v),n.d(v,"NAME",(function(){return z}));var g={};n.r(g),n.d(g,"NICKNAME",(function(){return $})),n.d(g,"EMAIL",(function(){return B}));var C={};n.r(C),n.d(C,"NAME",(function(){return G}));var k={};n.r(k),n.d(k,"Account",(function(){return y})),n.d(k,"Group",(function(){return v})),n.d(k,"Profile",(function(){return g})),n.d(k,"Repository",(function(){return C}));var S=/^\w{1,20}$/,E=/^\S{6,}$/,w=/^\S{1,20}$/,N=/^\S{1,20}$/,O=/^([A-z0-9_\-.\u4e00-\u9fa5])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,8})$/,_=/^\w{1,20}$/;function P(e){return r.USERNAME.test(e)}function j(e){return r.PASSWORD.test(e)}function A(e){return a.NAME.test(e)}function x(e){return o.NICKNAME.test(e)}function M(e){return o.EMAIL.test(e)}function I(e){return i.NAME.test(e)}var R="1~20 \u4f4d\u5b57\u6bcd\u3001\u6570\u5b57\u53ca\u4e0b\u5212\u7ebf",D="6 \u4f4d\u4ee5\u4e0a",T="1~20 \u4f4d",U="1~20 \u4f4d",F="1~20 \u4f4d\u5b57\u6bcd\u3001\u6570\u5b57\u53ca\u4e0b\u5212\u7ebf",K="\u7528\u6237\u540d\u4e0d\u7b26\u5408\u8981\u6c42\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165",W="\u5bc6\u7801\u4e0d\u7b26\u5408\u8981\u6c42\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165",z="\u5c0f\u7ec4\u540d\u4e0d\u7b26\u5408\u8981\u6c42\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165",$="\u6635\u79f0\u4e0d\u7b26\u5408\u8981\u6c42\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165",B="\u8bf7\u8f93\u5165\u6709\u6548\u7684\u90ae\u7bb1",G="\u4ed3\u5e93\u540d\u4e0d\u7b26\u5408\u8981\u6c42\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165";n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return k})),n.d(t,"c",(function(){return m}))}}]);
//# sourceMappingURL=22.4413fcce.chunk.js.map