(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4062,7503,1554,2919,134],{96944:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/adminPage",function(){return r(83068)}])},83490:function(e,n,r){"use strict";r.r(n);var t=r(34051),a=r.n(t),o=r(85893),i=r(67294),c=r(68527),s=r(4612),l=r(15193),u=r(99839),d=r(68133),f=r(39828),x=r(82583);function v(e,n,r,t,a,o,i){try{var c=e[o](i),s=c.value}catch(l){return void r(l)}c.done?n(s):Promise.resolve(s).then(t,a)}function h(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function g(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){h(e,n,r[n])}))}return e}n.default=function(){var e=(0,i.useState)(""),n=e[0],r=e[1],t=(0,i.useState)([]),h=t[0],m=t[1],b=(0,i.useState)(null),p=b[0],y=b[1],j=function(){var e,t=(e=a().mark((function e(){var t,o,i,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.trim()){e.next=15;break}return t={key:n.toLowerCase().substring(0,3),name:n,createdAt:(0,f.Bt)(),status:"active",count:0},o=(0,f.hJ)(x.db,"categories"),e.next=5,(0,f.PL)((0,f.IO)(o,(0,f.ar)("name","==",n)));case 5:if((i=e.sent).empty){e.next=12;break}return c=i.docs[0],e.next=10,(0,f.r7)(c.ref,g({},t));case 10:e.next=14;break;case 12:return e.next=14,(0,f.ET)(o,g({},t));case 14:r("");case 15:case"end":return e.stop()}}),e)})),function(){var n=this,r=arguments;return new Promise((function(t,a){var o=e.apply(n,r);function i(e){v(o,t,a,i,c,"next",e)}function c(e){v(o,t,a,i,c,"throw",e)}i(void 0)}))});return function(){return t.apply(this,arguments)}}();return(0,i.useEffect)((function(){var e=(0,f.IO)((0,f.hJ)(x.db,"categories"),(0,f.Xo)("createdAt","desc"));return(0,f.cf)(e,(function(e){var n=e.docs.map((function(e){return g({},e.data(),{id:e.id})}));m(n)}))}),[]),(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(c.xu,{px:"20",pt:"10",pb:"40",bg:"brand.black",alignItems:"center",color:"brand.white",children:[(0,o.jsx)(c.xv,{mb:"4",fontSize:"1xl",fontWeight:"extrabold",children:"Create Category"}),(0,o.jsx)(s.II,{w:"50%",value:n,onChange:function(e){return r(e.target.value)},placeholder:"Create Category",size:"xl",variant:"flushed",mb:"6"}),(0,o.jsx)(l.zx,{border:"solid 2px #faae01",title:p?"Update":"Add Category",variant:"trainingButton",textTransform:"none",_hover:{background:"gray.500"},_focus:{outline:"none",background:"gray.500"},_active:{outline:"none",background:"gray.500"},ml:"6",onClick:p?function(){return function(e){var t=h.find((function(n){return n.id===e}));t&&(0,f.r7)((0,f.JU)(x.db,"categories",e),g({},t,{key:n.toLowerCase().substring(0,3),name:n})).then((function(){r(""),y(null)})).catch((function(e){console.error("Error updating category in Firestore:",e)}))}(p)}:j,children:p?"Update":"Add Category"}),(0,o.jsxs)(u.mQ,{variant:"unstyled",width:"100%",colorScheme:"yellow",children:[(0,o.jsxs)(u.td,{mb:"2",gap:"80",children:[(0,o.jsx)(u.OK,{fontWeight:"extrabold",children:"Active Categories"}),(0,o.jsx)(u.OK,{fontWeight:"extrabold",children:"Deleted Categories"})]}),(0,o.jsx)(u.cb,{mt:"-10px",height:"2px",bg:"yellow.100",borderRadius:"1px"}),(0,o.jsxs)(u.nP,{children:[(0,o.jsx)(u.x4,{children:(0,o.jsx)(c.kC,{children:(0,o.jsx)(c.xu,{children:h.map((function(e,n){return"active"===e.status&&(0,o.jsxs)(c.xu,{mb:"4",p:"2",textTransform:"capitalize",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",gap:"80",borderRadius:"10",textAlign:"center",border:"solid 2px #faae01",children:[(0,o.jsxs)(c.xu,{ml:"4",display:"flex",children:[(0,o.jsx)(d.XZ,{isChecked:"active"===e.status,colorScheme:"yellow",onChange:function(){var n="active"===e.status?"inactive":"active";(0,f.r7)((0,f.JU)(x.db,"categories",e.id),{status:n})}}),(0,o.jsx)(c.xv,{ml:"2",children:e.name})]}),(0,o.jsx)(c.xu,{children:(0,o.jsx)(l.zx,{border:"solid 2px #faae01",title:"edit",variant:"trainingButton",textTransform:"none",_hover:{background:"gray.500"},_focus:{outline:"none",background:"gray.500"},_active:{outline:"none",background:"gray.500"},ml:"4",onClick:function(){return function(e){var n=h.find((function(n){return n.id===e}));n&&(r(n.name),y(e))}(e.id)},children:"Edit"})})]},n)}))})})}),(0,o.jsx)(u.x4,{children:h.map((function(e,n){return"inactive"===e.status&&(0,o.jsx)(c.xu,{mb:"4",w:"40",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",border:"solid 2px #faae01",children:(0,o.jsxs)(c.xu,{ml:"4",display:"flex",children:[(0,o.jsx)(d.XZ,{isChecked:"active"===e.status,onChange:function(){var n="active"===e.status?"inactive":"active";(0,f.r7)((0,f.JU)(x.db,"categories",e.id),{status:n})}}),(0,o.jsx)(c.xv,{ml:"2",children:e.name})]})},n)}))})]})]})]})})}},83068:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return U}});var t=r(34051),a=r.n(t),o=r(85893),i=r(34651),c=r(35059),s=r(58472),l=r(43185),u=r(91639),d=r(89164),f=r(15031),x=r(67294),v=r(26450);function h(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}function g(){return g=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},g.apply(this,arguments)}var m=["name","getInitials"],b=["src","srcSet","name","showBorder","borderRadius","onError","getInitials","icon","iconLabel","loading","children","borderColor","ignoreFallback"],p=(0,c.G)((function(e,n){var r=g({position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",insetEnd:"0",bottom:"0"},(0,s.yK)().badge);return x.createElement(l.m.div,g({ref:n},e,{className:(0,f.cx)("chakra-avatar__badge",e.className),__css:r}))}));function y(e){var n=e.split(" "),r=n[0],t=n[1];return r&&t?""+r.charAt(0)+t.charAt(0):r.charAt(0)}f.Ts&&(p.displayName="AvatarBadge");var j=function(e){var n=e.name,r=e.getInitials,t=h(e,m),a=(0,s.yK)();return x.createElement(l.m.div,g({role:"img","aria-label":n},t,{__css:a.label}),n?null==r?void 0:r(n):null)},k=function(e){return x.createElement(l.m.svg,g({viewBox:"0 0 128 128",color:"#fff",width:"100%",height:"100%",className:"chakra-avatar__svg"},e),x.createElement("path",{fill:"currentColor",d:"M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"}),x.createElement("path",{fill:"currentColor",d:"M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"}))},w={display:"inline-flex",alignItems:"center",justifyContent:"center",textAlign:"center",textTransform:"uppercase",fontWeight:"medium",position:"relative",flexShrink:0},C=(0,c.G)((function(e,n){var r=(0,u.jC)("Avatar",e),t=(0,d.Lr)(e),a=t.src,o=t.srcSet,i=t.name,c=t.showBorder,v=t.borderRadius,m=void 0===v?"full":v,p=t.onError,j=t.getInitials,C=void 0===j?y:j,E=t.icon,S=void 0===E?x.createElement(k,null):E,N=t.iconLabel,A=void 0===N?" avatar":N,I=t.loading,B=t.children,P=t.borderColor,O=t.ignoreFallback,z=h(t,b),L=g({borderRadius:m,borderWidth:c?"2px":void 0},w,r.container);return P&&(L.borderColor=P),x.createElement(l.m.span,g({ref:n},z,{className:(0,f.cx)("chakra-avatar",e.className),__css:L}),x.createElement(s.Fo,{value:r},x.createElement(_,{src:a,srcSet:o,loading:I,onError:p,getInitials:C,name:i,borderRadius:m,icon:S,iconLabel:A,ignoreFallback:O}),B))}));f.Ts&&(C.displayName="Avatar");var _=function(e){var n=e.src,r=e.srcSet,t=e.onError,a=e.getInitials,o=e.name,c=e.borderRadius,s=e.loading,u=e.iconLabel,d=e.icon,f=void 0===d?x.createElement(k,null):d,v=e.ignoreFallback,h=(0,i.d9)({src:n,onError:t,ignoreFallback:v});return!n||!("loaded"===h)?o?x.createElement(j,{className:"chakra-avatar__initials",getInitials:a,name:o}):x.cloneElement(f,{role:"img","aria-label":u}):x.createElement(l.m.img,{src:n,srcSet:r,alt:o,className:"chakra-avatar__img",loading:s,__css:{width:"100%",height:"100%",objectFit:"cover",borderRadius:c}})};f.Ts&&(_.displayName="AvatarImage");var E=["children","borderColor","max","spacing","borderRadius"],S=(0,c.G)((function(e,n){var r=(0,u.jC)("Avatar",e),t=(0,d.Lr)(e),a=t.children,o=t.borderColor,i=t.max,c=t.spacing,s=void 0===c?"-0.75rem":c,m=t.borderRadius,b=void 0===m?"full":m,p=h(t,E),y=(0,v.WR)(a),j=i?y.slice(0,i):y,k=null!=i&&y.length-i,C=j.reverse().map((function(n,r){var t,a={marginEnd:0===r?0:s,size:e.size,borderColor:null!=(t=n.props.borderColor)?t:o,showBorder:!0};return x.cloneElement(n,(0,f.YU)(a))})),_=g({borderRadius:b,marginStart:s},w,r.excessLabel);return x.createElement(l.m.div,g({ref:n,role:"group",__css:{display:"flex",alignItems:"center",justifyContent:"flex-end",flexDirection:"row-reverse"}},p,{className:(0,f.cx)("chakra-avatar__group",e.className)}),k>0&&x.createElement(l.m.span,{className:"chakra-avatar__excess",__css:_},"+"+k),C)}));f.Ts&&(S.displayName="AvatarGroup");var N=r(68527),A=r(89583),I=r(83490),B=r(86799),P=r(53574),O=r(82583),z=r(87503),L=r(11163);function R(e,n,r,t,a,o,i){try{var c=e[o](i),s=c.value}catch(l){return void r(l)}c.done?n(s):Promise.resolve(s).then(t,a)}var U=function(){var e=(0,L.useRouter)(),n=(0,x.useState)((0,o.jsx)(I.default,{})),r=n[0],t=n[1],i=(0,x.useState)("/blog/adminPage/Create Categories"),c=i[0],s=i[1],l=(0,x.useState)(""),u=l[0],d=l[1],f=[{text:"Create Categories",icon:(0,o.jsx)(A.AeW,{}),component:(0,o.jsx)(I.default,{})},{text:"Blog Setting",icon:(0,o.jsx)(A.p4t,{}),component:(0,o.jsx)(B.default,{})},{text:"All Users",icon:(0,o.jsx)(A.I$,{}),component:(0,o.jsx)(P.default,{})}],v=function(){var e,n=(e=a().mark((function e(n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n&&d(n);case 1:case"end":return e.stop()}}),e)})),function(){var n=this,r=arguments;return new Promise((function(t,a){var o=e.apply(n,r);function i(e){R(o,t,a,i,c,"next",e)}function c(e){R(o,t,a,i,c,"throw",e)}i(void 0)}))});return function(e){return n.apply(this,arguments)}}();return(0,x.useEffect)((function(){O.I.onAuthStateChanged(v)}),[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(N.xu,{pos:"fixed",top:"0",left:"0",w:"280px",h:"100vh",bg:"gray.800",color:"white",p:"40px",children:[(0,o.jsx)(N.xv,{mb:"4",fontSize:"2xl",fontWeight:"extrabold",children:"Dashboard"}),(0,o.jsx)(N.kC,{direction:"column",gap:4,children:f.map((function(e,n){return(0,o.jsxs)(N.kC,{align:"center",cursor:"pointer",color:c==="/blog/adminPage/".concat(e.text)?"#faae01":"#Fff",_hover:{color:"#faae01"},onClick:function(){return n=e.component,r="/blog/adminPage/".concat(e.text),t(n),void s(r);var n,r},children:[e.icon,(0,o.jsx)(N.xv,{ml:"2",fontSize:"lg",children:e.text})]},n)}))})]}),(0,o.jsxs)(N.xu,{ml:"200px",p:"40px",bg:" brand.black",children:[(0,o.jsxs)(N.kC,{justifyContent:"space-between",children:[(0,o.jsx)(N.xv,{color:"yellow.100",ml:"20",fontSize:"2xl",fontWeight:"extrabold",children:"Admin Dashboard"}),(0,o.jsx)(z.default,{text:" Create Blog ",onClickHandler:function(){e.push("/blog/addBlog")}}),(0,o.jsxs)(N.kC,{children:[(0,o.jsx)(C,{size:"md",bg:"yellow.400",src:null===u||void 0===u?void 0:u.photoURL,name:null===u||void 0===u?void 0:u.userName}),(0,o.jsxs)(N.xv,{fontWeight:"600",mt:"2.5",ml:"2",color:"yellow.100",children:[" ",null===u||void 0===u?void 0:u.displayName]})]})]}),r||(0,o.jsx)(N.xv,{children:"No component selected"})]})]})}},53574:function(e,n,r){"use strict";r.r(n);var t=r(34051),a=r.n(t),o=r(85893),i=r(67294),c=r(39828),s=r(82583),l=r(68527),u=r(15193);function d(e,n,r,t,a,o,i){try{var c=e[o](i),s=c.value}catch(l){return void r(l)}c.done?n(s):Promise.resolve(s).then(t,a)}function f(e){return function(){var n=this,r=arguments;return new Promise((function(t,a){var o=e.apply(n,r);function i(e){d(o,t,a,i,c,"next",e)}function c(e){d(o,t,a,i,c,"throw",e)}i(void 0)}))}}n.default=function(){var e=(0,i.useState)([]),n=e[0],r=e[1],t=function(){var e=f(a().mark((function e(){var n,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.PL)((0,c.hJ)(s.db,"authUsers"));case 2:n=e.sent,t=[],n.forEach((function(e){var n=e.data();t.push(n)})),r(t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,i.useEffect)((function(){t()}),[]);var d=function(){var e=f(a().mark((function e(n,r){var o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o=(0,c.JU)(s.db,"authUsers",n),e.next=4,(0,c.r7)(o,{isBlocked:!r});case 4:t(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error blocking/unblocking user:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,r){return e.apply(this,arguments)}}();return(0,o.jsxs)(l.xu,{px:"20",py:"10",bg:"brand.black",color:"brand.white",children:[(0,o.jsx)(l.xv,{mb:"4",fontSize:"1xl",fontWeight:"extrabold",children:"All User"}),null===n||void 0===n?void 0:n.map((function(e,n){return(0,o.jsxs)(l.xu,{mb:"6",p:"2",w:"50%",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",textAlign:"center",borderRadius:"10",border:"solid 2px #faae01",children:[(0,o.jsxs)(l.xv,{children:[" ",null===e||void 0===e?void 0:e.displayName]}),(0,o.jsx)(l.xu,{children:(0,o.jsx)(u.zx,{border:"solid 2px #faae01",title:e.isBlocked?"Unblock":"Block",variant:"trainingButton",textTransform:"none",_hover:{background:"gray.500"},_focus:{outline:"none",background:"gray.500"},_active:{outline:"none",background:"gray.500"},ml:"4",onClick:function(){return d(e.uid,e.isBlocked)},children:e.isBlocked?"Unblock":"Block"})})]},n)}))]})}},87503:function(e,n,r){"use strict";r.r(n);var t=r(85893),a=r(68527),o=r(15193);n.default=function(e){return(0,t.jsx)(a.xu,{children:(0,t.jsx)(o.zx,{border:"solid 2px #faae01",className:(null===e||void 0===e?void 0:e.showShadow)?"with-shadow":"",title:e.title,variant:"trainingButton",bg:"rgb(11, 11, 13)",boxShadow:"0 0 20px  rgba(255, 174, 0, 0.4)",transition:"all 0.1s",_hover:{border:"solid 3px #faae01",transform:"scale(1.05)",opacity:1,boxShadow:"0 0 20px #ffae00",background:"rgb(11, 11, 13)"},_focus:{outline:"none",background:"gray.500"},_active:{outline:"none",background:"gray.500"},onClick:e.onClickHandler,disabled:e.disabledButton,children:(0,t.jsx)(a.xv,{variant:"gradient",fontWeight:"800",textTransform:"none",fontSize:e.sizes?e.sizes:"1xl",children:e.text})})})}}},function(e){e.O(0,[2016,4597,9351,4607,3238,9876,9839,5291,653,2738,7793,6799,9774,2888,179],(function(){return n=96944,e(e.s=n);var n}));var n=e.O();_N_E=n}]);