(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3881],{63881:function(e,n,t){"use strict";t.r(n);var r=t(85893),a=(t(67294),t(68527)),i=t(41359),o=(t(99005),t(97005));n.default=function(e){var n=e.Servicelogo,t=e.tech,l=e.animation,s=e.toolsUsing,d=e.tooslUsingGradient,c=l.Fade,u=l.Zoom;return(0,r.jsx)(a.xu,{as:"section",overflow:"hidden",pt:"50px",pb:"25px",minH:["auto","auto","auto","auto","40vh"],children:(0,r.jsx)(c,{bottom:!0,children:(0,r.jsxs)(a.xu,{overflow:"hidden",children:[(0,r.jsx)(a.xu,{textAlign:"center",children:(0,r.jsx)(a.xu,{children:(0,r.jsx)(u,{children:(0,r.jsx)(c,{big:!0,children:(0,r.jsxs)(a.xv,{textAlign:"center",color:"brand.white",textTransform:"uppercase",fontSize:["2xl","2xl","4xl","4xl","4xl"],fontFamily:"Raleway",fontWeight:"extrabold",px:["10","10","0","0","0"],ml:2,mb:"10",children:[s||"Technology We",(0,r.jsx)(i.m$.span,{bgGradient:"linear(to-r, brand.yellow, brand.orange)",bgClip:"text",fontFamily:"Raleway",fontWeight:"extrabold",ml:"2",children:d||"are using"})," "]})})})})}),(0,r.jsx)(a.xu,{children:(0,r.jsx)(o.Z,{speed:200,direction:"left",loop:0,children:(0,r.jsx)(a.kC,{h:"220",children:null===t||void 0===t?void 0:t.map((function(e,t){return(0,r.jsx)(a.xu,{m:"4",children:(0,r.jsx)(n,{image:e.images})},t)}))})})})]})})})}},97005:function(e,n,t){var r=t(67294);function a(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}var i=a(r);!function(e){if(!e||"undefined"===typeof window)return;const n=document.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=e,document.head.appendChild(n)}('.rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}');const o=r.forwardRef((function({style:e={},className:n="",autoFill:t=!1,play:a=!0,pauseOnHover:o=!1,pauseOnClick:l=!1,direction:s="left",speed:d=50,delay:c=0,loop:u=0,gradient:f=!1,gradientColor:m="white",gradientWidth:h=200,onFinish:p,onCycleComplete:v,onMount:g,children:x},y){const[w,b]=r.useState(0),[j,E]=r.useState(0),[C,k]=r.useState(1),[N,M]=r.useState(!1),R=r.useRef(null),q=y||R,F=r.useRef(null),A=r.useCallback((()=>{if(F.current&&q.current){const e=q.current.getBoundingClientRect(),n=F.current.getBoundingClientRect();let r=e.width,a=n.width;"up"!==s&&"down"!==s||(r=e.height,a=n.height),k(t&&r&&a&&a<r?Math.ceil(r/a):1),b(r),E(a)}}),[t,q,s]);r.useEffect((()=>{if(N&&(A(),F.current&&q.current)){const e=new ResizeObserver((()=>A()));return e.observe(q.current),e.observe(F.current),()=>{e&&e.disconnect()}}}),[A,q,N]),r.useEffect((()=>{A()}),[A,x]),r.useEffect((()=>{M(!0)}),[]),r.useEffect((()=>{"function"===typeof g&&g()}),[]);const S=r.useMemo((()=>t?j*C/d:j<w?w/d:j/d),[t,w,j,C,d]),O=r.useMemo((()=>Object.assign(Object.assign({},e),{"--pause-on-hover":!a||o?"paused":"running","--pause-on-click":!a||o&&!l||l?"paused":"running","--width":"up"===s||"down"===s?"100vh":"100%","--transform":"up"===s?"rotate(-90deg)":"down"===s?"rotate(90deg)":"none"})),[e,a,o,l,s]),$=r.useMemo((()=>({"--gradient-color":m,"--gradient-width":"number"===typeof h?`${h}px`:h})),[m,h]),z=r.useMemo((()=>({"--play":a?"running":"paused","--direction":"left"===s?"normal":"reverse","--duration":`${S}s`,"--delay":`${c}s`,"--iteration-count":u?`${u}`:"infinite","--min-width":t?"auto":"100%"})),[a,s,S,c,u,t]),W=r.useMemo((()=>({"--transform":"up"===s?"rotate(90deg)":"down"===s?"rotate(-90deg)":"none"})),[s]),Z=r.useCallback((e=>[...Array(Number.isFinite(e)&&e>=0?e:0)].map(((e,n)=>i.default.createElement(r.Fragment,{key:n},r.Children.map(x,(e=>i.default.createElement("div",{style:W,className:"rfm-child"},e))))))),[W,x]);return N?i.default.createElement("div",{ref:q,style:O,className:"rfm-marquee-container "+n},f&&i.default.createElement("div",{style:$,className:"rfm-overlay"}),i.default.createElement("div",{className:"rfm-marquee",style:z,onAnimationIteration:v,onAnimationEnd:p},i.default.createElement("div",{className:"rfm-initial-child-container",ref:F},r.Children.map(x,(e=>i.default.createElement("div",{style:W,className:"rfm-child"},e)))),Z(C-1)),i.default.createElement("div",{className:"rfm-marquee",style:z},Z(C))):null}));n.Z=o}}]);