(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[22],{1145:function(e,t,a){(function(e){function a(e,t){for(var a=0,r=e.length-1;r>=0;r--){var n=e[r];"."===n?e.splice(r,1):".."===n?(e.splice(r,1),a++):a&&(e.splice(r,1),a--)}if(t)for(;a--;a)e.unshift("..");return e}function r(e,t){if(e.filter)return e.filter(t);for(var a=[],r=0;r<e.length;r++)t(e[r],r,e)&&a.push(e[r]);return a}t.resolve=function(){for(var t="",n=!1,s=arguments.length-1;s>=-1&&!n;s--){var i=s>=0?arguments[s]:e.cwd();if("string"!==typeof i)throw new TypeError("Arguments to path.resolve must be strings");i&&(t=i+"/"+t,n="/"===i.charAt(0))}return(n?"/":"")+(t=a(r(t.split("/"),(function(e){return!!e})),!n).join("/"))||"."},t.normalize=function(e){var s=t.isAbsolute(e),i="/"===n(e,-1);return(e=a(r(e.split("/"),(function(e){return!!e})),!s).join("/"))||s||(e="."),e&&i&&(e+="/"),(s?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(r(e,(function(e,t){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,a){function r(e){for(var t=0;t<e.length&&""===e[t];t++);for(var a=e.length-1;a>=0&&""===e[a];a--);return t>a?[]:e.slice(t,a-t+1)}e=t.resolve(e).substr(1),a=t.resolve(a).substr(1);for(var n=r(e.split("/")),s=r(a.split("/")),i=Math.min(n.length,s.length),o=i,c=0;c<i;c++)if(n[c]!==s[c]){o=c;break}var m=[];for(c=o;c<n.length;c++)m.push("..");return(m=m.concat(s.slice(o))).join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!==typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),a=47===t,r=-1,n=!0,s=e.length-1;s>=1;--s)if(47===(t=e.charCodeAt(s))){if(!n){r=s;break}}else n=!1;return-1===r?a?"/":".":a&&1===r?"/":e.slice(0,r)},t.basename=function(e,t){var a=function(e){"string"!==typeof e&&(e+="");var t,a=0,r=-1,n=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!n){a=t+1;break}}else-1===r&&(n=!1,r=t+1);return-1===r?"":e.slice(a,r)}(e);return t&&a.substr(-1*t.length)===t&&(a=a.substr(0,a.length-t.length)),a},t.extname=function(e){"string"!==typeof e&&(e+="");for(var t=-1,a=0,r=-1,n=!0,s=0,i=e.length-1;i>=0;--i){var o=e.charCodeAt(i);if(47!==o)-1===r&&(n=!1,r=i+1),46===o?-1===t?t=i:1!==s&&(s=1):-1!==t&&(s=-1);else if(!n){a=i+1;break}}return-1===t||-1===r||0===s||1===s&&t===r-1&&t===a+1?"":e.slice(t,r)};var n="b"==="ab".substr(-1)?function(e,t,a){return e.substr(t,a)}:function(e,t,a){return t<0&&(t=e.length+t),e.substr(t,a)}}).call(this,a(90))},1170:function(e,t){e.exports=function(e){if("string"!==typeof e)return!1;var t=e.match(a);if(!t)return!1;var s=t[1];if(!s)return!1;if(r.test(s)||n.test(s))return!0;return!1};var a=/^(?:\w+:)?\/\/(\S+)$/,r=/^localhost[\:?\d]*(?:[^\:?\d]\S*)?$/,n=/^[^\s\.]+\.\S{2,}$/},1171:function(e,t,a){e.exports={CommitInfoBar:"Style_CommitInfoBar__AogMa",left:"Style_left__3aqnY",right:"Style_right__XNYqn",avatar:"Style_avatar__2CYzj",name:"Style_name__3WHXI"}},1183:function(e,t,a){"use strict";a(349);var r=a(162),n=a(0),s=a.n(n),i=a(1171),o=a.n(i),c=a(15),m=a(136),u=a(24),l=a(98),p=a(357);var h=Object(m.f)(s.a.memo((function(e){var t=e.lastCommit,a=t.committerName,n=t.commitHash,i=t.message,m=t.timestamp,h=t.committerEmail,f=e.match.params,d=f.username,b=f.repository;return s.a.createElement("div",{className:o.a.CommitInfoBar},s.a.createElement("div",{className:o.a.left},s.a.createElement(p.a,{committerEmail:h,committerName:a}),s.a.createElement("div",{className:o.a.message},i)),s.a.createElement("div",{className:o.a.right},s.a.createElement("div",{className:o.a.time},l.b.parseTimestampToDifference(m)),s.a.createElement(r.a,{title:n},s.a.createElement("div",{className:o.a.commitHash},"\u6700\u540e\u63d0\u4ea4\uff1a",s.a.createElement(c.b,{to:u.Function.generateRepositoryCommitRoute({username:d,repository:b,commitHash:n})},n.slice(0,7))))))})));a.d(t,"a",(function(){return h}))},1184:function(e,t,a){"use strict";var r=a(0),n=a.n(r),s=a(136),i=a(24),o=a(352),c=a(1170),m=a.n(c),u=a(19),l=a(1145),p=a.n(l),h=a(255);class f extends r.PureComponent{constructor(e){super(e),this.objectURLs=[],this.loadMainBranchName=async()=>new Promise(async e=>{const{match:{params:{username:t,repository:a}}}=this.props,r=await o.a.branches({username:t,name:a});if(null!==r){const{branches:t}=r;for(const{name:a,isDefault:r}of t)if(r){this.setState({mainBranchName:a},()=>e());break}}}),this.processHTML=async e=>{const t=document.implementation.createHTMLDocument().createElement("div");t.innerHTML=e;const a=t.getElementsByTagName("a"),r=t.getElementsByTagName("img"),n=[];for(const s of a){const e=s.getAttribute("href");null!==e&&n.push((async()=>{s.setAttribute("href",await this.getCompleteLink(e))})())}for(const s of r){const e=s.getAttribute("src");null!==e&&n.push((async()=>{const t=await this.getImageURL(e);this.objectURLs.push(t),s.setAttribute("src",t)})())}return await Promise.all(n),t.innerHTML},this.getCompleteLink=async e=>{if(0===e.length||m()(e)||p.a.isAbsolute(e)||"#"===e.charAt(0)||"?"===e.charAt(0))return e;{const{match:{params:{username:t,repository:a,objectType:r,branch:n,path:s}}}=this.props,{mainBranchName:c}=this.state,m=s?r===u.b.BLOB?p.a.join(p.a.dirname(s),e):p.a.join(s,e):p.a.join("",e),l=await o.a.fileInfo({username:t},{name:a},m,n||c);if(null!==l){const{exists:e,type:r}=l;return e&&r!==u.b.BLOB?i.Function.generateRepositoryCodeRoute({username:t,repository:a,branch:n||c,path:m,objectType:u.b.TREE}):i.Function.generateRepositoryCodeRoute({username:t,repository:a,branch:n||c,path:m,objectType:u.b.BLOB})}return i.Function.generateRepositoryCodeRoute({username:t,repository:a,branch:n||c,path:m,objectType:u.b.BLOB})}},this.getImageURL=async e=>{if(m()(e)||p.a.isAbsolute(e))return e;{const{match:{params:{username:t,repository:a,objectType:r,branch:n,path:s}}}=this.props,{mainBranchName:i}=this.state,c=s?r===u.b.BLOB?p.a.join(p.a.dirname(s),e):p.a.join(s,e):p.a.join("",e),m=await o.a.rawFile({username:t},{name:a},c,n||i);return null!==m?URL.createObjectURL(m):e}},this.state={mainBranchName:"",loading:!1}}async componentDidMount(){const{match:{params:{branch:e}}}=this.props;this.setState({loading:!0}),"string"!==typeof e&&await this.loadMainBranchName(),this.setState({loading:!1})}async componentDidUpdate(e,t,a){const{markdown:r}=this.props,{markdown:n}=e;r!==n&&await this.componentDidMount()}componentWillUnmount(){this.objectURLs.forEach(e=>URL.revokeObjectURL(e))}render(){const{loading:e}=this.state,{markdown:t}=this.props;return n.a.createElement(h.a,{markdown:t,processHTML:this.processHTML,loading:e})}}var d=Object(s.f)(f);a.d(t,"a",(function(){return d}))},1278:function(e,t,a){e.exports={FileList:"Style_FileList__3rWIg",lastCommitInfoBar:"Style_lastCommitInfoBar__2XW39",readmeWrapper:"Style_readmeWrapper__25GwL"}},1279:function(e,t,a){e.exports={Item:"Style_Item__2qcqg",icon:"Style_icon__1TlO4",fileName:"Style_fileName__zs9qY",message:"Style_message__1rBHL",time:"Style_time__2cJ9G"}},1280:function(e,t,a){e.exports={Readme:"Style_Readme__2e1Tq",title:"Style_title__2mCc5",contentWrapper:"Style_contentWrapper__3fQZA"}},1335:function(e,t,a){"use strict";a.r(t);var r=a(270),n=a(2),s=a.n(n),i=a(5),o=a(64),c=a(65),m=a(67),u=a(66),l=a(68),p=a(0),h=a.n(p),f=(a(1135),a(1134)),d=(a(350),a(104)),b=a(1278),v=a.n(b),g=a(19),y=a(15),x=a(136),w=a(1279),j=a.n(w),k=a(24),E=a(98),_={name:"file-text",theme:"outlined",icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494zM504 618H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM312 490v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8z"}}]}},N=a(12),O=function(e,t){return h.a.createElement(N.a,Object.assign({},e,{ref:t,icon:_}))};O.displayName="FileTextOutlined";var B=h.a.forwardRef(O),L={name:"folder",theme:"outlined",icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 298.4H521L403.7 186.2a8.15 8.15 0 00-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z"}}]}},S=function(e,t){return h.a.createElement(N.a,Object.assign({},e,{ref:t,icon:L}))};S.displayName="FolderOutlined";var R=h.a.forwardRef(S);var M=Object(x.f)(h.a.memo((function(e){const{masterBranchName:t,fileInfo:{type:a,path:r,commit:{message:n,timestamp:s,commitHash:i}},match:{params:{username:o,repository:c,branch:m}}}=e,u=function(e){const t=e.split("/");return t[t.length-1]}(r);return h.a.createElement(f.a.Item,{className:j.a.Item},a===g.b.BLOB?h.a.createElement(B,{className:j.a.icon}):h.a.createElement(R,{className:j.a.icon}),h.a.createElement("div",{className:j.a.fileName},h.a.createElement(y.b,{to:k.Function.generateRepositoryCodeRoute({username:o,repository:c,objectType:a,branch:m||t,path:r})},u)),h.a.createElement(y.b,{className:j.a.message,to:k.Function.generateRepositoryCommitRoute({username:o,repository:c,commitHash:i})},n),h.a.createElement("div",{className:j.a.time},E.b.parseTimestampToDifference(s)))}))),C=(a(129),a(69)),H=a(1280),T=a.n(H),D=a(1184);var A=h.a.memo((function(e){const{readme:t,exists:a,loading:r}=e;return a?h.a.createElement("div",{className:T.a.Readme},h.a.createElement(C.a,{spinning:r},h.a.createElement("div",{className:T.a.title},"README.md"),h.a.createElement("div",{className:T.a.contentWrapper},h.a.createElement(D.a,{markdown:t})))):null})),I=a(352),F=a(1145),P=a(220),U=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).setStatePromise=Object(P.promisify)(a.setState),a.loadRawReadme=Object(i.a)(s.a.mark((function e(){var t,r,n,i,o,c,m,u,l,p,h,f;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.setStatePromise({exists:!1});case 2:t=["README.md","readme.md","readMe.md","ReadMe.md","README.MD","readme.MD","readMe.MD","ReadMe.MD"],r=a.props,n=r.match.params,i=n.username,o=n.repository,c=n.path,m=r.commitHash,u=0,l=t;case 5:if(!(u<l.length)){e.next=26;break}return p=l[u],e.next=9,I.a.fileInfo({username:i},{name:o},Object(F.join)(c||"",p),m);case 9:if(null===(h=e.sent)||!h.exists){e.next=23;break}return e.next=13,I.a.rawFile({username:i},{name:o},Object(F.join)(c||"",p),m);case 13:if(null===(f=e.sent)){e.next=22;break}return e.t0=a,e.next=18,E.c.transformBlobToString(f);case 18:return e.t1=e.sent,e.t2={readme:e.t1,exists:!0},e.next=22,e.t0.setStatePromise.call(e.t0,e.t2);case 22:return e.abrupt("break",26);case 23:u++,e.next=5;break;case 26:case"end":return e.stop()}}),e)}))),a.state={exists:!1,readme:"",loading:!1},a}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.props.commitHash){e.next=8;break}return e.next=4,this.setStatePromise({loading:!0});case 4:return e.next=6,this.loadRawReadme();case 6:return e.next=8,this.setStatePromise({loading:!1});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(i.a)(s.a.mark((function e(t,a,r){var n,i,o,c,m;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.props,i=n.location.pathname,o=n.commitHash,c=t.location.pathname,m=t.commitHash,i===c&&o===m){e.next=5;break}return e.next=5,this.componentDidMount();case 5:case"end":return e.stop()}}),e,this)})));return function(t,a,r){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.readme,a=e.exists,r=e.loading;return h.a.createElement(A,{exists:a,readme:t,loading:r})}}]),t}(p.PureComponent),z=Object(x.f)(U),W=a(1183);const q=h.a.lazy(()=>a.e(43).then(a.bind(null,1366)));var V=h.a.memo((function(e){const{fileList:t,lastCommit:a,loading:r,showPreviousFolderItem:n,masterBranchName:s}=e,{commitHash:i}=a;return h.a.createElement(h.a.Fragment,null,h.a.createElement("div",{className:v.a.FileList},h.a.createElement("div",{className:v.a.lastCommitInfoBar},h.a.createElement(W.a,{lastCommit:a})),h.a.createElement(f.a,{locale:{emptyText:h.a.createElement(d.a,{description:"\u6ca1\u6709\u6587\u4ef6"})},loading:r,className:v.a.fileList},n?h.a.createElement(q,null):null,t.map(e=>h.a.createElement(M,{masterBranchName:s,fileInfo:e,key:e.path})))),h.a.createElement("div",{className:v.a.readmeWrapper},h.a.createElement(z,{commitHash:i})))})),Y=a(38),J=a(147),X=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).loadMasterBranchName=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=Object(i.a)(s.a.mark((function e(t){var r,n,i,o,c,m,u,l,p,h,f,d,b;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.props.match.params,n=r.username,i=r.repository,e.next=3,Y.h.branches({username:n,name:i});case 3:if(null===(o=e.sent)){e.next=35;break}c=o.branches,m="",u=!0,l=!1,p=void 0,e.prev=10,h=c[Symbol.iterator]();case 12:if(u=(f=h.next()).done){e.next=20;break}if(d=f.value,b=d.name,!d.isDefault){e.next=17;break}return m=b,e.abrupt("break",20);case 17:u=!0,e.next=12;break;case 20:e.next=26;break;case 22:e.prev=22,e.t0=e.catch(10),l=!0,p=e.t0;case 26:e.prev=26,e.prev=27,u||null==h.return||h.return();case 29:if(e.prev=29,!l){e.next=32;break}throw p;case 32:return e.finish(29);case 33:return e.finish(26);case 34:a.setState({masterBranchName:m},(function(){return t()}));case 35:case"end":return e.stop()}}),e,null,[[10,22,26,34],[27,,29,33]])})));return function(t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)}))),a.loadDirectory=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=Object(i.a)(s.a.mark((function e(t){var n,i,o,c,m,u,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.props.match.params,i=n.username,o=n.repository,c=n.path,m=n.branch,u=a.state.masterBranchName,e.next=4,Y.h.directory({username:i},{name:o},m||u,void 0===c?"":c+"/");case 4:null!==(l=e.sent)?a.setState({fileList:Object(r.a)(l)},(function(){return t()})):t();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)}))),a.loadLastCommit=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=Object(i.a)(s.a.mark((function e(t){var r,n,i,o,c,m,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.props.match.params,n=r.username,i=r.repository,o=r.branch,c=r.path,m=a.state.masterBranchName,e.next=4,Y.h.lastBranchCommit({username:n},{name:i},o||m,c);case 4:null!==(u=e.sent)?a.setState({lastCommit:u},(function(){return t()})):t();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)}))),a.state={fileList:[],lastCommit:new J.b("","","",0,"",""),loading:!0,masterBranchName:""},a}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,this.loadMasterBranchName();case 3:return e.next=5,this.loadLastCommit();case 5:return e.next=7,this.loadDirectory();case 7:this.setState({loading:!1});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(i.a)(s.a.mark((function e(t,a,r){var n,i,o,c,m,u,l,p,h,f;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.match.params,i=n.username,o=n.repository,c=n.branch,m=n.path,u=this.props.match.params,l=u.username,p=u.repository,h=u.branch,f=u.path,i===l&&o===p){e.next=7;break}return e.next=5,this.componentDidMount();case 5:e.next=19;break;case 7:if(c===h){e.next=14;break}return this.setState({loading:!0}),e.next=11,Promise.all([this.loadDirectory(),this.loadLastCommit()]);case 11:this.setState({loading:!1}),e.next=19;break;case 14:if(m===f){e.next=19;break}return this.setState({loading:!0}),e.next=18,this.loadDirectory();case 18:this.setState({loading:!1});case 19:case"end":return e.stop()}}),e,this)})));return function(t,a,r){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.fileList,a=e.lastCommit,r=e.loading,n=e.masterBranchName,s=this.props.match.params.path;return h.a.createElement(V,{fileList:t,masterBranchName:n,lastCommit:a,loading:r,showPreviousFolderItem:void 0!==s})}}]),t}(p.Component),$=Object(x.f)(X);a.d(t,"default",(function(){return $}))}}]);
//# sourceMappingURL=22.5a095d5e.chunk.js.map