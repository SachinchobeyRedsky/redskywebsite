"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5053],{79762:function(e,r,n){n.d(r,{J1:function(){return k},Kn:function(){return R},NI:function(){return g},Yp:function(){return _}});var t=n(97375),a=n(35059),i=n(91639),l=n(89164),o=n(58472),s=n(43185),d=n(15031),u=n(26450),c=n(67294),p=n(10894);function m(){return m=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},m.apply(this,arguments)}function f(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}var v=["id","isRequired","isInvalid","isDisabled","isReadOnly"],h=["getRootProps","htmlProps"],x=(0,u.kr)({strict:!1,name:"FormControlContext"}),y=x[0],b=x[1];var g=(0,a.G)((function(e,r){var n=(0,i.jC)("Form",e),a=function(e){var r=e.id,n=e.isRequired,a=e.isInvalid,i=e.isDisabled,l=e.isReadOnly,o=f(e,v),s=(0,t.Me)(),p=r||"field-"+s,h=p+"-label",x=p+"-feedback",y=p+"-helptext",b=c.useState(!1),g=b[0],I=b[1],N=c.useState(!1),E=N[0],_=N[1],R=(0,t.kt)(),k=R[0],w=R[1],C=c.useCallback((function(e,r){return void 0===e&&(e={}),void 0===r&&(r=null),m({id:y},e,{ref:(0,u.lq)(r,(function(e){e&&_(!0)}))})}),[y]),T=c.useCallback((function(e,r){var n,t;return void 0===e&&(e={}),void 0===r&&(r=null),m({},e,{ref:r,"data-focus":(0,d.PB)(k),"data-disabled":(0,d.PB)(i),"data-invalid":(0,d.PB)(a),"data-readonly":(0,d.PB)(l),id:null!=(n=e.id)?n:h,htmlFor:null!=(t=e.htmlFor)?t:p})}),[p,i,k,a,l,h]),F=c.useCallback((function(e,r){return void 0===e&&(e={}),void 0===r&&(r=null),m({id:x},e,{ref:(0,u.lq)(r,(function(e){e&&I(!0)})),"aria-live":"polite"})}),[x]),S=c.useCallback((function(e,r){return void 0===e&&(e={}),void 0===r&&(r=null),m({},e,o,{ref:r,role:"group"})}),[o]),j=c.useCallback((function(e,r){return void 0===e&&(e={}),void 0===r&&(r=null),m({},e,{ref:r,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!n,isInvalid:!!a,isReadOnly:!!l,isDisabled:!!i,isFocused:!!k,onFocus:w.on,onBlur:w.off,hasFeedbackText:g,setHasFeedbackText:I,hasHelpText:E,setHasHelpText:_,id:p,labelId:h,feedbackId:x,helpTextId:y,htmlProps:o,getHelpTextProps:C,getErrorMessageProps:F,getRootProps:S,getLabelProps:T,getRequiredIndicatorProps:j}}((0,l.Lr)(e)),p=a.getRootProps;a.htmlProps;var x=f(a,h),b=(0,d.cx)("chakra-form-control",e.className);return c.createElement(y,{value:x},c.createElement(o.Fo,{value:n},c.createElement(s.m.div,m({},p({},r),{className:b,__css:n.container}))))}));d.Ts&&(g.displayName="FormControl");var I=(0,a.G)((function(e,r){var n=b(),t=(0,o.yK)(),a=(0,d.cx)("chakra-form__helper-text",e.className);return c.createElement(s.m.div,m({},null==n?void 0:n.getHelpTextProps(e,r),{__css:t.helperText,className:a}))}));d.Ts&&(I.displayName="FormHelperText");var N=["isDisabled","isInvalid","isReadOnly","isRequired"],E=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function _(e){var r=R(e),n=r.isDisabled,t=r.isInvalid,a=r.isReadOnly,i=r.isRequired;return m({},f(r,N),{disabled:n,readOnly:a,required:i,"aria-invalid":(0,d.Qm)(t),"aria-required":(0,d.Qm)(i),"aria-readonly":(0,d.Qm)(a)})}function R(e){var r,n,t,a=b(),i=e.id,l=e.disabled,o=e.readOnly,s=e.required,u=e.isRequired,c=e.isInvalid,p=e.isReadOnly,v=e.isDisabled,h=e.onFocus,x=e.onBlur,y=f(e,E),g=e["aria-describedby"]?[e["aria-describedby"]]:[];return null!=a&&a.hasFeedbackText&&null!=a&&a.isInvalid&&g.push(a.feedbackId),null!=a&&a.hasHelpText&&g.push(a.helpTextId),m({},y,{"aria-describedby":g.join(" ")||void 0,id:null!=i?i:null==a?void 0:a.id,isDisabled:null!=(r=null!=l?l:v)?r:null==a?void 0:a.isDisabled,isReadOnly:null!=(n=null!=o?o:p)?n:null==a?void 0:a.isReadOnly,isRequired:null!=(t=null!=s?s:u)?t:null==a?void 0:a.isRequired,isInvalid:null!=c?c:null==a?void 0:a.isInvalid,onFocus:(0,d.v0)(null==a?void 0:a.onFocus,h),onBlur:(0,d.v0)(null==a?void 0:a.onBlur,x)})}var k=(0,a.G)((function(e,r){var n=(0,i.jC)("FormError",e),t=(0,l.Lr)(e),a=b();return null!=a&&a.isInvalid?c.createElement(o.Fo,{value:n},c.createElement(s.m.div,m({},null==a?void 0:a.getErrorMessageProps(t,r),{className:(0,d.cx)("chakra-form__error-message",e.className),__css:m({display:"flex",alignItems:"center"},n.text)}))):null}));d.Ts&&(k.displayName="FormErrorMessage");var w=(0,a.G)((function(e,r){var n=(0,o.yK)(),t=b();if(null==t||!t.isInvalid)return null;var a=(0,d.cx)("chakra-form__error-icon",e.className);return c.createElement(p.ZP,m({ref:r,"aria-hidden":!0},e,{__css:n.icon,className:a}),c.createElement("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"}))}));d.Ts&&(w.displayName="FormErrorIcon");var C=["className","children","requiredIndicator","optionalIndicator"],T=(0,a.G)((function(e,r){var n,t=(0,i.mq)("FormLabel",e),a=(0,l.Lr)(e);a.className;var o=a.children,u=a.requiredIndicator,p=void 0===u?c.createElement(F,null):u,v=a.optionalIndicator,h=void 0===v?null:v,x=f(a,C),y=b(),g=null!=(n=null==y?void 0:y.getLabelProps(x,r))?n:m({ref:r},x);return c.createElement(s.m.label,m({},g,{className:(0,d.cx)("chakra-form__label",a.className),__css:m({display:"block",textAlign:"start"},t)}),o,null!=y&&y.isRequired?p:h)}));d.Ts&&(T.displayName="FormLabel");var F=(0,a.G)((function(e,r){var n=b(),t=(0,o.yK)();if(null==n||!n.isRequired)return null;var a=(0,d.cx)("chakra-form__required-indicator",e.className);return c.createElement(s.m.span,m({},null==n?void 0:n.getRequiredIndicatorProps(e,r),{__css:t.requiredIndicator,className:a}))}));d.Ts&&(F.displayName="RequiredIndicator")},4612:function(e,r,n){n.d(r,{BZ:function(){return E},II:function(){return v},Z8:function(){return T},xH:function(){return F},xW:function(){return I}});var t=n(79762),a=n(35059),i=n(91639),l=n(89164),o=n(43185),s=n(58472),d=n(15031),u=n(67294),c=n(26450);function p(){return p=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},p.apply(this,arguments)}function m(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}var f=["htmlSize"],v=(0,a.G)((function(e,r){var n=e.htmlSize,a=m(e,f),s=(0,i.jC)("Input",a),c=(0,l.Lr)(a),v=(0,t.Yp)(c),h=(0,d.cx)("chakra-input",e.className);return u.createElement(o.m.input,p({size:n},v,{__css:s.field,ref:r,className:h}))}));d.Ts&&(v.displayName="Input"),v.id="Input";var h=["placement"],x={left:{marginEnd:"-1px",borderEndRadius:0,borderEndColor:"transparent"},right:{marginStart:"-1px",borderStartRadius:0,borderStartColor:"transparent"}},y=(0,o.m)("div",{baseStyle:{flex:"0 0 auto",width:"auto",display:"flex",alignItems:"center",whiteSpace:"nowrap"}}),b=(0,a.G)((function(e,r){var n,t=e.placement,a=void 0===t?"left":t,i=m(e,h),l=null!=(n=x[a])?n:{},o=(0,s.yK)();return u.createElement(y,p({ref:r},i,{__css:p({},o.addon,l)}))}));d.Ts&&(b.displayName="InputAddon");var g=(0,a.G)((function(e,r){return u.createElement(b,p({ref:r,placement:"left"},e,{className:(0,d.cx)("chakra-input__left-addon",e.className)}))}));d.Ts&&(g.displayName="InputLeftAddon"),g.id="InputLeftAddon";var I=(0,a.G)((function(e,r){return u.createElement(b,p({ref:r,placement:"right"},e,{className:(0,d.cx)("chakra-input__right-addon",e.className)}))}));d.Ts&&(I.displayName="InputRightAddon"),I.id="InputRightAddon";var N=["children","className"],E=(0,a.G)((function(e,r){var n=(0,i.jC)("Input",e),t=(0,l.Lr)(e),a=t.children,f=t.className,v=m(t,N),h=(0,d.cx)("chakra-input__group",f),x={},y=(0,c.WR)(a),b=n.field;y.forEach((function(e){if(n){var r,t;if(b&&"InputLeftElement"===e.type.id)x.paddingStart=null!=(r=b.height)?r:b.h;if(b&&"InputRightElement"===e.type.id)x.paddingEnd=null!=(t=b.height)?t:b.h;"InputRightAddon"===e.type.id&&(x.borderEndRadius=0),"InputLeftAddon"===e.type.id&&(x.borderStartRadius=0)}}));var g=y.map((function(r){var n,t,a=(0,d.YU)({size:(null==(n=r.props)?void 0:n.size)||e.size,variant:(null==(t=r.props)?void 0:t.variant)||e.variant});return"Input"!==r.type.id?u.cloneElement(r,a):u.cloneElement(r,Object.assign(a,x,r.props))}));return u.createElement(o.m.div,p({className:h,ref:r,__css:{width:"100%",display:"flex",position:"relative"}},v),u.createElement(s.Fo,{value:n},g))}));d.Ts&&(E.displayName="InputGroup");var _=["placement"],R=["className"],k=["className"],w=(0,o.m)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),C=(0,a.G)((function(e,r){var n,t,a,i=e.placement,l=void 0===i?"left":i,o=m(e,_),d=(0,s.yK)(),c=d.field,f=p(((a={})["left"===l?"insetStart":"insetEnd"]="0",a.width=null!=(n=null==c?void 0:c.height)?n:null==c?void 0:c.h,a.height=null!=(t=null==c?void 0:c.height)?t:null==c?void 0:c.h,a.fontSize=null==c?void 0:c.fontSize,a),d.element);return u.createElement(w,p({ref:r,__css:f},o))}));C.id="InputElement",d.Ts&&(C.displayName="InputElement");var T=(0,a.G)((function(e,r){var n=e.className,t=m(e,R),a=(0,d.cx)("chakra-input__left-element",n);return u.createElement(C,p({ref:r,placement:"left",className:a},t))}));T.id="InputLeftElement",d.Ts&&(T.displayName="InputLeftElement");var F=(0,a.G)((function(e,r){var n=e.className,t=m(e,k),a=(0,d.cx)("chakra-input__right-element",n);return u.createElement(C,p({ref:r,placement:"right",className:a},t))}));F.id="InputRightElement",d.Ts&&(F.displayName="InputRightElement")},65053:function(e,r,n){n.r(r);var t=n(85893),a=n(68527),i=n(79762),l=n(4612),o=n(59876),s=n(73627),d=n(5526),u=n(11163);r.default=function(e){e.carrier,e.myImage;var r=e.handleChange;(0,u.useRouter)();return(0,t.jsxs)(a.xu,{bg:"linear-gradient(to right, #101114a0,#101114a0),url(".concat(s.Z.publicimages.carrierBack,")"),backgroundRepeat:"no-repeat",fontFamily:"Raleway",h:"80vh",justifyContent:"center",alignItems:"center",backgroundPosition:"center",backgroundColor:"brand.black",backgroundSize:["600%","600%","100%","300%","150%"],display:"flex",flexDirection:"column",overflow:"hidden",as:"main",children:[(0,t.jsxs)(a.xv,{as:"h1",className:"typewrtier",fontSize:["6xl","6xl","9xl","9xl","9xl"],color:"yellow.400",textTransform:"uppercase",fontFamily:"Raleway",fontWeight:"ultrabold",overflow:"hidden",width:"100%",textAlign:"center",children:[d.tQ.BLOG_HEADING," "]})," ",(0,t.jsx)(a.xv,{className:"typewrtier2",fontSize:["sm","sm","lg","lg","lg"],color:"brand.white",textAlign:"center",width:["100%","100%","70%","70%","70%"],fontFamily:"Raleway",fontWeight:"medium",p:[4],children:d.tQ.HEADING_CONTENT}),(0,t.jsx)(a.xu,{display:"flex",w:["60%","60%","50%","25%","25%"],mt:"6",children:(0,t.jsxs)(i.NI,{position:"relative",children:[(0,t.jsx)(l.II,{color:"brand.white",mb:"4",borderRadius:"20px",bg:"secondary.300",boxShadow:"0 0 4px #fff",placeholder:"Search",onChange:r,style:{border:"2px solid black !important",_focus:{borderColor:"2px solid #faae12 !important"}},_hover:{borderColor:"2px solid #fff"},_focus:{border:"2px solid #faae12 !important"}}),(0,t.jsx)(o.W1,{zIndex:"999",w:4,h:4,color:"white",cursor:"pointer",style:{position:"absolute",top:"12px",right:"15px"}})]})})]})}},58472:function(e,r,n){n.d(r,{Fo:function(){return u},f6:function(){return s},yK:function(){return c}});var t=n(67294);var a=n(89164),i=n(91683),l=n(70917),o=n(85893);function s(e){const{cssVarsRoot:r,theme:n,children:l}=e,s=(0,t.useMemo)((()=>(0,a.c0)(n)),[n]);return(0,o.jsxs)(i.a,{theme:s,children:[(0,o.jsx)(d,{root:r}),l]})}function d({root:e=":host, :root"}){const r=[e,"[data-theme]"].join(",");return(0,o.jsx)(l.xB,{styles:e=>({[r]:e.__cssVars})})}var[u,c]=function(e={}){const{strict:r=!0,errorMessage:n="useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",name:a}=e,i=(0,t.createContext)(void 0);return i.displayName=a,[i.Provider,function e(){var a;const l=(0,t.useContext)(i);if(!l&&r){const r=new Error(n);throw r.name="ContextError",null==(a=Error.captureStackTrace)||a.call(Error,r,e),r}return l},i]}({name:"StylesContext",errorMessage:"useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "})}}]);