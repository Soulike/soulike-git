(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[40],{1166:function(e,a,r){e.exports={BranchMenu:"Style_BranchMenu__2s6dB",branchName:"Style_branchName__YisEW",branchTagWrapper:"Style_branchTagWrapper__Cq2Vq",branchNameInButton:"Style_branchNameInButton__2kCc8"}},1181:function(e,a,r){"use strict";r(1186);var n=r(1192),t=(r(96),r(25)),c=(r(271),r(54)),l=(r(186),r(55)),o=r(0),i=r.n(o),u=r(1166),s=r.n(u),h=r(1107);var m=i.a.memo((function(e){var a=e.branches,r=e.currentBranch,o=e.onBranchClick,u=!1,m=!0,b=!1,p=void 0;try{for(var f,y=a[Symbol.iterator]();!(m=(f=y.next()).done);m=!0){if(f.value.name===r){u=!0;break}}}catch(v){b=!0,p=v}finally{try{m||null==y.return||y.return()}finally{if(b)throw p}}return i.a.createElement(n.a,{trigger:["click"],overlay:i.a.createElement(c.a,{className:s.a.BranchMenu},a.map((function(e){return i.a.createElement(c.a.Item,{key:e.name,onClick:o(e)},i.a.createElement("div",{className:s.a.branchName,style:e.name===r?{fontWeight:"bold"}:{}},e.name),i.a.createElement("div",{className:s.a.branchTagWrapper},e.isDefault?i.a.createElement(l.a,{color:"blue"},"\u9ed8\u8ba4"):null))})))},i.a.createElement(t.a,null,u?"\u5206\u652f\uff1a":"Tree: ",i.a.createElement("div",{className:s.a.branchNameInButton},r),i.a.createElement(h.a,null)))}));r.d(a,"a",(function(){return m}))},1367:function(e,a,r){"use strict";r.r(a);var n=r(64),t=r(65),c=r(67),l=r(66),o=r(68),i=r(0),u=r.n(i),s=r(136),h=r(24),m=r(19),b=r(1181),p=function(e){function a(){var e,r;Object(n.a)(this,a);for(var t=arguments.length,o=new Array(t),i=0;i<t;i++)o[i]=arguments[i];return(r=Object(c.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(o)))).onBranchClick=function(e){return function(){var a=r.props,n=a.history,t=a.match.params,c=t.username,l=t.repository,o=t.objectType,i=t.path;return n.replace(h.Function.generateRepositoryCodeRoute({username:c,repository:l,objectType:o||m.b.TREE,branch:e.name,path:i}))}},r}return Object(o.a)(a,e),Object(t.a)(a,[{key:"render",value:function(){var e=this.props,a=e.match.params.branch,r=e.branches,n="";if(void 0===a){var t=!0,c=!1,l=void 0;try{for(var o,i=r[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var s=o.value;s.isDefault&&(n=s.name)}}catch(h){c=!0,l=h}finally{try{t||null==i.return||i.return()}finally{if(c)throw l}}}return u.a.createElement(b.a,{branches:r,currentBranch:a||n,onBranchClick:this.onBranchClick})}}]),a}(i.PureComponent),f=Object(s.f)(p);r.d(a,"default",(function(){return f}))}}]);
//# sourceMappingURL=40.680aaaa2.chunk.js.map