(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[18],{1008:function(t,e,n){},1009:function(t,e,n){t.exports={Code:"Style_Code__1ctON",description:"Style_description__1eiYJ",buttonWrapper:"Style_buttonWrapper__2aT3I"}},1218:function(t,e,n){"use strict";n.r(e);var r=n(7),o=n.n(r),a=n(27),i=n(61),c=n(84),u=n(265),s=n(264),l=n(266),p=n(0),f=n.n(p),y=(n(99),n(1008),n(16)),m=n.n(y);function b(t){return(b="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function h(){return(h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function w(t,e){return!e||"object"!==b(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function O(t){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function g(t,e){return(g=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var j=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),w(this,O(e).apply(this,arguments))}var n,r,o;return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&g(t,e)}(e,t),n=e,(r=[{key:"render",value:function(){var t,e,n=this.props,r=n.prefixCls,o=n.className,a=n.style,i=n.size,c=n.shape,u=m()((v(t={},"".concat(r,"-lg"),"large"===i),v(t,"".concat(r,"-sm"),"small"===i),t)),s=m()((v(e={},"".concat(r,"-circle"),"circle"===c),v(e,"".concat(r,"-square"),"square"===c),e)),l="number"===typeof i?{width:i,height:i,lineHeight:"".concat(i,"px")}:{};return p.createElement("span",{className:m()(r,o,u,s),style:h(h({},l),a)})}}])&&d(n.prototype,r),o&&d(n,o),e}(p.Component);j.defaultProps={size:"large"};var E=j;function C(){return(C=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var S=function(t){var e=t.prefixCls,n=t.className,r=t.width,o=t.style;return p.createElement("h3",{className:m()(e,n),style:C({width:r},o)})};function _(t){return(_="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function P(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function x(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function k(t,e){return!e||"object"!==_(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function N(t){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function T(t,e){return(T=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var A=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),k(this,N(e).apply(this,arguments))}var n,r,o;return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&T(t,e)}(e,t),n=e,(r=[{key:"getWidth",value:function(t){var e=this.props,n=e.width,r=e.rows,o=void 0===r?2:r;return Array.isArray(n)?n[t]:o-1===t?n:void 0}},{key:"render",value:function(){var t=this,e=this.props,n=e.prefixCls,r=e.className,o=e.style,a=e.rows,i=P(Array(a)).map((function(e,n){return p.createElement("li",{key:n,style:{width:t.getWidth(n)}})}));return p.createElement("ul",{className:m()(n,r),style:o},i)}}])&&x(n.prototype,r),o&&x(n,o),e}(p.Component),z=n(35);function R(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function W(){return(W=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function B(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function q(t,e){return!e||"object"!==H(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function D(t){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function J(t,e){return(J=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function H(t){return(H="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function I(t){return t&&"object"===H(t)?t:{}}var F=function(t){function e(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(t=q(this,D(e).apply(this,arguments))).renderSkeleton=function(e){var n=e.getPrefixCls,r=t.props,o=r.prefixCls,a=r.loading,i=r.className,c=r.children,u=r.avatar,s=r.title,l=r.paragraph,f=r.active,y=n("skeleton",o);if(a||!("loading"in t.props)){var b,h,v,d=!!u,w=!!s,O=!!l;if(d){var g=W(W({prefixCls:"".concat(y,"-avatar")},function(t,e){return t&&!e?{shape:"square"}:{shape:"circle"}}(w,O)),I(u));h=p.createElement("div",{className:"".concat(y,"-header")},p.createElement(E,g))}if(w||O){var j,C;if(w){var _=W(W({prefixCls:"".concat(y,"-title")},function(t,e){return!t&&e?{width:"38%"}:t&&e?{width:"50%"}:{}}(d,O)),I(s));j=p.createElement(S,_)}if(O){var P=W(W({prefixCls:"".concat(y,"-paragraph")},function(t,e){var n={};return t&&e||(n.width="61%"),n.rows=!t&&e?3:2,n}(d,w)),I(l));C=p.createElement(A,P)}v=p.createElement("div",{className:"".concat(y,"-content")},j,C)}var x=m()(y,i,(R(b={},"".concat(y,"-with-avatar"),d),R(b,"".concat(y,"-active"),f),b));return p.createElement("div",{className:x},h,v)}return c},t}var n,r,o;return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&J(t,e)}(e,t),n=e,(r=[{key:"render",value:function(){return p.createElement(z.a,null,this.renderSkeleton)}}])&&B(n.prototype,r),o&&B(n,o),e}(p.Component);F.defaultProps={avatar:!1,title:!0,paragraph:!0};var L=F,M=n(1009),U=n.n(M),Y=n(971),G=f.a.lazy((function(){return Promise.all([n.e(23),n.e(27)]).then(n.bind(null,1224))})),K=f.a.lazy((function(){return Promise.all([n.e(1),n.e(3),n.e(5),n.e(11)]).then(n.bind(null,1219))})),Q=f.a.lazy((function(){return Promise.all([n.e(0),n.e(20)]).then(n.bind(null,1221))})),V=f.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(12),n.e(22)]).then(n.bind(null,1226))})),X=f.a.lazy((function(){return Promise.all([n.e(5),n.e(9),n.e(19)]).then(n.bind(null,1225))})),Z=f.a.lazy((function(){return n.e(26).then(n.bind(null,1231))}));var $=f.a.memo((function(t){var e=t.repository,n=e.username,r=e.name,o=e.description,a=t.branches,i=t.commitCount,c=t.isEmpty,u=t.objectType,s=t.loading;return f.a.createElement("div",{className:U.a.Code},f.a.createElement(L,{active:!0,loading:s},f.a.createElement("div",{className:U.a.description},o),f.a.createElement(Z,{commitCount:i,branchCount:a.length}),c?f.a.createElement(V,null):f.a.createElement(f.a.Fragment,null,f.a.createElement("div",{className:U.a.buttonWrapper},f.a.createElement(G,{branches:a}),f.a.createElement(Q,{username:n,repository:r})),void 0===u||u===Y.a.TREE?f.a.createElement(K,null):f.a.createElement(X,null))))})),tt=n(267),et=n(97),nt=n(268),rt=function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(u.a)(this,Object(s.a)(e).call(this,t))).loadRepository=Object(a.a)(o.a.mark((function t(){var e,r,a,i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.props.match.params,r=e.username,a=e.repository,t.next=3,nt.a.repository(r,a);case 3:null!==(i=t.sent)&&n.setState({repository:i});case 5:case"end":return t.stop()}}),t)}))),n.loadCommitCount=Object(a.a)(o.a.mark((function t(){var e,r,a,i,c,u,s=arguments;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=s.length>0&&void 0!==s[0]?s[0]:"HEAD",r=n.props.match.params,a=r.username,i=r.repository,t.next=4,nt.a.commitCount(a,i,e);case 4:null!==(c=t.sent)&&(0===(u=c.commitCount)?n.setState({isEmpty:!0}):n.setState({commitCount:u}));case 6:case"end":return t.stop()}}),t)}))),n.loadBranches=Object(a.a)(o.a.mark((function t(){var e,r,a,i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.props.match.params,r=e.username,a=e.repository,t.next=3,nt.a.branch(r,a);case 3:null!==(i=t.sent)&&n.setState({branches:i});case 5:case"end":return t.stop()}}),t)}))),n.state={repository:new tt.d("","","",!0),branches:[],commitCount:0,isEmpty:!1,loading:!0},n}return Object(l.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){var t=Object(a.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.setState({loading:!0}),t.next=3,Promise.all([this.loadRepository(),this.loadCommitCount()]);case 3:if(this.state.isEmpty){t.next=7;break}return t.next=7,this.loadBranches();case 7:this.setState({loading:!1});case 8:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var t=Object(a.a)(o.a.mark((function t(e,n,r){var a,i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=e.match.params.branch,i=this.props.match.params.branch,a===i){t.next=7;break}return this.setState({loading:!0}),t.next=6,this.loadCommitCount(i);case 6:this.setState({loading:!1});case 7:case"end":return t.stop()}}),t,this)})));return function(e,n,r){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state,e=t.repository,n=t.branches,r=t.commitCount,o=t.isEmpty,a=t.loading,i=this.props.match.params.objectType;return f.a.createElement($,{isEmpty:o,repository:e,commitCount:r,branches:n,objectType:i,loading:a})}}]),e}(p.PureComponent),ot=Object(et.f)(rt);n.d(e,"default",(function(){return ot}))},971:function(t,e,n){"use strict";var r;!function(t){t.BLOB="blob",t.TREE="tree"}(r||(r={})),n.d(e,"a",(function(){return r}))}}]);
//# sourceMappingURL=18.129f9c4e.chunk.js.map