(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[18],{1e3:function(n,t,r){n.exports={InputTip:"Style_InputTip__KsPY_"}},1001:function(n,t,r){n.exports={PageTitle:"Style_PageTitle__3R_vY"}},1002:function(n,t,r){"use strict";r.d(t,"a",(function(){return i}));var e=r(0),u=r.n(e),a=r(1e3),o=r.n(a);var i=u.a.memo((function(n){var t=n.children;return u.a.createElement("div",{className:o.a.InputTip},t)}))},1003:function(n,t,r){"use strict";r.d(t,"a",(function(){return i}));var e=r(0),u=r.n(e),a=r(1001),o=r.n(a);var i=function(n){var t=n.children;return u.a.createElement("h1",{className:o.a.PageTitle},t)}},1069:function(n,t,r){n.exports={AddCollaboration:"Style_AddCollaboration__2lfZE",inputWrapper:"Style_inputWrapper__3EVaA",buttonWrapper:"Style_buttonWrapper__alhng"}},1210:function(n,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return I}));var e=r(1),u=r.n(e),a=r(3),o=r(9),i=r(10),c=r(17),d=r(18),f=r(0),l=r.n(f),s=r(1069),p=r.n(s),v=r(1003),E=r(995),m=r(1002),C=r(957),A=r(86);var S=l.a.memo((function(n){var t=n.code,r=n.onCodeInputChange,e=n.onSubmitButtonClick,u=n.loading;return l.a.createElement("div",{className:p.a.AddCollaboration},l.a.createElement(v.a,null,"\u6210\u4e3a\u4ed3\u5e93\u5408\u4f5c\u8005"),l.a.createElement("div",{className:p.a.inputWrapper},l.a.createElement(E.a,{required:!0},"\u9080\u8bf7\u7801"),l.a.createElement(C.a,{disabled:u,autoFocus:!0,type:"text",value:t,onChange:r}),l.a.createElement(m.a,null,"\u4ed3\u5e93\u5408\u4f5c\u9080\u8bf7\u7801\u53ef\u7531\u4ed3\u5e93\u521b\u5efa\u8005\u751f\u6210\uff0c\u63d0\u4ea4\u6210\u529f\u540e\u60a8\u5373\u53ef\u83b7\u5f97\u4ed3\u5e93\u7684 push \u6743\u9650\u3002")),l.a.createElement("div",{className:p.a.buttonWrapper},l.a.createElement(A.a,{disabled:u,loading:u,type:"primary",block:!0,onClick:e},"\u63d0\u4ea4")))})),b=r(991),N=r(951),_=r(31),I=function(n){Object(d.a)(r,n);var t=Object(c.a)(r);function r(n){var e;return Object(o.a)(this,r),(e=t.call(this,n)).onCodeInputChange=function(n){e.setState({code:n.target.value})},e.onSubmitButtonClick=Object(a.a)(u.a.mark((function n(){var t,r;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t=e.state.code,b.b.Collaborator.code(t)){n.next=5;break}N.a.warn({message:b.a.Collaborator.CODE}),n.next=11;break;case 5:return e.setState({loading:!0}),n.next=8,_.b.add(t);case 8:r=n.sent,e.setState({loading:!1}),null!==r&&(N.a.success({message:"\u52a0\u5165\u4ed3\u5e93\u5408\u4f5c\u8005\u6210\u529f"}),e.setState({code:""}));case 11:case"end":return n.stop()}}),n)}))),e.state={code:"",loading:!1},e}return Object(i.a)(r,[{key:"render",value:function(){var n=this.state,t=n.code,r=n.loading;return l.a.createElement(S,{code:t,loading:r,onCodeInputChange:this.onCodeInputChange,onSubmitButtonClick:this.onSubmitButtonClick})}}]),r}(f.PureComponent)},991:function(n,t,r){"use strict";r.d(t,"b",(function(){return p})),r.d(t,"a",(function(){return g})),r.d(t,"c",(function(){return A}));var e={};r.r(e),r.d(e,"USERNAME",(function(){return h})),r.d(e,"PASSWORD",(function(){return M})),r.d(e,"VERIFICATION_CODE",(function(){return O}));var u={};r.r(u),r.d(u,"NAME",(function(){return k}));var a={};r.r(a),r.d(a,"NICKNAME",(function(){return R})),r.d(a,"EMAIL",(function(){return y}));var o={};r.r(o),r.d(o,"NAME",(function(){return P}));var i={};r.r(i),r.d(i,"CODE",(function(){return w}));var c={};r.r(c),r.d(c,"username",(function(){return D})),r.d(c,"password",(function(){return W})),r.d(c,"verificationCode",(function(){return x}));var d={};r.r(d),r.d(d,"name",(function(){return T}));var f={};r.r(f),r.d(f,"nickname",(function(){return $})),r.d(f,"email",(function(){return L}));var l={};r.r(l),r.d(l,"name",(function(){return K}));var s={};r.r(s),r.d(s,"code",(function(){return j}));var p={};r.r(p),r.d(p,"Account",(function(){return c})),r.d(p,"Group",(function(){return d})),r.d(p,"Profile",(function(){return f})),r.d(p,"Repository",(function(){return l})),r.d(p,"Collaborator",(function(){return s}));var v={};r.r(v),r.d(v,"USERNAME",(function(){return q})),r.d(v,"PASSWORD",(function(){return B}));var E={};r.r(E),r.d(E,"NAME",(function(){return F}));var m={};r.r(m),r.d(m,"NICKNAME",(function(){return U}));var C={};r.r(C),r.d(C,"NAME",(function(){return V}));var A={};r.r(A),r.d(A,"Account",(function(){return v})),r.d(A,"Group",(function(){return E})),r.d(A,"Profile",(function(){return m})),r.d(A,"Repository",(function(){return C}));var S={};r.r(S),r.d(S,"USERNAME",(function(){return z})),r.d(S,"PASSWORD",(function(){return G})),r.d(S,"VERIFICATION_CODE",(function(){return J}));var b={};r.r(b),r.d(b,"NAME",(function(){return Z}));var N={};r.r(N),r.d(N,"NICKNAME",(function(){return Y})),r.d(N,"EMAIL",(function(){return H}));var _={};r.r(_),r.d(_,"NAME",(function(){return Q}));var I={};r.r(I),r.d(I,"CODE",(function(){return X}));var g={};r.r(g),r.d(g,"Account",(function(){return S})),r.d(g,"Group",(function(){return b})),r.d(g,"Profile",(function(){return N})),r.d(g,"Repository",(function(){return _})),r.d(g,"Collaborator",(function(){return I}));var h=/^\w{1,20}$/,M=/^\S{6,}$/,O=/^\d{6}$/,k=/^\S{1,20}$/,R=/^\S{1,20}$/,y=/^([A-z0-9_\-.\u4e00-\u9fa5])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,8})$/,P=/^\w{1,20}$/,w=/^\w+_\w+_\d+$/;function D(n){return e.USERNAME.test(n)}function W(n){return e.PASSWORD.test(n)}function x(n){return e.VERIFICATION_CODE.test(n)}function T(n){return u.NAME.test(n)}function $(n){return a.NICKNAME.test(n)}function L(n){return a.EMAIL.test(n)}function K(n){return o.NAME.test(n)}function j(n){return i.CODE.test(n)}var q="1~20 \u4f4d\u5b57\u6bcd\u3001\u6570\u5b57\u53ca\u4e0b\u5212\u7ebf",B="6 \u4f4d\u4ee5\u4e0a",F="1~20 \u4f4d",U="1~20 \u4f4d",V="1~20 \u4f4d\u5b57\u6bcd\u3001\u6570\u5b57\u53ca\u4e0b\u5212\u7ebf",z="\u7528\u6237\u540d\u4e0d\u7b26\u5408\u8981\u6c42\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165",G="\u5bc6\u7801\u4e0d\u7b26\u5408\u8981\u6c42\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165",J="\u9a8c\u8bc1\u7801\u4e0d\u6b63\u786e",Z="\u5c0f\u7ec4\u540d\u4e0d\u7b26\u5408\u8981\u6c42\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165",Y="\u6635\u79f0\u4e0d\u7b26\u5408\u8981\u6c42\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165",H="\u8bf7\u8f93\u5165\u6709\u6548\u7684\u90ae\u7bb1",Q="\u4ed3\u5e93\u540d\u4e0d\u7b26\u5408\u8981\u6c42\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165",X="\u9080\u8bf7\u7801\u65e0\u6548\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165"},992:function(n,t,r){"use strict";var e=r(0),u=r.n(e),a=r(994),o=r.n(a);t.a=u.a.memo((function(n){var t=n.children,r=n.required;return u.a.createElement("div",{className:o.a.InputLabel},t,u.a.createElement("span",{className:o.a.requiredSign},r?" *":""))}))},994:function(n,t,r){n.exports={InputLabel:"Style_InputLabel__3wLmK",requiredSign:"Style_requiredSign__3lJIr"}},995:function(n,t,r){"use strict";var e=r(992);r.d(t,"a",(function(){return e.a}))}}]);
//# sourceMappingURL=18.9b9a0302.chunk.js.map