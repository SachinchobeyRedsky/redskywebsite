"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7635],{82583:function(e,n,r){r.d(n,{I:function(){return d},db:function(){return s}});var t=r(83977),o=r(39828),a=r(91259),l=r(77004),i=(0,t.ZF)({apiKey:"AIzaSyBJA3OU9j2hD3eCcuBK1ufK9KIs7xkijqM",authDomain:"redsky-web.firebaseapp.com",projectId:"redsky-web",storageBucket:"redsky-web.appspot.com",messagingSenderId:"503303012281",appId:"1:503303012281:web:fbadea13c15e03b9c48068",measurementId:"G-75QR2Q2EBR"}),s=(0,o.ad)(i),d=(0,a.v0)(i);(0,l.$C)(i)},28314:function(e,n,r){r.r(n);var t=r(47568),o=r(14924),a=r(26042),l=r(69396),i=r(29815),s=r(97582),d=r(85893),u=r(67294),c=r(43238),m=r(68527),p=r(4612),f=r(11391),h=r(49609),x=r(10894),g=r(15193),I=r(79762),b=r(39828),v=r(86650),j=r(5434),y=r(82583),w=(0,u.forwardRef)((function(e,n){var r,w,Z,k,C=(0,c.pm)(),S=(0,u.useRef)(null),B=(0,u.useState)(!1),_=B[0],N=B[1],z=(0,u.useState)(!1),A=z[0],G=z[1],E=(0,u.useState)({email:!1,mobile:!1}),P=E[0],J=E[1],O=(0,u.useState)({fullname:"",date:"",gender:"",marStatus:"",email:"",mobile:"",permanent:"",currentAddress:"",images:{}}),U=O[0],M=O[1],F=(0,u.useState)({fullname:!0,gender:!0,email:!0,mobile:!0}),R=(F[0],F[1],(0,u.useState)({skypeId:"",linkedIn:"",instaID:"",facebookID:""})),q=R[0],D=R[1],W=(0,u.useState)({grad:"",gradUni:"",postGrad:"",uniPostGrad:"",other:""}),$=W[0],K=W[1],H=(0,u.useState)(!1),Q=H[0],T=H[1],Y=function(e){var n=e.target,r=n.name,t=n.value;K((0,l.Z)((0,a.Z)({},$),(0,o.Z)({},r,t)))},L=function(e){var n=e.target,r=n.name,t=n.value;M((0,l.Z)((0,a.Z)({},U),(0,o.Z)({},r,t)))},V={personalInfo:U,eduInfo:$,socialInfo:q},X=function(){var e=(0,t.Z)((function(e){var n,r,o;return(0,s.__generator)(this,(function(e){switch(e.label){case 0:return n=function(){var e=(0,t.Z)((function(e){return(0,s.__generator)(this,(function(n){return[2,new Promise((function(n,r){var t=(0,v.cF)(),o="".concat(e.name),a=(0,v.iH)(t,"images/"+o),l=(0,v.B0)(a,e);l.on("state_changed",(function(e){T(!0);e.state}),(function(e){r(e)}),(function(){(0,v.Jt)(l.snapshot.ref).then((function(e){n(e)}))}))}))]}))}));return function(n){return e.apply(this,arguments)}}(),""==V.personalInfo.fullname||""==V.personalInfo.gender||""==V.personalInfo.email||""==V.personalInfo.mobile||V.personalInfo.images&&0==Object.keys(V.personalInfo.images).length?(N(!0),""==V.personalInfo.fullname||""==V.personalInfo.gender||""==V.personalInfo.email||""==V.personalInfo.mobile||V.personalInfo.images&&0==Object.keys(V.personalInfo.images).length?(N(!0),[2]):[3,6]):[3,1];case 1:if(""!==V.personalInfo.fullname){if(!(r=/^[a-zA-Z '.-]*$/).test(V.personalInfo.fullname))return G(!0),[2];r.test(V.personalInfo.fullname)&&G(!1)}if(""!==V.personalInfo.email){if(!(r=/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i).test(V.personalInfo.email))return J((0,l.Z)((0,a.Z)({},P),{email:!0})),[2];r.test(V.personalInfo.email)&&J((0,l.Z)((0,a.Z)({},P),{email:!1}))}if(""!==V.personalInfo.mobile){if(V.personalInfo.mobile.length<10)return J((0,l.Z)((0,a.Z)({},P),{phone:!0})),[2];V.personalInfo.mobile.length>10&&J((0,l.Z)((0,a.Z)({},P),{phone:!1}))}e.label=2;case 2:return e.trys.push([2,5,,6]),U.images&&Object.keys(U.images).length>0?[4,Promise.all((0,i.Z)(U.images).map((function(e){return n(e)}))).then(function(){var e=(0,t.Z)((function(e){return(0,s.__generator)(this,(function(n){switch(n.label){case 0:return T(!1),delete V.personalInfo.images,[4,(0,b.ET)((0,b.hJ)(y.db,"carrierdata"),(0,l.Z)((0,a.Z)({},V),{image:e[0]}))];case 1:return n.sent(),C({position:"top",render:function(){return(0,d.jsxs)(m.xu,{color:"white",fontWeight:"700",p:4,bgGradient:"linear-gradient(30deg, #f8cb2e, #ff914d , );",borderRadius:"16px",boxShadow:"inset 0 0 8px #faae12",children:[(0,d.jsx)(m.xu,{children:"Your details has been submitted sucessfully"}),"We will get back to you within 24-48 hrs"]})}}),M({fullname:"",date:"",gender:"",marStatus:"",email:"",mobile:"",permanent:"",currentAddress:"",images:{}}),D({skypeId:"",linkedIn:"",instaID:"",facebookID:""}),K({grad:"",gradUni:"",postGrad:"",uniPostGrad:"",other:""}),N(!1),G(!1),J(!1),[2]}}))}));return function(n){return e.apply(this,arguments)}}()).catch((function(e){console.log(e)}))]:[3,4];case 3:e.sent(),e.label=4;case 4:return[3,6];case 5:return o=e.sent(),console.error("Error adding document: ",o),[3,6];case 6:return[2]}}))}));return function(n){return e.apply(this,arguments)}}();(0,u.useImperativeHandle)(n,(function(){return{cb:function(){X()}}}));d.Fragment,m.xv;return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(m.xu,{px:6,position:"relative",children:[(0,d.jsx)("form",{children:(0,d.jsxs)(I.NI,{mb:"24",children:[(0,d.jsx)(m.xv,{fontSize:["lg","lg","lg","lg","lg"],fontWeight:"semibold",color:"secondary.400",children:"Personal Information"}),(0,d.jsxs)(m.kC,{gap:6,pt:4,children:[(0,d.jsx)(I.NI,{isInvalid:""==V.personalInfo.fullname&&_||""!==V.personalInfo.fullname&&A,children:(0,d.jsxs)(m.xu,{w:"100%",children:[(0,d.jsx)(p.II,{type:"text",variant:"flushed",color:"brand.white",placeholder:"Full name",mb:"2",value:U.fullname,name:"fullname",onChange:L,sx:{borderBottom:_?"0.5px solid red !important":"0.5px solid white !important"}}),""==U.fullname&&(0,d.jsx)(p.Z8,{pointerEvents:"none",color:"yellow.400",ml:"16",fontSize:"30px",children:"*"}),""==V.personalInfo.fullname&&_&&(0,d.jsx)(I.J1,{mt:"0",children:"Name is required"})||""!==V.personalInfo.fullname&&A&&(0,d.jsx)(I.J1,{mt:"0",children:"Alphabet characters only"})]})}),(0,d.jsx)(I.NI,{children:(0,d.jsx)(m.xu,{w:"100%",children:(0,d.jsx)(p.II,{type:"date",variant:"flushed",color:"brand.white",fontSize:"sm",mb:"2",name:"date",value:U.date,onChange:L,sx:{borderBottom:"0.5px solid white !important"}})})})]}),(0,d.jsxs)(m.kC,{gap:6,children:[(0,d.jsx)(I.NI,{isInvalid:""==V.personalInfo.gender&&_,children:(0,d.jsxs)(m.xu,{w:"100%",children:[(0,d.jsxs)(f.Ph,{placeholder:"Gender",pt:6,size:"sm",variant:"flushed",color:"gray.100",sx:{borderBottom:_?"0.5px solid red !important":"0.5px solid white !important"},_focus:{borderBottom:"1px solid #faae12"},value:U.gender,name:"gender",onChange:L,children:[(0,d.jsx)("option",{value:"male",children:"Male"}),(0,d.jsx)("option",{value:"female",children:"Female"}),(0,d.jsx)("option",{value:"other",children:"Other"})]}),!U.gender&&(0,d.jsx)(p.Z8,{pointerEvents:"none",color:"yellow.400",ml:"12",mt:"4",fontSize:"30px",children:"*"}),""==V.personalInfo.gender&&_&&(0,d.jsx)(I.J1,{mt:"2",children:"Gender is required"})]})}),(0,d.jsx)(I.NI,{children:(0,d.jsx)(m.xu,{w:"100%",children:(0,d.jsxs)(f.Ph,{placeholder:"Marital status",pt:6,size:"sm",variant:"flushed",color:"gray.100",sx:{borderBottom:"0.5px solid white !important"},_focus:{borderBottom:"1px solid #faae12"},name:"marStatus",value:U.marStatus,onChange:L,children:[(0,d.jsx)("option",{value:"Married",children:"Married"}),(0,d.jsx)("option",{value:"Unmarried",children:"Unmarried"})]})})})]}),(0,d.jsxs)(m.kC,{gap:6,pt:"6",children:[(0,d.jsx)(I.NI,{isInvalid:""==V.personalInfo.email&&_||""!==V.personalInfo.email&&P.email,children:(0,d.jsxs)(m.xu,{width:"100%",children:[(0,d.jsx)(p.II,{type:"email",variant:"flushed",color:"brand.white",placeholder:"Email",name:"email",value:U.email,onChange:L,sx:{borderBottom:_?"0.5px solid red !important":"0.5px solid white !important"}}),""==U.email&&(0,d.jsx)(p.Z8,{pointerEvents:"none",color:"yellow.400",ml:"10",fontSize:"30px",children:"*"}),""==V.personalInfo.email&&_&&(0,d.jsx)(I.J1,{mt:"-8",children:"Email is required"})||""!==V.personalInfo.email&&P.email&&(0,d.jsx)(I.J1,{mt:"-8",children:"Email is not valid"})]})}),(0,d.jsx)(I.NI,{isInvalid:""==V.personalInfo.mobile&&_||""!==V.personalInfo.mobile&&P.phone,children:(0,d.jsxs)(m.xu,{width:"100%",children:[(0,d.jsx)(p.II,{type:"phone",variant:"flushed",color:"brand.white",placeholder:"Phone",name:"mobile",value:U.mobile,onChange:L,sx:{borderBottom:_?"0.5px solid red !important":"0.5px solid white !important"},maxLength:10}),""==U.mobile&&(0,d.jsx)(p.Z8,{pointerEvents:"none",color:"yellow.400",ml:"10",fontSize:"30px",children:"*"}),""==V.personalInfo.mobile&&_&&(0,d.jsxs)(I.J1,{mt:"-8",pl:["0","0","0","0","0"],children:[" ","Mobile Number is required"]})||""!==V.personalInfo.mobile&&P.phone&&(0,d.jsx)(I.J1,{mt:"-8",children:"Mobile Number is not valid"})]})})]}),(0,d.jsx)(I.NI,{children:(0,d.jsx)(m.xu,{w:"100%",children:(0,d.jsx)(p.II,{type:"text",variant:"flushed",color:"brand.white",placeholder:"Permanent address",name:"permanent",value:U.permanent,onChange:L,sx:{borderBottom:"0.5px solid white !important"}})})}),(0,d.jsx)(I.NI,{children:(0,d.jsx)(m.xu,{w:"100%",children:(0,d.jsx)(p.II,{type:"text",variant:"flushed",color:"brand.white",placeholder:"Current address",name:"currentAddress",value:U.currentAddress,onChange:L,sx:{borderBottom:"0.5px solid white !important"}})})}),(0,d.jsx)(m.xv,{fontSize:["lg","lg","lg","lg","lg"],fontWeight:"semibold",color:"secondary.400",mt:10,children:"Educational qualification"}),(0,d.jsxs)(m.kC,{pt:4,gap:6,children:[(0,d.jsx)(p.II,{type:"text",variant:"flushed",color:"brand.white",placeholder:"Graduation",name:"grad",value:$.grad,onChange:Y,sx:{borderBottom:"0.5px solid white !important"}}),(0,d.jsx)(p.II,{type:"text",variant:"flushed",color:"brand.white",placeholder:"College/Institute name",name:"gradUni",value:$.gradUni,onChange:Y,sx:{borderBottom:"0.5px solid white !important"}})]}),(0,d.jsxs)(m.kC,{gap:6,children:[(0,d.jsx)(p.II,{type:"text",variant:"flushed",color:"brand.white",placeholder:"Post-Graduation",value:$.postGrad,name:"postGrad",onChange:Y,sx:{borderBottom:"0.5px solid white !important"}}),(0,d.jsx)(p.II,{type:"text",variant:"flushed",color:"brand.white",placeholder:"College/Institute name",onChange:Y,name:"uniPostGrad",value:$.uniPostGrad,sx:{borderBottom:"0.5px solid white !important"}})]}),(0,d.jsx)(p.II,{type:"text",variant:"flushed",color:"brand.white",placeholder:"Other ( specify )",name:"other",value:$.other,onChange:Y,sx:{borderBottom:"0.5px solid white !important"}})]})}),(0,d.jsxs)(m.xu,{w:"100%",bottom:"8%",ml:"6",left:"20%",children:[(0,d.jsx)(m.xv,{fontSize:["lg","lg","lg","lg","lg"],fontWeight:"semibold",color:"secondary.400",mt:6,children:"Upload Your Resume"}),(0,d.jsx)(I.NI,{isInvalid:V.personalInfo.images&&0==Object.keys(V.personalInfo.images).length&&_,children:(0,d.jsxs)(m.xu,{w:"30%",cursor:"pointer",children:[Q?(0,d.jsx)(h.$,{thickness:"4px",speed:"0.80s",color:"orange",size:"xl",mt:"4",ml:"24"}):(0,d.jsxs)(m.xu,{my:"2",children:[(0,d.jsxs)(m.xu,{display:"flex",alignItems:"center",onClick:function(){S.current.click()},children:[" ",(0,d.jsx)(x.JO,{as:j.x2k,w:"8",h:"8"})," ",(null===(w=null===S||void 0===S||null===(r=S.current)||void 0===r?void 0:r.files[0])||void 0===w?void 0:w.name)?(0,d.jsxs)(m.xv,{ml:"1",children:[null===(k=null===S||void 0===S||null===(Z=S.current)||void 0===Z?void 0:Z.files[0])||void 0===k?void 0:k.name," "]}):(0,d.jsx)(m.xv,{ml:"1",children:"Attach File"})]}),(0,d.jsx)(p.II,{mt:6,type:"file",variant:"flushed",ref:S,id:"images",onChange:function(e){var n=null;"true"===e.target.value&&(n=!0),"false"===e.target.value&&(n=!1),e.target.files&&M((function(n){return(0,l.Z)((0,a.Z)({},n),{images:e.target.files})})),e.target.files||M((function(r){return(0,l.Z)((0,a.Z)({},r),(0,o.Z)({},e.target.id,null!==n&&void 0!==n?n:e.target.value))}))},border:"none",outline:"none",display:"none",w:["80%","80%","80%","30%","30%"],_focus:{borderBottom:"1px solid transparent",outline:"none"},accept:".jpg,.png,.jpeg,.docx,.pptx,.pdf"})]}),V.personalInfo.images&&0==Object.keys(V.personalInfo.images).length&&_&&(0,d.jsx)(I.J1,{mt:"",children:"Please Upload your Resume"})]})}),(0,d.jsx)(m.kC,{justify:"right",children:(0,d.jsx)(g.zx,{title:"submit",variant:"trainingButton",mt:0,ml:"1",onClick:X,border:"solid 2px #faae01",_hover:{border:"solid 2px #faae01",transform:"scale(1.05)",opacity:1,boxShadow:"0 0 10px #ffae00",background:"rgb(11, 11, 13)"},_focus:{background:"rgb(11, 11, 13)"},_active:{background:"rgb(11, 11, 13)"},type:"submit",children:(0,d.jsx)(m.xv,{variant:"gradient",textTransform:"none",fontSize:["xl","xl","xl","xl"],children:"Submit"})})})]})]})})}));w.displayName="CarrierModalForm",n.default=w},20943:function(e,n,r){function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}r.d(n,{Z:function(){return t}})},13375:function(e,n,r){function t(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}r.d(n,{Z:function(){return t}})},91566:function(e,n,r){r.d(n,{Z:function(){return o}});var t=r(20943);function o(e,n){if(e){if("string"===typeof e)return(0,t.Z)(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?(0,t.Z)(e,n):void 0}}}}]);