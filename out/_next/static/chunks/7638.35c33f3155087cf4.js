"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7638,7503,1554,2919,134,5193,973],{15193:function(e,t,n){n.d(t,{zx:function(){return k}});var i=n(97375),r=n(35059),a=n(43185),l=n(91639),o=n(89164),s=n(15031),c=n(38554),d=n.n(c),u=n(67294),m=n(26450),f=n(49609);function x(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},p.apply(this,arguments)}var h=["size","colorScheme","variant","className","spacing","isAttached","isDisabled"],v=(0,m.kr)({strict:!1,name:"ButtonGroupContext"}),b=v[0],g=v[1],y=(0,r.G)((function(e,t){var n=e.size,i=e.colorScheme,r=e.variant,l=e.className,o=e.spacing,c=void 0===o?"0.5rem":o,d=e.isAttached,m=e.isDisabled,f=x(e,h),v=(0,s.cx)("chakra-button__group",l),g=u.useMemo((function(){return{size:n,colorScheme:i,variant:r,isDisabled:m}}),[n,i,r,m]),y={display:"inline-flex"};return y=p({},y,d?{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}}:{"& > *:not(style) ~ *:not(style)":{marginStart:c}}),u.createElement(b,{value:g},u.createElement(a.m.div,p({ref:t,role:"group",__css:y,className:v},f)))}));s.Ts&&(y.displayName="ButtonGroup");var j=["label","placement","spacing","children","className","__css"],S=function(e){var t=e.label,n=e.placement,i=e.spacing,r=void 0===i?"0.5rem":i,l=e.children,o=void 0===l?u.createElement(f.$,{color:"currentColor",width:"1em",height:"1em"}):l,c=e.className,d=e.__css,m=x(e,j),h=(0,s.cx)("chakra-button__spinner",c),v="start"===n?"marginEnd":"marginStart",b=u.useMemo((function(){var e;return p(((e={display:"flex",alignItems:"center",position:t?"relative":"absolute"})[v]=t?r:0,e.fontSize="1em",e.lineHeight="normal",e),d)}),[d,t,v,r]);return u.createElement(a.m.div,p({className:h},m,{__css:b}),o)};s.Ts&&(S.displayName="ButtonSpinner");var _=["children","className"],w=function(e){var t=e.children,n=e.className,i=x(e,_),r=u.isValidElement(t)?u.cloneElement(t,{"aria-hidden":!0,focusable:!1}):t,l=(0,s.cx)("chakra-button__icon",n);return u.createElement(a.m.span,p({display:"inline-flex",alignSelf:"center",flexShrink:0},i,{className:l}),r)};s.Ts&&(w.displayName="ButtonIcon");var N=["isDisabled","isLoading","isActive","isFullWidth","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","spinnerPlacement","className","as"],k=(0,r.G)((function(e,t){var n=g(),r=(0,l.mq)("Button",p({},n,e)),c=(0,o.Lr)(e),m=c.isDisabled,f=void 0===m?null==n?void 0:n.isDisabled:m,h=c.isLoading,v=c.isActive,b=c.isFullWidth,y=c.children,j=c.leftIcon,_=c.rightIcon,w=c.loadingText,k=c.iconSpacing,T=void 0===k?"0.5rem":k,z=c.type,C=c.spinner,D=c.spinnerPlacement,I=void 0===D?"start":D,O=c.className,B=c.as,L=x(c,N),A=u.useMemo((function(){var e,t=d()({},null!=(e=null==r?void 0:r._focus)?e:{},{zIndex:1});return p({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",width:b?"100%":"auto"},r,!!n&&{_focus:t})}),[r,n,b]),P=function(e){var t=u.useState(!e),n=t[0],i=t[1];return{ref:u.useCallback((function(e){e&&i("BUTTON"===e.tagName)}),[]),type:n?"button":void 0}}(B),H=P.ref,W=P.type,G={rightIcon:_,leftIcon:j,iconSpacing:T,children:y};return u.createElement(a.m.button,p({disabled:f||h,ref:(0,i.qq)(t,H),as:B,type:null!=z?z:W,"data-active":(0,s.PB)(v),"data-loading":(0,s.PB)(h),__css:A,className:(0,s.cx)("chakra-button",O)},L),h&&"start"===I&&u.createElement(S,{className:"chakra-button__spinner--start",label:w,placement:"start",spacing:T},C),h?w||u.createElement(a.m.span,{opacity:0},u.createElement(E,G)):u.createElement(E,G),h&&"end"===I&&u.createElement(S,{className:"chakra-button__spinner--end",label:w,placement:"end",spacing:T},C))}));function E(e){var t=e.leftIcon,n=e.rightIcon,i=e.children,r=e.iconSpacing;return u.createElement(u.Fragment,null,t&&u.createElement(w,{marginEnd:r},t),i,n&&u.createElement(w,{marginStart:r},n))}s.Ts&&(k.displayName="Button");var T=["icon","children","isRound","aria-label"],z=(0,r.G)((function(e,t){var n=e.icon,i=e.children,r=e.isRound,a=e["aria-label"],l=x(e,T),o=n||i,s=u.isValidElement(o)?u.cloneElement(o,{"aria-hidden":!0,focusable:!1}):null;return u.createElement(k,p({padding:"0",borderRadius:r?"full":void 0,ref:t,"aria-label":a},l),s)}));s.Ts&&(z.displayName="IconButton")},49609:function(e,t,n){n.d(t,{$:function(){return x}});var i=n(70917),r=n(35059),a=n(91639),l=n(89164),o=n(43185),s=n(15031),c=n(1358),d=n(67294);function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},u.apply(this,arguments)}var m=["label","thickness","speed","emptyColor","className"],f=(0,i.F4)({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}),x=(0,r.G)((function(e,t){var n=(0,a.mq)("Spinner",e),i=(0,l.Lr)(e),r=i.label,x=void 0===r?"Loading...":r,p=i.thickness,h=void 0===p?"2px":p,v=i.speed,b=void 0===v?"0.45s":v,g=i.emptyColor,y=void 0===g?"transparent":g,j=i.className,S=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(i,m),_=(0,s.cx)("chakra-spinner",j),w=u({display:"inline-block",borderColor:"currentColor",borderStyle:"solid",borderRadius:"99999px",borderWidth:h,borderBottomColor:y,borderLeftColor:y,animation:f+" "+b+" linear infinite"},n);return d.createElement(o.m.div,u({ref:t,__css:w,className:_},S),x&&d.createElement(c.TX,null,x))}));s.Ts&&(x.displayName="Spinner")},1358:function(e,t,n){n.d(t,{NL:function(){return a},TX:function(){return l}});var i=n(43185),r=n(15031),a={border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},l=(0,i.m)("span",{baseStyle:a});r.Ts&&(l.displayName="VisuallyHidden");var o=(0,i.m)("input",{baseStyle:a});r.Ts&&(o.displayName="VisuallyHiddenInput")},87503:function(e,t,n){n.r(t);var i=n(85893),r=n(68527),a=n(15193);t.default=function(e){return(0,i.jsx)(r.xu,{children:(0,i.jsx)(a.zx,{border:"solid 2px #faae01",className:(null===e||void 0===e?void 0:e.showShadow)?"with-shadow":"",title:e.title,variant:"trainingButton",bg:"rgb(11, 11, 13)",boxShadow:"0 0 20px  rgba(255, 174, 0, 0.4)",transition:"all 0.1s",_hover:{border:"solid 3px #faae01",transform:"scale(1.05)",opacity:1,boxShadow:"0 0 20px #ffae00",background:"rgb(11, 11, 13)"},_focus:{outline:"none",background:"gray.500"},_active:{outline:"none",background:"gray.500"},onClick:e.onClickHandler,disabled:e.disabledButton,children:(0,i.jsx)(r.xv,{variant:"gradient",fontWeight:"800",textTransform:"none",fontSize:e.sizes?e.sizes:"1xl",children:e.text})})})}},67638:function(e,t,n){n.r(t);var i=n(85893),r=(n(67294),n(41664)),a=n.n(r),l=n(68527),o=n(41359),s=n(25675),c=n.n(s),d=n(87503),u=n(13327),m=n.n(u),f=n(19470),x=n.n(f),p=n(3007),h=n.n(p),v=n(84546),b=n.n(v);t.default=function(e){var t,n;return(0,i.jsxs)(l.xu,{flex:"1",mx:["4","3","3","3","5"],mb:"20",width:["90%","90%","90%","80%","80%"],color:"brand.white",display:"flex",flexDirection:["column","column","row","row"],justifyContent:"center",alignItems:"center",textAlign:["center","center","left","left"],children:[(0,i.jsx)(l.xu,{mr:["0","0","15","65"],children:(0,i.jsx)(l.xu,{width:(e.main,"400px"),height:(e.main,"400px"),children:(0,i.jsx)(m(),{left:!0,children:(0,i.jsx)(h(),{children:(0,i.jsx)(x(),{big:!0,children:(0,i.jsx)(c(),{src:e.image,width:"Digital"==e.main?"400px":"350px",height:"Digital"==e.main?"400px":"350px",alt:e.main})})})})})}),(0,i.jsxs)(l.xu,{children:[(0,i.jsxs)(l.xu,{lineHeight:"1.1",mb:"4",children:[(0,i.jsx)(m(),{right:!0,children:(0,i.jsx)(x(),{big:!0,children:(0,i.jsx)(l.xv,{a:"h3",color:"white",fontSize:["2xl","2xl","3xl","3xl","3xl"],textTransform:"uppercase",fontWeight:"extrabold",p:"0",m:"0",children:e.main})})}),(0,i.jsx)(m(),{right:!0,children:(0,i.jsx)(x(),{big:!0,children:(0,i.jsx)(o.m$.span,{bgGradient:"linear(to-r, brand.yellow, brand.orange)",bgClip:"text",fontSize:["2xl","2xl","3xl","3xl","3xl"],fontWeight:"extrabold",textTransform:"uppercase",children:e.main2})})})]}),(0,i.jsx)(l.xu,{children:(0,i.jsx)(b(),{cascade:!0,children:(0,i.jsxs)(l.xu,{children:[(null===e||void 0===e||null===(t=e.servicesDatatext)||void 0===t?void 0:t.text1)&&(0,i.jsx)(l.xv,{fontSize:["medium","xl","xl"],children:null===e||void 0===e||null===(n=e.servicesDatatext)||void 0===n?void 0:n.text1}),e.servicesDatatext.text&&(0,i.jsx)(l.xv,{fontSize:["medium","xl","xl"],children:e.servicesDatatext.text}),(0,i.jsxs)(l.xu,{children:[e.servicesDatatext.textListsHeading&&(0,i.jsx)(l.xv,{fontSize:["medium","xl","xl"],mt:5,textAlign:["left","left","left","left","left"],fontWeight:"semibold",children:e.servicesDatatext.textListsHeading}),(0,i.jsx)(l.QI,{listStyleType:["disc","disc","disc","disc","disc"],w:"85%",ml:["5vw","5vw","10px","20px","20px"],textAlign:["left","left","left",,"left"],children:e.servicesDatatext.textLists.map((function(e,t){return(0,i.jsx)(l.HC,{fontSize:["medium","xl","xl"],fontWeight:"light",mt:2,ml:["0","5","5"],children:e},"whyl".concat(t))}))})]}),e.servicesDatatext.text2&&(0,i.jsx)(l.xv,{fontSize:["medium","xl","xl"],mt:5,children:e.servicesDatatext.text2})]})})}),e.buttonName&&e.buttonLink&&(0,i.jsx)(l.xu,{mt:"10",textAlign:["center","center","left","left"],children:(0,i.jsx)(m(),{bottom:!0,children:(0,i.jsx)(a(),{href:e.buttonLink,children:(0,i.jsx)("a",{children:(0,i.jsx)(d.default,{text:e.buttonName,sizes:"xl",_focus:{border:"none",backgroundColor:"none"}})})})})})]})]})}},3007:function(e,t,n){function i(e,t){var n={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}function r(e,t){var n=t.left,i=t.right,r=t.up,a=t.down,l=t.top,o=t.bottom,s=t.mirror,c=t.opposite,u=(n?1:0)|(i?2:0)|(l||a?4:0)|(o||r?8:0)|(s?16:0)|(c?32:0)|(e?64:0);if(m.hasOwnProperty(u))return m[u];if(!s!=!(e&&c)){var f=[i,n,o,l,a,r];n=f[0],i=f[1],l=f[2],o=f[3],r=f[4],a=f[5]}var x="-200deg",p="center";return(a||l)&&n&&(x="-45deg"),((a||l)&&i||(r||o)&&n)&&(x="45deg"),(r||o)&&i&&(x="-90deg"),(n||i)&&(p=(n?"left":"right")+" bottom"),m[u]=(0,d.animation)("\n    "+(e?"to":"from")+" { opacity: 0; transform-origin: "+p+"; transform: rotate3d(0, 0, 1, "+x+");}\n    "+(e?"from":"to")+" { opacity: 1; transform-origin: "+p+"; transform: none;}\n  "),m[u]}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.defaults,t=e.children,n=(e.out,e.forever),a=e.timeout,l=e.duration,o=void 0===l?d.defaults.duration:l,s=e.delay,u=void 0===s?d.defaults.delay:s,m=e.count,f=void 0===m?d.defaults.count:m,x=i(e,["children","out","forever","timeout","duration","delay","count"]),p={make:r,duration:void 0===a?o:a,delay:u,forever:n,count:f,style:{animationFillMode:"both"}};return(0,c.default)(x,p,p,t)}Object.defineProperty(t,"__esModule",{value:!0});var l,o=n(45697),s=n(42580),c=(l=s)&&l.__esModule?l:{default:l},d=n(11017),u={out:o.bool,left:o.bool,right:o.bool,top:o.bool,bottom:o.bool,mirror:o.bool,opposite:o.bool,duration:o.number,timeout:o.number,delay:o.number,count:o.number,forever:o.bool},m={};a.propTypes=u,t.default=a,e.exports=t.default}}]);