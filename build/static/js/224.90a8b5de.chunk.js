"use strict";(self.webpackChunksonaxmultitrade=self.webpackChunksonaxmultitrade||[]).push([[224],{96066:function(e,r,s){s.d(r,{Z:function(){return i}});var i={};s.r(i),s.d(i,{Cp:function(){return d},h3:function(){return p},pM:function(){return m},kC:function(){return c},r4:function(){return u},zB:function(){return l},Nq:function(){return h},ii:function(){return x}});var a=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,n=/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,t=/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,o=s(62797),l=o.Ry().shape({email:o.Z_().matches(n,"Email is not correct!").required("Email is require field!"),password:o.Z_().matches(a,"Password is not correct!").max(15,"Max 15 symbol!").required("Password is require field!")}),d=(o.Ry().shape({password:o.Z_().matches(a,"Password is not correct!").max(15,"Max 15 symbol!").required("Password is require field!"),confirmPassword:o.Z_().oneOf([o.iH("password"),null],"Passwords must match!").required("Passwords must match!")}),o.Ry().shape({email:o.Z_().matches(n,"Email is not correct!").required("Email is require field!"),password:o.Z_().matches(a,"Password is not correct!").max(15,"Max 15 symbol!").required("Password is require field!"),confirmPassword:o.Z_().oneOf([o.iH("password"),null],"Passwords must match!").required("Passwords must match!")}),o.Ry().shape({oldPassword:o.Z_().max(15,"Max 15 symbol!").required("Password is require field!"),password:o.Z_().max(15,"Max 15 symbol!").notOneOf([o.iH("oldPassword"),null],"Password should not same as old password!").required("Password is require field!"),cPassword:o.Z_().oneOf([o.iH("password"),null],"Passwords must match!").required("Passwords must match!")})),m=o.Ry().shape({paymentRequest:o.Rx().required("Payment request require field!")}),u=o.Ry().shape({firstName:o.Z_().required("First name is require field!"),lastName:o.Z_().required("Last name is require field!"),gender:o.Z_().required("Last name is require field!"),dob:o.hT().required("Date of birth required"),nomineeFirstName:o.Z_().required("First name is require field!"),nomineeLastName:o.Z_().required("First name is require field!"),nomineeDob:o.hT().required("Date of birth required"),nomineeRelation:o.Z_().required("Relation is require field!"),mobile:o.Z_().matches(t,"Phone number is not valid").required("Mobile is require field!").min(10,"Phone number too short").max(10,"Phone number too long"),password:o.Z_().max(15,"Max 15 symbol!").required("Password is require field!"),cpassword:o.Z_().oneOf([o.iH("password"),null],"Passwords must match!").required("Passwords must match!")}),c=(o.Ry().shape({code:o.Z_().max(30,"Max value 20.").required("Coupon Name is require field!"),percent:o.Rx().typeError("You must specify a number").min(1,"Min value 1.").max(100,"Max value 100.").required("This field is required!"),endDate:o.hT().min(new Date,"end date can't be before current date")}),o.Ry().shape({email:o.Z_().matches(n,"Email is not correct!").required("Email is require field!"),schoolName:o.Z_().required("Name is require field!")}),o.Ry().shape({rewardLevel:o.Z_().required("Reward Level is require field!"),onPairs:o.Rx().required("Pairs is require field!"),reward:o.Z_().required("Reward name is require field!")})),h=o.Ry().shape({firstName:o.Z_().required("First name is require field!"),lastName:o.Z_().required("Last name is require field!"),mobile:o.Z_().matches(t,"Phone number is not valid").required("Mobile is require field!").min(10,"Phone number too short").max(10,"Phone number too long")}),x=o.Ry().shape({uId:o.Z_().required("UID is require field!"),password:o.Z_().max(15,"Max 15 symbol!").required("Password is require field!")}),p=o.Ry().shape({password:o.Z_().max(15,"Max 15 symbol!").required("Password is require field!"),cpassword:o.Z_().oneOf([o.iH("password"),null],"Passwords must match!").required("Passwords must match!")})},15224:function(e,r,s){s.r(r);var i=s(74165),a=s(15861),n=s(1413),t=s(78983),o=s(92506),l=s(72791),d=s(57689),m=s(9085),u=s(82035),c=s(96066),h=s(80184),x={"--cui-header-bg":"#E4e4e4"};r.default=function(){var e=(0,d.UO)().id,r=u.Nq.useGetUserProfile(e),s=r.isLoading,p=r.data,j=r.refetch,b={firstName:null===p||void 0===p?void 0:p.data.user.firstName,lastName:null===p||void 0===p?void 0:p.data.user.lastName,dob:null===p||void 0===p?void 0:p.data.user.dob,mobile:null===p||void 0===p?void 0:p.data.user.mobile,email:null===p||void 0===p?void 0:p.data.user.email,spouseOrFather:null===p||void 0===p?void 0:p.data.user.spouseOrFather,nomineeFirstName:null===p||void 0===p?void 0:p.data.nominee.firstName,nomineeLastName:null===p||void 0===p?void 0:p.data.nominee.lastName,nomineeDob:null===p||void 0===p?void 0:p.data.nominee.dob,nomineeRelation:null===p||void 0===p?void 0:p.data.nominee.relation,locality:null===p||void 0===p?void 0:p.data.user.locality,city:null===p||void 0===p?void 0:p.data.user.city,district:null===p||void 0===p?void 0:p.data.user.district,state:null===p||void 0===p?void 0:p.data.user.state,pin:null===p||void 0===p?void 0:p.data.user.pin,country:null===p||void 0===p?void 0:p.data.user.country},N=(0,o.TA)({initialValues:b,validationSchema:c.Z.Nq,onSubmit:function(e){return F(e)}}),f=N.values,v=N.handleChange,y=N.setValues,q=N.submitForm,C=N.errors,w=N.isValid,g=N.dirty;N.touched,N.handleBlur,(0,l.useEffect)((function(){y((0,n.Z)({},b))}),[s,p]);var P=u.Nq.useEditUser(),F=function(){var r=(0,a.Z)((0,i.Z)().mark((function r(s){var a;return(0,i.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,P.mutateAsync({id:e,body:s});case 2:200===(null===(a=r.sent)||void 0===a?void 0:a.status)&&(m.Am.success("User updated"),j());case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}();return(0,h.jsx)(t.rb,{children:(0,h.jsx)(t.b7,{xs:12,children:(0,h.jsx)(t.rb,{children:(0,h.jsx)(t.b7,{children:(0,h.jsxs)(t.xH,{className:"mb-4",children:[(0,h.jsx)(t.bn,{children:(0,h.jsx)("strong",{children:"Update Details"})}),(0,h.jsx)(t.sl,{children:(0,h.jsxs)(t.lx,{children:[(0,h.jsx)(t.rb,{children:(0,h.jsxs)(t.b7,{md:12,children:[(0,h.jsxs)(t.rb,{children:[(0,h.jsx)(t.PO,{style:x,className:"mb-3",children:(0,h.jsx)("strong",{children:"User's Personal Details"})}),(0,h.jsx)(t.b7,{md:6,children:(0,h.jsxs)("div",{className:"mb-3",children:[(0,h.jsx)(t.L8,{htmlFor:"fistNameControlInput",children:"First Name"}),(0,h.jsx)(t.jO,{type:"text",id:"fistNameControlInput",placeholder:"First Name",value:f.firstName||"",name:"firstName",onChange:v,error:C.firstName}),C&&(0,h.jsx)("p",{className:"text-danger",children:C.firstName})]})}),(0,h.jsx)(t.b7,{md:6,children:(0,h.jsxs)("div",{className:"mb-3",children:[(0,h.jsx)(t.L8,{htmlFor:"lastNameControlInput",children:"Last Name"}),(0,h.jsx)(t.jO,{type:"text",id:"lastNameControlInput",placeholder:"Last Name",value:f.lastName||"",name:"lastName",onChange:v,error:C.lastName}),C&&(0,h.jsx)("p",{className:"text-danger",children:C.lastName})]})}),(0,h.jsx)(t.b7,{md:6,children:(0,h.jsxs)("div",{className:"mb-3",children:[(0,h.jsx)(t.L8,{htmlFor:"dobFormControlInput",children:"Date Of Birth"}),(0,h.jsx)(t.jO,{type:"date",id:"dobFormControlInput",value:f.dob||"",name:"dob",onChange:v,error:C.dob}),C&&(0,h.jsx)("p",{className:"text-danger",children:C.dob})]})}),(0,h.jsx)(t.b7,{md:6,children:(0,h.jsxs)("div",{className:"mb-3",children:[(0,h.jsx)(t.L8,{htmlFor:"spouseOrFatherControlInput",children:"Father's/Spouse's Name"}),(0,h.jsx)(t.jO,{type:"text",id:"spouseOrFatherControlInput",placeholder:"Father's/Spouse Name",value:f.spouseOrFather||"",name:"spouseOrFather",onChange:v,error:C.spouseOrFather}),C&&(0,h.jsx)("p",{className:"text-danger",children:C.spouseOrFather})]})})]}),(0,h.jsxs)(t.rb,{children:[(0,h.jsx)(t.PO,{style:x,className:"mb-3",children:(0,h.jsx)("strong",{children:"User's Contact Details"})}),(0,h.jsx)(t.b7,{md:6,children:(0,h.jsxs)("div",{className:"mb-3",children:[(0,h.jsx)(t.L8,{htmlFor:"mobileControlInput",children:"Mobile Number"}),(0,h.jsx)(t.jO,{type:"text",id:"mobileControlInput",placeholder:"Mobile Number",value:f.mobile||"",name:"mobile",onChange:v,error:C.mobile}),C&&(0,h.jsx)("p",{className:"text-danger",children:C.mobile})]})})]}),(0,h.jsxs)(t.rb,{children:[(0,h.jsx)(t.PO,{style:x,className:"mb-3",children:(0,h.jsx)("strong",{children:"User Address Details"})}),(0,h.jsx)(t.b7,{md:6,children:(0,h.jsxs)("div",{className:"mb-3",children:[(0,h.jsx)(t.L8,{htmlFor:"localityControlInput",children:"House Number/Vilaage/Post Office"}),(0,h.jsx)(t.jO,{type:"text",id:"localityControlInput",placeholder:"House Number/Vilaage/Post Office",value:f.locality||"",name:"locality",onChange:v,error:C.locality}),C&&(0,h.jsx)("p",{className:"text-danger",children:C.locality})]})}),(0,h.jsx)(t.b7,{md:6,children:(0,h.jsxs)("div",{className:"mb-3",children:[(0,h.jsx)(t.L8,{htmlFor:"cityControlInput",children:"City"}),(0,h.jsx)(t.jO,{type:"text",id:"cityControlInput",placeholder:"Last Name",value:f.city||"",name:"city",onChange:v,error:C.city}),C&&(0,h.jsx)("p",{className:"text-danger",children:C.city})]})}),(0,h.jsx)(t.b7,{md:6,children:(0,h.jsxs)("div",{className:"mb-3",children:[(0,h.jsx)(t.L8,{htmlFor:"districtControlInput",children:"District"}),(0,h.jsx)(t.jO,{type:"text",id:"districtControlInput",placeholder:"District",value:f.district||"",name:"district",onChange:v,error:C.district}),C&&(0,h.jsx)("p",{className:"text-danger",children:C.district})]})}),(0,h.jsx)(t.b7,{md:6,children:(0,h.jsxs)("div",{className:"mb-3",children:[(0,h.jsx)(t.L8,{htmlFor:"stateControlInput",children:"State"}),(0,h.jsx)(t.jO,{type:"text",id:"stateControlInput",placeholder:"State",value:f.state||"",name:"state",onChange:v,error:C.state}),C&&(0,h.jsx)("p",{className:"text-danger",children:C.state})]})}),(0,h.jsx)(t.b7,{md:6,children:(0,h.jsxs)("div",{className:"mb-3",children:[(0,h.jsx)(t.L8,{htmlFor:"pinControlInput",children:"Area Pin Code"}),(0,h.jsx)(t.jO,{type:"text",id:"pinControlInput",placeholder:"Area Pin Code",value:f.pin||"",name:"pin",onChange:v,error:C.pin}),C&&(0,h.jsx)("p",{className:"text-danger",children:C.pin})]})}),(0,h.jsx)(t.b7,{md:6,children:(0,h.jsxs)("div",{className:"mb-3",children:[(0,h.jsx)(t.L8,{htmlFor:"countryControlInput",children:"Country"}),(0,h.jsx)(t.jO,{type:"text",id:"countryControlInput",placeholder:"Country",value:f.country||"",name:"country",onChange:v,error:C.country}),C&&(0,h.jsx)("p",{className:"text-danger",children:C.country})]})})]}),(0,h.jsxs)(t.rb,{children:[(0,h.jsx)(t.PO,{style:x,className:"mb-3",children:(0,h.jsx)("strong",{children:"Nominee's Details"})}),(0,h.jsx)(t.b7,{md:6,children:(0,h.jsxs)("div",{className:"mb-3",children:[(0,h.jsx)(t.L8,{htmlFor:"nomineeFirstNameControlInput",children:"First Name"}),(0,h.jsx)(t.jO,{type:"text",id:"nomineeFirstNameControlInput",placeholder:"nomineeFirstName",value:f.nomineeFirstName||"",name:"nomineeFirstName",onChange:v,error:C.nomineeFirstName}),C&&(0,h.jsx)("p",{className:"text-danger",children:C.nomineeFirstName})]})}),(0,h.jsx)(t.b7,{md:6,children:(0,h.jsxs)("div",{className:"mb-3",children:[(0,h.jsx)(t.L8,{htmlFor:"nomineeFirstNameControlInput",children:"Last Name"}),(0,h.jsx)(t.jO,{type:"text",id:"nomineeLastNameControlInput",placeholder:"nomineeLastName",value:f.nomineeLastName||"",name:"nomineeLastName",onChange:v,error:C.nomineeLastName}),C&&(0,h.jsx)("p",{className:"text-danger",children:C.nomineeLastName})]})}),(0,h.jsx)(t.b7,{md:6,children:(0,h.jsxs)("div",{className:"mb-3",children:[(0,h.jsx)(t.L8,{htmlFor:"nomineeDobControlInput",children:"Date Of Birth"}),(0,h.jsx)(t.jO,{type:"date",id:"nomineeDobControlInput",placeholder:"nomineeDob",value:f.nomineeDob||"",name:"nomineeDob",onChange:v,error:C.nomineeDob}),C&&(0,h.jsx)("p",{className:"text-danger",children:C.nomineeDob})]})}),(0,h.jsx)(t.b7,{md:6,children:(0,h.jsxs)("div",{className:"mb-3",children:[(0,h.jsx)(t.L8,{htmlFor:"nomineeRelationControlInput",children:"Relation"}),(0,h.jsx)(t.jO,{type:"text",id:"nomineeRelationControlInput",placeholder:"nomineeRelation",value:f.nomineeRelation||"",name:"nomineeRelation",onChange:v,error:C.nomineeRelation}),C&&(0,h.jsx)("p",{className:"text-danger",children:C.nomineeRelation})]})})]})]})}),(0,h.jsx)("hr",{}),(0,h.jsx)(t.rb,{children:(0,h.jsx)(t.b7,{md:6,children:(0,h.jsx)("div",{className:"d-grid gap-2 mb-3",children:(0,h.jsx)(t.u5,{color:"primary",onClick:q,disabled:!(w&&g)||P.isLoading,children:"Update Account"})})})})]})})]})})})})})}}}]);
//# sourceMappingURL=224.90a8b5de.chunk.js.map