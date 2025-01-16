(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7371,7503,1554,9993,2919,5193,973,134],{15193:function(e,n,t){"use strict";t.d(n,{zx:function(){return S}});var a=t(97375),r=t(16554),i=t(89687),o=t(77030),l=t(89164),s=t(15031),c=t(38554),d=t.n(c),u=t(67294),p=t(26450),f=t(49609);function m(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}function h(){return h=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},h.apply(this,arguments)}var x=["size","colorScheme","variant","className","spacing","isAttached","isDisabled"],b=(0,p.kr)({strict:!1,name:"ButtonGroupContext"}),v=b[0],g=b[1],y=(0,r.G)((function(e,n){var t=e.size,a=e.colorScheme,r=e.variant,o=e.className,l=e.spacing,c=void 0===l?"0.5rem":l,d=e.isAttached,p=e.isDisabled,f=m(e,x),b=(0,s.cx)("chakra-button__group",o),g=u.useMemo((function(){return{size:t,colorScheme:a,variant:r,isDisabled:p}}),[t,a,r,p]),y={display:"inline-flex"};return y=h({},y,d?{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}}:{"& > *:not(style) ~ *:not(style)":{marginStart:c}}),u.createElement(v,{value:g},u.createElement(i.m.div,h({ref:n,role:"group",__css:y,className:b},f)))}));s.Ts&&(y.displayName="ButtonGroup");var k=["label","placement","spacing","children","className","__css"],w=function(e){var n=e.label,t=e.placement,a=e.spacing,r=void 0===a?"0.5rem":a,o=e.children,l=void 0===o?u.createElement(f.$,{color:"currentColor",width:"1em",height:"1em"}):o,c=e.className,d=e.__css,p=m(e,k),x=(0,s.cx)("chakra-button__spinner",c),b="start"===t?"marginEnd":"marginStart",v=u.useMemo((function(){var e;return h(((e={display:"flex",alignItems:"center",position:n?"relative":"absolute"})[b]=n?r:0,e.fontSize="1em",e.lineHeight="normal",e),d)}),[d,n,b,r]);return u.createElement(i.m.div,h({className:x},p,{__css:v}),l)};s.Ts&&(w.displayName="ButtonSpinner");var j=["children","className"],_=function(e){var n=e.children,t=e.className,a=m(e,j),r=u.isValidElement(n)?u.cloneElement(n,{"aria-hidden":!0,focusable:!1}):n,o=(0,s.cx)("chakra-button__icon",t);return u.createElement(i.m.span,h({display:"inline-flex",alignSelf:"center",flexShrink:0},a,{className:o}),r)};s.Ts&&(_.displayName="ButtonIcon");var N=["isDisabled","isLoading","isActive","isFullWidth","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","spinnerPlacement","className","as"],S=(0,r.G)((function(e,n){var t=g(),r=(0,o.mq)("Button",h({},t,e)),c=(0,l.Lr)(e),p=c.isDisabled,f=void 0===p?null==t?void 0:t.isDisabled:p,x=c.isLoading,b=c.isActive,v=c.isFullWidth,y=c.children,k=c.leftIcon,j=c.rightIcon,_=c.loadingText,S=c.iconSpacing,C=void 0===S?"0.5rem":S,T=c.type,O=c.spinner,I=c.spinnerPlacement,P=void 0===I?"start":I,R=c.className,G=c.as,A=m(c,N),B=u.useMemo((function(){var e,n=d()({},null!=(e=null==r?void 0:r._focus)?e:{},{zIndex:1});return h({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",width:v?"100%":"auto"},r,!!t&&{_focus:n})}),[r,t,v]),z=function(e){var n=u.useState(!e),t=n[0],a=n[1];return{ref:u.useCallback((function(e){e&&a("BUTTON"===e.tagName)}),[]),type:t?"button":void 0}}(G),D=z.ref,F=z.type,L={rightIcon:j,leftIcon:k,iconSpacing:C,children:y};return u.createElement(i.m.button,h({disabled:f||x,ref:(0,a.qq)(n,D),as:G,type:null!=T?T:F,"data-active":(0,s.PB)(b),"data-loading":(0,s.PB)(x),__css:B,className:(0,s.cx)("chakra-button",R)},A),x&&"start"===P&&u.createElement(w,{className:"chakra-button__spinner--start",label:_,placement:"start",spacing:C},O),x?_||u.createElement(i.m.span,{opacity:0},u.createElement(E,L)):u.createElement(E,L),x&&"end"===P&&u.createElement(w,{className:"chakra-button__spinner--end",label:_,placement:"end",spacing:C},O))}));function E(e){var n=e.leftIcon,t=e.rightIcon,a=e.children,r=e.iconSpacing;return u.createElement(u.Fragment,null,n&&u.createElement(_,{marginEnd:r},n),a,t&&u.createElement(_,{marginStart:r},t))}s.Ts&&(S.displayName="Button");var C=["icon","children","isRound","aria-label"],T=(0,r.G)((function(e,n){var t=e.icon,a=e.children,r=e.isRound,i=e["aria-label"],o=m(e,C),l=t||a,s=u.isValidElement(l)?u.cloneElement(l,{"aria-hidden":!0,focusable:!1}):null;return u.createElement(S,h({padding:"0",borderRadius:r?"full":void 0,ref:n,"aria-label":i},o),s)}));s.Ts&&(T.displayName="IconButton")},49609:function(e,n,t){"use strict";t.d(n,{$:function(){return m}});var a=t(70917),r=t(16554),i=t(77030),o=t(89164),l=t(89687),s=t(15031),c=t(1358),d=t(67294);function u(){return u=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},u.apply(this,arguments)}var p=["label","thickness","speed","emptyColor","className"],f=(0,a.F4)({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}),m=(0,r.G)((function(e,n){var t=(0,i.mq)("Spinner",e),a=(0,o.Lr)(e),r=a.label,m=void 0===r?"Loading...":r,h=a.thickness,x=void 0===h?"2px":h,b=a.speed,v=void 0===b?"0.45s":b,g=a.emptyColor,y=void 0===g?"transparent":g,k=a.className,w=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(a,p),j=(0,s.cx)("chakra-spinner",k),_=u({display:"inline-block",borderColor:"currentColor",borderStyle:"solid",borderRadius:"99999px",borderWidth:x,borderBottomColor:y,borderLeftColor:y,animation:f+" "+v+" linear infinite"},t);return d.createElement(l.m.div,u({ref:n,__css:_,className:j},w),m&&d.createElement(c.TX,null,m))}));s.Ts&&(m.displayName="Spinner")},1358:function(e,n,t){"use strict";t.d(n,{NL:function(){return i},TX:function(){return o}});var a=t(89687),r=t(15031),i={border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},o=(0,a.m)("span",{baseStyle:i});r.Ts&&(o.displayName="VisuallyHidden");var l=(0,a.m)("input",{baseStyle:i});r.Ts&&(l.displayName="VisuallyHiddenInput")},88969:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/portfolio",function(){return t(32533)}])},32533:function(e,n,t){"use strict";t.r(n);var a=t(85893),r=t(73627),i=t(5152),o=t.n(i),l=t(13327),s=t.n(l),c=t(84546),d=t.n(c),u=t(19470),p=t.n(u),f=t(5526),m=t(89993),h=t(68527),x=t(41359),b=t(47737),v=t.n(b),g=t(9008),y=t.n(g),k=o()((function(){return Promise.all([t.e(9260),t.e(5160)]).then(t.bind(t,45160))}),{loadableGenerated:{webpack:function(){return[45160]}}}),w=o()((function(){return Promise.all([t.e(9260),t.e(2266)]).then(t.bind(t,12266))}),{loadableGenerated:{webpack:function(){return[12266]}}}),j=o()((function(){return Promise.all([t.e(9260),t.e(8646),t.e(7311),t.e(9876),t.e(2199),t.e(180),t.e(3841)]).then(t.bind(t,80180))}),{loadableGenerated:{webpack:function(){return[80180]}}}),_=o()((function(){return Promise.all([t.e(9260),t.e(6893),t.e(2141)]).then(t.bind(t,92141))}),{loadableGenerated:{webpack:function(){return[92141]}}}),N=o()((function(){return t.e(2562).then(t.bind(t,72562))}),{loadableGenerated:{webpack:function(){return[72562]}}}),S=o()((function(){return Promise.all([t.e(2016),t.e(1551),t.e(9260),t.e(8646),t.e(9315),t.e(7311),t.e(9839),t.e(6629),t.e(7261)]).then(t.bind(t,97261))}),{loadableGenerated:{webpack:function(){return[97261]}}});n.default=function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(y(),{children:[(0,a.jsx)("title",{children:"Our Portfolio - Redsky Advance Solutions: Showcasing Our Work"}),(0,a.jsx)("meta",{name:"title",content:"Our Portfolio - Redsky Advance Solutions: Showcasing Our Work"}),(0,a.jsx)("meta",{name:"description",content:"Explore our portfolio of successful projects & discover the expertise & capabilities of Redsky Advance Solutions. Our portfolio showcases a range of development, AI & deep learning."}),(0,a.jsx)("meta",{httpEquiv:"Content-Type",content:"text/html; charset=utf-8"}),(0,a.jsx)("meta",{name:"language",content:"English"}),(0,a.jsx)("link",{rel:"canonical",href:"https://redskyadvancesolutions.com/portfolio"})]}),(0,a.jsx)(j,{}),(0,a.jsx)(N,{heading:f.h0.PORTFOLIO_HEADING,content:f.h0.HEADING_CONTENT,mainimage:r.Z.background.portfolio.mainimage}),(0,a.jsx)(S,{location:"portfolio",animation:{Slide:s(),Zoom:d(),Fade:p()},cardData:null===f.h0||void 0===f.h0?void 0:f.h0.projectsData,cardimage:r.Z.background.portfolio.cardimage,data:f.h0.platforms,content:null===f.h0||void 0===f.h0?void 0:f.h0.portfolio_content,heading:{start:"Domains we",end:"have worked for"}}),(0,a.jsxs)(h.xu,{as:"section",py:"20",bgColor:"brand.black",children:[(0,a.jsx)(h.xu,{textAlign:"center",children:(0,a.jsx)(h.xu,{p:2,children:(0,a.jsx)(d(),{children:(0,a.jsx)(p(),{big:!0,children:(0,a.jsxs)(h.xv,{textAlign:"center",color:"brand.white",textTransform:"uppercase",fontSize:["2xl","2xl","4xl","4xl","4xl"],fontFamily:"Raleway",fontWeight:"extrabold",px:["10","10","0","0","0"],ml:2,children:["Our Client\u2019s ",(0,a.jsx)(x.m$.span,{bgGradient:"linear(to-r, brand.yellow, brand.orange)",bgClip:"text",fontFamily:"Raleway",fontWeight:"extrabold",ml:"2",children:"Feedback"})," "]})})})})}),(0,a.jsx)(h.xu,{px:["10","10","50","50","60px"],children:(0,a.jsx)(v(),{mouseTracking:!0,autoPlay:!0,autoPlayInterval:3e3,infinite:!0,disableButtonsControls:!0,children:f.LE.ReviewsDetails.map((function(e,n){return(0,a.jsx)(w,{index:n,image:e.image,desc:e.desc,name:e.name},n)}))})})]}),(0,a.jsx)(h.xu,{children:(0,a.jsx)(k,{})}),(0,a.jsx)(h.xu,{position:"relative",my:"20",className:"noise",children:(0,a.jsx)(m.default,{})}),(0,a.jsx)(_,{})]})}},87503:function(e,n,t){"use strict";t.r(n);var a=t(85893),r=t(68527),i=t(15193);n.default=function(e){return(0,a.jsx)(r.xu,{children:(0,a.jsx)(i.zx,{border:"solid 2px #faae01",className:(null===e||void 0===e?void 0:e.showShadow)?"with-shadow":"",title:e.title,variant:"trainingButton",bg:"rgb(11, 11, 13)",boxShadow:"0 0 20px  rgba(255, 174, 0, 0.4)",transition:"all 0.1s",_hover:{border:"solid 3px #faae01",transform:"scale(1.05)",opacity:1,boxShadow:"0 0 20px #ffae00",background:"rgb(11, 11, 13)"},_focus:{outline:"none",background:"gray.500"},_active:{outline:"none",background:"gray.500"},onClick:e.onClickHandler,disabled:e.disabledButton,children:(0,a.jsx)(r.xv,{variant:"gradient",fontWeight:"800",textTransform:"none",fontSize:e.sizes?e.sizes:"1xl",children:e.text})})})}},89993:function(e,n,t){"use strict";t.r(n);var a=t(85893),r=t(68527),i=t(67294),o=t(11163),l=t(87503),s=t(5526);n.default=function(){var e=(0,o.useRouter)(),n=(0,i.useState)(!1),t=n[0],c=n[1];return(0,i.useEffect)((function(){var e=setInterval((function(){c((function(e){return!e}))}),800);return function(){return clearInterval(e)}}),[]),(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(r.xu,{m:"auto",textAlign:"center",bg:"secondary.300",w:["94%","94%","80%","70%","70%"],h:["150px","150px","180px","180px","180px"],borderRadius:"150px",display:"flex",flexDirection:"column",justifyContent:"center",border:"1px solid #ffae00",boxShadow:"0 0 20px #ffae00",transition:"all 0.1s",px:"8",children:[(0,a.jsx)(r.xv,{fontSize:["md","md","1.2vw","1.2vw","1.9vw"],fontWeight:"bold",mb:"4",children:s.kv}),(0,a.jsx)(l.default,{title:"Contact Us",text:"LET'S CONNECT",sizes:"xl",showShadow:t,onClickHandler:function(){e.push("/contact-us")}})]})})}}},function(e){e.O(0,[3513,91,9774,2888,179],(function(){return n=88969,e(e.s=n);var n}));var n=e.O();_N_E=n}]);