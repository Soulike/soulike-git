(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[44],{1224:function(e,t,r){e.exports={Code:"Style_Code__21-ZH",description:"Style_description__2MbQ1",buttonWrapper:"Style_buttonWrapper__12jZU",leftButtonWrapper:"Style_leftButtonWrapper__255ZA",newPullRequestButtonWrapper:"Style_newPullRequestButtonWrapper__1SU7q"}},1357:function(e,t,r){"use strict";r.r(t);var a=r(2),n=r.n(a),s=r(5),o=r(64),c=r(65),i=r(67),u=r(66),l=r(68),m=r(0),p=r.n(m),h=(r(1222),r(1324)),b=(r(96),r(25)),d=r(1224),f=r.n(d),y=r(19),v=r(15),x=r(24);const k=p.a.lazy(()=>Promise.all([r.e(5),r.e(40)]).then(r.bind(null,1367))),C=p.a.lazy(()=>Promise.all([r.e(0),r.e(1),r.e(22)]).then(r.bind(null,1335))),E=p.a.lazy(()=>r.e(45).then(r.bind(null,1364))),_=p.a.lazy(()=>r.e(37).then(r.bind(null,1365))),O=p.a.lazy(()=>r.e(21).then(r.bind(null,1337))),P=p.a.lazy(()=>r.e(41).then(r.bind(null,1349)));var w=p.a.memo((function(e){const{repository:{username:t,name:r,description:a},branches:n,commitCount:s,objectType:o,loading:c}=e;let i="";for(const{isDefault:u,name:l}of n)u&&(i=l);return p.a.createElement("div",{className:f.a.Code},p.a.createElement(h.a,{active:!0,loading:c},p.a.createElement("div",{className:f.a.description},a),p.a.createElement(P,{commitCount:s,branches:n}),0===s?p.a.createElement(_,null):p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:f.a.buttonWrapper},p.a.createElement("div",{className:f.a.leftButtonWrapper},p.a.createElement(k,{branches:n}),p.a.createElement("div",{className:f.a.newPullRequestButtonWrapper},p.a.createElement(v.b,{to:x.Function.generateRepositoryCompareRoute({sourceRepositoryUsername:t,sourceRepositoryName:r,sourceRepositoryBranch:i,targetRepositoryBranch:i,repository:r,username:t})},p.a.createElement(b.a,null,"\u521b\u5efa Pull Request")))),p.a.createElement(E,{username:t,repository:r})),void 0===o||o===y.b.TREE?p.a.createElement(C,null):p.a.createElement(O,null))))})),j=r(147),S=r(136),g=r(352),R=r(220),B=x.CONFIG.PAGE_ID,N=x.CONFIG.PAGE_ID_TO_ROUTE,W=function(e){function t(e){var r;return Object(o.a)(this,t),(r=Object(i.a)(this,Object(u.a)(t).call(this,e))).setStatePromise=Object(R.promisify)(r.setState),r.loadRepository=Object(s.a)(n.a.mark((function e(){var t,a,s,o,c,i;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.props,a=t.match.params,s=a.username,o=a.repository,c=t.history,e.next=3,g.a.repository({username:s},{name:o});case 3:if(null===(i=e.sent)){e.next=9;break}return e.next=7,r.setStatePromise({repository:i});case 7:e.next=10;break;case 9:return e.abrupt("return",c.replace(N[B.NOT_FOUND]));case 10:case"end":return e.stop()}}),e)}))),r.loadCommitCount=Object(s.a)(n.a.mark((function e(){var t,a,s,o,c,i,u,l,m,p,h,b,d,f,y,v;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=r.props.match.params,a=t.username,s=t.repository,o=t.branch,c=r.state.branches,i="",o){e.next=23;break}for(u=!0,l=!1,m=void 0,e.prev=7,p=c[Symbol.iterator]();!(u=(h=p.next()).done);u=!0)b=h.value,d=b.isDefault,f=b.name,d&&(i=f);e.next=15;break;case 11:e.prev=11,e.t0=e.catch(7),l=!0,m=e.t0;case 15:e.prev=15,e.prev=16,u||null==p.return||p.return();case 18:if(e.prev=18,!l){e.next=21;break}throw m;case 21:return e.finish(18);case 22:return e.finish(15);case 23:return e.next=25,g.a.commitCount({username:a},{name:s},o||i);case 25:if(null===(y=e.sent)){e.next=30;break}return v=y.commitCount,e.next=30,r.setStatePromise({commitCount:v});case 30:case"end":return e.stop()}}),e,null,[[7,11,15,23],[16,,18,22]])}))),r.loadBranches=Object(s.a)(n.a.mark((function e(){var t,a,s,o,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.props.match.params,a=t.username,s=t.repository,e.next=3,g.a.branches({username:a,name:s});case 3:if(null===(o=e.sent)){e.next=8;break}return c=o.branches,e.next=8,r.setStatePromise({branches:c});case 8:case"end":return e.stop()}}),e)}))),r.state={repository:new j.h("","","",!0),branches:[],commitCount:0,loading:!0},r}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(s.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setStatePromise({loading:!0});case 2:return e.next=4,this.loadBranches();case 4:return e.next=6,Promise.all([this.loadRepository(),this.loadCommitCount()]);case 6:return e.next=8,this.setStatePromise({loading:!1});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(s.a)(n.a.mark((function e(t,r,a){var s,o,c,i,u,l,m,p;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=t.match.params,o=s.username,c=s.repository,i=s.branch,u=this.props.match.params,l=u.username,m=u.repository,p=u.branch,o===l&&c===m){e.next=7;break}return e.next=5,this.componentDidMount();case 5:e.next=14;break;case 7:if(i===p){e.next=14;break}return e.next=10,this.setStatePromise({loading:!0});case 10:return e.next=12,this.loadCommitCount();case 12:return e.next=14,this.setStatePromise({loading:!1});case 14:case"end":return e.stop()}}),e,this)})));return function(t,r,a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.repository,r=e.branches,a=e.commitCount,n=e.loading,s=this.props.match.params.objectType;return p.a.createElement(w,{repository:t,commitCount:a,branches:r,objectType:s,loading:n})}}]),t}(m.PureComponent),D=Object(S.f)(W);r.d(t,"default",(function(){return D}))}}]);
//# sourceMappingURL=44.2c5c5688.chunk.js.map