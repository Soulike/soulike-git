(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[23],{1051:function(e,t,n){"use strict";var a=n(0),r=n.n(a),u=n(1053),i=n.n(u);t.a=r.a.memo((function(e){var t=e.children,n=e.required;return r.a.createElement("div",{className:i.a.InputLabel},t,r.a.createElement("span",{className:i.a.requiredSign},n?" *":""))}))},1053:function(e,t,n){e.exports={InputLabel:"Style_InputLabel__3wLmK",requiredSign:"Style_requiredSign__3lJIr"}},1054:function(e,t,n){"use strict";var a=n(1051);n.d(t,"a",(function(){return a.a}))},1061:function(e,t,n){e.exports={PageTitle:"Style_PageTitle__3R_vY"}},1063:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(0),r=n.n(a),u=n(1061),i=n.n(u);var s=function(e){var t=e.children;return r.a.createElement("h1",{className:i.a.PageTitle},t)}},1123:function(e,t,n){e.exports={CreateNewGroup:"Style_CreateNewGroup__L6ro3",label:"Style_label__1QfMY",submitButton:"Style_submitButton__qmKHf"}},1274:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return I}));var a=n(1),r=n.n(a),u=n(3),i=n(7),s=n(9),c=n(18),o=n(17),m=n(0),l=n.n(m),p=n(1123),f=n.n(p),b=n(234),d=n(1018),v=n(84),g=n(141),h=n(1063),_=n(1054);var N=l.a.memo((function(e){var t=e.name,n=e.onNameInputChange,a=e.onSubmit,r=e.submitting;return l.a.createElement("div",{className:f.a.CreateNewGroup},l.a.createElement(h.a,null,"\u521b\u5efa\u65b0\u5c0f\u7ec4"),l.a.createElement("form",{action:"#",className:f.a.form,onSubmit:a},l.a.createElement("label",{className:f.a.label},l.a.createElement(_.a,{required:!0},"\u5c0f\u7ec4\u540d"),l.a.createElement(b.a,{title:g.c.Group.NAME,trigger:"focus"},l.a.createElement(d.a,{autoFocus:!0,value:t,onChange:n}))),l.a.createElement(v.a,{htmlType:"submit",type:"primary",block:!0,className:f.a.submitButton,loading:r,disabled:r},"\u521b\u5efa\u5c0f\u7ec4")))})),S=n(1011),E=n(29),y=n(42),w=n(20),k=n(201),x=function(e){Object(c.a)(n,e);var t=Object(o.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).setTitle=function(){document.title="\u521b\u5efa\u5c0f\u7ec4 - ".concat(k.a.NAME)},a.onNameInputChange=function(e){a.setState({name:e.target.value})},a.onSubmit=function(){var e=Object(u.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!a.validateFormInput()){e.next=4;break}return e.next=4,a.submitForm();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.validateFormInput=function(){var e=a.state.name;return!!g.b.Group.name(e)||(S.a.warn({message:g.a.Group.NAME,description:g.c.Group.NAME}),!1)},a.submitForm=Object(u.a)(r.a.mark((function e(){var t,n,u,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state.name,n=a.props.history,a.setState({submitting:!0}),e.next=5,E.d.add({name:t});case 5:if(u=e.sent,a.setState({submitting:!1}),null===u){e.next=11;break}return i=u.id,S.a.success({message:"\u5c0f\u7ec4\u521b\u5efa\u6210\u529f",description:"\u60a8\u5df2\u81ea\u52a8\u6210\u4e3a\u5c0f\u7ec4\u7ba1\u7406\u5458\uff0c\u9080\u8bf7\u66f4\u591a\u6210\u5458\u8fdb\u884c\u534f\u4f5c\u5427\uff01"}),e.abrupt("return",n.push(w.Function.generateGroupRoute({id:i.toString()})));case 11:case"end":return e.stop()}}),e)}))),a.state={name:"",submitting:!1},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setTitle();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.name,n=e.submitting;return l.a.createElement(N,{name:t,submitting:n,onSubmit:this.onSubmit,onNameInputChange:this.onNameInputChange})}}]),n}(m.PureComponent),I=Object(y.f)(x)}}]);
//# sourceMappingURL=23.2968c605.chunk.js.map