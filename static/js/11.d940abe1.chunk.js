(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[11],{1001:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(1003),i=a.n(o);t.a=r.a.memo((function(e){var t=e.children,a=e.required;return r.a.createElement("div",{className:i.a.InputLabel},t,r.a.createElement("span",{className:i.a.requiredSign},a?" *":""))}))},1003:function(e,t,a){e.exports={InputLabel:"Style_InputLabel__3wLmK",requiredSign:"Style_requiredSign__3lJIr"}},1004:function(e,t,a){"use strict";var n=a(1001);a.d(t,"a",(function(){return n.a}))},1005:function(e,t,a){e.exports={SettingsTitle:"Style_SettingsTitle__rgD4i"}},1006:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(0),r=a.n(n),o=a(1005),i=a.n(o);var s=r.a.memo((function(e){var t=e.children;return r.a.createElement("h2",{className:i.a.SettingsTitle},t)}))},1027:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(0),r=a.n(n),o=a(1034),i=a.n(o),s=a(967),c=a(968);var l=r.a.memo((function(e){var t=e.warning,a=e.validateText,n=e.password,o=e.validateInputPlaceholder,l=e.onValidateInputChange,u=e.onPasswordInputChange,d=e.visible,p=e.onOk,m=e.onCancel,f=e.title,h=e.confirmLoading;return r.a.createElement(s.a,{confirmLoading:h,title:f,className:i.a.CriticalOperationConfirmModal,visible:d,onOk:p,onCancel:m,destroyOnClose:!0},r.a.createElement("div",{className:i.a.content},r.a.createElement("div",{className:i.a.warningWrapper},t),r.a.createElement(c.a,{className:i.a.input,value:a,onChange:l,placeholder:o,autoFocus:!0}),r.a.createElement(c.a,{className:i.a.input,placeholder:"\u8d26\u6237\u5bc6\u7801",type:"password",value:n,onChange:u})))}))},1030:function(e,t,a){e.exports=a(1031)},1031:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),i=a.n(o),s=a(141);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function u(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var h=a(5),b=function(e){function t(e){var a,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,r=d(t).call(this,e),a=!r||"object"!==typeof r&&"function"!==typeof r?m(n):r,f(m(m(a)),"handleClick",(function(e){var t=a.state.checked,n=a.props.onClick,r=!t;a.setChecked(r,e),n&&n(r,e)})),f(m(m(a)),"handleKeyDown",(function(e){37===e.keyCode?a.setChecked(!1,e):39===e.keyCode&&a.setChecked(!0,e)})),f(m(m(a)),"handleMouseUp",(function(e){var t=a.props.onMouseUp;a.node&&a.node.blur(),t&&t(e)})),f(m(m(a)),"saveNode",(function(e){a.node=e}));var o=!1;return o="checked"in e?!!e.checked:!!e.defaultChecked,a.state={checked:o},a}var a,n,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),a=t,o=[{key:"getDerivedStateFromProps",value:function(e){var t={},a=e.checked;return"checked"in e&&(t.checked=!!a),t}}],(n=[{key:"componentDidMount",value:function(){var e=this.props,t=e.autoFocus,a=e.disabled;t&&!a&&this.focus()}},{key:"setChecked",value:function(e,t){var a=this.props,n=a.disabled,r=a.onChange;n||("checked"in this.props||this.setState({checked:e}),r&&r(e,t))}},{key:"focus",value:function(){this.node.focus()}},{key:"blur",value:function(){this.node.blur()}},{key:"render",value:function(){var e,t=this.props,a=t.className,n=t.prefixCls,o=t.disabled,i=t.loadingIcon,s=t.checkedChildren,u=t.unCheckedChildren,d=l(t,["className","prefixCls","disabled","loadingIcon","checkedChildren","unCheckedChildren"]),p=this.state.checked,m=h((f(e={},a,!!a),f(e,n,!0),f(e,"".concat(n,"-checked"),p),f(e,"".concat(n,"-disabled"),o),e));return r.a.createElement("button",c({},d,{type:"button",role:"switch","aria-checked":p,disabled:o,className:m,ref:this.saveNode,onKeyDown:this.handleKeyDown,onClick:this.handleClick,onMouseUp:this.handleMouseUp}),i,r.a.createElement("span",{className:"".concat(n,"-inner")},p?s:u))}}])&&u(a.prototype,n),o&&u(a,o),t}(n.Component);b.propTypes={className:i.a.string,prefixCls:i.a.string,disabled:i.a.bool,checkedChildren:i.a.any,unCheckedChildren:i.a.any,onChange:i.a.func,onMouseUp:i.a.func,onClick:i.a.func,tabIndex:i.a.number,checked:i.a.bool,defaultChecked:i.a.bool,autoFocus:i.a.bool,loadingIcon:i.a.node},b.defaultProps={prefixCls:"rc-switch",checkedChildren:null,unCheckedChildren:null,className:"",defaultChecked:!1},Object(s.a)(b),t.default=b},1034:function(e,t,a){e.exports={CriticalOperationConfirmModal:"Style_CriticalOperationConfirmModal__1LREa",content:"Style_content__15AF6",warningWrapper:"Style_warningWrapper__1Wnxv",input:"Style_input__dIid9"}},1041:function(e,t,a){"use strict";var n=a(0),r={name:"lock",theme:"outlined",icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"}}]}},o=a(12),i=function(e,t){return n.createElement(o.a,Object.assign({},e,{ref:t,icon:r}))};i.displayName="LockOutlined";t.a=n.forwardRef(i)},1045:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(0),r=a.n(n),o=a(1206);var i=r.a.memo((function(e){var t=e.children;return r.a.createElement(o.a,{bordered:!0,split:!0},t)}))},1046:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(0),r=a.n(n),o=a(1206),i=a(82);var s=r.a.memo((function(e){var t=e.title,a=e.description,n=e.onButtonClick,s=e.buttonText;return r.a.createElement(o.a.Item,{extra:r.a.createElement(i.a,{type:"danger",onClick:n},s)},r.a.createElement(o.a.Item.Meta,{title:t,description:a}))}))},1078:function(e,t,a){"use strict";a.d(t,"a",(function(){return O}));var n=a(0),r=a(1030),o=a.n(r),i=a(5),s=a.n(i),c=a(34),l=a(119),u=a.n(l),d=a(227),p=a(84),m=a(55),f=a(118);function h(e){return(h="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function v(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function y(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function C(e,t){return!t||"object"!==h(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function k(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var O=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(h,e);var t,a,r,i,l=(t=h,function(){var e,a=w(t);if(k()){var n=w(this).constructor;e=Reflect.construct(a,arguments,n)}else e=a.apply(this,arguments);return C(this,e)});function h(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,h),(t=l.call(this,e)).saveSwitch=function(e){t.rcSwitch=e},t.renderSwitch=function(e){var a=e.getPrefixCls,r=e.direction,i=t.props,l=i.prefixCls,p=i.size,m=i.loading,h=i.className,y=void 0===h?"":h,g=i.disabled,C=a("switch",l),k=m?n.createElement(u.a,{className:"".concat(C,"-loading-icon")}):null;return n.createElement(f.b.Consumer,null,(function(e){var a,i=s()(y,(v(a={},"".concat(C,"-small"),"small"===(p||e)),v(a,"".concat(C,"-loading"),m),v(a,"".concat(C,"-rtl"),"rtl"===r),a));return n.createElement(d.a,{insertExtraNode:!0},n.createElement(o.a,b({},Object(c.a)(t.props,["loading"]),{prefixCls:C,className:i,disabled:g||m,ref:t.saveSwitch,loadingIcon:k})))}))},Object(m.a)("checked"in e||!("value"in e),"Switch","`value` is not validate prop, do you mean `checked`?"),t}return a=h,(r=[{key:"focus",value:function(){this.rcSwitch.focus()}},{key:"blur",value:function(){this.rcSwitch.blur()}},{key:"render",value:function(){return n.createElement(p.a,null,this.renderSwitch)}}])&&y(a.prototype,r),i&&y(a,i),h}(n.Component);O.__ANT_SWITCH=!0},1112:function(e,t,a){e.exports={Options:"Style_Options__1uo9K",itemWrapper:"Style_itemWrapper__2NFs3"}},1113:function(e,t,a){e.exports={RepositoryName:"Style_RepositoryName__3_t91",label:"Style_label__1U8rk",input:"Style_input__3WUY0"}},1114:function(e,t,a){e.exports={Description:"Style_Description__3jlHf",textarea:"Style_textarea__iH3Cp",buttonWrapper:"Style_buttonWrapper__g906C"}},1115:function(e,t,a){},1202:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return ce}));var n=a(1),r=a.n(n),o=a(3),i=a(8),s=a(10),c=a(17),l=a(18),u=a(0),d=a.n(u),p=a(1112),m=a.n(p),f=a(1006),h=a(1113),b=a.n(h),v=a(234),y=a(968),g=a(964),C=a(82),k=a(1004),w=a(140);function O(e,t){return 0===e.length||t}var E=d.a.memo((function(e){var t=e.repositoryName,a=e.onRenameConfirm,n=e.onRepositoryNameInputChange,r=e.submitting;return d.a.createElement("div",{className:b.a.RepositoryName},d.a.createElement("label",{className:b.a.label},d.a.createElement(k.a,null,"\u4ed3\u5e93\u540d"),d.a.createElement(v.a,{trigger:"focus",title:w.c.Repository.NAME},d.a.createElement(y.a,{className:b.a.input,value:t,onChange:n,disabled:r})),d.a.createElement(g.a,{title:"\u91cd\u547d\u540d\u4ed3\u5e93\u4f1a\u5bfc\u81f4\u539f\u4ed3\u5e93\u7f51\u5740\u4e0e\u514b\u9686\u8def\u5f84\u5931\u6548\uff0c\u786e\u5b9a\u7ee7\u7eed\uff1f",onConfirm:a,disabled:O(t,r)},d.a.createElement(C.a,{className:b.a.button,loading:r,disabled:O(t,r)},"\u91cd\u547d\u540d"))))})),N=a(117),S=a(21),x=a(961),P=a(325),_=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(e){var n;Object(i.a)(this,a),(n=t.call(this,e)).onRepositoryNameInputChange=function(e){n.setState({repositoryName:e.target.value})},n.onRenameConfirm=Object(o.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.validateParameters()){e.next=5;break}return n.setState({submitting:!0}),e.next=4,n.submit();case 4:n.setState({submitting:!1});case 5:case"end":return e.stop()}}),e)}))),n.validateParameters=function(){var e=n.state.repositoryName;return!!w.b.Repository.name(e)||(x.a.warn({message:w.a.Repository.NAME,description:w.c.Repository.NAME}),!1)},n.submit=Object(o.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state.repositoryName,a=n.props.match.params.repository,e.next=4,P.a.setName({name:a},{name:t});case 4:null!==e.sent&&n.onSubmitSuccess();case 6:case"end":return e.stop()}}),e)}))),n.onSubmitSuccess=function(){x.a.success({message:"\u4ed3\u5e93\u91cd\u547d\u540d\u6210\u529f"});var e=n.props.history,t=n.props.match.params.username,a=n.state.repositoryName;return e.replace(S.Function.generateRepositorySettingsOptionsRoute({username:t,repository:a}))};var s=e.match.params.repository;return n.state={repositoryName:s,submitting:!1},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state,t=e.repositoryName,a=e.submitting;return d.a.createElement(E,{repositoryName:t,onRenameConfirm:this.onRenameConfirm,onRepositoryNameInputChange:this.onRepositoryNameInputChange,submitting:a})}}]),a}(u.PureComponent),j=Object(N.f)(_),R=a(1114),I=a.n(R),M=a(962);var V=d.a.memo((function(e){var t=e.description,a=e.onSubmit,n=e.onTextareaChange,r=e.loading,o=e.submitting;return d.a.createElement("div",{className:I.a.Description},d.a.createElement("label",null,d.a.createElement(k.a,null,"\u4ed3\u5e93\u63cf\u8ff0"),d.a.createElement(M.a,{spinning:r},d.a.createElement(y.a.TextArea,{disabled:r||o,value:t,className:I.a.textarea,onChange:n}))),d.a.createElement("div",{className:I.a.buttonWrapper},d.a.createElement(C.a,{loading:o,disabled:r||o,className:I.a.button,onClick:a},"\u786e\u5b9a")))})),T=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).onTextareaChange=function(e){n.setState({description:e.target.value})},n.onSubmit=Object(o.a)(r.a.mark((function e(){var t,a,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state.description,a=n.props.match.params.repository,n.setState({submitting:!0}),e.next=5,P.a.setDescription({name:a,description:t});case 5:o=e.sent,n.setState({submitting:!1}),null!==o&&x.a.success({message:"\u4ed3\u5e93\u63cf\u8ff0\u4fee\u6539\u6210\u529f"});case 8:case"end":return e.stop()}}),e)}))),n.state={description:"",submitting:!1},n}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,t,a){var n=this.props,r=n.repository.description,o=n.loading;e.loading&&o&&this.setState({description:r})}},{key:"render",value:function(){var e=this.props.loading,t=this.state,a=t.description,n=t.submitting;return d.a.createElement(V,{submitting:n,loading:e,description:a,onTextareaChange:this.onTextareaChange,onSubmit:this.onSubmit})}}]),a}(u.PureComponent),D=Object(N.f)(T),L=a(1115),F=a.n(L),W=a(1078),U=a(1027),H={name:"unlock",theme:"outlined",icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 464H332V240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v68c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-68c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zm-40 376H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"}}]}},A=a(12),z=function(e,t){return u.createElement(A.a,Object.assign({},e,{ref:t,icon:H}))};z.displayName="UnlockOutlined";var B=u.forwardRef(z),K=a(1041);var q=d.a.memo((function(e){var t=e.loading,a=e.isPublic,n=e.onSwitchChange,r=e.modalRepositoryName,o=e.modalPassword,i=e.onModalRepositoryNameInputChange,s=e.onModalPasswordInputChange,c=e.modalVisible,l=e.onModalOk,u=e.onModalCancel;return d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{className:F.a.AccessibilitySwitch},d.a.createElement(k.a,null,"\u662f\u5426\u516c\u5f00"),d.a.createElement(W.a,{loading:t,checked:a,disabled:t,onChange:n,checkedChildren:d.a.createElement(d.a.Fragment,null,d.a.createElement(B,null)," \u516c\u5f00"),unCheckedChildren:d.a.createElement(d.a.Fragment,null,d.a.createElement(K.a,null)," \u79c1\u6709")})),d.a.createElement(U.a,{confirmLoading:t,title:"\u53ef\u89c1\u6027\u5207\u6362\u786e\u8ba4",warning:d.a.createElement("strong",null,"\u5c06\u4ed3\u5e93\u6539\u4e3a\u516c\u6709\u5c06\u4f1a\u8ba9",d.a.createElement("span",{style:{color:"red"}},"\u6240\u6709\u4eba"),"\u770b\u5230\u4ed3\u5e93\u5185\u7684\u4ee3\u7801\uff0c\u8bf7\u5728\u4e0b\u65b9\u8f93\u5165\u672c\u4ed3\u5e93\u7684\u540d\u5b57\u548c\u60a8\u7684\u5bc6\u7801\u4ee5\u786e\u8ba4\u64cd\u4f5c\u3002"),validateInputPlaceholder:"\u4ed3\u5e93\u540d",validateText:r,password:o,visible:c,onPasswordInputChange:s,onValidateInputChange:i,onOk:l,onCancel:u}))})),G=a(28),J=a(127),Y=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).onSwitchChange=function(){var e=Object(o.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((a=n.state.isPublic)||!t){e.next=5;break}n.setState({modalVisible:!0}),e.next=8;break;case 5:if(!a||t){e.next=8;break}return e.next=8,n.setIsPublic(t);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.onModalRepositoryNameInputChange=function(e){n.setState({modalRepositoryName:e.target.value})},n.onModalPasswordInputChange=function(e){n.setState({modalPassword:e.target.value})},n.onModalOk=Object(o.a)(r.a.mark((function e(){var t,a,o,i,s,c,l,u,d;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.props.match.params,a=t.repository,o=t.username,i=n.state,s=i.modalRepositoryName,c=i.modalPassword,l=i.isPublic,a===s){e.next=6;break}x.a.warn({message:"\u4ed3\u5e93\u540d\u4e0d\u6b63\u786e"}),e.next=19;break;case 6:return u=J.a.calculateHash(o,c),e.next=9,G.a.checkPassword({hash:u});case 9:if(null===(d=e.sent)){e.next=19;break}if(!d.isCorrect){e.next=18;break}return e.next=15,n.setIsPublic(!l);case 15:n.setState({modalVisible:!1,modalRepositoryName:"",modalPassword:""}),e.next=19;break;case 18:x.a.warn({message:"\u5bc6\u7801\u4e0d\u6b63\u786e"});case 19:case"end":return e.stop()}}),e)}))),n.onModalCancel=Object(o.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.setState({modalVisible:!1,modalRepositoryName:"",modalPassword:""});case 1:case"end":return e.stop()}}),e)}))),n.setIsPublic=function(){var e=Object(o.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.props.match.params.repository,n.state.isPublic===t){e.next=9;break}return n.setState({submitting:!0}),e.next=6,G.i.setIsPublic({name:a,isPublic:t});case 6:null!==e.sent&&window.location.reload(),n.setState({submitting:!1});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={submitting:!1,isPublic:!0,modalRepositoryName:"",modalPassword:"",modalVisible:!1},n}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,t,a){var n=this.props,r=n.repository.isPublic,o=n.loading;e.loading&&o&&this.setState({isPublic:r})}},{key:"render",value:function(){var e=this.state,t=e.submitting,a=e.isPublic,n=e.modalRepositoryName,r=e.modalPassword,o=e.modalVisible,i=this.props.loading;return d.a.createElement(q,{loading:t||i,isPublic:a,modalRepositoryName:n,modalPassword:r,modalVisible:o,onSwitchChange:this.onSwitchChange,onModalOk:this.onModalOk,onModalCancel:this.onModalCancel,onModalPasswordInputChange:this.onModalPasswordInputChange,onModalRepositoryNameInputChange:this.onModalRepositoryNameInputChange})}}]),a}(u.PureComponent),Q=Object(N.f)(Y),X=a(1046);var Z=d.a.memo((function(e){var t=e.onButtonClick,a=e.modalRepositoryName,n=e.modalPassword,r=e.onModalRepositoryNameInputChange,o=e.onModalPasswordInputChange,i=e.onModalOk,s=e.onModalCancel,c=e.modalVisible,l=e.modalConfirmLoading;return d.a.createElement(d.a.Fragment,null,d.a.createElement(X.a,{buttonText:"\u5220\u9664\u4ed3\u5e93",title:"\u5220\u9664\u4ed3\u5e93",description:"\u5220\u9664\u4ed3\u5e93\u7684\u64cd\u4f5c\u4e0d\u53ef\u6062\u590d\uff0c\u8bf7\u614e\u91cd\u3002",onButtonClick:t}),d.a.createElement(U.a,{warning:d.a.createElement("strong",null,"\u5982\u679c\u4ed3\u5e93\u88ab\u5220\u9664\uff0c\u60a8\u5c06\u4e22\u5931\u4ed3\u5e93\u7684\u6587\u4ef6\u3001\u63d0\u4ea4\u8bb0\u5f55\u7b49",d.a.createElement("span",{style:{color:"red"}},"\u6240\u6709\u4fe1\u606f"),"\uff0c\u4e14\u5220\u9664\u6210\u529f\u540e\u6ca1\u6709\u6062\u590d\u7684\u53ef\u80fd\u3002\u8bf7\u5728\u4e0b\u65b9\u8f93\u5165\u672c\u4ed3\u5e93\u7684\u540d\u5b57\u548c\u60a8\u7684\u5bc6\u7801\u4ee5\u786e\u8ba4\u64cd\u4f5c\u3002"),validateInputPlaceholder:"\u4ed3\u5e93\u7684\u540d\u5b57",title:"\u5220\u9664\u4ed3\u5e93\u786e\u8ba4",validateText:a,password:n,onValidateInputChange:r,onPasswordInputChange:o,onOk:i,onCancel:s,visible:c,confirmLoading:l}))})),$=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).onButtonClick=Object(o.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.setState({modalRepositoryName:"",modalPassword:"",modalVisible:!0});case 1:case"end":return e.stop()}}),e)}))),n.onModalRepositoryNameInputChange=function(e){n.setState({modalRepositoryName:e.target.value})},n.onModalPasswordInputChange=function(e){n.setState({modalPassword:e.target.value})},n.onModalOk=Object(o.a)(r.a.mark((function e(){var t,a,o,i,s,c,l,u,d,p;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.props,a=t.match.params,o=a.repository,i=a.username,s=t.history,c=n.state,l=c.modalRepositoryName,u=c.modalPassword,o===l){e.next=6;break}x.a.warn({message:"\u4ed3\u5e93\u540d\u4e0d\u6b63\u786e"}),e.next=25;break;case 6:return d=J.a.calculateHash(i,u),n.setState({modalConfirmLoading:!0}),e.next=10,G.a.checkPassword({hash:d});case 10:if(null===(p=e.sent)){e.next=24;break}if(!p.isCorrect){e.next=23;break}return e.next=16,G.h.del({name:o});case 16:if(null===e.sent){e.next=21;break}return x.a.success({message:"\u4ed3\u5e93\u5220\u9664\u6210\u529f"}),n.setState({modalVisible:!1}),e.abrupt("return",s.replace(S.Function.generatePersonalCenterRoute({username:i})));case 21:e.next=24;break;case 23:x.a.warn({message:"\u5bc6\u7801\u4e0d\u6b63\u786e"});case 24:n.setState({modalConfirmLoading:!1});case 25:case"end":return e.stop()}}),e)}))),n.onModalCancel=function(){n.setState({modalVisible:!1})},n.state={modalRepositoryName:"",modalPassword:"",modalVisible:!1,modalConfirmLoading:!1},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state,t=e.modalConfirmLoading,a=e.modalVisible,n=e.modalPassword,r=e.modalRepositoryName;return d.a.createElement(Z,{onButtonClick:this.onButtonClick,modalConfirmLoading:t,modalVisible:a,modalPassword:n,modalRepositoryName:r,onModalOk:this.onModalOk,onModalCancel:this.onModalCancel,onModalPasswordInputChange:this.onModalPasswordInputChange,onModalRepositoryNameInputChange:this.onModalRepositoryNameInputChange})}}]),a}(u.PureComponent),ee=Object(N.f)($),te=a(1045);var ae=d.a.memo((function(){return d.a.createElement(te.a,null,d.a.createElement(ee,null))}));var ne=d.a.memo((function(e){var t=e.repository,a=e.loading;return d.a.createElement("div",{className:m.a.Options},d.a.createElement(f.a,null,"\u9009\u9879"),d.a.createElement("div",{className:m.a.itemWrapper},d.a.createElement(j,null)),d.a.createElement("div",{className:m.a.itemWrapper},d.a.createElement(Q,{repository:t,loading:a})),d.a.createElement("div",{className:m.a.itemWrapper},d.a.createElement(D,{repository:t,loading:a})),d.a.createElement(f.a,null,d.a.createElement("span",{style:{color:"red"}},"\u5371\u9669\u533a")),d.a.createElement(ae,null))})),re=a(87),oe=S.CONFIG.PAGE_ID,ie=S.CONFIG.PAGE_ID_TO_ROUTE,se=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).setStatePromise=Object(re.promisify)(n.setState),n.loadRepository=Object(o.a)(r.a.mark((function e(){var t,a,o,i,s,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props,a=t.match.params,o=a.repository,i=a.username,s=t.history,e.next=3,P.a.repository({username:i},{name:o});case 3:if(null===(c=e.sent)){e.next=9;break}return e.next=7,n.setStatePromise({repository:c});case 7:e.next=10;break;case 9:return e.abrupt("return",s.replace(ie[oe.NOT_FOUND]));case 10:case"end":return e.stop()}}),e)}))),n.state={repository:new J.h("","","",!0),loading:!0},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(o.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setStatePromise({loading:!0});case 2:return e.next=4,this.loadRepository();case 4:return e.next=6,this.setStatePromise({loading:!1});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.repository,a=e.loading;return d.a.createElement(ne,{repository:t,loading:a})}}]),a}(u.PureComponent),ce=Object(N.f)(se)}}]);
//# sourceMappingURL=11.d940abe1.chunk.js.map