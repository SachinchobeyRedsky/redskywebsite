"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3746],{82583:function(e,n,r){r.d(n,{I:function(){return d},db:function(){return s}});var o=r(83977),l=r(39828),a=r(91259),t=r(77004),i=(0,o.ZF)({apiKey:"AIzaSyBJA3OU9j2hD3eCcuBK1ufK9KIs7xkijqM",authDomain:"redsky-web.firebaseapp.com",projectId:"redsky-web",storageBucket:"redsky-web.appspot.com",messagingSenderId:"503303012281",appId:"1:503303012281:web:fbadea13c15e03b9c48068",measurementId:"G-75QR2Q2EBR"}),s=(0,l.ad)(i),d=(0,a.v0)(i);(0,t.$C)(i)},33746:function(e,n,r){var o=r(47568),l=r(14924),a=r(26042),t=r(69396),i=r(97582),s=r(85893),d=r(67294),u=r(43238),c=r(68527),f=r(4612),m=r(15193),p=r(79762),h=r(82583),x=r(39828),b=r(83831);n.Z=function(e){e.selectedTech;var n=(0,u.pm)(),r=(0,d.useState)(!1),v=r[0],g=r[1],I=(0,d.useState)(!1),j=I[0],w=I[1],k=(0,d.useState)({email:!1,mobile:!1}),y=k[0],S=k[1],Z=(0,d.useState)({how:"",interested:"",trainingDuration:"",training:""}),C=(Z[0],Z[1],(0,d.useState)({fullname:"",date:"",gender:"",marStatus:"",email:"",mobile:"",permanent:"",currentAddress:""})),M=C[0],_=C[1],z=(0,d.useState)({skypeId:"",linkedIn:"",instaID:"",facebookID:""}),P=(z[0],z[1],(0,d.useState)({grad:"",gradUni:"",postGrad:"",uniPostGrad:"",other:""})),B=(P[0],P[1],function(e){var n=e.target,r=n.name,o=n.value;_((0,t.Z)((0,a.Z)({},M),(0,l.Z)({},r,o)))}),E={personalInfo:M},D=function(){var e=(0,o.Z)((function(e){var r,o;return(0,i.__generator)(this,(function(l){switch(l.label){case 0:return e.preventDefault(),""!=E.personalInfo.fullname&&""!=E.personalInfo.mobile?[3,1]:(g(!0),""==E.personalInfo.fullname||""==E.personalInfo.mobile?(g(!0),[2]):[2]);case 1:if(""!==E.personalInfo.fullname){if(!(r=/^[a-zA-Z '.-]*$/).test(E.personalInfo.fullname))return w(!0),[2];r.test(E.personalInfo.fullname)&&w(!1)}if(""!==E.personalInfo.email){if(!(r=/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i).test(E.personalInfo.email))return S((0,t.Z)((0,a.Z)({},y),{email:!0})),[2];r.test(E.personalInfo.email)&&S((0,t.Z)((0,a.Z)({},y),{email:!1}))}if(""!==E.personalInfo.mobile){if(E.personalInfo.mobile.length<10)return S((0,t.Z)((0,a.Z)({},y),{phone:!0})),[2];E.personalInfo.mobile.length>10&&S((0,t.Z)((0,a.Z)({},y),{phone:!1}))}l.label=2;case 2:return l.trys.push([2,4,,5]),[4,(0,x.ET)((0,x.hJ)(h.db,"trainingdata"),E)];case 3:return l.sent(),n({position:"top",render:function(){return(0,s.jsxs)(c.xu,{color:"white",fontWeight:"700",p:4,bgGradient:"linear-gradient(30deg, #f8cb2e, #ff914d , );",borderRadius:"16px",boxShadow:"inset 0 0 8px #faae12",children:[(0,s.jsx)(c.xu,{children:"Your details has been submitted sucessfully"}),"We will get back to you within 24-48 hrs"]})}}),_({fullname:"",date:"",gender:"",marStatus:"",email:"",mobile:"",permanent:"",currentAddress:""}),[3,5];case 4:return o=l.sent(),console.error("Error adding document: ",o),[3,5];case 5:return[2]}}))}));return function(n){return e.apply(this,arguments)}}();return(0,s.jsxs)(c.xu,{backgroundSize:["400%",null,"400%"],backgroundColor:"brand.black",backgroundRepeat:"no-repeat",backgroundPosition:"top",fontFamily:"Raleway",position:"relative",overflow:"hidden",color:"white",children:[(0,s.jsx)(c.xu,{children:(0,s.jsxs)("form",{children:[(0,s.jsxs)(c.kC,{gap:6,children:[(0,s.jsx)(p.NI,{isInvalid:""==E.personalInfo.fullname&&v||""!==E.personalInfo.fullname&&j,children:(0,s.jsxs)(c.xu,{w:"100%",children:[(0,s.jsx)(f.II,{type:"text",variant:"flushed",color:"brand.white",placeholder:"Full name",title:"OPPP",mb:"2",value:M.fullname,name:"fullname",onChange:B,sx:{borderBottom:v?"0.5px solid red !important":"0.5px solid white !important"}}),""==M.fullname&&(0,s.jsx)(f.Z8,{pointerEvents:"none",color:"yellow.400",ml:"16",fontSize:"30px",children:"*"}),""==E.personalInfo.fullname&&v&&(0,s.jsx)(p.J1,{mt:"0",children:"Name is required"})||""!==E.personalInfo.fullname&&j&&(0,s.jsx)(p.J1,{mt:"0",children:"Alphabet characters only"})]})}),(0,s.jsx)(c.xu,{width:"100%",children:(0,s.jsx)(f.II,{type:"email",variant:"flushed",color:"brand.white",placeholder:"Email",name:"email",value:M.email,onChange:B,sx:{borderBottom:"0.5px solid white !important"}})})]}),(0,s.jsx)(p.NI,{isInvalid:""==E.personalInfo.mobile&&v||""!==E.personalInfo.mobile&&y.phone,children:(0,s.jsxs)(c.xu,{width:"48%",children:[(0,s.jsx)(f.II,{type:"number",variant:"flushed",color:"brand.white",placeholder:"Mobile number",name:"mobile",value:M.mobile,onChange:B,sx:{borderBottom:v?"0.5px solid red !important":"0.5px solid white !important"}}),""==M.mobile&&(0,s.jsx)(f.Z8,{pointerEvents:"none",color:"yellow.400",ml:"24",fontSize:"30px",children:"*"}),""==E.personalInfo.mobile&&v&&(0,s.jsxs)(p.J1,{mt:"-8",pl:["0","0","0","0","0"],children:[" ","Mobile Number is required"]})||""!==E.personalInfo.mobile&&y.phone&&(0,s.jsx)(p.J1,{mt:"-8",children:"Mobile Number is not valid"})]})})]})}),(0,s.jsx)(c.kC,{justify:"center",m:"2",children:(0,s.jsx)(m.zx,{title:"submit",variant:"trainingButton",ml:"1",onClick:D,border:"solid 2px #faae01",_hover:{border:"solid 3px #faae01",transform:"scale(1.05)",opacity:1,boxShadow:"0 0 6px #ffae00",background:"rgb(11, 11, 13)"},_focus:{background:"rgb(11, 11, 13)"},_active:{background:"rgb(11, 11, 13)"},type:"submit",children:(0,s.jsx)(c.xv,{variant:"gradient",textTransform:"none",fontSize:["xl","xl","xl","xl"],children:"Submit"})})}),(0,s.jsxs)(c.xu,{position:"relative",px:"10",py:"6",children:[(0,s.jsx)(c.iz,{}),(0,s.jsx)(c.um,{bg:"#101114",px:"4",children:(0,s.jsx)(c.xv,{fontSize:"xxl",fontWeight:"bold",children:"OR"})})]}),(0,s.jsx)(c.xu,{mb:"4",children:(0,s.jsx)(b.Z,{align:"center",showPhone:"showPhone"})})]})}},83831:function(e,n,r){var o=r(85893),l=r(68527),a=r(10894),t=r(41664),i=r.n(t),s=r(5526);n.Z=function(e){var n=e.align,r=e.showPhone?null===s.Mv||void 0===s.Mv?void 0:s.Mv.socialMediaLinksPhone:null===s.Mv||void 0===s.Mv?void 0:s.Mv.socialMediaLinks;return(0,o.jsx)(l.kC,{pt:3,justify:n?"center":"left",children:null===r||void 0===r?void 0:r.map((function(e,n){return(0,o.jsx)(i(),{href:e.href,children:(0,o.jsx)("a",{target:"_blank","aria-label":null===e||void 0===e?void 0:e.altText,rel:"noreferrer",text:null===e||void 0===e?void 0:e.altText,children:(0,o.jsx)(l.xu,{bg:"white",borderRadius:"100px",boxShadow:"0 0 10px #101114",mr:["2","5","10","5","30"],h:["12","12","14","14","10"],w:["12","12","14","14","10"],alignContent:"center",p:["2","2","3","3","3"],_hover:{backgroundColor:"yellow.400"},_focus:{border:"none",backgroundColor:"none"},display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",children:(0,o.jsx)(a.JO,{as:e.icon,w:"5",h:"5",color:"black"})})})},n)}))})}}}]);