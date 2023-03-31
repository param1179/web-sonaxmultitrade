"use strict";(self.webpackChunksonaxmultitrade=self.webpackChunksonaxmultitrade||[]).push([[191],{59836:function(e,r,s){s(72791);var a=s(78983),n=s(80184);r.Z=function(e){var r=e.color,s=e.content;return(0,n.jsxs)(a.oo,{color:r,children:[(0,n.jsxs)(a.xZ,{closeButton:!0,children:[(0,n.jsx)("svg",{className:"rounded me-2",width:"20",height:"20",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid slice",focusable:"false",role:"img",children:(0,n.jsx)("rect",{width:"100%",height:"100%",fill:"#007aff"})}),(0,n.jsx)("strong",{className:"me-auto",children:"Sonax Multitrade"}),(0,n.jsx)("small",{children:"0 min ago"})]}),(0,n.jsx)(a.S3,{children:s})]})}},96066:function(e,r,s){s.d(r,{Z:function(){return a}});var a={};s.r(a),s.d(a,{Cp:function(){return d},kC:function(){return c},r4:function(){return m},zB:function(){return o},Nq:function(){return h},ii:function(){return u}});var n=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,i=/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,l=/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,t=s(62797),o=t.Ry().shape({email:t.Z_().matches(i,"Email is not correct!").required("Email is require field!"),password:t.Z_().matches(n,"Password is not correct!").max(15,"Max 15 symbol!").required("Password is require field!")}),d=(t.Ry().shape({password:t.Z_().matches(n,"Password is not correct!").max(15,"Max 15 symbol!").required("Password is require field!"),confirmPassword:t.Z_().oneOf([t.iH("password"),null],"Passwords must match!").required("Passwords must match!")}),t.Ry().shape({email:t.Z_().matches(i,"Email is not correct!").required("Email is require field!"),password:t.Z_().matches(n,"Password is not correct!").max(15,"Max 15 symbol!").required("Password is require field!"),confirmPassword:t.Z_().oneOf([t.iH("password"),null],"Passwords must match!").required("Passwords must match!")}),t.Ry().shape({oldPassword:t.Z_().max(15,"Max 15 symbol!").required("Password is require field!"),password:t.Z_().max(15,"Max 15 symbol!").notOneOf([t.iH("oldPassword"),null],"Password should not same as old password!").required("Password is require field!"),cPassword:t.Z_().oneOf([t.iH("password"),null],"Passwords must match!").required("Passwords must match!")})),m=t.Ry().shape({firstName:t.Z_().required("First name is require field!"),lastName:t.Z_().required("Last name is require field!"),gender:t.Z_().required("Last name is require field!"),dob:t.hT().required("Date of birth required"),nomineeFirstName:t.Z_().required("First name is require field!"),nomineeLastName:t.Z_().required("First name is require field!"),nomineeDob:t.hT().required("Date of birth required"),nomineeRelation:t.Z_().required("Relation is require field!"),mobile:t.Z_().matches(l,"Phone number is not valid").required("Mobile is require field!").min(10,"Phone number too short").max(10,"Phone number too long"),email:t.Z_().matches(i,"Email is not correct!").required("Email is require field!"),password:t.Z_().max(15,"Max 15 symbol!").required("Password is require field!"),cpassword:t.Z_().oneOf([t.iH("password"),null],"Passwords must match!").required("Passwords must match!")}),c=(t.Ry().shape({code:t.Z_().max(30,"Max value 20.").required("Coupon Name is require field!"),percent:t.Rx().typeError("You must specify a number").min(1,"Min value 1.").max(100,"Max value 100.").required("This field is required!"),endDate:t.hT().min(new Date,"end date can't be before current date")}),t.Ry().shape({email:t.Z_().matches(i,"Email is not correct!").required("Email is require field!"),schoolName:t.Z_().required("Name is require field!")}),t.Ry().shape({rewardLevel:t.Z_().required("Reward Level is require field!"),onPairs:t.Rx().required("Pairs is require field!"),reward:t.Z_().required("Reward name is require field!")})),h=t.Ry().shape({firstName:t.Z_().required("First name is require field!"),lastName:t.Z_().required("Last name is require field!"),mobile:t.Z_().matches(l,"Phone number is not valid").required("Mobile is require field!").min(10,"Phone number too short").max(10,"Phone number too long")}),u=t.Ry().shape({uId:t.Z_().required("UID is require field!"),password:t.Z_().max(15,"Max 15 symbol!").required("Password is require field!")})},49191:function(e,r,s){s.r(r);var a=s(74165),n=s(15861),i=s(29439),l=s(78983),t=s(92506),o=s(72791),d=s(57689),m=s(82035),c=s(51692),h=s(96066),u=s(59836),x=s(80184),p={"--cui-header-bg":"#E4e4e4"};r.default=function(){var e=(0,d.s0)(),r=(0,o.useRef)(),s=(0,o.useState)(0),j=(0,i.Z)(s,2),b=j[0],N=j[1],f=(0,c.getProfileData)(),g=m.g8.useGetPackages(),C=g.isLoading,v=g.data,y=(0,t.TA)({initialValues:{parentId:"",sponserId:f&&f._id,packageId:null===v||void 0===v?void 0:v.data[0]._id,placement:"Left",firstName:"",lastName:"",dob:"",mobile:"",email:"",gender:"Male",activeUser:"Active",password:"",cpassword:"",spouseOrFather:"",nomineeFirstName:"",nomineeLastName:"",nomineeDob:"",nomineeRelation:"",locality:"",city:"",district:"",state:"",pin:"",country:""},validationSchema:h.Z.r4,onSubmit:function(e){return _(e)}}),w=y.values,q=y.handleChange,F=y.submitForm,I=y.errors,P=y.isValid,L=y.dirty,O=y.resetForm,Z=m.g8.useRegisterUser(),_=function(){var r=(0,n.Z)((0,a.Z)().mark((function r(s){var n,i;return(0,a.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return s.packageId=null===v||void 0===v||null===(n=v.data[0])||void 0===n?void 0:n._id,r.next=3,Z.mutateAsync(s);case 3:200===(null===(i=r.sent)||void 0===i?void 0:i.status)&&(O(),N((0,u.Z)({color:"",content:"User added!"})),e("/users"));case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}();return(0,x.jsxs)(l.rb,{children:[(0,x.jsx)(l.KF,{ref:r,push:b,placement:"top-end"}),(0,x.jsx)(l.b7,{xs:12,children:(0,x.jsx)(l.rb,{children:(0,x.jsx)(l.b7,{children:(0,x.jsxs)(l.xH,{className:"mb-4",children:[(0,x.jsx)(l.bn,{children:(0,x.jsx)("strong",{children:"Fill All Details"})}),(0,x.jsx)(l.sl,{children:(0,x.jsxs)(l.lx,{children:[(0,x.jsx)(l.rb,{children:(0,x.jsxs)(l.b7,{md:12,children:[(0,x.jsxs)(l.rb,{children:[(0,x.jsx)(l.PO,{style:p,className:"mb-3",children:(0,x.jsx)("strong",{children:"Sponser's Details"})}),(0,x.jsx)(l.b7,{md:6,children:(0,x.jsxs)("div",{className:"mb-3",children:[(0,x.jsx)(l.L8,{htmlFor:"exampleFormControlInput1",children:"Select Sponsered By"}),(0,x.jsx)(l.LX,{"aria-label":"Default select example",name:"sponserId",onChange:q,disabled:!0,children:(0,x.jsx)("option",{value:w.sponserId,children:f.firstName+" "+f.lastName})})]})}),(0,x.jsx)(l.b7,{md:6,children:(0,x.jsxs)("div",{className:"mb-3",children:[(0,x.jsx)(l.L8,{htmlFor:"placementControlInput",children:"Placement"}),(0,x.jsx)(l.EC,{type:"radio",name:"placement",id:"flexRadioDisabled1",label:"Left",value:"Left",onChange:q,defaultChecked:"Left"===w.placement}),(0,x.jsx)(l.EC,{type:"radio",name:"placement",id:"flexRadioCheckedDisabled1",label:"Right",value:"Right",onChange:q,defaultChecked:"Right"===w.placement})]})})]}),(0,x.jsxs)(l.rb,{children:[(0,x.jsx)(l.PO,{style:p,className:"mb-3",children:(0,x.jsx)("strong",{children:"User's Personal Details"})}),(0,x.jsx)(l.b7,{md:6,children:(0,x.jsxs)("div",{className:"mb-3",children:[(0,x.jsx)(l.L8,{htmlFor:"fistNameControlInput",children:"First Name"}),(0,x.jsx)(l.jO,{type:"text",id:"fistNameControlInput",placeholder:"First Name",value:w.firstName,name:"firstName",onChange:q,error:I.firstName}),I&&(0,x.jsx)("p",{className:"text-danger",children:I.firstName})]})}),(0,x.jsx)(l.b7,{md:6,children:(0,x.jsxs)("div",{className:"mb-3",children:[(0,x.jsx)(l.L8,{htmlFor:"lastNameControlInput",children:"Last Name"}),(0,x.jsx)(l.jO,{type:"text",id:"lastNameControlInput",placeholder:"Last Name",value:w.lastName,name:"lastName",onChange:q,error:I.lastName}),I&&(0,x.jsx)("p",{className:"text-danger",children:I.lastName})]})}),(0,x.jsx)(l.b7,{md:6,children:(0,x.jsxs)("div",{className:"mb-3",children:[(0,x.jsx)(l.L8,{htmlFor:"dobFormControlInput",children:"Date Of Birth"}),(0,x.jsx)(l.jO,{type:"date",id:"dobFormControlInput",value:w.dob,name:"dob",onChange:q,error:I.dob}),I&&(0,x.jsx)("p",{className:"text-danger",children:I.dob})]})}),(0,x.jsx)(l.b7,{md:6,children:(0,x.jsxs)("div",{className:"mb-3",children:[(0,x.jsx)(l.L8,{htmlFor:"spouseOrFatherControlInput",children:"Father's/Spouse's Name"}),(0,x.jsx)(l.jO,{type:"text",id:"spouseOrFatherControlInput",placeholder:"Father's/Spouse Name",value:w.spouseOrFather,name:"spouseOrFather",onChange:q,error:I.spouseOrFather}),I&&(0,x.jsx)("p",{className:"text-danger",children:I.spouseOrFather})]})}),(0,x.jsx)(l.b7,{md:6,children:(0,x.jsxs)("div",{className:"mb-3",children:[(0,x.jsx)(l.L8,{htmlFor:"genderControlInput",children:"Gender"}),(0,x.jsx)(l.EC,{type:"radio",name:"gender",id:"genderControlInput1",label:"Male",value:"Male",onChange:q,defaultChecked:"Male"===w.gender}),(0,x.jsx)(l.EC,{type:"radio",name:"gender",id:"genderControlInput2",label:"Female",value:"Female",onChange:q,defaultChecked:"Female"===w.gender})]})})]}),(0,x.jsxs)(l.rb,{children:[(0,x.jsx)(l.PO,{style:p,className:"mb-3",children:(0,x.jsx)("strong",{children:"User's Contact Details"})}),(0,x.jsx)(l.b7,{md:6,children:(0,x.jsxs)("div",{className:"mb-3",children:[(0,x.jsx)(l.L8,{htmlFor:"mobileControlInput",children:"Mobile Number"}),(0,x.jsx)(l.jO,{type:"text",id:"mobileControlInput",placeholder:"Mobile Number",value:w.mobile,name:"mobile",onChange:q,error:I.mobile}),I&&(0,x.jsx)("p",{className:"text-danger",children:I.mobile})]})}),(0,x.jsx)(l.b7,{md:6,children:(0,x.jsxs)("div",{className:"mb-3",children:[(0,x.jsx)(l.L8,{htmlFor:"emailControlInput",children:"Email Id"}),(0,x.jsx)(l.jO,{type:"text",id:"emailControlInput",placeholder:"Email Id",value:w.email,name:"email",onChange:q,error:I.email}),I&&(0,x.jsx)("p",{className:"text-danger",children:I.email})]})})]}),(0,x.jsxs)(l.rb,{children:[(0,x.jsx)(l.PO,{style:p,className:"mb-3",children:(0,x.jsx)("strong",{children:"User Address Details"})}),(0,x.jsx)(l.b7,{md:6,children:(0,x.jsxs)("div",{className:"mb-3",children:[(0,x.jsx)(l.L8,{htmlFor:"localityControlInput",children:"House Number/Vilaage/Post Office"}),(0,x.jsx)(l.jO,{type:"text",id:"localityControlInput",placeholder:"House Number/Vilaage/Post Office",value:w.locality,name:"locality",onChange:q,error:I.locality}),I&&(0,x.jsx)("p",{className:"text-danger",children:I.locality})]})}),(0,x.jsx)(l.b7,{md:6,children:(0,x.jsxs)("div",{className:"mb-3",children:[(0,x.jsx)(l.L8,{htmlFor:"cityControlInput",children:"City"}),(0,x.jsx)(l.jO,{type:"text",id:"cityControlInput",placeholder:"Last Name",value:w.city,name:"city",onChange:q,error:I.city}),I&&(0,x.jsx)("p",{className:"text-danger",children:I.city})]})}),(0,x.jsx)(l.b7,{md:6,children:(0,x.jsxs)("div",{className:"mb-3",children:[(0,x.jsx)(l.L8,{htmlFor:"districtControlInput",children:"District"}),(0,x.jsx)(l.jO,{type:"text",id:"districtControlInput",placeholder:"District",value:w.district,name:"district",onChange:q,error:I.district}),I&&(0,x.jsx)("p",{className:"text-danger",children:I.district})]})}),(0,x.jsx)(l.b7,{md:6,children:(0,x.jsxs)("div",{className:"mb-3",children:[(0,x.jsx)(l.L8,{htmlFor:"stateControlInput",children:"State"}),(0,x.jsx)(l.jO,{type:"text",id:"stateControlInput",placeholder:"State",value:w.state,name:"state",onChange:q,error:I.state}),I&&(0,x.jsx)("p",{className:"text-danger",children:I.state})]})}),(0,x.jsx)(l.b7,{md:6,children:(0,x.jsxs)("div",{className:"mb-3",children:[(0,x.jsx)(l.L8,{htmlFor:"pinControlInput",children:"Area Pin Code"}),(0,x.jsx)(l.jO,{type:"text",id:"pinControlInput",placeholder:"Area Pin Code",value:w.pin,name:"pin",onChange:q,error:I.pin}),I&&(0,x.jsx)("p",{className:"text-danger",children:I.pin})]})}),(0,x.jsx)(l.b7,{md:6,children:(0,x.jsxs)("div",{className:"mb-3",children:[(0,x.jsx)(l.L8,{htmlFor:"countryControlInput",children:"Country"}),(0,x.jsx)(l.jO,{type:"text",id:"countryControlInput",placeholder:"Country",value:w.country,name:"country",onChange:q,error:I.country}),I&&(0,x.jsx)("p",{className:"text-danger",children:I.country})]})})]}),(0,x.jsxs)(l.rb,{children:[(0,x.jsx)(l.PO,{style:p,className:"mb-3",children:(0,x.jsx)("strong",{children:"Nominee's Details"})}),(0,x.jsx)(l.b7,{md:6,children:(0,x.jsxs)("div",{className:"mb-3",children:[(0,x.jsx)(l.L8,{htmlFor:"nomineeFirstNameControlInput",children:"First Name"}),(0,x.jsx)(l.jO,{type:"text",id:"nomineeFirstNameControlInput",placeholder:"First Name",value:w.nomineeFirstName,name:"nomineeFirstName",onChange:q,error:I.nomineeFirstName}),I&&(0,x.jsx)("p",{className:"text-danger",children:I.nomineeFirstName})]})}),(0,x.jsx)(l.b7,{md:6,children:(0,x.jsxs)("div",{className:"mb-3",children:[(0,x.jsx)(l.L8,{htmlFor:"nomineeFirstNameControlInput",children:"Last Name"}),(0,x.jsx)(l.jO,{type:"text",id:"nomineeLastNameControlInput",placeholder:"Last Name",value:w.nomineeLastName,name:"nomineeLastName",onChange:q,error:I.nomineeLastName}),I&&(0,x.jsx)("p",{className:"text-danger",children:I.nomineeLastName})]})}),(0,x.jsx)(l.b7,{md:6,children:(0,x.jsxs)("div",{className:"mb-3",children:[(0,x.jsx)(l.L8,{htmlFor:"nomineeDobControlInput",children:"Date Of Birth"}),(0,x.jsx)(l.jO,{type:"date",id:"nomineeDobControlInput",placeholder:"Dob",value:w.nomineeDob,name:"nomineeDob",onChange:q,error:I.nomineeDob}),I&&(0,x.jsx)("p",{className:"text-danger",children:I.nomineeDob})]})}),(0,x.jsx)(l.b7,{md:6,children:(0,x.jsxs)("div",{className:"mb-3",children:[(0,x.jsx)(l.L8,{htmlFor:"nomineeRelationControlInput",children:"Relation"}),(0,x.jsx)(l.jO,{type:"text",id:"nomineeRelationControlInput",placeholder:"Relation",value:w.nomineeRelation,name:"nomineeRelation",onChange:q,error:I.nomineeRelation}),I&&(0,x.jsx)("p",{className:"text-danger",children:I.nomineeRelation})]})})]}),(0,x.jsxs)(l.rb,{children:[(0,x.jsx)(l.PO,{style:p,className:"mb-3",children:(0,x.jsx)("strong",{children:"Select Any Package"})}),(0,x.jsx)(l.b7,{md:6,children:(0,x.jsxs)("div",{className:"mb-3",children:[(0,x.jsx)(l.L8,{htmlFor:"planFormControlInput",children:"Select Package"}),(0,x.jsx)(l.LX,{id:"planFormControlInput","aria-label":"Default select example",name:"packageId",onChange:q,disabled:!0,children:(0,x.jsx)("option",{value:w.packageId,children:!C&&(null===v||void 0===v?void 0:v.data[0].name)})}),I&&(0,x.jsx)("p",{className:"text-danger",children:I.packageId})]})})]}),(0,x.jsxs)(l.rb,{children:[(0,x.jsx)(l.PO,{style:p,className:"mb-3",children:(0,x.jsx)("strong",{children:"Set Password"})}),(0,x.jsx)(l.b7,{md:6,children:(0,x.jsxs)("div",{className:"mb-3",children:[(0,x.jsx)(l.L8,{htmlFor:"passwordControlInput",children:"Password"}),(0,x.jsx)(l.jO,{type:"password",id:"passwordControlInput",placeholder:"password",value:w.password,name:"password",onChange:q,error:I.password}),I&&(0,x.jsx)("p",{className:"text-danger",children:I.password})]})}),(0,x.jsx)(l.b7,{md:6,children:(0,x.jsxs)("div",{className:"mb-3",children:[(0,x.jsx)(l.L8,{htmlFor:"cpasswordControlInput",children:"Confirm Password"}),(0,x.jsx)(l.jO,{type:"password",id:"cpasswordControlInput",placeholder:"cpassword",value:w.cpassword,name:"cpassword",onChange:q,error:I.cpassword}),I&&(0,x.jsx)("p",{className:"text-danger",children:I.cpassword})]})})]})]})}),(0,x.jsx)("hr",{}),(0,x.jsx)(l.rb,{children:(0,x.jsx)(l.b7,{md:6,children:(0,x.jsx)("div",{className:"d-grid gap-2 mb-3",children:(0,x.jsx)(l.u5,{color:"primary",onClick:F,disabled:!(P&&L)||Z.isLoading,children:"Create Account"})})})})]})})]})})})})]})}}}]);
//# sourceMappingURL=191.8f66b177.chunk.js.map