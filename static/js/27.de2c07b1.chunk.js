(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[27],{671:function(e,t,a){"use strict";a(128);var n=a(35),s=a(145),r=a(0),o=a.n(r);var i=o.a.memo((function(e){var t=e.isPublic,a=Object(s.a)(e,["isPublic"]);return t?o.a.createElement(n.a,Object.assign({color:"blue"},a),"\u516c\u5171"):o.a.createElement(n.a,Object.assign({color:"gold"},a),"\u79c1\u4eba")}));a.d(t,"a",(function(){return i}))},773:function(e,t,a){e.exports={Repository:"Style_Repository__3C5oN",header:"Style_header__2LCJa",tabContent:"Style_tabContent__1JPyK",basicInfo:"Style_basicInfo__1CY_5",usernameAndNameWrapper:"Style_usernameAndNameWrapper__zhZl-",usernameAndName:"Style_usernameAndName__21Dhj",forkFrom:"Style_forkFrom__gove8",text:"Style_text__3RKOo",tab:"Style_tab__2Ycb5",tag:"Style_tag__2txb4"}},774:function(e,t,a){},801:function(e,t,a){"use strict";a.r(t);var n,s=a(0),r=a.n(s),o=(a(128),a(35)),i=(a(174),a(57)),c=a(773),l=a.n(c),u=a(671),m=a(7),p=a(22);!function(e){e.CODE="CODE",e.ISSUES="ISSUES",e.PULL_REQUESTS="PULL_REQUESTS",e.SETTINGS="SETTINGS"}(n||(n={}));var E=n,h=(a(61),a(26)),d=a(23),S=a.n(d),b=a(39),y=a(8),g=a(13),f=a(44),_=a(43),v=a(45),A=(a(224),a(105)),R=(a(60),a(16)),T=a(774),k=a.n(T),O=a(62),P=a(646);var I=r.a.memo((function(e){var t=e.onClick,a=e.forkAmount,n=e.loading;return r.a.createElement(R.a.Group,{className:k.a.ForkButton,size:"small"},r.a.createElement(R.a,{onClick:t,disabled:n,loading:n},r.a.createElement(P.a,null),"Fork"),r.a.createElement(A.a,{title:a},r.a.createElement(R.a,{disabled:n},O.d.getNumberAbbreviation(a))))})),C=a(27),N=a(85),U=function(e){function t(e){var a;return Object(y.a)(this,t),(a=Object(f.a)(this,Object(_.a)(t).call(this,e))).loadForkAmount=Object(b.a)(S.a.mark((function e(){var t,n,s,r,o;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.match.params,n=t.username,s=t.repository,e.next=3,C.h.forkAmount({username:n,name:s});case 3:null!==(r=e.sent)&&(o=r.amount,a.setState({forkAmount:o}));case 5:case"end":return e.stop()}}),e)}))),a.onClick=Object(b.a)(S.a.mark((function e(){var t,n,s;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({loading:!0}),t=a.props.match.params,n=t.username,s=t.repository,e.next=4,C.g.fork({username:n,name:s});case 4:null!==e.sent&&h.a.success({message:"fork \u6210\u529f",description:"\u53ef\u524d\u5f80\u4e2a\u4eba\u4e2d\u5fc3\u4ed3\u5e93\u5217\u8868\u67e5\u770b"}),a.setState({loading:!1});case 7:case"end":return e.stop()}}),e)}))),a.state={forkAmount:0,loading:!1},a}return Object(v.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){var e=Object(b.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,this.loadForkAmount();case 3:this.setState({loading:!1});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.forkAmount,a=e.loading;return r.a.createElement(I,{onClick:this.onClick,forkAmount:t,loading:a})}}]),t}(s.PureComponent),F=Object(N.f)(U),w=a(648),D={name:"exclamation-circle",theme:"outlined",icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z"}}]}},L=a(6),G=function(e,t){return r.a.createElement(L.a,Object.assign({},e,{ref:t,icon:D}))};G.displayName="ExclamationCircleOutlined";var x=r.a.forwardRef(G),j=a(652),K=a(641);var q=r.a.memo((function(e){const{repository:{username:t,name:a,isPublic:n},forkFrom:s,loading:c,onTabChange:h,tabActiveKey:d,showSettings:S,children:b,openPullRequestAmount:y,openIssueAmount:g}=e;return c?null:r.a.createElement("div",{className:l.a.Repository},r.a.createElement("div",{className:l.a.header},r.a.createElement("div",{className:l.a.basicInfo},r.a.createElement(u.a,{isPublic:n}),r.a.createElement("div",{className:l.a.usernameAndNameWrapper},r.a.createElement("div",{className:l.a.usernameAndName},r.a.createElement(m.b,{to:p.Function.generatePersonalCenterRoute({username:t})},t)," / ",r.a.createElement(m.b,{to:p.Function.generateRepositoryCodeRoute({username:t,repository:a})},r.a.createElement("b",null,a))),r.a.createElement("div",{className:l.a.forkFrom},null===s?null:r.a.createElement("div",{className:l.a.forkFrom},r.a.createElement("div",{className:l.a.text},"fork \u81ea"),r.a.createElement(m.b,{to:p.Function.generatePersonalCenterRoute({username:s.username})},s.username)," / ",r.a.createElement(m.b,{to:p.Function.generateRepositoryCodeRoute({username:s.username,repository:s.name})},r.a.createElement("b",null,s.name)))))),r.a.createElement("div",{className:l.a.buttonWrapper},r.a.createElement(F,null))),r.a.createElement(i.a,{defaultActiveKey:E.CODE,type:"card",className:l.a.tab,tabBarStyle:{padding:"0 calc(50% - 500px)",margin:"0"},onChange:h,activeKey:d},r.a.createElement(i.a.TabPane,{tab:r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,null),"\u4ee3\u7801"),key:E.CODE},r.a.createElement("div",{className:l.a.tabContent},b)),r.a.createElement(i.a.TabPane,{tab:r.a.createElement(r.a.Fragment,null,r.a.createElement(x,null),"Issues ",r.a.createElement(o.a,{className:l.a.tag},g)),key:E.ISSUES},r.a.createElement("div",{className:l.a.tabContent},b)),r.a.createElement(i.a.TabPane,{tab:r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,null),"Pull Requests ",r.a.createElement(o.a,{className:l.a.tag},y)),key:E.PULL_REQUESTS},r.a.createElement("div",{className:l.a.tabContent},b)),S?r.a.createElement(i.a.TabPane,{tab:r.a.createElement(r.a.Fragment,null,r.a.createElement(K.a,null),"\u8bbe\u7f6e"),key:E.SETTINGS},r.a.createElement("div",{className:l.a.tabContent},b)):null))})),Q=a(74),z=a(1),M=a(28),B=a(144),J=a(12);class V extends s.PureComponent{constructor(e){super(e),this.setTitle=()=>{const{match:{params:{username:e,repository:t}}}=this.props;document.title="".concat(e,"/").concat(t," - ").concat(B.a.NAME)},this.loadOpenIssueAmount=async()=>{const{match:{params:{username:e,repository:t}}}=this.props,a=await C.d.getAmountByRepository({username:e,name:t},J.a.OPEN);if(null!==a){const{amount:e}=a;this.setState({openIssueAmount:e})}},this.loadOpenPullRequestAmount=async()=>{const{match:{params:{username:e,repository:t}}}=this.props,a=await C.f.getPullRequestAmount({username:e,name:t},J.c.OPEN);if(null!==a){const{amount:e}=a;this.setState({openPullRequestAmount:e})}},this.loadRepository=async()=>{const{match:{params:{username:e,repository:t}}}=this.props,a=await C.h.repository({username:e},{name:t});null!==a&&this.setState({repository:a})},this.loadForkFrom=async()=>{const{match:{params:{username:e,repository:t}}}=this.props,a=await C.h.forkFrom({username:e,name:t});if(null!==a){const{repository:e}=a;this.setState({forkFrom:e})}},this.loadVisitorProfile=async()=>{const e=await C.e.get();null!==e&&this.setState({visitorProfile:e})},this.setTabActiveKey=()=>{const{match:{path:e}}=this.props,{REPOSITORY:{REPOSITORY:t,CODE:a,ISSUES:n,ISSUE:s,CREATE_ISSUE:r,PULL_REQUESTS:o,PULL_REQUEST:i,SETTINGS:c}}=z.PAGE_ID;switch(e){case z.PAGE_ID_TO_ROUTE[a]:case z.PAGE_ID_TO_ROUTE[t]:this.setState({tabActiveKey:E.CODE});break;case z.PAGE_ID_TO_ROUTE[r]:case z.PAGE_ID_TO_ROUTE[s]:case z.PAGE_ID_TO_ROUTE[n]:this.setState({tabActiveKey:E.ISSUES});break;case z.PAGE_ID_TO_ROUTE[i]:case z.PAGE_ID_TO_ROUTE[o]:this.setState({tabActiveKey:E.PULL_REQUESTS});break;case z.PAGE_ID_TO_ROUTE[c.SETTINGS]:this.setState({tabActiveKey:E.SETTINGS})}},this.onTabChange=e=>{const{history:t}=this.props,{repository:{username:a,name:n}}=this.state;switch(e){case E.CODE:t.push(p.Function.generateRepositoryCodeRoute({username:a,repository:n}));break;case E.ISSUES:t.push(p.Function.generateRepositoryIssuesRoute({username:a,repository:n}));break;case E.PULL_REQUESTS:t.push(p.Function.generateRepositoryPullRequestsRoute({username:a,repository:n}));break;case E.SETTINGS:t.push(p.Function.generateRepositorySettingsRoute({username:a,repository:n}));break;default:return}},this.state={repository:new Q.g("","","",!0),loading:!0,tabActiveKey:E.CODE,visitorProfile:null,forkFrom:null,openPullRequestAmount:0,openIssueAmount:0}}async componentDidMount(){const{isLoggedIn:e}=this.props;this.setTitle(),this.setTabActiveKey(),this.setState({loading:!0}),await Promise.all([this.loadRepository(),this.loadForkFrom(),this.loadOpenPullRequestAmount(),this.loadOpenIssueAmount()]),e&&await this.loadVisitorProfile(),this.setState({loading:!1})}async componentDidUpdate(e,t,a){const{location:{pathname:n},isLoggedIn:s,match:{params:{repository:r,username:o}}}=this.props,{location:{pathname:i},isLoggedIn:c,match:{params:{repository:l,username:u}}}=e;r===l&&o===u||await this.componentDidMount(),n!==i&&this.setTabActiveKey(),s&&!c&&await this.loadVisitorProfile()}render(){const{repository:e,loading:t,tabActiveKey:a,visitorProfile:n,forkFrom:s,openPullRequestAmount:o,openIssueAmount:i}=this.state,{children:c,isLoggedIn:l}=this.props;return r.a.createElement(q,{showSettings:l&&null!==n&&e.username===n.username,repository:e,loading:t,onTabChange:this.onTabChange,tabActiveKey:a,forkFrom:s,openPullRequestAmount:o,openIssueAmount:i},c)}}var W=Object(M.b)(e=>{const{Root:{isLoggedIn:t}}=e;return{isLoggedIn:t}})(V);a.d(t,"default",(function(){return W}))}}]);
//# sourceMappingURL=27.de2c07b1.chunk.js.map