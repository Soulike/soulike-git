(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[30],{752:function(e,a,t){e.exports={Branches:"Style_Branches__2Ece0",branchItemWrapper:"Style_branchItemWrapper__BqhCB"}},753:function(e,a,t){e.exports={BranchItem:"Style_BranchItem__1s0OP",branchInfo:"Style_branchInfo__22jsj"}},809:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=(t(94),t(46)),c=t(752),o=t.n(c),m=(t(224),t(105)),i=(t(128),t(35)),l=t(753),h=t.n(l),u=t(62),p=t(7),b=t(85),d=t(22),f=t(12);var E=Object(b.f)(r.a.memo((function(e){const{branch:{name:a,isDefault:t,lastCommit:{timestamp:n,committerName:s}},match:{params:{username:c,repository:o}}}=e;return r.a.createElement("div",{className:h.a.BranchItem},r.a.createElement("div",{className:h.a.branchInfo},r.a.createElement(p.b,{to:d.Function.generateRepositoryCodeRoute({username:c,repository:o,branch:a,objectType:f.b.TREE})},r.a.createElement(i.a,{color:"blue"},a)),r.a.createElement("div",{className:h.a.updateInfo},"\u5728 ",r.a.createElement(m.a,{title:u.b.parseTimestampToDate(n)},r.a.createElement(r.a.Fragment,null,u.b.parseTimestampToDifference(n)))," \u7531 ",r.a.createElement(p.b,{to:d.Function.generatePersonalCenterRoute({username:s})},s)," \u66f4\u65b0")),r.a.createElement("div",{className:h.a.defaultTagWrapper},t?r.a.createElement(i.a,null,"\u9ed8\u8ba4"):null))})));var g=r.a.memo((function(e){const{branches:a,loading:t}=e;return r.a.createElement("div",{className:o.a.Branches},r.a.createElement(s.a,{spinning:t},a.map(e=>r.a.createElement("div",{className:o.a.branchItemWrapper,key:e.name},r.a.createElement(E,{branch:e})))))})),y=t(27);class _ extends n.PureComponent{constructor(e){super(e),this.state={branches:[],loading:!1}}async componentDidMount(){this.setState({loading:!0}),await this.loadBranches(),this.setState({loading:!1})}async loadBranches(){const{match:{params:{username:e,repository:a}}}=this.props,t=await y.h.branches({username:e,name:a});if(null!==t){const{branches:e}=t;this.setState({branches:e})}}render(){const{branches:e,loading:a}=this.state;return r.a.createElement(g,{branches:e,loading:a})}}var v=Object(b.f)(_);t.d(a,"default",(function(){return v}))}}]);
//# sourceMappingURL=30.039e3072.chunk.js.map