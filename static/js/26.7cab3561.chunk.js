(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[26],{684:function(e,a,t){e.exports={BranchMenu:"Style_BranchMenu__2s6dB",branchName:"Style_branchName__YisEW",branchTagWrapper:"Style_branchTagWrapper__Cq2Vq",branchNameInButton:"Style_branchNameInButton__2kCc8"}},694:function(e,a,t){"use strict";t(698);var n=t(699),r=(t(59),t(15)),s=(t(172),t(34)),o=(t(127),t(35)),i=t(0),c=t.n(i),m=t(684),l=t.n(m),h=t(638);var p=c.a.memo((function(e){var a=e.branches,t=e.currentBranch,i=e.onBranchClick,m=!1,p=!0,u=!1,d=void 0;try{for(var y,_=a[Symbol.iterator]();!(p=(y=_.next()).done);p=!0){if(y.value.name===t){m=!0;break}}}catch(b){u=!0,d=b}finally{try{p||null==_.return||_.return()}finally{if(u)throw d}}return c.a.createElement(n.a,{trigger:["click"],overlay:c.a.createElement(s.a,{className:l.a.BranchMenu},a.map((function(e){return c.a.createElement(s.a.Item,{key:e.name,onClick:i(e)},c.a.createElement("div",{className:l.a.branchName,style:e.name===t?{fontWeight:"bold"}:{}},e.name),c.a.createElement("div",{className:l.a.branchTagWrapper},e.isDefault?c.a.createElement(o.a,{color:"blue"},"\u9ed8\u8ba4"):null))})))},c.a.createElement(r.a,null,m?"\u5206\u652f\uff1a":"Tree: ",c.a.createElement("div",{className:l.a.branchNameInButton},t),c.a.createElement(h.a,null)))}));t.d(a,"a",(function(){return p}))},742:function(e,a,t){e.exports={Commits:"Style_Commits__2OB1b",infoWrapper:"Style_infoWrapper__1B-0-",path:"Style_path__3KqyH",timeLineWrapper:"Style_timeLineWrapper__3aFXu",loadMoreButtonWrapper:"Style_loadMoreButtonWrapper__MQq-F"}},802:function(e,a,t){"use strict";t.r(a);t(61);var n=t(26),r=t(0),s=t.n(r),o=(t(93),t(46)),i=(t(59),t(15)),c=t(742),m=t.n(c),l=t(85),h=t(21),p=t(694);class u extends r.PureComponent{constructor(...e){super(...e),this.onBranchClick=e=>()=>{const{history:a,match:{params:{username:t,repository:n,path:r}}}=this.props;a.replace(h.Function.generateRepositoryCommitsRoute({username:t,repository:n,branch:e.name,path:r}))}}render(){const{match:{params:{branch:e}},branches:a}=this.props;let t="";if(void 0===e)for(const n of a)n.isDefault&&(t=n.name);return s.a.createElement(p.a,{branches:a,currentBranch:e||t,onBranchClick:this.onBranchClick})}}var d=Object(l.f)(u),y=t(233);var _=s.a.memo((function(e){const{branches:a,loading:t,commits:n,path:r,repositoryName:c,onLoadMoreButtonClick:l}=e;return s.a.createElement("div",{className:m.a.Commits},s.a.createElement(o.a,{spinning:t},s.a.createElement("div",{className:m.a.infoWrapper},s.a.createElement(d,{branches:a}),"string"===typeof r?s.a.createElement("div",{className:m.a.path},c,"/",r):null),s.a.createElement("div",{className:m.a.timeLineWrapper},s.a.createElement(y.a,{commits:n})),s.a.createElement("div",{className:m.a.loadMoreButtonWrapper},s.a.createElement(i.a,{disabled:t,loading:t,onClick:l},"\u52a0\u8f7d\u66f4\u65e9\u7684\u63d0\u4ea4\u5386\u53f2"))))})),b=t(27);class f extends r.PureComponent{constructor(e){super(e),this.init=async()=>new Promise(e=>{this.setState({branches:[],commits:[]},()=>e())}),this.loadBranches=async()=>{const{match:{params:{username:e,repository:a}}}=this.props,t=await b.h.branches({username:e,name:a});if(null!==t){const{branches:e}=t;this.setState({branches:e})}},this.loadMoreCommits=async()=>{const{match:{params:{username:e,repository:a,branch:t,path:r}}}=this.props;let s;const{commits:o}=this.state;if(s="string"===typeof r?await b.h.fileCommitHistory({username:e,name:a},r,t,o.length,f.COMMIT_AMOUNT_PER_PAGE):await b.h.commitHistory({username:e,name:a},t,o.length,f.COMMIT_AMOUNT_PER_PAGE),null!==s){const{commits:e}=s;0===e.length?n.a.success({message:"\u5df2\u52a0\u8f7d\u6240\u6709\u63d0\u4ea4\u5386\u53f2"}):this.setState({commits:[...o,...e]})}},this.onLoadMoreButtonClick=async()=>{await this.setState({loading:!0}),await this.loadMoreCommits(),await this.setState({loading:!1})},this.state={branches:[],loading:!1,commits:[]}}async componentDidMount(){await this.init(),this.setState({loading:!0}),await this.loadBranches(),await this.loadMoreCommits(),this.setState({loading:!1})}async componentDidUpdate(e,a,t){const{location:{pathname:n}}=e,{location:{pathname:r}}=this.props;n!==r&&await this.componentDidMount()}render(){const{branches:e,loading:a,commits:t}=this.state,{match:{params:{repository:n,path:r}}}=this.props;return s.a.createElement(_,{onLoadMoreButtonClick:this.onLoadMoreButtonClick,branches:e,loading:a,commits:t,path:r,repositoryName:n})}}f.COMMIT_AMOUNT_PER_PAGE=50;var E=Object(l.f)(f);t.d(a,"default",(function(){return E}))}}]);
//# sourceMappingURL=26.7cab3561.chunk.js.map