(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[17],{1037:function(e,t,r){e.exports={Compare:"Style_Compare__39h1m",detailWrapper:"Style_detailWrapper__2Azv5",detailTabs:"Style_detailTabs__2XZoZ",pullRequestCommitsWrapper:"Style_pullRequestCommitsWrapper__3A57w",tag:"Style_tag__97nnJ"}},1038:function(e,t,r){e.exports={CompareCard:"Style_CompareCard__tE84-",selectorWrapper:"Style_selectorWrapper__zgG0r",repositoriesSelectorWrapper:"Style_repositoriesSelectorWrapper__2Dvff",isMergeableIndicatorWrapper:"Style_isMergeableIndicatorWrapper__1W1oO"}},1039:function(e,t,r){e.exports={RepositoriesSelector:"Style_RepositoriesSelector__2lAeB",arrow:"Style_arrow__15L4a",target:"Style_target__2vqYE",source:"Style_source__2RAOj",targetRepositorySelectWrapper:"Style_targetRepositorySelectWrapper__DxL1j",sourceRepository:"Style_sourceRepository__1i5O8"}},1040:function(e,t,r){},1041:function(e,t,r){e.exports={PullRequestCommits:"Style_PullRequestCommits__22rzd",loadMoreButtonWrapper:"Style_loadMoreButtonWrapper__3ig_5"}},1042:function(e,t,r){e.exports={PullRequestDiffs:"Style_PullRequestDiffs__2UqKE",loadMoreButtonWrapper:"Style_loadMoreButtonWrapper__2hqbq"}},1298:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return Re}));var a=r(2),n=r.n(a),o=r(6),s=r(14),c=r(15),i=r(39),u=r(38),p=r(0),m=r.n(p),l=r(1037),h=r.n(l),f=r(883),d=r(1038),j=r.n(d),b=r(848),y=r(23),g=r(60),v=r(1039),O=r.n(v),x=r(1003),R=r(56),C={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"},S=r(12),N=function(e,t){return p.createElement(S.a,Object.assign({},e,{ref:t,icon:C}))};N.displayName="ArrowLeftOutlined";var _=p.forwardRef(N),k=r(1);function B(e){var t=e.sourceRepositoryBranchNames,r=e.targetRepositoryBranchNames,a=e.onSourceRepositoryBranchSelectorChange,n=e.onTargetRepositoryBranchSelectorChange,o=e.loading,s=e.targetRepositories,c=e.onTargetRepositorySelectorChange,i=e.match.params,u=i.sourceRepositoryUsername,p=i.sourceRepositoryName,m=i.sourceRepositoryBranch,l=i.targetRepositoryBranch,h=i.username,f=i.repositoryName;return Object(k.jsxs)("div",{className:O.a.RepositoriesSelector,children:[Object(k.jsxs)("div",{className:O.a.target,children:[Object(k.jsx)("div",{className:O.a.targetRepositorySelectWrapper,children:Object(k.jsx)(x.a,{loading:o,disabled:o,onChange:c,value:"".concat(h,"/").concat(f),children:s.map((function(e){var t=e.username,r=e.name;return Object(k.jsxs)(x.a.Option,{value:"".concat(t,"/").concat(r),children:[t," / ",r]},"".concat(t,"/").concat(r))}))})}),Object(k.jsx)(x.a,{loading:o,disabled:o,onChange:n,value:l,children:r.map((function(e){return Object(k.jsx)(x.a.Option,{value:e,children:e},e)}))})]}),Object(k.jsx)("div",{className:O.a.arrow,children:Object(k.jsx)(_,{})}),Object(k.jsxs)("div",{className:O.a.source,children:[Object(k.jsxs)("div",{className:O.a.sourceRepository,children:[u," / ",p]}),Object(k.jsx)(x.a,{loading:o,disabled:o,onChange:a,value:m,children:t.map((function(e){return Object(k.jsx)(x.a.Option,{value:e,children:e},e)}))})]})]})}var w=Object(R.j)(m.a.memo(B)),P=r(57),A=r(32),D=function(e){Object(i.a)(r,e);var t=Object(u.a)(r);function r(e){var a;return Object(s.a)(this,r),(a=t.call(this,e)).loadSourceRepositoryBranchNames=Object(o.a)(n.a.mark((function e(){var t,r,o,s,c,i;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.match.params,r=t.sourceRepositoryUsername,o=t.sourceRepositoryName,s={username:r,name:o},e.next=4,A.j.branchNames(s);case 4:null!==(c=e.sent)&&(i=c.branchNames,a.setState({sourceRepositoryBranchNames:i}));case 6:case"end":return e.stop()}}),e)}))),a.loadTargetRepositories=Object(o.a)(n.a.mark((function e(){var t,r,o,s,c,i;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.match.params,r=t.sourceRepositoryUsername,o=t.sourceRepositoryName,s={username:r,name:o},e.next=4,A.j.forkFrom(s);case 4:null!==(c=e.sent)&&(null!==(i=c.repository)?a.setState({targetRepositories:[i,s]}):a.setState({targetRepositories:[s]}));case 6:case"end":return e.stop()}}),e)}))),a.loadTargetRepositoryBranchNames=Object(o.a)(n.a.mark((function e(){var t,r,o,s,c,i;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.match.params,r=t.repositoryName,o=t.username,s={username:o,name:r},e.next=4,A.j.branchNames(s);case 4:null!==(c=e.sent)&&(i=c.branchNames,a.setState({targetRepositoryBranchNames:i}));case 6:case"end":return e.stop()}}),e)}))),a.onTargetRepositorySelectorChange=function(e){var t=a.props,r=t.match.params,n=t.history,o=e.toString().split("/"),s=Object(g.a)(o,2),c=s[0],i=s[1];return n.push(P.Function.generateRepositoryCompareRoute(Object(y.a)(Object(y.a)({},r),{},{username:c,repositoryName:i})))},a.onSourceRepositoryBranchSelectorChange=function(e){var t=a.props,r=t.match.params;return t.history.push(P.Function.generateRepositoryCompareRoute(Object(y.a)(Object(y.a)({},r),{},{sourceRepositoryBranch:e.toString()})))},a.onTargetRepositoryBranchSelectorChange=function(e){var t=a.props,r=t.match.params;return t.history.push(P.Function.generateRepositoryCompareRoute(Object(y.a)(Object(y.a)({},r),{},{targetRepositoryBranch:e.toString()})))},a.state={sourceRepositoryBranchNames:[],targetRepositoryBranchNames:[],targetRepositories:[],loading:!1},a}return Object(c.a)(r,[{key:"componentDidMount",value:function(){var e=Object(o.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,Promise.all([this.loadSourceRepositoryBranchNames(),this.loadTargetRepositories(),this.loadTargetRepositoryBranchNames()]);case 3:this.setState({loading:!1});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.sourceRepositoryBranchNames,r=e.targetRepositoryBranchNames,a=e.loading,n=e.targetRepositories;return Object(k.jsx)(w,{sourceRepositoryBranchNames:t,targetRepositoryBranchNames:r,loading:a,targetRepositories:n,onTargetRepositorySelectorChange:this.onTargetRepositorySelectorChange,onSourceRepositoryBranchSelectorChange:this.onSourceRepositoryBranchSelectorChange,onTargetRepositoryBranchSelectorChange:this.onTargetRepositoryBranchSelectorChange})}}]),r}(p.PureComponent),T=Object(R.j)(D),M=r(1040),U=r.n(M),W=r(851),F=r(147);function q(e){var t=e.isMergeable,r=e.loading;return Object(k.jsx)("div",{className:U.a.IsMergeableIndicator,children:r?Object(k.jsx)(W.a,{showIcon:!0,icon:Object(k.jsx)(F.a,{}),type:"info",message:"\u6b63\u5728\u68c0\u67e5\u662f\u5426\u53ef\u81ea\u52a8\u5408\u5e76"}):t?Object(k.jsx)(W.a,{showIcon:!0,type:"success",message:"\u53ef\u4ee5\u81ea\u52a8\u5408\u5e76"}):Object(k.jsx)(W.a,{showIcon:!0,type:"error",message:"\u4e0d\u80fd\u81ea\u52a8\u5408\u5e76\uff0c\u4f46\u60a8\u4ecd\u53ef\u521b\u5efa Pull Request"})})}var L=m.a.memo(q),E=function(e){Object(i.a)(r,e);var t=Object(u.a)(r);function r(e){var a;return Object(s.a)(this,r),(a=t.call(this,e)).loadIsMergeable=Object(o.a)(n.a.mark((function e(){var t,r,o,s,c,i,u,p,m;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.match.params,r=t.username,o=t.repositoryName,s=t.targetRepositoryBranch,c=t.sourceRepositoryUsername,i=t.sourceRepositoryName,u=t.sourceRepositoryBranch,e.next=3,A.i.isMergeable({username:c,name:i},u,{username:r,name:o},s);case 3:null!==(p=e.sent)&&(m=p.isMergeable,a.setState({isMergeable:m}));case 5:case"end":return e.stop()}}),e)}))),a.state={isMergeable:!0,loading:!1},a}return Object(c.a)(r,[{key:"componentDidMount",value:function(){var e=Object(o.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,this.loadIsMergeable();case 3:this.setState({loading:!1});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(o.a)(n.a.mark((function e(t,r,a){var o,s,c,i,u,p,m,l,h,f,d,j,b,y;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=this.props.match.params,s=o.username,c=o.repositoryName,i=o.targetRepositoryBranch,u=o.sourceRepositoryUsername,p=o.sourceRepositoryName,m=o.sourceRepositoryBranch,l=t.match.params,h=l.username,f=l.repositoryName,d=l.targetRepositoryBranch,j=l.sourceRepositoryUsername,b=l.sourceRepositoryName,y=l.sourceRepositoryBranch,s===h&&c===f&&i===d&&u===j&&p===b&&m===y){e.next=5;break}return e.next=5,this.componentDidMount();case 5:case"end":return e.stop()}}),e,this)})));return function(t,r,a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.isMergeable,r=e.loading;return Object(k.jsx)(L,{isMergeable:t,loading:r})}}]),r}(p.PureComponent),I=Object(R.j)(E),z=r(867);function G(e){var t=e.match.params,r=t.sourceRepositoryUsername,a=t.sourceRepositoryName,n=t.sourceRepositoryBranch,o=t.username,s=t.repositoryName,c=t.targetRepositoryBranch,i=r===o&&a===s&&n===c;return Object(k.jsx)(b.a,{size:"small",children:Object(k.jsxs)("div",{className:j.a.CompareCard,children:[Object(k.jsxs)("div",{className:j.a.selectorWrapper,children:[Object(k.jsx)("div",{className:j.a.iconWrapper,children:Object(k.jsx)(z.a,{})}),Object(k.jsx)("div",{className:j.a.repositoriesSelectorWrapper,children:Object(k.jsx)(T,{})})]}),i?null:Object(k.jsx)("div",{className:j.a.isMergeableIndicatorWrapper,children:Object(k.jsx)(I,{})})]})})}var H=Object(R.j)(m.a.memo(G)),J=function(e){Object(i.a)(r,e);var t=Object(u.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(c.a)(r,[{key:"render",value:function(){return Object(k.jsx)(H,{})}}]),r}(p.PureComponent),K=r(942),Y=r(327),Q=r(154),Z=function(e){Object(i.a)(r,e);var t=Object(u.a)(r);function r(e){var a;return Object(s.a)(this,r),(a=t.call(this,e)).onTitleChange=function(e){a.setState({title:e.target.value})},a.onContentChange=function(e){a.setState({content:e.target.value})},a.onTabChange=function(e){if("preview"===e){var t=a.state.content;a.setState({contentToPreview:t})}},a.onSubmitButtonClick=Object(o.a)(n.a.mark((function e(){var t,r,o,s,c,i,u,p,m,l,h,f;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a.state,r=t.title,o=t.content,Q.b.Repository.pullRequestTitle(r)){e.next=5;break}Y.a.warn({message:Q.a.Repository.PULL_REQUEST_TITLE}),e.next=14;break;case 5:return s=a.props,c=s.history,i=s.match.params,u=i.sourceRepositoryUsername,p=i.sourceRepositoryName,m=i.sourceRepositoryBranch,l=i.repositoryName,h=i.username,f=i.targetRepositoryBranch,a.setState({submitting:!0}),e.next=9,A.h.add({title:r,content:o,sourceRepositoryUsername:u,sourceRepositoryName:p,sourceRepositoryBranchName:m,targetRepositoryUsername:h,targetRepositoryName:l,targetRepositoryBranchName:f});case 9:if(null===e.sent){e.next=13;break}return Y.a.success({message:"\u521b\u5efa Pull Request \u6210\u529f"}),e.abrupt("return",c.replace(P.Function.generateRepositoryPullRequestsRoute({username:h,repositoryName:l})));case 13:a.setState({submitting:!1});case 14:case"end":return e.stop()}}),e)}))),a.state={title:"",content:"",contentToPreview:"",submitting:!1},a}return Object(c.a)(r,[{key:"render",value:function(){var e=this.state,t=e.title,r=e.content,a=e.contentToPreview,n=e.submitting;return Object(k.jsx)(K.a,{title:t,content:r,contentToPreview:a,onTitleChange:this.onTitleChange,onContentChange:this.onContentChange,onTabChange:this.onTabChange,submitting:n,onSubmitButtonClick:this.onSubmitButtonClick,buttonText:"\u521b\u5efa Pull Request"})}}]),r}(p.PureComponent),X=Object(R.j)(Z),V=r(836),$=r(183),ee=r(325),te=r(852),re=r(88),ae=r(335),ne=r(108),oe=r(1041),se=r.n(oe);function ce(e){var t=e.commits,r=e.loading,a=e.sourceRepository,n=e.onLoadMoreButtonClick;return Object(k.jsx)("div",{className:se.a.PullRequestCommits,children:Object(k.jsxs)(V.a,{spinning:r,children:[Object(k.jsx)(ae.a,{commits:t,repository:a}),Object(k.jsx)("div",{className:se.a.loadMoreButtonWrapper,children:Object(k.jsx)(ne.a,{disabled:r,loading:r,onClick:n,children:"\u52a0\u8f7d\u66f4\u65e9\u7684\u63d0\u4ea4\u5386\u53f2"})})]})})}var ie=m.a.memo(ce),ue=function(e){Object(i.a)(r,e);var t=Object(u.a)(r);function r(e){var a;return Object(s.a)(this,r),(a=t.call(this,e)).init=Object(o.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){a.setState({commits:[]},(function(){return e()}))})));case 1:case"end":return e.stop()}}),e)}))),a.loadMoreCommits=Object(o.a)(n.a.mark((function e(){var t,o,s,c,i,u,p,m,l,h;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.match.params,o=t.sourceRepositoryUsername,s=t.sourceRepositoryName,c=t.sourceRepositoryBranch,i=t.username,u=t.repositoryName,p=t.targetRepositoryBranch,m=a.state.commits,e.next=4,A.j.forkCommitHistory({username:o,name:s},c,{username:i,name:u},p,m.length,r.COMMIT_AMOUNT_PER_PAGE);case 4:null!==(l=e.sent)&&(0===(h=l.commits).length?Y.a.success({message:"\u5df2\u52a0\u8f7d\u6240\u6709\u63d0\u4ea4\u5386\u53f2"}):a.setState({commits:[].concat(Object(re.a)(m),Object(re.a)(h))}));case 6:case"end":return e.stop()}}),e)}))),a.onLoadMoreButtonClick=Object(o.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.setState({loading:!0});case 2:return e.next=4,a.loadMoreCommits();case 4:return e.next=6,a.setState({loading:!1});case 6:case"end":return e.stop()}}),e)}))),a.state={commits:[],loading:!1},a}return Object(c.a)(r,[{key:"componentDidMount",value:function(){var e=Object(o.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.init();case 2:return this.setState({loading:!0}),e.next=5,this.loadMoreCommits();case 5:this.setState({loading:!1});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(o.a)(n.a.mark((function e(t,r,a){var o,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=t.location.pathname,s=this.props.location.pathname,o===s){e.next=5;break}return e.next=5,this.componentDidMount();case 5:case"end":return e.stop()}}),e,this)})));return function(t,r,a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.commits,r=e.loading,a=this.props.match.params,n=a.sourceRepositoryUsername,o=a.sourceRepositoryName;return Object(k.jsx)(ie,{onLoadMoreButtonClick:this.onLoadMoreButtonClick,commits:t,loading:r,sourceRepository:{username:n,name:o}})}}]),r}(p.PureComponent);ue.COMMIT_AMOUNT_PER_PAGE=50;var pe=Object(R.j)(ue),me=r(334),le=r(1042),he=r.n(le);function fe(e){var t=e.fileDiffs,r=e.loading,a=e.fileDiffAmount,n=e.onLoadMoreButtonClick;return Object(k.jsx)("div",{className:he.a.PullRequestDiffs,children:Object(k.jsxs)(V.a,{spinning:r,children:[Object(k.jsx)(me.a,{fileDiffs:t,fileDiffAmount:a}),Object(k.jsx)("div",{className:he.a.loadMoreButtonWrapper,children:Object(k.jsx)(ne.a,{disabled:r,loading:r,onClick:n,size:"large",type:"primary",children:"\u52a0\u8f7d\u66f4\u591a\u6587\u4ef6\u66f4\u6539"})})]})})}var de=m.a.memo(fe),je=function(e){Object(i.a)(r,e);var t=Object(u.a)(r);function r(e){var a;return Object(s.a)(this,r),(a=t.call(this,e)).init=Object(o.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){a.setState({fileDiffs:[]},(function(){return e()}))})));case 1:case"end":return e.stop()}}),e)}))),a.loadFileDiffAmount=Object(o.a)(n.a.mark((function e(){var t,r,o,s,c,i,u,p,m;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.match.params,r=t.sourceRepositoryUsername,o=t.sourceRepositoryName,s=t.sourceRepositoryBranch,c=t.username,i=t.repositoryName,u=t.targetRepositoryBranch,e.next=3,A.j.forkFileDiffAmount({username:r,name:o},s,{username:c,name:i},u);case 3:null!==(p=e.sent)&&(m=p.amount,a.setState({fileDiffAmount:m}));case 5:case"end":return e.stop()}}),e)}))),a.loadMoreFileDiffs=Object(o.a)(n.a.mark((function e(){var t,o,s,c,i,u,p,m,l,h;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.match.params,o=t.sourceRepositoryUsername,s=t.sourceRepositoryName,c=t.sourceRepositoryBranch,i=t.username,u=t.repositoryName,p=t.targetRepositoryBranch,m=a.state.fileDiffs,e.next=4,A.j.forkFileDiff({username:o,name:s},c,{username:i,name:u},p,m.length,r.FILE_DIFF_AMOUNT_PER_PAGE);case 4:null!==(l=e.sent)&&(0===(h=l.fileDiffs).length?Y.a.success({message:"\u5df2\u52a0\u8f7d\u6240\u6709\u88ab\u4fee\u6539\u6587\u4ef6"}):a.setState({fileDiffs:[].concat(Object(re.a)(m),Object(re.a)(h))}));case 6:case"end":return e.stop()}}),e)}))),a.onLoadMoreButtonClick=Object(o.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({loading:!0}),e.next=3,a.loadMoreFileDiffs();case 3:a.setState({loading:!1});case 4:case"end":return e.stop()}}),e)}))),a.state={fileDiffs:[],fileDiffAmount:0,loading:!1},a}return Object(c.a)(r,[{key:"componentDidMount",value:function(){var e=Object(o.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.init();case 2:return this.setState({loading:!0}),e.next=5,Promise.all([this.loadFileDiffAmount(),this.loadMoreFileDiffs()]);case 5:this.setState({loading:!1});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(o.a)(n.a.mark((function e(t,r,a){var o,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=this.props.location.pathname,s=t.location.pathname,o===s){e.next=5;break}return e.next=5,this.componentDidMount();case 5:case"end":return e.stop()}}),e,this)})));return function(t,r,a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.fileDiffs,r=e.loading,a=e.fileDiffAmount;return Object(k.jsx)(de,{onLoadMoreButtonClick:this.onLoadMoreButtonClick,fileDiffs:t,loading:r,fileDiffAmount:a})}}]),r}(p.PureComponent);je.FILE_DIFF_AMOUNT_PER_PAGE=10;var be=Object(R.j)(je);function ye(e){var t=e.match.params,r=t.sourceRepositoryUsername,a=t.sourceRepositoryName,n=t.sourceRepositoryBranch,o=t.username,s=t.repositoryName,c=t.targetRepositoryBranch,i=e.commitAmount,u=e.fileDiffAmount,p=e.loading,m=e.hasCommonAncestor,l=r===o&&a===s&&n===c;return Object(k.jsxs)("div",{className:h.a.Compare,children:[Object(k.jsx)(f.a,{children:"\u521b\u5efa Pull Request"}),Object(k.jsx)("div",{className:h.a.compareCardWrapper,children:Object(k.jsx)(J,{})}),Object(k.jsx)("div",{className:h.a.detailWrapper,children:Object(k.jsx)(V.a,{spinning:p,children:m?l?Object(k.jsx)($.a,{description:"\u5fc5\u987b\u662f\u4e0d\u540c\u5206\u652f\u624d\u53ef\u521b\u5efa Pull Request"}):Object(k.jsxs)("div",{className:h.a.detail,children:[Object(k.jsx)("div",{className:h.a.commentPosterWrapper,children:Object(k.jsx)(X,{})}),Object(k.jsx)("div",{className:h.a.detailTabs,children:Object(k.jsxs)(ee.a,{defaultActiveKey:"commits",type:"card",children:[Object(k.jsx)(ee.a.TabPane,{tab:Object(k.jsxs)(k.Fragment,{children:["\u63d0\u4ea4",Object(k.jsx)(te.a,{className:h.a.tag,children:i})]}),children:Object(k.jsx)("div",{className:h.a.pullRequestCommitsWrapper,children:Object(k.jsx)(pe,{})})},"commits"),Object(k.jsx)(ee.a.TabPane,{tab:Object(k.jsxs)(k.Fragment,{children:["\u4fee\u6539\u7684\u6587\u4ef6",Object(k.jsx)(te.a,{className:h.a.tag,children:u})]}),children:Object(k.jsx)("div",{className:h.a.pullRequestFileDiffsWrapper,children:Object(k.jsx)(be,{})})},"fileChanged")]})})]}):Object(k.jsx)($.a,{description:"".concat(r,"/").concat(a,":").concat(n," \u4e0e ").concat(o,"/").concat(s,":").concat(c," \u4e4b\u95f4\u6ca1\u6709\u63d0\u4ea4\u5386\u53f2\u5173\u8054")})})})]})}var ge=Object(R.j)(m.a.memo(ye)),ve=r(102),Oe=r(3),xe=function(e){Object(i.a)(r,e);var t=Object(u.a)(r);function r(e){var a;return Object(s.a)(this,r),(a=t.call(this,e)).setStatePromise=Object(ve.promisify)(a.setState),a.checkURLParameters=function(){var e=a.props,t=e.match.params,r=t.sourceRepositoryUsername,n=t.sourceRepositoryName,o=t.sourceRepositoryBranch,s=t.targetRepositoryBranch,c=e.history;if(void 0===r||void 0===n||void 0===o||void 0===s)return c.replace(Oe.d[Oe.b.NOT_FOUND])},a.loadHasCommonAncestor=Object(o.a)(n.a.mark((function e(){var t,r,o,s,c,i,u,p,m;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a.props.match.params,r=t.sourceRepositoryUsername,o=t.sourceRepositoryName,s=t.sourceRepositoryBranch,c=t.username,i=t.repositoryName,u=t.targetRepositoryBranch,r!==c||o!==i||s!==u){e.next=6;break}return e.next=4,a.setStatePromise({hasCommonAncestor:!0});case 4:e.next=13;break;case 6:return e.next=8,A.j.hasCommonAncestor({username:r,name:o},s,{username:c,name:i},u);case 8:if(null===(p=e.sent)){e.next=13;break}return m=p.hasCommonAncestor,e.next=13,a.setStatePromise({hasCommonAncestor:m});case 13:case"end":return e.stop()}}),e)}))),a.loadCommitAmount=Object(o.a)(n.a.mark((function e(){var t,r,o,s,c,i,u,p,m;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a.props.match.params,r=t.sourceRepositoryUsername,o=t.sourceRepositoryName,s=t.sourceRepositoryBranch,c=t.username,i=t.repositoryName,u=t.targetRepositoryBranch,r!==c||o!==i||s!==u){e.next=5;break}a.setState({commitAmount:0}),e.next=9;break;case 5:return e.next=7,A.j.forkCommitAmount({username:r,name:o},s,{username:c,name:i},u);case 7:null!==(p=e.sent)&&(m=p.commitAmount,a.setState({commitAmount:m}));case 9:case"end":return e.stop()}}),e)}))),a.loadFileDiffAmount=Object(o.a)(n.a.mark((function e(){var t,r,o,s,c,i,u,p,m;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a.props.match.params,r=t.sourceRepositoryUsername,o=t.sourceRepositoryName,s=t.sourceRepositoryBranch,c=t.username,i=t.repositoryName,u=t.targetRepositoryBranch,r!==c||o!==i||s!==u){e.next=5;break}a.setState({fileDiffAmount:0}),e.next=9;break;case 5:return e.next=7,A.j.forkFileDiffAmount({username:r,name:o},s,{username:c,name:i},u);case 7:null!==(p=e.sent)&&(m=p.amount,a.setState({fileDiffAmount:m}));case 9:case"end":return e.stop()}}),e)}))),a.state={commitAmount:0,fileDiffAmount:0,loading:!1,hasCommonAncestor:!1},a}return Object(c.a)(r,[{key:"componentDidMount",value:function(){var e=Object(o.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.checkURLParameters(),e.next=3,this.setStatePromise({loading:!0});case 3:return e.next=5,this.loadHasCommonAncestor();case 5:if(!this.state.hasCommonAncestor){e.next=9;break}return e.next=9,Promise.all([this.loadCommitAmount(),this.loadFileDiffAmount()]);case 9:return e.next=11,this.setStatePromise({loading:!1});case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(o.a)(n.a.mark((function e(t,r,a){var o,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=this.props.location.pathname,s=t.location.pathname,o===s){e.next=5;break}return e.next=5,this.componentDidMount();case 5:case"end":return e.stop()}}),e,this)})));return function(t,r,a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.commitAmount,r=e.fileDiffAmount,a=e.loading,n=e.hasCommonAncestor;return Object(k.jsx)(ge,{hasCommonAncestor:n,fileDiffAmount:r,loading:a,commitAmount:t})}}]),r}(p.PureComponent),Re=Object(R.j)(xe)},880:function(e,t,r){e.exports={PageTitle:"Style_PageTitle__3R_vY"}},883:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));r(0);var a=r(880),n=r.n(a),o=r(1);var s=function(e){var t=e.children;return Object(o.jsx)("h1",{className:n.a.PageTitle,children:t})}},914:function(e,t,r){e.exports={TopicPoster:"Style_TopicPoster__3QRvq",commentPosterWrapper:"Style_commentPosterWrapper__7KgUY"}},942:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var a=r(0),n=r.n(a),o=r(914),s=r.n(o),c=r(848),i=r(843),u=r(245),p=r(1);function m(e){var t=e.title,r=e.onTitleChange,a=e.content,n=e.onContentChange,o=e.onTabChange,m=e.contentToPreview,l=e.submitting,h=e.onSubmitButtonClick,f=e.buttonText;return Object(p.jsx)(c.a,{size:"small",children:Object(p.jsxs)("div",{className:s.a.TopicPoster,children:[Object(p.jsx)("div",{className:s.a.titleWrapper,children:Object(p.jsx)(i.a,{placeholder:"\u6807\u9898\uff08\u5fc5\u586b\uff09",size:"large",autoFocus:!0,value:t,onChange:r,disabled:l,maxLength:255})}),Object(p.jsx)("div",{className:s.a.commentPosterWrapper,children:Object(p.jsx)(u.a,{placeholder:"\u8865\u5145\u8bf4\u660e\uff08\u9009\u586b\uff09",content:a,buttonText:f,onContentChange:n,onSubmitButtonClick:h,onTabChange:o,submitting:l,contentToPreview:m})})]})})}var l=n.a.memo(m)}}]);
//# sourceMappingURL=17.7b44af5e.chunk.js.map