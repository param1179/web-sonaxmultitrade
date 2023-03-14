"use strict";(self.webpackChunksonaxmultitrade=self.webpackChunksonaxmultitrade||[]).push([[188],{96066:function(e,r,s){s.d(r,{Z:function(){return i}});var i={};s.r(i),s.d(i,{Cp:function(){return t},kC:function(){return c},r4:function(){return u},zB:function(){return l},ii:function(){return m}});var a=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,o=/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,d=/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,n=s(62797),l=n.Ry().shape({email:n.Z_().matches(o,"Email is not correct!").required("Email is require field!"),password:n.Z_().matches(a,"Password is not correct!").max(15,"Max 15 symbol!").required("Password is require field!")}),t=(n.Ry().shape({password:n.Z_().matches(a,"Password is not correct!").max(15,"Max 15 symbol!").required("Password is require field!"),confirmPassword:n.Z_().oneOf([n.iH("password"),null],"Passwords must match!").required("Passwords must match!")}),n.Ry().shape({email:n.Z_().matches(o,"Email is not correct!").required("Email is require field!"),password:n.Z_().matches(a,"Password is not correct!").max(15,"Max 15 symbol!").required("Password is require field!"),confirmPassword:n.Z_().oneOf([n.iH("password"),null],"Passwords must match!").required("Passwords must match!")}),n.Ry().shape({oldPassword:n.Z_().max(15,"Max 15 symbol!").required("Password is require field!"),password:n.Z_().max(15,"Max 15 symbol!").notOneOf([n.iH("oldPassword"),null],"Password should not same as old password!").required("Password is require field!"),cPassword:n.Z_().oneOf([n.iH("password"),null],"Passwords must match!").required("Passwords must match!")})),u=n.Ry().shape({firstName:n.Z_().required("First name is require field!"),lastName:n.Z_().required("Last name is require field!"),gender:n.Z_().required("Last name is require field!"),dob:n.hT().required("Date of birth required"),nomineeFirstName:n.Z_().required("First name is require field!"),nomineeLastName:n.Z_().required("First name is require field!"),nomineeDob:n.hT().required("Date of birth required"),nomineeRelation:n.Z_().required("Relation is require field!"),mobile:n.Z_().matches(d,"Phone number is not valid").required("Mobile is require field!").min(10,"Phone number too short").max(10,"Phone number too long"),email:n.Z_().matches(o,"Email is not correct!").required("Email is require field!"),password:n.Z_().max(15,"Max 15 symbol!").required("Password is require field!"),cpassword:n.Z_().oneOf([n.iH("password"),null],"Passwords must match!").required("Passwords must match!")}),c=(n.Ry().shape({code:n.Z_().max(30,"Max value 20.").required("Coupon Name is require field!"),percent:n.Rx().typeError("You must specify a number").min(1,"Min value 1.").max(100,"Max value 100.").required("This field is required!"),endDate:n.hT().min(new Date,"end date can't be before current date")}),n.Ry().shape({email:n.Z_().matches(o,"Email is not correct!").required("Email is require field!"),schoolName:n.Z_().required("Name is require field!")}),n.Ry().shape({rewardLevel:n.Z_().required("Reward Level is require field!"),onPairs:n.Rx().required("Pairs is require field!"),reward:n.Z_().required("Reward name is require field!")})),m=n.Ry().shape({uId:n.Z_().required("UID is require field!"),password:n.Z_().max(15,"Max 15 symbol!").required("Password is require field!")})},16188:function(e,r,s){s.r(r),s.d(r,{default:function(){return w}});var i=s(74165),a=s(15861),o=s(72791),d=s(78983),n=s(57689),l=s(51692),t=s(92506),u=s(96066),c=s(82035),m=s(24846),h=s(62412),p=s(63232),x=s(29352),f=s(80184);function w(){var e=(0,n.s0)(),r=(0,l.getToken)();(0,o.useEffect)((function(){r&&e("/dashboard")}),[]);var s=(0,t.TA)({initialValues:{uId:"",password:""},validationSchema:u.Z.ii,onSubmit:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(r){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(r);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}),w=s.values,q=s.handleChange,b=s.submitForm,v=s.errors,y=s.setErrors,Z=s.isValid,g=s.dirty,j=c.iJ.useUserSignIn(y),P=j.isLoading,N=j.mutate;return(0,f.jsxs)("section",{className:"background-radial-gradient overflow-hidden",children:[(0,f.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0",children:(0,f.jsxs)("a",{href:"/",className:"navbar-brand p-0",children:[(0,f.jsx)(d.DW,{src:x,height:50,alt:"Logo"}),(0,f.jsx)("strong",{className:"m-0 text-light",children:"Sonax Multitrade"})]})}),(0,f.jsx)("div",{className:"container px-4 py-5 px-md-5 text-center text-lg-start my-5",children:(0,f.jsxs)("div",{className:"row gx-lg-5 align-items-center mb-5",children:[(0,f.jsxs)("div",{className:"col-lg-6 mb-5 mb-lg-0",style:{zIndex:10},children:[(0,f.jsxs)("h1",{className:"my-5 display-5 fw-bold ls-tight",style:{color:"hsl(218, 81%, 95%)"},children:["The best offer ",(0,f.jsx)("br",{}),(0,f.jsx)("span",{style:{color:"hsl(218, 81%, 75%)"},children:"for your business"})]}),(0,f.jsx)("p",{className:"mb-4 opacity-70",style:{color:"hsl(218, 81%, 85%)"},children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, expedita iusto veniam atque, magni tempora mollitia dolorum consequatur nulla, neque debitis eos reprehenderit quasi ab ipsum nisi dolorem modi. Quos?"})]}),(0,f.jsxs)("div",{className:"col-lg-6 mb-5 mb-lg-0 position-relative",children:[(0,f.jsx)("div",{id:"radius-shape-1",className:"position-absolute rounded-circle shadow-5-strong"}),(0,f.jsx)("div",{id:"radius-shape-2",className:"position-absolute shadow-5-strong"}),(0,f.jsx)("div",{className:"card bg-glass",children:(0,f.jsx)("div",{className:"card-body px-4 py-5 px-md-5",children:(0,f.jsxs)(d.lx,{children:[(0,f.jsx)("h3",{className:"text-light",children:"User Login"}),(0,f.jsx)("p",{className:"text-light",children:"Sign In to your account"}),v&&(0,f.jsx)("span",{className:"text-danger",children:v.uId}),(0,f.jsxs)(d.YR,{className:"mb-3",children:[(0,f.jsx)(d.wV,{children:(0,f.jsx)(m.Z,{icon:h.E})}),(0,f.jsx)(d.jO,{placeholder:"UID",autoComplete:"uId",value:w.uId,name:"uId",onChange:q,error:v.uId})]}),(0,f.jsxs)(d.YR,{className:"mb-4",children:[(0,f.jsx)(d.wV,{children:(0,f.jsx)(m.Z,{icon:p.U})}),(0,f.jsx)(d.jO,{type:"password",placeholder:"Password",autoComplete:"current-password",value:w.password,name:"password",onChange:q,error:v.password})]}),v&&(0,f.jsx)("p",{className:"text-danger",children:v.password}),(0,f.jsx)(d.rb,{children:(0,f.jsx)(d.b7,{xs:6,children:(0,f.jsx)(d.u5,{color:"primary",className:"px-4",onClick:b,disabled:!(Z&&g)||P,children:"Login"})})})]})})})]})]})})]})}},63232:function(e,r,s){s.d(r,{U:function(){return i}});var i=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M384,200V144a128,128,0,0,0-256,0v56H88V328c0,92.635,75.364,168,168,168s168-75.365,168-168V200ZM160,144a96,96,0,0,1,192,0v56H160ZM392,328c0,74.99-61.01,136-136,136s-136-61.01-136-136V232H392Z' class='ci-primary'/>"]},62412:function(e,r,s){s.d(r,{E:function(){return i}});var i=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M411.6,343.656l-72.823-47.334,27.455-50.334A80.23,80.23,0,0,0,376,207.681V128a112,112,0,0,0-224,0v79.681a80.236,80.236,0,0,0,9.768,38.308l27.455,50.333L116.4,343.656A79.725,79.725,0,0,0,80,410.732V496H448V410.732A79.727,79.727,0,0,0,411.6,343.656ZM416,464H112V410.732a47.836,47.836,0,0,1,21.841-40.246l97.66-63.479-41.64-76.341A48.146,48.146,0,0,1,184,207.681V128a80,80,0,0,1,160,0v79.681a48.146,48.146,0,0,1-5.861,22.985L296.5,307.007l97.662,63.479h0A47.836,47.836,0,0,1,416,410.732Z' class='ci-primary'/>"]}}]);
//# sourceMappingURL=188.459f57ab.chunk.js.map