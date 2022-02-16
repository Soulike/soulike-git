"use strict";(self.webpackChunksoulike_git=self.webpackChunksoulike_git||[]).push([[3554],{3554:function(R,L,m){m.r(L),m.d(L,{default:function(){return V}});var a=m(89526),E={Members:"Style_Members__Z8mAH",topArea:"Style_topArea__HRGz-",cardContent:"Style_cardContent__1-Pz3",titleWrapper:"Style_titleWrapper__9kmm8",name:"Style_name__zJG+x",isAdminTagWrapper:"Style_isAdminTagWrapper__w6NXR",isAdminTag:"Style_isAdminTag__9EGG8",avatarWrapper:"Style_avatarWrapper__g3Ot-",avatar:"Style_avatar__9wftr"},w=m(53546),l=m(39207),O=m(37109),M=m(34405),Z=m(75113),B=m(65293),v=m(23377),N=m(30592),I=m(18440),x=m(57428),W=m(13317),U=m(32014),$=m(58047),T={modalContent:"Style_modalContent__FVirZ",usernameInput:"Style_usernameInput__l87GI"};function k(b){const{onClick:p,showModal:s,username:o,loading:d,onModalCancelClick:h,onModalOkClick:S,onUsernameChange:C}=b;return a.createElement(a.Fragment,null,a.createElement(N.Z,{type:"primary",onClick:p,loading:d,disabled:d},a.createElement($.Z,null),"\u6DFB\u52A0\u6210\u5458"),a.createElement(W.Z,{destroyOnClose:!0,width:300,title:"\u6DFB\u52A0\u5C0F\u7EC4\u6210\u5458",visible:s,onOk:S,onCancel:h,confirmLoading:d},a.createElement("div",{className:T.modalContent},a.createElement(U.Z,{value:o,onChange:C,autoFocus:!0,placeholder:"\u65B0\u5C0F\u7EC4\u6210\u5458\u7684\u7528\u6237\u540D",className:T.usernameInput}))))}var j=a.memo(k),t=m(65092),e=m(62371),n=m(10330),i=m(24315),r=m(5939),c=new r.EventEmitter;const u="addMember";var y=(b,p,s)=>new Promise((o,d)=>{var h=f=>{try{C(s.next(f))}catch(A){d(A)}},S=f=>{try{C(s.throw(f))}catch(A){d(A)}},C=f=>f.done?o(f.value):Promise.resolve(f.value).then(h,S);C((s=s.apply(b,p)).next())});class F extends a.PureComponent{constructor(p){super(p);this.setStatePromise=s=>new Promise(o=>{this.setState(s,()=>{o()})}),this.initModal=()=>y(this,null,function*(){this.setStatePromise({username:""})}),this.onClick=()=>y(this,null,function*(){yield this.setStatePromise({showModal:!0}),yield this.initModal()}),this.onModalOkClick=()=>y(this,null,function*(){const{match:{params:{id:s}}}=this.props,{username:o}=this.state;n.username(o)?(yield this.setStatePromise({loading:!0}),(yield e.ZA.addAccount({id:Number.parseInt(s)},{username:o}))!==null&&(i.Z.success({message:`\u6DFB\u52A0\u6210\u5458 ${o} \u6210\u529F`}),yield this.setStatePromise({showModal:!1}),c.emit(u)),yield this.setStatePromise({loading:!1})):i.Z.error({message:`\u7528\u6237 ${o} \u4E0D\u5B58\u5728`})}),this.onModalCancelClick=()=>y(this,null,function*(){yield this.setStatePromise({showModal:!1})}),this.onUsernameChange=s=>{this.setState({username:s.target.value})},this.state={showModal:!1,username:"",loading:!1}}render(){const{showModal:p,username:s,loading:o}=this.state;return a.createElement(j,{loading:o,showModal:p,username:s,onClick:this.onClick,onModalCancelClick:this.onModalCancelClick,onModalOkClick:this.onModalOkClick,onUsernameChange:this.onUsernameChange})}}var D=(0,t.EN)(F),z=m(82694);function G(b){const{profiles:p,loading:s,isAdmin:o,adminUsernames:d,onSetAdminConfirm:h,onRemoveAccountConfirm:S,onRemoveAdminConfirm:C}=b;return a.createElement("div",{className:E.Members},a.createElement("div",{className:E.topArea},a.createElement(w.Z,{type:"info",showIcon:!0,message:"\u53EA\u6709\u5C0F\u7EC4\u6210\u5458\u53EF\u5C06\u4ED3\u5E93\u52A0\u5165\u5C0F\u7EC4"}),a.createElement("div",{className:E.addMemberButtonWrapper},o?a.createElement(D,null):null)),a.createElement(l.ZP,{loading:s,locale:{emptyText:a.createElement(O.Z,{description:"\u6CA1\u6709\u6210\u5458"})},dataSource:[...p],renderItem:f=>{if(f!==null){const{nickname:A,username:P,avatar:J}=f;return a.createElement(M.Z,{size:"small",key:P},a.createElement("div",{className:E.cardContent},a.createElement(x.Z,{className:E.titleWrapper,to:I.Function.generatePersonalCenterRoute({username:P})},a.createElement("div",{className:E.avatarWrapper},a.createElement(z.Z,{avatar:J})),a.createElement("div",{className:E.name},A,"(",P,")"),a.createElement("div",{className:E.isAdminTagWrapper},d.includes(P)?a.createElement(Z.Z,{color:"blue",className:E.isAdminTag},"\u7BA1\u7406\u5458"):null)),o?a.createElement("div",{className:E.buttonWrapper},a.createElement(B.Z,{size:-1},d.includes(P)?a.createElement(v.Z,{title:`\u786E\u8BA4\u64A4\u9500\u6210\u5458 ${P} \u7684\u7BA1\u7406\u5458\u6743\u9650\uFF1F`,onConfirm:C(P),disabled:s},a.createElement(N.Z,{loading:s,disabled:s},"\u64A4\u9500\u7BA1\u7406\u5458")):a.createElement(v.Z,{title:`\u786E\u8BA4\u8BBE\u7F6E\u6210\u5458 ${P} \u4E3A\u7BA1\u7406\u5458\uFF1F`,onConfirm:h(P),disabled:s},a.createElement(N.Z,{type:"primary",loading:s,disabled:s},"\u8BBE\u4E3A\u7BA1\u7406\u5458")),a.createElement(v.Z,{title:`\u786E\u8BA4\u79FB\u9664\u6210\u5458 ${P}\uFF1F`,onConfirm:S(P),disabled:s},a.createElement(N.Z,{type:"primary",danger:!0,loading:s,disabled:s},"\u79FB\u9664")))):null))}else return null}}))}var H=a.memo(G),g=(b,p,s)=>new Promise((o,d)=>{var h=f=>{try{C(s.next(f))}catch(A){d(A)}},S=f=>{try{C(s.throw(f))}catch(A){d(A)}},C=f=>f.done?o(f.value):Promise.resolve(f.value).then(h,S);C((s=s.apply(b,p)).next())});class K extends a.PureComponent{constructor(p){super(p);this.setStatePromise=s=>new Promise(o=>{this.setState(s,()=>{o()})}),this.onAddMemberListener=()=>g(this,null,function*(){return yield this.componentDidMount()}),this.removeAccount=s=>g(this,null,function*(){const{accounts:o,profiles:d,admins:h}=this.state,S=o.filter(({username:A})=>A!==s),C=d.filter(A=>A!==null&&A.username!==s),f=h.filter(({username:A})=>A!==s);yield this.setStatePromise({accounts:S,profiles:C,admins:f})}),this.addAdmin=s=>g(this,null,function*(){const{accounts:o,admins:d}=this.state,h=Array.from(d);for(const S of o)if(S.username===s){h.push(S);break}yield this.setStatePromise({admins:h})}),this.removeAdmin=s=>g(this,null,function*(){const{admins:o}=this.state,d=o.filter(({username:h})=>h!==s);yield this.setStatePromise({admins:d})}),this.loadIsAdmin=()=>g(this,null,function*(){const{match:{params:{id:s}}}=this.props,o=yield e.ZA.isAdmin({id:Number.parseInt(s)});if(o!==null){const{isAdmin:d}=o;yield this.setStatePromise({isAdmin:d})}}),this.loadAccounts=()=>g(this,null,function*(){const{match:{params:{id:s}}}=this.props,o=yield e.ZA.accounts({id:Number.parseInt(s)});o!==null&&(yield this.setStatePromise({accounts:o}))}),this.loadAdmins=()=>g(this,null,function*(){const{match:{params:{id:s}}}=this.props,o=yield e.ZA.admins({id:Number.parseInt(s)});o!==null&&(yield this.setStatePromise({admins:o}))}),this.loadProfiles=()=>g(this,null,function*(){const{accounts:s}=this.state,o=yield Promise.all(s.map(({username:d})=>e.NZ.get({username:d})));yield this.setStatePromise({profiles:o})}),this.onRemoveAccountConfirm=s=>{const{match:{params:{id:o}}}=this.props;return()=>g(this,null,function*(){yield this.setStatePromise({loading:!0}),(yield e.ZA.removeAccounts({id:Number.parseInt(o)},[s]))!==null&&(i.Z.success({message:"\u79FB\u9664\u6210\u5458\u6210\u529F"}),yield this.removeAccount(s)),yield this.setStatePromise({loading:!1})})},this.onSetAdminConfirm=s=>{const{match:{params:{id:o}}}=this.props;return()=>g(this,null,function*(){yield this.setStatePromise({loading:!0}),(yield e.ZA.addAdmin({id:Number.parseInt(o)},{username:s}))!==null&&(i.Z.success({message:`\u6210\u529F\u8BBE\u7F6E ${s} \u4E3A\u7BA1\u7406\u5458`}),yield this.addAdmin(s)),yield this.setStatePromise({loading:!1})})},this.onRemoveAdminConfirm=s=>{const{match:{params:{id:o}}}=this.props;return()=>g(this,null,function*(){yield this.setStatePromise({loading:!0}),(yield e.ZA.removeAdmins({id:Number.parseInt(o)},[s]))!==null&&(i.Z.success({message:`\u6210\u529F\u64A4\u9500 ${s} \u7684\u7BA1\u7406\u5458\u8EAB\u4EFD`}),yield this.removeAdmin(s)),yield this.setStatePromise({loading:!1})})},this.state={accounts:[],admins:[],profiles:[],loading:!0,isAdmin:!1},c.on(u,this.onAddMemberListener)}componentDidMount(){return g(this,null,function*(){yield this.setStatePromise({loading:!0}),yield Promise.all([this.loadAccounts(),this.loadAdmins(),this.loadIsAdmin()]),yield this.loadProfiles(),yield this.setStatePromise({loading:!1})})}componentDidUpdate(p,s,o){return g(this,null,function*(){const{match:{params:{id:d}}}=this.props,{match:{params:{id:h}}}=p;d!==h&&(yield this.componentDidMount())})}componentWillUnmount(){c.removeListener(u,this.onAddMemberListener)}render(){const{profiles:p,loading:s,isAdmin:o,admins:d}=this.state;return a.createElement(H,{profiles:p,loading:s,isAdmin:o,adminUsernames:d.map(({username:h})=>h),onRemoveAccountConfirm:this.onRemoveAccountConfirm,onSetAdminConfirm:this.onSetAdminConfirm,onRemoveAdminConfirm:this.onRemoveAdminConfirm})}}var V=(0,t.EN)(K)},10330:function(R,L,m){m.r(L),m.d(L,{hash:function(){return Z},password:function(){return M},username:function(){return O},verificationCode:function(){return B}});const a=/^\w{1,20}$/,E=/^\S{6,}$/,w=/^[A-z0-9]{64}$/,l=/^\d{6}$/,O=v=>typeof v!="string"?!1:a.test(v),M=v=>typeof v!="string"?!1:E.test(v),Z=v=>typeof v!="string"?!1:w.test(v),B=v=>typeof v!="string"?!1:l.test(v)},5939:function(R){var L=typeof Reflect=="object"?Reflect:null,m=L&&typeof L.apply=="function"?L.apply:function(e,n,i){return Function.prototype.apply.call(e,n,i)},a;L&&typeof L.ownKeys=="function"?a=L.ownKeys:Object.getOwnPropertySymbols?a=function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:a=function(e){return Object.getOwnPropertyNames(e)};function E(t){console&&console.warn&&console.warn(t)}var w=Number.isNaN||function(e){return e!==e};function l(){l.init.call(this)}R.exports=l,R.exports.once=T,l.EventEmitter=l,l.prototype._events=void 0,l.prototype._eventsCount=0,l.prototype._maxListeners=void 0;var O=10;function M(t){if(typeof t!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t)}Object.defineProperty(l,"defaultMaxListeners",{enumerable:!0,get:function(){return O},set:function(t){if(typeof t!="number"||t<0||w(t))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".");O=t}}),l.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},l.prototype.setMaxListeners=function(e){if(typeof e!="number"||e<0||w(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this};function Z(t){return t._maxListeners===void 0?l.defaultMaxListeners:t._maxListeners}l.prototype.getMaxListeners=function(){return Z(this)},l.prototype.emit=function(e){for(var n=[],i=1;i<arguments.length;i++)n.push(arguments[i]);var r=e==="error",c=this._events;if(c!==void 0)r=r&&c.error===void 0;else if(!r)return!1;if(r){var u;if(n.length>0&&(u=n[0]),u instanceof Error)throw u;var y=new Error("Unhandled error."+(u?" ("+u.message+")":""));throw y.context=u,y}var F=c[e];if(F===void 0)return!1;if(typeof F=="function")m(F,this,n);else for(var D=F.length,z=W(F,D),i=0;i<D;++i)m(z[i],this,n);return!0};function B(t,e,n,i){var r,c,u;if(M(n),c=t._events,c===void 0?(c=t._events=Object.create(null),t._eventsCount=0):(c.newListener!==void 0&&(t.emit("newListener",e,n.listener?n.listener:n),c=t._events),u=c[e]),u===void 0)u=c[e]=n,++t._eventsCount;else if(typeof u=="function"?u=c[e]=i?[n,u]:[u,n]:i?u.unshift(n):u.push(n),r=Z(t),r>0&&u.length>r&&!u.warned){u.warned=!0;var y=new Error("Possible EventEmitter memory leak detected. "+u.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");y.name="MaxListenersExceededWarning",y.emitter=t,y.type=e,y.count=u.length,E(y)}return t}l.prototype.addListener=function(e,n){return B(this,e,n,!1)},l.prototype.on=l.prototype.addListener,l.prototype.prependListener=function(e,n){return B(this,e,n,!0)};function v(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function N(t,e,n){var i={fired:!1,wrapFn:void 0,target:t,type:e,listener:n},r=v.bind(i);return r.listener=n,i.wrapFn=r,r}l.prototype.once=function(e,n){return M(n),this.on(e,N(this,e,n)),this},l.prototype.prependOnceListener=function(e,n){return M(n),this.prependListener(e,N(this,e,n)),this},l.prototype.removeListener=function(e,n){var i,r,c,u,y;if(M(n),r=this._events,r===void 0)return this;if(i=r[e],i===void 0)return this;if(i===n||i.listener===n)--this._eventsCount===0?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,i.listener||n));else if(typeof i!="function"){for(c=-1,u=i.length-1;u>=0;u--)if(i[u]===n||i[u].listener===n){y=i[u].listener,c=u;break}if(c<0)return this;c===0?i.shift():U(i,c),i.length===1&&(r[e]=i[0]),r.removeListener!==void 0&&this.emit("removeListener",e,y||n)}return this},l.prototype.off=l.prototype.removeListener,l.prototype.removeAllListeners=function(e){var n,i,r;if(i=this._events,i===void 0)return this;if(i.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):i[e]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete i[e]),this;if(arguments.length===0){var c=Object.keys(i),u;for(r=0;r<c.length;++r)u=c[r],u!=="removeListener"&&this.removeAllListeners(u);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(n=i[e],typeof n=="function")this.removeListener(e,n);else if(n!==void 0)for(r=n.length-1;r>=0;r--)this.removeListener(e,n[r]);return this};function I(t,e,n){var i=t._events;if(i===void 0)return[];var r=i[e];return r===void 0?[]:typeof r=="function"?n?[r.listener||r]:[r]:n?$(r):W(r,r.length)}l.prototype.listeners=function(e){return I(this,e,!0)},l.prototype.rawListeners=function(e){return I(this,e,!1)},l.listenerCount=function(t,e){return typeof t.listenerCount=="function"?t.listenerCount(e):x.call(t,e)},l.prototype.listenerCount=x;function x(t){var e=this._events;if(e!==void 0){var n=e[t];if(typeof n=="function")return 1;if(n!==void 0)return n.length}return 0}l.prototype.eventNames=function(){return this._eventsCount>0?a(this._events):[]};function W(t,e){for(var n=new Array(e),i=0;i<e;++i)n[i]=t[i];return n}function U(t,e){for(;e+1<t.length;e++)t[e]=t[e+1];t.pop()}function $(t){for(var e=new Array(t.length),n=0;n<e.length;++n)e[n]=t[n].listener||t[n];return e}function T(t,e){return new Promise(function(n,i){function r(u){t.removeListener(e,c),i(u)}function c(){typeof t.removeListener=="function"&&t.removeListener("error",r),n([].slice.call(arguments))}j(t,e,c,{once:!0}),e!=="error"&&k(t,r,{once:!0})})}function k(t,e,n){typeof t.on=="function"&&j(t,"error",e,n)}function j(t,e,n,i){if(typeof t.on=="function")i.once?t.once(e,n):t.on(e,n);else if(typeof t.addEventListener=="function")t.addEventListener(e,function r(c){i.once&&t.removeEventListener(e,r),n(c)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof t)}}}]);

//# sourceMappingURL=3554.2898ece0.chunk.js.map