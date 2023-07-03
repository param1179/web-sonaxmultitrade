"use strict";(self.webpackChunksonaxmultitrade=self.webpackChunksonaxmultitrade||[]).push([[24],{96066:function(e,r,s){s.d(r,{Z:function(){return i}});var i={};s.r(i),s.d(i,{Cp:function(){return u},h3:function(){return f},pM:function(){return l},kC:function(){return c},r4:function(){return m},zB:function(){return t},Nq:function(){return h},ii:function(){return x}});var a=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,n=/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,d=/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,o=s(62797),t=o.Ry().shape({email:o.Z_().matches(n,"Email is not correct!").required("Email is require field!"),password:o.Z_().matches(a,"Password is not correct!").max(15,"Max 15 symbol!").required("Password is require field!")}),u=(o.Ry().shape({password:o.Z_().matches(a,"Password is not correct!").max(15,"Max 15 symbol!").required("Password is require field!"),confirmPassword:o.Z_().oneOf([o.iH("password"),null],"Passwords must match!").required("Passwords must match!")}),o.Ry().shape({email:o.Z_().matches(n,"Email is not correct!").required("Email is require field!"),password:o.Z_().matches(a,"Password is not correct!").max(15,"Max 15 symbol!").required("Password is require field!"),confirmPassword:o.Z_().oneOf([o.iH("password"),null],"Passwords must match!").required("Passwords must match!")}),o.Ry().shape({oldPassword:o.Z_().max(15,"Max 15 symbol!").required("Password is require field!"),password:o.Z_().max(15,"Max 15 symbol!").notOneOf([o.iH("oldPassword"),null],"Password should not same as old password!").required("Password is require field!"),cPassword:o.Z_().oneOf([o.iH("password"),null],"Passwords must match!").required("Passwords must match!")})),l=o.Ry().shape({paymentRequest:o.Rx().required("Payment request require field!")}),m=o.Ry().shape({firstName:o.Z_().required("First name is require field!"),lastName:o.Z_().required("Last name is require field!"),gender:o.Z_().required("Last name is require field!"),dob:o.hT().required("Date of birth required"),nomineeFirstName:o.Z_().required("First name is require field!"),nomineeLastName:o.Z_().required("First name is require field!"),nomineeDob:o.hT().required("Date of birth required"),nomineeRelation:o.Z_().required("Relation is require field!"),mobile:o.Z_().matches(d,"Phone number is not valid").required("Mobile is require field!").min(10,"Phone number too short").max(10,"Phone number too long"),password:o.Z_().max(15,"Max 15 symbol!").required("Password is require field!"),cpassword:o.Z_().oneOf([o.iH("password"),null],"Passwords must match!").required("Passwords must match!")}),c=(o.Ry().shape({code:o.Z_().max(30,"Max value 20.").required("Coupon Name is require field!"),percent:o.Rx().typeError("You must specify a number").min(1,"Min value 1.").max(100,"Max value 100.").required("This field is required!"),endDate:o.hT().min(new Date,"end date can't be before current date")}),o.Ry().shape({email:o.Z_().matches(n,"Email is not correct!").required("Email is require field!"),schoolName:o.Z_().required("Name is require field!")}),o.Ry().shape({rewardLevel:o.Z_().required("Reward Level is require field!"),onPairs:o.Rx().required("Pairs is require field!"),reward:o.Z_().required("Reward name is require field!")})),h=o.Ry().shape({firstName:o.Z_().required("First name is require field!"),lastName:o.Z_().required("Last name is require field!"),mobile:o.Z_().matches(d,"Phone number is not valid").required("Mobile is require field!").min(10,"Phone number too short").max(10,"Phone number too long")}),x=o.Ry().shape({uId:o.Z_().required("UID is require field!"),password:o.Z_().max(15,"Max 15 symbol!").required("Password is require field!")}),f=o.Ry().shape({password:o.Z_().max(15,"Max 15 symbol!").required("Password is require field!"),cpassword:o.Z_().oneOf([o.iH("password"),null],"Passwords must match!").required("Passwords must match!")})},23024:function(e,r,s){s.r(r);var i=s(74165),a=s(15861),n=s(72791),d=s(57689),o=s(78983),t=s(24846),u=s(62412),l=s(63232),m=s(96066),c=s(92506),h=s(82035),x=s(51692),f=s(29352),p=s(80184);r.default=function(){var e=(0,d.s0)(),r=(0,x.getToken)();(0,n.useEffect)((function(){r&&e("/dashboard")}),[]);var s=(0,c.TA)({initialValues:{email:"",password:""},validationSchema:m.Z.zB,onSubmit:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(r){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(r);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}),q=s.values,w=s.handleChange,Z=s.submitForm,b=s.errors,y=s.setErrors,P=s.isValid,j=s.dirty,_=h.iJ.useSignIn(y),v=_.isLoading,N=_.mutate;return(0,p.jsx)("div",{className:"bg-light min-vh-100 d-flex flex-row align-items-center",children:(0,p.jsx)(o.KB,{children:(0,p.jsx)(o.rb,{className:"justify-content-center",children:(0,p.jsx)(o.b7,{md:8,children:(0,p.jsxs)(o.dL,{children:[(0,p.jsx)(o.xH,{className:"p-4",children:(0,p.jsx)(o.sl,{children:(0,p.jsxs)(o.lx,{children:[(0,p.jsx)("h1",{children:"Admin Login"}),(0,p.jsx)("p",{className:"text-medium-emphasis",children:"Sign In to your account"}),(0,p.jsxs)(o.YR,{className:"mb-3",children:[(0,p.jsx)(o.wV,{children:(0,p.jsx)(t.Z,{icon:u.E})}),(0,p.jsx)(o.jO,{placeholder:"Username",autoComplete:"username",value:q.email,name:"email",onChange:w,error:b.email})]}),b&&(0,p.jsx)("p",{className:"text-danger",children:b.email}),(0,p.jsxs)(o.YR,{className:"mb-4",children:[(0,p.jsx)(o.wV,{children:(0,p.jsx)(t.Z,{icon:l.U})}),(0,p.jsx)(o.jO,{type:"password",placeholder:"Password",autoComplete:"current-password",value:q.password,name:"password",onChange:w,error:b.password})]}),b&&(0,p.jsx)("p",{className:"text-danger",children:b.password}),(0,p.jsxs)(o.rb,{children:[(0,p.jsx)(o.b7,{xs:6,children:(0,p.jsx)(o.u5,{color:"primary",className:"px-4",onClick:Z,disabled:!(P&&j)||v,children:"Login"})}),(0,p.jsx)(o.b7,{xs:6,className:"text-right",children:(0,p.jsx)(o.u5,{color:"link",className:"px-0",children:"Forgot password?"})})]})]})})}),(0,p.jsx)(o.xH,{className:"text-white bg-primary py-5",children:(0,p.jsx)(o.sl,{className:"text-center",children:(0,p.jsxs)("div",{children:[(0,p.jsx)("h2",{children:"Sonax Multitrade"}),(0,p.jsx)(o.DW,{src:f,width:"200"}),(0,p.jsx)("p",{children:"We understand your world"})]})})})]})})})})})}},63232:function(e,r,s){s.d(r,{U:function(){return i}});var i=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M384,200V144a128,128,0,0,0-256,0v56H88V328c0,92.635,75.364,168,168,168s168-75.365,168-168V200ZM160,144a96,96,0,0,1,192,0v56H160ZM392,328c0,74.99-61.01,136-136,136s-136-61.01-136-136V232H392Z' class='ci-primary'/>"]},62412:function(e,r,s){s.d(r,{E:function(){return i}});var i=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M411.6,343.656l-72.823-47.334,27.455-50.334A80.23,80.23,0,0,0,376,207.681V128a112,112,0,0,0-224,0v79.681a80.236,80.236,0,0,0,9.768,38.308l27.455,50.333L116.4,343.656A79.725,79.725,0,0,0,80,410.732V496H448V410.732A79.727,79.727,0,0,0,411.6,343.656ZM416,464H112V410.732a47.836,47.836,0,0,1,21.841-40.246l97.66-63.479-41.64-76.341A48.146,48.146,0,0,1,184,207.681V128a80,80,0,0,1,160,0v79.681a48.146,48.146,0,0,1-5.861,22.985L296.5,307.007l97.662,63.479h0A47.836,47.836,0,0,1,416,410.732Z' class='ci-primary'/>"]}}]);
//# sourceMappingURL=24.c4d15f8b.chunk.js.map