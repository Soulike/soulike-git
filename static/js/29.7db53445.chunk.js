(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[29],{1002:function(e,t,n){e.exports={TopicPoster:"Style_TopicPoster__3QRvq",commentPosterWrapper:"Style_commentPosterWrapper__7KgUY"}},1029:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(0),o=n.n(a),r=n(1002),i=n.n(r),s=n(927),c=n(925),u=n(252);var l=o.a.memo((function(e){var t=e.title,n=e.onTitleChange,a=e.content,r=e.onContentChange,l=e.onTabChange,m=e.contentToPreview,g=e.submitting,b=e.onSubmitButtonClick,h=e.buttonText;return o.a.createElement(s.a,{size:"small"},o.a.createElement("div",{className:i.a.TopicPoster},o.a.createElement("div",{className:i.a.titleWrapper},o.a.createElement(c.a,{placeholder:"\u6807\u9898\uff08\u5fc5\u586b\uff09",size:"large",autoFocus:!0,value:t,onChange:n,disabled:g,maxLength:255})),o.a.createElement("div",{className:i.a.commentPosterWrapper},o.a.createElement(u.a,{placeholder:"\u8865\u5145\u8bf4\u660e\uff08\u9009\u586b\uff09",content:a,buttonText:h,onContentChange:r,onSubmitButtonClick:b,onTabChange:l,submitting:g,contentToPreview:m}))))}))},1132:function(e,t,n){e.exports={CreateIssue:"Style_CreateIssue__HB1e9"}},1433:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return k}));var a=n(1),o=n.n(a),r=n(3),i=n(12),s=n(14),c=n(34),u=n(33),l=n(0),m=n.n(l),g=n(1132),b=n.n(g),h=n(1029),C=n(972);var p=m.a.memo((function(e){var t=e.title,n=e.submitting,a=e.content,o=e.contentToPreview,r=e.onContentChange,i=e.onSubmitButtonClick,s=e.onTabChange,c=e.onTitleChange;return m.a.createElement("div",{className:b.a.CreateIssue},m.a.createElement(C.a,null,"\u521b\u5efa Issue"),m.a.createElement(h.a,{title:t,content:a,contentToPreview:o,onContentChange:r,onSubmitButtonClick:i,onTabChange:s,onTitleChange:c,submitting:n,buttonText:"\u521b\u5efa Issue"}))})),v=n(62),T=n(63),f=n(336),P=n(27),S=n(167),d=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).onTitleChange=function(e){a.setState({title:e.target.value})},a.onContentChange=function(e){a.setState({content:e.target.value})},a.onTabChange=function(e){if("preview"===e){var t=a.state.content;a.setState({contentToPreview:t})}},a.onSubmitButtonClick=Object(r.a)(o.a.mark((function e(){var t,n,r,i,s,c,u,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a.state,n=t.title,r=t.content,S.b.Repository.issueTitle(n)){e.next=5;break}f.a.error({message:S.a.Repository.ISSUE_TITLE}),e.next=14;break;case 5:return a.setState({submitting:!0}),i=a.props,s=i.match.params,c=s.username,u=s.repositoryName,l=i.history,e.next=9,P.e.add({repositoryUsername:c,repositoryName:u,title:n},{content:r});case 9:if(null===e.sent){e.next=13;break}return f.a.success({message:"Issue \u521b\u5efa\u6210\u529f"}),e.abrupt("return",l.replace(T.Function.generateRepositoryIssuesRoute({username:c,repositoryName:u})));case 13:a.setState({submitting:!1});case 14:case"end":return e.stop()}}),e)}))),a.state={title:"",content:"",contentToPreview:"",submitting:!1},a}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state,t=e.title,n=e.content,a=e.contentToPreview,o=e.submitting;return m.a.createElement(p,{title:t,contentToPreview:a,submitting:o,onTitleChange:this.onTitleChange,onTabChange:this.onTabChange,onSubmitButtonClick:this.onSubmitButtonClick,onContentChange:this.onContentChange,content:n})}}]),n}(l.PureComponent),k=Object(v.j)(d)},969:function(e,t,n){e.exports={PageTitle:"Style_PageTitle__3R_vY"}},972:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(0),o=n.n(a),r=n(969),i=n.n(r);var s=function(e){var t=e.children;return o.a.createElement("h1",{className:i.a.PageTitle},t)}}}]);
//# sourceMappingURL=29.7db53445.chunk.js.map