"use strict";(self.webpackChunksonaxmultitrade=self.webpackChunksonaxmultitrade||[]).push([[188],{96066:function(e,r,s){s.d(r,{Z:function(){return a}});var a={};s.r(a),s.d(a,{R5:function(){return q},Cp:function(){return l},h3:function(){return p},pM:function(){return u},kC:function(){return h},r4:function(){return c},CE:function(){return m},zB:function(){return t},Nq:function(){return x},ii:function(){return f}});var i=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,d=/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,n=/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,o=s(62797),t=o.Ry().shape({email:o.Z_().matches(d,"Email is not correct!").required("Email is require field!"),password:o.Z_().matches(i,"Password is not correct!").max(15,"Max 15 symbol!").required("Password is require field!")}),l=(o.Ry().shape({password:o.Z_().matches(i,"Password is not correct!").max(15,"Max 15 symbol!").required("Password is require field!"),confirmPassword:o.Z_().oneOf([o.iH("password"),null],"Passwords must match!").required("Passwords must match!")}),o.Ry().shape({email:o.Z_().matches(d,"Email is not correct!").required("Email is require field!"),password:o.Z_().matches(i,"Password is not correct!").max(15,"Max 15 symbol!").required("Password is require field!"),confirmPassword:o.Z_().oneOf([o.iH("password"),null],"Passwords must match!").required("Passwords must match!")}),o.Ry().shape({oldPassword:o.Z_().max(15,"Max 15 symbol!").required("Password is require field!"),password:o.Z_().max(15,"Max 15 symbol!").notOneOf([o.iH("oldPassword"),null],"Password should not same as old password!").required("Password is require field!"),cPassword:o.Z_().oneOf([o.iH("password"),null],"Passwords must match!").required("Passwords must match!")})),u=o.Ry().shape({paymentRequest:o.Rx().required("Payment request require field!")}),c=o.Ry().shape({firstName:o.Z_().required("First name is require field!"),lastName:o.Z_().required("Last name is require field!"),gender:o.Z_().required("Last name is require field!"),dob:o.hT().required("Date of birth required"),nomineeFirstName:o.Z_().required("First name is require field!"),nomineeLastName:o.Z_().required("First name is require field!"),nomineeDob:o.hT().required("Date of birth required"),nomineeRelation:o.Z_().required("Relation is require field!"),mobile:o.Z_().matches(n,"Phone number is not valid").required("Mobile is require field!").min(10,"Phone number too short").max(10,"Phone number too long"),password:o.Z_().max(15,"Max 15 symbol!").required("Password is require field!"),cpassword:o.Z_().oneOf([o.iH("password"),null],"Passwords must match!").required("Passwords must match!")}),m=(o.Ry().shape({code:o.Z_().max(30,"Max value 20.").required("Coupon Name is require field!"),percent:o.Rx().typeError("You must specify a number").min(1,"Min value 1.").max(100,"Max value 100.").required("This field is required!"),endDate:o.hT().min(new Date,"end date can't be before current date")}),o.Ry().shape({from:o.hT().max(new Date,"From date can't be after current date"),to:o.hT().max(new Date,"End date can't be after current date")})),h=(o.Ry().shape({email:o.Z_().matches(d,"Email is not correct!").required("Email is require field!"),schoolName:o.Z_().required("Name is require field!")}),o.Ry().shape({rewardLevel:o.Z_().required("Reward Level is require field!"),rewardPrice:o.Rx().max(999999999).required("Reward Price is require field!"),onPairs:o.Rx().required("Pairs is require field!"),reward:o.Z_().required("Reward name is require field!")})),x=o.Ry().shape({firstName:o.Z_().required("First name is require field!"),lastName:o.Z_().required("Last name is require field!"),mobile:o.Z_().matches(n,"Phone number is not valid").required("Mobile is require field!").min(10,"Phone number too short").max(10,"Phone number too long")}),f=o.Ry().shape({uId:o.Z_().required("UID is require field!"),password:o.Z_().max(15,"Max 15 symbol!").required("Password is require field!")}),p=o.Ry().shape({password:o.Z_().max(15,"Max 15 symbol!").required("Password is require field!"),cpassword:o.Z_().oneOf([o.iH("password"),null],"Passwords must match!").required("Passwords must match!")}),q=o.Ry().shape({title:o.Z_().max(15,"Max 15 symbol!").required("Title is require field!"),date:o.Z_().required("Date is require field!"),price:o.Rx().max(999999999).required("Price is require field!")})},16188:function(e,r,s){s.r(r),s.d(r,{default:function(){return q}});var a=s(74165),i=s(15861),d=s(72791),n=s(78983),o=s(57689),t=s(51692),l=s(92506),u=s(96066),c=s(82035),m=s(24846),h=s(62412),x=s(63232),f=s(29352),p=s(80184);function q(){var e=(0,o.s0)(),r=(0,t.getToken)();(0,d.useEffect)((function(){r&&e("/dashboard")}),[]);var s=(0,l.TA)({initialValues:{uId:"",password:""},validationSchema:u.Z.ii,onSubmit:function(){var e=(0,i.Z)((0,a.Z)().mark((function e(r){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_(r);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}),q=s.values,w=s.handleChange,b=s.submitForm,y=s.errors,Z=s.setErrors,v=s.isValid,P=s.dirty,g=c.iJ.useUserSignIn(Z),j=g.isLoading,_=g.mutate;return(0,p.jsxs)("section",{className:"background-radial-gradient overflow-hidden",children:[(0,p.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0",children:(0,p.jsxs)("a",{href:"/",className:"navbar-brand p-0",children:[(0,p.jsx)(n.DW,{src:f,height:50,alt:"Logo"}),(0,p.jsx)("strong",{className:"m-0 text-light",children:"Sonax Multitrade"})]})}),(0,p.jsx)("div",{className:"container px-4 py-5 px-md-5 text-center text-lg-start my-5",children:(0,p.jsxs)("div",{className:"row gx-lg-5 align-items-center mb-5",children:[(0,p.jsx)("div",{className:"col-lg-6 mb-5 mb-lg-0",style:{zIndex:10},children:(0,p.jsxs)("h1",{className:"my-5 display-5 fw-bold ls-tight",style:{color:"hsl(218, 81%, 95%)"},children:["The best offer ",(0,p.jsx)("br",{}),(0,p.jsx)("span",{style:{color:"hsl(218, 81%, 75%)"},children:"for your business"})]})}),(0,p.jsxs)("div",{className:"col-lg-6 mb-5 mb-lg-0 position-relative",children:[(0,p.jsx)("div",{id:"radius-shape-1",className:"position-absolute rounded-circle shadow-5-strong"}),(0,p.jsx)("div",{id:"radius-shape-2",className:"position-absolute shadow-5-strong"}),(0,p.jsx)("div",{className:"card bg-glass",children:(0,p.jsx)("div",{className:"card-body px-4 py-5 px-md-5",children:(0,p.jsxs)(n.lx,{children:[(0,p.jsx)("h3",{className:"text-light",children:"User Login"}),(0,p.jsx)("p",{className:"text-light",children:"Sign In to your account"}),y&&(0,p.jsx)("span",{className:"text-danger",children:y.uId}),(0,p.jsxs)(n.YR,{className:"mb-3",children:[(0,p.jsx)(n.wV,{children:(0,p.jsx)(m.Z,{icon:h.E})}),(0,p.jsx)(n.jO,{placeholder:"UID",autoComplete:"uId",value:q.uId,name:"uId",onChange:w,error:y.uId})]}),(0,p.jsxs)(n.YR,{className:"mb-4",children:[(0,p.jsx)(n.wV,{children:(0,p.jsx)(m.Z,{icon:x.U})}),(0,p.jsx)(n.jO,{type:"password",placeholder:"Password",autoComplete:"current-password",value:q.password,name:"password",onChange:w,error:y.password})]}),y&&(0,p.jsx)("p",{className:"text-danger",children:y.password}),(0,p.jsx)(n.rb,{children:(0,p.jsx)(n.b7,{xs:6,children:(0,p.jsx)(n.u5,{color:"primary",className:"px-4",onClick:b,disabled:!(v&&P)||j,children:"Login"})})})]})})})]})]})})]})}},63232:function(e,r,s){s.d(r,{U:function(){return a}});var a=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M384,200V144a128,128,0,0,0-256,0v56H88V328c0,92.635,75.364,168,168,168s168-75.365,168-168V200ZM160,144a96,96,0,0,1,192,0v56H160ZM392,328c0,74.99-61.01,136-136,136s-136-61.01-136-136V232H392Z' class='ci-primary'/>"]},62412:function(e,r,s){s.d(r,{E:function(){return a}});var a=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M411.6,343.656l-72.823-47.334,27.455-50.334A80.23,80.23,0,0,0,376,207.681V128a112,112,0,0,0-224,0v79.681a80.236,80.236,0,0,0,9.768,38.308l27.455,50.333L116.4,343.656A79.725,79.725,0,0,0,80,410.732V496H448V410.732A79.727,79.727,0,0,0,411.6,343.656ZM416,464H112V410.732a47.836,47.836,0,0,1,21.841-40.246l97.66-63.479-41.64-76.341A48.146,48.146,0,0,1,184,207.681V128a80,80,0,0,1,160,0v79.681a48.146,48.146,0,0,1-5.861,22.985L296.5,307.007l97.662,63.479h0A47.836,47.836,0,0,1,416,410.732Z' class='ci-primary'/>"]}}]);
//# sourceMappingURL=188.8eff7ed8.chunk.js.map