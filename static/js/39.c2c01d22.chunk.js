(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[39],{783:function(t,e,s){t.exports={PreviousFolderItem:"Style_PreviousFolderItem__2Kqwe",link:"Style_link__qkBVr"}},822:function(t,e,s){"use strict";s.r(e);var o=s(0),a=s.n(o),n=(s(660),s(659)),r=s(783),i=s.n(r),c=s(11);var l=a.a.memo((function(t){const{to:e}=t;return a.a.createElement(n.a.Item,{className:i.a.PreviousFolderItem},a.a.createElement(c.b,{to:e,className:i.a.link},".."))})),h=s(84);class p extends o.PureComponent{constructor(t){super(t),this.setPreviousFolderPath=()=>{const{match:{params:{path:t}},location:{pathname:e}}=this.props;if(void 0===t)this.setState({to:e});else{const t=e.lastIndexOf("/");this.setState({to:e.slice(0,t)})}},this.state={to:""}}componentDidMount(){this.setPreviousFolderPath()}componentDidUpdate(t,e,s){const{match:{params:{path:o}}}=this.props,{match:{params:{path:a}}}=t;o!==a&&this.setPreviousFolderPath()}render(){const{to:t}=this.state;return a.a.createElement(l,{to:t})}}var u=Object(h.f)(p);s.d(e,"default",(function(){return u}))}}]);
//# sourceMappingURL=39.c2c01d22.chunk.js.map