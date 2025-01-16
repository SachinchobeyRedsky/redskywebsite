"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2919,7503,1554,5193,973,134],{15193:function(e,n,t){t.d(n,{zx:function(){return w}});var a=t(97375),r=t(16554),i=t(89687),l=t(77030),o=t(89164),s=t(15031),c=t(38554),d=t.n(c),u=t(67294),p=t(26450),m=t(49609);function f(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}function h(){return h=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},h.apply(this,arguments)}var b=["size","colorScheme","variant","className","spacing","isAttached","isDisabled"],v=(0,p.kr)({strict:!1,name:"ButtonGroupContext"}),g=v[0],y=v[1],x=(0,r.G)((function(e,n){var t=e.size,a=e.colorScheme,r=e.variant,l=e.className,o=e.spacing,c=void 0===o?"0.5rem":o,d=e.isAttached,p=e.isDisabled,m=f(e,b),v=(0,s.cx)("chakra-button__group",l),y=u.useMemo((function(){return{size:t,colorScheme:a,variant:r,isDisabled:p}}),[t,a,r,p]),x={display:"inline-flex"};return x=h({},x,d?{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}}:{"& > *:not(style) ~ *:not(style)":{marginStart:c}}),u.createElement(g,{value:y},u.createElement(i.m.div,h({ref:n,role:"group",__css:x,className:v},m)))}));s.Ts&&(x.displayName="ButtonGroup");var N=["label","placement","spacing","children","className","__css"],_=function(e){var n=e.label,t=e.placement,a=e.spacing,r=void 0===a?"0.5rem":a,l=e.children,o=void 0===l?u.createElement(m.$,{color:"currentColor",width:"1em",height:"1em"}):l,c=e.className,d=e.__css,p=f(e,N),b=(0,s.cx)("chakra-button__spinner",c),v="start"===t?"marginEnd":"marginStart",g=u.useMemo((function(){var e;return h(((e={display:"flex",alignItems:"center",position:n?"relative":"absolute"})[v]=n?r:0,e.fontSize="1em",e.lineHeight="normal",e),d)}),[d,n,v,r]);return u.createElement(i.m.div,h({className:b},p,{__css:g}),o)};s.Ts&&(_.displayName="ButtonSpinner");var S=["children","className"],E=function(e){var n=e.children,t=e.className,a=f(e,S),r=u.isValidElement(n)?u.cloneElement(n,{"aria-hidden":!0,focusable:!1}):n,l=(0,s.cx)("chakra-button__icon",t);return u.createElement(i.m.span,h({display:"inline-flex",alignSelf:"center",flexShrink:0},a,{className:l}),r)};s.Ts&&(E.displayName="ButtonIcon");var k=["isDisabled","isLoading","isActive","isFullWidth","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","spinnerPlacement","className","as"],w=(0,r.G)((function(e,n){var t=y(),r=(0,l.mq)("Button",h({},t,e)),c=(0,o.Lr)(e),p=c.isDisabled,m=void 0===p?null==t?void 0:t.isDisabled:p,b=c.isLoading,v=c.isActive,g=c.isFullWidth,x=c.children,N=c.leftIcon,S=c.rightIcon,E=c.loadingText,w=c.iconSpacing,C=void 0===w?"0.5rem":w,I=c.type,B=c.spinner,O=c.spinnerPlacement,j=void 0===O?"start":O,z=c.className,L=c.as,R=f(c,k),D=u.useMemo((function(){var e,n=d()({},null!=(e=null==r?void 0:r._focus)?e:{},{zIndex:1});return h({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",width:g?"100%":"auto"},r,!!t&&{_focus:n})}),[r,t,g]),G=function(e){var n=u.useState(!e),t=n[0],a=n[1];return{ref:u.useCallback((function(e){e&&a("BUTTON"===e.tagName)}),[]),type:t?"button":void 0}}(L),P=G.ref,A=G.type,q={rightIcon:S,leftIcon:N,iconSpacing:C,children:x};return u.createElement(i.m.button,h({disabled:m||b,ref:(0,a.qq)(n,P),as:L,type:null!=I?I:A,"data-active":(0,s.PB)(v),"data-loading":(0,s.PB)(b),__css:D,className:(0,s.cx)("chakra-button",z)},R),b&&"start"===j&&u.createElement(_,{className:"chakra-button__spinner--start",label:E,placement:"start",spacing:C},B),b?E||u.createElement(i.m.span,{opacity:0},u.createElement(T,q)):u.createElement(T,q),b&&"end"===j&&u.createElement(_,{className:"chakra-button__spinner--end",label:E,placement:"end",spacing:C},B))}));function T(e){var n=e.leftIcon,t=e.rightIcon,a=e.children,r=e.iconSpacing;return u.createElement(u.Fragment,null,n&&u.createElement(E,{marginEnd:r},n),a,t&&u.createElement(E,{marginStart:r},t))}s.Ts&&(w.displayName="Button");var C=["icon","children","isRound","aria-label"],I=(0,r.G)((function(e,n){var t=e.icon,a=e.children,r=e.isRound,i=e["aria-label"],l=f(e,C),o=t||a,s=u.isValidElement(o)?u.cloneElement(o,{"aria-hidden":!0,focusable:!1}):null;return u.createElement(w,h({padding:"0",borderRadius:r?"full":void 0,ref:n,"aria-label":i},l),s)}));s.Ts&&(I.displayName="IconButton")},49609:function(e,n,t){t.d(n,{$:function(){return f}});var a=t(70917),r=t(16554),i=t(77030),l=t(89164),o=t(89687),s=t(15031),c=t(1358),d=t(67294);function u(){return u=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},u.apply(this,arguments)}var p=["label","thickness","speed","emptyColor","className"],m=(0,a.F4)({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}),f=(0,r.G)((function(e,n){var t=(0,i.mq)("Spinner",e),a=(0,l.Lr)(e),r=a.label,f=void 0===r?"Loading...":r,h=a.thickness,b=void 0===h?"2px":h,v=a.speed,g=void 0===v?"0.45s":v,y=a.emptyColor,x=void 0===y?"transparent":y,N=a.className,_=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(a,p),S=(0,s.cx)("chakra-spinner",N),E=u({display:"inline-block",borderColor:"currentColor",borderStyle:"solid",borderRadius:"99999px",borderWidth:b,borderBottomColor:x,borderLeftColor:x,animation:m+" "+g+" linear infinite"},t);return d.createElement(o.m.div,u({ref:n,__css:E,className:S},_),f&&d.createElement(c.TX,null,f))}));s.Ts&&(f.displayName="Spinner")},1358:function(e,n,t){t.d(n,{NL:function(){return i},TX:function(){return l}});var a=t(89687),r=t(15031),i={border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},l=(0,a.m)("span",{baseStyle:i});r.Ts&&(l.displayName="VisuallyHidden");var o=(0,a.m)("input",{baseStyle:i});r.Ts&&(o.displayName="VisuallyHiddenInput")},87503:function(e,n,t){t.r(n);var a=t(85893),r=t(68527),i=t(15193);n.default=function(e){return(0,a.jsx)(r.xu,{children:(0,a.jsx)(i.zx,{border:"solid 2px #faae01",className:(null===e||void 0===e?void 0:e.showShadow)?"with-shadow":"",title:e.title,variant:"trainingButton",bg:"rgb(11, 11, 13)",boxShadow:"0 0 20px  rgba(255, 174, 0, 0.4)",transition:"all 0.1s",_hover:{border:"solid 3px #faae01",transform:"scale(1.05)",opacity:1,boxShadow:"0 0 20px #ffae00",background:"rgb(11, 11, 13)"},_focus:{outline:"none",background:"gray.500"},_active:{outline:"none",background:"gray.500"},onClick:e.onClickHandler,disabled:e.disabledButton,children:(0,a.jsx)(r.xv,{variant:"gradient",fontWeight:"800",textTransform:"none",fontSize:e.sizes?e.sizes:"1xl",children:e.text})})})}}}]);