"use strict";(self.webpackChunksonaxmultitrade=self.webpackChunksonaxmultitrade||[]).push([[935],{96066:function(e,r,s){s.d(r,{Z:function(){return a}});var a={};s.r(a),s.d(a,{Cp:function(){return l},kC:function(){return m},r4:function(){return u},zB:function(){return t},ii:function(){return c}});var i=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,d=/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,o=/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,n=s(62797),t=n.Ry().shape({email:n.Z_().matches(d,"Email is not correct!").required("Email is require field!"),password:n.Z_().matches(i,"Password is not correct!").max(15,"Max 15 symbol!").required("Password is require field!")}),l=(n.Ry().shape({password:n.Z_().matches(i,"Password is not correct!").max(15,"Max 15 symbol!").required("Password is require field!"),confirmPassword:n.Z_().oneOf([n.iH("password"),null],"Passwords must match!").required("Passwords must match!")}),n.Ry().shape({email:n.Z_().matches(d,"Email is not correct!").required("Email is require field!"),password:n.Z_().matches(i,"Password is not correct!").max(15,"Max 15 symbol!").required("Password is require field!"),confirmPassword:n.Z_().oneOf([n.iH("password"),null],"Passwords must match!").required("Passwords must match!")}),n.Ry().shape({oldPassword:n.Z_().max(15,"Max 15 symbol!").required("Password is require field!"),password:n.Z_().max(15,"Max 15 symbol!").notOneOf([n.iH("oldPassword"),null],"Password should not same as old password!").required("Password is require field!"),cPassword:n.Z_().oneOf([n.iH("password"),null],"Passwords must match!").required("Passwords must match!")})),u=n.Ry().shape({firstName:n.Z_().required("First name is require field!"),lastName:n.Z_().required("Last name is require field!"),gender:n.Z_().required("Last name is require field!"),dob:n.hT().required("Date of birth required"),nomineeFirstName:n.Z_().required("First name is require field!"),nomineeLastName:n.Z_().required("First name is require field!"),nomineeDob:n.hT().required("Date of birth required"),nomineeRelation:n.Z_().required("Relation is require field!"),mobile:n.Z_().matches(o,"Phone number is not valid").required("Mobile is require field!").min(10,"Phone number too short").max(10,"Phone number too long"),email:n.Z_().matches(d,"Email is not correct!").required("Email is require field!"),password:n.Z_().max(15,"Max 15 symbol!").required("Password is require field!"),cpassword:n.Z_().oneOf([n.iH("password"),null],"Passwords must match!").required("Passwords must match!")}),m=(n.Ry().shape({code:n.Z_().max(30,"Max value 20.").required("Coupon Name is require field!"),percent:n.Rx().typeError("You must specify a number").min(1,"Min value 1.").max(100,"Max value 100.").required("This field is required!"),endDate:n.hT().min(new Date,"end date can't be before current date")}),n.Ry().shape({email:n.Z_().matches(d,"Email is not correct!").required("Email is require field!"),schoolName:n.Z_().required("Name is require field!")}),n.Ry().shape({rewardLevel:n.Z_().required("Reward Level is require field!"),onPairs:n.Rx().required("Pairs is require field!"),reward:n.Z_().required("Reward name is require field!")})),c=n.Ry().shape({uId:n.Z_().required("UID is require field!"),password:n.Z_().max(15,"Max 15 symbol!").required("Password is require field!")})},50935:function(e,r,s){s.r(r);var a=s(74165),i=s(15861),d=s(78983),o=s(92506),n=(s(72791),s(57689)),t=s(82035),l=s(96066),u=s(80184);r.default=function(){var e=(0,n.s0)(),r=(0,o.TA)({initialValues:{password:"",oldPassword:"",cPassword:""},validationSchema:l.Z.Cp,onSubmit:function(e){return function(e){return P.apply(this,arguments)}(e)}}),s=r.values,m=r.handleChange,c=r.submitForm,w=r.errors,h=r.isValid,p=r.dirty,f=r.resetForm,q=r.setErrors,x=t.g8.useChangePassword(q);function P(){return(P=(0,i.Z)((0,a.Z)().mark((function r(s){var i;return(0,a.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return delete s.cPassword,r.next=3,x.mutateAsync(s);case 3:200===(null===(i=r.sent)||void 0===i?void 0:i.status)&&(f(),e("/dashboard"));case 5:case"end":return r.stop()}}),r)})))).apply(this,arguments)}return(0,u.jsx)(d.rb,{children:(0,u.jsx)(d.b7,{xs:12,children:(0,u.jsxs)(d.xH,{children:[(0,u.jsx)(d.bn,{children:(0,u.jsx)("strong",{children:"Change Password"})}),(0,u.jsxs)(d.sl,{children:[(0,u.jsxs)("div",{className:"mb-3",children:[(0,u.jsx)(d.L8,{htmlFor:"oldControlInput",children:"Old Password"}),(0,u.jsx)(d.jO,{type:"password",id:"oldControlInput",placeholder:"Old Password",value:s.oldPassword,name:"oldPassword",onChange:m,error:w.oldPassword}),w&&(0,u.jsx)("p",{className:"text-danger",children:w.oldPassword})]}),(0,u.jsxs)("div",{className:"mb-3",children:[(0,u.jsx)(d.L8,{htmlFor:"pswControlInput",children:"Password"}),(0,u.jsx)(d.jO,{type:"password",id:"pswControlInput",placeholder:"Password",value:s.password,name:"password",onChange:m,error:w.password}),w&&(0,u.jsx)("p",{className:"text-danger",children:w.password})]}),(0,u.jsxs)("div",{className:"mb-3",children:[(0,u.jsx)(d.L8,{htmlFor:"cControlInput",children:"Confirm Password"}),(0,u.jsx)(d.jO,{type:"password",id:"cControlInput",placeholder:"Confirm Password",value:s.cPassword,name:"cPassword",onChange:m,error:w.cPassword}),w&&(0,u.jsx)("p",{className:"text-danger",children:w.cPassword})]}),(0,u.jsx)("div",{className:"d-grid gap-2 mb-3",children:(0,u.jsx)(d.u5,{color:"primary",onClick:c,disabled:!(h&&p)||x.isLoading,children:"Confirm"})})]})]})})})}}}]);
//# sourceMappingURL=935.f2d366d9.chunk.js.map