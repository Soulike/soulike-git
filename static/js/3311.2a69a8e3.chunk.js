"use strict";(self.webpackChunksoulike_git=self.webpackChunksoulike_git||[]).push([[3311],{1011:function(f,o,t){t.d(o,{Z:function(){return C}});var e=t(89526),a={CriticalOperationConfirmModal:"Style_CriticalOperationConfirmModal__vCdv9",content:"Style_content__0N+tT",fuckAutocomplete:"Style_fuckAutocomplete__ZZAuh",warningWrapper:"Style_warningWrapper__rNjPo",input:"Style_input__OMIJw"},r=t(13317),d=t(32014);function c(E){const{warning:I,validateText:i,password:Z,validateInputPlaceholder:y,onValidateInputChange:D,onPasswordInputChange:F,visible:M,onOk:N,onCancel:P,title:B,confirmLoading:w}=E;return e.createElement(r.Z,{confirmLoading:w,title:B,className:a.CriticalOperationConfirmModal,visible:M,onOk:N,onCancel:P,destroyOnClose:!0},e.createElement("div",{className:a.content},e.createElement("div",{className:a.fuckAutocomplete},e.createElement(d.Z,{type:"text",value:"fuck autocomplete"}),e.createElement(d.Z.Password,{value:"fuck autocomplete"})),e.createElement("div",{className:a.warningWrapper},I),e.createElement(d.Z,{className:a.input,value:i,onChange:D,placeholder:y,autoFocus:!0,autoComplete:"off"}),e.createElement(d.Z.Password,{className:a.input,placeholder:"\u8D26\u6237\u5BC6\u7801",value:Z,onChange:F,autoComplete:"off"})))}var C=e.memo(c)},2620:function(f,o,t){t.d(o,{Z:function(){return d}});var e=t(89526),a=t(39207);function r(c){const{children:C}=c;return e.createElement(a.ZP,{bordered:!0,split:!0},C)}var d=e.memo(r)},65142:function(f,o,t){t.d(o,{Z:function(){return c}});var e=t(89526),a=t(39207),r=t(30592);function d(C){const{title:E,description:I,onButtonClick:i,buttonText:Z}=C;return e.createElement(a.ZP.Item,{extra:e.createElement(r.Z,{type:"primary",danger:!0,onClick:i},Z)},e.createElement(a.ZP.Item.Meta,{title:E,description:I}))}var c=e.memo(d)},12030:function(f,o,t){t.d(o,{Z:function(){return d}});var e=t(89526),a={InputLabel:"Style_InputLabel__3UwFN",requiredSign:"Style_requiredSign__4HKr2"};function r(c){const{children:C,required:E}=c;return e.createElement("div",{className:a.InputLabel},C,e.createElement("span",{className:a.requiredSign},E?" *":""))}var d=e.memo(r)},18527:function(f,o,t){t.d(o,{Z:function(){return e.Z}});var e=t(12030)},95715:function(f,o,t){t.d(o,{Z:function(){return d}});var e=t(89526),a={SettingsTitle:"Style_SettingsTitle__2JkD4"};function r(c){const{children:C}=c;return e.createElement("h2",{className:a.SettingsTitle},C)}var d=e.memo(r)},13311:function(f,o,t){t.r(o),t.d(o,{default:function(){return J}});var e=t(89526),a={Options:"Style_Options__7waBa",itemWrapper:"Style_itemWrapper__aXQpD",dangerZoneWrapper:"Style_dangerZoneWrapper__zTHWR"},r=t(95715),d=t(2620),c=t(1011),C=t(65142),E=t(53546);function I(g){const{onButtonClick:m,modalGroupId:n,modalPassword:u,onModalGroupIdInputChange:s,onModalPasswordInputChange:v,onModalOk:S,onModalCancel:p,modalVisible:l,modalConfirmLoading:h}=g;return e.createElement(e.Fragment,null,e.createElement(C.Z,{buttonText:"\u89E3\u6563\u5C0F\u7EC4",title:"\u89E3\u6563\u5C0F\u7EC4",description:"\u89E3\u6563\u5C0F\u7EC4\u7684\u64CD\u4F5C\u4E0D\u53EF\u6062\u590D\uFF0C\u8BF7\u614E\u91CD\u3002",onButtonClick:m}),e.createElement(c.Z,{warning:e.createElement(e.Fragment,null,e.createElement(E.Z,{showIcon:!0,banner:!0,type:"warning",message:"\u5C0F\u7EC4\u88AB\u89E3\u6563\u540E\u65E0\u6CD5\u6062\u590D\uFF0C\u5C0F\u7EC4\u4E0B\u7684\u4ED3\u5E93\u5C06\u6062\u590D\u65E0\u5C0F\u7EC4\u72B6\u6001"}),e.createElement(E.Z,{showIcon:!0,banner:!0,type:"info",message:"\u8BF7\u5728\u4E0B\u65B9\u8F93\u5165\u672C\u5C0F\u7EC4\u7684 ID \u548C\u60A8\u7684\u5BC6\u7801\u4EE5\u786E\u8BA4\u64CD\u4F5C"})),validateInputPlaceholder:"\u5C0F\u7EC4\u7684 ID",title:"\u89E3\u6563\u5C0F\u7EC4\u786E\u8BA4",validateText:n,password:u,onValidateInputChange:s,onPasswordInputChange:v,onOk:S,onCancel:p,visible:l,confirmLoading:h}))}var i=e.memo(I),Z=t(65092),y=t(24315),D=t(62371),F=t(60269),M=t(10330),N=t(36393),P=(g,m,n)=>new Promise((u,s)=>{var v=l=>{try{p(n.next(l))}catch(h){s(h)}},S=l=>{try{p(n.throw(l))}catch(h){s(h)}},p=l=>l.done?u(l.value):Promise.resolve(l.value).then(v,S);p((n=n.apply(g,m)).next())});class B extends e.PureComponent{constructor(m){super(m);this.setStatePromise=n=>new Promise(u=>{this.setState(n,()=>{u()})}),this.onButtonClick=()=>P(this,null,function*(){yield this.initModal(),yield this.setStatePromise({modalVisible:!0})}),this.initModal=()=>P(this,null,function*(){yield this.setStatePromise({modalGroupId:"",modalPassword:""})}),this.onModalGroupIdInputChange=n=>{this.setState({modalGroupId:n.target.value})},this.onModalPasswordInputChange=n=>{this.setState({modalPassword:n.target.value})},this.onModalOk=()=>P(this,null,function*(){const{modalGroupId:n,modalPassword:u}=this.state,{match:{params:{id:s}},history:v}=this.props;if(n!==s)y.Z.warn({message:"\u5C0F\u7EC4 ID \u4E0D\u6B63\u786E"});else if(!M.password(u))y.Z.warn({message:"\u5BC6\u7801\u4E0D\u6B63\u786E"});else{yield this.setStatePromise({modalConfirmLoading:!0});const S=yield D.NZ.get();if(S!==null){const{username:p}=S,l=yield D.mR.checkPassword({hash:F.mR.calculateHash(p,u)});if(l!==null){const{isCorrect:h}=l;if(!h)y.Z.warn({message:"\u5BC6\u7801\u4E0D\u6B63\u786E"});else if((yield D.ZA.dismiss({id:Number.parseInt(s)}))!==null)return y.Z.success({message:`\u5C0F\u7EC4 #${s} \u5DF2\u89E3\u6563`}),yield this.setStatePromise({modalVisible:!1}),v.push(N.yt[N.DV.INDEX])}}else return v.replace(N.yt[N.DV.LOGIN]);yield this.setStatePromise({modalConfirmLoading:!1})}}),this.onModalCancel=()=>{this.setState({modalVisible:!1})},this.state={modalGroupId:"",modalPassword:"",modalVisible:!1,modalConfirmLoading:!1}}render(){const{modalConfirmLoading:m,modalVisible:n,modalPassword:u,modalGroupId:s}=this.state;return e.createElement(i,{onButtonClick:this.onButtonClick,modalConfirmLoading:m,modalVisible:n,modalPassword:u,modalGroupId:s,onModalOk:this.onModalOk,onModalCancel:this.onModalCancel,onModalPasswordInputChange:this.onModalPasswordInputChange,onModalGroupIdInputChange:this.onModalGroupIdInputChange})}}var w=(0,Z.EN)(B),V=t(18527),T=t(43546),L=t(32014),W=t(30592),A={ChangeName:"Style_ChangeName__A0iWU",input:"Style_input__-4DNe",button:"Style_button__ypKtE"},G=t(458);function R(g){const{groupName:m,onButtonClick:n,onGroupNameChange:u,loading:s}=g;return e.createElement("div",{className:A.ChangeName},e.createElement(V.Z,null,"\u5C0F\u7EC4\u540D"),e.createElement(T.Z,{trigger:"focus",title:G.A},e.createElement(L.Z,{disabled:s,className:A.input,value:m,onChange:u})),e.createElement(W.Z,{disabled:s,loading:s,className:A.button,onClick:n},"\u91CD\u547D\u540D"))}var $=e.memo(R),x=t(62680),b=t(87318),O=(g,m,n)=>new Promise((u,s)=>{var v=l=>{try{p(n.next(l))}catch(h){s(h)}},S=l=>{try{p(n.throw(l))}catch(h){s(h)}},p=l=>l.done?u(l.value):Promise.resolve(l.value).then(v,S);p((n=n.apply(g,m)).next())});class k extends e.PureComponent{constructor(m){super(m);this.setStatePromise=n=>new Promise(u=>{this.setState(n,()=>{u()})}),this.loadGroupName=()=>O(this,null,function*(){const{match:{params:{id:n}},history:u}=this.props,s=yield D.ZA.info({id:Number.parseInt(n)});if(s!==null){const{name:v}=s;yield this.setStatePromise({groupName:v})}else return u.replace(N.yt[N.DV.NOT_FOUND])}),this.onGroupNameChange=n=>{this.setState({groupName:n.target.value})},this.onButtonClick=()=>O(this,null,function*(){const{match:{params:{id:n}}}=this.props,{groupName:u}=this.state;x.name(u)?(yield this.setStatePromise({loading:!0}),(yield D.ZA.changeName({id:Number.parseInt(n),name:u}))!==null&&(y.Z.success({message:`\u5C0F\u7EC4 #${n} \u91CD\u547D\u540D\u6210\u529F`}),setTimeout(()=>{window.location.reload()},1e3)),yield this.setStatePromise({loading:!1})):y.Z.warn({message:b.A,description:G.A})}),this.state={groupName:"",loading:!1}}componentDidMount(){return O(this,null,function*(){yield this.setStatePromise({loading:!0}),yield this.loadGroupName(),yield this.setStatePromise({loading:!1})})}render(){const{groupName:m,loading:n}=this.state;return e.createElement($,{loading:n,groupName:m,onButtonClick:this.onButtonClick,onGroupNameChange:this.onGroupNameChange})}}var H=(0,Z.EN)(k);function U(){return e.createElement("div",{className:a.Options},e.createElement("div",{className:a.settingsWrapper},e.createElement(r.Z,null,"\u8BBE\u7F6E"),e.createElement("div",{className:a.itemWrapper},e.createElement(H,null))),e.createElement("div",{className:a.dangerZoneWrapper},e.createElement(r.Z,null,e.createElement("span",{style:{color:"red"}},"\u5371\u9669\u533A")),e.createElement(d.Z,null,e.createElement(w,null))))}var K=e.memo(U);class z extends e.PureComponent{render(){return e.createElement(K,null)}}var J=z},87318:function(f,o,t){t.d(o,{A:function(){return e}});const e="\u5C0F\u7EC4\u540D\u4E0D\u7B26\u5408\u8981\u6C42\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165"},10330:function(f,o,t){t.r(o),t.d(o,{hash:function(){return E},password:function(){return C},username:function(){return c},verificationCode:function(){return I}});const e=/^\w{1,20}$/,a=/^\S{6,}$/,r=/^[A-z0-9]{64}$/,d=/^\d{6}$/,c=i=>typeof i!="string"?!1:e.test(i),C=i=>typeof i!="string"?!1:a.test(i),E=i=>typeof i!="string"?!1:r.test(i),I=i=>typeof i!="string"?!1:d.test(i)},62680:function(f,o,t){t.r(o),t.d(o,{name:function(){return a}});const e=/^\S{1,20}$/,a=r=>typeof r!="string"?!1:e.test(r)},458:function(f,o,t){t.d(o,{A:function(){return e}});const e="1~20 \u4F4D"}}]);

//# sourceMappingURL=3311.2a69a8e3.chunk.js.map