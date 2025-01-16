(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2197,5193,973],{15193:function(e,n,t){"use strict";t.d(n,{zx:function(){return w}});var a=t(97375),r=t(16554),i=t(89687),l=t(77030),o=t(89164),s=t(15031),c=t(38554),u=t.n(c),d=t(67294),p=t(26450),m=t(49609);function f(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}function h(){return h=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},h.apply(this,arguments)}var v=["size","colorScheme","variant","className","spacing","isAttached","isDisabled"],g=(0,p.kr)({strict:!1,name:"ButtonGroupContext"}),b=g[0],y=g[1],x=(0,r.G)((function(e,n){var t=e.size,a=e.colorScheme,r=e.variant,l=e.className,o=e.spacing,c=void 0===o?"0.5rem":o,u=e.isAttached,p=e.isDisabled,m=f(e,v),g=(0,s.cx)("chakra-button__group",l),y=d.useMemo((function(){return{size:t,colorScheme:a,variant:r,isDisabled:p}}),[t,a,r,p]),x={display:"inline-flex"};return x=h({},x,u?{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}}:{"& > *:not(style) ~ *:not(style)":{marginStart:c}}),d.createElement(b,{value:y},d.createElement(i.m.div,h({ref:n,role:"group",__css:x,className:g},m)))}));s.Ts&&(x.displayName="ButtonGroup");var _=["label","placement","spacing","children","className","__css"],N=function(e){var n=e.label,t=e.placement,a=e.spacing,r=void 0===a?"0.5rem":a,l=e.children,o=void 0===l?d.createElement(m.$,{color:"currentColor",width:"1em",height:"1em"}):l,c=e.className,u=e.__css,p=f(e,_),v=(0,s.cx)("chakra-button__spinner",c),g="start"===t?"marginEnd":"marginStart",b=d.useMemo((function(){var e;return h(((e={display:"flex",alignItems:"center",position:n?"relative":"absolute"})[g]=n?r:0,e.fontSize="1em",e.lineHeight="normal",e),u)}),[u,n,g,r]);return d.createElement(i.m.div,h({className:v},p,{__css:b}),o)};s.Ts&&(N.displayName="ButtonSpinner");var E=["children","className"],S=function(e){var n=e.children,t=e.className,a=f(e,E),r=d.isValidElement(n)?d.cloneElement(n,{"aria-hidden":!0,focusable:!1}):n,l=(0,s.cx)("chakra-button__icon",t);return d.createElement(i.m.span,h({display:"inline-flex",alignSelf:"center",flexShrink:0},a,{className:l}),r)};s.Ts&&(S.displayName="ButtonIcon");var k=["isDisabled","isLoading","isActive","isFullWidth","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","spinnerPlacement","className","as"],w=(0,r.G)((function(e,n){var t=y(),r=(0,l.mq)("Button",h({},t,e)),c=(0,o.Lr)(e),p=c.isDisabled,m=void 0===p?null==t?void 0:t.isDisabled:p,v=c.isLoading,g=c.isActive,b=c.isFullWidth,x=c.children,_=c.leftIcon,E=c.rightIcon,S=c.loadingText,w=c.iconSpacing,F=void 0===w?"0.5rem":w,I=c.type,C=c.spinner,j=c.spinnerPlacement,O=void 0===j?"start":j,B=c.className,z=c.as,P=f(c,k),D=d.useMemo((function(){var e,n=u()({},null!=(e=null==r?void 0:r._focus)?e:{},{zIndex:1});return h({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",width:b?"100%":"auto"},r,!!t&&{_focus:n})}),[r,t,b]),R=function(e){var n=d.useState(!e),t=n[0],a=n[1];return{ref:d.useCallback((function(e){e&&a("BUTTON"===e.tagName)}),[]),type:t?"button":void 0}}(z),G=R.ref,L=R.type,W={rightIcon:E,leftIcon:_,iconSpacing:F,children:x};return d.createElement(i.m.button,h({disabled:m||v,ref:(0,a.qq)(n,G),as:z,type:null!=I?I:L,"data-active":(0,s.PB)(g),"data-loading":(0,s.PB)(v),__css:D,className:(0,s.cx)("chakra-button",B)},P),v&&"start"===O&&d.createElement(N,{className:"chakra-button__spinner--start",label:S,placement:"start",spacing:F},C),v?S||d.createElement(i.m.span,{opacity:0},d.createElement(T,W)):d.createElement(T,W),v&&"end"===O&&d.createElement(N,{className:"chakra-button__spinner--end",label:S,placement:"end",spacing:F},C))}));function T(e){var n=e.leftIcon,t=e.rightIcon,a=e.children,r=e.iconSpacing;return d.createElement(d.Fragment,null,n&&d.createElement(S,{marginEnd:r},n),a,t&&d.createElement(S,{marginStart:r},t))}s.Ts&&(w.displayName="Button");var F=["icon","children","isRound","aria-label"],I=(0,r.G)((function(e,n){var t=e.icon,a=e.children,r=e.isRound,i=e["aria-label"],l=f(e,F),o=t||a,s=d.isValidElement(o)?d.cloneElement(o,{"aria-hidden":!0,focusable:!1}):null;return d.createElement(w,h({padding:"0",borderRadius:r?"full":void 0,ref:n,"aria-label":i},l),s)}));s.Ts&&(I.displayName="IconButton")},49609:function(e,n,t){"use strict";t.d(n,{$:function(){return f}});var a=t(70917),r=t(16554),i=t(77030),l=t(89164),o=t(89687),s=t(15031),c=t(1358),u=t(67294);function d(){return d=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},d.apply(this,arguments)}var p=["label","thickness","speed","emptyColor","className"],m=(0,a.F4)({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}),f=(0,r.G)((function(e,n){var t=(0,i.mq)("Spinner",e),a=(0,l.Lr)(e),r=a.label,f=void 0===r?"Loading...":r,h=a.thickness,v=void 0===h?"2px":h,g=a.speed,b=void 0===g?"0.45s":g,y=a.emptyColor,x=void 0===y?"transparent":y,_=a.className,N=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(a,p),E=(0,s.cx)("chakra-spinner",_),S=d({display:"inline-block",borderColor:"currentColor",borderStyle:"solid",borderRadius:"99999px",borderWidth:v,borderBottomColor:x,borderLeftColor:x,animation:m+" "+b+" linear infinite"},t);return u.createElement(o.m.div,d({ref:n,__css:S,className:E},N),f&&u.createElement(c.TX,null,f))}));s.Ts&&(f.displayName="Spinner")},1358:function(e,n,t){"use strict";t.d(n,{NL:function(){return i},TX:function(){return l}});var a=t(89687),r=t(15031),i={border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},l=(0,a.m)("span",{baseStyle:i});r.Ts&&(l.displayName="VisuallyHidden");var o=(0,a.m)("input",{baseStyle:i});r.Ts&&(o.displayName="VisuallyHiddenInput")},63891:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return t(41636)}])},41636:function(e,n,t){"use strict";t.r(n);var a=t(85893),r=t(68527),i=t(15193),l=t(11163);n.default=function(){var e=(0,l.useRouter)();return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(r.xu,{mt:"40",mb:"10",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",children:[(0,a.jsx)(r.xv,{fontWeight:"800",fontSize:"9xl",color:"white",children:"404"}),(0,a.jsx)(r.xv,{fontWeight:"600",fontSize:"3xl",color:"white",lineHeight:"8",children:"Page not found"}),(0,a.jsx)(i.zx,{mt:"6",bg:"linear-gradient(to bottom, #FFF331,#FF7531)",_hover:"linear-gradient(to bottom, #FFF331,#FF7531)",onClick:function(n){n.preventDefault(),e.push("/")},fontWeight:"bold",children:"Go to home page"})]})})}}},function(e){e.O(0,[9774,2888,179],(function(){return n=63891,e(e.s=n);var n}));var n=e.O();_N_E=n}]);