(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7793],{37241:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return w}});var o=t(47568),i=t(70655),r=t(85893),a=t(67294),l=t(68527),c=t(25675),s=t.n(c),d=t(89583),u=t(30653);var v=function(e){var n,t,o,i=null===(t=null===(n=e.info)||void 0===n?void 0:n.match(/<img[^>]*src=["']([^"']+)/))||void 0===t?void 0:t[1],c=null===(o=e.info)||void 0===o?void 0:o.replace(/<img[^>]*>/g,""),v=(0,a.useState)(!1),f=v[0],h=v[1],p=(0,u.ZP)(c);return(0,r.jsxs)(l.xu,{height:["340px","340px","480px","480px","480px"],overflow:"hidden",borderRadius:".675rem",bg:"gray.800",boxShadow:"0 0 20px black",transition:"all 0.1s",onMouseEnter:function(){return h(!0)},onMouseLeave:function(){return h(!1)},children:[(0,r.jsx)(l.xu,{height:["160px","160px","200px","250px","200px"],overflow:"hidden",m:"4",borderRadius:".675rem",children:i?(0,r.jsx)(s(),{width:"400px",height:"380px",objectFit:"cover",src:i,alt:"Blog Image",sx:{transform:f?"scale(1.1)":"scale(1)",transition:"transform 0.3s ease"},decoding:"async"}):(0,r.jsx)(s(),{width:"400px",height:"380px",objectFit:"cover",src:"https://bit.ly/dan-abramov",alt:"Dan Abramov",decoding:"async"})}),(0,r.jsxs)(l.xu,{p:"4",justifyContent:"center",children:[(0,r.jsx)(l.X6,{fontWeight:"700",fontSize:"22px",width:"100%",noOfLines:[1,2],color:"#faae12",children:e.blogTitle}),(0,r.jsx)(l.xu,{color:"#fff",width:"100%",h:"auto",mt:"4",noOfLines:[1,2,2,2,3],children:(0,r.jsx)(l.xv,{children:p[0].props.children})}),(0,r.jsxs)(l.kC,{justifyContent:"space-between",mt:"2",children:[(0,r.jsxs)(l.kC,{alignItems:"center",children:[(0,r.jsx)(l.xv,{mt:"3",children:(0,r.jsx)(d.Pll,{color:"#fff"})}),(0,r.jsx)(l.xv,{fontWeight:"400",ml:"2",mt:"4",color:"#fff",children:(null===e||void 0===e?void 0:e.createdAt)&&new Date(1e3*(null===e||void 0===e?void 0:e.createdAt.seconds)).toLocaleDateString()})]}),(0,r.jsxs)(l.kC,{alignItems:"center",children:[(0,r.jsxs)(l.xv,{fontWeight:"600",textAlign:"center",bgGradient:"linear(to-r, brand.yellow, brand.orange)",bgClip:"text",pt:3,children:[" ","Read More"]}),(0,r.jsx)(l.xv,{ml:"1",mt:3,children:(0,r.jsx)(d.e7O,{color:"#faae12"})})]})]})]})]})},f=t(43238),h=t(97375),p=t(39828),g=t(82583),x=t(11163),b=function(e,n){var t=(0,f.pm)(),c=e.index,s=e.data,u=e.push,b=e.currentUser,w=(0,h.qY)(),m=(w.isOpen,w.onOpen,w.onClose,(0,a.useState)(!1)),j=(m[0],m[1]),C=(0,a.useState)(),y=(C[0],C[1]),_=(0,a.useState)(null),I=(_[0],_[1]);d.Am9,"https://www.facebook.com/sharer/sharer.php?u=".concat(encodeURIComponent(window.location.origin+"/blog/".concat(null===s||void 0===s?void 0:s.category,"/").concat(null===s||void 0===s?void 0:s.title))),d.fWC,"https://twitter.com/intent/tweet?url=".concat(encodeURIComponent(window.location.origin+"/blog/".concat(null===s||void 0===s?void 0:s.category,"/").concat(null===s||void 0===s?void 0:s.title))),d.ltd,"https://www.linkedin.com/sharing/share-offsite/?url=".concat(encodeURIComponent(window.location.origin+"/blog/".concat(null===s||void 0===s?void 0:s.category,"/").concat(null===s||void 0===s?void 0:s.title))),d.xpo,"https://api.whatsapp.com/send?text=".concat(encodeURIComponent(window.location.origin+"/blog/".concat(null===s||void 0===s?void 0:s.category,"/").concat(null===s||void 0===s?void 0:s.title))),d.gjK,(0,x.useRouter)();(0,a.useEffect)((function(){var e=(0,p.cf)((0,p.JU)(g.db,"blogData",s.id),(function(e){y(e.data())}));return function(){e()}}),[]),(0,a.useEffect)((function(){var e=function(){var e=(0,o.Z)((function(){var e,n,t;return(0,i.__generator)(this,(function(o){switch(o.label){case 0:return b?(e=(0,p.JU)(g.db,"savedBlogs",b.uid),[4,(0,p.QT)(e)]):[3,2];case 1:n=o.sent(),t=n.exists()?n.data().blogIds:[],j(t.includes(s.id)),o.label=2;case 2:return[2]}}))}));return function(){return e.apply(this,arguments)}}();e()}),[b,null===s||void 0===s?void 0:s.id]);!function(){var e=(0,o.Z)((function(){var e,n,o,r;return(0,i.__generator)(this,(function(i){switch(i.label){case 0:return b?(e=(0,p.JU)(g.db,"savedBlogs",b.uid),[4,(0,p.QT)(e)]):[3,6];case 1:return n=i.sent(),o=n.exists()?n.data().blogIds:[],-1===(r=o.indexOf(s.id))?[3,3]:(o.splice(r,1),[4,(0,p.r7)(e,{blogIds:o})]);case 2:return i.sent(),j(!1),[3,5];case 3:return o.push(s.id),[4,(0,p.pl)(e,{userId:b.uid,blogIds:o})];case 4:i.sent(),j(!0),i.label=5;case 5:return[3,7];case 6:t({position:"top",title:"Please log in to save this blog",status:"warning",duration:3e3,isClosable:!0}),i.label=7;case 7:return[2]}}))}))}();var U=(0,p.JU)(g.db,"blogData",null===s||void 0===s?void 0:s.id),k=(0,a.useState)(!1),E=k[0],R=k[1];!function(){var e=(0,o.Z)((function(){var e;return(0,i.__generator)(this,(function(n){switch(n.label){case 0:return e=!E,[4,(0,p.r7)(U,{hidden:e})];case 1:return n.sent(),R(e),[2]}}))}))}();return(0,a.useEffect)((function(){var e=function(){var e=(0,o.Z)((function(){var e,n;return(0,i.__generator)(this,(function(t){switch(t.label){case 0:return[4,(0,p.QT)(U)];case 1:return(e=t.sent()).exists()&&(n=e.data(),R(n.hidden)),[2]}}))}));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,a.useEffect)((function(){var e=function(){var e=(0,o.Z)((function(){return(0,i.__generator)(this,(function(e){switch(e.label){case 0:return[4,(0,p.PL)((0,p.hJ)(g.db,"authUsers"))];case 1:return e.sent().forEach((function(e){var n=e.data();n.uid===(null===b||void 0===b?void 0:b.uid)&&I(n)})),[2]}}))}));return function(){return e.apply(this,arguments)}}();e()}),[b,E]),(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(l.xu,{bg:"none",borderRadius:10,children:(0,r.jsx)(l.xu,{cursor:"pointer",ref:n,onClick:function(){u&&u({pathname:"/blog/".concat((null===s||void 0===s?void 0:s.title.replace(/\s/g,"-"))||"")},"/blog/".concat((null===s||void 0===s?void 0:s.title.replace(/\s/g,"-"))||""))},children:(0,r.jsx)(v,{blogTitle:null===s||void 0===s?void 0:s.title,info:null===s||void 0===s?void 0:s.newObj,id:null===s||void 0===s?void 0:s.id,createdAt:null===s||void 0===s?void 0:s.createdAt,userName:null===s||void 0===s?void 0:s.userName,photoUrl:null===s||void 0===s?void 0:s.photoUrl,userEmail:null===s||void 0===s?void 0:s.userEmail})},c)})})},w=(0,a.forwardRef)(b)},50247:function(){}}]);