(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[35],{655:function(e,t,n){"use strict";var a=n(0),r=n.n(a),s=n(11);var c=r.a.memo((function(e){return r.a.createElement(s.b,Object.assign({},e,{target:"_blank",rel:"noopener norefferrer"}))}));n.d(t,"a",(function(){return c}))},763:function(e,t,n){e.exports={Members:"Style_Members__1A1TA",cardContent:"Style_cardContent__3XM0M",titleWrapper:"Style_titleWrapper__30lrm",title:"Style_title__BuxVP"}},815:function(e,t,n){"use strict";n.r(t);n(37);var a=n(5),r=n(2),s=n.n(r),c=n(7),i=n(12),o=n(17),u=n(44),l=n(43),m=n(45),p=n(0),d=n.n(p),f=(n(660),n(659)),b=(n(334),n(220)),v=(n(224),n(98)),h=(n(59),n(18)),A=(n(219),n(66)),g=n(763),x=n.n(g),k=n(24),E=n(637),_=n(655);var j=d.a.memo((function(e){const{profiles:t,loading:n,onRemoveAccountConfirm:a,isAdmin:r}=e;return d.a.createElement("div",{className:x.a.Members},d.a.createElement(f.a,{loading:n,locale:{emptyText:d.a.createElement(A.a,{description:"\u6ca1\u6709\u6210\u5458"})},dataSource:[...t],renderItem:e=>{if(null!==e){const{nickname:t,username:n}=e;return d.a.createElement(b.a,{size:"small"},d.a.createElement("div",{className:x.a.cardContent},d.a.createElement("div",{className:x.a.titleWrapper},d.a.createElement(E.a,null),d.a.createElement(_.a,{to:k.Function.generatePersonalCenterRoute({username:n}),className:x.a.title},t,"(",n,")")),r?d.a.createElement("div",{className:x.a.buttonWrapper},d.a.createElement(v.a,{title:"\u786e\u8ba4\u79fb\u9664\u6210\u5458 ".concat(t,"\uff1f"),onConfirm:a(n)},d.a.createElement(h.a,{type:"danger"},"\u79fb\u9664"))):null))}return null}}))})),O=n(84),w=n(28),C=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).loadMemberProfiles=Object(c.a)(s.a.mark((function e(){var t,a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props.match.params.id,e.next=3,w.c.accounts({id:Number.parseInt(t)});case 3:if(null===(a=e.sent)){e.next=9;break}return e.next=7,Promise.all(a.map((function(e){var t=e.username;return w.e.get({username:t})})));case 7:r=e.sent,n.setState({profiles:r});case 9:case"end":return e.stop()}}),e)}))),n.loadIsAdmin=Object(c.a)(s.a.mark((function e(){var t,a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props.match.params.id,e.next=3,w.c.isAdmin({id:Number.parseInt(t)});case 3:null!==(a=e.sent)&&(r=a.isAdmin,n.setState({isAdmin:r}));case 5:case"end":return e.stop()}}),e)}))),n.onRemoveAccountConfirm=function(e){var t=n.props.match.params.id;return(Object(c.a)(s.a.mark((function r(){return s.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,w.c.removeAccounts({id:Number.parseInt(t)},[e]);case 2:if(null===r.sent){r.next=7;break}return a.a.success({message:"\u79fb\u9664\u6210\u5458\u6210\u529f"}),r.next=7,n.loadMemberProfiles();case 7:case"end":return r.stop()}}),r)}))))},n.state={profiles:[],loading:!0,isAdmin:!1},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=Object(c.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,Promise.all([this.loadMemberProfiles(),this.loadIsAdmin()]);case 3:this.setState({loading:!1});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.profiles,n=e.loading,a=e.isAdmin;return d.a.createElement(j,{profiles:t,loading:n,isAdmin:a,onRemoveAccountConfirm:this.onRemoveAccountConfirm})}}]),t}(p.PureComponent),y=Object(O.f)(C);n.d(t,"default",(function(){return y}))}}]);
//# sourceMappingURL=35.de3b5a3f.chunk.js.map