(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[18],{1120:function(e,t,a){(function(e){function a(e,t){for(var a=0,n=e.length-1;n>=0;n--){var r=e[n];"."===r?e.splice(n,1):".."===r?(e.splice(n,1),a++):a&&(e.splice(n,1),a--)}if(t)for(;a--;a)e.unshift("..");return e}function n(e,t){if(e.filter)return e.filter(t);for(var a=[],n=0;n<e.length;n++)t(e[n],n,e)&&a.push(e[n]);return a}t.resolve=function(){for(var t="",r=!1,s=arguments.length-1;s>=-1&&!r;s--){var i=s>=0?arguments[s]:e.cwd();if("string"!==typeof i)throw new TypeError("Arguments to path.resolve must be strings");i&&(t=i+"/"+t,r="/"===i.charAt(0))}return(r?"/":"")+(t=a(n(t.split("/"),(function(e){return!!e})),!r).join("/"))||"."},t.normalize=function(e){var s=t.isAbsolute(e),i="/"===r(e,-1);return(e=a(n(e.split("/"),(function(e){return!!e})),!s).join("/"))||s||(e="."),e&&i&&(e+="/"),(s?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(n(e,(function(e,t){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,a){function n(e){for(var t=0;t<e.length&&""===e[t];t++);for(var a=e.length-1;a>=0&&""===e[a];a--);return t>a?[]:e.slice(t,a-t+1)}e=t.resolve(e).substr(1),a=t.resolve(a).substr(1);for(var r=n(e.split("/")),s=n(a.split("/")),i=Math.min(r.length,s.length),o=i,c=0;c<i;c++)if(r[c]!==s[c]){o=c;break}var m=[];for(c=o;c<r.length;c++)m.push("..");return(m=m.concat(s.slice(o))).join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!==typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),a=47===t,n=-1,r=!0,s=e.length-1;s>=1;--s)if(47===(t=e.charCodeAt(s))){if(!r){n=s;break}}else r=!1;return-1===n?a?"/":".":a&&1===n?"/":e.slice(0,n)},t.basename=function(e,t){var a=function(e){"string"!==typeof e&&(e+="");var t,a=0,n=-1,r=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!r){a=t+1;break}}else-1===n&&(r=!1,n=t+1);return-1===n?"":e.slice(a,n)}(e);return t&&a.substr(-1*t.length)===t&&(a=a.substr(0,a.length-t.length)),a},t.extname=function(e){"string"!==typeof e&&(e+="");for(var t=-1,a=0,n=-1,r=!0,s=0,i=e.length-1;i>=0;--i){var o=e.charCodeAt(i);if(47!==o)-1===n&&(r=!1,n=i+1),46===o?-1===t?t=i:1!==s&&(s=1):-1!==t&&(s=-1);else if(!r){a=i+1;break}}return-1===t||-1===n||0===s||1===s&&t===n-1&&t===a+1?"":e.slice(t,n)};var r="b"==="ab".substr(-1)?function(e,t,a){return e.substr(t,a)}:function(e,t,a){return t<0&&(t=e.length+t),e.substr(t,a)}}).call(this,a(96))},1144:function(e,t){e.exports=function(e){if("string"!==typeof e)return!1;var t=e.match(a);if(!t)return!1;var s=t[1];if(!s)return!1;if(n.test(s)||r.test(s))return!0;return!1};var a=/^(?:\w+:)?\/\/(\S+)$/,n=/^localhost[\:?\d]*(?:[^\:?\d]\S*)?$/,r=/^[^\s\.]+\.\S{2,}$/},1145:function(e,t,a){e.exports={CommitInfoBar:"Style_CommitInfoBar__AogMa",left:"Style_left__3aqnY",right:"Style_right__XNYqn",avatar:"Style_avatar__2CYzj",name:"Style_name__3WHXI"}},1154:function(e,t,a){"use strict";a(341);var n=a(155),r=a(0),s=a.n(r),i=a(1145),o=a.n(i),c=a(13),m=a(131),l=a(36),u=a(95);var h=Object(m.f)(s.a.memo((function(e){const{lastCommit:{committerName:t,commitHash:a,message:r,timestamp:i},match:{params:{username:m,repository:h}}}=e;return s.a.createElement("div",{className:o.a.CommitInfoBar},s.a.createElement("div",{className:o.a.left},s.a.createElement(c.b,{className:o.a.name,to:l.Function.generatePersonalCenterRoute({username:t})},t),s.a.createElement("div",{className:o.a.message},r)),s.a.createElement("div",{className:o.a.right},s.a.createElement("div",{className:o.a.time},u.b.parseTimestampToDifference(i)),s.a.createElement(n.a,{title:a},s.a.createElement("div",{className:o.a.commitHash},"\u6700\u540e\u63d0\u4ea4\uff1a",s.a.createElement(c.b,{to:l.Function.generateRepositoryCommitRoute({username:m,repository:h,commitHash:a})},a.slice(0,7))))))})));a.d(t,"a",(function(){return h}))},1155:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(131),i=a(36),o=a(343),c=a(1144),m=a.n(c),l=a(18),u=a(1120),h=a.n(u),p=a(249);class f extends n.PureComponent{constructor(e){super(e),this.objectURLs=[],this.loadMainBranchName=async()=>new Promise(async e=>{const{match:{params:{username:t,repository:a}}}=this.props,n=await o.a.branches({username:t,name:a});if(null!==n){const{branches:t}=n;for(const{name:a,isDefault:n}of t)if(n){this.setState({mainBranchName:a},()=>e());break}}}),this.processHTML=async e=>{const t=document.implementation.createHTMLDocument().createElement("div");t.innerHTML=e;const a=t.getElementsByTagName("a"),n=t.getElementsByTagName("img"),r=[];for(const s of a){const e=s.getAttribute("href");null!==e&&r.push((async()=>{s.setAttribute("href",await this.getCompleteLink(e))})())}for(const s of n){const e=s.getAttribute("src");null!==e&&r.push((async()=>{const t=await this.getImageURL(e);this.objectURLs.push(t),s.setAttribute("src",t)})())}return await Promise.all(r),t.innerHTML},this.getCompleteLink=async e=>{if(0===e.length||m()(e)||h.a.isAbsolute(e)||"#"===e.charAt(0)||"?"===e.charAt(0))return e;{const{match:{params:{username:t,repository:a,objectType:n,branch:r,path:s}}}=this.props,{mainBranchName:c}=this.state,m=s?n===l.b.BLOB?h.a.join(h.a.dirname(s),e):h.a.join(s,e):h.a.join("",e),u=await o.a.fileInfo({username:t},{name:a},m,r||c);if(null!==u){const{exists:e,type:n}=u;return e&&n!==l.b.BLOB?i.Function.generateRepositoryCodeRoute({username:t,repository:a,branch:r||c,path:m,objectType:l.b.TREE}):i.Function.generateRepositoryCodeRoute({username:t,repository:a,branch:r||c,path:m,objectType:l.b.BLOB})}return i.Function.generateRepositoryCodeRoute({username:t,repository:a,branch:r||c,path:m,objectType:l.b.BLOB})}},this.getImageURL=async e=>{if(m()(e)||h.a.isAbsolute(e))return e;{const{match:{params:{username:t,repository:a,objectType:n,branch:r,path:s}}}=this.props,{mainBranchName:i}=this.state,c=s?n===l.b.BLOB?h.a.join(h.a.dirname(s),e):h.a.join(s,e):h.a.join("",e),m=await o.a.rawFile({username:t},{name:a},c,r||i);return null!==m?URL.createObjectURL(m):e}},this.state={mainBranchName:"",loading:!1}}async componentDidMount(){const{match:{params:{branch:e}}}=this.props;this.setState({loading:!0}),"string"!==typeof e&&await this.loadMainBranchName(),this.setState({loading:!1})}async componentDidUpdate(e,t,a){const{markdown:n}=this.props,{markdown:r}=e;n!==r&&await this.componentDidMount()}componentWillUnmount(){this.objectURLs.forEach(e=>URL.revokeObjectURL(e))}render(){const{loading:e}=this.state,{markdown:t}=this.props;return r.a.createElement(p.a,{markdown:t,processHTML:this.processHTML,loading:e})}}var d=Object(s.f)(f);a.d(t,"a",(function(){return d}))},1242:function(e,t,a){e.exports={FileReader:"Style_FileReader__3UwbJ",commitInfoBar:"Style_commitInfoBar__Q8via",contentWrapper:"Style_contentWrapper__WXjet",fileInfoBar:"Style_fileInfoBar__2tYVI",fileName:"Style_fileName__CCvcF",readerWrapper:"Style_readerWrapper__1-Blo",content:"Style_content___R5vO"}},1243:function(e,t,a){e.exports={CodeReader:"Style_CodeReader__yNPpi",line:"Style_line__2xQ8V",lineNumber:"Style_lineNumber__nX9YT",code:"Style_code__19ilK"}},1244:function(e,t,a){e.exports={MarkdownReader:"Style_MarkdownReader__2lNN5"}},1257:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=(a(140),a(74)),i=(a(93),a(25)),o=a(1242),c=a.n(o),m=a(1154),l=a(36),u=a(13),h=a(131),p=(a(342),a(156));var f=r.a.memo((function(){return r.a.createElement(p.a,{type:"warning",showIcon:!0,message:"\u4e8c\u8fdb\u5236\u6587\u4ef6\u65e0\u6cd5\u663e\u793a",description:"\u4f60\u53ef\u4ee5\u76f4\u63a5\u4e0b\u8f7d\u67e5\u770b\u539f\u6587\u4ef6"})}));var d=r.a.memo((function(){return r.a.createElement(p.a,{type:"warning",showIcon:!0,message:"\u6587\u4ef6\u8fc7\u5927\uff0c\u4e0d\u80fd\u76f4\u63a5\u67e5\u770b",description:"\u4f60\u53ef\u4ee5\u76f4\u63a5\u4e0b\u8f7d\u67e5\u770b\u539f\u6587\u4ef6"})})),y=a(1120),g=a(1243),b=a.n(g),v=a(95);var _=r.a.memo((function(e){var t=e.code,a=v.a.getHighlightedCodeLines(t);return r.a.createElement("table",{className:"".concat(b.a.CodeReader," hljs")},r.a.createElement("tbody",null,a.map((function(e,t){return r.a.createElement("tr",{key:t,className:b.a.line},r.a.createElement("td",null,r.a.createElement("div",{className:b.a.lineNumber},t+1)),r.a.createElement("td",null,r.a.createElement("pre",{className:b.a.code},r.a.createElement("code",{dangerouslySetInnerHTML:{__html:e}}))))}))))})),w=a(1244),C=a.n(w),E=a(1155);var N=r.a.memo((function(e){const{markdown:t}=e;return r.a.createElement("div",{className:C.a.MarkdownReader},r.a.createElement(E.a,{markdown:t}))}));var B=Object(h.f)(r.a.memo((function(e){const t=[".json"],a=[".md",".markdown",".mdwn"],{isBinary:n,isOversize:o,fileName:h,lastCommit:p,loading:g,onRawFileButtonClick:b,fileContent:v,match:{params:{username:w,repository:C,branch:E,path:B}}}=e,R=Object(y.extname)(h).toLowerCase();return r.a.createElement("div",{className:c.a.FileReader},r.a.createElement(s.a,{spinning:g},r.a.createElement("div",{className:c.a.commitInfoBar},r.a.createElement(m.a,{lastCommit:p})),r.a.createElement("div",{className:c.a.contentWrapper},r.a.createElement("div",{className:c.a.fileInfoBar},r.a.createElement("div",{className:c.a.fileName},h),r.a.createElement(i.a.Group,{className:c.a.buttonWrapper},r.a.createElement(i.a,null,r.a.createElement(u.b,{to:l.Function.generateRepositoryCommitsRoute({username:w,repository:C,branch:E,path:B})},"\u5386\u53f2")),r.a.createElement(i.a,{onClick:b},"\u4e0b\u8f7d"))),r.a.createElement("div",{className:c.a.readerWrapper},n?r.a.createElement(f,null):o?r.a.createElement(d,null):t.includes(R)?r.a.createElement(_,{code:v}):a.includes(R)?r.a.createElement(N,{markdown:v}):r.a.createElement(_,{code:v})))))}))),R=a(113),j=a(43);const{PAGE_ID_TO_ROUTE:L,PAGE_ID:S}=l.CONFIG;class k extends n.PureComponent{constructor(e){super(e),this.loadLastCommit=async()=>new Promise(async e=>{const{match:{params:{username:t,repository:a,path:n,branch:r}}}=this.props,s=await j.h.lastCommit({username:t},{name:a},r,n);null!==s&&this.setState({lastCommit:s},()=>e())}),this.loadFileInfo=async()=>new Promise(async e=>{const{lastCommit:{commitHash:t}}=this.state,{match:{params:{username:a,repository:n,path:r}},history:s}=this.props,i=await j.h.fileInfo({username:a},{name:n},r,t);if(null!==i){const{exists:t,size:a,isBinary:n}=i;t?!n&&a>1048576?this.setState({isOversize:!0,isBinary:n},()=>e()):this.setState({isOversize:!1,isBinary:n},()=>e()):s.replace(L[S.NOT_FOUND])}}),this.loadFileContent=async()=>{const{match:{params:{username:e,repository:t,path:a}}}=this.props,{lastCommit:{commitHash:n}}=this.state,r=await j.h.rawFile({username:e},{name:t},a,n);null!==r&&this.setState({fileContent:await v.c.transformBlobToString(r)})},this.onRawFileButtonClick=async()=>{const{match:{params:{username:e,repository:t,path:a}}}=this.props,{lastCommit:{commitHash:n}}=this.state,r=await j.h.rawFile({username:e},{name:t},a,n);null!==r&&this.startDownload(r)},this.startDownload=e=>{const{match:{params:{path:t}}}=this.props,a=URL.createObjectURL(e);v.c.startDownload(a,Object(y.basename)(t)),URL.revokeObjectURL(a)},this.getFileNameFromPath=e=>{const t=e.split("/");return t[t.length-1]},this.state={isBinary:!1,isOversize:!1,lastCommit:new R.b("","","",0,"",""),loading:!0,fileContent:""}}async componentDidMount(){this.setState({loading:!0}),await this.loadLastCommit(),await this.loadFileInfo();const{isBinary:e,isOversize:t}=this.state;e||t||await this.loadFileContent(),this.setState({loading:!1})}async componentDidUpdate(e,t,a){const{location:{pathname:n}}=this.props,{location:{pathname:r}}=e;n!==r&&await this.componentDidMount()}render(){const{match:{params:{path:e}}}=this.props,{isBinary:t,isOversize:a,lastCommit:n,loading:s,fileContent:i}=this.state,o=this.getFileNameFromPath(e);return r.a.createElement(B,{fileContent:i,isBinary:t,isOversize:a,lastCommit:n,fileName:o,loading:s,onRawFileButtonClick:this.onRawFileButtonClick})}}var O=Object(h.f)(k);a.d(t,"default",(function(){return O}))}}]);
//# sourceMappingURL=18.691fb8f0.chunk.js.map