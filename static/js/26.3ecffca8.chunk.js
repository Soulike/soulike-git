(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[26],{1072:function(e,t,r){"use strict";r(246);var a=r(80),n=r(202),o=r(0),s=r.n(o);var i=s.a.memo((function(e){var t=e.isPublic,r=Object(n.a)(e,["isPublic"]);return t?s.a.createElement(a.a,Object.assign({color:"blue"},r),"\u516c\u5171"):s.a.createElement(a.a,Object.assign({color:"gold"},r),"\u79c1\u4eba")}));r.d(t,"a",(function(){return i}))},1073:function(e,t,r){"use strict";r(1063);var a=r(1062),n=(r(1057),r(1056)),o=(r(319),r(91)),s=r(40),i=r(0),c=r.n(i),l=r(1074),u=r.n(l),p=r(24),d=r(45),m=r(1072);var f=function(e){var t=e.repositories,r=e.loading,i=e.showUsername;return c.a.createElement(a.a,{className:u.a.RepositoryList,dataSource:Object(s.a)(t),loading:r,locale:{emptyText:c.a.createElement(o.a,{description:"\u6ca1\u6709\u4ed3\u5e93"})},renderItem:function(e){var t=e.username,r=e.name,a=e.description,o=e.isPublic;return c.a.createElement(p.b,{className:u.a.repositoryWrapper,target:"_blank",rel:"noreferrer noopener",to:d.b.generateRepositoryCodeRoute({username:t,repository:r})},c.a.createElement(n.a,{className:u.a.repository,hoverable:!0},c.a.createElement(n.a.Meta,{title:c.a.createElement(c.a.Fragment,null,c.a.createElement(m.a,{isPublic:o}),i?"".concat(t,"/"):"",r),description:c.a.createElement("div",null,0===a.length?c.a.createElement("i",null,"\u6ca1\u6709\u63cf\u8ff0"):a)})))}})};r.d(t,"a",(function(){return f}))},1074:function(e,t,r){e.exports={RepositoryList:"Style_RepositoryList__3Ox2N",repositoryWrapper:"Style_repositoryWrapper__8uUYD"}},1102:function(e,t,r){e.exports={Index:"Style_Index__3aRmg",repositoryWrapper:"Style_repositoryWrapper__mjMAI"}},1213:function(e,t,r){"use strict";r.r(t);var a=r(2),n=r.n(a),o=r(40),s=r(5),i=r(12),c=r(14),l=r(36),u=r(35),p=r(37),d=r(0),m=r.n(d),f=r(78),E=r(1102),h=r.n(E),b=r(1103),v=r.n(b),y=r(1073);var g=function(e){var t=e.repositoryList,r=e.loadMore,a=e.loading,n=e.hasMore;return m.a.createElement("div",{className:h.a.Index},m.a.createElement(v.a,{loadMore:r,initialLoad:!1,hasMore:n},m.a.createElement(y.a,{repositories:t,loading:a,showUsername:!0})))},_=r(200),M=function(e){function t(e){var r;return Object(i.a)(this,t),(r=Object(l.a)(this,Object(u.a)(t).call(this,e))).setTitle=function(){document.title=_.a.NAME},r.loadMoreRepositories=Object(s.a)(n.a.mark((function e(){var a,s,i,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.state,s=a.repositories,i=a.lastEnd,r.setState({loading:!0}),e.next=4,f.f.getRepositories(i,i+t.PAGE_SIZE);case 4:c=e.sent,r.setState({loading:!1}),null!==c&&(s.push.apply(s,Object(o.a)(c)),r.setState({lastEnd:i+t.PAGE_SIZE-1}),c.length<t.PAGE_SIZE&&r.setState({hasMore:!1}),r.forceUpdate());case 7:case"end":return e.stop()}}),e)}))),r.state={repositories:[],loading:!0,hasMore:!0,lastEnd:0},r}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(s.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setTitle(),e.next=3,this.loadMoreRepositories();case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.repositories,r=e.hasMore,a=e.loading;return m.a.createElement(g,{repositoryList:t,loadMore:this.loadMoreRepositories,hasMore:r,loading:a})}}]),t}(d.PureComponent);M.PAGE_SIZE=10;var j=M;r.d(t,"default",(function(){return j}))}}]);
//# sourceMappingURL=26.3ecffca8.chunk.js.map