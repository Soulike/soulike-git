(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[28],{674:function(e,a,t){e.exports={BranchMenu:"Style_BranchMenu__2s6dB",branchName:"Style_branchName__YisEW",branchTagWrapper:"Style_branchTagWrapper__Cq2Vq",branchNameInButton:"Style_branchNameInButton__2kCc8"}},685:function(e,a,t){"use strict";t(689);var n=t(690),r=(t(51),t(14)),s=(t(161),t(29)),o=(t(118),t(30)),i=t(0),c=t.n(i),m=t(674),l=t.n(m),h=t(627);var p=c.a.memo((function(e){const{branches:a,currentBranch:t,onBranchClick:i}=e;let m=!1;for(const n of a)if(n.name===t){m=!0;break}return c.a.createElement(n.a,{trigger:["click"],overlay:c.a.createElement(s.a,{className:l.a.BranchMenu},a.map(e=>c.a.createElement(s.a.Item,{key:e.name,onClick:i(e)},c.a.createElement("div",{className:l.a.branchName,style:e.name===t?{fontWeight:"bold"}:{}},e.name),c.a.createElement("div",{className:l.a.branchTagWrapper},e.isDefault?c.a.createElement(o.a,{color:"blue"},"\u9ed8\u8ba4"):null))))},c.a.createElement(r.a,null,m?"\u5206\u652f\uff1a":"Tree: ",c.a.createElement("div",{className:l.a.branchNameInButton},t),c.a.createElement(h.a,null)))}));t.d(a,"a",(function(){return p}))},734:function(e,a,t){e.exports={Commits:"Style_Commits__2OB1b",infoWrapper:"Style_infoWrapper__1B-0-",path:"Style_path__3KqyH",timeLineWrapper:"Style_timeLineWrapper__3aFXu",loadMoreButtonWrapper:"Style_loadMoreButtonWrapper__MQq-F"}},796:function(e,a,t){"use strict";t.r(a);t(52);var n=t(22),r=t(0),s=t.n(r),o=(t(84),t(37)),i=(t(51),t(14)),c=t(734),m=t.n(c),l=t(76),h=t(20),p=t(685);class u extends r.PureComponent{constructor(...e){super(...e),this.onBranchClick=e=>()=>{const{history:a,match:{params:{username:t,repository:n,path:r}}}=this.props;a.replace(h.Function.generateRepositoryCommitsRoute({username:t,repository:n,branch:e.name,path:r}))}}render(){const{match:{params:{branch:e}},branches:a}=this.props;let t="";if(void 0===e)for(const n of a)n.isDefault&&(t=n.name);return s.a.createElement(p.a,{branches:a,currentBranch:e||t,onBranchClick:this.onBranchClick})}}var d=Object(l.f)(u),_=t(222);var b=s.a.memo((function(e){const{branches:a,loading:t,commits:n,path:r,repositoryName:c,onLoadMoreButtonClick:l}=e;return s.a.createElement("div",{className:m.a.Commits},s.a.createElement(o.a,{spinning:t},s.a.createElement("div",{className:m.a.infoWrapper},s.a.createElement(d,{branches:a}),"string"===typeof r?s.a.createElement("div",{className:m.a.path},c,"/",r):null),s.a.createElement("div",{className:m.a.timeLineWrapper},s.a.createElement(_.a,{commits:n})),s.a.createElement("div",{className:m.a.loadMoreButtonWrapper},s.a.createElement(i.a,{disabled:t,loading:t,onClick:l},"\u52a0\u8f7d\u66f4\u65e9\u7684\u63d0\u4ea4\u5386\u53f2"))))})),y=t(23);class f extends r.PureComponent{constructor(e){super(e),this.init=async()=>new Promise(e=>{this.setState({branches:[],commits:[]},()=>e())}),this.loadBranches=async()=>{const{match:{params:{username:e,repository:a}}}=this.props,t=await y.h.branches({username:e,name:a});if(null!==t){const{branches:e}=t;this.setState({branches:e})}},this.loadMoreCommits=async()=>{const{match:{params:{username:e,repository:a,branch:t,path:r}}}=this.props;let s;const{commits:o}=this.state;if(s="string"===typeof r?await y.h.fileCommitHistory({username:e,name:a},r,t,o.length,f.COMMIT_AMOUNT_PER_PAGE):await y.h.commitHistory({username:e,name:a},t,o.length,f.COMMIT_AMOUNT_PER_PAGE),null!==s){const{commits:e}=s;0===e.length?n.a.success({message:"\u5df2\u52a0\u8f7d\u6240\u6709\u63d0\u4ea4\u5386\u53f2"}):this.setState({commits:[...o,...e]})}},this.onLoadMoreButtonClick=async()=>{await this.setState({loading:!0}),await this.loadMoreCommits(),await this.setState({loading:!1})},this.state={branches:[],loading:!1,commits:[]}}async componentDidMount(){await this.init(),this.setState({loading:!0}),await this.loadBranches(),await this.loadMoreCommits(),this.setState({loading:!1})}async componentDidUpdate(e,a,t){const{location:{pathname:n}}=e,{location:{pathname:r}}=this.props;n!==r&&await this.componentDidMount()}render(){const{branches:e,loading:a,commits:t}=this.state,{match:{params:{repository:n,path:r}}}=this.props;return s.a.createElement(b,{onLoadMoreButtonClick:this.onLoadMoreButtonClick,branches:e,loading:a,commits:t,path:r,repositoryName:n})}}f.COMMIT_AMOUNT_PER_PAGE=50;var E=Object(l.f)(f);t.d(a,"default",(function(){return E}))}}]);
//# sourceMappingURL=28.5ada4cfa.chunk.js.map