"use strict";(self.webpackChunksoulike_git=self.webpackChunksoulike_git||[]).push([[38],{18527:function(f,a,e){e.d(a,{Z:function(){return t.Z}});var t=e(12030)},29037:function(f,a,e){e.r(a),e.d(a,{default:function(){return b}});var t=e(89526),u={Register:"Style_Register__VXyCo",form:"Style_form__mivpb",inputWrapper:"Style_inputWrapper__TXKcc",logo:"Style_logo__37Q6X",button:"Style_button__VxlwJ"},i=e(32014),C=e(30592),r=e(49004),m=e(7320),v=e(59807),g=e(18527),F=e(54846),A=e(15675),R=e(48811),N=e(26190);function T(Z){const{username:p,password:n,repeatPassword:o,email:s,onUsernameInputChange:l,onUsernameInputBlur:c,onPasswordInputChange:h,onRepeatPasswordInputChange:d,onEmailInputChange:D,onFormSubmit:K,onVerificationCodeInputChange:H,verificationCode:$,onGetVerificationCodeButtonClick:Q,getVerificationCodeButtonText:j,disableGetVerificationCodeButton:X,loading:B}=Z;return t.createElement("main",{className:u.Register},t.createElement("form",{action:"#",className:u.form,onSubmit:K},t.createElement("img",{className:u.logo,src:r.Z,alt:"web_developer_logo"}),t.createElement("div",{className:u.inputWrapper},t.createElement(g.Z,{required:!0},"\u7528\u6237\u540D"),t.createElement(i.Z,{type:"text",size:"large",onChange:l,onBlur:c,autoFocus:!0,value:p,prefix:t.createElement(F.Z,null),disabled:B}),t.createElement(v.Z,null,"\u7528\u6237\u540D\u8981\u6C42 ",m.i,"\u3002")),t.createElement("div",{className:u.inputWrapper},t.createElement(g.Z,{required:!0},"\u5BC6\u7801"),t.createElement(i.Z,{type:"password",size:"large",onChange:h,value:n,prefix:t.createElement(A.Z,null),disabled:B}),t.createElement(v.Z,null,"\u4E3A\u4E86\u60A8\u7684\u8D26\u6237\u5B89\u5168\uFF0C\u5BC6\u7801\u8981\u6C42 ",m.Q,"\u3002")),t.createElement("div",{className:u.inputWrapper},t.createElement(g.Z,{required:!0},"\u91CD\u590D\u5BC6\u7801"),t.createElement(i.Z,{type:"password",size:"large",onChange:d,value:o,prefix:t.createElement(A.Z,null),disabled:B})),t.createElement("div",{className:u.inputWrapper},t.createElement(g.Z,{required:!0},"E-Mail"),t.createElement(i.Z,{type:"email",size:"large",onChange:D,value:s,prefix:t.createElement(R.Z,null),disabled:B}),t.createElement(v.Z,null,"\u8BE5\u90AE\u7BB1\u5C06\u7528\u4E8E\u7EDF\u8BA1\u60A8\u7684\u63D0\u4EA4\u6B21\u6570\u3001\u63A5\u6536\u901A\u77E5\u53CA\u4FEE\u6539\u5BC6\u7801\uFF0C\u8BF7\u786E\u4FDD\u8BE5\u90AE\u7BB1\u53EF\u7528\u3002")),t.createElement("div",{className:u.inputWrapper},t.createElement(g.Z,{required:!0},"\u90AE\u7BB1\u9A8C\u8BC1\u7801"),t.createElement(i.Z,{type:"text",size:"large",onChange:H,value:$,prefix:t.createElement(N.Z,null),disabled:B,maxLength:6,addonAfter:t.createElement(C.Z,{disabled:X||B,type:"link",onClick:Q},j)}),t.createElement(v.Z,null,"\u5982\u672A\u6536\u5230\u9A8C\u8BC1\u7801\u90AE\u4EF6\uFF0C\u8BF7\u67E5\u770B\u5176\u662F\u5426\u88AB\u8BEF\u5206\u7C7B\u4E3A\u5783\u573E\u90AE\u4EF6\u3002")),t.createElement(C.Z,{htmlType:"submit",className:u.button,size:"large",type:"primary",disabled:B,loading:B,block:!0},"\u6CE8\u518C")))}var z=t.memo(T),O=e(36393),x=e(65092),V=e(62371),E=e(24315),U=e(60269),G=e(99988),L=e(10330),I=e(43245),y=e(57333),S=(Z,p,n)=>new Promise((o,s)=>{var l=d=>{try{h(n.next(d))}catch(D){s(D)}},c=d=>{try{h(n.throw(d))}catch(D){s(D)}},h=d=>d.done?o(d.value):Promise.resolve(d.value).then(l,c);h((n=n.apply(Z,p)).next())});const{Account:P,Profile:M}=G;class w extends t.PureComponent{constructor(p){super(p);this.setStatePromise=n=>new Promise(o=>{this.setState(n,()=>{o()})}),this.setTitle=()=>{document.title=`\u6CE8\u518C - ${O.A1}`},this.onUsernameInputChange=n=>{this.setState({username:n.target.value})},this.onUsernameInputBlur=()=>S(this,null,function*(){const{username:n}=this.state;if(n!=="")if(!L.username(n))E.Z.warn({message:I.id,description:m.i});else{yield this.setStatePromise({loading:!0});const o=yield V.mR.checkIfUsernameAvailable(n);if(o!==null){const{isAvailable:s}=o;s||E.Z.warn({message:`\u7528\u6237\u540D ${n} \u5DF2\u5B58\u5728`})}yield this.setStatePromise({loading:!1})}}),this.onPasswordInputChange=n=>{this.setState({password:n.target.value})},this.onRepeatPasswordInputChange=n=>{this.setState({repeatPassword:n.target.value})},this.onEmailInputChange=n=>{this.setState({email:n.target.value})},this.onVerificationCodeInputChange=n=>{this.setState({verificationCode:n.target.value})},this.onFormSubmit=n=>S(this,null,function*(){n.preventDefault(),this.validateFormInput()&&(yield this.submitForm())}),this.onGetVerificationCodeButtonClick=()=>S(this,null,function*(){const{getVerificationCodeButtonText:o,email:s}=this.state;if(!M.email(s))E.Z.warn({message:y.x});else{this.setState({disableGetVerificationCodeButton:!0});let l=0;const c=setInterval(()=>{l++,this.setState({getVerificationCodeButtonText:`${30-l} \u79D2\u540E\u518D\u83B7\u53D6`})},1e3),h=setTimeout(()=>{clearInterval(c),this.setState({disableGetVerificationCodeButton:!1,getVerificationCodeButtonText:o})},30*1e3);(yield V.mR.sendVerificationCodeToEmail({email:s}))!==null?E.Z.success({message:"\u83B7\u53D6\u9A8C\u8BC1\u7801\u6210\u529F",description:`\u8BF7\u5230 ${s} \u67E5\u770B`}):(clearInterval(c),clearTimeout(h),this.setState({disableGetVerificationCodeButton:!1,getVerificationCodeButtonText:o}))}}),this.validateFormInput=()=>{const{username:n,password:o,repeatPassword:s,email:l,verificationCode:c}=this.state;return P.username(n)?P.password(o)?o!==s?(E.Z.warn({message:"\u4E24\u6B21\u8F93\u5165\u5BC6\u7801\u4E0D\u76F8\u540C"}),!1):M.email(l)?P.verificationCode(c)?!0:(E.Z.warn({message:I.FF}),!1):(E.Z.warn({message:y.x}),!1):(E.Z.warn({message:I.Qj,description:m.Q}),!1):(E.Z.warn({message:I.id,description:m.i}),!1)},this.submitForm=()=>S(this,null,function*(){const{username:n,password:o,email:s,verificationCode:l}=this.state,c=U.mR.calculateHash(n,o);this.setState({loading:!0}),(yield V.mR.register({username:n,hash:c},{nickname:n,email:s,avatar:""},l))&&this.onRegisterSuccess(),this.setState({loading:!1})}),this.onRegisterSuccess=()=>(E.Z.success({message:"\u6CE8\u518C\u6210\u529F"}),this.props.history.push(O.yt[O.DV.LOGIN])),this.state={username:"",password:"",repeatPassword:"",email:"",verificationCode:"",getVerificationCodeButtonText:"\u83B7\u53D6\u9A8C\u8BC1\u7801",disableGetVerificationCodeButton:!1,loading:!1}}componentDidMount(){this.setTitle()}render(){const{loading:p,disableGetVerificationCodeButton:n,username:o,password:s,repeatPassword:l,email:c,verificationCode:h,getVerificationCodeButtonText:d}=this.state;return t.createElement(z,{loading:p,username:o,password:s,email:c,disableGetVerificationCodeButton:n,verificationCode:h,onVerificationCodeInputChange:this.onVerificationCodeInputChange,onFormSubmit:this.onFormSubmit,onPasswordInputChange:this.onPasswordInputChange,onUsernameInputChange:this.onUsernameInputChange,onUsernameInputBlur:this.onUsernameInputBlur,onEmailInputChange:this.onEmailInputChange,onRepeatPasswordInputChange:this.onRepeatPasswordInputChange,repeatPassword:l,onGetVerificationCodeButtonClick:this.onGetVerificationCodeButtonClick,getVerificationCodeButtonText:d})}}var W=(0,x.EN)(w),b=W},43245:function(f,a,e){e.d(a,{id:function(){return t},Qj:function(){return u},FF:function(){return i}});const t="\u7528\u6237\u540D\u4E0D\u7B26\u5408\u8981\u6C42\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165",u="\u5BC6\u7801\u4E0D\u7B26\u5408\u8981\u6C42\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165",i="\u9A8C\u8BC1\u7801\u4E0D\u6B63\u786E"},57333:function(f,a,e){e.d(a,{O:function(){return t},x:function(){return u}});const t="\u6635\u79F0\u4E0D\u7B26\u5408\u8981\u6C42\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165",u="\u8BF7\u8F93\u5165\u6709\u6548\u7684\u90AE\u7BB1"},38818:function(f,a,e){e.r(a),e.d(a,{code:function(){return u}});const t=/^\w+_\w+_\d+$/,u=i=>typeof i!="string"?!1:t.test(i)},62680:function(f,a,e){e.r(a),e.d(a,{name:function(){return u}});const t=/^\S{1,20}$/,u=i=>typeof i!="string"?!1:t.test(i)},41379:function(f,a,e){e.r(a),e.d(a,{email:function(){return C},nickname:function(){return i}});const t=/^\S{1,20}$/,u=/^([A-z0-9_\-.\u4e00-\u9fa5])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,8})$/,i=r=>typeof r!="string"?!1:t.test(r),C=r=>typeof r!="string"?!1:u.test(r)},99988:function(f,a,e){e.r(a),e.d(a,{Account:function(){return t},Group:function(){return u},Profile:function(){return i},Repository:function(){return C},Collaborator:function(){return r}});var t=e(10330),u=e(62680),i=e(41379),C=e(50526),r=e(38818)},7320:function(f,a,e){e.d(a,{i:function(){return t},Q:function(){return u}});const t="1~20 \u4F4D\u5B57\u6BCD\u3001\u6570\u5B57\u53CA\u4E0B\u5212\u7EBF",u="6 \u4F4D\u53CA\u4EE5\u4E0A"},26190:function(f,a,e){e.d(a,{Z:function(){return v}});var t=e(1413),u=e(89526),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M120 160H72c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V168c0-4.4-3.6-8-8-8zm833 0h-48c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V168c0-4.4-3.6-8-8-8zM200 736h112c4.4 0 8-3.6 8-8V168c0-4.4-3.6-8-8-8H200c-4.4 0-8 3.6-8 8v560c0 4.4 3.6 8 8 8zm321 0h48c4.4 0 8-3.6 8-8V168c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v560c0 4.4 3.6 8 8 8zm126 0h178c4.4 0 8-3.6 8-8V168c0-4.4-3.6-8-8-8H647c-4.4 0-8 3.6-8 8v560c0 4.4 3.6 8 8 8zm-255 0h48c4.4 0 8-3.6 8-8V168c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v560c0 4.4 3.6 8 8 8zm-79 64H201c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm257 0h-48c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm256 0H648c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h178c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm-385 0h-48c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}}]},name:"barcode",theme:"outlined"},C=i,r=e(36593),m=function(F,A){return u.createElement(r.Z,(0,t.Z)((0,t.Z)({},F),{},{ref:A,icon:C}))};m.displayName="BarcodeOutlined";var v=u.forwardRef(m)},48811:function(f,a,e){e.d(a,{Z:function(){return v}});var t=e(1413),u=e(89526),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0068.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"}}]},name:"mail",theme:"outlined"},C=i,r=e(36593),m=function(F,A){return u.createElement(r.Z,(0,t.Z)((0,t.Z)({},F),{},{ref:A,icon:C}))};m.displayName="MailOutlined";var v=u.forwardRef(m)}}]);

//# sourceMappingURL=38.c4913649.chunk.js.map