(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[18],{667:function(e,t,a){(function(e){function a(e,t){for(var a=0,n=e.length-1;n>=0;n--){var r=e[n];"."===r?e.splice(n,1):".."===r?(e.splice(n,1),a++):a&&(e.splice(n,1),a--)}if(t)for(;a--;a)e.unshift("..");return e}function n(e,t){if(e.filter)return e.filter(t);for(var a=[],n=0;n<e.length;n++)t(e[n],n,e)&&a.push(e[n]);return a}t.resolve=function(){for(var t="",r=!1,s=arguments.length-1;s>=-1&&!r;s--){var i=s>=0?arguments[s]:e.cwd();if("string"!==typeof i)throw new TypeError("Arguments to path.resolve must be strings");i&&(t=i+"/"+t,r="/"===i.charAt(0))}return(r?"/":"")+(t=a(n(t.split("/"),(function(e){return!!e})),!r).join("/"))||"."},t.normalize=function(e){var s=t.isAbsolute(e),i="/"===r(e,-1);return(e=a(n(e.split("/"),(function(e){return!!e})),!s).join("/"))||s||(e="."),e&&i&&(e+="/"),(s?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(n(e,(function(e,t){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,a){function n(e){for(var t=0;t<e.length&&""===e[t];t++);for(var a=e.length-1;a>=0&&""===e[a];a--);return t>a?[]:e.slice(t,a-t+1)}e=t.resolve(e).substr(1),a=t.resolve(a).substr(1);for(var r=n(e.split("/")),s=n(a.split("/")),i=Math.min(r.length,s.length),o=i,c=0;c<i;c++)if(r[c]!==s[c]){o=c;break}var m=[];for(c=o;c<r.length;c++)m.push("..");return(m=m.concat(s.slice(o))).join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!==typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),a=47===t,n=-1,r=!0,s=e.length-1;s>=1;--s)if(47===(t=e.charCodeAt(s))){if(!r){n=s;break}}else r=!1;return-1===n?a?"/":".":a&&1===n?"/":e.slice(0,n)},t.basename=function(e,t){var a=function(e){"string"!==typeof e&&(e+="");var t,a=0,n=-1,r=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!r){a=t+1;break}}else-1===n&&(r=!1,n=t+1);return-1===n?"":e.slice(a,n)}(e);return t&&a.substr(-1*t.length)===t&&(a=a.substr(0,a.length-t.length)),a},t.extname=function(e){"string"!==typeof e&&(e+="");for(var t=-1,a=0,n=-1,r=!0,s=0,i=e.length-1;i>=0;--i){var o=e.charCodeAt(i);if(47!==o)-1===n&&(r=!1,n=i+1),46===o?-1===t?t=i:1!==s&&(s=1):-1!==t&&(s=-1);else if(!r){a=i+1;break}}return-1===t||-1===n||0===s||1===s&&t===n-1&&t===a+1?"":e.slice(t,n)};var r="b"==="ab".substr(-1)?function(e,t,a){return e.substr(t,a)}:function(e,t,a){return t<0&&(t=e.length+t),e.substr(t,a)}}).call(this,a(62))},685:function(e,t){e.exports=function(e){if("string"!==typeof e)return!1;var t=e.match(a);if(!t)return!1;var s=t[1];if(!s)return!1;if(n.test(s)||r.test(s))return!0;return!1};var a=/^(?:\w+:)?\/\/(\S+)$/,n=/^localhost[\:?\d]*(?:[^\:?\d]\S*)?$/,r=/^[^\s\.]+\.\S{2,}$/},686:function(e,t,a){e.exports={CommitInfoBar:"Style_CommitInfoBar__AogMa",left:"Style_left__3aqnY",right:"Style_right__XNYqn",avatar:"Style_avatar__2CYzj",name:"Style_name__3WHXI"}},693:function(e,t,a){"use strict";a(221);var n=a(103),r=a(0),s=a.n(r),i=a(686),o=a.n(i),c=a(11),m=a(84),l=a(24),h=a(61);var u=Object(m.f)(s.a.memo((function(e){const{lastCommit:{committerName:t,commitHash:a,message:r,timestamp:i},match:{params:{username:m,repository:u}}}=e;return s.a.createElement("div",{className:o.a.CommitInfoBar},s.a.createElement("div",{className:o.a.left},s.a.createElement(c.b,{className:o.a.name,to:l.Function.generatePersonalCenterRoute({username:t})},t),s.a.createElement("div",{className:o.a.message},r)),s.a.createElement("div",{className:o.a.right},s.a.createElement("div",{className:o.a.time},h.b.parseTimestampToDifference(i)),s.a.createElement(n.a,{title:a},s.a.createElement("div",{className:o.a.commitHash},"\u6700\u540e\u63d0\u4ea4\uff1a",s.a.createElement(c.b,{to:l.Function.generateRepositoryCommitRoute({username:m,repository:u,commitHash:a})},a.slice(0,7))))))})));a.d(t,"a",(function(){return u}))},694:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(84),i=a(24),o=a(222),c=a(685),m=a.n(c),l=a(16),h=a(667),u=a.n(h),p=a(157);class f extends n.PureComponent{constructor(e){super(e),this.objectURLs=[],this.loadMainBranchName=async()=>new Promise(async e=>{const{match:{params:{username:t,repository:a}}}=this.props,n=await o.a.branches({username:t,name:a});if(null!==n){const{branches:t}=n;for(const{name:a,isDefault:n}of t)if(n){this.setState({mainBranchName:a},()=>e());break}}}),this.processHTML=async e=>{const t=document.implementation.createHTMLDocument().createElement("div");t.innerHTML=e;const a=t.getElementsByTagName("a"),n=t.getElementsByTagName("img"),r=[];for(const s of a){const e=s.getAttribute("href");null!==e&&r.push((async()=>{s.setAttribute("href",await this.getCompleteLink(e))})())}for(const s of n){const e=s.getAttribute("src");null!==e&&r.push((async()=>{const t=await this.getImageURL(e);this.objectURLs.push(t),s.setAttribute("src",t)})())}return await Promise.all(r),t.innerHTML},this.getCompleteLink=async e=>{if(0===e.length||m()(e)||u.a.isAbsolute(e)||"#"===e.charAt(0)||"?"===e.charAt(0))return e;{const{match:{params:{username:t,repository:a,objectType:n,branch:r,path:s}}}=this.props,{mainBranchName:c}=this.state,m=s?n===l.b.BLOB?u.a.join(u.a.dirname(s),e):u.a.join(s,e):u.a.join("",e),h=await o.a.fileInfo({username:t},{name:a},m,r||c);if(null!==h){const{exists:e,type:n}=h;return e&&n!==l.b.BLOB?i.Function.generateRepositoryCodeRoute({username:t,repository:a,branch:r||c,path:m,objectType:l.b.TREE}):i.Function.generateRepositoryCodeRoute({username:t,repository:a,branch:r||c,path:m,objectType:l.b.BLOB})}return i.Function.generateRepositoryCodeRoute({username:t,repository:a,branch:r||c,path:m,objectType:l.b.BLOB})}},this.getImageURL=async e=>{if(m()(e)||u.a.isAbsolute(e))return e;{const{match:{params:{username:t,repository:a,objectType:n,branch:r,path:s}}}=this.props,{mainBranchName:i}=this.state,c=s?n===l.b.BLOB?u.a.join(u.a.dirname(s),e):u.a.join(s,e):u.a.join("",e),m=await o.a.rawFile({username:t},{name:a},c,r||i);return null!==m?URL.createObjectURL(m):e}},this.state={mainBranchName:"",loading:!1}}async componentDidMount(){const{match:{params:{branch:e}}}=this.props;this.setState({loading:!0}),"string"!==typeof e&&await this.loadMainBranchName(),this.setState({loading:!1})}async componentDidUpdate(e,t,a){const{markdown:n}=this.props,{markdown:r}=e;n!==r&&await this.componentDidMount()}componentWillUnmount(){this.objectURLs.forEach(e=>URL.revokeObjectURL(e))}render(){const{loading:e}=this.state,{markdown:t}=this.props;return r.a.createElement(p.a,{markdown:t,processHTML:this.processHTML,loading:e})}}var d=Object(s.f)(f);a.d(t,"a",(function(){return d}))},774:function(e,t,a){e.exports={FileList:"Style_FileList__3rWIg",lastCommitInfoBar:"Style_lastCommitInfoBar__2XW39",readmeWrapper:"Style_readmeWrapper__25GwL"}},775:function(e,t,a){e.exports={Item:"Style_Item__2qcqg",icon:"Style_icon__1TlO4",fileName:"Style_fileName__zs9qY",message:"Style_message__1rBHL",time:"Style_time__2cJ9G"}},776:function(e,t,a){e.exports={Readme:"Style_Readme__2e1Tq",title:"Style_title__2mCc5",contentWrapper:"Style_contentWrapper__3fQZA"}},793:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=(a(660),a(659)),i=(a(219),a(66)),o=a(774),c=a.n(o),m=a(16),l=a(11),h=a(84),u=a(775),p=a.n(u),f=a(24),d=a(61),g={name:"file-text",theme:"outlined",icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494zM504 618H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM312 490v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8z"}}]}},y=a(10),b=function(e,t){return r.a.createElement(y.a,Object.assign({},e,{ref:t,icon:g}))};b.displayName="FileTextOutlined";var v=r.a.forwardRef(b),E={name:"folder",theme:"outlined",icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 298.4H521L403.7 186.2a8.15 8.15 0 00-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z"}}]}},w=function(e,t){return r.a.createElement(y.a,Object.assign({},e,{ref:t,icon:E}))};w.displayName="FolderOutlined";var _=r.a.forwardRef(w);var N=Object(h.f)(r.a.memo((function(e){const{masterBranchName:t,fileInfo:{type:a,path:n,commit:{message:i,timestamp:o,commitHash:c}},match:{params:{username:h,repository:u,branch:g}}}=e,y=function(e){const t=e.split("/");return t[t.length-1]}(n);return r.a.createElement(s.a.Item,{className:p.a.Item},a===m.b.BLOB?r.a.createElement(v,{className:p.a.icon}):r.a.createElement(_,{className:p.a.icon}),r.a.createElement("div",{className:p.a.fileName},r.a.createElement(l.b,{to:f.Function.generateRepositoryCodeRoute({username:h,repository:u,objectType:a,branch:g||t,path:n})},y)),r.a.createElement(l.b,{className:p.a.message,to:f.Function.generateRepositoryCommitRoute({username:h,repository:u,commitHash:c})},i),r.a.createElement("div",{className:p.a.time},d.b.parseTimestampToDifference(o)))}))),B=(a(92),a(46)),L=a(776),S=a.n(L),j=a(694);var C=r.a.memo((function(e){const{readme:t,exists:a,loading:n}=e;return a?r.a.createElement("div",{className:S.a.Readme},r.a.createElement(B.a,{spinning:n},r.a.createElement("div",{className:S.a.title},"README.md"),r.a.createElement("div",{className:S.a.contentWrapper},r.a.createElement(j.a,{markdown:t})))):null})),R=a(222),H=a(667);class M extends n.PureComponent{constructor(e){super(e),this.readmeExists=async()=>{const{match:{params:{username:e,repository:t,path:a}},commitHash:n}=this.props,r=await R.a.fileInfo({username:e},{name:t},Object(H.join)(a||"","README.md"),n);return null!==r&&r.exists},this.loadRawReadme=async()=>{const{match:{params:{username:e,repository:t,path:a}},commitHash:n}=this.props,r=await R.a.rawFile({username:e},{name:t},Object(H.join)(a||"","README.md"),n);null!==r&&this.setState({readme:await d.c.transformBlobToString(r),exists:!0})},this.state={exists:!1,readme:"",loading:!0}}async componentDidMount(){const{commitHash:e}=this.props;e&&(this.setState({loading:!0}),await this.readmeExists()?await this.loadRawReadme():this.setState({exists:!1}),this.setState({loading:!1}))}async componentDidUpdate(e,t,a){const{location:{pathname:n},commitHash:r}=this.props,{location:{pathname:s},commitHash:i}=e;n===s&&r===i||await this.componentDidMount()}render(){const{readme:e,exists:t,loading:a}=this.state;return r.a.createElement(C,{exists:t,readme:e,loading:a})}}var T=Object(h.f)(M),x=a(693);const A=r.a.lazy(()=>a.e(39).then(a.bind(null,822)));var D=r.a.memo((function(e){const{fileList:t,lastCommit:a,loading:n,showPreviousFolderItem:o,masterBranchName:m}=e,{commitHash:l}=a;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:c.a.FileList},r.a.createElement("div",{className:c.a.lastCommitInfoBar},r.a.createElement(x.a,{lastCommit:a})),r.a.createElement(s.a,{locale:{emptyText:r.a.createElement(i.a,{description:"\u6ca1\u6709\u6587\u4ef6"})},loading:n,className:c.a.fileList},o?r.a.createElement(A,null):null,t.map(e=>r.a.createElement(N,{masterBranchName:m,fileInfo:e,key:e.path})))),r.a.createElement("div",{className:c.a.readmeWrapper},r.a.createElement(T,{commitHash:l})))})),I=a(28),O=a(73);class k extends n.Component{constructor(e){super(e),this.loadMasterBranchName=async()=>new Promise(async e=>{const{match:{params:{username:t,repository:a}}}=this.props,n=await I.h.branches({username:t,name:a});if(null!==n){const{branches:t}=n;let a="";for(const{name:e,isDefault:n}of t)if(n){a=e;break}this.setState({masterBranchName:a},()=>e())}}),this.loadDirectory=async()=>{const{match:{params:{username:e,repository:t,path:a,branch:n}}}=this.props,{masterBranchName:r}=this.state,s=await I.h.directory({username:e},{name:t},n||r,void 0===a?"":a+"/");null!==s&&this.setState({fileList:[...s]})},this.loadLastCommit=async()=>{const{match:{params:{username:e,repository:t,branch:a,path:n}}}=this.props,{masterBranchName:r}=this.state,s=await I.h.lastCommit({username:e},{name:t},a||r,n);null!==s&&this.setState({lastCommit:s})},this.state={fileList:[],lastCommit:new O.b("","","",0,"",""),loading:!0,masterBranchName:""}}async componentDidMount(){this.setState({loading:!0}),await this.loadMasterBranchName(),await Promise.all([this.loadDirectory(),this.loadLastCommit()]),this.setState({loading:!1})}async componentDidUpdate(e,t,a){const{match:{params:{username:n,repository:r,branch:s,path:i}}}=e,{match:{params:{username:o,repository:c,branch:m,path:l}}}=this.props;n!==o||r!==c?await this.componentDidMount():s!==m?(this.setState({loading:!0}),await Promise.all([this.loadDirectory(),this.loadLastCommit()]),this.setState({loading:!1})):i!==l&&(this.setState({loading:!0}),await this.loadDirectory(),this.setState({loading:!1}))}render(){const{fileList:e,lastCommit:t,loading:a,masterBranchName:n}=this.state,{match:{params:{path:s}}}=this.props;return r.a.createElement(D,{fileList:e,masterBranchName:n,lastCommit:t,loading:a,showPreviousFolderItem:void 0!==s})}}var F=Object(h.f)(k);a.d(t,"default",(function(){return F}))}}]);
//# sourceMappingURL=18.80ab7a41.chunk.js.map