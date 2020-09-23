(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[31],{1125:function(e,t,a){e.exports={Issues:"Style_Issues__wxh9c",list:"Style_list__1i8bQ",header:"Style_header__2KaVh",statusFilter:"Style_statusFilter__3zE2w",tag:"Style_tag__3Xw8C",pageButtonWrapper:"Style_pageButtonWrapper__P17fr"}},1126:function(e,t,a){e.exports={IssueList:"Style_IssueList__3_LLo",emptyWrapper:"Style_emptyWrapper__3X6HT"}},1127:function(e,t,a){e.exports={Issue:"Style_Issue__3wQKl",titleWrapper:"Style_titleWrapper__3c3D9",iconWrapper:"Style_iconWrapper__3QVF5",info:"Style_info__2PXRc"}},1390:function(e,t,a){"use strict";var n=a(0),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"ellipsis",theme:"outlined"},s=a(24),o=function(e,t){return n.createElement(s.a,Object.assign({},e,{ref:t,icon:r}))};o.displayName="EllipsisOutlined";t.a=n.forwardRef(o)},1413:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return Z}));var n=a(1),r=a.n(n),s=a(4),o=a(16),u=a(18),c=a(43),i=a(42),l=a(0),m=a.n(l),p=a(1125),d=a.n(p),E=a(917),f=a(931),h=a(116),v=a(930),_=a(26),N=a(67),S=a(68),g=a(29),P=a(1390),b=a(956),y=a(955),k=a(936),x=a(1126),O=a.n(x),A=a(1127),w=a.n(A),C=a(86),I=a(266);function B(e){switch(e){case g.a.CLOSED:return"red";case g.a.OPEN:return"green"}}var R=m.a.memo((function(e){var t=e.issue,a=t.status,n=t.no,r=t.title,s=t.repositoryUsername,o=t.repositoryName,u=t.username,c=t.creationTime;return m.a.createElement("div",{className:w.a.Issue},m.a.createElement("div",{className:w.a.titleWrapper},m.a.createElement("div",{className:w.a.iconWrapper,style:{color:B(a)}},function(e){switch(e){case g.a.CLOSED:return m.a.createElement(y.a,null);case g.a.OPEN:return m.a.createElement(b.a,null)}}(a)),m.a.createElement(I.a,{to:S.Function.generateRepositoryIssueRoute({username:s,repositoryName:o,no:n.toString()})},m.a.createElement("div",{className:w.a.title},r))),m.a.createElement("div",{className:w.a.info},"#",n," \u7531 ",m.a.createElement("b",null,u)," \u4e8e ",C.b.parseTimestampToDifference(c)," \u521b\u5efa"))})),W=a(195);var j=m.a.memo((function(e){var t=e.issues;return m.a.createElement("div",{className:O.a.IssueList},t.length>0?t.map((function(e){return m.a.createElement(R,{issue:e,key:e.id})})):m.a.createElement("div",{className:O.a.emptyWrapper},m.a.createElement(W.a,{description:"\u6ca1\u6709\u7b26\u5408\u6761\u4ef6\u7684 Issue"})))}));var L=m.a.memo(Object(N.i)((function(e){var t=e.match.params,a=t.username,n=t.repositoryName,r=e.loading,s=e.openAmount,o=e.closedAmount,u=e.currentStatus,c=e.onStatusButtonClick,i=e.currentPageNumber,l=e.onPrevButtonClick,p=e.onNextButtonClick,N=e.noNextPage,x=e.issues;return m.a.createElement("div",{className:d.a.Issues},m.a.createElement(E.a,{spinning:r},m.a.createElement("div",{className:d.a.list},m.a.createElement("div",{className:d.a.header},m.a.createElement("div",{className:d.a.statusFilter},m.a.createElement(f.b,{size:-1},m.a.createElement(h.a,{size:"small",type:"link",style:{color:"unset",fontWeight:void 0===u?"bolder":"inherit"},onClick:c(void 0)},m.a.createElement(P.a,null)," \u6240\u6709",m.a.createElement(v.a,{className:d.a.tag},s+o)),m.a.createElement(h.a,{size:"small",type:"link",style:{color:"green",fontWeight:u===g.a.OPEN?"bolder":"inherit"},onClick:c(g.a.OPEN)},m.a.createElement(b.a,null)," \u5f00\u542f\u7684",m.a.createElement(v.a,{className:d.a.tag},s)),m.a.createElement(h.a,{size:"small",type:"link",style:{color:"red",fontWeight:u===g.a.CLOSED?"bolder":"inherit"},onClick:c(g.a.CLOSED)},m.a.createElement(y.a,null)," \u5df2\u5173\u95ed",m.a.createElement(v.a,{className:d.a.tag},o)))),m.a.createElement(_.b,{to:S.Function.generateRepositoryCreateIssueRoute({username:a,repositoryName:n})},m.a.createElement(h.a,{type:"primary"},m.a.createElement(k.a,null),"\u521b\u5efa Issue"))),m.a.createElement("div",{className:d.a.issueListWrapper},m.a.createElement(j,{issues:x})),m.a.createElement("div",{className:d.a.pageButtonWrapper},m.a.createElement(f.b,{size:-1},m.a.createElement(h.a,{disabled:0===i,onClick:l},"\u4e0a\u4e00\u9875"),m.a.createElement(h.a,{onClick:p,disabled:N},"\u4e0b\u4e00\u9875"))))))}))),D=a(37),G=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).loadOpenAmount=Object(s.a)(r.a.mark((function e(){var t,a,s,o,u;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props.match.params,a=t.username,s=t.repositoryName,e.next=3,D.e.getAmountByRepository({username:a,name:s},g.a.OPEN);case 3:null!==(o=e.sent)&&(u=o.amount,n.setState({openAmount:u}));case 5:case"end":return e.stop()}}),e)}))),n.loadClosedAmount=Object(s.a)(r.a.mark((function e(){var t,a,s,o,u;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props.match.params,a=t.username,s=t.repositoryName,e.next=3,D.e.getAmountByRepository({username:a,name:s},g.a.CLOSED);case 3:null!==(o=e.sent)&&(u=o.amount,n.setState({closedAmount:u}));case 5:case"end":return e.stop()}}),e)}))),n.onStatusButtonClick=function(e){return Object(s.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.setState({currentStatus:e,loading:!0,currentPageNumber:0}),t.t0=e,t.next=t.t0===g.a.OPEN?4:t.t0===g.a.CLOSED?7:10;break;case 4:return t.next=6,n.loadOpenAmount();case 6:return t.abrupt("break",13);case 7:return t.next=9,n.loadClosedAmount();case 9:return t.abrupt("break",13);case 10:return t.next=12,Promise.all([n.loadOpenAmount(),n.loadClosedAmount()]);case 12:return t.abrupt("break",13);case 13:return t.next=15,n.loadIssues(e,0,a.SIZE_PER_PAGE);case 15:n.setState({loading:!1});case 16:case"end":return t.stop()}}),t)})))},n.loadIssues=function(){var e=Object(s.a)(r.a.mark((function e(t,a,s){var o,u,c,i,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=n.props.match.params,u=o.username,c=o.repositoryName,e.next=3,D.e.getByRepository({username:u,name:c},t,a,s);case 3:null!==(i=e.sent)&&(l=i.issues,n.setState({issues:l}));case 5:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),n.onPrevButtonClick=Object(s.a)(r.a.mark((function e(){var t,s,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.state,s=t.currentPageNumber,o=t.currentStatus,!(s>0)){e.next=7;break}return n.setState({loading:!0}),e.next=5,n.loadIssues(o,(s-1)*a.SIZE_PER_PAGE,a.SIZE_PER_PAGE);case 5:n.setState({currentPageNumber:s-1,loading:!1}),window.scrollTo({top:0,behavior:"smooth"});case 7:case"end":return e.stop()}}),e)}))),n.onNextButtonClick=Object(s.a)(r.a.mark((function e(){var t,s,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state,s=t.currentPageNumber,o=t.currentStatus,n.setState({loading:!0}),e.next=4,n.loadIssues(o,(s+1)*a.SIZE_PER_PAGE,a.SIZE_PER_PAGE);case 4:n.setState({currentPageNumber:s+1,loading:!1}),window.scrollTo({top:0,behavior:"smooth"});case 6:case"end":return e.stop()}}),e)}))),n.setNoNextPage=function(){var e=n.state,t=e.currentStatus,r=e.currentPageNumber,s=e.openAmount,o=e.closedAmount;switch(t){case g.a.CLOSED:return(r+1)*a.SIZE_PER_PAGE>=o;case g.a.OPEN:return(r+1)*a.SIZE_PER_PAGE>=s;default:return(r+1)*a.SIZE_PER_PAGE>=s+o}},n.state={loading:!1,openAmount:0,closedAmount:0,currentStatus:g.a.OPEN,issues:[],currentPageNumber:0},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(s.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.currentStatus,this.setState({loading:!0}),e.next=4,Promise.all([this.loadOpenAmount(),this.loadClosedAmount(),this.loadIssues(t,0,a.SIZE_PER_PAGE)]);case 4:this.setState({loading:!1});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(s.a)(r.a.mark((function e(t,a,n){var s,o,u,c,i,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=this.props.match.params,o=s.username,u=s.repositoryName,c=t.match.params,i=c.username,l=c.repositoryName,o===i&&u===l){e.next=5;break}return e.next=5,this.componentDidMount();case 5:case"end":return e.stop()}}),e,this)})));return function(t,a,n){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.closedAmount,n=e.currentStatus,r=e.openAmount,s=e.issues,o=e.currentPageNumber;return m.a.createElement(L,{loading:t,closedAmount:a,currentStatus:n,onStatusButtonClick:this.onStatusButtonClick,openAmount:r,issues:s,currentPageNumber:o,noNextPage:this.setNoNextPage(),onNextButtonClick:this.onNextButtonClick,onPrevButtonClick:this.onPrevButtonClick})}}]),a}(l.PureComponent);G.SIZE_PER_PAGE=20;var Z=Object(N.i)(G)}}]);
//# sourceMappingURL=31.08e86ad5.chunk.js.map