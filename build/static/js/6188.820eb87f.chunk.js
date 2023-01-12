"use strict";(self.webpackChunksonaxmultitrade=self.webpackChunksonaxmultitrade||[]).push([[6188],{96066:function(e,r,s){s.d(r,{Z:function(){return i}});var i={};s.r(i),s.d(i,{Fr:function(){return u},TX:function(){return c},r4:function(){return l},zB:function(){return d},ii:function(){return m}});var a=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,n=/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,o=/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,t=s(81724),d=t.Ry().shape({email:t.Z_().matches(n,"Email is not correct!").required("Email is require field!"),password:t.Z_().matches(a,"Password is not correct!").max(15,"Max 15 symbol!").required("Password is require field!")}),l=(t.Ry().shape({password:t.Z_().matches(a,"Password is not correct!").max(15,"Max 15 symbol!").required("Password is require field!"),confirmPassword:t.Z_().oneOf([t.iH("password"),null],"Passwords must match!").required("Passwords must match!")}),t.Ry().shape({email:t.Z_().matches(n,"Email is not correct!").required("Email is require field!"),password:t.Z_().matches(a,"Password is not correct!").max(15,"Max 15 symbol!").required("Password is require field!"),confirmPassword:t.Z_().oneOf([t.iH("password"),null],"Passwords must match!").required("Passwords must match!")}),t.Ry().shape({firstName:t.Z_().required("First name is require field!"),lastName:t.Z_().required("Last name is require field!"),gender:t.Z_().required("Last name is require field!"),dob:t.hT().required("Date of birth required"),nomineeFirstName:t.Z_().required("First name is require field!"),nomineeLastName:t.Z_().required("First name is require field!"),nomineeDob:t.hT().required("Date of birth required"),nomineeRelation:t.Z_().required("Relation is require field!"),mobile:t.Z_().matches(o,"Phone number is not valid").required("Mobile is require field!").min(10,"Phone number too short").max(10,"Phone number too long"),email:t.Z_().matches(n,"Email is not correct!").required("Email is require field!"),password:t.Z_().max(15,"Max 15 symbol!").required("Password is require field!"),cpassword:t.Z_().oneOf([t.iH("password"),null],"Passwords must match!").required("Passwords must match!")})),u=t.Ry().shape({code:t.Z_().max(30,"Max value 20.").required("Coupon Name is require field!"),percent:t.Rx().typeError("You must specify a number").min(1,"Min value 1.").max(100,"Max value 100.").required("This field is required!"),endDate:t.hT().min(new Date,"end date can't be before current date")}),c=t.Ry().shape({email:t.Z_().matches(n,"Email is not correct!").required("Email is require field!"),schoolName:t.Z_().required("Name is require field!")}),m=t.Ry().shape({uId:t.Z_().required("UID is require field!"),password:t.Z_().max(15,"Max 15 symbol!").required("Password is require field!")})},16188:function(e,r,s){s.r(r),s.d(r,{default:function(){return b}});var i=s(74165),a=s(15861),n=s(72791),o=s(78983),t=s(57689),d=s(51692),l=s(92506),u=s(96066),c=s(82035),m=s(24846),h=s(62412),p=s(63232),x=s(29352),f=s(80184);function b(){var e=(0,t.s0)(),r=(0,d.getToken)();(0,n.useEffect)((function(){r&&e("/dashboard")}),[]);var s=(0,l.TA)({initialValues:{uId:"",password:""},validationSchema:u.Z.ii,onSubmit:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(r){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_(r);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}),b=s.values,q=s.handleChange,w=s.submitForm,g=s.errors,v=s.setErrors,y=s.isValid,Z=s.dirty,j=c.iJ.useUserSignIn(v),N=j.isLoading,_=j.mutate;return(0,f.jsxs)("section",{className:"background-radial-gradient overflow-hidden",children:[(0,f.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0",children:(0,f.jsxs)("a",{href:"/",className:"navbar-brand p-0",children:[(0,f.jsx)(o.DW,{src:x,height:50,alt:"Logo"}),(0,f.jsx)("strong",{className:"m-0 text-light",children:"Sonax Multitrade"})]})}),(0,f.jsx)("div",{className:"container px-4 py-5 px-md-5 text-center text-lg-start my-5",children:(0,f.jsxs)("div",{className:"row gx-lg-5 align-items-center mb-5",children:[(0,f.jsxs)("div",{className:"col-lg-6 mb-5 mb-lg-0",style:{zIndex:10},children:[(0,f.jsxs)("h1",{className:"my-5 display-5 fw-bold ls-tight",style:{color:"hsl(218, 81%, 95%)"},children:["The best offer ",(0,f.jsx)("br",{}),(0,f.jsx)("span",{style:{color:"hsl(218, 81%, 75%)"},children:"for your business"})]}),(0,f.jsx)("p",{className:"mb-4 opacity-70",style:{color:"hsl(218, 81%, 85%)"},children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, expedita iusto veniam atque, magni tempora mollitia dolorum consequatur nulla, neque debitis eos reprehenderit quasi ab ipsum nisi dolorem modi. Quos?"})]}),(0,f.jsxs)("div",{className:"col-lg-6 mb-5 mb-lg-0 position-relative",children:[(0,f.jsx)("div",{id:"radius-shape-1",className:"position-absolute rounded-circle shadow-5-strong"}),(0,f.jsx)("div",{id:"radius-shape-2",className:"position-absolute shadow-5-strong"}),(0,f.jsx)("div",{className:"card bg-glass",children:(0,f.jsx)("div",{className:"card-body px-4 py-5 px-md-5",children:(0,f.jsxs)(o.lx,{children:[(0,f.jsx)("h3",{className:"text-light",children:"User Login"}),(0,f.jsx)("p",{className:"text-light",children:"Sign In to your account"}),g&&(0,f.jsx)("span",{className:"text-danger",children:g.uId}),(0,f.jsxs)(o.YR,{className:"mb-3",children:[(0,f.jsx)(o.wV,{children:(0,f.jsx)(m.Z,{icon:h.E})}),(0,f.jsx)(o.jO,{placeholder:"UID",autoComplete:"uId",value:b.uId,name:"uId",onChange:q,error:g.uId})]}),(0,f.jsxs)(o.YR,{className:"mb-4",children:[(0,f.jsx)(o.wV,{children:(0,f.jsx)(m.Z,{icon:p.U})}),(0,f.jsx)(o.jO,{type:"password",placeholder:"Password",autoComplete:"current-password",value:b.password,name:"password",onChange:q,error:g.password})]}),g&&(0,f.jsx)("p",{className:"text-danger",children:g.password}),(0,f.jsx)(o.rb,{children:(0,f.jsx)(o.b7,{xs:6,children:(0,f.jsx)(o.u5,{color:"primary",className:"px-4",onClick:w,disabled:!(y&&Z)||N,children:"Login"})})})]})})})]})]})})]})}},63232:function(e,r,s){s.d(r,{U:function(){return i}});var i=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M384,200V144a128,128,0,0,0-256,0v56H88V328c0,92.635,75.364,168,168,168s168-75.365,168-168V200ZM160,144a96,96,0,0,1,192,0v56H160ZM392,328c0,74.99-61.01,136-136,136s-136-61.01-136-136V232H392Z' class='ci-primary'/>"]},62412:function(e,r,s){s.d(r,{E:function(){return i}});var i=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M411.6,343.656l-72.823-47.334,27.455-50.334A80.23,80.23,0,0,0,376,207.681V128a112,112,0,0,0-224,0v79.681a80.236,80.236,0,0,0,9.768,38.308l27.455,50.333L116.4,343.656A79.725,79.725,0,0,0,80,410.732V496H448V410.732A79.727,79.727,0,0,0,411.6,343.656ZM416,464H112V410.732a47.836,47.836,0,0,1,21.841-40.246l97.66-63.479-41.64-76.341A48.146,48.146,0,0,1,184,207.681V128a80,80,0,0,1,160,0v79.681a48.146,48.146,0,0,1-5.861,22.985L296.5,307.007l97.662,63.479h0A47.836,47.836,0,0,1,416,410.732Z' class='ci-primary'/>"]}}]);
//# sourceMappingURL=6188.820eb87f.chunk.js.map