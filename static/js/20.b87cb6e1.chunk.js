(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[20],{1119:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(15);t.a=n.a.memo((function(e){return n.a.createElement(o.b,Object.assign({},e,{target:"_blank",rel:"noopener norefferrer"}))}))},1133:function(e,t,a){"use strict";a(181);var r=a(56),n=a(1139),o=a(0),s=a.n(o),i=a(1134),c=a.n(i);t.a=s.a.memo((function(e){var t=e.isPublic,a=Object(n.a)(e,["isPublic"]);return t?s.a.createElement(r.a,Object.assign({className:c.a.AccessibilityTag,color:"blue"},a),"\u516c\u5171"):s.a.createElement(r.a,Object.assign({className:c.a.AccessibilityTag,color:"gold"},a),"\u79c1\u4eba")}))},1134:function(e,t,a){e.exports={AccessibilityTag:"Style_AccessibilityTag__4cAHc"}},1142:function(e,t,a){"use strict";a(1129);var r=a(1128),n=(a(340),a(103)),o=a(1127),s=a(0),i=a.n(s),c=a(1145),u=a.n(c),l=a(1113),m=a(1114),p=a(1116),f=a(1115),d=a(1117),h=(a(505),a(343)),b=a(1146),v=a.n(b),y=a(32),k=a(1133),x=a(1119),E=a(3),g=a.n(E),S=a(7),j=a(1144),_=a(1120),w=a(45),O=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(f.a)(t).call(this,e))).setStatePromise=Object(_.promisify)(a.setState),a.loadHasStared=Object(S.a)(g.a.mark((function e(){var t,r,n,o,s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.repository,r=t.username,n=t.name,e.next=3,w.i.isStaredRepository({username:r,name:n});case 3:if(null===(o=e.sent)){e.next=8;break}return s=o.isStared,e.next=8,a.setStatePromise({hasStared:s});case 8:case"end":return e.stop()}}),e)}))),a.loadStarAmount=Object(S.a)(g.a.mark((function e(){var t,r,n,o,s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.repository,r=t.username,n=t.name,e.next=3,w.i.getRepositoryStarAmount({username:r,name:n});case 3:if(null===(o=e.sent)){e.next=8;break}return s=o.amount,e.next=8,a.setStatePromise({starAmount:s});case 8:case"end":return e.stop()}}),e)}))),a.onClick=Object(S.a)(g.a.mark((function e(){var t,r,n,o,s,i;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state,r=t.hasStared,n=t.starAmount,o=a.props.repository,s=o.username,i=o.name,e.next=4,a.setStatePromise({loading:!0});case 4:if(!r){e.next=13;break}return e.next=7,w.i.remove({username:s,name:i});case 7:if(null===e.sent){e.next=11;break}return e.next=11,a.setStatePromise({hasStared:!1,starAmount:n-1});case 11:e.next=19;break;case 13:return e.next=15,w.i.add({username:s,name:i});case 15:if(null===e.sent){e.next=19;break}return e.next=19,a.setStatePromise({hasStared:!0,starAmount:n+1});case 19:return e.next=21,a.setStatePromise({loading:!1});case 21:case"end":return e.stop()}}),e)}))),a.state={hasStared:!1,starAmount:0,loading:!1},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(S.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setStatePromise({loading:!0});case 2:return e.next=4,Promise.all([this.loadHasStared(),this.loadStarAmount()]);case 4:return e.next=6,this.setStatePromise({loading:!1});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(S.a)(g.a.mark((function e(t,a,r){var n,o;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.props.repository,o=t.repository,n===o){e.next=5;break}return e.next=5,this.componentDidMount();case 5:case"end":return e.stop()}}),e,this)})));return function(t,a,r){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.hasStared,a=e.loading,r=e.starAmount;return i.a.createElement(j.a,{hasStared:t,loading:a,starAmount:r,onClick:this.onClick})}}]),t}(s.PureComponent),A=(a(142),a(73)),P=a(1147),M=a.n(P),N=a(1099);var C=i.a.memo((function(e){var t=e.forkAmount,a=e.loading;return i.a.createElement("div",{className:M.a.ForkAmount},i.a.createElement(A.a,{spinning:a},i.a.createElement(N.a,null)," ",t))})),D=a(342),W=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(f.a)(t).call(this,e))).setStatePromise=Object(_.promisify)(a.setState),a.loadForkAmount=Object(S.a)(g.a.mark((function e(){var t,r,n,o,s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.repository,r=t.username,n=t.name,e.next=3,D.a.forkAmount({username:r,name:n});case 3:if(null===(o=e.sent)){e.next=8;break}return s=o.amount,e.next=8,a.setStatePromise({forkAmount:s});case 8:case"end":return e.stop()}}),e)}))),a.state={forkAmount:0,loading:!1},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(S.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setStatePromise({loading:!0});case 2:return e.next=4,this.loadForkAmount();case 4:return e.next=6,this.setStatePromise({loading:!1});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(S.a)(g.a.mark((function e(t,a,r){var n,o;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.props.repository,o=t.repository,n===o){e.next=5;break}return e.next=5,this.componentDidMount();case 5:case"end":return e.stop()}}),e,this)})));return function(t,a,r){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.forkAmount,a=e.loading;return i.a.createElement(C,{loading:a,forkAmount:t})}}]),t}(s.PureComponent),U=(a(339),a(156)),I=a(1148),R=a.n(I),T=a(97),G=a(1173);var F=i.a.memo((function(e){var t=e.lastCommit,a=e.loading;return i.a.createElement("div",{className:R.a.LastUpdateInfo},i.a.createElement(A.a,{spinning:a},null===t?null:i.a.createElement("div",{className:R.a.text},i.a.createElement(G.a,null)," \u6700\u540e\u66f4\u65b0\u4e8e ",i.a.createElement(U.a,{title:T.b.parseTimestampToDate(t.timestamp)},i.a.createElement("span",{className:R.a.time},T.b.parseTimestampToDifference(t.timestamp))))))})),L=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(f.a)(t).call(this,e))).setStatePromise=Object(_.promisify)(a.setState),a.loadLastCommit=Object(S.a)(g.a.mark((function e(){var t,r,n,o;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.repository,r=t.username,n=t.name,e.next=3,w.h.lastCommit({username:r,name:n});case 3:return o=e.sent,e.next=6,a.setStatePromise({lastCommit:o});case 6:case"end":return e.stop()}}),e)}))),a.state={lastCommit:null,loading:!1},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(S.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setStatePromise({loading:!0});case 2:return e.next=4,this.loadLastCommit();case 4:return e.next=6,this.setStatePromise({loading:!1});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(S.a)(g.a.mark((function e(t,a,r){var n,o;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.props.repository,o=t.repository,n===o){e.next=5;break}return e.next=5,this.componentDidMount();case 5:case"end":return e.stop()}}),e,this)})));return function(t,a,r){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.lastCommit;return i.a.createElement(F,{lastCommit:a,loading:t})}}]),t}(s.PureComponent);var H=i.a.memo((function(e){var t=e.repository,a=e.showUsername,r=t.username,n=t.name,o=t.isPublic,s=t.description;return i.a.createElement("div",{className:v.a.Repository},i.a.createElement(x.a,{to:y.Function.generateRepositoryCodeRoute({username:r,repository:n})},i.a.createElement(h.a,{className:v.a.repository},i.a.createElement(h.a.Meta,{title:i.a.createElement("div",{className:v.a.title},i.a.createElement("div",{className:v.a.infoWrapper},i.a.createElement("div",{className:v.a.tag},i.a.createElement(k.a,{isPublic:o})),i.a.createElement("div",{className:v.a.name},a?"".concat(r,"/"):"",n)),i.a.createElement("div",{className:v.a.buttonWrapper},i.a.createElement(O,{repository:t}))),description:i.a.createElement("div",null,0===s.length?i.a.createElement("i",null,"\u6ca1\u6709\u63cf\u8ff0"):s)}),i.a.createElement("div",{className:v.a.repositoryMoreInfo},i.a.createElement("div",{className:v.a.forkAmountWrapper},i.a.createElement(W,{repository:t})),i.a.createElement("div",{className:v.a.updateInfoWrapper},i.a.createElement(L,{repository:t}))))))})),Z=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.repository,a=e.showUsername;return i.a.createElement(H,{repository:t,showUsername:a})}}]),t}(s.PureComponent);var J=function(e){var t=e.repositories,a=e.loading,s=e.showUsername;return i.a.createElement(r.a,{className:u.a.RepositoryList,dataSource:Object(o.a)(t),loading:a,locale:{emptyText:i.a.createElement(n.a,{description:"\u6ca1\u6709\u4ed3\u5e93"})},renderItem:function(e){return i.a.createElement(Z,{key:"".concat(e.username,"/").concat(e.name),repository:e,showUsername:s})}})};a.d(t,"a",(function(){return J}))},1144:function(e,t,a){"use strict";a(339);var r=a(156),n=(a(94),a(25)),o=a(3),s=a.n(o),i=a(7),c=a(0),u=a.n(c),l=a(1171),m=a(1172),p=a(97);var f=u.a.memo((function(e){var t=e.hasStared,a=e.starAmount,o=e.loading,c=e.onClick;return u.a.createElement(n.a.Group,{size:"small"},u.a.createElement(n.a,{onClick:function(){var e=Object(i.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),"function"!==typeof c){e.next=4;break}return e.next=4,c(t);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),loading:o,disabled:o},t?u.a.createElement(u.a.Fragment,null,u.a.createElement(l.a,null)," Unstar"):u.a.createElement(u.a.Fragment,null,u.a.createElement(m.a,null)," Star")),u.a.createElement(r.a,{title:a},u.a.createElement(n.a,{onClick:function(){var e=Object(i.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.preventDefault());case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},p.d.getNumberAbbreviation(a))))}));a.d(t,"a",(function(){return f}))},1145:function(e,t,a){e.exports={RepositoryList:"Style_RepositoryList__3Ox2N",repositoryWrapper:"Style_repositoryWrapper__8uUYD",repository:"Style_repository__snu_K",tag:"Style_tag__3JMWU"}},1146:function(e,t,a){e.exports={Repository:"Style_Repository__3R-6I",repository:"Style_repository__mI8-0",title:"Style_title__3Kk24",infoWrapper:"Style_infoWrapper__3qh_G",tag:"Style_tag__1eOWX",repositoryMoreInfo:"Style_repositoryMoreInfo__3P5Ut",forkAmountWrapper:"Style_forkAmountWrapper__2GATi"}},1147:function(e,t,a){},1148:function(e,t,a){},1192:function(e,t,a){e.exports={Index:"Style_Index__3aRmg",alertWrapper:"Style_alertWrapper__1vm7c",description:"Style_description__Fp3il",memeWrapper:"Style_memeWrapper__2TD3N",meme:"Style_meme__gsx9j",repositoryWrapper:"Style_repositoryWrapper__mjMAI"}},1207:function(e,t,a){e.exports=a.p+"static/media/\u4f59\u88d5\u4f59\u88d5.4aa86cd4.jpg"},1350:function(e,t,a){"use strict";a.r(t);var r=a(3),n=a.n(r),o=a(1127),s=a(7),i=a(1113),c=a(1114),u=a(1116),l=a(1115),m=a(1117),p=a(0),f=a.n(p),d=a(45),h=(a(341),a(157)),b=a(1192),v=a.n(b),y=a(1193),k=a.n(y),x=a(1142),E=a(330),g=a(1207),S=a.n(g);var j=function(e){var t=e.repositoryList,a=e.loadMore,r=e.loading,n=e.hasMore,o=e.onMemeDoubleClick,s=e.showMeme;return f.a.createElement("div",{className:v.a.Index},f.a.createElement("div",{className:v.a.alertWrapper},f.a.createElement(h.a,{type:"warning",message:"\u9879\u76ee\u4ecd\u5728\u5f00\u53d1\u4e2d",closable:!0,description:f.a.createElement("div",{className:v.a.description},f.a.createElement("div",{className:v.a.text},f.a.createElement("div",null,"\u672c\u9879\u76ee\u7531\u7ec3\u4e60\u65f6\u957f\u4e24\u5e74\u534a\u5e72\u5565\u5565\u4e0d\u884c\u5403\u996d\u7b2c\u4e00\u540d\u7684\u524d\u7aef\u5f00\u53d1\uff0c\u4e14\u540e\u7aef\u8fd0\u884c\u5728\u6bcf\u6708\u4ec5\u9700 9.5 \u5143\u4eba\u6c11\u5e01\u7684\u8fa3\u9e21\u670d\u52a1\u5668\u4e0a\u3002"),f.a.createElement("div",null,f.a.createElement("strong",null,"\u8bf7\u5927\u5bb6\u5907\u4efd\u597d\u81ea\u5df1\u7684\u4ee3\u7801"),"\uff0c\u51fa\u73b0 BUG \u8bf7",f.a.createElement(E.a,{href:"https://github.com/Soulike/Gardenia/issues"},"\u63d0 Issue"),"\u3002"),f.a.createElement("div",null,"\u7531\u4e8e\u4ecd\u5904\u4e8e\u5f00\u53d1\u72b6\u6001\uff0c\u56e0\u6b64\u53ef\u80fd\u4f1a\u51fa\u73b0\u4e0d\u517c\u5bb9\u66f4\u6539\u3002",f.a.createElement("strong",null,"\u51fa\u73b0\u95ee\u9898\u8bf7\u5148\u5c1d\u8bd5\u6e05\u9664\u7f13\u5b58\u5237\u65b0\u9875\u9762"),"\u3002"),f.a.createElement("div",null,"\u8bf7\u5404\u4f4d\u591a\u62c5\u5f85\uff0c\u7528\u6b63\u5e38\u7684\u59ff\u52bf\u4f7f\u7528\u672c\u5e73\u53f0\uff0c\u4e0d\u80dc\u611f\u8c22",f.a.createElement("span",{role:"img","aria-label":"emoji","aria-labelledby":"emoji"},"\ud83d\ude00"),"\u3002")),s?f.a.createElement("div",{className:v.a.memeWrapper,onDoubleClick:o},f.a.createElement("img",{src:S.a,alt:"meme",className:v.a.meme})):f.a.createElement("div",{className:v.a.memeWrapper})),banner:!0}),f.a.createElement(h.a,{type:"info",message:"Git \u81ea\u52a8\u4fdd\u5b58\u5bc6\u7801\u7684\u65b9\u6cd5",description:f.a.createElement("div",{className:v.a.text},f.a.createElement("div",null,"\u5728\u547d\u4ee4\u884c\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u53ef\u81ea\u52a8\u4fdd\u5b58\u5bc6\u7801\uff0c\u514d\u53bb\u6bcf\u6b21\u8f93\u5165\u5bc6\u7801\u7684\u9ebb\u70e6\u3002"),f.a.createElement("code",null,"git config --global credential.helper cache && git config --global credential.helper 'cache --timeout=31556926'"),f.a.createElement("div",null,"SSH \u8fde\u63a5\u65b9\u5f0f\u4ecd\u5728\u5f00\u53d1\u4e2d\uff0c\u7ed9\u5927\u5bb6\u5e26\u6765\u7684\u4e0d\u4fbf\u6df1\u8868\u6b49\u610f\u3002")),banner:!0})),f.a.createElement(k.a,{loadMore:a,initialLoad:!1,pageStart:1,hasMore:n},f.a.createElement(x.a,{repositories:t,loading:r,showUsername:!0})))},_=a(215),w=a(1140),O=a.n(w),A=a(1120),P=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(l.a)(t).call(this,e))).setStatePromise=Object(A.promisify)(a.setState),a.forceUpdatePromise=Object(A.promisify)(a.forceUpdate),a.setTitle=function(){document.title=_.a.NAME},a.loadMoreRepositories=function(){var e=Object(s.a)(n.a.mark((function e(r){var s,i;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=a.state.repositories,a.setState({loading:!0}),e.next=4,d.g.getRepositories((r-1)*t.PAGE_SIZE,r*t.PAGE_SIZE);case 4:if(i=e.sent,a.setState({loading:!1}),null===i){e.next=13;break}if(s.push.apply(s,Object(o.a)(i)),!(i.length<t.PAGE_SIZE)){e.next=11;break}return e.next=11,a.setStatePromise({hasMore:!1});case 11:return e.next=13,a.forceUpdatePromise();case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.onMemeDoubleClickFactory=function(){var e=0,t=new Audio(O.a.join("","mp3","rikairikai.mp3")),r=new Audio(O.a.join("","mp3","subeteorikaishidawa.mp3")),o=new Audio(O.a.join("","mp3","arikairikairikairikairikai.mp3")),i=new Audio(O.a.join("","mp3","wurusaiwurusaiwurusai.mp3")),c=new Audio(O.a.join("","mp3","damaraseteitadakimasu.mp3"));return Object(s.a)(n.a.mark((function s(){return n.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(1!==e){n.next=5;break}return n.next=3,t.play();case 3:n.next=24;break;case 5:if(2!==e){n.next=10;break}return n.next=8,r.play();case 8:n.next=24;break;case 10:if(3!==e){n.next=15;break}return n.next=13,o.play();case 13:n.next=24;break;case 15:if(!(e>3&&e<6)){n.next=20;break}return n.next=18,i.play();case 18:n.next=24;break;case 20:if(6!==e){n.next=24;break}return n.next=23,c.play();case 23:c.onended=function(){return a.setState({showMeme:!1})};case 24:e++;case 25:case"end":return n.stop()}}),s)})))},a.state={repositories:[],loading:!0,hasMore:!0,showMeme:!0},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(s.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setTitle(),e.next=3,this.loadMoreRepositories(1);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.repositories,a=e.hasMore,r=e.loading,n=e.showMeme;return f.a.createElement(j,{onMemeDoubleClick:this.onMemeDoubleClickFactory(),repositoryList:t,loadMore:this.loadMoreRepositories,hasMore:a,loading:r,showMeme:n})}}]),t}(p.PureComponent);P.PAGE_SIZE=10;var M=P;a.d(t,"default",(function(){return M}))}}]);
//# sourceMappingURL=20.b87cb6e1.chunk.js.map