(window["webpackJsonpsoulike-git"]=window["webpackJsonpsoulike-git"]||[]).push([[7],{123:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return a}));var n=Symbol("SET_LOGGED_IN"),a=Symbol("SET_LOGGED_OUT")},151:function(e,t,r){e.exports={Root:"Style_Root__1cSwI",menu:"Style_menu__wkrK2",title:"Style_title__2hC_R",accountMenu:"Style_accountMenu__3DilR"}},155:function(e,t,r){"use strict";var n={};r.r(n),r.d(n,"login",(function(){return b})),r.d(n,"register",(function(){return v})),r.d(n,"checkSession",(function(){return y}));var a=r(31),u=r.n(a);u.a.defaults.timeout=5e3,u.a.defaults.validateStatus=function(){return!0};var c=r(15),s=r.n(c),o=(r(154),r(23)),i=r(30),l=r(93);function p(e){return Object(l.a)("/account".concat(e))}var f=p("/login"),m=p("/register"),d=p("/checkSession");function b(e){return h.apply(this,arguments)}function h(){return(h=Object(i.a)(s.a.mark((function e(t){var r,n,a,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.post(f,t);case 3:if(r=e.sent,n=r.data,a=n.isSuccessful,c=n.message,!a){e.next=11;break}return e.abrupt("return",!0);case 11:return o.a.warn({message:c}),e.abrupt("return",null);case 13:e.next=20;break;case 15:return e.prev=15,e.t0=e.catch(0),console.error(e.t0),o.a.error({message:"\u7f51\u7edc\u5f02\u5e38"}),e.abrupt("return",null);case 20:case"end":return e.stop()}}),e,null,[[0,15]])})))).apply(this,arguments)}function v(e,t){return g.apply(this,arguments)}function g(){return(g=Object(i.a)(s.a.mark((function e(t,r){var n,a,c,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.post(m,{account:t,profile:r});case 3:if(n=e.sent,a=n.data,c=a.isSuccessful,i=a.message,!c){e.next=11;break}return e.abrupt("return",!0);case 11:return o.a.warn({message:i}),e.abrupt("return",null);case 13:e.next=20;break;case 15:return e.prev=15,e.t0=e.catch(0),console.error(e.t0),o.a.error({message:"\u7f51\u7edc\u5f02\u5e38"}),e.abrupt("return",null);case 20:case"end":return e.stop()}}),e,null,[[0,15]])})))).apply(this,arguments)}function y(){return O.apply(this,arguments)}function O(){return(O=Object(i.a)(s.a.mark((function e(){var t,r,n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get(d);case 3:if(t=e.sent,r=t.data,n=r.isSuccessful,a=r.data,!n){e.next=11;break}return e.abrupt("return",a);case 11:return e.abrupt("return",null);case 12:e.next=19;break;case 14:return e.prev=14,e.t0=e.catch(0),console.error(e.t0),o.a.error({message:"\u7f51\u7edc\u5f02\u5e38"}),e.abrupt("return",null);case 19:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}var E=r(264),w=r(266),k=r(265);r.d(t,"a",(function(){return n})),r.d(t,"c",(function(){return E.a})),r.d(t,"d",(function(){return w.a})),r.d(t,"b",(function(){return k.a}))},187:function(e,t,r){"use strict";r.r(t),r.d(t,"setLoggedInAction",(function(){return a})),r.d(t,"setLoggedOutAction",(function(){return u}));var n=r(123);function a(){return{type:n.a}}function u(){return{type:n.b}}},193:function(e,t,r){"use strict";r.r(t);var n={};r.r(n),r.d(n,"PAGE_ID",(function(){return d})),r.d(n,"PAGE_ID_TO_COMPONENT",(function(){return w})),r.d(n,"PAGE_ID_TO_ROUTE",(function(){return k}));var a={};r.r(a),r.d(a,"generatePersonalCenterRoute",(function(){return R})),r.d(a,"generateRepositoryRoute",(function(){return S}));var u=r(0),c=r.n(u),s=r(82),o=r(94),i=r(388),l=r.n(i);var p,f,m=function(){return c.a.createElement("div",{className:l.a.NotFound})},d={INDEX:"INDEX",LOGIN:"LOGIN",REGISTER:"REGISTER",CREATE_REPOSITORY:"CREATE_REPOSITORY",PERSONAL_CENTER:"PERSONAL_CENTER",REPOSITORY:"REPOSITORY"},b=r(44),h=c.a.lazy((function(){return Promise.all([r.e(0),r.e(1),r.e(19)]).then(r.bind(null,1203))})),v=c.a.lazy((function(){return Promise.all([r.e(0),r.e(1),r.e(20)]).then(r.bind(null,1204))})),g=c.a.lazy((function(){return Promise.all([r.e(2),r.e(3),r.e(4),r.e(5),r.e(17)]).then(r.bind(null,1205))})),y=c.a.lazy((function(){return Promise.all([r.e(0),r.e(1),r.e(12)]).then(r.bind(null,1199))})),O=c.a.lazy((function(){return Promise.all([r.e(2),r.e(3),r.e(4),r.e(5),r.e(14)]).then(r.bind(null,1206))})),E=c.a.lazy((function(){return Promise.all([r.e(11),r.e(18)]).then(r.bind(null,1198))})),w=(p={},Object(b.a)(p,d.INDEX,g),Object(b.a)(p,d.LOGIN,h),Object(b.a)(p,d.REGISTER,v),Object(b.a)(p,d.CREATE_REPOSITORY,y),Object(b.a)(p,d.PERSONAL_CENTER,O),Object(b.a)(p,d.REPOSITORY,E),p),k=(f={},Object(b.a)(f,d.INDEX,"/"),Object(b.a)(f,d.LOGIN,"/login"),Object(b.a)(f,d.REGISTER,"/register"),Object(b.a)(f,d.CREATE_REPOSITORY,"/createRepository"),Object(b.a)(f,d.PERSONAL_CENTER,"/:username"),Object(b.a)(f,d.REPOSITORY,"/:username/:repository/:objectType?/:branch?/:path*"),f),j=c.a.lazy((function(){return Promise.resolve().then(r.bind(null,394))})),x=r(311);function R(e){var t=e.username;return k[d.PERSONAL_CENTER].replace(":username",t)}function S(e){var t=e.username,r=e.branch,n=e.objectType,a=e.path,u=e.repository,c=k[d.REPOSITORY].replace(":username",t).replace(":repository",u);return c=void 0!==n?c.replace(":objectType?",n):c.replace("/:objectType?",""),c=void 0!==r?c.replace(":branch?",r):c.replace("/:branch?",""),c=void 0!==a?c.replace(":path*",a):c.replace("/:path*","")}r.d(t,"Interface",(function(){return x})),r.d(t,"Function",(function(){return a})),r.d(t,"CONFIG",(function(){return n}));t.default=function(){return c.a.createElement(s.a,null,c.a.createElement(o.c,null,c.a.createElement(j,null,c.a.createElement(o.c,null,Object.values(d).map((function(e){return c.a.createElement(o.a,{path:k[e],component:w[e],exact:!0,key:e})})))),c.a.createElement(o.a,{render:m})))}},262:function(e,t,r){"use strict";var n=r(59),a=r(81),u=r(391),c=r.n(u),s=function(){function e(t,r){if(Object(n.a)(this,e),this.username=void 0,this.hash=void 0,!e.validate({username:t,hash:r}))throw new TypeError("Account constructor parameter type is incorrect");this.username=t,this.hash=r}return Object(a.a)(e,null,[{key:"calculateHash",value:function(t,r){var n=e.sha256;return n(n(t)+n(r))}},{key:"validate",value:function(e){var t=e.username,r=e.hash;return"string"===typeof t&&"string"===typeof r}},{key:"from",value:function(t){return new e(t.username,t.hash)}},{key:"sha256",value:function(e){var t=c.a.createHash("sha256");return t.update(e),t.digest("hex")}}]),e}(),o=function e(t,r,a,u,c){Object(n.a)(this,e),this.commitHash=void 0,this.committerName=void 0,this.committerEmail=void 0,this.time=void 0,this.message=void 0,this.commitHash=t,this.committerName=r,this.committerEmail=a,this.time=u,this.message=c},i=function(){function e(t,r,a,u){if(Object(n.a)(this,e),this.username=void 0,this.name=void 0,this.description=void 0,this.isPublic=void 0,!e.validate({username:t,name:r,description:a,isPublic:u}))throw new TypeError("Repository constructor parameter type is incorrect");this.username=t,this.name=r,this.description=a,this.isPublic=u}return Object(a.a)(e,null,[{key:"validate",value:function(e){var t=e.username,r=e.name,n=e.description,a=e.isPublic;return"string"===typeof t&&"string"===typeof r&&"string"===typeof n&&"boolean"===typeof a}},{key:"from",value:function(t){return new e(t.username,t.name,t.description,t.isPublic)}}]),e}(),l=r(366),p=r.n(l),f=function(){function e(t,r,a,u){if(Object(n.a)(this,e),this.username=void 0,this.nickname=void 0,this.avatar=void 0,this.email=void 0,!e.validate({username:t,nickname:r,email:a,avatar:u}))throw new TypeError("Profile constructor parameter type is incorrect");this.username=t,this.nickname=r,this.email=a,this.avatar=u}return Object(a.a)(e,null,[{key:"validate",value:function(e){var t=e.username,r=e.nickname,n=e.email,a=e.avatar;return"string"===typeof t&&"string"===typeof r&&"string"===typeof n&&p.a.isEmail(n)&&"string"===typeof a}},{key:"from",value:function(t){return new e(t.username,t.nickname,t.email,t.avatar)}}]),e}();r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return o})),r.d(t,"d",(function(){return i})),r.d(t,"c",(function(){return f}))},264:function(e,t,r){"use strict";var n={};r.r(n),r.d(n,"getList",(function(){return b})),r.d(n,"create",(function(){return v})),r.d(n,"del",(function(){return y}));var a=r(15),u=r.n(a),c=(r(154),r(23)),s=r(30),o=r(31),i=r.n(o),l=r(93);function p(e){return Object(l.a)("/repository".concat(e))}var f=p("/getList"),m=p("/create"),d=p("/del");function b(e,t,r){return h.apply(this,arguments)}function h(){return(h=Object(s.a)(u.a.mark((function e(t,r,n){var a,s,o,l,p;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get(f,{params:{json:JSON.stringify({start:t,end:r,username:n})}});case 3:if(a=e.sent,s=a.data,o=s.isSuccessful,l=s.message,p=s.data,!o){e.next=12;break}return e.abrupt("return",p);case 12:return c.a.warn({message:l}),e.abrupt("return",null);case 14:e.next=21;break;case 16:return e.prev=16,e.t0=e.catch(0),console.error(e.t0),c.a.error({message:"\u7f51\u7edc\u5f02\u5e38"}),e.abrupt("return",null);case 21:case"end":return e.stop()}}),e,null,[[0,16]])})))).apply(this,arguments)}function v(e){return g.apply(this,arguments)}function g(){return(g=Object(s.a)(u.a.mark((function e(t){var r,n,a,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.post(m,t);case 3:if(r=e.sent,n=r.data,a=n.isSuccessful,s=n.message,!a){e.next=11;break}return e.abrupt("return",!0);case 11:return c.a.warn({message:s}),e.abrupt("return",null);case 13:e.next=20;break;case 15:return e.prev=15,e.t0=e.catch(0),console.error(e.t0),c.a.error({message:"\u7f51\u7edc\u5f02\u5e38"}),e.abrupt("return",null);case 20:case"end":return e.stop()}}),e,null,[[0,15]])})))).apply(this,arguments)}function y(e){return O.apply(this,arguments)}function O(){return(O=Object(s.a)(u.a.mark((function e(t){var r,n,a,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.post(d,{repositoryName:t});case 3:if(r=e.sent,n=r.data,a=n.isSuccessful,s=n.message,!a){e.next=11;break}return e.abrupt("return",!0);case 11:return c.a.warn({message:s}),e.abrupt("return",null);case 13:e.next=20;break;case 15:return e.prev=15,e.t0=e.catch(0),console.error(e.t0),c.a.error({message:"\u7f51\u7edc\u5f02\u5e38"}),e.abrupt("return",null);case 20:case"end":return e.stop()}}),e,null,[[0,15]])})))).apply(this,arguments)}r.d(t,"a",(function(){return n}))},265:function(e,t,r){"use strict";var n={};r.r(n),r.d(n,"get",(function(){return m}));var a=r(15),u=r.n(a),c=(r(154),r(23)),s=r(30),o=r(31),i=r.n(o),l=r(93);var p,f=(p="/get",Object(l.a)("/profile".concat(p)));function m(e){return d.apply(this,arguments)}function d(){return(d=Object(s.a)(u.a.mark((function e(t){var r,n,a,s,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get(f,{params:{json:JSON.stringify({username:t})}});case 3:if(r=e.sent,n=r.data,a=n.isSuccessful,s=n.message,o=n.data,!a){e.next=12;break}return e.abrupt("return",o);case 12:return c.a.warn({message:s}),e.abrupt("return",null);case 14:e.next=21;break;case 16:return e.prev=16,e.t0=e.catch(0),console.error(e.t0),c.a.error({message:"\u7f51\u7edc\u5f02\u5e38"}),e.abrupt("return",null);case 21:case"end":return e.stop()}}),e,null,[[0,16]])})))).apply(this,arguments)}r.d(t,"a",(function(){return n}))},266:function(e,t,r){"use strict";var n={};r.r(n),r.d(n,"repository",(function(){return y})),r.d(n,"branch",(function(){return E})),r.d(n,"lastCommit",(function(){return k})),r.d(n,"directory",(function(){return x})),r.d(n,"commitCount",(function(){return S})),r.d(n,"fileInfo",(function(){return N})),r.d(n,"rawFile",(function(){return T}));var a=r(15),u=r.n(a),c=(r(154),r(23)),s=r(30),o=r(31),i=r.n(o),l=r(93);function p(e){return Object(l.a)("/repositoryInfo".concat(e))}var f=p("/repository"),m=p("/branch"),d=p("/lastCommit"),b=p("/directory"),h=p("/commitCount"),v=p("/fileInfo"),g=p("/rawFile");function y(e,t){return O.apply(this,arguments)}function O(){return(O=Object(s.a)(u.a.mark((function e(t,r){var n,a,s,o,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get(f,{params:{json:JSON.stringify({username:t,repositoryName:r})}});case 3:if(n=e.sent,a=n.data,s=a.isSuccessful,o=a.message,l=a.data,!s){e.next=12;break}return e.abrupt("return",l);case 12:return c.a.warn({message:o}),e.abrupt("return",null);case 14:e.next=21;break;case 16:return e.prev=16,e.t0=e.catch(0),console.error(e.t0),c.a.error({message:"\u7f51\u7edc\u5f02\u5e38"}),e.abrupt("return",null);case 21:case"end":return e.stop()}}),e,null,[[0,16]])})))).apply(this,arguments)}function E(e,t){return w.apply(this,arguments)}function w(){return(w=Object(s.a)(u.a.mark((function e(t,r){var n,a,s,o,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get(m,{params:{json:JSON.stringify({username:t,repositoryName:r})}});case 3:if(n=e.sent,a=n.data,s=a.isSuccessful,o=a.message,l=a.data,!s){e.next=12;break}return e.abrupt("return",l);case 12:return c.a.warn({message:o}),e.abrupt("return",null);case 14:e.next=21;break;case 16:return e.prev=16,e.t0=e.catch(0),console.error(e.t0),c.a.error({message:"\u7f51\u7edc\u5f02\u5e38"}),e.abrupt("return",null);case 21:case"end":return e.stop()}}),e,null,[[0,16]])})))).apply(this,arguments)}function k(e,t,r,n){return j.apply(this,arguments)}function j(){return(j=Object(s.a)(u.a.mark((function e(t,r,n,a){var s,o,l,p,f;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get(d,{params:{json:JSON.stringify({username:t,repositoryName:r,commitHash:n,filePath:a})}});case 3:if(s=e.sent,o=s.data,l=o.isSuccessful,p=o.message,f=o.data,!l){e.next=12;break}return e.abrupt("return",f);case 12:return c.a.warn({message:p}),e.abrupt("return",null);case 14:e.next=21;break;case 16:return e.prev=16,e.t0=e.catch(0),console.error(e.t0),c.a.error({message:"\u7f51\u7edc\u5f02\u5e38"}),e.abrupt("return",null);case 21:case"end":return e.stop()}}),e,null,[[0,16]])})))).apply(this,arguments)}function x(e,t,r,n){return R.apply(this,arguments)}function R(){return(R=Object(s.a)(u.a.mark((function e(t,r,n,a){var s,o,l,p,f;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get(b,{params:{json:JSON.stringify({username:t,repositoryName:r,commitHash:n,directoryPath:a})}});case 3:if(s=e.sent,o=s.data,l=o.isSuccessful,p=o.message,f=o.data,!l){e.next=12;break}return e.abrupt("return",f);case 12:return c.a.warn({message:p}),e.abrupt("return",null);case 14:e.next=21;break;case 16:return e.prev=16,e.t0=e.catch(0),console.error(e.t0),c.a.error({message:"\u7f51\u7edc\u5f02\u5e38"}),e.abrupt("return",null);case 21:case"end":return e.stop()}}),e,null,[[0,16]])})))).apply(this,arguments)}function S(e,t,r){return I.apply(this,arguments)}function I(){return(I=Object(s.a)(u.a.mark((function e(t,r,n){var a,s,o,l,p;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get(h,{params:{json:JSON.stringify({username:t,repositoryName:r,commitHash:n})}});case 3:if(a=e.sent,s=a.data,o=s.isSuccessful,l=s.message,p=s.data,!o){e.next=12;break}return e.abrupt("return",p);case 12:return c.a.warn({message:l}),e.abrupt("return",null);case 14:e.next=21;break;case 16:return e.prev=16,e.t0=e.catch(0),console.error(e.t0),c.a.error({message:"\u7f51\u7edc\u5f02\u5e38"}),e.abrupt("return",null);case 21:case"end":return e.stop()}}),e,null,[[0,16]])})))).apply(this,arguments)}function N(e,t,r,n){return P.apply(this,arguments)}function P(){return(P=Object(s.a)(u.a.mark((function e(t,r,n,a){var s,o,l,p,f;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get(v,{params:{json:JSON.stringify({username:t,repositoryName:r,filePath:n,commitHash:a})}});case 3:if(s=e.sent,o=s.data,l=o.isSuccessful,p=o.message,f=o.data,!l){e.next=12;break}return e.abrupt("return",f);case 12:return c.a.warn({message:p}),e.abrupt("return",null);case 14:e.next=21;break;case 16:return e.prev=16,e.t0=e.catch(0),console.error(e.t0),c.a.error({message:"\u7f51\u7edc\u5f02\u5e38"}),e.abrupt("return",null);case 21:case"end":return e.stop()}}),e,null,[[0,16]])})))).apply(this,arguments)}function T(e,t,r,n){return _.apply(this,arguments)}function _(){return(_=Object(s.a)(u.a.mark((function e(t,r,n,a){var s,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get(g,{params:{json:JSON.stringify({username:t,repositoryName:r,filePath:n,commitHash:a})},responseType:"blob",transformResponse:function(e){return e}});case 3:return s=e.sent,o=s.data,e.abrupt("return",o);case 8:return e.prev=8,e.t0=e.catch(0),console.error(e.t0),c.a.error({message:"\u7f51\u7edc\u5f02\u5e38"}),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}r.d(t,"a",(function(){return n}))},311:function(e,t,r){"use strict";r.r(t);var n=r(312);for(var a in n)"default"!==a&&function(e){r.d(t,e,(function(){return n[e]}))}(a);var u=r(313);for(var a in u)"default"!==a&&function(e){r.d(t,e,(function(){return u[e]}))}(a)},312:function(e,t){},313:function(e,t){},388:function(e,t,r){},392:function(e,t,r){},394:function(e,t,r){"use strict";r.r(t);var n=r(15),a=r.n(n),u=r(30),c=r(59),s=r(81),o=r(260),i=r(259),l=r(261),p=r(0),f=r.n(p),m=(r(395),r(46)),d=(r(397),r(73)),b=r(151),h=r.n(b),v=r(82),g=r(193),y=g.CONFIG.PAGE_ID,O=g.CONFIG.PAGE_ID_TO_ROUTE;var E=f.a.memo((function(e){var t=e.children,r=e.isLoggedIn,n=e.username;return f.a.createElement("div",{className:h.a.Root},f.a.createElement(d.a,{mode:"horizontal",theme:"dark",className:h.a.menu,selectable:!1},f.a.createElement(d.a.Item,{className:h.a.title},f.a.createElement(v.b,{to:O[y.INDEX]},"Git Demo")),f.a.createElement(d.a.Item,{className:h.a.accountMenu},r?f.a.createElement(d.a,{mode:"horizontal",theme:"dark",selectable:!1},f.a.createElement(d.a.Item,null,f.a.createElement(v.b,{to:O[y.CREATE_REPOSITORY]},f.a.createElement(m.a,{type:"plus"}),"\u521b\u5efa\u4ed3\u5e93")),f.a.createElement(d.a.Item,null,f.a.createElement(v.b,{to:O[y.PERSONAL_CENTER].replace(":username",n)},f.a.createElement(m.a,{type:"user"}),"\u4e2a\u4eba\u4e2d\u5fc3"))):f.a.createElement(d.a,{mode:"horizontal",theme:"dark",selectable:!1},f.a.createElement(d.a.Item,null,f.a.createElement(v.b,{to:O[y.LOGIN]},f.a.createElement(m.a,{type:"login"}),"\u767b\u5f55")),f.a.createElement(d.a.Item,null,f.a.createElement(v.b,{to:O[y.REGISTER]},f.a.createElement(m.a,{type:"user-add"}),"\u6ce8\u518c"))))),t)})),w=r(191),k=r(262),j=r(155),x=r(187),R=function(e){function t(e){var r;return Object(c.a)(this,t),(r=Object(o.a)(this,Object(i.a)(t).call(this,e))).state={profile:new k.c("","","example@example.com","")},r}return Object(l.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(a.a.mark((function e(){var t,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.checkSession();case 2:if(null===(t=e.sent)||!t.isValid){e.next=10;break}return(0,this.props.setLoggedIn)(),e.next=8,j.b.get();case 8:null!==(r=e.sent)&&this.setState({profile:r});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(u.a)(a.a.mark((function e(t,r,n){var u,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u=this.props.isLoggedIn,t.isLoggedIn||!u){e.next=7;break}return e.next=5,j.b.get();case 5:null!==(c=e.sent)&&this.setState({profile:c});case 7:case"end":return e.stop()}}),e,this)})));return function(t,r,n){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props,t=e.children,r=e.isLoggedIn,n=this.state.profile.username;return f.a.createElement(E,{isLoggedIn:r,username:n},t)}}]),t}(p.PureComponent),S={setLoggedIn:x.setLoggedInAction},I=Object(w.b)((function(e){return{isLoggedIn:e.Root.isLoggedIn}}),S)(R),N=r(44),P=r(123);function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(r,!0).forEach((function(t){Object(N.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var L=function(e,t){switch(t.type){case P.a:return _({},e,{isLoggedIn:!0});case P.b:return _({},e,{isLoggedIn:!1});default:return _({},e)}};r.d(t,"Reducer",(function(){return L})),r.d(t,"Action",(function(){return x}));t.default=I},399:function(e,t,r){e.exports=r(917)},694:function(e,t,r){},760:function(e,t){},762:function(e,t){},796:function(e,t){},797:function(e,t){},917:function(e,t,r){"use strict";r.r(t);r(400),r(401),r(402),r(403),r(404),r(405),r(406),r(407),r(408),r(409),r(410),r(411),r(412),r(413),r(414),r(415),r(416),r(417),r(418),r(419),r(420),r(421),r(422),r(423),r(424),r(425),r(426),r(159),r(427),r(428),r(429),r(430),r(431),r(432),r(433),r(434),r(435),r(436),r(437),r(438),r(439),r(440),r(441),r(442),r(443),r(444),r(445),r(447),r(448),r(450),r(451),r(452),r(453),r(209),r(454),r(455),r(456),r(457),r(458),r(459),r(460),r(461),r(462),r(463),r(464),r(465),r(466),r(467),r(468),r(469),r(470),r(471),r(472),r(473),r(474),r(475),r(476),r(477),r(478),r(479),r(480),r(481),r(482),r(483),r(484),r(485),r(486),r(487),r(488),r(489),r(490),r(491),r(492),r(493),r(494),r(495),r(496),r(497),r(498),r(499),r(500),r(501),r(502),r(503),r(504),r(505),r(506),r(508),r(509),r(510),r(511),r(512),r(513),r(514),r(516),r(517),r(518),r(519),r(520),r(521),r(522),r(523),r(524),r(525),r(526),r(527),r(528),r(529),r(530),r(299),r(531),r(532),r(533),r(534),r(300),r(535),r(536),r(537),r(538),r(539),r(540),r(541),r(542),r(543),r(544),r(545),r(546),r(547),r(548),r(549),r(550),r(551),r(552),r(553),r(554),r(555),r(556),r(557),r(558),r(559),r(560),r(561),r(562),r(563),r(564),r(565),r(566),r(567),r(568),r(569),r(570),r(571),r(572),r(573),r(574),r(575),r(576),r(577),r(578),r(579),r(580),r(581),r(582),r(583),r(584),r(585),r(586),r(587),r(588),r(589),r(590),r(591),r(592),r(593),r(219),r(594),r(595),r(596),r(597),r(598),r(599),r(600),r(601),r(602),r(603),r(604),r(605),r(606),r(607),r(608),r(610),r(611),r(612),r(613),r(614),r(615),r(616),r(617),r(618),r(619),r(620),r(621),r(622),r(623),r(624),r(625),r(626),r(627),r(628),r(629),r(630),r(631),r(632),r(633),r(634),r(636),r(637),r(638),r(639),r(640),r(641),r(642),r(643),r(644),r(645),r(646),r(647),r(648),r(649),r(650),r(651),r(652),r(653),r(654),r(655),r(656),r(657),r(658),r(659),r(660),r(661),r(662),r(663),r(664),r(665),r(666),r(667),r(670),r(671),r(672),r(673),r(674),r(675),r(676),r(677),r(678),r(679),r(680),r(681),r(682),r(683),r(684),r(685),r(687),r(310),r(688);var n=r(58),a=r(0),u=r.n(a),c=r(16),s=r.n(c),o=(r(694),r(191)),i=r(107),l=r(394),p=Object(i.d)(i.a.apply(void 0,[])),f=Object(i.c)({Root:l.Reducer}),m=Object(i.e)(f,{Root:{isLoggedIn:!1}},p),d=r(392),b=r.n(d);var h=u.a.memo((function(){return u.a.createElement("div",{className:b.a.Loading})})),v=r(149);r.n(v).a.locale("zh-cn");var g=r(393);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=u.a.lazy((function(){return Promise.resolve().then(r.bind(null,193))}));s.a.render(u.a.createElement(a.Suspense,{fallback:u.a.createElement(h,null)},u.a.createElement(o.a,{store:m},u.a.createElement(n.b,{locale:g.a},u.a.createElement(y,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},93:function(e,t,r){"use strict";function n(e){return"/server".concat(e)}r.d(t,"a",(function(){return n}))}},[[399,8,9]]]);
//# sourceMappingURL=main.f28d4807.chunk.js.map