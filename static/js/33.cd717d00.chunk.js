(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[33],{1054:function(e,t,a){e.exports={BranchMenu:"Style_BranchMenu__2s6dB",branchName:"Style_branchName__YisEW",branchTagWrapper:"Style_branchTagWrapper__Cq2Vq",branchNameInButton:"Style_branchNameInButton__2kCc8"}},1069:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));a(1074);var n=a(1080),r=(a(73),a(21)),c=(a(257),a(44)),o=(a(179),a(46)),s=a(337),i=a(0),u=a.n(i),m=a(1054),l=a.n(m),p=a(995);var h=u.a.memo((function(e){var t,a=e.branches,i=e.currentBranch,m=e.onBranchClick,h=!1,f=Object(s.a)(a);try{for(f.s();!(t=f.n()).done;){if(t.value.name===i){h=!0;break}}}catch(b){f.e(b)}finally{f.f()}return u.a.createElement(n.a,{trigger:["click"],overlay:u.a.createElement(c.a,{className:l.a.BranchMenu},a.map((function(e){return u.a.createElement(c.a.Item,{key:e.name,onClick:m(e)},u.a.createElement("div",{className:l.a.branchName,style:e.name===i?{fontWeight:"bold"}:{}},e.name),u.a.createElement("div",{className:l.a.branchTagWrapper},e.isDefault?u.a.createElement(o.a,{color:"blue"},"\u9ed8\u8ba4"):null))})))},u.a.createElement(r.a,null,h?"\u5206\u652f\uff1a":"Tree: ",u.a.createElement("div",{className:l.a.branchNameInButton},i),u.a.createElement(p.a,null)))}))},1130:function(e,t,a){e.exports={Commits:"Style_Commits__2OB1b",infoWrapper:"Style_infoWrapper__1B-0-",path:"Style_path__3KqyH",timeLineWrapper:"Style_timeLineWrapper__3aFXu",loadMoreButtonWrapper:"Style_loadMoreButtonWrapper__MQq-F"}},1235:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return j}));var n=a(74),r=(a(62),a(29)),c=a(1),o=a.n(c),s=a(3),i=a(9),u=a(10),m=a(17),l=a(18),p=a(0),h=a.n(p),f=(a(108),a(45)),b=(a(73),a(21)),d=a(1130),v=a.n(d),y=a(337),_=a(126),k=a(22),E=a(1069),O=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).onBranchClick=function(t){return function(){var a=e.props,n=a.history,r=a.match.params,c=r.username,o=r.repository,s=r.path;return n.replace(k.Function.generateRepositoryCommitsRoute({username:c,repository:o,branch:t.name,path:s}))}},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props,t=e.match.params.branch,a=e.branches,n="";if(void 0===t){var r,c=Object(y.a)(a);try{for(c.s();!(r=c.n()).done;){var o=r.value;o.isDefault&&(n=o.name)}}catch(s){c.e(s)}finally{c.f()}}return h.a.createElement(E.a,{branches:a,currentBranch:t||n,onBranchClick:this.onBranchClick})}}]),a}(p.PureComponent),g=Object(_.f)(O),C=a(349);var M=h.a.memo((function(e){var t=e.branches,a=e.loading,n=e.commits,r=e.path,c=e.repositoryName,o=e.onLoadMoreButtonClick;return h.a.createElement("div",{className:v.a.Commits},h.a.createElement(f.a,{spinning:a},h.a.createElement("div",{className:v.a.infoWrapper},h.a.createElement(g,{branches:t}),"string"===typeof r?h.a.createElement("div",{className:v.a.path},c,"/",r):null),h.a.createElement("div",{className:v.a.timeLineWrapper},h.a.createElement(C.a,{commits:n})),h.a.createElement("div",{className:v.a.loadMoreButtonWrapper},h.a.createElement(b.a,{disabled:a,loading:a,onClick:o},"\u52a0\u8f7d\u66f4\u65e9\u7684\u63d0\u4ea4\u5386\u53f2"))))})),B=a(28),x=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var c;return Object(i.a)(this,a),(c=t.call(this,e)).init=Object(s.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){c.setState({branches:[],commits:[]},(function(){return e()}))})));case 1:case"end":return e.stop()}}),e)}))),c.loadBranches=Object(s.a)(o.a.mark((function e(){var t,a,n,r,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.props.match.params,a=t.username,n=t.repository,e.next=3,B.h.branches({username:a,name:n});case 3:null!==(r=e.sent)&&(s=r.branches,c.setState({branches:s}));case 5:case"end":return e.stop()}}),e)}))),c.loadMoreCommits=Object(s.a)(o.a.mark((function e(){var t,s,i,u,m,l,p,h;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=c.props.match.params,s=t.username,i=t.repository,u=t.branch,m=t.path,p=c.state.commits,"string"!==typeof m){e.next=8;break}return e.next=5,B.h.fileCommitHistory({username:s,name:i},m,u,p.length,a.COMMIT_AMOUNT_PER_PAGE);case 5:l=e.sent,e.next=11;break;case 8:return e.next=10,B.h.commitHistory({username:s,name:i},u,p.length,a.COMMIT_AMOUNT_PER_PAGE);case 10:l=e.sent;case 11:null!==l&&(0===(h=l.commits).length?r.a.success({message:"\u5df2\u52a0\u8f7d\u6240\u6709\u63d0\u4ea4\u5386\u53f2"}):c.setState({commits:[].concat(Object(n.a)(p),Object(n.a)(h))}));case 12:case"end":return e.stop()}}),e)}))),c.onLoadMoreButtonClick=Object(s.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.setState({loading:!0});case 2:return e.next=4,c.loadMoreCommits();case 4:return e.next=6,c.setState({loading:!1});case 6:case"end":return e.stop()}}),e)}))),c.state={branches:[],loading:!1,commits:[]},c}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(s.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.init();case 2:return this.setState({loading:!0}),e.next=5,this.loadBranches();case 5:return e.next=7,this.loadMoreCommits();case 7:this.setState({loading:!1});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(s.a)(o.a.mark((function e(t,a,n){var r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.location.pathname,c=this.props.location.pathname,r===c){e.next=5;break}return e.next=5,this.componentDidMount();case 5:case"end":return e.stop()}}),e,this)})));return function(t,a,n){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.branches,a=e.loading,n=e.commits,r=this.props.match.params,c=r.repository,o=r.path;return h.a.createElement(M,{onLoadMoreButtonClick:this.onLoadMoreButtonClick,branches:t,loading:a,commits:n,path:o,repositoryName:c})}}]),a}(p.PureComponent);x.COMMIT_AMOUNT_PER_PAGE=50;var j=Object(_.f)(x)}}]);
//# sourceMappingURL=33.cd717d00.chunk.js.map