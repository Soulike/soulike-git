(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[11],{649:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(7);var l=r.a.memo((function(e){return r.a.createElement(o.b,Object.assign({},e,{target:"_blank",rel:"noopener norefferrer"}))}));a.d(t,"a",(function(){return l}))},654:function(e,t,a){e.exports={InputTip:"Style_InputTip__KsPY_"}},656:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(654),l=a.n(o);var i=r.a.memo((function(e){const{children:t}=e;return r.a.createElement("div",{className:l.a.InputTip},t)}));a.d(t,"a",(function(){return i}))},665:function(e,t,a){e.exports={DefaultAvatar:"Style_DefaultAvatar__1F6EL",img:"Style_img__2bePj"}},666:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(665),l=a.n(o),i=a(216),s=a.n(i);var c=r.a.memo((function(){return r.a.createElement("div",{className:l.a.DefaultAvatar},r.a.createElement("img",{src:s.a,alt:"default_avatar",className:l.a.img}))}));a.d(t,"a",(function(){return c}))},675:function(e,t,a){e.exports={SettingsTitle:"Style_SettingsTitle__j1tWe"}},676:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(0),r=a(96),o=a(62);function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},d=function(e){function t(){var e;return s(this,t),(e=u(this,m(t).apply(this,arguments))).saveTooltip=function(t){e.tooltip=t},e.renderPopover=function(t){var a=t.getPrefixCls,o=e.props,l=o.prefixCls,s=f(o,["prefixCls"]);delete s.title;var c=a("popover",l);return n.createElement(r.a,i({},s,{prefixCls:c,ref:e.saveTooltip,overlay:e.getOverlay(c)}))},e}var a,l,d;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),a=t,(l=[{key:"getPopupDomNode",value:function(){return this.tooltip.getPopupDomNode()}},{key:"getOverlay",value:function(e){var t=this.props,a=t.title,r=t.content;return n.createElement("div",null,a&&n.createElement("div",{className:"".concat(e,"-title")},a),n.createElement("div",{className:"".concat(e,"-inner-content")},r))}},{key:"render",value:function(){return n.createElement(o.a,null,this.renderPopover)}}])&&c(a.prototype,l),d&&c(a,d),t}(n.Component);d.defaultProps={placement:"top",transitionName:"zoom-big",trigger:"hover",mouseEnterDelay:.1,mouseLeaveDelay:.1,overlayStyle:{}}},684:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(675),l=a.n(o);var i=r.a.memo((function(e){const{children:t}=e;return r.a.createElement("h2",{className:l.a.SettingsTitle},t)}));a.d(t,"a",(function(){return i}))},748:function(e,t,a){e.exports={Collaborators:"Style_Collaborators__1C3aa",title:"Style_title__1b5Lj",alertWrapper:"Style_alertWrapper__3AH8e"}},749:function(e,t,a){e.exports={AddCollaborationButton:"Style_AddCollaborationButton__XUfdf",loadingSpin:"Style_loadingSpin__1YQaP"}},750:function(e,t,a){},751:function(e,t,a){e.exports={CollaboratorCard:"Style_CollaboratorCard__2Upr7",cardContent:"Style_cardContent__2hQ3K",basicInfo:"Style_basicInfo___YOQ3",avatarWrapper:"Style_avatarWrapper__PNsZI",username:"Style_username__2gP0l",nickname:"Style_nickname__2DA1y"}},787:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=(a(214),a(97)),l=a(748),i=a.n(l),s=a(684),c=(a(52),a(22)),u=(a(327),a(676)),m=(a(51),a(14)),p=(a(323),a(209)),f=(a(84),a(37)),d=a(749),y=a.n(d),v=a(217),b=a.n(v),g=a(656),h=a(635),_=a(626);var E=r.a.memo((function(e){const{code:t,loading:a,onClick:n,onCopy:o}=e;return r.a.createElement(u.a,{trigger:"click",title:"\u9080\u8bf7\u7801",placement:"bottomRight",content:r.a.createElement("div",{className:y.a.AddCollaborationButton},a?r.a.createElement("div",{className:y.a.loadingSpin},r.a.createElement(f.a,null)):r.a.createElement("div",null,r.a.createElement(p.a,{value:t,addonAfter:r.a.createElement(b.a,{text:t,onCopy:o},r.a.createElement(h.a,null))}),r.a.createElement(g.a,null,"\u9080\u8bf7\u7801\u6709\u6548\u671f\u4e00\u5468\uff0c\u4e14\u53ea\u53ef\u4f7f\u7528\u4e00\u6b21\u3002")))},r.a.createElement(m.a,{type:"primary",onClick:n},r.a.createElement(_.a,null),"\u6dfb\u52a0"))})),C=a(23),S=a(76);class O extends n.PureComponent{constructor(e){super(e),this.onClick=async()=>{const{match:{params:{username:e,repository:t}}}=this.props;this.setState({loading:!0});const a=await C.b.generateCode({username:e,name:t});if(null!==a){const{code:e}=a;this.setState({code:e,loading:!1})}},this.onCopy=(e,t)=>{t?c.a.success({message:"\u9080\u8bf7\u7801\u5df2\u6210\u529f\u590d\u5236"}):c.a.warning({message:"\u9080\u8bf7\u7801\u590d\u5236\u5931\u8d25\uff0c\u8bf7\u624b\u52a8\u590d\u5236"})},this.state={code:"",loading:!1}}render(){const{code:e,loading:t}=this.state;return r.a.createElement(E,{code:e,loading:t,onClick:this.onClick,onCopy:this.onCopy})}}var P=Object(S.f)(O),k=(a(653),a(652)),w=(a(210),a(58)),N=a(750),j=a.n(N),x=(a(324),a(211)),T=(a(215),a(90)),I=(a(328),a(199)),A=a(751),D=a.n(A),B=a(666),R=a(20),W=a(649);var L=r.a.memo((function(e){const{profile:{username:t,nickname:a,avatar:n},onRemoveButtonClick:o,loading:l}=e;return r.a.createElement("div",{className:D.a.CollaboratorCard},r.a.createElement(x.a,{bordered:!1},r.a.createElement("div",{className:D.a.cardContent},r.a.createElement(W.a,{to:R.Function.generatePersonalCenterRoute({username:t}),className:D.a.basicInfo},r.a.createElement("div",{className:D.a.avatarWrapper},n?r.a.createElement(I.a,{src:n,shape:"square",size:48}):r.a.createElement(B.a,null)),r.a.createElement("div",{className:D.a.nickname},a),r.a.createElement("div",{className:D.a.username},t)),r.a.createElement(T.a,{disabled:l,title:r.a.createElement(r.a.Fragment,null,"\u786e\u8ba4\u53d6\u6d88 ",r.a.createElement("b",null,t)," \u7684\u5408\u4f5c\u8005\u8eab\u4efd\uff1f"),onConfirm:o},r.a.createElement(m.a,{type:"danger",disabled:l,loading:l},"\u79fb\u9664")))))}));class F extends n.PureComponent{constructor(e){super(e),this.onRemoveButtonClick=async()=>{const{profile:{username:e},match:{params:{username:t,repository:a}}}=this.props;this.setState({loading:!0}),null!==await C.b.remove({username:t,name:a},{username:e})&&(c.a.success({message:"\u79fb\u9664\u5408\u4f5c\u8005\u6210\u529f"}),setTimeout(()=>{window.location.reload()},1e3)),this.setState({loading:!1})},this.state={loading:!1}}render(){const{loading:e}=this.state,{profile:t}=this.props;return r.a.createElement(L,{profile:t,loading:e,onRemoveButtonClick:this.onRemoveButtonClick})}}var Q=Object(S.f)(F);var Y=r.a.memo((function(e){const{profiles:t,loading:a}=e;return r.a.createElement("div",{className:j.a.ProfileList},r.a.createElement(k.a,{locale:{emptyText:r.a.createElement(w.a,{description:"\u6ca1\u6709\u7528\u6237"})},loading:a,dataSource:t,renderItem:e=>r.a.createElement(Q,{profile:e})}))}));class z extends n.PureComponent{constructor(e){super(e),this.loadCollaborators=async()=>{const{match:{params:{username:e,repository:t}}}=this.props,a=await C.b.getCollaborators({username:e,name:t});if(null!==a){const{collaborators:e}=a;this.setState({profiles:e})}},this.state={profiles:[],loading:!1}}async componentDidMount(){this.setState({loading:!0}),await this.loadCollaborators(),this.setState({loading:!1})}render(){const{profiles:e,loading:t}=this.state;return r.a.createElement(Y,{profiles:e,loading:t})}}var J=Object(S.f)(z);var K=r.a.memo((function(){return r.a.createElement("div",{className:i.a.Collaborators},r.a.createElement(s.a,null,r.a.createElement("div",{className:i.a.title},"\u5408\u4f5c\u8005",r.a.createElement(P,null))),r.a.createElement("div",{className:i.a.alertWrapper},r.a.createElement(o.a,{type:"info",message:"\u4ed3\u5e93\u5408\u4f5c\u8005\u53ef\u53d6\u5f97\u548c\u521b\u5efa\u8005\u76f8\u540c\u7684\u4ed3\u5e93\u8bbf\u95ee\u6743\u9650\u3002",showIcon:!0})),r.a.createElement(J,null))}));class U extends n.PureComponent{render(){return r.a.createElement(K,null)}}var q=U;a.d(t,"default",(function(){return q}))}}]);
//# sourceMappingURL=11.9880328a.chunk.js.map