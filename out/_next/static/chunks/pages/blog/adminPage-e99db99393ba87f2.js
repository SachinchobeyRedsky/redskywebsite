(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4062],{59102:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/adminPage",function(){return t(83068)}])},83490:function(e,r,t){"use strict";t.r(r);var n=t(47568),a=t(26042),o=t(69396),i=t(70655),c=t(85893),l=t(67294),s=t(68527),u=t(4612),d=t(15193),f=t(99839),x=t(68133),g=t(39828),h=t(82583);r.default=function(){var e=(0,l.useState)(""),r=e[0],t=e[1],v=(0,l.useState)([]),b=v[0],m=v[1],p=(0,l.useState)(null),y=p[0],j=p[1],C=function(){var e=(0,n.Z)((function(){var e,n,o,c;return(0,i.__generator)(this,(function(i){switch(i.label){case 0:return r.trim()?(e={key:r.toLowerCase().substring(0,3),name:r,createdAt:(0,g.Bt)(),status:"active",count:0},n=(0,g.hJ)(h.db,"categories"),[4,(0,g.PL)((0,g.IO)(n,(0,g.ar)("name","==",r)))]):[3,6];case 1:return(o=i.sent()).empty?[3,3]:(c=o.docs[0],[4,(0,g.r7)(c.ref,(0,a.Z)({},e))]);case 2:return i.sent(),[3,5];case 3:return[4,(0,g.ET)(n,(0,a.Z)({},e))];case 4:i.sent(),i.label=5;case 5:t(""),i.label=6;case 6:return[2]}}))}));return function(){return e.apply(this,arguments)}}();return(0,l.useEffect)((function(){var e=(0,g.IO)((0,g.hJ)(h.db,"categories"),(0,g.Xo)("createdAt","desc"));return(0,g.cf)(e,(function(e){var r=e.docs.map((function(e){return(0,o.Z)((0,a.Z)({},e.data()),{id:e.id})}));m(r)}))}),[]),(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)(s.xu,{px:"20",pt:"10",pb:"40",bg:"brand.black",alignItems:"center",color:"brand.white",children:[(0,c.jsx)(s.xv,{mb:"4",fontSize:"1xl",fontWeight:"extrabold",children:"Create Category"}),(0,c.jsx)(u.II,{w:"50%",value:r,onChange:function(e){return t(e.target.value)},placeholder:"Create Category",size:"xl",variant:"flushed",mb:"6"}),(0,c.jsx)(d.zx,{border:"solid 2px #faae01",title:y?"Update":"Add Category",variant:"trainingButton",textTransform:"none",_hover:{background:"gray.500"},_focus:{outline:"none",background:"gray.500"},_active:{outline:"none",background:"gray.500"},ml:"6",onClick:y?function(){return function(e){var n=b.find((function(r){return r.id===e}));n&&(0,g.r7)((0,g.JU)(h.db,"categories",e),(0,o.Z)((0,a.Z)({},n),{key:r.toLowerCase().substring(0,3),name:r})).then((function(){t(""),j(null)})).catch((function(e){console.error("Error updating category in Firestore:",e)}))}(y)}:C,children:y?"Update":"Add Category"}),(0,c.jsxs)(f.mQ,{variant:"unstyled",width:"100%",colorScheme:"yellow",children:[(0,c.jsxs)(f.td,{mb:"2",gap:"80",children:[(0,c.jsx)(f.OK,{fontWeight:"extrabold",children:"Active Categories"}),(0,c.jsx)(f.OK,{fontWeight:"extrabold",children:"Deleted Categories"})]}),(0,c.jsx)(f.cb,{mt:"-10px",height:"2px",bg:"yellow.100",borderRadius:"1px"}),(0,c.jsxs)(f.nP,{children:[(0,c.jsx)(f.x4,{children:(0,c.jsx)(s.kC,{children:(0,c.jsx)(s.xu,{children:b.map((function(e,r){return"active"===e.status&&(0,c.jsxs)(s.xu,{mb:"4",p:"2",textTransform:"capitalize",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",gap:"80",borderRadius:"10",textAlign:"center",border:"solid 2px #faae01",children:[(0,c.jsxs)(s.xu,{ml:"4",display:"flex",children:[(0,c.jsx)(x.XZ,{isChecked:"active"===e.status,colorScheme:"yellow",onChange:function(){var r="active"===e.status?"inactive":"active";(0,g.r7)((0,g.JU)(h.db,"categories",e.id),{status:r})}}),(0,c.jsx)(s.xv,{ml:"2",children:e.name})]}),(0,c.jsx)(s.xu,{children:(0,c.jsx)(d.zx,{border:"solid 2px #faae01",title:"edit",variant:"trainingButton",textTransform:"none",_hover:{background:"gray.500"},_focus:{outline:"none",background:"gray.500"},_active:{outline:"none",background:"gray.500"},ml:"4",onClick:function(){return function(e){var r=b.find((function(r){return r.id===e}));r&&(t(r.name),j(e))}(e.id)},children:"Edit"})})]},r)}))})})}),(0,c.jsx)(f.x4,{children:b.map((function(e,r){return"inactive"===e.status&&(0,c.jsx)(s.xu,{mb:"4",w:"40",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",border:"solid 2px #faae01",children:(0,c.jsxs)(s.xu,{ml:"4",display:"flex",children:[(0,c.jsx)(x.XZ,{isChecked:"active"===e.status,onChange:function(){var r="active"===e.status?"inactive":"active";(0,g.r7)((0,g.JU)(h.db,"categories",e.id),{status:r})}}),(0,c.jsx)(s.xv,{ml:"2",children:e.name})]})},r)}))})]})]})]})})}},83068:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return U}});var n=t(47568),a=t(70655),o=t(85893),i=t(68527),c=t(34651),l=t(35059),s=t(58472),u=t(43185),d=t(91639),f=t(89164),x=t(15031),g=t(67294),h=t(26450);function v(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}function b(){return b=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},b.apply(this,arguments)}var m=["name","getInitials"],p=["src","srcSet","name","showBorder","borderRadius","onError","getInitials","icon","iconLabel","loading","children","borderColor","ignoreFallback"],y=(0,l.G)((function(e,r){var t=b({position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",insetEnd:"0",bottom:"0"},(0,s.yK)().badge);return g.createElement(u.m.div,b({ref:r},e,{className:(0,x.cx)("chakra-avatar__badge",e.className),__css:t}))}));function j(e){var r=e.split(" "),t=r[0],n=r[1];return t&&n?""+t.charAt(0)+n.charAt(0):t.charAt(0)}x.Ts&&(y.displayName="AvatarBadge");var C=function(e){var r=e.name,t=e.getInitials,n=v(e,m),a=(0,s.yK)();return g.createElement(u.m.div,b({role:"img","aria-label":r},n,{__css:a.label}),r?null==t?void 0:t(r):null)},k=function(e){return g.createElement(u.m.svg,b({viewBox:"0 0 128 128",color:"#fff",width:"100%",height:"100%",className:"chakra-avatar__svg"},e),g.createElement("path",{fill:"currentColor",d:"M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"}),g.createElement("path",{fill:"currentColor",d:"M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"}))},_={display:"inline-flex",alignItems:"center",justifyContent:"center",textAlign:"center",textTransform:"uppercase",fontWeight:"medium",position:"relative",flexShrink:0},w=(0,l.G)((function(e,r){var t=(0,d.jC)("Avatar",e),n=(0,f.Lr)(e),a=n.src,o=n.srcSet,i=n.name,c=n.showBorder,l=n.borderRadius,h=void 0===l?"full":l,m=n.onError,y=n.getInitials,C=void 0===y?j:y,w=n.icon,S=void 0===w?g.createElement(k,null):w,A=n.iconLabel,I=void 0===A?" avatar":A,N=n.loading,Z=n.children,B=n.borderColor,z=n.ignoreFallback,L=v(n,p),R=b({borderRadius:h,borderWidth:c?"2px":void 0},_,t.container);return B&&(R.borderColor=B),g.createElement(u.m.span,b({ref:r},L,{className:(0,x.cx)("chakra-avatar",e.className),__css:R}),g.createElement(s.Fo,{value:t},g.createElement(E,{src:a,srcSet:o,loading:N,onError:m,getInitials:C,name:i,borderRadius:h,icon:S,iconLabel:I,ignoreFallback:z}),Z))}));x.Ts&&(w.displayName="Avatar");var E=function(e){var r=e.src,t=e.srcSet,n=e.onError,a=e.getInitials,o=e.name,i=e.borderRadius,l=e.loading,s=e.iconLabel,d=e.icon,f=void 0===d?g.createElement(k,null):d,x=e.ignoreFallback,h=(0,c.d9)({src:r,onError:n,ignoreFallback:x});return!r||!("loaded"===h)?o?g.createElement(C,{className:"chakra-avatar__initials",getInitials:a,name:o}):g.cloneElement(f,{role:"img","aria-label":s}):g.createElement(u.m.img,{src:r,srcSet:t,alt:o,className:"chakra-avatar__img",loading:l,__css:{width:"100%",height:"100%",objectFit:"cover",borderRadius:i}})};x.Ts&&(E.displayName="AvatarImage");var S=["children","borderColor","max","spacing","borderRadius"],A=(0,l.G)((function(e,r){var t=(0,d.jC)("Avatar",e),n=(0,f.Lr)(e),a=n.children,o=n.borderColor,i=n.max,c=n.spacing,l=void 0===c?"-0.75rem":c,s=n.borderRadius,m=void 0===s?"full":s,p=v(n,S),y=(0,h.WR)(a),j=i?y.slice(0,i):y,C=null!=i&&y.length-i,k=j.reverse().map((function(r,t){var n,a={marginEnd:0===t?0:l,size:e.size,borderColor:null!=(n=r.props.borderColor)?n:o,showBorder:!0};return g.cloneElement(r,(0,x.YU)(a))})),w=b({borderRadius:m,marginStart:l},_,t.excessLabel);return g.createElement(u.m.div,b({ref:r,role:"group",__css:{display:"flex",alignItems:"center",justifyContent:"flex-end",flexDirection:"row-reverse"}},p,{className:(0,x.cx)("chakra-avatar__group",e.className)}),C>0&&g.createElement(u.m.span,{className:"chakra-avatar__excess",__css:w},"+"+C),k)}));x.Ts&&(A.displayName="AvatarGroup");var I=t(89583),N=t(83490),Z=t(86799),B=t(53574),z=t(82583),L=t(87503),R=t(11163);var U=function(){var e=(0,R.useRouter)(),r=(0,g.useState)((0,o.jsx)(N.default,{})),t=r[0],c=r[1],l=(0,g.useState)("/blog/adminPage/Create Categories"),s=l[0],u=l[1],d=(0,g.useState)(""),f=d[0],x=d[1],h=[{text:"Create Categories",icon:(0,o.jsx)(I.AeW,{}),component:(0,o.jsx)(N.default,{})},{text:"Blog Setting",icon:(0,o.jsx)(I.p4t,{}),component:(0,o.jsx)(Z.default,{})},{text:"All Users",icon:(0,o.jsx)(I.I$,{}),component:(0,o.jsx)(B.default,{})}],v=function(){var e=(0,n.Z)((function(e){return(0,a.__generator)(this,(function(r){return e&&x(e),[2]}))}));return function(r){return e.apply(this,arguments)}}();return(0,g.useEffect)((function(){z.I.onAuthStateChanged(v)}),[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(i.xu,{pos:"fixed",top:"0",left:"0",w:"280px",h:"100vh",bg:"gray.800",color:"white",p:"40px",children:[(0,o.jsx)(i.xv,{mb:"4",fontSize:"2xl",fontWeight:"extrabold",children:"Dashboard"}),(0,o.jsx)(i.kC,{direction:"column",gap:4,children:h.map((function(e,r){return(0,o.jsxs)(i.kC,{align:"center",cursor:"pointer",color:s==="/blog/adminPage/".concat(e.text)?"#faae01":"#Fff",_hover:{color:"#faae01"},onClick:function(){return r=e.component,t="/blog/adminPage/".concat(e.text),c(r),void u(t);var r,t},children:[e.icon,(0,o.jsx)(i.xv,{ml:"2",fontSize:"lg",children:e.text})]},r)}))})]}),(0,o.jsxs)(i.xu,{ml:"200px",p:"40px",bg:" brand.black",children:[(0,o.jsxs)(i.kC,{justifyContent:"space-between",children:[(0,o.jsx)(i.xv,{color:"yellow.100",ml:"20",fontSize:"2xl",fontWeight:"extrabold",children:"Admin Dashboard"}),(0,o.jsx)(L.default,{text:" Create Blog ",onClickHandler:function(){e.push("/blog/addBlog")}}),(0,o.jsxs)(i.kC,{children:[(0,o.jsx)(w,{size:"md",bg:"yellow.400",src:null===f||void 0===f?void 0:f.photoURL,name:null===f||void 0===f?void 0:f.userName}),(0,o.jsxs)(i.xv,{fontWeight:"600",mt:"2.5",ml:"2",color:"yellow.100",children:[" ",null===f||void 0===f?void 0:f.displayName]})]})]}),t||(0,o.jsx)(i.xv,{children:"No component selected"})]})]})}},53574:function(e,r,t){"use strict";t.r(r);var n=t(47568),a=t(70655),o=t(85893),i=t(67294),c=t(39828),l=t(82583),s=t(68527),u=t(15193);r.default=function(){var e=(0,i.useState)([]),r=e[0],t=e[1],d=function(){var e=(0,n.Z)((function(){var e,r;return(0,a.__generator)(this,(function(n){switch(n.label){case 0:return[4,(0,c.PL)((0,c.hJ)(l.db,"authUsers"))];case 1:return e=n.sent(),r=[],e.forEach((function(e){var t=e.data();r.push(t)})),t(r),[2]}}))}));return function(){return e.apply(this,arguments)}}();(0,i.useEffect)((function(){d()}),[]);var f=function(){var e=(0,n.Z)((function(e,r){var t,n;return(0,a.__generator)(this,(function(a){switch(a.label){case 0:return a.trys.push([0,2,,3]),t=(0,c.JU)(l.db,"authUsers",e),[4,(0,c.r7)(t,{isBlocked:!r})];case 1:return a.sent(),d(),[3,3];case 2:return n=a.sent(),console.error("Error blocking/unblocking user:",n),[3,3];case 3:return[2]}}))}));return function(r,t){return e.apply(this,arguments)}}();return(0,o.jsxs)(s.xu,{px:"20",py:"10",bg:"brand.black",color:"brand.white",children:[(0,o.jsx)(s.xv,{mb:"4",fontSize:"1xl",fontWeight:"extrabold",children:"All User"}),null===r||void 0===r?void 0:r.map((function(e,r){return(0,o.jsxs)(s.xu,{mb:"6",p:"2",w:"50%",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",textAlign:"center",borderRadius:"10",border:"solid 2px #faae01",children:[(0,o.jsxs)(s.xv,{children:[" ",null===e||void 0===e?void 0:e.displayName]}),(0,o.jsx)(s.xu,{children:(0,o.jsx)(u.zx,{border:"solid 2px #faae01",title:e.isBlocked?"Unblock":"Block",variant:"trainingButton",textTransform:"none",_hover:{background:"gray.500"},_focus:{outline:"none",background:"gray.500"},_active:{outline:"none",background:"gray.500"},ml:"4",onClick:function(){return f(e.uid,e.isBlocked)},children:e.isBlocked?"Unblock":"Block"})})]},r)}))]})}},87503:function(e,r,t){"use strict";t.r(r);var n=t(85893),a=t(68527),o=t(15193);r.default=function(e){return(0,n.jsx)(a.xu,{children:(0,n.jsx)(o.zx,{border:"solid 2px #faae01",className:(null===e||void 0===e?void 0:e.showShadow)?"with-shadow":"",title:e.title,variant:"trainingButton",bg:"rgb(11, 11, 13)",boxShadow:"0 0 20px  rgba(255, 174, 0, 0.4)",transition:"all 0.1s",_hover:{border:"solid 3px #faae01",transform:"scale(1.05)",opacity:1,boxShadow:"0 0 20px #ffae00",background:"rgb(11, 11, 13)"},_focus:{outline:"none",background:"gray.500"},_active:{outline:"none",background:"gray.500"},onClick:e.onClickHandler,disabled:e.disabledButton,children:(0,n.jsx)(a.xv,{variant:"gradient",fontWeight:"800",textTransform:"none",fontSize:e.sizes?e.sizes:"1xl",children:e.text})})})}},20943:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}t.d(r,{Z:function(){return n}})},13375:function(e,r,t){"use strict";function n(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}t.d(r,{Z:function(){return n}})},29815:function(e,r,t){"use strict";t.d(r,{Z:function(){return i}});var n=t(20943);var a=t(13375);var o=t(91566);function i(e){return function(e){if(Array.isArray(e))return(0,n.Z)(e)}(e)||(0,a.Z)(e)||(0,o.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},91566:function(e,r,t){"use strict";t.d(r,{Z:function(){return a}});var n=t(20943);function a(e,r){if(e){if("string"===typeof e)return(0,n.Z)(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?(0,n.Z)(e,r):void 0}}}},function(e){e.O(0,[2016,4597,5675,8646,1759,3238,9876,9839,5048,653,4102,7793,6799,9774,2888,179],(function(){return r=59102,e(e.s=r);var r}));var r=e.O();_N_E=r}]);