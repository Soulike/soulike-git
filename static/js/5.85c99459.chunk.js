(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[5],{1077:function(e,n,t){e.exports={Profile:"Style_Profile__1P2aC",item:"Style_item__1F9QO",form:"Style_form__1PS4O",inputWrapper:"Style_inputWrapper__fOuXC",saveButtonWrapper:"Style_saveButtonWrapper__2AiWe",emailForm:"Style_emailForm__7P4eQ"}},1301:function(e,n,t){"use strict";t.r(n);t(92);var a=t(14),r=t(4),i=t.n(r),u=t(36),c=t(48),o=t(89),s=t(88),l=t(90),m=t(0),f=t.n(m),d=(t(430),t(134)),p=(t(431),t(284)),v=(t(960),t(962)),E=t(1077),S=t.n(E),N=t(989),g=t(986),A=t(955);var k=f.a.memo((function(e){var n=e.nickname,t=e.email,a=e.onEmailInputChange,r=e.onNicknameInputChange,i=e.onEmailSubmit,u=e.onNicknameSubmit,c=e.loading;return f.a.createElement("div",{className:S.a.Profile},f.a.createElement(N.a,null,"\u4e2a\u4eba\u8d44\u6599"),f.a.createElement("div",{className:S.a.item},f.a.createElement(g.a,null,"\u6635\u79f0"),f.a.createElement("div",{className:S.a.form},f.a.createElement("div",{className:S.a.inputWrapper},f.a.createElement(p.a,{title:A.c.Profile.NICKNAME,trigger:"focus"},f.a.createElement(v.a,{onChange:r,value:n,disabled:c}))),f.a.createElement("div",{className:S.a.saveButtonWrapper},f.a.createElement(d.a,{type:"primary",onClick:u,loading:c,disabled:c},"\u4fdd\u5b58")))),f.a.createElement("div",{className:S.a.item},f.a.createElement(g.a,null,"\u90ae\u7bb1"),f.a.createElement("div",{className:"".concat(S.a.form," ").concat(S.a.emailForm)},f.a.createElement("div",{className:"".concat(S.a.inputWrapper," ").concat(S.a.emailInputWrapper)},f.a.createElement(v.a,{type:"email",onChange:a,value:t,disabled:c})),f.a.createElement("div",{className:S.a.saveButtonWrapper},f.a.createElement(d.a,{type:"primary",onClick:i,loading:c,disabled:c},"\u4fdd\u5b58")))))})),h=t(210),b=function(e){function n(e){var t;return Object(u.a)(this,n),(t=Object(o.a)(this,Object(s.a)(n).call(this,e))).loadProfile=function(){var e,n,a;return i.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t.setState({loading:!0}),r.next=3,i.a.awrap(h.c.get());case 3:null!==(e=r.sent)&&(n=e.nickname,a=e.email,t.setState({nickname:n,email:a,loading:!1}));case 5:case"end":return r.stop()}}))},t.onNicknameInputChange=function(e){t.setState({nickname:e.target.value})},t.onEmailInputChange=function(e){t.setState({email:e.target.value})},t.onNicknameSubmit=function(){var e;return i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(e=t.state.nickname,!A.b.Profile.nickname(e)){n.next=10;break}return t.setState({loading:!0}),n.next=5,i.a.awrap(h.c.set({nickname:e}));case 5:null!==n.sent&&a.a.success({message:"\u6635\u79f0\u4fee\u6539\u6210\u529f"}),t.setState({loading:!1}),n.next=11;break;case 10:a.a.warn({message:A.a.Profile.NICKNAME,description:A.c.Profile.NICKNAME});case 11:case"end":return n.stop()}}))},t.onEmailSubmit=function(){var e;return i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(e=t.state.email,!A.b.Profile.email(e)){n.next=10;break}return t.setState({loading:!0}),n.next=5,i.a.awrap(h.c.set({email:e}));case 5:null!==n.sent&&a.a.success({message:"\u90ae\u7bb1\u4fee\u6539\u6210\u529f"}),t.setState({loading:!1}),n.next=11;break;case 10:a.a.warn({message:A.a.Profile.EMAIL});case 11:case"end":return n.stop()}}))},t.state={nickname:"",email:"",loading:!1},t}return Object(l.a)(n,e),Object(c.a)(n,[{key:"componentDidMount",value:function(){return i.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.awrap(this.loadProfile());case 2:case"end":return e.stop()}}),null,this)}},{key:"render",value:function(){var e=this.state,n=e.nickname,t=e.email,a=e.loading;return f.a.createElement(k,{nickname:n,email:t,loading:a,onEmailInputChange:this.onEmailInputChange,onEmailSubmit:this.onEmailSubmit,onNicknameInputChange:this.onNicknameInputChange,onNicknameSubmit:this.onNicknameSubmit})}}]),n}(m.PureComponent);t.d(n,"default",(function(){return b}))},955:function(e,n,t){"use strict";var a={};t.r(a),t.d(a,"USERNAME",(function(){return h})),t.d(a,"PASSWORD",(function(){return b}));var r={};t.r(r),t.d(r,"NAME",(function(){return _}));var i={};t.r(i),t.d(i,"NICKNAME",(function(){return I})),t.d(i,"EMAIL",(function(){return M}));var u={};t.r(u),t.d(u,"NAME",(function(){return y}));var c={};t.r(c),t.d(c,"username",(function(){return C})),t.d(c,"password",(function(){return P}));var o={};t.r(o),t.d(o,"name",(function(){return w}));var s={};t.r(s),t.d(s,"nickname",(function(){return x})),t.d(s,"email",(function(){return W}));var l={};t.r(l),t.d(l,"name",(function(){return O}));var m={};t.r(m),t.d(m,"Account",(function(){return c})),t.d(m,"Group",(function(){return o})),t.d(m,"Profile",(function(){return s})),t.d(m,"Repository",(function(){return l}));var f={};t.r(f),t.d(f,"USERNAME",(function(){return R})),t.d(f,"PASSWORD",(function(){return K}));var d={};t.r(d),t.d(d,"NAME",(function(){return L}));var p={};t.r(p),t.d(p,"NICKNAME",(function(){return D}));var v={};t.r(v),t.d(v,"NAME",(function(){return $}));var E={};t.r(E),t.d(E,"Account",(function(){return f})),t.d(E,"Group",(function(){return d})),t.d(E,"Profile",(function(){return p})),t.d(E,"Repository",(function(){return v}));var S={};t.r(S),t.d(S,"USERNAME",(function(){return j})),t.d(S,"PASSWORD",(function(){return q}));var N={};t.r(N),t.d(N,"NAME",(function(){return B}));var g={};t.r(g),t.d(g,"NICKNAME",(function(){return F})),t.d(g,"EMAIL",(function(){return U}));var A={};t.r(A),t.d(A,"NAME",(function(){return z}));var k={};t.r(k),t.d(k,"Account",(function(){return S})),t.d(k,"Group",(function(){return N})),t.d(k,"Profile",(function(){return g})),t.d(k,"Repository",(function(){return A}));var h=/^\w{1,20}$/,b=/^\S{6,}$/,_=/^\S{1,20}$/,I=/^\S{1,20}$/,M=/^([A-z0-9_\-.\u4e00-\u9fa5])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,8})$/,y=/^\w{1,20}$/;function C(e){return a.USERNAME.test(e)}function P(e){return a.PASSWORD.test(e)}function w(e){return r.NAME.test(e)}function x(e){return i.NICKNAME.test(e)}function W(e){return i.EMAIL.test(e)}function O(e){return u.NAME.test(e)}var R="1~20 \u4f4d\u5b57\u6bcd\u3001\u6570\u5b57\u53ca\u4e0b\u5212\u7ebf",K="6 \u4f4d\u4ee5\u4e0a",L="1~20 \u4f4d",D="1~20 \u4f4d",$="1~20 \u4f4d\u5b57\u6bcd\u3001\u6570\u5b57\u53ca\u4e0b\u5212\u7ebf",j="\u7528\u6237\u540d\u4e0d\u7b26\u5408\u8981\u6c42\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165",q="\u5bc6\u7801\u4e0d\u7b26\u5408\u8981\u6c42\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165",B="\u5c0f\u7ec4\u540d\u4e0d\u7b26\u5408\u8981\u6c42\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165",F="\u6635\u79f0\u4e0d\u7b26\u5408\u8981\u6c42\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165",U="\u8bf7\u8f93\u5165\u6709\u6548\u7684\u90ae\u7bb1",z="\u4ed3\u5e93\u540d\u4e0d\u7b26\u5408\u8981\u6c42\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165";t.d(n,"b",(function(){return m})),t.d(n,"a",(function(){return k})),t.d(n,"c",(function(){return E}))},964:function(e,n,t){"use strict";var a=t(0),r=t.n(a),i=t(985),u=t.n(i);n.a=r.a.memo((function(e){var n=e.children,t=e.required;return r.a.createElement("div",{className:u.a.InputLabel},n,r.a.createElement("span",{className:u.a.requiredSign},t?" *":""))}))},985:function(e,n,t){e.exports={InputLabel:"Style_InputLabel__3wLmK",requiredSign:"Style_requiredSign__3lJIr"}},986:function(e,n,t){"use strict";var a=t(964);t.d(n,"a",(function(){return a.a}))},987:function(e,n,t){e.exports={SettingsTitle:"Style_SettingsTitle__rgD4i"}},989:function(e,n,t){"use strict";var a=t(0),r=t.n(a),i=t(987),u=t.n(i);var c=r.a.memo((function(e){var n=e.children;return r.a.createElement("h2",{className:u.a.SettingsTitle},n)}));t.d(n,"a",(function(){return c}))}}]);
//# sourceMappingURL=5.85c99459.chunk.js.map