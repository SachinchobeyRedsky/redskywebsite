(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8455],{56375:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact-us",function(){return n(41281)}])},90638:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}t.default=function(e,t){var n=u.default,r={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};o=e,l=Promise,(null!=l&&"undefined"!==typeof Symbol&&l[Symbol.hasInstance]?l[Symbol.hasInstance](o):o instanceof l)?r.loader=function(){return e}:"function"===typeof e?r.loader=e:"object"===typeof e&&(r=a({},r,e));var o,l;var s=r=a({},r,t);if(s.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(s.suspense)return n(s);r.loadableGenerated&&delete(r=a({},r,r.loadableGenerated)).loadableGenerated;if("boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,i(n,r);delete r.ssr}return n(r)};o(n(67294));var u=o(n(14302));function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){return delete t.webpack,delete t.modules,e(t)}},16319:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var a=((r=n(67294))&&r.__esModule?r:{default:r}).default.createContext(null);t.LoadableContext=a},14302:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,i=(o=n(67294))&&o.__esModule?o:{default:o},l=n(67161),s=n(16319);var c=[],d=[],f=!1;function b(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}var p=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}var t,n,a;return t=e,(n=[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;if(t.loading){if("number"===typeof n.delay)if(0===n.delay)this._state.pastDelay=!0;else{var r=this;this._delay=setTimeout((function(){r._update({pastDelay:!0})}),n.delay)}if("number"===typeof n.timeout){var a=this;this._timeout=setTimeout((function(){a._update({timedOut:!0})}),n.timeout)}}this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=u({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}])&&r(t.prototype,n),a&&r(t,a),e}();function m(e){return function(e,t){var n=function(){if(!a){var t=new p(e,r);a={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return a.promise()},r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);r.suspense&&(r.lazy=i.default.lazy(r.loader));var a=null;if(!f&&!r.suspense){var o=r.webpack?r.webpack():r.modules;o&&d.push((function(e){var t=!0,r=!1,a=void 0;try{for(var u,i=o[Symbol.iterator]();!(t=(u=i.next()).done);t=!0){var l=u.value;if(-1!==e.indexOf(l))return n()}}catch(s){r=!0,a=s}finally{try{t||null==i.return||i.return()}finally{if(r)throw a}}}))}var c=r.suspense?function(e,t){return i.default.createElement(r.lazy,u({},e,{ref:t}))}:function(e,t){n();var u=i.default.useContext(s.LoadableContext),o=l.useSubscription(a);return i.default.useImperativeHandle(t,(function(){return{retry:a.retry}}),[]),u&&Array.isArray(r.modules)&&r.modules.forEach((function(e){u(e)})),i.default.useMemo((function(){return o.loading||o.error?i.default.createElement(r.loading,{isLoading:o.loading,pastDelay:o.pastDelay,timedOut:o.timedOut,error:o.error,retry:a.retry}):o.loaded?i.default.createElement(function(e){return e&&e.__esModule?e.default:e}(o.loaded),e):null}),[e,o])};return c.preload=function(){return!r.suspense&&n()},c.displayName="LoadableComponent",i.default.forwardRef(c)}(b,e)}function h(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return h(e,t)}))}m.preloadAll=function(){return new Promise((function(e,t){h(c).then(e,t)}))},m.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return f=!0,t()};h(d,e).then(n,n)}))},window.__NEXT_PRELOADREADY=m.preloadReady;var y=m;t.default=y},41281:function(e,t,n){"use strict";n.r(t);var r=n(85893),a=(n(67294),n(68527)),u=n(5152),o=n(9008),i=n(73627),l=(0,u.default)((function(){return n.e(7417).then(n.bind(n,47417))}),{loadableGenerated:{webpack:function(){return[47417]}}}),s=(0,u.default)((function(){return Promise.all([n.e(2016),n.e(4597),n.e(1228),n.e(5006),n.e(9351),n.e(4607),n.e(3238),n.e(6893),n.e(7163),n.e(3956),n.e(870),n.e(9140)]).then(n.bind(n,29327))}),{loadableGenerated:{webpack:function(){return[29327]}}}),c=(0,u.default)((function(){return Promise.all([n.e(9351),n.e(7311),n.e(9876),n.e(2199),n.e(180)]).then(n.bind(n,80180))}),{loadableGenerated:{webpack:function(){return[80180]}}}),d=(0,u.default)((function(){return Promise.all([n.e(9351),n.e(3513),n.e(6893),n.e(2141),n.e(2919)]).then(n.bind(n,92141))}),{loadableGenerated:{webpack:function(){return[92141]}}});t.default=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.default,{children:[(0,r.jsx)("title",{children:"Contact Us - Redsky Advance Solutions"}),(0,r.jsx)("meta",{name:"title",content:"Contact Us - Redsky Advance Solutions"}),(0,r.jsx)("meta",{name:"description",content:"Explore our diverse portfolio, featuring a range of successful projects that demonstrate the expertise and capabilities of Redsky Advance Solutions. "}),(0,r.jsx)("meta",{httpEquiv:"Content-Type",content:"text/html; charset=utf-8"}),(0,r.jsx)("meta",{name:"language",content:"English"})]}),(0,r.jsxs)(a.xu,{backgroundRepeat:"no-repeat",backgroundPosition:"bottom",backgroundColor:"brand.black",backgroundSize:["300%","300%","200%","200%","100%"],w:"100%",color:"white",h:["full","full","full","full","full"],userSelect:"none",children:[(0,r.jsx)(c,{}),(0,r.jsx)(a.xu,{className:"custom-scroll-bar",w:"100%",px:[".5rem",".5rem","2.5rem","2.5rem","2.5rem"],pt:"8rem",color:"white",bg:"linear-gradient(to right, #101114a0,#101114a0),url(".concat(i.Z.publicimages.carrierBack,")"),backgroundRepeat:"no-repeat",fontFamily:"Raleway",backgroundPosition:"center",backgroundSize:"cover",children:(0,r.jsx)(l,{})}),(0,r.jsx)(s,{}),(0,r.jsx)(d,{})]})]})}},5152:function(e,t,n){e.exports=n(90638)},68217:function(e,t,n){"use strict";var r=n(96086),a=n(67294);t.useSubscription=function(e){var t=e.getCurrentValue,n=e.subscribe,u=a.useState((function(){return{getCurrentValue:t,subscribe:n,value:t()}}));e=u[0];var o=u[1];return u=e.value,e.getCurrentValue===t&&e.subscribe===n||(u=t(),o({getCurrentValue:t,subscribe:n,value:u})),a.useDebugValue(u),a.useEffect((function(){function e(){if(!a){var e=t();o((function(a){return a.getCurrentValue!==t||a.subscribe!==n||a.value===e?a:r({},a,{value:e})}))}}var a=!1,u=n(e);return e(),function(){a=!0,u()}}),[t,n]),u}},67161:function(e,t,n){"use strict";e.exports=n(68217)}},function(e){e.O(0,[9774,2888,179],(function(){return t=56375,e(e.s=t);var t}));var t=e.O();_N_E=t}]);