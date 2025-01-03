"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6194,5193,973],{15193:function(e,n,t){t.d(n,{zx:function(){return j}});var a=t(97375),r=t(35059),i=t(43185),l=t(91639),o=t(89164),s=t(15031),c=t(38554),d=t.n(c),u=t(67294),p=t(26450),m=t(49609);function x(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}function f(){return f=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},f.apply(this,arguments)}var h=["size","colorScheme","variant","className","spacing","isAttached","isDisabled"],b=(0,p.kr)({strict:!1,name:"ButtonGroupContext"}),g=b[0],v=b[1],y=(0,r.G)((function(e,n){var t=e.size,a=e.colorScheme,r=e.variant,l=e.className,o=e.spacing,c=void 0===o?"0.5rem":o,d=e.isAttached,p=e.isDisabled,m=x(e,h),b=(0,s.cx)("chakra-button__group",l),v=u.useMemo((function(){return{size:t,colorScheme:a,variant:r,isDisabled:p}}),[t,a,r,p]),y={display:"inline-flex"};return y=f({},y,d?{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}}:{"& > *:not(style) ~ *:not(style)":{marginStart:c}}),u.createElement(g,{value:v},u.createElement(i.m.div,f({ref:n,role:"group",__css:y,className:b},m)))}));s.Ts&&(y.displayName="ButtonGroup");var _=["label","placement","spacing","children","className","__css"],E=function(e){var n=e.label,t=e.placement,a=e.spacing,r=void 0===a?"0.5rem":a,l=e.children,o=void 0===l?u.createElement(m.$,{color:"currentColor",width:"1em",height:"1em"}):l,c=e.className,d=e.__css,p=x(e,_),h=(0,s.cx)("chakra-button__spinner",c),b="start"===t?"marginEnd":"marginStart",g=u.useMemo((function(){var e;return f(((e={display:"flex",alignItems:"center",position:n?"relative":"absolute"})[b]=n?r:0,e.fontSize="1em",e.lineHeight="normal",e),d)}),[d,n,b,r]);return u.createElement(i.m.div,f({className:h},p,{__css:g}),o)};s.Ts&&(E.displayName="ButtonSpinner");var N=["children","className"],k=function(e){var n=e.children,t=e.className,a=x(e,N),r=u.isValidElement(n)?u.cloneElement(n,{"aria-hidden":!0,focusable:!1}):n,l=(0,s.cx)("chakra-button__icon",t);return u.createElement(i.m.span,f({display:"inline-flex",alignSelf:"center",flexShrink:0},a,{className:l}),r)};s.Ts&&(k.displayName="ButtonIcon");var S=["isDisabled","isLoading","isActive","isFullWidth","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","spinnerPlacement","className","as"],j=(0,r.G)((function(e,n){var t=v(),r=(0,l.mq)("Button",f({},t,e)),c=(0,o.Lr)(e),p=c.isDisabled,m=void 0===p?null==t?void 0:t.isDisabled:p,h=c.isLoading,b=c.isActive,g=c.isFullWidth,y=c.children,_=c.leftIcon,N=c.rightIcon,k=c.loadingText,j=c.iconSpacing,I=void 0===j?"0.5rem":j,C=c.type,T=c.spinner,G=c.spinnerPlacement,O=void 0===G?"start":G,A=c.className,L=c.as,z=x(c,S),D=u.useMemo((function(){var e,n=d()({},null!=(e=null==r?void 0:r._focus)?e:{},{zIndex:1});return f({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",width:g?"100%":"auto"},r,!!t&&{_focus:n})}),[r,t,g]),P=function(e){var n=u.useState(!e),t=n[0],a=n[1];return{ref:u.useCallback((function(e){e&&a("BUTTON"===e.tagName)}),[]),type:t?"button":void 0}}(L),B=P.ref,R=P.type,H={rightIcon:N,leftIcon:_,iconSpacing:I,children:y};return u.createElement(i.m.button,f({disabled:m||h,ref:(0,a.qq)(n,B),as:L,type:null!=C?C:R,"data-active":(0,s.PB)(b),"data-loading":(0,s.PB)(h),__css:D,className:(0,s.cx)("chakra-button",A)},z),h&&"start"===O&&u.createElement(E,{className:"chakra-button__spinner--start",label:k,placement:"start",spacing:I},T),h?k||u.createElement(i.m.span,{opacity:0},u.createElement(w,H)):u.createElement(w,H),h&&"end"===O&&u.createElement(E,{className:"chakra-button__spinner--end",label:k,placement:"end",spacing:I},T))}));function w(e){var n=e.leftIcon,t=e.rightIcon,a=e.children,r=e.iconSpacing;return u.createElement(u.Fragment,null,n&&u.createElement(k,{marginEnd:r},n),a,t&&u.createElement(k,{marginStart:r},t))}s.Ts&&(j.displayName="Button");var I=["icon","children","isRound","aria-label"],C=(0,r.G)((function(e,n){var t=e.icon,a=e.children,r=e.isRound,i=e["aria-label"],l=x(e,I),o=t||a,s=u.isValidElement(o)?u.cloneElement(o,{"aria-hidden":!0,focusable:!1}):null;return u.createElement(j,f({padding:"0",borderRadius:r?"full":void 0,ref:n,"aria-label":i},l),s)}));s.Ts&&(C.displayName="IconButton")},49609:function(e,n,t){t.d(n,{$:function(){return x}});var a=t(70917),r=t(35059),i=t(91639),l=t(89164),o=t(43185),s=t(15031),c=t(1358),d=t(67294);function u(){return u=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},u.apply(this,arguments)}var p=["label","thickness","speed","emptyColor","className"],m=(0,a.F4)({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}),x=(0,r.G)((function(e,n){var t=(0,i.mq)("Spinner",e),a=(0,l.Lr)(e),r=a.label,x=void 0===r?"Loading...":r,f=a.thickness,h=void 0===f?"2px":f,b=a.speed,g=void 0===b?"0.45s":b,v=a.emptyColor,y=void 0===v?"transparent":v,_=a.className,E=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(a,p),N=(0,s.cx)("chakra-spinner",_),k=u({display:"inline-block",borderColor:"currentColor",borderStyle:"solid",borderRadius:"99999px",borderWidth:h,borderBottomColor:y,borderLeftColor:y,animation:m+" "+g+" linear infinite"},t);return d.createElement(o.m.div,u({ref:n,__css:k,className:N},E),x&&d.createElement(c.TX,null,x))}));s.Ts&&(x.displayName="Spinner")},1358:function(e,n,t){t.d(n,{NL:function(){return i},TX:function(){return l}});var a=t(43185),r=t(15031),i={border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},l=(0,a.m)("span",{baseStyle:i});r.Ts&&(l.displayName="VisuallyHidden");var o=(0,a.m)("input",{baseStyle:i});r.Ts&&(o.displayName="VisuallyHiddenInput")},96194:function(e,n,t){t.r(n);var a=t(85893),r=(t(67294),t(5152)),i=t.n(r),l=t(68527),o=t(5526),s=t(66007),c=i()((function(){return Promise.all([t.e(2016),t.e(4597),t.e(1759),t.e(8536)]).then(t.bind(t,11598))}),{loadableGenerated:{webpack:function(){return[11598]}}});n.default=function(){return(0,a.jsx)(l.xu,{as:"main",backgroundImage:'linear-gradient(to right,#101114a4, #101114a4) ,url("https://firebasestorage.googleapis.com/v0/b/redsky-web.appspot.com/o/apiimage%2Fbackgroundimage%2FHome_mobile.webp?alt=media&token=bcd2097f-c2c6-43b2-a992-7160fd4a402d")',backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundColor:"black",backgroundSize:"cover",color:"white",fontFamily:"Raleway",minH:["100vh","100vh","100vh","100vh","100vh"],position:"relative",px:"2",children:(0,a.jsxs)(l.kC,{direction:["column","column","column","row","row"],children:[(0,a.jsx)(l.xu,{color:"white",display:"flex",flexDirection:"column",py:["4","4","10","40","40"],w:["100%","100%","100%","50%","50%"],children:(0,a.jsxs)(l.xu,{children:[(0,a.jsx)(l.xu,{children:(0,a.jsxs)(l.X6,{as:"h1",ml:["0"],fontWeight:"ultrabold",fontFamily:"Raleway",fontSize:["3xl","3xl","5xl","5xl","5xl"],pt:["50px","50px","150px","0px","0px"],pl:["15px","15px","20px","50px","60px"],children:[(0,a.jsx)(l.xv,{display:"block",children:o.LE.HOME_LANDING_PAGE__HEADING}),(0,a.jsx)(l.xv,{bgGradient:"linear(to-r, brand.yellow, brand.orange)",bgClip:"text",fontSize:["2xl","2xl","4xl","4xl","3rem"],children:o.LE.HOME_LANDING_PAGE_HEADING2})]})}),(0,a.jsx)(l.xv,{ml:["0"],fontWeight:"medium",mt:4,fontSize:["1xl","1xl","2xl","1xl","1xl"],w:["90%","90%","80%","95%","90%"],pl:["15px","15px","20px","50px","65px"],children:o.LE.HOME_LANDING_PAGE__TEXT}),(0,a.jsx)(l.xu,{pl:["15px","15px","20px","50px","65px"],mt:"10",children:(0,a.jsx)(s.Z,{})})]})}),(0,a.jsx)(l.xu,{py:"20",w:["100%","100%","100%","50%","50%"],px:["6","6","40","6","6"],children:(0,a.jsx)(c,{})})]})})}},66007:function(e,n,t){var a=t(85893),r=(t(67294),t(41664)),i=t.n(r),l=t(15193),o=t(68527),s=t(89583);n.Z=function(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(i(),{href:"/contact-us",children:(0,a.jsx)("a",{children:(0,a.jsx)(l.zx,{title:"Contact Us",border:"solid 2px #faae01",background:"secondary.600",borderRadius:"500",P:"2",bg:"gray.500",mt:"2",boxShadow:"0 0 20px  rgba(255, 174, 0, 0.4)",transition:"all 0.2s",_hover:{border:"solid 3px #faae01",transform:"scale(1.05)",opacity:1,boxShadow:"0 0 20px #ffae00",background:"rgb(11, 11, 13)"},_focus:{outline:"none",background:"gray.500"},_active:{outline:"none",background:"gray.500",border:"none"},children:(0,a.jsx)(o.xv,{fontSize:"lg",variant:"gradient",fontWeight:"800",textTransform:"none",children:(0,a.jsxs)(o.kC,{alignItems:"center",children:["Contact Us",(0,a.jsx)(o.xv,{ml:"2",children:(0,a.jsx)(s.e7O,{color:"#faae12"})})]})})})})})})}}}]);