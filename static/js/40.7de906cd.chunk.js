(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[40],{1143:function(e,a,t){e.exports={Branches:"Style_Branches__2Ece0",branchItemWrapper:"Style_branchItemWrapper__BqhCB"}},1144:function(e,a,t){e.exports={BranchItem:"Style_BranchItem__1s0OP",branchInfo:"Style_branchInfo__22jsj",updateInfo:"Style_updateInfo__MXhG7",updaterWrapper:"Style_updaterWrapper__3B_PT"}},1418:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return T}));var n=t(1),r=t.n(n),c=t(4),s=t(16),i=t(18),m=t(43),o=t(42),u=t(0),l=t.n(u),p=t(1143),h=t.n(p),b=t(1144),f=t.n(b),d=t(930),v=t(191),E=t(86),_=t(26),y=t(67),g=t(68),j=t(29),I=t(340);var N=Object(y.i)(l.a.memo((function(e){var a=e.branch,t=a.name,n=a.isDefault,r=a.lastCommit,c=r.timestamp,s=r.committerName,i=r.committerEmail,m=e.match.params,o=m.username,u=m.repositoryName;return l.a.createElement("div",{className:f.a.BranchItem},l.a.createElement("div",{className:f.a.branchInfo},l.a.createElement(_.b,{to:g.Function.generateRepositoryCodeRoute({username:o,repositoryName:u,commitHash:t,objectType:j.b.TREE})},l.a.createElement(d.a,{color:"blue"},t)),l.a.createElement("div",{className:f.a.updateInfo},l.a.createElement("div",{className:f.a.updaterWrapper},l.a.createElement(I.a,{committerEmail:i,committerName:s})),"\u5728 ",l.a.createElement(v.a,{title:E.b.parseTimestampToDate(c)},l.a.createElement(l.a.Fragment,null,E.b.parseTimestampToDifference(c)))," \u66f4\u65b0")),l.a.createElement("div",{className:f.a.defaultTagWrapper},n?l.a.createElement(d.a,null,"\u9ed8\u8ba4"):null))}))),B=t(917);var k=l.a.memo((function(e){var a=e.branches,t=e.loading;return l.a.createElement("div",{className:h.a.Branches},l.a.createElement(B.a,{spinning:t},a.map((function(e){return l.a.createElement("div",{className:h.a.branchItemWrapper,key:e.name},l.a.createElement(N,{branch:e}))}))))})),O=t(37),S=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={branches:[],loading:!1},n}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,this.loadBranches();case 3:this.setState({loading:!1});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"loadBranches",value:function(){var e=Object(c.a)(r.a.mark((function e(){var a,t,n,c,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.props.match.params,t=a.username,n=a.repositoryName,e.next=3,O.j.branches({username:t,name:n});case 3:null!==(c=e.sent)&&(s=c.branches,this.setState({branches:s}));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,a=e.branches,t=e.loading;return l.a.createElement(k,{branches:a,loading:t})}}]),t}(u.PureComponent),T=Object(y.i)(S)}}]);
//# sourceMappingURL=40.7de906cd.chunk.js.map