(this["webpackJsonpsoulike-git"]=this["webpackJsonpsoulike-git"]||[]).push([[19],{659:function(e,t,r){"use strict";var o=r(0),n=r.n(o),s=r(7);var a=n.a.memo((function(e){return n.a.createElement(s.b,Object.assign({},e,{target:"_blank",rel:"noopener norefferrer"}))}));r.d(t,"a",(function(){return a}))},670:function(e,t,r){"use strict";r(128);var o=r(35),n=r(145),s=r(0),a=r.n(s);var i=a.a.memo((function(e){var t=e.isPublic,r=Object(n.a)(e,["isPublic"]);return t?a.a.createElement(o.a,Object.assign({color:"blue"},r),"\u516c\u5171"):a.a.createElement(o.a,Object.assign({color:"gold"},r),"\u79c1\u4eba")}));r.d(t,"a",(function(){return i}))},672:function(e,t,r){"use strict";r(664);var o=r(663),n=(r(336),r(222)),s=(r(221),r(67)),a=r(0),i=r.n(a),l=r(673),u=r.n(l),c=r(22),p=r(670),d=r(659);var h=function(e){const{repositories:t,loading:r,showUsername:a}=e;return i.a.createElement(o.a,{className:u.a.RepositoryList,dataSource:[...t],loading:r,locale:{emptyText:i.a.createElement(s.a,{description:"\u6ca1\u6709\u4ed3\u5e93"})},renderItem:e=>{const{username:t,name:r,description:o,isPublic:s}=e;return i.a.createElement(d.a,{className:u.a.repositoryWrapper,to:c.Function.generateRepositoryCodeRoute({username:t,repository:r})},i.a.createElement(n.a,{className:u.a.repository},i.a.createElement(n.a.Meta,{title:i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a,{isPublic:s}),a?"".concat(t,"/"):"",r),description:i.a.createElement("div",null,0===o.length?i.a.createElement("i",null,"\u6ca1\u6709\u63cf\u8ff0"):o)})))}})};r.d(t,"a",(function(){return h}))},673:function(e,t,r){e.exports={RepositoryList:"Style_RepositoryList__3Ox2N",repositoryWrapper:"Style_repositoryWrapper__8uUYD"}},703:function(e,t,r){e.exports={Index:"Style_Index__3aRmg",alertWrapper:"Style_alertWrapper__1vm7c",description:"Style_description__Fp3il",meme:"Style_meme__gsx9j",repositoryWrapper:"Style_repositoryWrapper__mjMAI"}},704:function(e,t,r){e.exports=r(705)},705:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),n=r(0),s=i(n),a=i(r(2));function i(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.scrollListener=r.scrollListener.bind(r),r.eventListenerOptions=r.eventListenerOptions.bind(r),r.mousewheelListener=r.mousewheelListener.bind(r),r}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){this.pageLoaded=this.props.pageStart,this.options=this.eventListenerOptions(),this.attachScrollListener()}},{key:"componentDidUpdate",value:function(){if(this.props.isReverse&&this.loadMore){var e=this.getParentElement(this.scrollComponent);e.scrollTop=e.scrollHeight-this.beforeScrollHeight+this.beforeScrollTop,this.loadMore=!1}this.attachScrollListener()}},{key:"componentWillUnmount",value:function(){this.detachScrollListener(),this.detachMousewheelListener()}},{key:"isPassiveSupported",value:function(){var e=!1,t={get passive(){e=!0}};try{document.addEventListener("test",null,t),document.removeEventListener("test",null,t)}catch(r){}return e}},{key:"eventListenerOptions",value:function(){var e=this.props.useCapture;return this.isPassiveSupported()&&(e={useCapture:this.props.useCapture,passive:!0}),e}},{key:"setDefaultLoader",value:function(e){this.defaultLoader=e}},{key:"detachMousewheelListener",value:function(){var e=window;!1===this.props.useWindow&&(e=this.scrollComponent.parentNode),e.removeEventListener("mousewheel",this.mousewheelListener,this.options?this.options:this.props.useCapture)}},{key:"detachScrollListener",value:function(){var e=window;!1===this.props.useWindow&&(e=this.getParentElement(this.scrollComponent)),e.removeEventListener("scroll",this.scrollListener,this.options?this.options:this.props.useCapture),e.removeEventListener("resize",this.scrollListener,this.options?this.options:this.props.useCapture)}},{key:"getParentElement",value:function(e){var t=this.props.getScrollParent&&this.props.getScrollParent();return null!=t?t:e&&e.parentNode}},{key:"filterProps",value:function(e){return e}},{key:"attachScrollListener",value:function(){var e=this.getParentElement(this.scrollComponent);if(this.props.hasMore&&e){var t=window;!1===this.props.useWindow&&(t=e),t.addEventListener("mousewheel",this.mousewheelListener,this.options?this.options:this.props.useCapture),t.addEventListener("scroll",this.scrollListener,this.options?this.options:this.props.useCapture),t.addEventListener("resize",this.scrollListener,this.options?this.options:this.props.useCapture),this.props.initialLoad&&this.scrollListener()}}},{key:"mousewheelListener",value:function(e){1!==e.deltaY||this.isPassiveSupported()||e.preventDefault()}},{key:"scrollListener",value:function(){var e=this.scrollComponent,t=window,r=this.getParentElement(e),o=void 0;if(this.props.useWindow){var n=document.documentElement||document.body.parentNode||document.body,s=void 0!==t.pageYOffset?t.pageYOffset:n.scrollTop;o=this.props.isReverse?s:this.calculateOffset(e,s)}else o=this.props.isReverse?r.scrollTop:e.scrollHeight-r.scrollTop-r.clientHeight;o<Number(this.props.threshold)&&e&&null!==e.offsetParent&&(this.detachScrollListener(),this.beforeScrollHeight=r.scrollHeight,this.beforeScrollTop=r.scrollTop,"function"===typeof this.props.loadMore&&(this.props.loadMore(this.pageLoaded+=1),this.loadMore=!0))}},{key:"calculateOffset",value:function(e,t){return e?this.calculateTopPosition(e)+(e.offsetHeight-t-window.innerHeight):0}},{key:"calculateTopPosition",value:function(e){return e?e.offsetTop+this.calculateTopPosition(e.offsetParent):0}},{key:"render",value:function(){var e=this,t=this.filterProps(this.props),r=t.children,o=t.element,n=t.hasMore,a=(t.initialLoad,t.isReverse),i=t.loader,l=(t.loadMore,t.pageStart,t.ref),u=(t.threshold,t.useCapture,t.useWindow,t.getScrollParent,function(e,t){var r={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);return r}(t,["children","element","hasMore","initialLoad","isReverse","loader","loadMore","pageStart","ref","threshold","useCapture","useWindow","getScrollParent"]));u.ref=function(t){e.scrollComponent=t,l&&l(t)};var c=[r];return n&&(i?a?c.unshift(i):c.push(i):this.defaultLoader&&(a?c.unshift(this.defaultLoader):c.push(this.defaultLoader))),s.default.createElement(o,u,c)}}]),t}(n.Component);l.propTypes={children:a.default.node.isRequired,element:a.default.node,hasMore:a.default.bool,initialLoad:a.default.bool,isReverse:a.default.bool,loader:a.default.node,loadMore:a.default.func.isRequired,pageStart:a.default.number,ref:a.default.func,getScrollParent:a.default.func,threshold:a.default.number,useCapture:a.default.bool,useWindow:a.default.bool},l.defaultProps={element:"div",hasMore:!1,initialLoad:!0,pageStart:0,ref:null,threshold:250,useWindow:!0,isReverse:!1,useCapture:!1,loader:null,getScrollParent:null},t.default=l,e.exports=t.default},718:function(e,t,r){e.exports=r.p+"static/media/minato-aqua.01b9ae76.webp"},812:function(e,t,r){"use strict";r.r(t);var o=r(23),n=r.n(o),s=r(25),a=r(39),i=r(8),l=r(13),u=r(44),c=r(43),p=r(45),d=r(0),h=r.n(d),f=r(27),m=(r(225),r(106)),v=r(703),y=r.n(v),g=r(704),b=r.n(g),E=r(672),L=r(212),w=r(718),S=r.n(w);var _=function(e){const{repositoryList:t,loadMore:r,loading:o,hasMore:n}=e;return h.a.createElement("div",{className:y.a.Index},h.a.createElement("div",{className:y.a.alertWrapper},h.a.createElement(m.a,{type:"warning",message:"\u9879\u76ee\u4ecd\u5728\u5f00\u53d1\u4e2d",closable:!0,description:h.a.createElement("div",{className:y.a.description},h.a.createElement("div",{className:y.a.text},h.a.createElement("div",null,"\u672c\u9879\u76ee\u4ec5\u7531",h.a.createElement("strong",null," 1 \u4e2a"),"\u7ec3\u4e60\u65f6\u957f\u4e24\u5e74\u534a\u5e72\u5565\u5565\u4e0d\u884c\u5403\u996d\u7b2c\u4e00\u540d\u7684\u524d\u7aef\u5f00\u53d1\uff0c\u4e14\u540e\u7aef\u8fd0\u884c\u5728\u6bcf\u6708\u4ec5\u9700 9.5 \u4eba\u6c11\u5e01\u7684\u8fa3\u9e21\u670d\u52a1\u5668\u4e0a\u3002"),h.a.createElement("div",null,h.a.createElement("strong",null,"\u8bf7\u5927\u5bb6\u5907\u4efd\u597d\u81ea\u5df1\u7684\u4ee3\u7801"),"\uff0c\u51fa\u73b0 BUG \u8bf7",h.a.createElement(L.a,{href:"https://github.com/Soulike/Gardenia/issues"},"\u63d0 Issue"),"\u3002"),h.a.createElement("div",null,"\u8bf7\u5404\u4f4d\u591a\u62c5\u5f85\uff0c\u7528\u6b63\u5e38\u7684\u59ff\u52bf\u4f7f\u7528\u672c\u5e73\u53f0\uff0c\u4e0d\u80dc\u611f\u8c22\ud83d\ude00\u3002")),h.a.createElement("div",{className:y.a.memeWrapper},h.a.createElement("img",{src:S.a,alt:"meme",className:y.a.meme}))),banner:!0})),h.a.createElement(b.a,{loadMore:r,initialLoad:!1,hasMore:n},h.a.createElement(E.a,{repositories:t,loading:o,showUsername:!0})))},P=r(144),M=function(e){function t(e){var r;return Object(i.a)(this,t),(r=Object(u.a)(this,Object(c.a)(t).call(this,e))).setTitle=function(){document.title=P.a.NAME},r.loadMoreRepositories=Object(a.a)(n.a.mark((function e(){var o,a,i,l;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=r.state,a=o.repositories,i=o.lastEnd,r.setState({loading:!0}),e.next=4,f.g.getRepositories(i,i+t.PAGE_SIZE);case 4:l=e.sent,r.setState({loading:!1}),null!==l&&(a.push.apply(a,Object(s.a)(l)),r.setState({lastEnd:i+t.PAGE_SIZE-1}),l.length<t.PAGE_SIZE&&r.setState({hasMore:!1}),r.forceUpdate());case 7:case"end":return e.stop()}}),e)}))),r.state={repositories:[],loading:!0,hasMore:!0,lastEnd:0},r}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=Object(a.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setTitle(),e.next=3,this.loadMoreRepositories();case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.repositories,r=e.hasMore,o=e.loading;return h.a.createElement(_,{repositoryList:t,loadMore:this.loadMoreRepositories,hasMore:r,loading:o})}}]),t}(d.PureComponent);M.PAGE_SIZE=10;var O=M;r.d(t,"default",(function(){return O}))}}]);
//# sourceMappingURL=19.6090b332.chunk.js.map