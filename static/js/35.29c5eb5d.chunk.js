(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[35],{686:function(e,a,n){e.exports={BranchMenu:"Style_BranchMenu__2s6dB",branchName:"Style_branchName__YisEW",branchTagWrapper:"Style_branchTagWrapper__Cq2Vq",branchNameInButton:"Style_branchNameInButton__2kCc8"}},696:function(e,a,n){"use strict";n(700);var r=n(701),t=(n(60),n(16)),c=(n(173),n(34)),o=(n(128),n(35)),l=n(0),s=n.n(l),i=n(686),u=n.n(i),h=n(639);var m=s.a.memo((function(e){var a=e.branches,n=e.currentBranch,l=e.onBranchClick,i=!1,m=!0,p=!1,b=void 0;try{for(var f,y=a[Symbol.iterator]();!(m=(f=y.next()).done);m=!0){if(f.value.name===n){i=!0;break}}}catch(d){p=!0,b=d}finally{try{m||null==y.return||y.return()}finally{if(p)throw b}}return s.a.createElement(r.a,{trigger:["click"],overlay:s.a.createElement(c.a,{className:u.a.BranchMenu},a.map((function(e){return s.a.createElement(c.a.Item,{key:e.name,onClick:l(e)},s.a.createElement("div",{className:u.a.branchName,style:e.name===n?{fontWeight:"bold"}:{}},e.name),s.a.createElement("div",{className:u.a.branchTagWrapper},e.isDefault?s.a.createElement(o.a,{color:"blue"},"\u9ed8\u8ba4"):null))})))},s.a.createElement(t.a,null,i?"\u5206\u652f\uff1a":"Tree: ",s.a.createElement("div",{className:u.a.branchNameInButton},n),s.a.createElement(h.a,null)))}));n.d(a,"a",(function(){return m}))},828:function(e,a,n){"use strict";n.r(a);var r=n(0),t=n.n(r),c=n(85),o=n(22),l=n(12),s=n(696);class i extends r.PureComponent{constructor(...e){super(...e),this.onBranchClick=e=>()=>{const{history:a,match:{params:{username:n,repository:r,objectType:t,path:c}}}=this.props;a.replace(o.Function.generateRepositoryCodeRoute({username:n,repository:r,objectType:t||l.b.TREE,branch:e.name,path:c}))}}render(){const{match:{params:{branch:e}},branches:a}=this.props;let n="";if(void 0===e)for(const r of a)r.isDefault&&(n=r.name);return t.a.createElement(s.a,{branches:a,currentBranch:e||n,onBranchClick:this.onBranchClick})}}var u=Object(c.f)(i);n.d(a,"default",(function(){return u}))}}]);
//# sourceMappingURL=35.29c5eb5d.chunk.js.map