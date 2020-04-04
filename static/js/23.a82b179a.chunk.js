(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[23],{1e3:function(e,n,t){e.exports={InputTip:"Style_InputTip__KsPY_"}},1002:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t(0),a=t.n(r),u=t(1e3),o=t.n(u);var i=a.a.memo((function(e){var n=e.children;return a.a.createElement("div",{className:o.a.InputTip},n)}))},1011:function(e,n,t){e.exports=t.p+"static/media/developing_code.240e8e0f.svg"},1031:function(e,n,t){"use strict";var r=t(0),a={name:"lock",theme:"outlined",icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"}}]}},u=t(13),o=function(e,n){return r.createElement(u.a,Object.assign({},e,{ref:n,icon:a}))};o.displayName="LockOutlined";n.a=r.forwardRef(o)},1063:function(e,n,t){e.exports={Login:"Style_Login__2bEsG",registerTip:"Style_registerTip__10XWI",form:"Style_form__1Yzdr",inputWrapper:"Style_inputWrapper__2aFQQ",logo:"Style_logo__3bWtv",button:"Style_button__3L0sa"}},1205:function(e,n,t){"use strict";t.r(n);var r=t(1),a=t.n(r),u=t(3),o=t(9),i=t(10),c=t(17),s=t(18),f=t(0),d=t.n(f),l=t(1063),p=t.n(l),m=t(957),g=t(86),v=t(1011),E=t.n(v),h=t(992),I=t(15),b=t(23),_=t(970),S=t(1031),N=t(1002),A=b.CONFIG.PAGE_ID,O=b.CONFIG.PAGE_ID_TO_ROUTE;var w=d.a.memo((function(e){var n=e.username,t=e.password,r=e.onUsernameInputChange,a=e.onPasswordInputChange,u=e.onLoginFormSubmit,o=e.loading;return d.a.createElement("main",{className:p.a.Login},d.a.createElement("form",{action:"#",className:p.a.form,onSubmit:u},d.a.createElement("img",{className:p.a.logo,src:E.a,alt:"web_developer_logo"}),d.a.createElement("div",{className:p.a.registerTip},"\u6ca1\u6709\u8d26\u53f7\uff1f",d.a.createElement(I.b,{to:O[A.REGISTER]},"\u70b9\u6b64\u6ce8\u518c")),d.a.createElement("div",{className:p.a.inputWrapper},d.a.createElement(h.a,null,"\u7528\u6237\u540d"),d.a.createElement(m.a,{type:"text",size:"large",onChange:r,autoFocus:!0,value:n,disabled:o,prefix:d.a.createElement(_.a,null)})),d.a.createElement("div",{className:p.a.inputWrapper},d.a.createElement(h.a,null,"\u5bc6\u7801"),d.a.createElement(m.a,{type:"password",size:"large",onChange:a,value:t,disabled:o,prefix:d.a.createElement(S.a,null)}),d.a.createElement(N.a,null,"\u5fd8\u8bb0\u5bc6\u7801\uff1f",d.a.createElement(I.b,{to:O[A.CHANGE_PASSWORD]},"\u70b9\u6b64\u4fee\u6539\u5bc6\u7801"))),d.a.createElement(g.a,{htmlType:"submit",className:p.a.button,size:"large",type:"primary",disabled:o,loading:o,block:!0},"\u767b\u5f55")))})),C=t(118),L=t(31),x=t(951),k=t(138),y=t(41),M=t(127),R=t(326),P=t.n(R),D=t(197),T=t(991),F=b.CONFIG.PAGE_ID,G=b.CONFIG.PAGE_ID_TO_ROUTE,j=T.b.Account,W=function(e){Object(s.a)(t,e);var n=Object(c.a)(t);function t(e){var r;return Object(o.a)(this,t),(r=n.call(this,e)).setTitle=function(){document.title="\u767b\u5f55 - ".concat(D.a.NAME)},r.checkSession=Object(u.a)(a.a.mark((function e(){var n,t,u,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.props,t=n.setLoggedOut,u=n.setLoggedIn,e.next=3,L.a.checkSession();case 3:if(null===(o=e.sent)){e.next=15;break}if(!o.isValid){e.next=11;break}return e.next=9,u();case 9:e.next=13;break;case 11:return e.next=13,t();case 13:e.next=17;break;case 15:return e.next=17,t();case 17:case"end":return e.stop()}}),e)}))),r.onUsernameInputChange=function(e){r.setState({username:e.target.value})},r.onPasswordInputChange=function(e){r.setState({password:e.target.value})},r.onLoginFormSubmit=function(){var e=Object(u.a)(a.a.mark((function e(n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),!r.loginFormInputCheck()){e.next=4;break}return e.next=4,r.submitLoginForm();case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),r.loginFormInputCheck=function(){var e=r.state,n=e.username,t=e.password;return!(!j.username(n)||!j.password(t))||(x.a.warn({message:"\u7528\u6237\u540d\u6216\u5bc6\u7801\u9519\u8bef"}),!1)},r.submitLoginForm=Object(u.a)(a.a.mark((function e(){var n,t,u,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.state,t=n.username,u=n.password,o=M.a.calculateHash(t,u),r.setState({loading:!0}),e.next=5,L.a.login(new M.a(t,o));case 5:if(!e.sent){e.next=9;break}return e.next=9,r.onLoginSuccess();case 9:r.setState({loading:!1});case 10:case"end":return e.stop()}}),e)}))),r.onLoginSuccess=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(0,r.props.setLoggedIn)(),x.a.success({message:"\u767b\u5f55\u6210\u529f"}),r.returnToPreviousPage();case 4:case"end":return e.stop()}}),e)}))),r.returnToPreviousPage=function(){var e=r.props.location.search,n=P.a.parse(e.slice(1)).prev;return"string"===typeof n&&n!==G[F.LOGIN]&&n!==G[F.REGISTER]&&n!==G[F.NOT_FOUND]&&n!==G[F.CHANGE_PASSWORD]?r.props.history.push(n):r.props.history.push(G[F.INDEX])},r.state={username:"",password:"",loading:!1},r}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setTitle(),e.next=3,this.checkSession();case 3:if(!this.props.isLoggedIn){e.next=6;break}return e.abrupt("return",this.props.history.push(G[F.INDEX]));case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,n=e.username,t=e.password,r=e.loading;return d.a.createElement(w,{username:n,password:t,loading:r,onLoginFormSubmit:this.onLoginFormSubmit,onPasswordInputChange:this.onPasswordInputChange,onUsernameInputChange:this.onUsernameInputChange})}}]),t}(f.PureComponent),z={setLoggedIn:k.setLoggedInAction,setLoggedOut:k.setLoggedOutAction},U=Object(C.f)(Object(y.b)((function(e){return{isLoggedIn:e.Root.isLoggedIn}}),z)(W));n.default=U},991:function(e,n,t){"use strict";t.d(n,"b",(function(){return p})),t.d(n,"a",(function(){return A})),t.d(n,"c",(function(){return h}));var r={};t.r(r),t.d(r,"USERNAME",(function(){return O})),t.d(r,"PASSWORD",(function(){return w})),t.d(r,"VERIFICATION_CODE",(function(){return C}));var a={};t.r(a),t.d(a,"NAME",(function(){return L}));var u={};t.r(u),t.d(u,"NICKNAME",(function(){return x})),t.d(u,"EMAIL",(function(){return k}));var o={};t.r(o),t.d(o,"NAME",(function(){return y}));var i={};t.r(i),t.d(i,"CODE",(function(){return M}));var c={};t.r(c),t.d(c,"username",(function(){return R})),t.d(c,"password",(function(){return P})),t.d(c,"verificationCode",(function(){return D}));var s={};t.r(s),t.d(s,"name",(function(){return T}));var f={};t.r(f),t.d(f,"nickname",(function(){return F})),t.d(f,"email",(function(){return G}));var d={};t.r(d),t.d(d,"name",(function(){return j}));var l={};t.r(l),t.d(l,"code",(function(){return W}));var p={};t.r(p),t.d(p,"Account",(function(){return c})),t.d(p,"Group",(function(){return s})),t.d(p,"Profile",(function(){return f})),t.d(p,"Repository",(function(){return d})),t.d(p,"Collaborator",(function(){return l}));var m={};t.r(m),t.d(m,"USERNAME",(function(){return z})),t.d(m,"PASSWORD",(function(){return U}));var g={};t.r(g),t.d(g,"NAME",(function(){return V}));var v={};t.r(v),t.d(v,"NICKNAME",(function(){return $}));var E={};t.r(E),t.d(E,"NAME",(function(){return H}));var h={};t.r(h),t.d(h,"Account",(function(){return m})),t.d(h,"Group",(function(){return g})),t.d(h,"Profile",(function(){return v})),t.d(h,"Repository",(function(){return E}));var I={};t.r(I),t.d(I,"USERNAME",(function(){return K})),t.d(I,"PASSWORD",(function(){return q})),t.d(I,"VERIFICATION_CODE",(function(){return J}));var b={};t.r(b),t.d(b,"NAME",(function(){return X}));var _={};t.r(_),t.d(_,"NICKNAME",(function(){return Q})),t.d(_,"EMAIL",(function(){return Y}));var S={};t.r(S),t.d(S,"NAME",(function(){return Z}));var N={};t.r(N),t.d(N,"CODE",(function(){return B}));var A={};t.r(A),t.d(A,"Account",(function(){return I})),t.d(A,"Group",(function(){return b})),t.d(A,"Profile",(function(){return _})),t.d(A,"Repository",(function(){return S})),t.d(A,"Collaborator",(function(){return N}));var O=/^\w{1,20}$/,w=/^\S{6,}$/,C=/^\d{6}$/,L=/^\S{1,20}$/,x=/^\S{1,20}$/,k=/^([A-z0-9_\-.\u4e00-\u9fa5])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,8})$/,y=/^\w{1,20}$/,M=/^\w+_\w+_\d+$/;function R(e){return r.USERNAME.test(e)}function P(e){return r.PASSWORD.test(e)}function D(e){return r.VERIFICATION_CODE.test(e)}function T(e){return a.NAME.test(e)}function F(e){return u.NICKNAME.test(e)}function G(e){return u.EMAIL.test(e)}function j(e){return o.NAME.test(e)}function W(e){return i.CODE.test(e)}var z="1~20 \u4f4d\u5b57\u6bcd\u3001\u6570\u5b57\u53ca\u4e0b\u5212\u7ebf",U="6 \u4f4d\u4ee5\u4e0a",V="1~20 \u4f4d",$="1~20 \u4f4d",H="1~20 \u4f4d\u5b57\u6bcd\u3001\u6570\u5b57\u53ca\u4e0b\u5212\u7ebf",K="\u7528\u6237\u540d\u4e0d\u7b26\u5408\u8981\u6c42\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165",q="\u5bc6\u7801\u4e0d\u7b26\u5408\u8981\u6c42\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165",J="\u9a8c\u8bc1\u7801\u4e0d\u6b63\u786e",X="\u5c0f\u7ec4\u540d\u4e0d\u7b26\u5408\u8981\u6c42\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165",Q="\u6635\u79f0\u4e0d\u7b26\u5408\u8981\u6c42\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165",Y="\u8bf7\u8f93\u5165\u6709\u6548\u7684\u90ae\u7bb1",Z="\u4ed3\u5e93\u540d\u4e0d\u7b26\u5408\u8981\u6c42\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165",B="\u9080\u8bf7\u7801\u65e0\u6548\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165"},992:function(e,n,t){"use strict";var r=t(0),a=t.n(r),u=t(994),o=t.n(u);n.a=a.a.memo((function(e){var n=e.children,t=e.required;return a.a.createElement("div",{className:o.a.InputLabel},n,a.a.createElement("span",{className:o.a.requiredSign},t?" *":""))}))},994:function(e,n,t){e.exports={InputLabel:"Style_InputLabel__3wLmK",requiredSign:"Style_requiredSign__3lJIr"}}}]);
//# sourceMappingURL=23.a82b179a.chunk.js.map