(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9195,9993,7503,1554,2919,134],{73047:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return n(67131)}])},82583:function(e,t,n){"use strict";n.d(t,{db:function(){return s},I:function(){return c}});var r=n(83977),a=n(39828),o=n(91259),u=n(77004),i=(0,r.ZF)({apiKey:"AIzaSyBJA3OU9j2hD3eCcuBK1ufK9KIs7xkijqM",authDomain:"redsky-web.firebaseapp.com",projectId:"redsky-web",storageBucket:"redsky-web.appspot.com",messagingSenderId:"503303012281",appId:"1:503303012281:web:fbadea13c15e03b9c48068",measurementId:"G-75QR2Q2EBR"}),s=(0,a.ad)(i),c=(0,o.v0)(i);(0,u.$C)(i)},90638:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}t.default=function(e,t){var n=o.default,r={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};u=e,s=Promise,(null!=s&&"undefined"!==typeof Symbol&&s[Symbol.hasInstance]?s[Symbol.hasInstance](u):u instanceof s)?r.loader=function(){return e}:"function"===typeof e?r.loader=e:"object"===typeof e&&(r=a({},r,e));var u,s;var c=r=a({},r,t);if(c.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(c.suspense)return n(c);r.loadableGenerated&&delete(r=a({},r,r.loadableGenerated)).loadableGenerated;if("boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,i(n,r);delete r.ssr}return n(r)};u(n(67294));var o=u(n(14302));function u(e){return e&&e.__esModule?e:{default:e}}function i(e,t){return delete t.webpack,delete t.modules,e(t)}},16319:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var a=((r=n(67294))&&r.__esModule?r:{default:r}).default.createContext(null);t.LoadableContext=a},14302:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u,i=(u=n(67294))&&u.__esModule?u:{default:u},s=n(67161),c=n(16319);var l=[],d=[],f=!1;function p(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}var b=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}var t,n,a;return t=e,(n=[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;if(t.loading){if("number"===typeof n.delay)if(0===n.delay)this._state.pastDelay=!0;else{var r=this;this._delay=setTimeout((function(){r._update({pastDelay:!0})}),n.delay)}if("number"===typeof n.timeout){var a=this;this._timeout=setTimeout((function(){a._update({timedOut:!0})}),n.timeout)}}this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=o({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}])&&r(t.prototype,n),a&&r(t,a),e}();function h(e){return function(e,t){var n=function(){if(!a){var t=new b(e,r);a={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return a.promise()},r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);r.suspense&&(r.lazy=i.default.lazy(r.loader));var a=null;if(!f&&!r.suspense){var u=r.webpack?r.webpack():r.modules;u&&d.push((function(e){var t=!0,r=!1,a=void 0;try{for(var o,i=u[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var s=o.value;if(-1!==e.indexOf(s))return n()}}catch(c){r=!0,a=c}finally{try{t||null==i.return||i.return()}finally{if(r)throw a}}}))}var l=r.suspense?function(e,t){return i.default.createElement(r.lazy,o({},e,{ref:t}))}:function(e,t){n();var o=i.default.useContext(c.LoadableContext),u=s.useSubscription(a);return i.default.useImperativeHandle(t,(function(){return{retry:a.retry}}),[]),o&&Array.isArray(r.modules)&&r.modules.forEach((function(e){o(e)})),i.default.useMemo((function(){return u.loading||u.error?i.default.createElement(r.loading,{isLoading:u.loading,pastDelay:u.pastDelay,timedOut:u.timedOut,error:u.error,retry:a.retry}):u.loaded?i.default.createElement(function(e){return e&&e.__esModule?e.default:e}(u.loaded),e):null}),[e,u])};return l.preload=function(){return!r.suspense&&n()},l.displayName="LoadableComponent",i.default.forwardRef(l)}(p,e)}function v(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return v(e,t)}))}h.preloadAll=function(){return new Promise((function(e,t){v(l).then(e,t)}))},h.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return f=!0,t()};v(d,e).then(n,n)}))},window.__NEXT_PRELOADREADY=h.preloadReady;var y=h;t.default=y},67131:function(e,t,n){"use strict";n.r(t);var r=n(34051),a=n.n(r),o=n(85893),u=n(67294),i=n(5152),s=n(97375),c=n(68527),l=n(49609),d=n(39828),f=n(11163),p=n(91259),b=n(82583),h=n(73627),v=n(5526),y=n(89993),m=n(9008);function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function x(e,t,n,r,a,o,u){try{var i=e[o](u),s=i.value}catch(c){return void n(c)}i.done?t(s):Promise.resolve(s).then(r,a)}function w(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function u(e){x(o,r,a,u,i,"next",e)}function i(e){x(o,r,a,u,i,"throw",e)}u(void 0)}))}}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){_(e,t,n[t])}))}return e}function k(e){return function(e){if(Array.isArray(e))return g(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var S=(0,i.default)((function(){return Promise.all([n.e(9351),n.e(7311),n.e(9876),n.e(2199),n.e(180)]).then(n.bind(n,80180))}),{loadableGenerated:{webpack:function(){return[80180]}}}),O=(0,i.default)((function(){return Promise.all([n.e(9351),n.e(3513),n.e(6893),n.e(2141)]).then(n.bind(n,92141))}),{loadableGenerated:{webpack:function(){return[92141]}}}),C=(0,i.default)((function(){return Promise.all([n.e(9351),n.e(9876),n.e(5053)]).then(n.bind(n,65053))}),{loadableGenerated:{webpack:function(){return[65053]}}}),E=(0,i.default)((function(){return Promise.all([n.e(4617),n.e(9351),n.e(7311),n.e(3238),n.e(9839),n.e(8446),n.e(9762)]).then(n.bind(n,68446))}),{loadableGenerated:{webpack:function(){return[68446]}}}),P=(0,i.default)((function(){return Promise.all([n.e(9351),n.e(3238),n.e(5291),n.e(653),n.e(7793)]).then(n.bind(n,37241))}),{loadableGenerated:{webpack:function(){return[37241]}}}),A=(0,i.default)((function(){return n.e(9706).then(n.bind(n,9706))}),{loadableGenerated:{webpack:function(){return[9706]}}});t.default=function(){var e,t=(0,u.useState)(!1),n=t[0],r=(t[1],(0,u.useState)("")),i=r[0],g=r[1],x=(0,u.useState)(""),_=x[0],I=(x[1],(0,u.useState)([])),T=I[0],D=I[1],L=(0,u.useState)(""),R=L[0],z=L[1],B=(0,u.useState)(!1),N=B[0],G=B[1],M=(0,u.useState)(!0),X=(M[0],M[1]),Q=(0,u.useState)(0),V=Q[0],F=(Q[1],(0,u.useState)(!1)),U=F[0],J=(F[1],(0,u.useState)("")),K=J[0],H=(J[1],(0,u.useState)(!1)),Y=(H[0],H[1]),q=(0,u.useState)({}),W=q[0],$=q[1],Z=(0,u.useState)([]),ee=Z[0],te=Z[1],ne=(0,u.useState)([]),re=(ne[0],ne[1]),ae=(0,d.hJ)(b.db,"blogData"),oe=(0,d.JU)(b.db,"blogSettings","blogs-counter"),ue=(0,p.v0)(),ie=(0,f.useRouter)(),se=(0,s.qY)(),ce=se.isOpen,le=se.onOpen,de=se.onClose;(0,u.useEffect)((function(){var e=(0,d.IO)((0,d.hJ)(b.db,"categories"),(0,d.Xo)("createdAt","desc"));return(0,d.cf)(e,(function(e){var t=e.docs.map((function(e){return j({},e.data(),{id:e.id})}));re(t.reverse())}))}),[]);var fe=function(){var e=w(a().mark((function e(t,n){var r,o,u;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=[],o=n?(0,d.IO)(ae,(0,d.Xo)("createdAt","desc"),(0,d.b9)(t),(0,d.TQ)(n)):(0,d.IO)(ae,(0,d.Xo)("createdAt","desc"),(0,d.b9)(t)),e.next=5,(0,d.PL)(o);case 5:u=e.sent,z(u.docs[u.docs.length-1]),u.forEach((function(e){var t=e.data();t.hidden||r.push(j({},t,{id:e.id}))})),D(k(n?new Set(k(T).concat(k(r))):r)),X(!1),G(!1);case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),pe=function(){var e=w(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,d.QT)(oe);case 2:t=e.sent,$(j({},t.data()));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),be=function(){var e=w(a().mark((function e(t,n,r){var o,u,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=[],u=r?(0,d.IO)(ae,(0,d.ar)("category","==",n),(0,d.Xo)("createdAt","desc"),(0,d.b9)(t),(0,d.TQ)(r)):(0,d.IO)(ae,(0,d.ar)("category","==",n),(0,d.Xo)("createdAt","desc"),(0,d.b9)(t)),e.next=5,(0,d.PL)(u);case 5:i=e.sent,z(i.docs[i.docs.length-1]),i.forEach((function(e){o.push(j({},e.data(),{id:e.id}))})),D(r?function(e){return k(new Set(k(e).concat(k(o))))}:k(o)),G(!1);case 10:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),he=(function(){var e=w(a().mark((function e(t,n,r){var o,u,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return D([]),o=[],u=r?(0,d.IO)(ae,(0,d.Xo)("createdAt","desc"),(0,d.ar)("titleAsArray","array-contains",n.toLowerCase()),(0,d.b9)(t),(0,d.TQ)(r)):(0,d.IO)(ae,(0,d.ar)("titleAsArray","array-contains",n.toLowerCase()),(0,d.b9)(t)),e.next=6,(0,d.PL)(u);case 6:i=e.sent,z(i.docs[i.docs.length-1]),i.forEach((function(e){o.push(j({},e.data(),{id:e.id}))})),D(k(r?new Set(k(T).concat(k(o))):o)),X(!1);case 11:case"end":return e.stop()}}),e)})))}(),function(){var e=w(a().mark((function e(t){var r,o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=8;break}return r=(0,d.JU)(b.db,"authUsers",t.uid),e.next=4,(0,d.QT)(r);case 4:(o=e.sent).exists()&&o.data().isBlocked?g(null):(g(t),t&&n&&"admin"===(null===t||void 0===t?void 0:t.role)||ie.push("/blog")),e.next=9;break;case 8:g(null);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());(0,u.useEffect)((function(){ue.onAuthStateChanged(he)}),[n,i]),(0,u.useEffect)((function(){G(!0),U||fe(24,null)}),[_]);var ve=function(){window.scrollY>=280?Y(!0):Y(!1)};(0,u.useEffect)((function(){return pe(),window.addEventListener("scroll",ve),function(){window.removeEventListener("scroll",ve)}}),[]);var ye=function(){var e=w(a().mark((function e(t,n,r){var o,u,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(X(!0),G(!0),D([]),""!==t){e.next=8;break}return e.next=6,fe(n,r);case 6:e.next=17;break;case 8:return o=[],u=r?(0,d.IO)(ae,(0,d.Xo)("createdAt","desc"),(0,d.ar)("titleAsArray","array-contains",t.toLowerCase()),(0,d.b9)(n),(0,d.TQ)(r)):(0,d.IO)(ae,(0,d.ar)("titleAsArray","array-contains",t.toLowerCase()),(0,d.b9)(n)),e.next=13,(0,d.PL)(u);case 13:i=e.sent,z(i.docs[i.docs.length-1]),i.forEach((function(e){o.push(j({},e.data(),{id:e.id}))})),D(k(r?new Set(k(T).concat(k(o))):o));case 17:X(!1),G(!1);case 19:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(m.default,{children:[(0,o.jsx)("title",{children:"Redsky Advance Solutions Blog - Source for Education & Insights"}),(0,o.jsx)("meta",{name:"title",content:"Redsky Advance Solutions Blog - Source for Education & Insights"}),(0,o.jsx)("meta",{name:"description",content:"Discover a wealth of knowledge and insights on IT, Mobile app development, web development, and industry trends through the Redsky Advance Solutions blog."}),(0,o.jsx)("meta",{httpEquiv:"Content-Type",content:"text/html; charset=utf-8"}),(0,o.jsx)("meta",{name:"language",content:"English"}),(0,o.jsx)("link",{rel:"canonical",href:"https://redskyadvancesolutions.com/contact-us"})]}),(0,o.jsxs)(c.xu,{children:[(0,o.jsx)(S,{}),(0,o.jsxs)(c.xu,{bg:"#101114",children:[(0,o.jsx)(C,{webimages:h.Z,onClickHandler:function(){ie.push("/blog/adminPage")},blogConstant:v.Wl,handleChange:function(e){var t=e.target.value;ye(t)}}),(0,o.jsx)(E,{isOpen:ce,onClose:de,onOpen:le}),(0,o.jsx)(c.xu,{px:["6","6","10","10","10"],children:(0,o.jsxs)(c.kC,{justifyContent:"center",mt:"20",children:[(0,o.jsx)(c.xu,{mx:"auto",textAlign:"center",children:N?(0,o.jsx)(l.$,{color:"yellow.400",size:"xl",textAlign:"centers"}):null}),(0,o.jsxs)(c.rj,{templateColumns:["repeat(1, 1fr)","repeat(1, 1fr)","repeat(1, 1fr)","repeat(3, 1fr)","repeat(3, 1fr)"],gap:10,children:[" ",ee.map((function(e,t){return(0,o.jsx)(c.xu,{cursor:"pointer",children:(0,o.jsx)(P,{data:e,currentUser:i,index:t,push:ie.push},t)},t)}))]})]})}),(0,o.jsx)(c.xu,{children:(0,o.jsx)(A,{lastFetchedDoc:R,currentPageData:function(e){te(k(e))},fetchDataFromDB:U?be:fe,blogsPerPage:6,visiblePages:4,totalBlogCount:T.length>0?T.length:null===(e=W[U?v.dY[V].key:"all"])||void 0===e?void 0:e.count,fetchedData:T,selectedQueryKey:K})})]}),(0,o.jsx)(c.xu,{position:"relative",my:"20",className:"noise",children:(0,o.jsx)(y.default,{})}),(0,o.jsx)(O,{})]})]})}},87503:function(e,t,n){"use strict";n.r(t);var r=n(85893),a=n(68527),o=n(15193);t.default=function(e){return(0,r.jsx)(a.xu,{children:(0,r.jsx)(o.zx,{border:"solid 2px #faae01",className:(null===e||void 0===e?void 0:e.showShadow)?"with-shadow":"",title:e.title,variant:"trainingButton",bg:"rgb(11, 11, 13)",boxShadow:"0 0 20px  rgba(255, 174, 0, 0.4)",transition:"all 0.1s",_hover:{border:"solid 3px #faae01",transform:"scale(1.05)",opacity:1,boxShadow:"0 0 20px #ffae00",background:"rgb(11, 11, 13)"},_focus:{outline:"none",background:"gray.500"},_active:{outline:"none",background:"gray.500"},onClick:e.onClickHandler,disabled:e.disabledButton,children:(0,r.jsx)(a.xv,{variant:"gradient",fontWeight:"800",textTransform:"none",fontSize:e.sizes?e.sizes:"1xl",children:e.text})})})}},89993:function(e,t,n){"use strict";n.r(t);var r=n(85893),a=n(68527),o=n(67294),u=n(11163),i=n(87503),s=n(5526);t.default=function(){var e=(0,u.useRouter)(),t=(0,o.useState)(!1),n=t[0],c=t[1];return(0,o.useEffect)((function(){var e=setInterval((function(){c((function(e){return!e}))}),800);return function(){return clearInterval(e)}}),[]),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(a.xu,{m:"auto",textAlign:"center",bg:"secondary.300",w:["94%","94%","80%","70%","70%"],h:["150px","150px","180px","180px","180px"],borderRadius:"150px",display:"flex",flexDirection:"column",justifyContent:"center",border:"1px solid #ffae00",boxShadow:"0 0 20px #ffae00",transition:"all 0.1s",px:"8",children:[(0,r.jsx)(a.xv,{fontSize:["md","md","1.2vw","1.2vw","1.9vw"],fontWeight:"bold",mb:"4",children:s.kv}),(0,r.jsx)(i.default,{title:"Contact Us",text:"LET'S CONNECT",sizes:"xl",showShadow:n,onClickHandler:function(){e.push("/contact-us")}})]})})}},5152:function(e,t,n){e.exports=n(90638)},68217:function(e,t,n){"use strict";var r=n(96086),a=n(67294);t.useSubscription=function(e){var t=e.getCurrentValue,n=e.subscribe,o=a.useState((function(){return{getCurrentValue:t,subscribe:n,value:t()}}));e=o[0];var u=o[1];return o=e.value,e.getCurrentValue===t&&e.subscribe===n||(o=t(),u({getCurrentValue:t,subscribe:n,value:o})),a.useDebugValue(o),a.useEffect((function(){function e(){if(!a){var e=t();u((function(a){return a.getCurrentValue!==t||a.subscribe!==n||a.value===e?a:r({},a,{value:e})}))}}var a=!1,o=n(e);return e(),function(){a=!0,o()}}),[t,n]),o}},67161:function(e,t,n){"use strict";e.exports=n(68217)}},function(e){e.O(0,[2016,4597,9351,4607,9774,2888,179],(function(){return t=73047,e(e.s=t);var t}));var t=e.O();_N_E=t}]);