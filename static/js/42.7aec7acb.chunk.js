(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[42],{1076:function(e,t,n){e.exports={Code:"Style_Code__21-ZH",description:"Style_description__2MbQ1",buttonWrapper:"Style_buttonWrapper__12jZU",leftButtonWrapper:"Style_leftButtonWrapper__255ZA",newPullRequestButtonWrapper:"Style_newPullRequestButtonWrapper__1SU7q"}},1211:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return D}));var r=n(322),a=n(1),o=n.n(a),s=n(3),c=n(9),i=n(10),u=n(17),l=n(18),m=n(0),p=n.n(m),h=n(1076),f=n.n(h),b=n(19),d=n(1195),y=n(86),v=n(15),x=n(23),C=p.a.lazy((function(){return Promise.all([n.e(5),n.e(45)]).then(n.bind(null,1221))})),E=p.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(21)]).then(n.bind(null,1186))})),_=p.a.lazy((function(){return n.e(44).then(n.bind(null,1218))})),k=p.a.lazy((function(){return n.e(37).then(n.bind(null,1219))})),O=p.a.lazy((function(){return n.e(22).then(n.bind(null,1190))})),P=p.a.lazy((function(){return n.e(38).then(n.bind(null,1203))}));var j=p.a.memo((function(e){var t,n=e.repository,a=n.username,o=n.name,s=n.description,c=e.branches,i=e.commitCount,u=e.objectType,l=e.loading,m="",h=Object(r.a)(c);try{for(h.s();!(t=h.n()).done;){var j=t.value,w=j.isDefault,S=j.name;w&&(m=S)}}catch(g){h.e(g)}finally{h.f()}return p.a.createElement("div",{className:f.a.Code},p.a.createElement(d.a,{active:!0,loading:l},p.a.createElement("div",{className:f.a.description},s),p.a.createElement(P,{commitCount:i,branches:c}),0===i?p.a.createElement(k,null):p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:f.a.buttonWrapper},p.a.createElement("div",{className:f.a.leftButtonWrapper},p.a.createElement(C,{branches:c}),p.a.createElement("div",{className:f.a.newPullRequestButtonWrapper},p.a.createElement(v.b,{to:x.Function.generateRepositoryCompareRoute({sourceRepositoryUsername:a,sourceRepositoryName:o,sourceRepositoryBranch:m,targetRepositoryBranch:m,repository:o,username:a})},p.a.createElement(y.a,null,"\u521b\u5efa Pull Request")))),p.a.createElement(_,{username:a,repository:o})),void 0===u||u===b.b.TREE?p.a.createElement(E,null):p.a.createElement(O,null))))})),w=n(127),S=n(118),g=n(323),R=n(90),B=x.CONFIG.PAGE_ID,N=x.CONFIG.PAGE_ID_TO_ROUTE,W=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).setStatePromise=Object(R.promisify)(a.setState),a.loadRepository=Object(s.a)(o.a.mark((function e(){var t,n,r,s,c,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props,n=t.match.params,r=n.username,s=n.repository,c=t.history,e.next=3,g.a.repository({username:r},{name:s});case 3:if(null===(i=e.sent)){e.next=9;break}return e.next=7,a.setStatePromise({repository:i});case 7:e.next=10;break;case 9:return e.abrupt("return",c.replace(N[B.NOT_FOUND]));case 10:case"end":return e.stop()}}),e)}))),a.loadCommitCount=Object(s.a)(o.a.mark((function e(){var t,n,s,c,i,u,l,m,p,h,f,b,d;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a.props.match.params,n=t.username,s=t.repository,c=t.branch,i=a.state.branches,u="",!c){l=Object(r.a)(i);try{for(l.s();!(m=l.n()).done;)p=m.value,h=p.isDefault,f=p.name,h&&(u=f)}catch(o){l.e(o)}finally{l.f()}}return e.next=6,g.a.commitCount({username:n},{name:s},c||u);case 6:if(null===(b=e.sent)){e.next=11;break}return d=b.commitCount,e.next=11,a.setStatePromise({commitCount:d});case 11:case"end":return e.stop()}}),e)}))),a.loadBranches=Object(s.a)(o.a.mark((function e(){var t,n,r,s,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.match.params,n=t.username,r=t.repository,e.next=3,g.a.branches({username:n,name:r});case 3:if(null===(s=e.sent)){e.next=8;break}return c=s.branches,e.next=8,a.setStatePromise({branches:c});case 8:case"end":return e.stop()}}),e)}))),a.state={repository:new w.h("","","",!0),branches:[],commitCount:0,loading:!0},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=Object(s.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setStatePromise({loading:!0});case 2:return e.next=4,this.loadBranches();case 4:return e.next=6,Promise.all([this.loadRepository(),this.loadCommitCount()]);case 6:return e.next=8,this.setStatePromise({loading:!1});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(s.a)(o.a.mark((function e(t,n,r){var a,s,c,i,u,l,m,p;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.match.params,s=a.username,c=a.repository,i=a.branch,u=this.props.match.params,l=u.username,m=u.repository,p=u.branch,s===l&&c===m){e.next=7;break}return e.next=5,this.componentDidMount();case 5:e.next=14;break;case 7:if(i===p){e.next=14;break}return e.next=10,this.setStatePromise({loading:!0});case 10:return e.next=12,this.loadCommitCount();case 12:return e.next=14,this.setStatePromise({loading:!1});case 14:case"end":return e.stop()}}),e,this)})));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.repository,n=e.branches,r=e.commitCount,a=e.loading,o=this.props.match.params.objectType;return p.a.createElement(j,{repository:t,commitCount:r,branches:n,objectType:o,loading:a})}}]),n}(m.PureComponent),D=Object(S.f)(W)}}]);
//# sourceMappingURL=42.7aec7acb.chunk.js.map