(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[21],{1032:function(e,t,a){(function(e){function a(e,t){for(var a=0,r=e.length-1;r>=0;r--){var n=e[r];"."===n?e.splice(r,1):".."===n?(e.splice(r,1),a++):a&&(e.splice(r,1),a--)}if(t)for(;a--;a)e.unshift("..");return e}function r(e,t){if(e.filter)return e.filter(t);for(var a=[],r=0;r<e.length;r++)t(e[r],r,e)&&a.push(e[r]);return a}t.resolve=function(){for(var t="",n=!1,s=arguments.length-1;s>=-1&&!n;s--){var i=s>=0?arguments[s]:e.cwd();if("string"!==typeof i)throw new TypeError("Arguments to path.resolve must be strings");i&&(t=i+"/"+t,n="/"===i.charAt(0))}return(n?"/":"")+(t=a(r(t.split("/"),(function(e){return!!e})),!n).join("/"))||"."},t.normalize=function(e){var s=t.isAbsolute(e),i="/"===n(e,-1);return(e=a(r(e.split("/"),(function(e){return!!e})),!s).join("/"))||s||(e="."),e&&i&&(e+="/"),(s?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(r(e,(function(e,t){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,a){function r(e){for(var t=0;t<e.length&&""===e[t];t++);for(var a=e.length-1;a>=0&&""===e[a];a--);return t>a?[]:e.slice(t,a-t+1)}e=t.resolve(e).substr(1),a=t.resolve(a).substr(1);for(var n=r(e.split("/")),s=r(a.split("/")),i=Math.min(n.length,s.length),c=i,o=0;o<i;o++)if(n[o]!==s[o]){c=o;break}var u=[];for(o=c;o<n.length;o++)u.push("..");return(u=u.concat(s.slice(c))).join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!==typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),a=47===t,r=-1,n=!0,s=e.length-1;s>=1;--s)if(47===(t=e.charCodeAt(s))){if(!n){r=s;break}}else n=!1;return-1===r?a?"/":".":a&&1===r?"/":e.slice(0,r)},t.basename=function(e,t){var a=function(e){"string"!==typeof e&&(e+="");var t,a=0,r=-1,n=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!n){a=t+1;break}}else-1===r&&(n=!1,r=t+1);return-1===r?"":e.slice(a,r)}(e);return t&&a.substr(-1*t.length)===t&&(a=a.substr(0,a.length-t.length)),a},t.extname=function(e){"string"!==typeof e&&(e+="");for(var t=-1,a=0,r=-1,n=!0,s=0,i=e.length-1;i>=0;--i){var c=e.charCodeAt(i);if(47!==c)-1===r&&(n=!1,r=i+1),46===c?-1===t?t=i:1!==s&&(s=1):-1!==t&&(s=-1);else if(!n){a=i+1;break}}return-1===t||-1===r||0===s||1===s&&t===r-1&&t===a+1?"":e.slice(t,r)};var n="b"==="ab".substr(-1)?function(e,t,a){return e.substr(t,a)}:function(e,t,a){return t<0&&(t=e.length+t),e.substr(t,a)}}).call(this,a(75))},1058:function(e,t){e.exports=function(e){if("string"!==typeof e)return!1;var t=e.match(a);if(!t)return!1;var s=t[1];if(!s)return!1;if(r.test(s)||n.test(s))return!0;return!1};var a=/^(?:\w+:)?\/\/(\S+)$/,r=/^localhost[\:?\d]*(?:[^\:?\d]\S*)?$/,n=/^[^\s\.]+\.\S{2,}$/},1059:function(e,t,a){e.exports={CommitInfoBar:"Style_CommitInfoBar__AogMa",left:"Style_left__3aqnY",right:"Style_right__XNYqn",message:"Style_message__3Jq3M"}},1071:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));a(335);var r=a(149),n=a(0),s=a.n(n),i=a(1059),c=a.n(i),o=a(15),u=a(126),m=a(22),l=a(84),p=a(343);var f=Object(u.f)(s.a.memo((function(e){var t=e.lastCommit,a=t.committerName,n=t.commitHash,i=t.message,u=t.timestamp,f=t.committerEmail,h=e.match.params,b=h.username,d=h.repository;return s.a.createElement("div",{className:c.a.CommitInfoBar},s.a.createElement("div",{className:c.a.left},s.a.createElement(p.a,{committerEmail:f,committerName:a}),s.a.createElement("div",{className:c.a.message},i)),s.a.createElement("div",{className:c.a.right},s.a.createElement("div",{className:c.a.time},l.b.parseTimestampToDifference(u)),s.a.createElement(r.a,{title:n},s.a.createElement("div",{className:c.a.commitHash},"\u6700\u540e\u63d0\u4ea4\uff1a",s.a.createElement(o.b,{to:m.Function.generateRepositoryCommitRoute({username:b,repository:d,commitHash:n})},n.slice(0,7))))))})))},1072:function(e,t,a){"use strict";a.d(t,"a",(function(){return w}));var r=a(1),n=a.n(r),s=a(337),i=a(3),c=a(9),o=a(10),u=a(17),m=a(18),l=a(0),p=a.n(l),f=a(126),h=a(22),b=a(339),d=a(1058),v=a.n(d),g=a(19),y=a(1032),x=a.n(y),k=a(243),j=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(c.a)(this,a),(r=t.call(this,e)).objectURLs=[],r.loadMainBranchName=Object(i.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=Object(i.a)(n.a.mark((function e(t){var a,i,c,o,u,m,l,p,f;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.props.match.params,i=a.username,c=a.repository,e.next=3,b.a.branches({username:i,name:c});case 3:if(null===(o=e.sent)){e.next=24;break}u=o.branches,m=Object(s.a)(u),e.prev=7,m.s();case 9:if((l=m.n()).done){e.next=16;break}if(p=l.value,f=p.name,!p.isDefault){e.next=14;break}return r.setState({mainBranchName:f},(function(){return t()})),e.abrupt("break",16);case 14:e.next=9;break;case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(7),m.e(e.t0);case 21:return e.prev=21,m.f(),e.finish(21);case 24:case"end":return e.stop()}}),e,null,[[7,18,21,24]])})));return function(t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)}))),r.processHTML=function(){var e=Object(i.a)(n.a.mark((function e(t){var a,c,o,u,m,l,p,f,h,b,d;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=document.implementation.createHTMLDocument(),(c=a.createElement("div")).innerHTML=t,o=c.getElementsByTagName("a"),u=c.getElementsByTagName("img"),m=[],l=Object(s.a)(o);try{for(f=function(){var e=p.value,t=e.getAttribute("href");null!==t&&m.push(Object(i.a)(n.a.mark((function a(){return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.t0=e,a.next=3,r.getCompleteLink(t);case 3:a.t1=a.sent,a.t0.setAttribute.call(a.t0,"href",a.t1);case 5:case"end":return a.stop()}}),a)})))())},l.s();!(p=l.n()).done;)f()}catch(v){l.e(v)}finally{l.f()}h=Object(s.a)(u);try{for(d=function(){var e=b.value,t=e.getAttribute("src");null!==t&&m.push(Object(i.a)(n.a.mark((function a(){var s;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,r.getImageURL(t);case 2:s=a.sent,r.objectURLs.push(s),e.setAttribute("src",s);case 5:case"end":return a.stop()}}),a)})))())},h.s();!(b=h.n()).done;)d()}catch(v){h.e(v)}finally{h.f()}return e.next=12,Promise.all(m);case 12:return e.abrupt("return",c.innerHTML);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.getCompleteLink=function(){var e=Object(i.a)(n.a.mark((function e(t){var a,s,i,c,o,u,m,l,p,f,d;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.length&&!v()(t)&&!x.a.isAbsolute(t)&&"#"!==t.charAt(0)&&"?"!==t.charAt(0)){e.next=4;break}return e.abrupt("return",t);case 4:return a=r.props.match.params,s=a.username,i=a.repository,c=a.objectType,o=a.branch,u=a.path,m=r.state.mainBranchName,l=u?c===g.b.BLOB?x.a.join(x.a.dirname(u),t):x.a.join(u,t):x.a.join("",t),e.next=9,b.a.fileInfo({username:s},{name:i},l,o||m);case 9:if(null===(p=e.sent)){e.next=19;break}if(f=p.exists,d=p.type,f&&d!==g.b.BLOB){e.next=16;break}return e.abrupt("return",h.Function.generateRepositoryCodeRoute({username:s,repository:i,branch:o||m,path:l,objectType:g.b.BLOB}));case 16:return e.abrupt("return",h.Function.generateRepositoryCodeRoute({username:s,repository:i,branch:o||m,path:l,objectType:g.b.TREE}));case 17:e.next=20;break;case 19:return e.abrupt("return",h.Function.generateRepositoryCodeRoute({username:s,repository:i,branch:o||m,path:l,objectType:g.b.BLOB}));case 20:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.getImageURL=function(){var e=Object(i.a)(n.a.mark((function e(t){var a,s,i,c,o,u,m,l,p;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!v()(t)&&!x.a.isAbsolute(t)){e.next=4;break}return e.abrupt("return",t);case 4:return a=r.props.match.params,s=a.username,i=a.repository,c=a.objectType,o=a.branch,u=a.path,m=r.state.mainBranchName,l=u?c===g.b.BLOB?x.a.join(x.a.dirname(u),t):x.a.join(u,t):x.a.join("",t),e.next=9,b.a.rawFile({username:s},{name:i},l,o||m);case 9:if(null===(p=e.sent)){e.next=14;break}return e.abrupt("return",URL.createObjectURL(p));case 14:return e.abrupt("return",t);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.state={mainBranchName:"",loading:!1},r}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props.match.params.branch,this.setState({loading:!0}),"string"===typeof t){e.next=5;break}return e.next=5,this.loadMainBranchName();case 5:this.setState({loading:!1});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(i.a)(n.a.mark((function e(t,a,r){var s,i;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=this.props.markdown,i=t.markdown,s===i){e.next=5;break}return e.next=5,this.componentDidMount();case 5:case"end":return e.stop()}}),e,this)})));return function(t,a,r){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.objectURLs.forEach((function(e){return URL.revokeObjectURL(e)}))}},{key:"render",value:function(){var e=this.state.loading,t=this.props.markdown;return p.a.createElement(k.a,{markdown:t,processHTML:this.processHTML,loading:e})}}]),a}(l.PureComponent),w=Object(f.f)(j)},1167:function(e,t,a){e.exports={FileList:"Style_FileList__3rWIg",lastCommitInfoBar:"Style_lastCommitInfoBar__2XW39",readmeWrapper:"Style_readmeWrapper__25GwL"}},1168:function(e,t,a){e.exports={Item:"Style_Item__2qcqg",icon:"Style_icon__1TlO4",fileName:"Style_fileName__zs9qY",message:"Style_message__1rBHL",time:"Style_time__2cJ9G"}},1169:function(e,t,a){e.exports={Readme:"Style_Readme__2e1Tq",title:"Style_title__2mCc5",contentWrapper:"Style_contentWrapper__3fQZA"}},1224:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return G}));var r=a(74),n=a(1),s=a.n(n),i=a(337),c=a(3),o=a(9),u=a(10),m=a(17),l=a(18),p=a(0),f=a.n(p),h=(a(1022),a(1021)),b=(a(336),a(95)),d=a(1167),v=a.n(d),g=a(19),y=a(15),x=a(126),k=a(1168),j=a.n(k),w=a(22),O=a(84),E={name:"file-text",theme:"outlined",icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494zM504 618H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM312 490v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8z"}}]}},N=a(12),_=function(e,t){return p.createElement(N.a,Object.assign({},e,{ref:t,icon:E}))};_.displayName="FileTextOutlined";var B=p.forwardRef(_),L={name:"folder",theme:"outlined",icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 298.4H521L403.7 186.2a8.15 8.15 0 00-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z"}}]}},S=function(e,t){return p.createElement(N.a,Object.assign({},e,{ref:t,icon:L}))};S.displayName="FolderOutlined";var M=p.forwardRef(S);var R=Object(x.f)(f.a.memo((function(e){var t=e.masterBranchName,a=e.fileInfo,r=a.type,n=a.path,s=a.commit,i=s.message,c=s.timestamp,o=s.commitHash,u=e.match.params,m=u.username,l=u.repository,p=u.branch,b=function(e){var t=e.split("/");return t[t.length-1]}(n);return f.a.createElement(h.a.Item,{className:j.a.Item},r===g.b.BLOB?f.a.createElement(B,{className:j.a.icon}):f.a.createElement(M,{className:j.a.icon}),f.a.createElement("div",{className:j.a.fileName},f.a.createElement(y.b,{to:w.Function.generateRepositoryCodeRoute({username:m,repository:l,objectType:r,branch:p||t,path:n})},b)),f.a.createElement(y.b,{className:j.a.message,to:w.Function.generateRepositoryCommitRoute({username:m,repository:l,commitHash:o})},i),f.a.createElement("div",{className:j.a.time},O.b.parseTimestampToDifference(c)))}))),C=(a(108),a(45)),H=a(1169),T=a.n(H),D=a(1072);var A=f.a.memo((function(e){var t=e.readme,a=e.exists,r=e.loading;return a?f.a.createElement("div",{className:T.a.Readme},f.a.createElement(C.a,{spinning:r},f.a.createElement("div",{className:T.a.title},"README.md"),f.a.createElement("div",{className:T.a.contentWrapper},f.a.createElement(D.a,{markdown:t})))):null})),I=a(339),F=a(1032),P=a(94),U=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).setStatePromise=Object(P.promisify)(r.setState),r.loadRawReadme=Object(c.a)(s.a.mark((function e(){var t,a,n,i,c,o,u,m,l,p,f,h;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.setStatePromise({exists:!1});case 2:t=["README.md","readme.md","readMe.md","ReadMe.md","README.MD","readme.MD","readMe.MD","ReadMe.MD"],a=r.props,n=a.match.params,i=n.username,c=n.repository,o=n.path,u=a.commitHash,m=0,l=t;case 5:if(!(m<l.length)){e.next=26;break}return p=l[m],e.next=9,I.a.fileInfo({username:i},{name:c},Object(F.join)(o||"",p),u);case 9:if(null===(f=e.sent)||!f.exists){e.next=23;break}return e.next=13,I.a.rawFile({username:i},{name:c},Object(F.join)(o||"",p),u);case 13:if(null===(h=e.sent)){e.next=22;break}return e.t0=r,e.next=18,O.c.transformBlobToString(h);case 18:return e.t1=e.sent,e.t2={readme:e.t1,exists:!0},e.next=22,e.t0.setStatePromise.call(e.t0,e.t2);case 22:return e.abrupt("break",26);case 23:m++,e.next=5;break;case 26:case"end":return e.stop()}}),e)}))),r.state={exists:!1,readme:"",loading:!1},r}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(c.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.props.commitHash){e.next=8;break}return e.next=4,this.setStatePromise({loading:!0});case 4:return e.next=6,this.loadRawReadme();case 6:return e.next=8,this.setStatePromise({loading:!1});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(c.a)(s.a.mark((function e(t,a,r){var n,i,c,o,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.props,i=n.location.pathname,c=n.commitHash,o=t.location.pathname,u=t.commitHash,i===o&&c===u){e.next=5;break}return e.next=5,this.componentDidMount();case 5:case"end":return e.stop()}}),e,this)})));return function(t,a,r){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.readme,a=e.exists,r=e.loading;return f.a.createElement(A,{exists:a,readme:t,loading:r})}}]),a}(p.PureComponent),z=Object(x.f)(U),W=a(1071),q=f.a.lazy((function(){return a.e(44).then(a.bind(null,1256))}));var V=f.a.memo((function(e){var t=e.fileList,a=e.lastCommit,r=e.loading,n=e.showPreviousFolderItem,s=e.masterBranchName,i=a.commitHash;return f.a.createElement(f.a.Fragment,null,f.a.createElement("div",{className:v.a.FileList},f.a.createElement("div",{className:v.a.lastCommitInfoBar},f.a.createElement(W.a,{lastCommit:a})),f.a.createElement(h.a,{locale:{emptyText:f.a.createElement(b.a,{description:"\u6ca1\u6709\u6587\u4ef6"})},loading:r,className:v.a.fileList},n?f.a.createElement(q,null):null,t.map((function(e){return f.a.createElement(R,{masterBranchName:s,fileInfo:e,key:e.path})})))),f.a.createElement("div",{className:v.a.readmeWrapper},f.a.createElement(z,{commitHash:i})))})),J=a(28),Y=a(134),$=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).loadMasterBranchName=Object(c.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=Object(c.a)(s.a.mark((function e(t){var a,r,c,o,u,m,l,p,f,h;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.props.match.params,r=a.username,c=a.repository,e.next=3,J.h.branches({username:r,name:c});case 3:if(null===(o=e.sent)){e.next=26;break}u=o.branches,m="",l=Object(i.a)(u),e.prev=8,l.s();case 10:if((p=l.n()).done){e.next=17;break}if(f=p.value,h=f.name,!f.isDefault){e.next=15;break}return m=h,e.abrupt("break",17);case 15:e.next=10;break;case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(8),l.e(e.t0);case 22:return e.prev=22,l.f(),e.finish(22);case 25:n.setState({masterBranchName:m},(function(){return t()}));case 26:case"end":return e.stop()}}),e,null,[[8,19,22,25]])})));return function(t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)}))),n.loadDirectory=Object(c.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=Object(c.a)(s.a.mark((function e(t){var a,i,c,o,u,m,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.props.match.params,i=a.username,c=a.repository,o=a.path,u=a.branch,m=n.state.masterBranchName,e.next=4,J.h.directory({username:i},{name:c},u||m,void 0===o?"":o+"/");case 4:null!==(l=e.sent)?n.setState({fileList:Object(r.a)(l)},(function(){return t()})):t();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)}))),n.loadLastCommit=Object(c.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=Object(c.a)(s.a.mark((function e(t){var a,r,i,c,o,u,m;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.props.match.params,r=a.username,i=a.repository,c=a.branch,o=a.path,u=n.state.masterBranchName,e.next=4,J.h.lastBranchCommit({username:r},{name:i},c||u,o);case 4:null!==(m=e.sent)?n.setState({lastCommit:m},(function(){return t()})):t();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)}))),n.state={fileList:[],lastCommit:new Y.b("","","",0,"",""),loading:!0,masterBranchName:""},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(c.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,this.loadMasterBranchName();case 3:return e.next=5,this.loadLastCommit();case 5:return e.next=7,this.loadDirectory();case 7:this.setState({loading:!1});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(c.a)(s.a.mark((function e(t,a,r){var n,i,c,o,u,m,l,p,f,h;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.match.params,i=n.username,c=n.repository,o=n.branch,u=n.path,m=this.props.match.params,l=m.username,p=m.repository,f=m.branch,h=m.path,i===l&&c===p){e.next=7;break}return e.next=5,this.componentDidMount();case 5:e.next=19;break;case 7:if(o===f){e.next=14;break}return this.setState({loading:!0}),e.next=11,Promise.all([this.loadDirectory(),this.loadLastCommit()]);case 11:this.setState({loading:!1}),e.next=19;break;case 14:if(u===h){e.next=19;break}return this.setState({loading:!0}),e.next=18,this.loadDirectory();case 18:this.setState({loading:!1});case 19:case"end":return e.stop()}}),e,this)})));return function(t,a,r){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.fileList,a=e.lastCommit,r=e.loading,n=e.masterBranchName,s=this.props.match.params.path;return f.a.createElement(V,{fileList:t,masterBranchName:n,lastCommit:a,loading:r,showPreviousFolderItem:void 0!==s})}}]),a}(p.Component),G=Object(x.f)($)}}]);
//# sourceMappingURL=21.4ad563f2.chunk.js.map