(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[35],{1238:function(n,e,t){"use strict";t.r(e);t(79);var r=t(9),a=t(4),u=t.n(a),o=t(7),i=t(31),s=t(34),c=t(90),p=t(89),f=t(91),l=t(0),d=t.n(l),m=(t(413),t(133)),g=(t(892),t(894)),E=(t(276),t(20)),v=t(970),_=t.n(v),h=t(934),b=t.n(h),I=t(876),S=t(38),A=t(92),N=A.a.PAGE_ID,w=A.a.PAGE_ID_TO_ROUTE;var L=d.a.memo((function(n){var e=n.username,t=n.password,r=n.onUsernameInputChange,a=n.onPasswordInputChange,u=n.onLoginFormSubmit;return d.a.createElement("main",{className:_.a.Login},d.a.createElement("form",{action:"#",className:_.a.form,onSubmit:u},d.a.createElement("img",{className:_.a.logo,src:b.a,alt:"web_developer_logo"}),d.a.createElement("div",{className:_.a.registerTip},"\u6ca1\u6709\u8d26\u53f7\uff1f",d.a.createElement(S.b,{to:w[N.REGISTER]},"\u70b9\u6b64\u6ce8\u518c")),d.a.createElement("div",{className:_.a.inputWrapper},d.a.createElement(I.a,null,"\u7528\u6237\u540d"),d.a.createElement(g.a,{type:"text",size:"large",onChange:r,autoFocus:!0,value:e,prefix:d.a.createElement(E.a,{type:"user"})})),d.a.createElement("div",{className:_.a.inputWrapper},d.a.createElement(I.a,null,"\u5bc6\u7801"),d.a.createElement(g.a,{type:"password",size:"large",onChange:a,value:t,prefix:d.a.createElement(E.a,{type:"lock"})})),d.a.createElement(m.a,{htmlType:"submit",className:_.a.button,size:"large",type:"primary",block:!0},"\u767b\u5f55")))})),y=t(102),O=t(207),C=t(129),M=t(101),P=t(278),R=t(282),k=t.n(R),D=t(168),T=t(877),x=A.a.PAGE_ID,F=A.a.PAGE_ID_TO_ROUTE,G=T.b.Account,U=function(n){function e(n){var t;return Object(i.a)(this,e),(t=Object(c.a)(this,Object(p.a)(e).call(this,n))).setTitle=function(){document.title="\u767b\u5f55 - ".concat(D.a.NAME)},t.onUsernameInputChange=function(n){t.setState({username:n.target.value})},t.onPasswordInputChange=function(n){t.setState({password:n.target.value})},t.onLoginFormSubmit=function(){var n=Object(o.a)(u.a.mark((function n(e){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.preventDefault(),!t.loginFormInputCheck()){n.next=4;break}return n.next=4,t.submitLoginForm();case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),t.loginFormInputCheck=function(){var n=t.state,e=n.username,a=n.password;return!(!G.username(e)||!G.password(a))||(r.a.warn({message:"\u7528\u6237\u540d\u6216\u5bc6\u7801\u9519\u8bef"}),!1)},t.submitLoginForm=Object(o.a)(u.a.mark((function n(){var e,r,a,o;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.state,r=e.username,a=e.password,o=P.a.calculateHash(r,a),n.next=4,O.a.login(new P.a(r,o));case 4:if(!n.sent){n.next=8;break}return n.next=8,t.onLoginSuccess();case 8:case"end":return n.stop()}}),n)}))),t.onLoginSuccess=Object(o.a)(u.a.mark((function n(){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:(0,t.props.setLoggedIn)(),r.a.success({message:"\u767b\u5f55\u6210\u529f"}),t.returnToPreviousPage();case 4:case"end":return n.stop()}}),n)}))),t.returnToPreviousPage=function(){var n=t.props.location.search,e=k.a.parse(n.slice(1)).prev;"string"===typeof e&&e!==F[x.LOGIN]&&e!==F[x.REGISTER]&&e!==F[x.NOT_FOUND]?t.props.history.push(e):t.props.history.push(F[x.INDEX])},t.state={username:"",password:""},t}return Object(f.a)(e,n),Object(s.a)(e,[{key:"componentDidMount",value:function(){this.setTitle(),this.props.isLoggedIn&&this.props.history.push(F[x.INDEX])}},{key:"render",value:function(){var n=this.state,e=n.username,t=n.password;return d.a.createElement(L,{username:e,password:t,onLoginFormSubmit:this.onLoginFormSubmit,onPasswordInputChange:this.onPasswordInputChange,onUsernameInputChange:this.onUsernameInputChange})}}]),e}(l.PureComponent),j={setLoggedIn:C.setLoggedInAction},W=Object(y.f)(Object(M.b)((function(n){return{isLoggedIn:n.Root.isLoggedIn}}),j)(U));e.default=W},876:function(n,e,t){"use strict";var r=t(0),a=t.n(r),u=t(893),o=t.n(u);e.a=a.a.memo((function(n){var e=n.children,t=n.required;return a.a.createElement("div",{className:o.a.InputLabel},e,a.a.createElement("span",{className:o.a.requiredSign},t?" *":""))}))},877:function(n,e,t){"use strict";var r={};t.r(r),t.d(r,"USERNAME",(function(){return w})),t.d(r,"PASSWORD",(function(){return L}));var a={};t.r(a),t.d(a,"NAME",(function(){return y}));var u={};t.r(u),t.d(u,"NICKNAME",(function(){return O})),t.d(u,"EMAIL",(function(){return C}));var o={};t.r(o),t.d(o,"NAME",(function(){return M}));var i={};t.r(i),t.d(i,"CODE",(function(){return P}));var s={};t.r(s),t.d(s,"username",(function(){return R})),t.d(s,"password",(function(){return k}));var c={};t.r(c),t.d(c,"name",(function(){return D}));var p={};t.r(p),t.d(p,"nickname",(function(){return T})),t.d(p,"email",(function(){return x}));var f={};t.r(f),t.d(f,"name",(function(){return F}));var l={};t.r(l),t.d(l,"code",(function(){return G}));var d={};t.r(d),t.d(d,"Account",(function(){return s})),t.d(d,"Group",(function(){return c})),t.d(d,"Profile",(function(){return p})),t.d(d,"Repository",(function(){return f})),t.d(d,"Collaborator",(function(){return l}));var m={};t.r(m),t.d(m,"USERNAME",(function(){return U})),t.d(m,"PASSWORD",(function(){return j}));var g={};t.r(g),t.d(g,"NAME",(function(){return W}));var E={};t.r(E),t.d(E,"NICKNAME",(function(){return z}));var v={};t.r(v),t.d(v,"NAME",(function(){return $}));var _={};t.r(_),t.d(_,"Account",(function(){return m})),t.d(_,"Group",(function(){return g})),t.d(_,"Profile",(function(){return E})),t.d(_,"Repository",(function(){return v}));var h={};t.r(h),t.d(h,"USERNAME",(function(){return K})),t.d(h,"PASSWORD",(function(){return q}));var b={};t.r(b),t.d(b,"NAME",(function(){return J}));var I={};t.r(I),t.d(I,"NICKNAME",(function(){return X})),t.d(I,"EMAIL",(function(){return Q}));var S={};t.r(S),t.d(S,"NAME",(function(){return Z}));var A={};t.r(A),t.d(A,"CODE",(function(){return H}));var N={};t.r(N),t.d(N,"Account",(function(){return h})),t.d(N,"Group",(function(){return b})),t.d(N,"Profile",(function(){return I})),t.d(N,"Repository",(function(){return S})),t.d(N,"Collaborator",(function(){return A}));var w=/^\w{1,20}$/,L=/^\S{6,}$/,y=/^\S{1,20}$/,O=/^\S{1,20}$/,C=/^([A-z0-9_\-.\u4e00-\u9fa5])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,8})$/,M=/^\w{1,20}$/,P=/^\w+_\w+_\d+$/;function R(n){return r.USERNAME.test(n)}function k(n){return r.PASSWORD.test(n)}function D(n){return a.NAME.test(n)}function T(n){return u.NICKNAME.test(n)}function x(n){return u.EMAIL.test(n)}function F(n){return o.NAME.test(n)}function G(n){return i.CODE.test(n)}var U="1~20 \u4f4d\u5b57\u6bcd\u3001\u6570\u5b57\u53ca\u4e0b\u5212\u7ebf",j="6 \u4f4d\u4ee5\u4e0a",W="1~20 \u4f4d",z="1~20 \u4f4d",$="1~20 \u4f4d\u5b57\u6bcd\u3001\u6570\u5b57\u53ca\u4e0b\u5212\u7ebf",K="\u7528\u6237\u540d\u4e0d\u7b26\u5408\u8981\u6c42\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165",q="\u5bc6\u7801\u4e0d\u7b26\u5408\u8981\u6c42\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165",J="\u5c0f\u7ec4\u540d\u4e0d\u7b26\u5408\u8981\u6c42\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165",X="\u6635\u79f0\u4e0d\u7b26\u5408\u8981\u6c42\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165",Q="\u8bf7\u8f93\u5165\u6709\u6548\u7684\u90ae\u7bb1",Z="\u4ed3\u5e93\u540d\u4e0d\u7b26\u5408\u8981\u6c42\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165",H="\u9080\u8bf7\u7801\u65e0\u6548\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165";t.d(e,"b",(function(){return d})),t.d(e,"a",(function(){return N})),t.d(e,"c",(function(){return _}))},893:function(n,e,t){n.exports={InputLabel:"Style_InputLabel__3wLmK",requiredSign:"Style_requiredSign__3lJIr"}},934:function(n,e,t){n.exports=t.p+"static/media/developing_code.240e8e0f.svg"},970:function(n,e,t){n.exports={Login:"Style_Login__2bEsG",registerTip:"Style_registerTip__10XWI",form:"Style_form__1Yzdr",inputWrapper:"Style_inputWrapper__2aFQQ",logo:"Style_logo__3bWtv",button:"Style_button__3L0sa"}}}]);
//# sourceMappingURL=35.82d2bc4f.chunk.js.map