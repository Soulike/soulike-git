(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[14],{1003:function(e,t,n){},1004:function(e,t,n){e.exports={CreateRepository:"Style_CreateRepository__2Mw5u",title:"Style_title__13iw0",label:"Style_label__3gZrW",submitButton:"Style_submitButton__3gaVe",text:"Style_text__5znWR",inlineText:"Style_inlineText__1p1pR",inlineDescription:"Style_inlineDescription__2_j5X"}},1005:function(e,t,n){e.exports=n(1006)},1006:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(1),i=n.n(o),c=n(54);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function l(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=n(16),m=function(e){function t(e){var n,a,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,r=f(t).call(this,e),n=!r||"object"!==typeof r&&"function"!==typeof r?d(a):r,h(d(d(n)),"handleClick",(function(e){var t=n.state.checked,a=n.props.onClick,r=!t;n.setChecked(r,e),a&&a(r,e)})),h(d(d(n)),"handleKeyDown",(function(e){37===e.keyCode?n.setChecked(!1,e):39===e.keyCode&&n.setChecked(!0,e)})),h(d(d(n)),"handleMouseUp",(function(e){var t=n.props.onMouseUp;n.node&&n.node.blur(),t&&t(e)})),h(d(d(n)),"saveNode",(function(e){n.node=e}));var o=!1;return o="checked"in e?!!e.checked:!!e.defaultChecked,n.state={checked:o},n}var n,a,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),n=t,o=[{key:"getDerivedStateFromProps",value:function(e){var t={},n=e.checked;return"checked"in e&&(t.checked=!!n),t}}],(a=[{key:"componentDidMount",value:function(){var e=this.props,t=e.autoFocus,n=e.disabled;t&&!n&&this.focus()}},{key:"setChecked",value:function(e,t){var n=this.props,a=n.disabled,r=n.onChange;a||("checked"in this.props||this.setState({checked:e}),r&&r(e,t))}},{key:"focus",value:function(){this.node.focus()}},{key:"blur",value:function(){this.node.blur()}},{key:"render",value:function(){var e,t=this.props,n=t.className,a=t.prefixCls,o=t.disabled,i=t.loadingIcon,c=t.checkedChildren,l=t.unCheckedChildren,f=u(t,["className","prefixCls","disabled","loadingIcon","checkedChildren","unCheckedChildren"]),p=this.state.checked,d=b((h(e={},n,!!n),h(e,a,!0),h(e,"".concat(a,"-checked"),p),h(e,"".concat(a,"-disabled"),o),e));return r.a.createElement("button",s({},f,{type:"button",role:"switch","aria-checked":p,disabled:o,className:d,ref:this.saveNode,onKeyDown:this.handleKeyDown,onClick:this.handleClick,onMouseUp:this.handleMouseUp}),i,r.a.createElement("span",{className:"".concat(a,"-inner")},p?c:l))}}])&&l(n.prototype,a),o&&l(n,o),t}(a.Component);m.propTypes={className:i.a.string,prefixCls:i.a.string,disabled:i.a.bool,checkedChildren:i.a.any,unCheckedChildren:i.a.any,onChange:i.a.func,onMouseUp:i.a.func,onClick:i.a.func,tabIndex:i.a.number,checked:i.a.bool,defaultChecked:i.a.bool,autoFocus:i.a.bool,loadingIcon:i.a.node},m.defaultProps={prefixCls:"rc-switch",checkedChildren:null,unCheckedChildren:null,className:"",defaultChecked:!1},Object(c.polyfill)(m),t.default=m},1220:function(e,t,n){"use strict";n.r(t);n(114);var a=n(34),r=n(7),o=n.n(r),i=n(27),c=n(61),s=n(84),u=n(265),l=n(264),f=n(266),p=n(0),d=n.n(p),h=(n(406),n(199)),b=(n(99),n(1003),n(1)),m=n(1005),y=n.n(m),v=n(16),g=n.n(v),k=n(100),C=n(269),w=n(38),O=n(35),S=n(48);function _(e){return(_="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function P(e,t){return!t||"object"!==_(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function I(e,t){return(I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var D=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=P(this,N(t).call(this,e))).saveSwitch=function(e){n.rcSwitch=e},n.renderSwitch=function(e){var t,a=e.getPrefixCls,r=n.props,o=r.prefixCls,i=r.size,c=r.loading,s=r.className,u=void 0===s?"":s,l=r.disabled,f=a("switch",o),d=g()(u,(x(t={},"".concat(f,"-small"),"small"===i),x(t,"".concat(f,"-loading"),c),t)),h=c?p.createElement(w.a,{type:"loading",className:"".concat(f,"-loading-icon")}):null;return p.createElement(C.a,{insertExtraNode:!0},p.createElement(y.a,j({},Object(k.a)(n.props,["loading"]),{prefixCls:f,className:d,disabled:l||c,ref:n.saveSwitch,loadingIcon:h})))},Object(S.a)("checked"in e||!("value"in e),"Switch","`value` is not validate prop, do you mean `checked`?"),n}var n,a,r;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&I(e,t)}(t,e),n=t,(a=[{key:"focus",value:function(){this.rcSwitch.focus()}},{key:"blur",value:function(){this.rcSwitch.blur()}},{key:"render",value:function(){return p.createElement(O.a,null,this.renderSwitch)}}])&&E(n.prototype,a),r&&E(n,r),t}(p.Component);D.__ANT_SWITCH=!0,D.propTypes={prefixCls:b.string,size:b.oneOf(["small","default","large"]),className:b.string};n(936);var T=n(937),R=n(1004),F=n.n(R);var M=d.a.memo((function(e){var t=e.username,n=e.name,a=e.description,r=e.isPublic,o=e.onNameInputChange,i=e.onDescriptionInputChange,c=e.onIsPublicSwitchChange,s=e.onSubmit,u=e.submitting,l=e.loading;return d.a.createElement("div",{className:F.a.CreateRepository},d.a.createElement("h1",{className:F.a.title},"\u521b\u5efa\u65b0\u4ed3\u5e93"),d.a.createElement("form",{action:"#",className:F.a.form,onSubmit:s},d.a.createElement("label",{className:F.a.label},d.a.createElement("div",{className:F.a.text},"\u4ed3\u5e93\u540d"),d.a.createElement(T.a,{addonBefore:d.a.createElement("div",null,t," /"),autoFocus:!0,value:n,onChange:o,disabled:l})),d.a.createElement("label",{className:F.a.label},d.a.createElement("div",{className:F.a.text},"\u63cf\u8ff0\uff08\u53ef\u9009\uff09"),d.a.createElement(T.a,{value:a,onChange:i,disabled:l})),d.a.createElement("label",{className:F.a.label},d.a.createElement("div",{className:F.a.inlineText},"\u516c\u5f00"),d.a.createElement(D,{checked:r,onChange:c,disabled:l}),d.a.createElement("div",{className:F.a.inlineDescription},r?"\u6240\u6709\u4eba\u90fd\u80fd\u770b\u5230\u8be5\u4ed3\u5e93":"\u53ea\u6709\u4f60\u80fd\u770b\u5230\u8be5\u4ed3\u5e93")),d.a.createElement(h.a,{htmlType:"submit",type:"primary",block:!0,className:F.a.submitButton,loading:u,disabled:u||l},"\u521b\u5efa\u4ed3\u5e93")))})),U=n(271),B=n(160),z=n(267),K=n(97),W=n(130),J=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).setTitle=function(){document.title="\u521b\u5efa\u4ed3\u5e93 - Git Demo"},n.loadUsername=Object(i.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.a.get();case 2:null!==(t=e.sent)&&(a=t.username,n.setState({username:a}));case 4:case"end":return e.stop()}}),e)}))),n.onNameInputChange=function(e){n.setState({name:e.target.value})},n.onDescriptionInputChange=function(e){n.setState({description:e.target.value})},n.onIsPublicSwitchChange=function(e){n.setState({isPublic:e})},n.onSubmit=function(){var e=Object(i.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!n.validateFormInput()){e.next=4;break}return e.next=4,n.submitForm();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.validateFormInput=function(){if(0===n.state.name.length)return a.a.warn({message:"\u8bf7\u8f93\u5165\u4ed3\u5e93\u540d"}),!1},n.submitForm=Object(i.a)(o.a.mark((function e(){var t,r,i,c,s,u,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state,r=t.username,i=t.name,c=t.description,s=t.isPublic,n.setState({submitting:!0}),e.next=4,B.c.create(new z.d(r,i,c,s));case 4:u=e.sent,n.setState({submitting:!1}),null!==u&&(l=n.props.history,a.a.success({message:"\u4ed3\u5e93\u521b\u5efa\u6210\u529f"}),l.push(W.b.generateRepositoryRoute({username:r,repository:i})));case 7:case"end":return e.stop()}}),e)}))),n.state={username:"",name:"",description:"",isPublic:!0,submitting:!1,loading:!0},n}return Object(f.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setTitle(),this.setState({loading:!0}),e.next=4,this.loadUsername();case 4:this.setState({loading:!1});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.username,n=e.name,a=e.description,r=e.isPublic,o=e.submitting,i=e.loading;return d.a.createElement(M,{username:t,name:n,description:a,isPublic:r,submitting:o,loading:i,onNameInputChange:this.onNameInputChange,onDescriptionInputChange:this.onDescriptionInputChange,onIsPublicSwitchChange:this.onIsPublicSwitchChange,onSubmit:this.onSubmit})}}]),t}(p.PureComponent),A=Object(K.f)(J);n.d(t,"default",(function(){return A}))}}]);
//# sourceMappingURL=14.65963bcd.chunk.js.map