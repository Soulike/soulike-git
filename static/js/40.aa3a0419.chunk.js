(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[40],{726:function(e,t,a){e.exports={Code:"Style_Code__21-ZH",description:"Style_description__2MbQ1",buttonWrapper:"Style_buttonWrapper__12jZU",leftButtonWrapper:"Style_leftButtonWrapper__255ZA",newPullRequestButtonWrapper:"Style_newPullRequestButtonWrapper__1SU7q"}},812:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=(a(724),a(784)),r=(a(59),a(18)),i=a(726),l=a.n(i),c=a(16),m=a(11),u=a(24);const p=o.a.lazy(()=>Promise.all([a.e(4),a.e(36)]).then(a.bind(null,823))),h=o.a.lazy(()=>Promise.all([a.e(0),a.e(1),a.e(18)]).then(a.bind(null,793))),d=o.a.lazy(()=>a.e(41).then(a.bind(null,820))),y=o.a.lazy(()=>a.e(33).then(a.bind(null,821))),b=o.a.lazy(()=>a.e(17).then(a.bind(null,794))),C=o.a.lazy(()=>a.e(37).then(a.bind(null,805)));var f=o.a.memo((function(e){const{repository:{username:t,name:a,description:n},branches:i,commitCount:f,objectType:E,loading:w}=e;let g="";for(const{isDefault:o,name:s}of i)o&&(g=s);return o.a.createElement("div",{className:l.a.Code},o.a.createElement(s.a,{active:!0,loading:w},o.a.createElement("div",{className:l.a.description},n),o.a.createElement(C,{commitCount:f,branches:i}),0===f?o.a.createElement(y,null):o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:l.a.buttonWrapper},o.a.createElement("div",{className:l.a.leftButtonWrapper},o.a.createElement(p,{branches:i}),o.a.createElement("div",{className:l.a.newPullRequestButtonWrapper},o.a.createElement(m.b,{to:u.Function.generateRepositoryCompareRoute({sourceRepositoryUsername:t,sourceRepositoryName:a,sourceRepositoryBranch:g,targetRepositoryBranch:g,repository:a,username:t})},o.a.createElement(r.a,null,"\u521b\u5efa Pull Request")))),o.a.createElement(d,{username:t,repository:a})),void 0===E||E===c.b.TREE?o.a.createElement(h,null):o.a.createElement(b,null))))})),E=a(73),w=a(84),g=a(222);class _ extends n.PureComponent{constructor(e){super(e),this.loadRepository=async()=>new Promise(async e=>{const{match:{params:{username:t,repository:a}}}=this.props,n=await g.a.repository({username:t},{name:a});null!==n&&this.setState({repository:n},()=>e())}),this.loadCommitCount=async()=>new Promise(async e=>{const{match:{params:{username:t,repository:a,branch:n}}}=this.props,{branches:o}=this.state;let s="";if(!n)for(const{isDefault:i,name:l}of o)i&&(s=l);const r=await g.a.commitCount({username:t},{name:a},n||s);if(null!==r){const{commitCount:t}=r;this.setState({commitCount:t},()=>e())}}),this.loadBranches=async()=>new Promise(async e=>{const{match:{params:{username:t,repository:a}}}=this.props,n=await g.a.branches({username:t,name:a});if(null!==n){const{branches:t}=n;this.setState({branches:t},()=>e())}}),this.state={repository:new E.g("","","",!0),branches:[],commitCount:0,loading:!0}}async componentDidMount(){this.setState({loading:!0}),await this.loadBranches(),await Promise.all([this.loadRepository(),this.loadCommitCount()]),this.setState({loading:!1})}async componentDidUpdate(e,t,a){const{match:{params:{username:n,repository:o,branch:s}}}=e,{match:{params:{username:r,repository:i,branch:l}}}=this.props;n!==r||o!==i?await this.componentDidMount():s!==l&&(this.setState({loading:!0}),await this.loadCommitCount(),this.setState({loading:!1}))}render(){const{repository:e,branches:t,commitCount:a,loading:n}=this.state,{match:{params:{objectType:s}}}=this.props;return o.a.createElement(f,{repository:e,commitCount:a,branches:t,objectType:s,loading:n})}}var R=Object(w.f)(_);a.d(t,"default",(function(){return R}))}}]);
//# sourceMappingURL=40.aa3a0419.chunk.js.map