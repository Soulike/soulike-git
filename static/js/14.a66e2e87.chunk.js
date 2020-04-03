(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[14],{1029:function(e,t,a){e.exports={PageTitle:"Style_PageTitle__3R_vY"}},1031:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(0),n=a.n(r),o=a(1029),s=a.n(o);var c=function(e){var t=e.children;return n.a.createElement("h1",{className:s.a.PageTitle},t)}},1053:function(e,t,a){e.exports={TopicPoster:"Style_TopicPoster__3QRvq",commentPosterWrapper:"Style_commentPosterWrapper__7KgUY"}},1067:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));a(493);var r=a(340),n=(a(492),a(334)),o=a(0),s=a.n(o),c=a(1053),i=a.n(c),u=a(244);var m=s.a.memo((function(e){var t=e.title,a=e.onTitleChange,o=e.content,c=e.onContentChange,m=e.onTabChange,l=e.contentToPreview,p=e.submitting,f=e.onSubmitButtonClick,h=e.buttonText;return s.a.createElement(r.a,{size:"small"},s.a.createElement("div",{className:i.a.TopicPoster},s.a.createElement("div",{className:i.a.titleWrapper},s.a.createElement(n.a,{placeholder:"\u6807\u9898\uff08\u5fc5\u586b\uff09",size:"large",autoFocus:!0,value:t,onChange:a,disabled:p,maxLength:255})),s.a.createElement("div",{className:i.a.commentPosterWrapper},s.a.createElement(u.a,{placeholder:"\u8865\u5145\u8bf4\u660e\uff08\u9009\u586b\uff09",content:o,buttonText:h,onContentChange:c,onSubmitButtonClick:f,onTabChange:m,submitting:p,contentToPreview:l}))))}))},1124:function(e,t,a){e.exports={Compare:"Style_Compare__39h1m",detailWrapper:"Style_detailWrapper__2Azv5",detailTabs:"Style_detailTabs__2XZoZ",pullRequestCommitsWrapper:"Style_pullRequestCommitsWrapper__3A57w",tag:"Style_tag__97nnJ"}},1125:function(e,t,a){e.exports={CompareCard:"Style_CompareCard__tE84-",selectorWrapper:"Style_selectorWrapper__zgG0r",repositoriesSelectorWrapper:"Style_repositoriesSelectorWrapper__2Dvff",isMergeableIndicatorWrapper:"Style_isMergeableIndicatorWrapper__1W1oO"}},1126:function(e,t,a){e.exports={RepositoriesSelector:"Style_RepositoriesSelector__2lAeB",arrow:"Style_arrow__15L4a",target:"Style_target__2vqYE",source:"Style_source__2RAOj",targetRepositorySelectWrapper:"Style_targetRepositorySelectWrapper__DxL1j",sourceRepository:"Style_sourceRepository__1i5O8"}},1127:function(e,t,a){},1128:function(e,t,a){e.exports={PullRequestCommits:"Style_PullRequestCommits__22rzd",loadMoreButtonWrapper:"Style_loadMoreButtonWrapper__3ig_5"}},1129:function(e,t,a){e.exports={PullRequestDiffs:"Style_PullRequestDiffs__2UqKE",loadMoreButtonWrapper:"Style_loadMoreButtonWrapper__2hqbq"}},1220:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return ye}));var r=a(1),n=a.n(r),o=a(3),s=a(9),c=a(10),i=a(17),u=a(18),m=a(0),l=a.n(m),p=(a(108),a(45)),f=(a(258),a(81)),h=(a(179),a(46)),d=(a(336),a(95)),y=a(1124),g=a.n(y),v=a(1031),R=(a(493),a(340)),b=a(1125),C=a.n(b),S=a(53),E=a(463),O=(a(1073),a(1062)),k=a(1126),_=a.n(k),x=a(126),N={name:"arrow-left",theme:"outlined",icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]}},B=a(12),j=function(e,t){return m.createElement(B.a,Object.assign({},e,{ref:t,icon:N}))};j.displayName="ArrowLeftOutlined";var w=m.forwardRef(j);var P=Object(x.f)(l.a.memo((function(e){var t=e.sourceRepositoryBranchNames,a=e.targetRepositoryBranchNames,r=e.onSourceRepositoryBranchSelectorChange,n=e.onTargetRepositoryBranchSelectorChange,o=e.loading,s=e.targetRepositories,c=e.onTargetRepositorySelectorChange,i=e.match.params,u=i.sourceRepositoryUsername,m=i.sourceRepositoryName,p=i.sourceRepositoryBranch,f=i.targetRepositoryBranch,h=i.username,d=i.repository;return l.a.createElement("div",{className:_.a.RepositoriesSelector},l.a.createElement("div",{className:_.a.target},l.a.createElement("div",{className:_.a.targetRepositorySelectWrapper},l.a.createElement(O.a,{loading:o,disabled:o,onChange:c,value:"".concat(h,"/").concat(d)},s.map((function(e){var t=e.username,a=e.name;return l.a.createElement(O.a.Option,{value:"".concat(t,"/").concat(a),key:"".concat(t,"/").concat(a)},t," / ",a)})))),l.a.createElement(O.a,{loading:o,disabled:o,onChange:n,value:f},a.map((function(e){return l.a.createElement(O.a.Option,{value:e,key:e},e)})))),l.a.createElement("div",{className:_.a.arrow},l.a.createElement(w,null)),l.a.createElement("div",{className:_.a.source},l.a.createElement("div",{className:_.a.sourceRepository},u," / ",m),l.a.createElement(O.a,{loading:o,disabled:o,onChange:r,value:p},t.map((function(e){return l.a.createElement(O.a.Option,{value:e,key:e},e)})))))}))),A=a(22),D=a(28),M=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(s.a)(this,a),(r=t.call(this,e)).loadSourceRepositoryBranchNames=Object(o.a)(n.a.mark((function e(){var t,a,o,s,c,i;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.props.match.params,a=t.sourceRepositoryUsername,o=t.sourceRepositoryName,s={username:a,name:o},e.next=4,D.h.branchNames(s);case 4:null!==(c=e.sent)&&(i=c.branchNames,r.setState({sourceRepositoryBranchNames:i}));case 6:case"end":return e.stop()}}),e)}))),r.loadTargetRepositories=Object(o.a)(n.a.mark((function e(){var t,a,o,s,c,i;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.props.match.params,a=t.sourceRepositoryUsername,o=t.sourceRepositoryName,s={username:a,name:o},e.next=4,D.h.forkFrom(s);case 4:null!==(c=e.sent)&&(null!==(i=c.repository)?r.setState({targetRepositories:[i,s]}):r.setState({targetRepositories:[s]}));case 6:case"end":return e.stop()}}),e)}))),r.loadTargetRepositoryBranchNames=Object(o.a)(n.a.mark((function e(){var t,a,o,s,c,i;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.props.match.params,a=t.repository,o=t.username,s={username:o,name:a},e.next=4,D.h.branchNames(s);case 4:null!==(c=e.sent)&&(i=c.branchNames,r.setState({targetRepositoryBranchNames:i}));case 6:case"end":return e.stop()}}),e)}))),r.onTargetRepositorySelectorChange=function(e){var t=r.props,a=t.match.params,n=t.history,o=e.toString().split("/"),s=Object(E.a)(o,2),c=s[0],i=s[1];return n.push(A.Function.generateRepositoryCompareRoute(Object(S.a)({},a,{username:c,repository:i})))},r.onSourceRepositoryBranchSelectorChange=function(e){var t=r.props,a=t.match.params;return t.history.push(A.Function.generateRepositoryCompareRoute(Object(S.a)({},a,{sourceRepositoryBranch:e.toString()})))},r.onTargetRepositoryBranchSelectorChange=function(e){var t=r.props,a=t.match.params;return t.history.push(A.Function.generateRepositoryCompareRoute(Object(S.a)({},a,{targetRepositoryBranch:e.toString()})))},r.state={sourceRepositoryBranchNames:[],targetRepositoryBranchNames:[],targetRepositories:[],loading:!1},r}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=Object(o.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,Promise.all([this.loadSourceRepositoryBranchNames(),this.loadTargetRepositories(),this.loadTargetRepositoryBranchNames()]);case 3:this.setState({loading:!1});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.sourceRepositoryBranchNames,a=e.targetRepositoryBranchNames,r=e.loading,n=e.targetRepositories;return l.a.createElement(P,{sourceRepositoryBranchNames:t,targetRepositoryBranchNames:a,loading:r,targetRepositories:n,onTargetRepositorySelectorChange:this.onTargetRepositorySelectorChange,onSourceRepositoryBranchSelectorChange:this.onSourceRepositoryBranchSelectorChange,onTargetRepositoryBranchSelectorChange:this.onTargetRepositoryBranchSelectorChange})}}]),a}(m.PureComponent),T=Object(x.f)(M),W=(a(338),a(150)),U=a(1127),F=a.n(U),q=a(991);var I=l.a.memo((function(e){var t=e.isMergeable,a=e.loading;return l.a.createElement("div",{className:F.a.IsMergeableIndicator},a?l.a.createElement(W.a,{showIcon:!0,icon:l.a.createElement(q.a,null),type:"info",message:"\u6b63\u5728\u68c0\u67e5\u662f\u5426\u53ef\u81ea\u52a8\u5408\u5e76"}):t?l.a.createElement(W.a,{showIcon:!0,type:"success",message:"\u53ef\u4ee5\u81ea\u52a8\u5408\u5e76"}):l.a.createElement(W.a,{showIcon:!0,type:"error",message:"\u4e0d\u80fd\u81ea\u52a8\u5408\u5e76\uff0c\u4f46\u60a8\u4ecd\u53ef\u521b\u5efa Pull Request"}))})),L=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(s.a)(this,a),(r=t.call(this,e)).loadIsMergeable=Object(o.a)(n.a.mark((function e(){var t,a,o,s,c,i,u,m,l;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.props.match.params,a=t.username,o=t.repository,s=t.targetRepositoryBranch,c=t.sourceRepositoryUsername,i=t.sourceRepositoryName,u=t.sourceRepositoryBranch,e.next=3,D.g.isMergeable({username:c,name:i},u,{username:a,name:o},s);case 3:null!==(m=e.sent)&&(l=m.isMergeable,r.setState({isMergeable:l}));case 5:case"end":return e.stop()}}),e)}))),r.state={isMergeable:!0,loading:!1},r}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=Object(o.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,this.loadIsMergeable();case 3:this.setState({loading:!1});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(o.a)(n.a.mark((function e(t,a,r){var o,s,c,i,u,m,l,p,f,h,d,y,g,v;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=this.props.match.params,s=o.username,c=o.repository,i=o.targetRepositoryBranch,u=o.sourceRepositoryUsername,m=o.sourceRepositoryName,l=o.sourceRepositoryBranch,p=t.match.params,f=p.username,h=p.repository,d=p.targetRepositoryBranch,y=p.sourceRepositoryUsername,g=p.sourceRepositoryName,v=p.sourceRepositoryBranch,s===f&&c===h&&i===d&&u===y&&m===g&&l===v){e.next=5;break}return e.next=5,this.componentDidMount();case 5:case"end":return e.stop()}}),e,this)})));return function(t,a,r){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.isMergeable,a=e.loading;return l.a.createElement(I,{isMergeable:t,loading:a})}}]),a}(m.PureComponent),G=Object(x.f)(L),z=a(1008);var H=Object(x.f)(l.a.memo((function(e){var t=e.match.params,a=t.sourceRepositoryUsername,r=t.sourceRepositoryName,n=t.sourceRepositoryBranch,o=t.username,s=t.repository,c=t.targetRepositoryBranch,i=a===o&&r===s&&n===c;return l.a.createElement(R.a,{size:"small"},l.a.createElement("div",{className:C.a.CompareCard},l.a.createElement("div",{className:C.a.selectorWrapper},l.a.createElement("div",{className:C.a.iconWrapper},l.a.createElement(z.a,null)),l.a.createElement("div",{className:C.a.repositoriesSelectorWrapper},l.a.createElement(T,null))),i?null:l.a.createElement("div",{className:C.a.isMergeableIndicatorWrapper},l.a.createElement(G,null))))}))),J=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement(H,null)}}]),a}(m.PureComponent),K=(a(62),a(29)),Y=a(1067),Z=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(s.a)(this,a),(r=t.call(this,e)).onTitleChange=function(e){r.setState({title:e.target.value})},r.onContentChange=function(e){r.setState({content:e.target.value})},r.onTabChange=function(e){if("preview"===e){var t=r.state.content;r.setState({contentToPreview:t})}},r.onSubmitButtonClick=Object(o.a)(n.a.mark((function e(){var t,a,o,s,c,i,u,m,l,p,f,h;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=r.state,a=t.title,o=t.content,0!==a.length){e.next=5;break}K.a.warn({message:"\u6807\u9898\u4e0d\u80fd\u4e3a\u7a7a"}),e.next=14;break;case 5:return s=r.props,c=s.history,i=s.match.params,u=i.sourceRepositoryUsername,m=i.sourceRepositoryName,l=i.sourceRepositoryBranch,p=i.repository,f=i.username,h=i.targetRepositoryBranch,r.setState({submitting:!0}),e.next=9,D.f.add({title:a,content:o,sourceRepositoryUsername:u,sourceRepositoryName:m,sourceRepositoryBranchName:l,targetRepositoryUsername:f,targetRepositoryName:p,targetRepositoryBranchName:h});case 9:if(null===e.sent){e.next=13;break}return K.a.success({message:"\u521b\u5efa Pull Request \u6210\u529f"}),e.abrupt("return",c.replace(A.Function.generateRepositoryPullRequestsRoute({username:f,repository:p})));case 13:r.setState({submitting:!1});case 14:case"end":return e.stop()}}),e)}))),r.state={title:"",content:"",contentToPreview:"",submitting:!1},r}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state,t=e.title,a=e.content,r=e.contentToPreview,n=e.submitting;return l.a.createElement(Y.a,{title:t,content:a,contentToPreview:r,onTitleChange:this.onTitleChange,onContentChange:this.onContentChange,onTabChange:this.onTabChange,submitting:n,onSubmitButtonClick:this.onSubmitButtonClick,buttonText:"\u521b\u5efa Pull Request"})}}]),a}(m.PureComponent),Q=Object(x.f)(Z),X=a(74),V=(a(73),a(21)),$=a(349),ee=a(1128),te=a.n(ee);var ae=l.a.memo((function(e){var t=e.commits,a=e.loading,r=e.onLoadMoreButtonClick;return l.a.createElement("div",{className:te.a.PullRequestCommits},l.a.createElement(p.a,{spinning:a},l.a.createElement($.a,{commits:t}),l.a.createElement("div",{className:te.a.loadMoreButtonWrapper},l.a.createElement(V.a,{disabled:a,loading:a,onClick:r},"\u52a0\u8f7d\u66f4\u65e9\u7684\u63d0\u4ea4\u5386\u53f2"))))})),re=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(s.a)(this,a),(r=t.call(this,e)).init=Object(o.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){r.setState({commits:[]},(function(){return e()}))})));case 1:case"end":return e.stop()}}),e)}))),r.loadMoreCommits=Object(o.a)(n.a.mark((function e(){var t,o,s,c,i,u,m,l,p,f;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.props.match.params,o=t.sourceRepositoryUsername,s=t.sourceRepositoryName,c=t.sourceRepositoryBranch,i=t.username,u=t.repository,m=t.targetRepositoryBranch,l=r.state.commits,e.next=4,D.h.forkCommitHistory({username:o,name:s},c,{username:i,name:u},m,l.length,a.COMMIT_AMOUNT_PER_PAGE);case 4:null!==(p=e.sent)&&(0===(f=p.commits).length?K.a.success({message:"\u5df2\u52a0\u8f7d\u6240\u6709\u63d0\u4ea4\u5386\u53f2"}):r.setState({commits:[].concat(Object(X.a)(l),Object(X.a)(f))}));case 6:case"end":return e.stop()}}),e)}))),r.onLoadMoreButtonClick=Object(o.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.setState({loading:!0});case 2:return e.next=4,r.loadMoreCommits();case 4:return e.next=6,r.setState({loading:!1});case 6:case"end":return e.stop()}}),e)}))),r.state={commits:[],loading:!1},r}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=Object(o.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.init();case 2:return this.setState({loading:!0}),e.next=5,this.loadMoreCommits();case 5:this.setState({loading:!1});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(o.a)(n.a.mark((function e(t,a,r){var o,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=t.location.pathname,s=this.props.location.pathname,o===s){e.next=5;break}return e.next=5,this.componentDidMount();case 5:case"end":return e.stop()}}),e,this)})));return function(t,a,r){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.commits,a=e.loading;return l.a.createElement(ae,{onLoadMoreButtonClick:this.onLoadMoreButtonClick,commits:t,loading:a})}}]),a}(m.PureComponent);re.COMMIT_AMOUNT_PER_PAGE=50;var ne=Object(x.f)(re),oe=a(348),se=a(1129),ce=a.n(se);var ie=l.a.memo((function(e){var t=e.fileDiffs,a=e.loading,r=e.fileDiffAmount,n=e.onLoadMoreButtonClick;return l.a.createElement("div",{className:ce.a.PullRequestDiffs},l.a.createElement(p.a,{spinning:a},l.a.createElement(oe.a,{fileDiffs:t,fileDiffAmount:r}),l.a.createElement("div",{className:ce.a.loadMoreButtonWrapper},l.a.createElement(V.a,{disabled:a,loading:a,onClick:n,size:"large",type:"primary"},"\u52a0\u8f7d\u66f4\u591a\u6587\u4ef6\u66f4\u6539"))))})),ue=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(s.a)(this,a),(r=t.call(this,e)).init=Object(o.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){r.setState({fileDiffs:[]},(function(){return e()}))})));case 1:case"end":return e.stop()}}),e)}))),r.loadFileDiffAmount=Object(o.a)(n.a.mark((function e(){var t,a,o,s,c,i,u,m,l;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.props.match.params,a=t.sourceRepositoryUsername,o=t.sourceRepositoryName,s=t.sourceRepositoryBranch,c=t.username,i=t.repository,u=t.targetRepositoryBranch,e.next=3,D.h.forkFileDiffAmount({username:a,name:o},s,{username:c,name:i},u);case 3:null!==(m=e.sent)&&(l=m.amount,r.setState({fileDiffAmount:l}));case 5:case"end":return e.stop()}}),e)}))),r.loadMoreFileDiffs=Object(o.a)(n.a.mark((function e(){var t,o,s,c,i,u,m,l,p,f;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.props.match.params,o=t.sourceRepositoryUsername,s=t.sourceRepositoryName,c=t.sourceRepositoryBranch,i=t.username,u=t.repository,m=t.targetRepositoryBranch,l=r.state.fileDiffs,e.next=4,D.h.forkFileDiff({username:o,name:s},c,{username:i,name:u},m,l.length,a.FILE_DIFF_AMOUNT_PER_PAGE);case 4:null!==(p=e.sent)&&(0===(f=p.fileDiffs).length?K.a.success({message:"\u5df2\u52a0\u8f7d\u6240\u6709\u88ab\u4fee\u6539\u6587\u4ef6"}):r.setState({fileDiffs:[].concat(Object(X.a)(l),Object(X.a)(f))}));case 6:case"end":return e.stop()}}),e)}))),r.onLoadMoreButtonClick=Object(o.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.setState({loading:!0}),e.next=3,r.loadMoreFileDiffs();case 3:r.setState({loading:!1});case 4:case"end":return e.stop()}}),e)}))),r.state={fileDiffs:[],fileDiffAmount:0,loading:!1},r}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=Object(o.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.init();case 2:return this.setState({loading:!0}),e.next=5,Promise.all([this.loadFileDiffAmount(),this.loadMoreFileDiffs()]);case 5:this.setState({loading:!1});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(o.a)(n.a.mark((function e(t,a,r){var o,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=this.props.location.pathname,s=t.location.pathname,o===s){e.next=5;break}return e.next=5,this.componentDidMount();case 5:case"end":return e.stop()}}),e,this)})));return function(t,a,r){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.fileDiffs,a=e.loading,r=e.fileDiffAmount;return l.a.createElement(ie,{onLoadMoreButtonClick:this.onLoadMoreButtonClick,fileDiffs:t,loading:a,fileDiffAmount:r})}}]),a}(m.PureComponent);ue.FILE_DIFF_AMOUNT_PER_PAGE=10;var me=Object(x.f)(ue);var le=Object(x.f)(l.a.memo((function(e){var t=e.match.params,a=t.sourceRepositoryUsername,r=t.sourceRepositoryName,n=t.sourceRepositoryBranch,o=t.username,s=t.repository,c=t.targetRepositoryBranch,i=e.commitAmount,u=e.fileDiffAmount,m=e.loading,y=e.hasCommonAncestor,R=a===o&&r===s&&n===c;return l.a.createElement("div",{className:g.a.Compare},l.a.createElement(v.a,null,"\u521b\u5efa Pull Request"),l.a.createElement("div",{className:g.a.compareCardWrapper},l.a.createElement(J,null)),l.a.createElement("div",{className:g.a.detailWrapper},l.a.createElement(p.a,{spinning:m},y?R?l.a.createElement(d.a,{description:"\u5fc5\u987b\u662f\u4e0d\u540c\u5206\u652f\u624d\u53ef\u521b\u5efa Pull Request"}):l.a.createElement("div",{className:g.a.detail},l.a.createElement("div",{className:g.a.commentPosterWrapper},l.a.createElement(Q,null)),l.a.createElement("div",{className:g.a.detailTabs},l.a.createElement(f.a,{defaultActiveKey:"commits",type:"card"},l.a.createElement(f.a.TabPane,{tab:l.a.createElement(l.a.Fragment,null,"\u63d0\u4ea4",l.a.createElement(h.a,{className:g.a.tag},i)),key:"commits"},l.a.createElement("div",{className:g.a.pullRequestCommitsWrapper},l.a.createElement(ne,null))),l.a.createElement(f.a.TabPane,{tab:l.a.createElement(l.a.Fragment,null,"\u4fee\u6539\u7684\u6587\u4ef6",l.a.createElement(h.a,{className:g.a.tag},u)),key:"fileChanged"},l.a.createElement("div",{className:g.a.pullRequestFileDiffsWrapper},l.a.createElement(me,null)))))):l.a.createElement(d.a,{description:"".concat(a,"/").concat(r,":").concat(n," \u4e0e ").concat(o,"/").concat(s,":").concat(c," \u4e4b\u95f4\u6ca1\u6709\u63d0\u4ea4\u5386\u53f2\u5173\u8054")}))))}))),pe=a(94),fe=A.CONFIG.PAGE_ID_TO_ROUTE,he=A.CONFIG.PAGE_ID,de=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(s.a)(this,a),(r=t.call(this,e)).setStatePromise=Object(pe.promisify)(r.setState),r.checkURLParameters=function(){var e=r.props,t=e.match.params,a=t.sourceRepositoryUsername,n=t.sourceRepositoryName,o=t.sourceRepositoryBranch,s=t.targetRepositoryBranch,c=e.history;if(void 0===a||void 0===n||void 0===o||void 0===s)return c.replace(fe[he.NOT_FOUND])},r.loadHasCommonAncestor=Object(o.a)(n.a.mark((function e(){var t,a,o,s,c,i,u,m,l;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=r.props.match.params,a=t.sourceRepositoryUsername,o=t.sourceRepositoryName,s=t.sourceRepositoryBranch,c=t.username,i=t.repository,u=t.targetRepositoryBranch,a!==c||o!==i||s!==u){e.next=6;break}return e.next=4,r.setStatePromise({hasCommonAncestor:!0});case 4:e.next=13;break;case 6:return e.next=8,D.h.hasCommonAncestor({username:a,name:o},s,{username:c,name:i},u);case 8:if(null===(m=e.sent)){e.next=13;break}return l=m.hasCommonAncestor,e.next=13,r.setStatePromise({hasCommonAncestor:l});case 13:case"end":return e.stop()}}),e)}))),r.loadCommitAmount=Object(o.a)(n.a.mark((function e(){var t,a,o,s,c,i,u,m,l;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=r.props.match.params,a=t.sourceRepositoryUsername,o=t.sourceRepositoryName,s=t.sourceRepositoryBranch,c=t.username,i=t.repository,u=t.targetRepositoryBranch,a!==c||o!==i||s!==u){e.next=5;break}r.setState({commitAmount:0}),e.next=9;break;case 5:return e.next=7,D.h.forkCommitAmount({username:a,name:o},s,{username:c,name:i},u);case 7:null!==(m=e.sent)&&(l=m.commitAmount,r.setState({commitAmount:l}));case 9:case"end":return e.stop()}}),e)}))),r.loadFileDiffAmount=Object(o.a)(n.a.mark((function e(){var t,a,o,s,c,i,u,m,l;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=r.props.match.params,a=t.sourceRepositoryUsername,o=t.sourceRepositoryName,s=t.sourceRepositoryBranch,c=t.username,i=t.repository,u=t.targetRepositoryBranch,a!==c||o!==i||s!==u){e.next=5;break}r.setState({fileDiffAmount:0}),e.next=9;break;case 5:return e.next=7,D.h.forkFileDiffAmount({username:a,name:o},s,{username:c,name:i},u);case 7:null!==(m=e.sent)&&(l=m.amount,r.setState({fileDiffAmount:l}));case 9:case"end":return e.stop()}}),e)}))),r.state={commitAmount:0,fileDiffAmount:0,loading:!1,hasCommonAncestor:!1},r}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=Object(o.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.checkURLParameters(),e.next=3,this.setStatePromise({loading:!0});case 3:return e.next=5,this.loadHasCommonAncestor();case 5:if(!this.state.hasCommonAncestor){e.next=9;break}return e.next=9,Promise.all([this.loadCommitAmount(),this.loadFileDiffAmount()]);case 9:return e.next=11,this.setStatePromise({loading:!1});case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(o.a)(n.a.mark((function e(t,a,r){var o,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=this.props.location.pathname,s=t.location.pathname,o===s){e.next=5;break}return e.next=5,this.componentDidMount();case 5:case"end":return e.stop()}}),e,this)})));return function(t,a,r){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.commitAmount,a=e.fileDiffAmount,r=e.loading,n=e.hasCommonAncestor;return l.a.createElement(le,{hasCommonAncestor:n,fileDiffAmount:a,loading:r,commitAmount:t})}}]),a}(m.PureComponent),ye=Object(x.f)(de)}}]);
//# sourceMappingURL=14.a66e2e87.chunk.js.map