(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3287,4468,7317],{84746:function(e,t,r){"use strict";r.d(t,{P:function(){return p}});var n=r(10894),o=r(35059),i=r(91639),c=r(89164),s=r(43185),a=r(15031),l=r(67294);function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u.apply(this,arguments)}var f=["children","isDisabled","__css"],d=function(e){return l.createElement(n.JO,u({focusable:"false","aria-hidden":!0},e),l.createElement("path",{fill:"currentColor",d:"M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"}))},p=(0,o.G)((function(e,t){var r=(0,i.mq)("CloseButton",e),n=(0,c.Lr)(e),o=n.children,a=n.isDisabled,p=n.__css,h=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(n,f);return l.createElement(s.m.button,u({type:"button","aria-label":"Close",ref:t,disabled:a,__css:u({},{outline:0,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},r,p)},h),o||l.createElement(d,{width:"1em",height:"1em"}))}));a.Ts&&(p.displayName="CloseButton")},83454:function(e,t,r){"use strict";var n,o;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"===typeof(null==(o=r.g.process)?void 0:o.env)?r.g.process:r(77663)},82583:function(e,t,r){"use strict";r.d(t,{I:function(){return l},db:function(){return a}});var n=r(83977),o=r(39828),i=r(91259),c=r(77004),s=(0,n.ZF)({apiKey:"AIzaSyBJA3OU9j2hD3eCcuBK1ufK9KIs7xkijqM",authDomain:"redsky-web.firebaseapp.com",projectId:"redsky-web",storageBucket:"redsky-web.appspot.com",messagingSenderId:"503303012281",appId:"1:503303012281:web:fbadea13c15e03b9c48068",measurementId:"G-75QR2Q2EBR"}),a=(0,o.ad)(s),l=(0,i.v0)(s);(0,c.$C)(s)},95393:function(e,t,r){"use strict";var n=r(47568),o=r(26042),i=r(69396),c=r(70655),s=r(85893),a=r(67294),l=r(27311),u=r(68527),f=r(41359),d=r(25675),p=r.n(d),h=r(39828),m=r(82583);t.Z=function(e){var t,r,d,x,v,y,b,g=e.isOpen,j=(e.onOpen,e.onClose),w=e.projecName,O=(0,a.useState)([]),k=O[0],T=O[1],C=function(){var e=(0,n.Z)((function(){var e,t;return(0,c.__generator)(this,(function(r){switch(r.label){case 0:return[4,(0,h.PL)((0,h.hJ)(m.db,"projects"))];case 1:return(e=r.sent()).empty||(t=[],e.forEach((function(e){var r=e.data();t.push((0,i.Z)((0,o.Z)({},r),{id:e.id}))})),T(t)),[2]}}))}));return function(){return e.apply(this,arguments)}}();(0,a.useEffect)((function(){C()}),[]);var S=null===k||void 0===k?void 0:k.find((function(e){return(null===e||void 0===e?void 0:e.projectsData.projectName)===w}));return(0,s.jsxs)(l.u_,{scrollBehavior:"inside",isOpen:g,onClose:j,children:[(0,s.jsx)(l.ZA,{bg:"dark",backdropFilter:"auto",backdropBlur:"3px"}),(0,s.jsxs)(l.hz,{overflow:"hidden",position:"relative",maxWidth:"80rem",bg:"brand.black",mt:"10%",mx:"10",boxShadow:"inset 0 0 8px #faae12",children:[(0,s.jsx)(l.ol,{color:"white",_focus:{border:"none"}}),(0,s.jsx)(l.fe,{children:(0,s.jsxs)(u.kC,{my:"4",gap:"6",flexDirection:["column","column","column","row","row"],children:[(0,s.jsxs)(u.xu,{w:["100%","100%","100%","50%","50%"],children:[(0,s.jsx)(p(),{src:null===S||void 0===S||null===(t=S.projectsData)||void 0===t?void 0:t.imgsrc,height:"250",width:"600",objectFit:"contain",decoding:"async",alt:"Image not found"}),(0,s.jsx)(u.kC,{mt:"4",gap:"4",children:(0,s.jsxs)(u.xu,{w:"100%",children:[(0,s.jsx)(u.xv,{as:"h3",fontSize:["2xl","2xl","2xl","1xl","1xl"],fontFamily:"Raleway",fontWeight:"700",color:"orange",mb:"2",textAlign:"center",marginBottom:"0.5rem",children:"Tech Stack"}),(0,s.jsx)(u.xv,{textAlign:"center",children:null===S||void 0===S||null===(r=S.projectsData)||void 0===r?void 0:r.projectTechStack})]})})]}),(0,s.jsxs)(u.xu,{w:["100%","100%","100%","50%","50%"],children:[(0,s.jsx)(f.m$.span,{as:"h3",fontSize:["2xl","2xl","2xl","2xl","3xl"],fontFamily:"Raleway",textTransform:"uppercase",fontWeight:"700",bgGradient:"linear(to-r, brand.yellow, brand.orange)",bgClip:"text",mb:"4",marginBottom:"0.5rem",children:null===S||void 0===S||null===(d=S.projectsData)||void 0===d?void 0:d.projectName}),(0,s.jsx)(u.iz,{my:"2",w:"100%",borderColor:"yellow.600"}),(0,s.jsx)(u.xv,{as:"h3",fontSize:["xl","xl","xl","xl","xl"],fontFamily:"Raleway",fontWeight:"600",mb:"4",marginBottom:"0.5rem",children:null===S||void 0===S||null===(x=S.projectsData)||void 0===x?void 0:x.projectDetails}),(0,s.jsxs)(u.kC,{gap:"4",my:"6",alignItems:"center",children:[(0,s.jsx)(u.xv,{fontSize:"1xl",fontFamily:"Raleway",fontWeight:"600",color:"orange",children:"Tags:"}),(0,s.jsx)(u.kC,{gap:"4",overflowX:"scroll",children:null===S||void 0===S||null===(v=S.projectsData)||void 0===v||null===(y=v.tags)||void 0===y?void 0:y.map((function(e,t){return(0,s.jsx)(u.xu,{p:"2",fontSize:"xl",fontWeight:"600",border:"2px solid orange",mb:"2",children:e},t)}))})]}),(0,s.jsx)(u.xv,{as:"h3",fontSize:"1xl",fontFamily:"Raleway",fontWeight:"600",mb:"4",marginBottom:"0.5rem",children:"Here to know about this project"}),(0,s.jsx)(u.xv,{as:"h3",fontSize:["xl","xl","xl","xl","xl"],fontFamily:"Raleway",mb:"4",marginBottom:"0.5rem",children:null===S||void 0===S||null===(b=S.projectsData)||void 0===b?void 0:b.projectAboutDetails})]})]})})]})]})}},77663:function(e){!function(){var t={229:function(e){var t,r,n=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function c(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:o}catch(e){t=o}try{r="function"===typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var s,a=[],l=!1,u=-1;function f(){l&&s&&(l=!1,s.length?a=s.concat(a):u=-1,a.length&&d())}function d(){if(!l){var e=c(f);l=!0;for(var t=a.length;t;){for(s=a,a=[];++u<t;)s&&s[u].run();u=-1,t=a.length}s=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];a.push(new p(e,t)),1!==a.length||l||c(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=h,n.addListener=h,n.once=h,n.off=h,n.removeListener=h,n.removeAllListeners=h,n.emit=h,n.prependListener=h,n.prependOnceListener=h,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}},c=!0;try{t[e](i,i.exports,n),c=!1}finally{c&&delete r[e]}return i.exports}n.ab="//";var o=n(229);e.exports=o}()},58472:function(e,t,r){"use strict";r.d(t,{Fo:function(){return u},f6:function(){return a},yK:function(){return f}});var n=r(67294);var o=r(89164),i=r(91683),c=r(70917),s=r(85893);function a(e){const{cssVarsRoot:t,theme:r,children:c}=e,a=(0,n.useMemo)((()=>(0,o.c0)(r)),[r]);return(0,s.jsxs)(i.a,{theme:a,children:[(0,s.jsx)(l,{root:t}),c]})}function l({root:e=":host, :root"}){const t=[e,"[data-theme]"].join(",");return(0,s.jsx)(c.xB,{styles:e=>({[t]:e.__cssVars})})}var[u,f]=function(e={}){const{strict:t=!0,errorMessage:r="useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",name:o}=e,i=(0,n.createContext)(void 0);return i.displayName=o,[i.Provider,function e(){var o;const c=(0,n.useContext)(i);if(!c&&t){const t=new Error(r);throw t.name="ContextError",null==(o=Error.captureStackTrace)||o.call(Error,t,e),t}return c},i]}({name:"StylesContext",errorMessage:"useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "})},69396:function(e,t,r){"use strict";function n(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}r.d(t,{Z:function(){return n}})}}]);