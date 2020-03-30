(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[4],{1129:function(e,n,t){"use strict";var r=t(0),a=t.n(r),i=t(15);n.a=a.a.memo((function(e){return a.a.createElement(i.b,Object.assign({},e,{target:"_blank",rel:"noopener norefferrer"}))}))},1130:function(e,n,t){"use strict";var r={};t.r(r),t.d(r,"USERNAME",(function(){return C})),t.d(r,"PASSWORD",(function(){return O})),t.d(r,"VERIFICATION_CODE",(function(){return h}));var a={};t.r(a),t.d(a,"NAME",(function(){return P}));var i={};t.r(i),t.d(i,"NICKNAME",(function(){return M})),t.d(i,"EMAIL",(function(){return y}));var u={};t.r(u),t.d(u,"NAME",(function(){return x}));var c={};t.r(c),t.d(c,"CODE",(function(){return w}));var o={};t.r(o),t.d(o,"username",(function(){return D})),t.d(o,"password",(function(){return R})),t.d(o,"verificationCode",(function(){return W}));var s={};t.r(s),t.d(s,"name",(function(){return j}));var l={};t.r(l),t.d(l,"nickname",(function(){return F})),t.d(l,"email",(function(){return G}));var m={};t.r(m),t.d(m,"name",(function(){return T}));var f={};t.r(f),t.d(f,"code",(function(){return K}));var d={};t.r(d),t.d(d,"Account",(function(){return o})),t.d(d,"Group",(function(){return s})),t.d(d,"Profile",(function(){return l})),t.d(d,"Repository",(function(){return m})),t.d(d,"Collaborator",(function(){return f}));var p={};t.r(p),t.d(p,"USERNAME",(function(){return L})),t.d(p,"PASSWORD",(function(){return $}));var E={};t.r(E),t.d(E,"NAME",(function(){return U}));var v={};t.r(v),t.d(v,"NICKNAME",(function(){return q}));var N={};t.r(N),t.d(N,"NAME",(function(){return B}));var S={};t.r(S),t.d(S,"Account",(function(){return p})),t.d(S,"Group",(function(){return E})),t.d(S,"Profile",(function(){return v})),t.d(S,"Repository",(function(){return N}));var _={};t.r(_),t.d(_,"USERNAME",(function(){return z})),t.d(_,"PASSWORD",(function(){return J})),t.d(_,"VERIFICATION_CODE",(function(){return V}));var b={};t.r(b),t.d(b,"NAME",(function(){return Q}));var g={};t.r(g),t.d(g,"NICKNAME",(function(){return Z})),t.d(g,"EMAIL",(function(){return H}));var A={};t.r(A),t.d(A,"NAME",(function(){return X}));var I={};t.r(I),t.d(I,"CODE",(function(){return Y}));var k={};t.r(k),t.d(k,"Account",(function(){return _})),t.d(k,"Group",(function(){return b})),t.d(k,"Profile",(function(){return g})),t.d(k,"Repository",(function(){return A})),t.d(k,"Collaborator",(function(){return I}));const C=/^\w{1,20}$/,O=/^\S{6,}$/,h=/^\d{6}$/;var P=/^\S{1,20}$/,M=/^\S{1,20}$/,y=/^([A-z0-9_\-.\u4e00-\u9fa5])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,8})$/,x=/^\w{1,20}$/,w=/^\w+_\w+_\d+$/;function D(e){return r.USERNAME.test(e)}function R(e){return r.PASSWORD.test(e)}function W(e){return r.VERIFICATION_CODE.test(e)}function j(e){return a.NAME.test(e)}function F(e){return i.NICKNAME.test(e)}function G(e){return i.EMAIL.test(e)}function T(e){return u.NAME.test(e)}function K(e){return c.CODE.test(e)}var L="1~20 \u4f4d\u5b57\u6bcd\u3001\u6570\u5b57\u53ca\u4e0b\u5212\u7ebf",$="6 \u4f4d\u4ee5\u4e0a",U="1~20 \u4f4d",q="1~20 \u4f4d",B="1~20 \u4f4d\u5b57\u6bcd\u3001\u6570\u5b57\u53ca\u4e0b\u5212\u7ebf";const z="\u7528\u6237\u540d\u4e0d\u7b26\u5408\u8981\u6c42\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165",J="\u5bc6\u7801\u4e0d\u7b26\u5408\u8981\u6c42\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165",V="\u9a8c\u8bc1\u7801\u4e0d\u6b63\u786e";var Q="\u5c0f\u7ec4\u540d\u4e0d\u7b26\u5408\u8981\u6c42\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165",Z="\u6635\u79f0\u4e0d\u7b26\u5408\u8981\u6c42\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165",H="\u8bf7\u8f93\u5165\u6709\u6548\u7684\u90ae\u7bb1",X="\u4ed3\u5e93\u540d\u4e0d\u7b26\u5408\u8981\u6c42\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165",Y="\u9080\u8bf7\u7801\u65e0\u6548\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165";t.d(n,"b",(function(){return d})),t.d(n,"a",(function(){return k})),t.d(n,"c",(function(){return S}))},1131:function(e,n,t){"use strict";var r=t(0),a=t.n(r),i=t(1133),u=t.n(i);n.a=a.a.memo((function(e){var n=e.children,t=e.required;return a.a.createElement("div",{className:u.a.InputLabel},n,a.a.createElement("span",{className:u.a.requiredSign},t?" *":""))}))},1132:function(e,n,t){"use strict";var r=t(1129);t.d(n,"a",(function(){return r.a}))},1133:function(e,n,t){e.exports={InputLabel:"Style_InputLabel__3wLmK",requiredSign:"Style_requiredSign__3lJIr"}},1136:function(e,n,t){"use strict";var r=t(1131);t.d(n,"a",(function(){return r.a}))},1137:function(e,n,t){e.exports={SettingsTitle:"Style_SettingsTitle__rgD4i"}},1138:function(e,n,t){"use strict";var r=t(0),a=t.n(r),i=t(1137),u=t.n(i);var c=a.a.memo((function(e){var n=e.children;return a.a.createElement("h2",{className:u.a.SettingsTitle},n)}));t.d(n,"a",(function(){return c}))},1269:function(e,n,t){e.exports={Profile:"Style_Profile__1P2aC",item:"Style_item__1F9QO",form:"Style_form__1PS4O",inputWrapper:"Style_inputWrapper__fOuXC",saveButtonWrapper:"Style_saveButtonWrapper__2AiWe",emailForm:"Style_emailForm__7P4eQ"}},1360:function(e,n,t){"use strict";t.r(n);t(97);var r=t(42),a=t(2),i=t.n(a),u=t(5),c=t(64),o=t(65),s=t(67),l=t(66),m=t(68),f=t(0),d=t.n(f),p=(t(351),t(163)),E=(t(96),t(25)),v=(t(349),t(162)),N=(t(517),t(348)),S=t(1269),_=t.n(S),b=t(1138),g=t(1136),A=t(1130),I=t(1132),k=t(24);const{PAGE_ID:C,PAGE_ID_TO_ROUTE:O}=k.CONFIG;var h=d.a.memo((function(e){const{nickname:n,email:t,onEmailInputChange:r,onNicknameInputChange:a,onEmailSubmit:i,onNicknameSubmit:u,loading:c}=e;return d.a.createElement("div",{className:_.a.Profile},d.a.createElement(b.a,null,"\u4e2a\u4eba\u8d44\u6599"),d.a.createElement("div",{className:_.a.item},d.a.createElement(g.a,null,"\u6635\u79f0"),d.a.createElement("div",{className:_.a.form},d.a.createElement("div",{className:_.a.inputWrapper},d.a.createElement(v.a,{title:A.c.Profile.NICKNAME,trigger:"focus"},d.a.createElement(N.a,{onChange:a,value:n,disabled:c}))),d.a.createElement("div",{className:_.a.saveButtonWrapper},d.a.createElement(E.a,{type:"primary",onClick:u,loading:c,disabled:c},"\u4fdd\u5b58")))),d.a.createElement("div",{className:_.a.item},d.a.createElement(g.a,null,"\u90ae\u7bb1"),d.a.createElement("div",{className:"".concat(_.a.form," ").concat(_.a.emailForm)},d.a.createElement("div",{className:"".concat(_.a.inputWrapper," ").concat(_.a.emailInputWrapper)},d.a.createElement(N.a,{type:"email",onChange:r,value:t,disabled:c})),d.a.createElement("div",{className:_.a.saveButtonWrapper},d.a.createElement(E.a,{type:"primary",onClick:i,loading:c,disabled:c},"\u4fdd\u5b58")))),d.a.createElement("div",{className:_.a.item},d.a.createElement(g.a,null,"\u5bc6\u7801"),d.a.createElement(p.a,{type:"info",showIcon:!0,message:d.a.createElement("div",null,"\u524d\u5f80",d.a.createElement(I.a,{to:O[C.CHANGE_PASSWORD]},"\u4fee\u6539\u5bc6\u7801\u9875\u9762"),"\u4fee\u6539\u5bc6\u7801")})))})),P=t(38),M=t(220),y=t(136),x=k.CONFIG.PAGE_ID,w=k.CONFIG.PAGE_ID_TO_ROUTE,D=function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(s.a)(this,Object(l.a)(n).call(this,e))).setStatePromise=Object(M.promisify)(t.setState),t.loadProfile=Object(u.a)(i.a.mark((function e(){var n,r,a,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.e.get();case 2:if(null===(n=e.sent)){e.next=9;break}return r=n.nickname,a=n.email,e.next=7,t.setStatePromise({nickname:r,email:a});case 7:e.next=11;break;case 9:return u=t.props.history,e.abrupt("return",u.replace(w[x.NOT_FOUND]));case 11:case"end":return e.stop()}}),e)}))),t.onNicknameInputChange=function(e){t.setState({nickname:e.target.value})},t.onEmailInputChange=function(e){t.setState({email:e.target.value})},t.onNicknameSubmit=Object(u.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.state.nickname,!A.b.Profile.nickname(n)){e.next=10;break}return t.setState({loading:!0}),e.next=5,P.e.set({nickname:n});case 5:null!==e.sent&&r.a.success({message:"\u6635\u79f0\u4fee\u6539\u6210\u529f"}),t.setState({loading:!1}),e.next=11;break;case 10:r.a.warn({message:A.a.Profile.NICKNAME,description:A.c.Profile.NICKNAME});case 11:case"end":return e.stop()}}),e)}))),t.onEmailSubmit=Object(u.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.state.email,!A.b.Profile.email(n)){e.next=10;break}return t.setState({loading:!0}),e.next=5,P.e.set({email:n});case 5:null!==e.sent&&r.a.success({message:"\u90ae\u7bb1\u4fee\u6539\u6210\u529f"}),t.setState({loading:!1}),e.next=11;break;case 10:r.a.warn({message:A.a.Profile.EMAIL});case 11:case"end":return e.stop()}}),e)}))),t.state={nickname:"",email:"",loading:!1},t}return Object(m.a)(n,e),Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setStatePromise({loading:!0});case 2:return e.next=4,this.loadProfile();case 4:return e.next=6,this.setStatePromise({loading:!1});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,n=e.nickname,t=e.email,r=e.loading;return d.a.createElement(h,{nickname:n,email:t,loading:r,onEmailInputChange:this.onEmailInputChange,onEmailSubmit:this.onEmailSubmit,onNicknameInputChange:this.onNicknameInputChange,onNicknameSubmit:this.onNicknameSubmit})}}]),n}(f.PureComponent),R=Object(y.f)(D);t.d(n,"default",(function(){return R}))}}]);
//# sourceMappingURL=4.6faa3391.chunk.js.map