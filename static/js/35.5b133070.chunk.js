(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[35],{1020:function(e,a,t){"use strict";t.d(a,"a",(function(){return z}));var n=t(16),c=t(18),r=t(43),l=t(42),i=t(0),s=t.n(i),o=t(103),m=t(224),u=t(998),h=t.n(u),p=t(476),v=t(921),f=t(195),b=t(116),E=t(1087),d={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M938 458.8l-29.6-312.6c-1.5-16.2-14.4-29-30.6-30.6L565.2 86h-.4c-3.2 0-5.7 1-7.6 2.9L88.9 557.2a9.96 9.96 0 000 14.1l363.8 363.8c1.9 1.9 4.4 2.9 7.1 2.9s5.2-1 7.1-2.9l468.3-468.3c2-2.1 3-5 2.8-8zM459.7 834.7L189.3 564.3 589 164.6 836 188l23.4 247-399.7 399.7zM680 256c-48.5 0-88 39.5-88 88s39.5 88 88 88 88-39.5 88-88-39.5-88-88-88zm0 120c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"}}]},name:"tag",theme:"outlined"},y=t(24),g=function(e,a){return i.createElement(y.a,Object.assign({},e,{ref:a,icon:d}))};g.displayName="TagOutlined";var O=i.forwardRef(g),k=t(1022),N=t(943),B=t(937),C=t(68),_=t(26),j=t(67);var T=s.a.memo(Object(j.i)((function(e){var a=s.a.createElement(E.a,null),t=s.a.createElement(O,null),n=s.a.createElement(k.a,null),c=e.branches,r=e.tagNames,l=e.visible,i=e.currentBranchOrTagOrCommitHash,u=e.onButtonClick,d=e.onBranchOrTagClickFactory,y=e.match.params,g=y.username,j=y.repositoryName,T=c.map((function(e){return e.name})),z=T.includes(i),I=r.includes(i),L=z?a:I?t:n,S=[],M=[];if(z){S.push(i);var R,H=1,F=Object(m.a)(T);try{for(F.s();!(R=F.n()).done;){var W=R.value;if(10===H)break;W!==i&&(S.push(W),H++)}}catch(x){F.e(x)}finally{F.f()}}else S.push.apply(S,Object(o.a)(T.slice(0,10)));if(I){M.push(i);var w,V=1,P=Object(m.a)(r);try{for(P.s();!(w=P.n()).done;){var D=w.value;if(10===V)break;D!==i&&(M.push(D),V++)}}catch(x){P.e(x)}finally{P.f()}}else M.push.apply(M,Object(o.a)(r.slice(0,10)));return s.a.createElement("div",{className:h.a.BranchOrTagMenu},s.a.createElement(p.a,{placement:"bottomLeft",visible:l,trigger:["click"],content:s.a.createElement("div",{className:h.a.menuWrapper},s.a.createElement(v.a,{defaultOpenKeys:["branch"],selectedKeys:[i],selectable:!1,className:h.a.menu,mode:"inline",inlineIndent:12,forceSubMenuRender:!0},s.a.createElement(v.a.SubMenu,{title:s.a.createElement("b",null,"\u5206\u652f"),key:"branch",icon:a},0===c.length?s.a.createElement(f.a,{description:"\u6682\u65e0\u5206\u652f",image:f.a.PRESENTED_IMAGE_SIMPLE}):S.map((function(e){return s.a.createElement(v.a.Item,{onClick:d(e),key:e},s.a.createElement("div",{className:h.a.menuItem},s.a.createElement("span",{className:h.a.checkIconWrapper},i===e?s.a.createElement(N.a,null):null),s.a.createElement("span",{className:h.a.name},e)))}))),s.a.createElement(v.a.Divider,null),s.a.createElement(v.a.Item,null,s.a.createElement("div",{className:h.a.fullListLinkWrapper},s.a.createElement(_.b,{to:C.Function.generateRepositoryBranchesRoute({username:g,repositoryName:j})},"\u67e5\u770b\u6240\u6709\u5206\u652f"))),s.a.createElement(v.a.Divider,null),s.a.createElement(v.a.SubMenu,{title:s.a.createElement("b",null,"\u6807\u7b7e"),key:"tag",icon:t},0===r.length?s.a.createElement(f.a,{description:"\u6682\u65e0\u6807\u7b7e",image:f.a.PRESENTED_IMAGE_SIMPLE}):M.map((function(e){return s.a.createElement(v.a.Item,{onClick:d(e),key:e},s.a.createElement("div",{className:h.a.menuItem},s.a.createElement("span",{className:h.a.checkIconWrapper},i===e?s.a.createElement(N.a,null):null),s.a.createElement("span",{className:h.a.name},e)))}))),s.a.createElement(v.a.Item,null,s.a.createElement("div",{className:h.a.fullListLinkWrapper},s.a.createElement(_.b,{to:C.Function.generateRepositoryTagsRoute({username:g,repositoryName:j})},"\u67e5\u770b\u6240\u6709\u6807\u7b7e")))))},s.a.createElement(b.a,{onClick:u},L,i,s.a.createElement(B.a,null))))}))),z=function(e){Object(r.a)(t,e);var a=Object(l.a)(t);function t(e){var c;return Object(n.a)(this,t),(c=a.call(this,e)).onButtonClick=function(){var e=c.state.visible;c.setState({visible:!e})},c.onBranchOrTagClickFactory=function(e){var a=c.props.onBranchOrTagClickFactory;return function(t){c.setState({visible:!1});var n=a(e);n&&n(t)}},c.state={visible:!1},c}return Object(c.a)(t,[{key:"render",value:function(){var e=this.props,a=e.branches,t=e.tagNames,n=e.currentBranchOrTagOrCommitHash,c=this.state.visible;return s.a.createElement(T,{visible:c,tagNames:t,branches:a,currentBranchOrTagOrCommitHash:n,onBranchOrTagClickFactory:this.onBranchOrTagClickFactory,onButtonClick:this.onButtonClick})}}]),t}(i.PureComponent)},1022:function(e,a,t){"use strict";var n=t(0),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M120 160H72c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V168c0-4.4-3.6-8-8-8zm833 0h-48c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V168c0-4.4-3.6-8-8-8zM200 736h112c4.4 0 8-3.6 8-8V168c0-4.4-3.6-8-8-8H200c-4.4 0-8 3.6-8 8v560c0 4.4 3.6 8 8 8zm321 0h48c4.4 0 8-3.6 8-8V168c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v560c0 4.4 3.6 8 8 8zm126 0h178c4.4 0 8-3.6 8-8V168c0-4.4-3.6-8-8-8H647c-4.4 0-8 3.6-8 8v560c0 4.4 3.6 8 8 8zm-255 0h48c4.4 0 8-3.6 8-8V168c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v560c0 4.4 3.6 8 8 8zm-79 64H201c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm257 0h-48c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm256 0H648c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h178c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm-385 0h-48c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}}]},name:"barcode",theme:"outlined"},r=t(24),l=function(e,a){return n.createElement(r.a,Object.assign({},e,{ref:a,icon:c}))};l.displayName="BarcodeOutlined";a.a=n.forwardRef(l)},1087:function(e,a,t){"use strict";var n=t(0),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M740 161c-61.8 0-112 50.2-112 112 0 50.1 33.1 92.6 78.5 106.9v95.9L320 602.4V318.1c44.2-15 76-56.9 76-106.1 0-61.8-50.2-112-112-112s-112 50.2-112 112c0 49.2 31.8 91 76 106.1V706c-44.2 15-76 56.9-76 106.1 0 61.8 50.2 112 112 112s112-50.2 112-112c0-49.2-31.8-91-76-106.1v-27.8l423.5-138.7a50.52 50.52 0 0034.9-48.2V378.2c42.9-15.8 73.6-57 73.6-105.2 0-61.8-50.2-112-112-112zm-504 51a48.01 48.01 0 0196 0 48.01 48.01 0 01-96 0zm96 600a48.01 48.01 0 01-96 0 48.01 48.01 0 0196 0zm408-491a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"branches",theme:"outlined"},r=t(24),l=function(e,a){return n.createElement(r.a,Object.assign({},e,{ref:a,icon:c}))};l.displayName="BranchesOutlined";a.a=n.forwardRef(l)},1438:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return f}));var n=t(224),c=t(16),r=t(18),l=t(43),i=t(42),s=t(0),o=t.n(s),m=t(67),u=t(68),h=t(29),p=t(1020),v=function(e){Object(l.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).onBranchOrTagClickFactory=function(a){return function(){var t=e.props,n=t.history,c=t.match.params,r=c.username,l=c.repositoryName,i=c.objectType,s=c.path;return n.replace(u.Function.generateRepositoryCodeRoute({username:r,repositoryName:l,objectType:i||h.b.TREE,commitHash:a,path:s}))}},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this.props,a=e.match.params.commitHash,t=e.branches,c=e.tagNames,r="";if(void 0===a){var l,i=Object(n.a)(t);try{for(i.s();!(l=i.n()).done;){var s=l.value;s.isDefault&&(r=s.name)}}catch(m){i.e(m)}finally{i.f()}}return o.a.createElement(p.a,{branches:t,tagNames:c,currentBranchOrTagOrCommitHash:a||r,onBranchOrTagClickFactory:this.onBranchOrTagClickFactory})}}]),t}(s.PureComponent),f=Object(m.i)(v)},998:function(e,a,t){e.exports={menuWrapper:"Style_menuWrapper__2m-La",menu:"Style_menu__1IHB3",menuItem:"Style_menuItem__3fZXi",checkIconWrapper:"Style_checkIconWrapper__e6U-7",name:"Style_name__1yAds",fullListLinkWrapper:"Style_fullListLinkWrapper__11lpU"}}}]);
//# sourceMappingURL=35.5b133070.chunk.js.map