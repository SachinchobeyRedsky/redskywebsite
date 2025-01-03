"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[180],{80180:function(e,n,o){o.r(n),o.d(n,{default:function(){return D}});var t=o(85893),r=o(67294),l=o(41664),i=o(25675),a=o(97375),c=o(68527),s=o(15193),u=o(11163),d=o(27311),f=o(34651),x=o(94090),p=o(59876),h=o(73627),v=o(5526),m=o(10894),g=o(37496),b=o(89583);function j(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function y(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{},t=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(o).filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})))),t.forEach((function(n){j(e,n,o[n])}))}return e}var k=function(e){var n,o,l,i=e.linkItemsData,a=e.router,s=e.makeDisabled,u=(e.addPadding,e.textTransform),d=e.platform,f=e.isDynamicRoute,x=e.ind,p=e.query,h=e.onClose,v=(0,r.useState)(null),j=v[0],y=v[1];return(0,t.jsxs)(c.xu,{children:[(0,t.jsxs)(c.kC,{transition:"all 0.1s",py:"6px",px:"10px",justifyContent:"space-between",children:[(0,t.jsx)(C,{withIcon:null===i||void 0===i||null===(n=i.icon)||void 0===n?void 0:n.src,imageFilter:"brightness(0) invert(1)",iconData:{width:"25px",height:"25px",src:null===i||void 0===i||null===(o=i.icon)||void 0===o?void 0:o.src},flex:1,textAlign:"left",fontSize:"sm",router:a,query:p,goto:null===i||void 0===i?void 0:i.path,linktext:(null===i||void 0===i?void 0:i.name)||(null===i||void 0===i?void 0:i.tech),textTransform:u,platform:d,isDynamicRoute:f,onClose:h}),s&&(0,t.jsx)(m.JO,{as:j===x?b.s$2:b.RiI,w:4,h:4,color:"#faae12",marginLeft:2,marginTop:1,cursor:"pointer",onClick:function(){return e=x,void y((function(n){return n===e?null:e}));var e}})]}),(0,t.jsx)(g.UO,{in:j===x,children:(0,t.jsx)(c.xu,{bg:"#101114",textAlign:"justify",fontSize:"md",p:"5px",children:null===i||void 0===i||null===(l=i.popoverData)||void 0===l?void 0:l.map((function(e,n){var o;return(0,t.jsx)(k,{router:a,linkItemsData:e,makeDisabled:!!e.techs,query:null===e||void 0===e||null===(o=e.query)||void 0===o?void 0:o.type,addPadding:"43px",textTransform:"capitalize",platform:e.platform,onClose:h,data:"working"},e.name+n)}))})})]})},w=function(e){var n,o,r,i=e.goto,a=e.router,s=e.linktext,u=(e.platform,e.stopHover),d=(e.isDynamicRoute,e.query),f=e.onClose;e.data;return(0,t.jsx)(c.xv,y({title:s},e,{onClick:f,_hover:!u&&{color:"yellow.100",border:"none"},className:(null===a||void 0===a?void 0:a.asPath)===i||(null===a||void 0===a?void 0:a.asPath)==="".concat(i,"/").concat(null===a||void 0===a||null===(n=a.query)||void 0===n?void 0:n.platform)||(null===a||void 0===a?void 0:a.asPath)==="".concat(i,"/").concat(null===a||void 0===a||null===(o=a.query)||void 0===o?void 0:o.platform,"/").concat(null===a||void 0===a||null===(r=a.query)||void 0===r?void 0:r.tech)?"active":"",fontSize:["sm","sm","sm","xs","sm"],children:(0,t.jsx)(l.default,{href:y({pathname:i},d&&{query:{type:d}}),children:(0,t.jsx)("a",{style:{display:"block"},children:s})})}))},C=function(e){var n,o,r,l=e.fontSize,i=e.goto,a=e.router,s=e.linktext,u=e.withIcon,d=e.iconData,x=e.textTransform,p=e.fontWeight,h=e.stopHover,v=e.imageFilter,m=e.isDynamicRoute,g=e.query,b=e.onClose;return u?(0,t.jsxs)(c.kC,{className:i===(null===a||void 0===a?void 0:a.asPath)||(null===a||void 0===a?void 0:a.asPath)==="".concat(i,"/").concat(null===a||void 0===a||null===(n=a.query)||void 0===n?void 0:n.platform)||(null===a||void 0===a?void 0:a.asPath)==="".concat(i,"/").concat(null===a||void 0===a||null===(o=a.query)||void 0===o?void 0:o.platform,"/").concat(null===a||void 0===a||null===(r=a.query)||void 0===r?void 0:r.tech)?"active":""+h?null:"drawer-link-item",align:"center",flex:1,cursor:"pointer",children:[(0,t.jsx)(f.Ee,y({filter:v,mr:2},d,{alt:"header logo"})),(0,t.jsx)(w,{flex:1,textAlign:"left",fontWeight:null!==p&&void 0!==p?p:"bold",fontSize:l,goto:i,router:a,query:g,linktext:s,textTransform:x,stopHover:h,isDynamicRoute:m,onClose:b})]}):(0,t.jsx)(w,y({},e,{fontWeight:"normal",fontSize:l,goto:i,query:g,router:a,linktext:s,textTransform:x,onClose:b}))};var O=function(){var e=(0,a.qY)(),n=e.isOpen,o=e.onOpen,l=e.onClose,i=(0,a.qY)(),m=(i.isOpen,i.onOpen,i.onClose,(0,u.useRouter)()),g=r.useRef(),b=(0,r.useState)(!1),j=b[0],y=b[1];return(0,r.useEffect)((function(){var e=setInterval((function(){y((function(e){return!e}))}),1e3);return function(){return clearInterval(e)}}),[]),(0,t.jsxs)(t.Fragment,{children:[n?(0,t.jsx)(s.zx,{_focus:{border:"none",backgroundColor:"none"},colorScheme:"brand.black",onClick:l,display:["block","block","block","none","none"],children:(0,t.jsx)(p.Tw,{w:6,h:6})}):(0,t.jsx)(s.zx,{title:"Menus",ref:g,_focus:{border:"none",backgroundColor:"none"},colorScheme:"brand.black",onClick:o,display:["block","block","block","none","none"],children:(0,t.jsx)(p.Uq,{w:8,h:8})}),(0,t.jsxs)(d.dy,{isOpen:n,placement:"right",onClose:l,finalFocusRef:g,closeOnOverlayClick:"true",children:[(0,t.jsx)(d.P1,{}),(0,t.jsxs)(d.sc,{justifyContent:"space-around",bg:"brand.black",children:[(0,t.jsx)(d.cC,{}),(0,t.jsxs)(d.OX,{mb:5,p:0,children:[(0,t.jsx)(c.kC,{px:4,py:3,align:"center",justify:"space-between",children:(0,t.jsx)(f.Ee,{src:h.Z.headerLogo.logomain,width:"130px",height:"40px",alt:"header logo"})}),(0,t.jsx)(c.iz,{})]}),(0,t.jsx)(d.Ng,{overflowY:"overlay",p:"0",className:"custom-scroll-bar",color:"brand.white",children:(0,t.jsx)(c.xu,{flex:1,children:(0,t.jsx)(x.UQ,{allowToggle:!0,children:v.yf.map((function(e,n){return(0,t.jsx)(k,{router:m,ind:n,linkItemsData:e,makeDisabled:!!e.popoverData,withIcon:!0,textTransform:"uppercase",onClose:l},e.name+n)}))})})}),(0,t.jsx)(d.ze,{px:"5",flexDir:"column",alignItems:"stretch",justifyContent:"center",children:(0,t.jsx)(s.zx,{title:"Get In touch",className:j?"with-shadow":"",border:"solid 2px #faae01",boxShadow:"0 0 8px #ffae00",borderRadius:"500",background:"rgb(11, 11, 13)",_hover:{background:"rgb(11, 11, 13)",transform:"scale(1.05)"},_focus:{background:"rgb(11, 11, 13)"},_active:{background:"rgb(11, 11, 13)"},onClick:function(){m.push("/contact-us")},children:(0,t.jsx)(c.xv,{variant:"gradient",textTransform:"none",fontSize:"lg",children:"Get In Touch"})})})]})]})]})},q=o(54997),S=function(e){var n,o,l,i=e.goto,a=e.router,s=e.linktext,u=e.location,d=e.enablePopover,f=e.popoverContent,p=(0,r.useState)(-1),h=p[0],v=p[1],g=(0,r.useState)(!1),j=g[0],y=g[1];(0,r.useEffect)((function(){return function(){v(-1)}}),[a.query]);var k=(0,r.useState)(null);k[0],k[1];return"/services"===i&&d&&!u?(0,t.jsx)(c.xu,{children:(0,t.jsxs)(q.J2,{onOpen:function(){y(!0)},onClose:function(){v(-1),y(!1)},trigger:"hover",children:[(0,t.jsx)(q.xo,{children:(0,t.jsxs)(c.kC,{px:1,cursor:"pointer",className:a.asPath===i||a.asPath==="".concat(i,"/").concat(null===(n=a.query)||void 0===n?void 0:n.platform)||a.asPath==="".concat(i,"/").concat(null===(o=a.query)||void 0===o?void 0:o.platform,"/").concat(null===(l=a.query)||void 0===l?void 0:l.tech)?"active":"",color:j?"yellow.400":"",border:j?"none":"",align:"center",children:[(0,t.jsx)(w,{fontSize:"md",fontWeight:"",goto:i&&i,linktext:s,textTransform:"uppercase"}),(0,t.jsx)(m.JO,{as:j?b.s$2:b.RiI,w:4,h:4,marginLeft:2,cursor:"pointer"})]})}),(0,t.jsx)(q.yk,{maxWidth:"400px",mt:2,children:(0,t.jsx)(q.b,{py:"2",bg:"brand.black",boxShadow:"inset 0 0 8px #faae12",children:(0,t.jsx)(x.UQ,{index:h,onChange:function(e){v(e)},allowToggle:!0,children:null===f||void 0===f?void 0:f.map((function(e,n){var o,l,i,s;return(0,t.jsx)(r.Fragment,{children:(0,t.jsxs)(x.Qd,{p:0,border:"none",children:[(0,t.jsxs)(x.KF,{textAlign:"center",px:6,py:2,_hover:{bg:"yellow.400",color:e.path===a.asPath||(null===a||void 0===a||null===(o=a.query)||void 0===o?void 0:o.platform)===e.platform.toLowerCase()?"#fff":""},className:e.path===a.asPath||(null===a||void 0===a||null===(l=a.query)||void 0===l?void 0:l.platform)===e.platform.toLowerCase()?"active":"",children:[(0,t.jsx)(c.xu,{as:"span",flex:"1",textAlign:"left",children:void 0!==e.path?(0,t.jsx)(w,{stopHover:!0,goto:e.path,fontWeight:"bold",linktext:e.name,textTransform:"capitalize",fontSize:"md",query:null===e||void 0===e||null===(i=e.query)||void 0===i?void 0:i.type}):(0,t.jsx)(c.xv,{fontWeight:"bold",textTransform:"capitalize",fontSize:"md",children:e.name})}),e.techs&&(0,t.jsx)(x.XE,{})]}),(0,t.jsx)(x.Hk,{p:0,children:(0,t.jsx)(c.aV,{children:null===(s=e.techs)||void 0===s?void 0:s.map((function(e,n){return(0,t.jsxs)(c.HC,{className:e.path===a.asPath?"active":"",px:"5",py:1,_hover:{bg:"yellow.400",color:e.path===a.asPath?"#fff":""},children:[(0,t.jsx)(w,{stopHover:!0,goto:e.path&&e.path,linktext:e.name,textTransform:"capitalize",fontSize:"md",fontWeight:"normal"})," "]},n+e.path)}))})})]})},n)}))})})})]})}):(0,t.jsx)(w,{fontSize:"md",fontWeight:"bold",goto:i,linktext:s,router:a,textTransform:"uppercase",px:1})};function z(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function P(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{},t=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(o).filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})))),t.forEach((function(n){z(e,n,o[n])}))}return e}var D=function(e){var n=(0,u.useRouter)(),o=(0,a.qY)(),d=(o.isOpen,o.onOpen,o.onClose,(0,r.useState)("")),f=(d[0],d[1],(0,r.useState)(!1)),x=f[0],p=f[1];(0,r.useEffect)((function(){var e=setInterval((function(){p((function(e){return!e}))}),800);return function(){return clearInterval(e)}}),[]);return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(c.kC,P({as:"header",align:"center",justify:"space-between",wrap:"wrap",position:"fixed",top:"0",w:"100%",height:v.Mz,px:["6","6","12","12"],bg:"brand.black",color:"white",zIndex:1e3,maxWidth:v.d},e,{children:[(0,t.jsx)(c.M5,{width:["150px","150x","150px","200px","200px"],h:["60px","60px","60px","60px"],children:(0,t.jsx)(l.default,{href:"/",children:(0,t.jsx)("a",{children:(0,t.jsx)(i.default,{src:"".concat(h.Z.headerLogo.logomain),alt:"Redsky logo",width:"230px",height:"120px",loading:"lazy",decoding:"async",quality:""})})})}),(0,t.jsx)(O,{_focus:{border:"none",backgroundColor:"none"}}),(0,t.jsx)(c.M5,{display:{base:"none",md:"none",lg:"block",xl:"block"},children:(0,t.jsx)(c.Kq,{direction:{base:"column",md:"row"},fontWeight:800,as:"nav",display:"flex",justify:"center",align:"center",children:null===v.yf||void 0===v.yf?void 0:v.yf.map((function(e,o){return(0,t.jsx)(S,{router:n,goto:e.path,linktext:e.name,popoverContent:e.popoverData,enablePopover:!!e.popoverData},o)}))})}),(0,t.jsx)(c.xu,{display:["none","none","none","block","block"],children:(0,t.jsx)(s.zx,{title:"Get In touch",className:x?"with-shadow":"",border:"solid 2px #faae01",boxShadow:"0 0 8px #ffae00",borderRadius:"500",background:"rgb(11, 11, 13)",_hover:{background:"rgb(11, 11, 13)",transform:"scale(1.05)"},_focus:{background:"rgb(11, 11, 13)"},_active:{background:"rgb(11, 11, 13)"},onClick:function(){n.push("/contact-us")},children:(0,t.jsx)(c.xv,{variant:"gradient",textTransform:"none",fontSize:"lg",children:"Get In Touch"})})})]}))})}}}]);