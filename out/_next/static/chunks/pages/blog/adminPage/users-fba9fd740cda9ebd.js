(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9304],{86639:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/adminPage/users",function(){return r(53574)}])},82583:function(n,e,r){"use strict";r.d(e,{db:function(){return u},I:function(){return s}});var t=r(83977),o=r(39828),a=r(91259),c=r(77004),i=(0,t.ZF)({apiKey:"AIzaSyBJA3OU9j2hD3eCcuBK1ufK9KIs7xkijqM",authDomain:"redsky-web.firebaseapp.com",projectId:"redsky-web",storageBucket:"redsky-web.appspot.com",messagingSenderId:"503303012281",appId:"1:503303012281:web:fbadea13c15e03b9c48068",measurementId:"G-75QR2Q2EBR"}),u=(0,o.ad)(i),s=(0,a.v0)(i);(0,c.$C)(i)},53574:function(n,e,r){"use strict";r.r(e);var t=r(34051),o=r.n(t),a=r(85893),c=r(67294),i=r(39828),u=r(82583),s=r(68527),d=r(15193);function l(n,e,r,t,o,a,c){try{var i=n[a](c),u=i.value}catch(s){return void r(s)}i.done?e(u):Promise.resolve(u).then(t,o)}function f(n){return function(){var e=this,r=arguments;return new Promise((function(t,o){var a=n.apply(e,r);function c(n){l(a,t,o,c,i,"next",n)}function i(n){l(a,t,o,c,i,"throw",n)}c(void 0)}))}}e.default=function(){var n=(0,c.useState)([]),e=n[0],r=n[1],t=function(){var n=f(o().mark((function n(){var e,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.PL)((0,i.hJ)(u.db,"authUsers"));case 2:e=n.sent,t=[],e.forEach((function(n){var e=n.data();t.push(e)})),r(t);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();(0,c.useEffect)((function(){t()}),[]);var l=function(){var n=f(o().mark((function n(e,r){var a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a=(0,i.JU)(u.db,"authUsers",e),n.next=4,(0,i.r7)(a,{isBlocked:!r});case 4:t(),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error("Error blocking/unblocking user:",n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e,r){return n.apply(this,arguments)}}();return(0,a.jsxs)(s.xu,{px:"20",py:"10",bg:"brand.black",color:"brand.white",children:[(0,a.jsx)(s.xv,{mb:"4",fontSize:"1xl",fontWeight:"extrabold",children:"All User"}),null===e||void 0===e?void 0:e.map((function(n,e){return(0,a.jsxs)(s.xu,{mb:"6",p:"2",w:"50%",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",textAlign:"center",borderRadius:"10",border:"solid 2px #faae01",children:[(0,a.jsxs)(s.xv,{children:[" ",null===n||void 0===n?void 0:n.displayName]}),(0,a.jsx)(s.xu,{children:(0,a.jsx)(d.zx,{border:"solid 2px #faae01",title:n.isBlocked?"Unblock":"Block",variant:"trainingButton",textTransform:"none",_hover:{background:"gray.500"},_focus:{outline:"none",background:"gray.500"},_active:{outline:"none",background:"gray.500"},ml:"4",onClick:function(){return l(n.uid,n.isBlocked)},children:n.isBlocked?"Unblock":"Block"})})]},e)}))]})}}},function(n){n.O(0,[2016,4597,9351,4607,9774,2888,179],(function(){return e=86639,n(n.s=e);var e}));var e=n.O();_N_E=e}]);