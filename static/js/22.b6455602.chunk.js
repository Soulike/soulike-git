(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[22],{1e3:function(e,t,n){"use strict";n.d(t,"a",(function(){return k}));var a=n(0),r=n(1),o=n(1001),i=n.n(o),c=n(14),s=n.n(c),u=n(103),l=n(285),f=n(22),p=n(132),d=n(40);function h(e){return(h="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function v(e,t){return!t||"object"!==h(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var k=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=v(this,g(t).call(this,e))).saveSwitch=function(e){n.rcSwitch=e},n.renderSwitch=function(e){var t,r=e.getPrefixCls,o=n.props,c=o.prefixCls,p=o.size,d=o.loading,h=o.className,y=void 0===h?"":h,v=o.disabled,g=r("switch",c),C=s()(y,(m(t={},"".concat(g,"-small"),"small"===p),m(t,"".concat(g,"-loading"),d),t)),k=d?a.createElement(f.a,{type:"loading",className:"".concat(g,"-loading-icon")}):null;return a.createElement(l.a,{insertExtraNode:!0},a.createElement(i.a,b({},Object(u.a)(n.props,["loading"]),{prefixCls:g,className:C,disabled:v||d,ref:n.saveSwitch,loadingIcon:k})))},Object(d.a)("checked"in e||!("value"in e),"Switch","`value` is not validate prop, do you mean `checked`?"),n}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(t,e),n=t,(r=[{key:"focus",value:function(){this.rcSwitch.focus()}},{key:"blur",value:function(){this.rcSwitch.blur()}},{key:"render",value:function(){return a.createElement(p.a,null,this.renderSwitch)}}])&&y(n.prototype,r),o&&y(n,o),t}(a.Component);k.__ANT_SWITCH=!0,k.propTypes={prefixCls:r.string,size:r.oneOf(["small","default","large"]),className:r.string}},1001:function(e,t,n){e.exports=n(1002)},1002:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(1),i=n.n(o),c=n(50);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function l(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=n(14),m=function(e){function t(e){var n,a,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,r=f(t).call(this,e),n=!r||"object"!==typeof r&&"function"!==typeof r?d(a):r,h(d(d(n)),"handleClick",(function(e){var t=n.state.checked,a=n.props.onClick,r=!t;n.setChecked(r,e),a&&a(r,e)})),h(d(d(n)),"handleKeyDown",(function(e){37===e.keyCode?n.setChecked(!1,e):39===e.keyCode&&n.setChecked(!0,e)})),h(d(d(n)),"handleMouseUp",(function(e){var t=n.props.onMouseUp;n.node&&n.node.blur(),t&&t(e)})),h(d(d(n)),"saveNode",(function(e){n.node=e}));var o=!1;return o="checked"in e?!!e.checked:!!e.defaultChecked,n.state={checked:o},n}var n,a,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),n=t,o=[{key:"getDerivedStateFromProps",value:function(e){var t={},n=e.checked;return"checked"in e&&(t.checked=!!n),t}}],(a=[{key:"componentDidMount",value:function(){var e=this.props,t=e.autoFocus,n=e.disabled;t&&!n&&this.focus()}},{key:"setChecked",value:function(e,t){var n=this.props,a=n.disabled,r=n.onChange;a||("checked"in this.props||this.setState({checked:e}),r&&r(e,t))}},{key:"focus",value:function(){this.node.focus()}},{key:"blur",value:function(){this.node.blur()}},{key:"render",value:function(){var e,t=this.props,n=t.className,a=t.prefixCls,o=t.disabled,i=t.loadingIcon,c=t.checkedChildren,l=t.unCheckedChildren,f=u(t,["className","prefixCls","disabled","loadingIcon","checkedChildren","unCheckedChildren"]),p=this.state.checked,d=b((h(e={},n,!!n),h(e,a,!0),h(e,"".concat(a,"-checked"),p),h(e,"".concat(a,"-disabled"),o),e));return r.a.createElement("button",s({},f,{type:"button",role:"switch","aria-checked":p,disabled:o,className:d,ref:this.saveNode,onKeyDown:this.handleKeyDown,onClick:this.handleClick,onMouseUp:this.handleMouseUp}),i,r.a.createElement("span",{className:"".concat(a,"-inner")},p?c:l))}}])&&l(n.prototype,a),o&&l(n,o),t}(a.Component);m.propTypes={className:i.a.string,prefixCls:i.a.string,disabled:i.a.bool,checkedChildren:i.a.any,unCheckedChildren:i.a.any,onChange:i.a.func,onMouseUp:i.a.func,onClick:i.a.func,tabIndex:i.a.number,checked:i.a.bool,defaultChecked:i.a.bool,autoFocus:i.a.bool,loadingIcon:i.a.node},m.defaultProps={prefixCls:"rc-switch",checkedChildren:null,unCheckedChildren:null,className:"",defaultChecked:!1},Object(c.polyfill)(m),t.default=m},1054:function(e,t,n){e.exports={CreateRepository:"Style_CreateRepository__2Mw5u",title:"Style_title__13iw0",label:"Style_label__3gZrW",submitButton:"Style_submitButton__3gaVe",text:"Style_text__5znWR",inlineText:"Style_inlineText__1p1pR",inlineDescription:"Style_inlineDescription__2_j5X"}},1294:function(e,t,n){"use strict";n.r(t);n(104);var a=n(15),r=n(4),o=n.n(r),i=n(39),c=n(54),s=n(117),u=n(116),l=n(118),f=n(0),p=n.n(f),d=(n(430),n(133)),h=(n(998),n(1e3)),b=(n(959),n(961)),m=n(1054),y=n.n(m);var v=p.a.memo((function(e){var t=e.username,n=e.name,a=e.description,r=e.isPublic,o=e.onNameInputChange,i=e.onDescriptionInputChange,c=e.onIsPublicSwitchChange,s=e.onSubmit,u=e.submitting,l=e.loading;return p.a.createElement("div",{className:y.a.CreateRepository},p.a.createElement("h1",{className:y.a.title},"\u521b\u5efa\u65b0\u4ed3\u5e93"),p.a.createElement("form",{action:"#",className:y.a.form,onSubmit:s},p.a.createElement("label",{className:y.a.label},p.a.createElement("div",{className:y.a.text},"\u4ed3\u5e93\u540d"),p.a.createElement(b.a,{addonBefore:p.a.createElement("div",null,t," /"),autoFocus:!0,value:n,onChange:o,disabled:l})),p.a.createElement("label",{className:y.a.label},p.a.createElement("div",{className:y.a.text},"\u63cf\u8ff0\uff08\u53ef\u9009\uff09"),p.a.createElement(b.a,{value:a,onChange:i,disabled:l})),p.a.createElement("label",{className:y.a.label},p.a.createElement("div",{className:y.a.inlineText},"\u516c\u5f00"),p.a.createElement(h.a,{checked:r,onChange:c,disabled:l}),p.a.createElement("div",{className:y.a.inlineDescription},r?"\u6240\u6709\u4eba\u90fd\u80fd\u770b\u5230\u8be5\u4ed3\u5e93":"\u53ea\u6709\u4f60\u80fd\u770b\u5230\u8be5\u4ed3\u5e93")),p.a.createElement(d.a,{htmlType:"submit",type:"primary",block:!0,className:y.a.submitButton,loading:u,disabled:u||l},"\u521b\u5efa\u4ed3\u5e93")))})),g=n(292),C=n(210),k=n(97),w=n(88),O=n(168),S=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).setTitle=function(){document.title="\u521b\u5efa\u4ed3\u5e93 - ".concat(O.a.NAME)},n.loadUsername=function(){var e,t;return o.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,o.a.awrap(g.a.get());case 2:null!==(e=a.sent)&&(t=e.username,n.setState({username:t}));case 4:case"end":return a.stop()}}))},n.onNameInputChange=function(e){n.setState({name:e.target.value})},n.onDescriptionInputChange=function(e){n.setState({description:e.target.value})},n.onIsPublicSwitchChange=function(e){n.setState({isPublic:e})},n.onSubmit=function(e){return o.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),!n.validateFormInput()){t.next=4;break}return t.next=4,o.a.awrap(n.submitForm());case 4:case"end":return t.stop()}}))},n.validateFormInput=function(){return 0!==n.state.name.length||(a.a.warn({message:"\u8bf7\u8f93\u5165\u4ed3\u5e93\u540d"}),!1)},n.submitForm=function(){var e,t,r,i,c,s,u;return o.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return e=n.state,t=e.username,r=e.name,i=e.description,c=e.isPublic,n.setState({submitting:!0}),l.next=4,o.a.awrap(C.d.create({name:r,description:i,isPublic:c}));case 4:s=l.sent,n.setState({submitting:!1}),null!==s&&(u=n.props.history,a.a.success({message:"\u4ed3\u5e93\u521b\u5efa\u6210\u529f"}),u.push(w.b.generateRepositoryRoute({username:t,repository:r})));case 7:case"end":return l.stop()}}))},n.state={username:"",name:"",description:"",isPublic:!0,submitting:!1,loading:!0},n}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){return o.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setTitle(),this.setState({loading:!0}),e.next=4,o.a.awrap(this.loadUsername());case 4:this.setState({loading:!1});case 5:case"end":return e.stop()}}),null,this)}},{key:"render",value:function(){var e=this.state,t=e.username,n=e.name,a=e.description,r=e.isPublic,o=e.submitting,i=e.loading;return p.a.createElement(v,{username:t,name:n,description:a,isPublic:r,submitting:o,loading:i,onNameInputChange:this.onNameInputChange,onDescriptionInputChange:this.onDescriptionInputChange,onIsPublicSwitchChange:this.onIsPublicSwitchChange,onSubmit:this.onSubmit})}}]),t}(f.PureComponent),_=Object(k.f)(S);n.d(t,"default",(function(){return _}))},998:function(e,t,n){"use strict";n(102),n(999)},999:function(e,t,n){}}]);
//# sourceMappingURL=22.b6455602.chunk.js.map