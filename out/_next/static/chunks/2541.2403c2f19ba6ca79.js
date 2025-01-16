"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2541,5193,973],{15193:function(e,n,t){t.d(n,{zx:function(){return w}});var a=t(97375),r=t(16554),i=t(89687),l=t(77030),o=t(89164),s=t(15031),c=t(38554),d=t.n(c),u=t(67294),m=t(26450),p=t(49609);function f(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}function h(){return h=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},h.apply(this,arguments)}var g=["size","colorScheme","variant","className","spacing","isAttached","isDisabled"],x=(0,m.kr)({strict:!1,name:"ButtonGroupContext"}),b=x[0],v=x[1],y=(0,r.G)((function(e,n){var t=e.size,a=e.colorScheme,r=e.variant,l=e.className,o=e.spacing,c=void 0===o?"0.5rem":o,d=e.isAttached,m=e.isDisabled,p=f(e,g),x=(0,s.cx)("chakra-button__group",l),v=u.useMemo((function(){return{size:t,colorScheme:a,variant:r,isDisabled:m}}),[t,a,r,m]),y={display:"inline-flex"};return y=h({},y,d?{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}}:{"& > *:not(style) ~ *:not(style)":{marginStart:c}}),u.createElement(b,{value:v},u.createElement(i.m.div,h({ref:n,role:"group",__css:y,className:x},p)))}));s.Ts&&(y.displayName="ButtonGroup");var S=["label","placement","spacing","children","className","__css"],k=function(e){var n=e.label,t=e.placement,a=e.spacing,r=void 0===a?"0.5rem":a,l=e.children,o=void 0===l?u.createElement(p.$,{color:"currentColor",width:"1em",height:"1em"}):l,c=e.className,d=e.__css,m=f(e,S),g=(0,s.cx)("chakra-button__spinner",c),x="start"===t?"marginEnd":"marginStart",b=u.useMemo((function(){var e;return h(((e={display:"flex",alignItems:"center",position:n?"relative":"absolute"})[x]=n?r:0,e.fontSize="1em",e.lineHeight="normal",e),d)}),[d,n,x,r]);return u.createElement(i.m.div,h({className:g},m,{__css:b}),o)};s.Ts&&(k.displayName="ButtonSpinner");var N=["children","className"],_=function(e){var n=e.children,t=e.className,a=f(e,N),r=u.isValidElement(n)?u.cloneElement(n,{"aria-hidden":!0,focusable:!1}):n,l=(0,s.cx)("chakra-button__icon",t);return u.createElement(i.m.span,h({display:"inline-flex",alignSelf:"center",flexShrink:0},a,{className:l}),r)};s.Ts&&(_.displayName="ButtonIcon");var j=["isDisabled","isLoading","isActive","isFullWidth","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","spinnerPlacement","className","as"],w=(0,r.G)((function(e,n){var t=v(),r=(0,l.mq)("Button",h({},t,e)),c=(0,o.Lr)(e),m=c.isDisabled,p=void 0===m?null==t?void 0:t.isDisabled:m,g=c.isLoading,x=c.isActive,b=c.isFullWidth,y=c.children,S=c.leftIcon,N=c.rightIcon,_=c.loadingText,w=c.iconSpacing,I=void 0===w?"0.5rem":w,C=c.type,T=c.spinner,z=c.spinnerPlacement,R=void 0===z?"start":z,B=c.className,O=c.as,F=f(c,j),A=u.useMemo((function(){var e,n=d()({},null!=(e=null==r?void 0:r._focus)?e:{},{zIndex:1});return h({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",width:b?"100%":"auto"},r,!!t&&{_focus:n})}),[r,t,b]),P=function(e){var n=u.useState(!e),t=n[0],a=n[1];return{ref:u.useCallback((function(e){e&&a("BUTTON"===e.tagName)}),[]),type:t?"button":void 0}}(O),D=P.ref,L=P.type,G={rightIcon:N,leftIcon:S,iconSpacing:I,children:y};return u.createElement(i.m.button,h({disabled:p||g,ref:(0,a.qq)(n,D),as:O,type:null!=C?C:L,"data-active":(0,s.PB)(x),"data-loading":(0,s.PB)(g),__css:A,className:(0,s.cx)("chakra-button",B)},F),g&&"start"===R&&u.createElement(k,{className:"chakra-button__spinner--start",label:_,placement:"start",spacing:I},T),g?_||u.createElement(i.m.span,{opacity:0},u.createElement(E,G)):u.createElement(E,G),g&&"end"===R&&u.createElement(k,{className:"chakra-button__spinner--end",label:_,placement:"end",spacing:I},T))}));function E(e){var n=e.leftIcon,t=e.rightIcon,a=e.children,r=e.iconSpacing;return u.createElement(u.Fragment,null,n&&u.createElement(_,{marginEnd:r},n),a,t&&u.createElement(_,{marginStart:r},t))}s.Ts&&(w.displayName="Button");var I=["icon","children","isRound","aria-label"],C=(0,r.G)((function(e,n){var t=e.icon,a=e.children,r=e.isRound,i=e["aria-label"],l=f(e,I),o=t||a,s=u.isValidElement(o)?u.cloneElement(o,{"aria-hidden":!0,focusable:!1}):null;return u.createElement(w,h({padding:"0",borderRadius:r?"full":void 0,ref:n,"aria-label":i},l),s)}));s.Ts&&(C.displayName="IconButton")},49609:function(e,n,t){t.d(n,{$:function(){return f}});var a=t(70917),r=t(16554),i=t(77030),l=t(89164),o=t(89687),s=t(15031),c=t(1358),d=t(67294);function u(){return u=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},u.apply(this,arguments)}var m=["label","thickness","speed","emptyColor","className"],p=(0,a.F4)({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}),f=(0,r.G)((function(e,n){var t=(0,i.mq)("Spinner",e),a=(0,l.Lr)(e),r=a.label,f=void 0===r?"Loading...":r,h=a.thickness,g=void 0===h?"2px":h,x=a.speed,b=void 0===x?"0.45s":x,v=a.emptyColor,y=void 0===v?"transparent":v,S=a.className,k=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(a,m),N=(0,s.cx)("chakra-spinner",S),_=u({display:"inline-block",borderColor:"currentColor",borderStyle:"solid",borderRadius:"99999px",borderWidth:g,borderBottomColor:y,borderLeftColor:y,animation:p+" "+b+" linear infinite"},t);return d.createElement(o.m.div,u({ref:n,__css:_,className:N},k),f&&d.createElement(c.TX,null,f))}));s.Ts&&(f.displayName="Spinner")},1358:function(e,n,t){t.d(n,{NL:function(){return i},TX:function(){return l}});var a=t(89687),r=t(15031),i={border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},l=(0,a.m)("span",{baseStyle:i});r.Ts&&(l.displayName="VisuallyHidden");var o=(0,a.m)("input",{baseStyle:i});r.Ts&&(o.displayName="VisuallyHiddenInput")},72541:function(e,n,t){t.r(n);var a=t(85893),r=t(67294),i=t(68527),l=t(49609),o=t(34651),s=t(11163),c=t(73627),d=t(66007);n.default=function(e){var n=e.heading,t=e.landingText,u=e.landingImg,m=((0,s.useRouter)(),(0,r.useState)(!0)),p=m[0],f=m[1];return(0,r.useEffect)((function(){setTimeout((function(){f(!1)}),1e3)}),[]),(0,a.jsx)(a.Fragment,{children:p?(0,a.jsx)(i.xu,{p:"80",children:(0,a.jsx)(i.xu,{pb:"40",textAlign:"center",overflow:"hidden",children:(0,a.jsx)(l.$,{thickness:"5px",speed:"0.65s",color:"#faae12",size:"xl"})})}):(0,a.jsx)(i.xu,{as:"main",bg:"linear-gradient(to right, #101114a0,#101114a0),url(".concat(c.Z.publicimages.carrierBack,")"),backgroundRepeat:"no-repeat",fontFamily:"Raleway",backgroundPosition:"center",backgroundColor:"brand.black",display:"flex",justifyContent:"center",px:["10","10","20","20","20"],alignItems:"center",h:["","","100vh","100vh","85vh"],mt:["20","20","20","0","0"],mb:"20",children:(0,a.jsxs)(i.kC,{flexDirection:["column","column","column","row","row"],h:["100vh","100vh","100vh","80vh","80vh"],justifyContent:"space-between",children:[(0,a.jsxs)(i.xu,{w:["100%","100%","100%","60%","60%"],px:"2",alignSelf:"center",lineHeight:1.2,children:[(0,a.jsx)(i.xv,{as:"h1",className:"typewrtier",fontSize:["2xl","2xl","3xl","3xl","4xl"],fontFamily:"Raleway",fontWeight:"ultrabold",textAlign:"left",color:"yellow.400",mt:"6",children:n}),(0,a.jsx)(i.xu,{my:"4",children:(0,a.jsx)(i.xv,{ml:["0"],fontWeight:"medium",lineHeight:"1.5",fontFamily:"Raleway",fontSize:["xl","xl","xl","1xl","1.3vw"],w:"100%",zIndex:34,children:t})}),(0,a.jsx)(d.Z,{})]}),(0,a.jsx)(i.xu,{w:["100%","100%","100%","40%","40%"],alignSelf:"center",display:"flex",alignItems:"flex-end",mt:["4","4","0","0","0"],children:(0,a.jsx)(o.Ee,{src:u,alt:"landing Img",ml:"",w:"Mobile Application"===n?"95%":"100%",loading:"lazy",decoding:"async"})})]})})})}},66007:function(e,n,t){var a=t(85893),r=(t(67294),t(41664)),i=t.n(r),l=t(15193),o=t(68527),s=t(89583);n.Z=function(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(i(),{href:"/contact-us",children:(0,a.jsx)("a",{children:(0,a.jsx)(l.zx,{title:"Contact Us",border:"solid 2px #faae01",background:"secondary.600",borderRadius:"500",P:"2",bg:"gray.500",mt:"2",boxShadow:"0 0 20px  rgba(255, 174, 0, 0.4)",transition:"all 0.2s",_hover:{border:"solid 3px #faae01",transform:"scale(1.05)",opacity:1,boxShadow:"0 0 20px #ffae00",background:"rgb(11, 11, 13)"},_focus:{outline:"none",background:"gray.500"},_active:{outline:"none",background:"gray.500",border:"none"},children:(0,a.jsx)(o.xv,{fontSize:"lg",variant:"gradient",fontWeight:"800",textTransform:"none",children:(0,a.jsxs)(o.kC,{alignItems:"center",children:["Contact Us",(0,a.jsx)(o.xv,{ml:"2",children:(0,a.jsx)(s.e7O,{color:"#faae12"})})]})})})})})})}}}]);