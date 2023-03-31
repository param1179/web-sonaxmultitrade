"use strict";(self.webpackChunksonaxmultitrade=self.webpackChunksonaxmultitrade||[]).push([[224],{96066:function(e,r,i){i.d(r,{Z:function(){return s}});var s={};i.r(s),i.d(s,{Cp:function(){return l},kC:function(){return m},r4:function(){return u},zB:function(){return t},Nq:function(){return c},ii:function(){return h}});var a=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,d=/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,n=/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,o=i(62797),t=o.Ry().shape({email:o.Z_().matches(d,"Email is not correct!").required("Email is require field!"),password:o.Z_().matches(a,"Password is not correct!").max(15,"Max 15 symbol!").required("Password is require field!")}),l=(o.Ry().shape({password:o.Z_().matches(a,"Password is not correct!").max(15,"Max 15 symbol!").required("Password is require field!"),confirmPassword:o.Z_().oneOf([o.iH("password"),null],"Passwords must match!").required("Passwords must match!")}),o.Ry().shape({email:o.Z_().matches(d,"Email is not correct!").required("Email is require field!"),password:o.Z_().matches(a,"Password is not correct!").max(15,"Max 15 symbol!").required("Password is require field!"),confirmPassword:o.Z_().oneOf([o.iH("password"),null],"Passwords must match!").required("Passwords must match!")}),o.Ry().shape({oldPassword:o.Z_().max(15,"Max 15 symbol!").required("Password is require field!"),password:o.Z_().max(15,"Max 15 symbol!").notOneOf([o.iH("oldPassword"),null],"Password should not same as old password!").required("Password is require field!"),cPassword:o.Z_().oneOf([o.iH("password"),null],"Passwords must match!").required("Passwords must match!")})),u=o.Ry().shape({firstName:o.Z_().required("First name is require field!"),lastName:o.Z_().required("Last name is require field!"),gender:o.Z_().required("Last name is require field!"),dob:o.hT().required("Date of birth required"),nomineeFirstName:o.Z_().required("First name is require field!"),nomineeLastName:o.Z_().required("First name is require field!"),nomineeDob:o.hT().required("Date of birth required"),nomineeRelation:o.Z_().required("Relation is require field!"),mobile:o.Z_().matches(n,"Phone number is not valid").required("Mobile is require field!").min(10,"Phone number too short").max(10,"Phone number too long"),email:o.Z_().matches(d,"Email is not correct!").required("Email is require field!"),password:o.Z_().max(15,"Max 15 symbol!").required("Password is require field!"),cpassword:o.Z_().oneOf([o.iH("password"),null],"Passwords must match!").required("Passwords must match!")}),m=(o.Ry().shape({code:o.Z_().max(30,"Max value 20.").required("Coupon Name is require field!"),percent:o.Rx().typeError("You must specify a number").min(1,"Min value 1.").max(100,"Max value 100.").required("This field is required!"),endDate:o.hT().min(new Date,"end date can't be before current date")}),o.Ry().shape({email:o.Z_().matches(d,"Email is not correct!").required("Email is require field!"),schoolName:o.Z_().required("Name is require field!")}),o.Ry().shape({rewardLevel:o.Z_().required("Reward Level is require field!"),onPairs:o.Rx().required("Pairs is require field!"),reward:o.Z_().required("Reward name is require field!")})),c=o.Ry().shape({firstName:o.Z_().required("First name is require field!"),lastName:o.Z_().required("Last name is require field!"),mobile:o.Z_().matches(n,"Phone number is not valid").required("Mobile is require field!").min(10,"Phone number too short").max(10,"Phone number too long")}),h=o.Ry().shape({uId:o.Z_().required("UID is require field!"),password:o.Z_().max(15,"Max 15 symbol!").required("Password is require field!")})},15224:function(e,r,i){i.r(r);var s=i(74165),a=i(15861),d=i(78983),n=i(92506),o=i(72791),t=i(57689),l=i(82035),u=i(96066),m=i(80184);r.default=function(){var e=(0,t.UO)().id,r=l.Nq.useGetUser(e),i=r.isLoading,c=r.data,h=r.refetch,f=(0,n.TA)({initialValues:{firstName:"",lastName:"",mobile:""},validationSchema:u.Z.Nq,onSubmit:function(e){return y(e)}}),q=f.values,x=f.handleChange,b=f.setFieldValue,p=f.submitForm,w=f.errors,N=f.isValid,Z=f.dirty,v=f.touched,P=f.handleBlur;(0,o.useEffect)((function(){b("firstName",null===c||void 0===c?void 0:c.user.firstName),b("lastName",null===c||void 0===c?void 0:c.user.lastName),b("mobile",null===c||void 0===c?void 0:c.user.mobile)}),[i]);var _=l.Nq.useEditUser(),y=function(){var r=(0,a.Z)((0,s.Z)().mark((function r(i){var a;return(0,s.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,_.mutateAsync({id:e,body:i});case 2:200===(null===(a=r.sent)||void 0===a?void 0:a.status)&&h();case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}();return(0,m.jsx)(d.rb,{children:(0,m.jsx)(d.b7,{md:12,children:(0,m.jsxs)(d.xH,{children:[(0,m.jsx)(d.bn,{children:(0,m.jsxs)("strong",{children:["User ID: ",null===c||void 0===c?void 0:c.user.uId]})}),(0,m.jsx)(d.sl,{children:!i&&(0,m.jsx)(d.lx,{children:(0,m.jsxs)(d.rb,{children:[(0,m.jsx)(d.b7,{md:3,children:(0,m.jsxs)("div",{className:"mb-3",children:[(0,m.jsx)(d.jO,{type:"text",id:"firstNameControlInput",placeholder:"First Name",value:q.firstName||"",name:"firstName",onChange:x,onBlur:P,error:w.firstName}),v.firstName&&w&&(0,m.jsx)("p",{className:"text-danger",children:w.firstName})]})}),(0,m.jsx)(d.b7,{md:3,children:(0,m.jsxs)("div",{className:"mb-3",children:[(0,m.jsx)(d.jO,{type:"text",id:"lastNameControlInput",placeholder:"Last Name",value:q.lastName||"",name:"lastName",onChange:x,onBlur:P,error:w.lastName}),v.lastName&&w&&(0,m.jsx)("p",{className:"text-danger",children:w.lastName})]})}),(0,m.jsx)(d.b7,{md:3,children:(0,m.jsxs)("div",{className:"mb-3",children:[(0,m.jsx)(d.jO,{type:"text",id:"mobileControlInput",placeholder:"Mobile number",value:q.mobile||"",name:"mobile",onChange:x,onBlur:P,error:w.mobile}),v.mobile&&w&&(0,m.jsx)("p",{className:"text-danger",children:w.mobile})]})}),(0,m.jsx)(d.b7,{md:3,children:(0,m.jsx)("div",{className:"d-grid gap-2 mb-3",children:(0,m.jsx)(d.u5,{color:"primary",onClick:p,disabled:!(N&&Z)||_.isLoading,children:"Save"})})})]})})})]})})})}}}]);
//# sourceMappingURL=224.6d6f9908.chunk.js.map