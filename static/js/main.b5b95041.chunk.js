(this.webpackJsonpcontact=this.webpackJsonpcontact||[]).push([[0],{15:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var c=a(9),n=a(17),s=a.n(n),r=a(11),u=(a(15),a(18).a.initializeApp({apiKey:"AIzaSyCNKBLGUxLZpxe1xuQBkZOxJiAJxrotZrA",authDomain:"contact-us-6c4f3.firebaseapp.com",projectId:"contact-us-6c4f3",storageBucket:"contact-us-6c4f3.appspot.com",messagingSenderId:"636702561250",appId:"1:636702561250:web:a0a4e08ae4a51ebc6fdfbb",measurementId:"G-82Q5EDNQYX"}).firestore()),o=a(8),i=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(""),i=Object(r.a)(s,2),b=i[0],l=i[1],j=Object(c.useState)(""),p=Object(r.a)(j,2),m=p[0],d=p[1],h=Object(c.useState)(!1),O=Object(r.a)(h,2),f=O[0],x=O[1];return Object(o.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),x(!0),u.collection("contacts").add({name:a,email:b,message:m}).then((function(){x(!1),alert("Your message has been submitted\ud83d\udc4d")})).catch((function(e){alert(e.message),x(!1)})),n(""),l(""),d("")},children:[Object(o.jsx)("h1",{children:"Contact Us \ud83e\udd33"}),Object(o.jsx)("label",{children:"Name"}),Object(o.jsx)("input",{placeholder:"Name",value:a,onChange:function(e){return n(e.target.value)}}),Object(o.jsx)("label",{children:"Email"}),Object(o.jsx)("input",{placeholder:"Email",value:b,onChange:function(e){return l(e.target.value)}}),Object(o.jsx)("label",{children:"Message"}),Object(o.jsx)("textarea",{placeholder:"Message",value:m,onChange:function(e){return d(e.target.value)}}),Object(o.jsx)("button",{type:"submit",style:{background:f?"#ccc":" rgb(2, 2, 110)"},children:"Submit"})]})};var b=function(){return Object(o.jsx)("div",{className:"app",children:Object(o.jsx)(i,{})})};s.a.render(Object(o.jsx)(b,{}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.b5b95041.chunk.js.map