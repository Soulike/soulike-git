(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[25],{1185:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(1186),c=n.n(i);t.a=r.a.memo((function(e){var t=e.children,n=e.required;return r.a.createElement("div",{className:c.a.InputLabel},t,r.a.createElement("span",{className:c.a.requiredSign},n?" *":""))}))},1186:function(e,t,n){e.exports={InputLabel:"Style_InputLabel__3wLmK",requiredSign:"Style_requiredSign__3lJIr"}},1194:function(e,t,n){e.exports={PageTitle:"Style_PageTitle__3R_vY"}},1197:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(0),r=n.n(a),i=n(1194),c=n.n(i);var s=function(e){var t=e.children;return r.a.createElement("h1",{className:c.a.PageTitle},t)}},1263:function(e,t,n){e.exports={CreateRepository:"Style_CreateRepository__2Mw5u",label:"Style_label__3gZrW",submitButton:"Style_submitButton__3gaVe",inlineDescription:"Style_inlineDescription__2_j5X"}},1387:function(e,t,n){"use strict";var a=n(5),r=n.n(a),i=n(6),c=n.n(i),s=n(0),o=n(8),l=n(11),u=n(27),m=n(7),d=n.n(m),p=n(273),b=n(36),h=s.forwardRef((function(e,t){var n,a=e.prefixCls,r=void 0===a?"rc-switch":a,i=e.className,c=e.checked,m=e.defaultChecked,h=e.disabled,f=e.loadingIcon,g=e.checkedChildren,v=e.unCheckedChildren,y=e.onClick,C=e.onChange,S=e.onKeyDown,w=Object(u.a)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),E=Object(p.a)(!1,{value:c,defaultValue:m}),N=Object(l.a)(E,2),k=N[0],x=N[1];function O(e,t){var n=k;return h||(x(n=e),null===C||void 0===C||C(n,t)),n}var _=d()(r,i,(n={},Object(o.a)(n,"".concat(r,"-checked"),k),Object(o.a)(n,"".concat(r,"-disabled"),h),n));return s.createElement("button",Object.assign({},w,{type:"button",role:"switch","aria-checked":k,disabled:h,className:_,ref:t,onKeyDown:function(e){e.which===b.a.LEFT?O(!1,e):e.which===b.a.RIGHT&&O(!0,e),null===S||void 0===S||S(e)},onClick:function(e){var t=O(!k,e);null===y||void 0===y||y(t,e)}}),f,s.createElement("span",{className:"".concat(r,"-inner")},k?g:v))}));h.displayName="Switch";var f=h,g=n(127),v=n.n(g),y=n(259),C=n(119),S=n(117),w=n(86),E=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},N=s.forwardRef((function(e,t){var n,a=e.prefixCls,i=e.size,o=e.loading,l=e.className,u=void 0===l?"":l,m=e.disabled,p=E(e,["prefixCls","size","loading","className","disabled"]);Object(w.a)("checked"in p||!("value"in p),"Switch","`value` is not a valid prop, do you mean `checked`?");var b=s.useContext(C.b),h=b.getPrefixCls,g=b.direction,N=s.useContext(S.b),k=h("switch",a),x=s.createElement("div",{className:"".concat(k,"-handle")},o&&s.createElement(v.a,{className:"".concat(k,"-loading-icon")})),O=d()((n={},c()(n,"".concat(k,"-small"),"small"===(i||N)),c()(n,"".concat(k,"-loading"),o),c()(n,"".concat(k,"-rtl"),"rtl"===g),n),u);return s.createElement(y.a,{insertExtraNode:!0},s.createElement(f,r()({},p,{prefixCls:k,className:O,disabled:m||o,ref:t,loadingIcon:x})))}));N.__ANT_SWITCH=!0,N.displayName="Switch";t.a=N},1423:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return P}));var a=n(1),r=n.n(a),i=n(4),c=n(18),s=n(21),o=n(46),l=n(45),u=n(0),m=n.n(u),d=n(1263),p=n.n(d),b=n(194),h=n(1150),f=n(1387),g=n(118),v=n(176),y=n(1197),C=n(1185);var S=m.a.memo((function(e){var t=e.username,n=e.name,a=e.description,r=e.isPublic,i=e.onNameInputChange,c=e.onDescriptionInputChange,s=e.onIsPublicSwitchChange,o=e.onSubmit,l=e.submitting,u=e.loading;return m.a.createElement("div",{className:p.a.CreateRepository},m.a.createElement(y.a,null,"\u521b\u5efa\u65b0\u4ed3\u5e93"),m.a.createElement("form",{action:"#",className:p.a.form,onSubmit:o},m.a.createElement("label",{className:p.a.label},m.a.createElement(C.a,{required:!0},"\u4ed3\u5e93\u540d"),m.a.createElement(b.a,{trigger:"focus",title:v.c.Repository.NAME},m.a.createElement(h.a,{addonBefore:m.a.createElement("div",null,t," /"),autoFocus:!0,value:n,onChange:i,disabled:u}))),m.a.createElement("label",{className:p.a.label},m.a.createElement(C.a,null,"\u63cf\u8ff0"),m.a.createElement(h.a,{value:a,onChange:c,disabled:u})),m.a.createElement("label",{className:p.a.label},m.a.createElement(C.a,null,"\u516c\u5f00"),m.a.createElement(f.a,{checked:r,onChange:s,disabled:u}),m.a.createElement("div",{className:p.a.inlineDescription},r?"\u6240\u6709\u4eba\u90fd\u80fd\u770b\u5230\u8be5\u4ed3\u5e93":"\u53ea\u6709\u4f60\u548c\u4ed3\u5e93\u5408\u4f5c\u8005\u80fd\u770b\u5230\u8be5\u4ed3\u5e93")),m.a.createElement(g.a,{htmlType:"submit",type:"primary",block:!0,className:p.a.submitButton,loading:l,disabled:l||u},"\u521b\u5efa\u4ed3\u5e93")))})),w=n(349),E=n(353),N=n(40),k=n(72),x=n(73),O=n(3),_=n(122),I=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).setStatePromise=Object(_.promisify)(a.setState),a.setTitle=function(){document.title="\u521b\u5efa\u4ed3\u5e93 - ".concat(O.a)},a.loadUsername=Object(i.a)(r.a.mark((function e(){var t,n,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get();case 2:if(null===(t=e.sent)){e.next=9;break}return n=t.username,e.next=7,a.setStatePromise({username:n});case 7:e.next=11;break;case 9:return i=a.props.history,e.abrupt("return",i.replace(O.d[O.b.LOGIN]));case 11:case"end":return e.stop()}}),e)}))),a.onNameInputChange=function(e){a.setState({name:e.target.value})},a.onDescriptionInputChange=function(e){a.setState({description:e.target.value})},a.onIsPublicSwitchChange=function(e){a.setState({isPublic:e})},a.onSubmit=function(){var e=Object(i.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!a.validateFormInput()){e.next=4;break}return e.next=4,a.submitForm();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.validateFormInput=function(){var e=a.state.name;return!!v.b.Repository.name(e)||(w.a.warn({message:v.a.Repository.NAME,description:v.c.Repository.NAME}),!1)},a.submitForm=Object(i.a)(r.a.mark((function e(){var t,n,i,c,s,o,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state,n=t.username,i=t.name,c=t.description,s=t.isPublic,a.setState({submitting:!0}),e.next=4,N.i.create({name:i,description:c,isPublic:s});case 4:if(o=e.sent,a.setState({submitting:!1}),null===o){e.next=10;break}return l=a.props.history,w.a.success({message:"\u4ed3\u5e93\u521b\u5efa\u6210\u529f"}),e.abrupt("return",l.push(x.Function.generateRepositoryCodeRoute({username:n,repositoryName:i})));case 10:case"end":return e.stop()}}),e)}))),a.state={username:"",name:"",description:"",isPublic:!0,submitting:!1,loading:!0},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=Object(i.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setTitle(),e.next=3,this.setStatePromise({loading:!0});case 3:return e.next=5,this.loadUsername();case 5:return e.next=7,this.setStatePromise({loading:!1});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.username,n=e.name,a=e.description,r=e.isPublic,i=e.submitting,c=e.loading;return m.a.createElement(S,{username:t,name:n,description:a,isPublic:r,submitting:i,loading:c,onNameInputChange:this.onNameInputChange,onDescriptionInputChange:this.onDescriptionInputChange,onIsPublicSwitchChange:this.onIsPublicSwitchChange,onSubmit:this.onSubmit})}}]),n}(u.PureComponent),P=Object(k.h)(I)}}]);
//# sourceMappingURL=25.8c856543.chunk.js.map