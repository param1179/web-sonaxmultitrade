"use strict";(self.webpackChunksonaxmultitrade=self.webpackChunksonaxmultitrade||[]).push([[935],{96066:function(e,r,s){s.d(r,{Z:function(){return i}});var i={};s.r(i),s.d(i,{Cp:function(){return u},h3:function(){return p},pM:function(){return l},kC:function(){return c},r4:function(){return m},zB:function(){return t},Nq:function(){return h},ii:function(){return w}});var a=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,d=/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,o=/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,n=s(62797),t=n.Ry().shape({email:n.Z_().matches(d,"Email is not correct!").required("Email is require field!"),password:n.Z_().matches(a,"Password is not correct!").max(15,"Max 15 symbol!").required("Password is require field!")}),u=(n.Ry().shape({password:n.Z_().matches(a,"Password is not correct!").max(15,"Max 15 symbol!").required("Password is require field!"),confirmPassword:n.Z_().oneOf([n.iH("password"),null],"Passwords must match!").required("Passwords must match!")}),n.Ry().shape({email:n.Z_().matches(d,"Email is not correct!").required("Email is require field!"),password:n.Z_().matches(a,"Password is not correct!").max(15,"Max 15 symbol!").required("Password is require field!"),confirmPassword:n.Z_().oneOf([n.iH("password"),null],"Passwords must match!").required("Passwords must match!")}),n.Ry().shape({oldPassword:n.Z_().max(15,"Max 15 symbol!").required("Password is require field!"),password:n.Z_().max(15,"Max 15 symbol!").notOneOf([n.iH("oldPassword"),null],"Password should not same as old password!").required("Password is require field!"),cPassword:n.Z_().oneOf([n.iH("password"),null],"Passwords must match!").required("Passwords must match!")})),l=n.Ry().shape({paymentRequest:n.Rx().required("Payment request require field!")}),m=n.Ry().shape({firstName:n.Z_().required("First name is require field!"),lastName:n.Z_().required("Last name is require field!"),gender:n.Z_().required("Last name is require field!"),dob:n.hT().required("Date of birth required"),nomineeFirstName:n.Z_().required("First name is require field!"),nomineeLastName:n.Z_().required("First name is require field!"),nomineeDob:n.hT().required("Date of birth required"),nomineeRelation:n.Z_().required("Relation is require field!"),mobile:n.Z_().matches(o,"Phone number is not valid").required("Mobile is require field!").min(10,"Phone number too short").max(10,"Phone number too long"),password:n.Z_().max(15,"Max 15 symbol!").required("Password is require field!"),cpassword:n.Z_().oneOf([n.iH("password"),null],"Passwords must match!").required("Passwords must match!")}),c=(n.Ry().shape({code:n.Z_().max(30,"Max value 20.").required("Coupon Name is require field!"),percent:n.Rx().typeError("You must specify a number").min(1,"Min value 1.").max(100,"Max value 100.").required("This field is required!"),endDate:n.hT().min(new Date,"end date can't be before current date")}),n.Ry().shape({email:n.Z_().matches(d,"Email is not correct!").required("Email is require field!"),schoolName:n.Z_().required("Name is require field!")}),n.Ry().shape({rewardLevel:n.Z_().required("Reward Level is require field!"),onPairs:n.Rx().required("Pairs is require field!"),reward:n.Z_().required("Reward name is require field!")})),h=n.Ry().shape({firstName:n.Z_().required("First name is require field!"),lastName:n.Z_().required("Last name is require field!"),mobile:n.Z_().matches(o,"Phone number is not valid").required("Mobile is require field!").min(10,"Phone number too short").max(10,"Phone number too long")}),w=n.Ry().shape({uId:n.Z_().required("UID is require field!"),password:n.Z_().max(15,"Max 15 symbol!").required("Password is require field!")}),p=n.Ry().shape({password:n.Z_().max(15,"Max 15 symbol!").required("Password is require field!"),cpassword:n.Z_().oneOf([n.iH("password"),null],"Passwords must match!").required("Passwords must match!")})},50935:function(e,r,s){s.r(r);var i=s(74165),a=s(15861),d=s(78983),o=s(92506),n=(s(72791),s(57689)),t=s(82035),u=s(96066),l=s(80184);r.default=function(){var e=(0,n.s0)(),r=(0,o.TA)({initialValues:{password:"",oldPassword:"",cPassword:""},validationSchema:u.Z.Cp,onSubmit:function(e){return function(e){return x.apply(this,arguments)}(e)}}),s=r.values,m=r.handleChange,c=r.submitForm,h=r.errors,w=r.isValid,p=r.dirty,q=r.resetForm,f=r.setErrors,P=t.g8.useChangePassword(f);function x(){return(x=(0,a.Z)((0,i.Z)().mark((function r(s){var a;return(0,i.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return delete s.cPassword,r.next=3,P.mutateAsync(s);case 3:200===(null===(a=r.sent)||void 0===a?void 0:a.status)&&(q(),e("/dashboard"));case 5:case"end":return r.stop()}}),r)})))).apply(this,arguments)}return(0,l.jsx)(d.rb,{children:(0,l.jsx)(d.b7,{xs:12,children:(0,l.jsxs)(d.xH,{children:[(0,l.jsx)(d.bn,{children:(0,l.jsx)("strong",{children:"Change Password"})}),(0,l.jsxs)(d.sl,{children:[(0,l.jsxs)("div",{className:"mb-3",children:[(0,l.jsx)(d.L8,{htmlFor:"oldControlInput",children:"Old Password"}),(0,l.jsx)(d.jO,{type:"password",id:"oldControlInput",placeholder:"Old Password",value:s.oldPassword,name:"oldPassword",onChange:m,error:h.oldPassword}),h&&(0,l.jsx)("p",{className:"text-danger",children:h.oldPassword})]}),(0,l.jsxs)("div",{className:"mb-3",children:[(0,l.jsx)(d.L8,{htmlFor:"pswControlInput",children:"Password"}),(0,l.jsx)(d.jO,{type:"password",id:"pswControlInput",placeholder:"Password",value:s.password,name:"password",onChange:m,error:h.password}),h&&(0,l.jsx)("p",{className:"text-danger",children:h.password})]}),(0,l.jsxs)("div",{className:"mb-3",children:[(0,l.jsx)(d.L8,{htmlFor:"cControlInput",children:"Confirm Password"}),(0,l.jsx)(d.jO,{type:"password",id:"cControlInput",placeholder:"Confirm Password",value:s.cPassword,name:"cPassword",onChange:m,error:h.cPassword}),h&&(0,l.jsx)("p",{className:"text-danger",children:h.cPassword})]}),(0,l.jsx)("div",{className:"d-grid gap-2 mb-3",children:(0,l.jsx)(d.u5,{color:"primary",onClick:c,disabled:!(w&&p)||P.isLoading,children:"Confirm"})})]})]})})})}}}]);
//# sourceMappingURL=935.7bdc026e.chunk.js.map