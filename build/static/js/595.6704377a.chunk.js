"use strict";(self.webpackChunksonaxmultitrade=self.webpackChunksonaxmultitrade||[]).push([[595],{59836:function(e,r,s){s(72791);var a=s(78983),n=s(80184);r.Z=function(e){var r=e.color,s=e.content;return(0,n.jsxs)(a.oo,{color:r,children:[(0,n.jsxs)(a.xZ,{closeButton:!0,children:[(0,n.jsx)("svg",{className:"rounded me-2",width:"20",height:"20",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid slice",focusable:"false",role:"img",children:(0,n.jsx)("rect",{width:"100%",height:"100%",fill:"#007aff"})}),(0,n.jsx)("strong",{className:"me-auto",children:"Sonax Multitrade"}),(0,n.jsx)("small",{children:"0 min ago"})]}),(0,n.jsx)(a.S3,{children:s})]})}},96066:function(e,r,s){s.d(r,{Z:function(){return a}});var a={};s.r(a),s.d(a,{Cp:function(){return o},kC:function(){return c},r4:function(){return m},zB:function(){return d},ii:function(){return h}});var n=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,i=/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,l=/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,t=s(62797),d=t.Ry().shape({email:t.Z_().matches(i,"Email is not correct!").required("Email is require field!"),password:t.Z_().matches(n,"Password is not correct!").max(15,"Max 15 symbol!").required("Password is require field!")}),o=(t.Ry().shape({password:t.Z_().matches(n,"Password is not correct!").max(15,"Max 15 symbol!").required("Password is require field!"),confirmPassword:t.Z_().oneOf([t.iH("password"),null],"Passwords must match!").required("Passwords must match!")}),t.Ry().shape({email:t.Z_().matches(i,"Email is not correct!").required("Email is require field!"),password:t.Z_().matches(n,"Password is not correct!").max(15,"Max 15 symbol!").required("Password is require field!"),confirmPassword:t.Z_().oneOf([t.iH("password"),null],"Passwords must match!").required("Passwords must match!")}),t.Ry().shape({oldPassword:t.Z_().max(15,"Max 15 symbol!").required("Password is require field!"),password:t.Z_().max(15,"Max 15 symbol!").notOneOf([t.iH("oldPassword"),null],"Password should not same as old password!").required("Password is require field!"),cPassword:t.Z_().oneOf([t.iH("password"),null],"Passwords must match!").required("Passwords must match!")})),m=t.Ry().shape({firstName:t.Z_().required("First name is require field!"),lastName:t.Z_().required("Last name is require field!"),gender:t.Z_().required("Last name is require field!"),dob:t.hT().required("Date of birth required"),nomineeFirstName:t.Z_().required("First name is require field!"),nomineeLastName:t.Z_().required("First name is require field!"),nomineeDob:t.hT().required("Date of birth required"),nomineeRelation:t.Z_().required("Relation is require field!"),mobile:t.Z_().matches(l,"Phone number is not valid").required("Mobile is require field!").min(10,"Phone number too short").max(10,"Phone number too long"),email:t.Z_().matches(i,"Email is not correct!").required("Email is require field!"),password:t.Z_().max(15,"Max 15 symbol!").required("Password is require field!"),cpassword:t.Z_().oneOf([t.iH("password"),null],"Passwords must match!").required("Passwords must match!")}),c=(t.Ry().shape({code:t.Z_().max(30,"Max value 20.").required("Coupon Name is require field!"),percent:t.Rx().typeError("You must specify a number").min(1,"Min value 1.").max(100,"Max value 100.").required("This field is required!"),endDate:t.hT().min(new Date,"end date can't be before current date")}),t.Ry().shape({email:t.Z_().matches(i,"Email is not correct!").required("Email is require field!"),schoolName:t.Z_().required("Name is require field!")}),t.Ry().shape({rewardLevel:t.Z_().required("Reward Level is require field!"),onPairs:t.Rx().required("Pairs is require field!"),reward:t.Z_().required("Reward name is require field!")})),h=t.Ry().shape({uId:t.Z_().required("UID is require field!"),password:t.Z_().max(15,"Max 15 symbol!").required("Password is require field!")})},91595:function(e,r,s){s.r(r);var a=s(74165),n=s(15861),i=s(29439),l=s(78983),t=s(92506),d=s(72791),o=s(57689),m=s(82035),c=s(51692),h=s(96066),u=s(59836),x=s(80184),p={"--cui-header-bg":"#E4e4e4"};r.default=function(){var e,r=(0,o.s0)(),s=(0,d.useRef)(),j=(0,d.useState)(0),b=(0,i.Z)(j,2),N=b[0],f=b[1],C=(0,o.TH)().state,g=(0,d.useState)(!1),v=(0,i.Z)(g,2),y=(v[0],v[1],(0,c.getProfileData)()),w=m.g8.useGetPackages(),F=w.isLoading,q=w.data,I=(0,t.TA)({initialValues:{parentId:null!==C&&void 0!==C&&C.pId?C.pId:y&&y._id,sponserId:y&&y._id,packageId:null===q||void 0===q||null===(e=q.data[0])||void 0===e?void 0:e._id,placement:null!==C&&void 0!==C&&C.placement?C.placement:"Left",firstName:"",lastName:"",dob:"",mobile:"",email:"",gender:"Male",activeUser:"Active",password:"",cpassword:"",spouseOrFather:"",nomineeFirstName:"",nomineeLastName:"",nomineeDob:"",nomineeRelation:"",locality:"",city:"",district:"",state:"",pin:"",country:""},validationSchema:h.Z.r4,onSubmit:function(e){return M(e)}}),P=I.values,L=I.handleChange,O=I.submitForm,Z=I.errors,_=I.isValid,R=I.dirty,D=I.resetForm,k=(I.setFieldValue,m.g8.useCreateUser()),M=function(){var e=(0,n.Z)((0,a.Z)().mark((function e(s){var n,i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.packageId=null===q||void 0===q||null===(n=q.data[0])||void 0===n?void 0:n._id,e.next=3,k.mutateAsync(s);case 3:200===(null===(i=e.sent)||void 0===i?void 0:i.status)&&(D(),f((0,u.Z)({color:"",content:"User added!"})),r("/users"));case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();return(0,x.jsxs)(l.rb,{children:[(0,x.jsx)(l.KF,{ref:s,push:N,placement:"top-end"}),(0,x.jsx)(l.b7,{xs:12,children:(0,x.jsx)(l.rb,{children:(0,x.jsx)(l.b7,{children:(0,x.jsxs)(l.xH,{className:"mb-4",children:[(0,x.jsx)(l.bn,{children:(0,x.jsx)("strong",{children:"Fill All Details"})}),(0,x.jsx)(l.sl,{children:(0,x.jsxs)(l.lx,{children:[(0,x.jsx)(l.rb,{children:(0,x.jsxs)(l.b7,{md:12,children:[(0,x.jsxs)(l.rb,{children:[(0,x.jsx)(l.PO,{style:p,className:"mb-3",children:(0,x.jsx)("strong",{children:"Sponser's Details"})}),(0,x.jsx)(l.b7,{md:6,children:(0,x.jsxs)("div",{className:"mb-3",children:[(0,x.jsx)(l.L8,{htmlFor:"exampleFormControlInput1",children:"Select Sponsered By"}),(0,x.jsx)(l.LX,{"aria-label":"Default select example",name:"sponserId",onChange:L,disabled:!0,children:(0,x.jsx)("option",{value:P.sponserId,children:y.firstName+" "+y.lastName})})]})}),(0,x.jsx)(l.b7,{md:6,children:(0,x.jsxs)("div",{className:"mb-3",children:[(0,x.jsx)(l.L8,{htmlFor:"placementControlInput",children:"Placement"}),(0,x.jsx)(l.EC,{type:"radio",name:"placement",id:"flexRadioDisabled1",label:"Left",value:"Left",onChange:L,disabled:!0,defaultChecked:"Left"===P.placement}),(0,x.jsx)(l.EC,{type:"radio",name:"placement",id:"flexRadioCheckedDisabled1",label:"Right",value:"Right",onChange:L,disabled:!0,defaultChecked:"Right"===P.placement})]})})]}),(0,x.jsxs)(l.rb,{children:[(0,x.jsx)(l.PO,{style:p,className:"mb-3",children:(0,x.jsx)("strong",{children:"User's Personal Details"})}),(0,x.jsx)(l.b7,{md:6,children:(0,x.jsxs)("div",{className:"mb-3",children:[(0,x.jsx)(l.L8,{htmlFor:"fistNameControlInput",children:"First Name"}),(0,x.jsx)(l.jO,{type:"text",id:"fistNameControlInput",placeholder:"First Name",value:P.firstName,name:"firstName",onChange:L,error:Z.firstName}),Z&&(0,x.jsx)("p",{className:"text-danger",children:Z.firstName})]})}),(0,x.jsx)(l.b7,{md:6,children:(0,x.jsxs)("div",{className:"mb-3",children:[(0,x.jsx)(l.L8,{htmlFor:"lastNameControlInput",children:"Last Name"}),(0,x.jsx)(l.jO,{type:"text",id:"lastNameControlInput",placeholder:"Last Name",value:P.lastName,name:"lastName",onChange:L,error:Z.lastName}),Z&&(0,x.jsx)("p",{className:"text-danger",children:Z.lastName})]})}),(0,x.jsx)(l.b7,{md:6,children:(0,x.jsxs)("div",{className:"mb-3",children:[(0,x.jsx)(l.L8,{htmlFor:"dobFormControlInput",children:"Date Of Birth"}),(0,x.jsx)(l.jO,{type:"date",id:"dobFormControlInput",value:P.dob,name:"dob",onChange:L,error:Z.dob}),Z&&(0,x.jsx)("p",{className:"text-danger",children:Z.dob})]})}),(0,x.jsx)(l.b7,{md:6,children:(0,x.jsxs)("div",{className:"mb-3",children:[(0,x.jsx)(l.L8,{htmlFor:"spouseOrFatherControlInput",children:"Father's/Spouse's Name"}),(0,x.jsx)(l.jO,{type:"text",id:"spouseOrFatherControlInput",placeholder:"Father's/Spouse Name",value:P.spouseOrFather,name:"spouseOrFather",onChange:L,error:Z.spouseOrFather}),Z&&(0,x.jsx)("p",{className:"text-danger",children:Z.spouseOrFather})]})}),(0,x.jsx)(l.b7,{md:6,children:(0,x.jsxs)("div",{className:"mb-3",children:[(0,x.jsx)(l.L8,{htmlFor:"genderControlInput",children:"Gender"}),(0,x.jsx)(l.EC,{type:"radio",name:"gender",id:"genderControlInput1",label:"Male",value:"Male",onChange:L,defaultChecked:"Male"===P.gender}),(0,x.jsx)(l.EC,{type:"radio",name:"gender",id:"genderControlInput2",label:"Female",value:"Female",onChange:L,defaultChecked:"Female"===P.gender})]})})]}),(0,x.jsxs)(l.rb,{children:[(0,x.jsx)(l.PO,{style:p,className:"mb-3",children:(0,x.jsx)("strong",{children:"User's Contact Details"})}),(0,x.jsx)(l.b7,{md:6,children:(0,x.jsxs)("div",{className:"mb-3",children:[(0,x.jsx)(l.L8,{htmlFor:"mobileControlInput",children:"Mobile Number"}),(0,x.jsx)(l.jO,{type:"text",id:"mobileControlInput",placeholder:"Mobile Number",value:P.mobile,name:"mobile",onChange:L,error:Z.mobile}),Z&&(0,x.jsx)("p",{className:"text-danger",children:Z.mobile})]})}),(0,x.jsx)(l.b7,{md:6,children:(0,x.jsxs)("div",{className:"mb-3",children:[(0,x.jsx)(l.L8,{htmlFor:"emailControlInput",children:"Email Id"}),(0,x.jsx)(l.jO,{type:"text",id:"emailControlInput",placeholder:"Email Id",value:P.email,name:"email",onChange:L,error:Z.email}),Z&&(0,x.jsx)("p",{className:"text-danger",children:Z.email})]})})]}),(0,x.jsxs)(l.rb,{children:[(0,x.jsx)(l.PO,{style:p,className:"mb-3",children:(0,x.jsx)("strong",{children:"User Address Details"})}),(0,x.jsx)(l.b7,{md:6,children:(0,x.jsxs)("div",{className:"mb-3",children:[(0,x.jsx)(l.L8,{htmlFor:"localityControlInput",children:"House Number/Vilaage/Post Office"}),(0,x.jsx)(l.jO,{type:"text",id:"localityControlInput",placeholder:"House Number/Vilaage/Post Office",value:P.locality,name:"locality",onChange:L,error:Z.locality}),Z&&(0,x.jsx)("p",{className:"text-danger",children:Z.locality})]})}),(0,x.jsx)(l.b7,{md:6,children:(0,x.jsxs)("div",{className:"mb-3",children:[(0,x.jsx)(l.L8,{htmlFor:"cityControlInput",children:"City"}),(0,x.jsx)(l.jO,{type:"text",id:"cityControlInput",placeholder:"Last Name",value:P.city,name:"city",onChange:L,error:Z.city}),Z&&(0,x.jsx)("p",{className:"text-danger",children:Z.city})]})}),(0,x.jsx)(l.b7,{md:6,children:(0,x.jsxs)("div",{className:"mb-3",children:[(0,x.jsx)(l.L8,{htmlFor:"districtControlInput",children:"District"}),(0,x.jsx)(l.jO,{type:"text",id:"districtControlInput",placeholder:"District",value:P.district,name:"district",onChange:L,error:Z.district}),Z&&(0,x.jsx)("p",{className:"text-danger",children:Z.district})]})}),(0,x.jsx)(l.b7,{md:6,children:(0,x.jsxs)("div",{className:"mb-3",children:[(0,x.jsx)(l.L8,{htmlFor:"stateControlInput",children:"State"}),(0,x.jsx)(l.jO,{type:"text",id:"stateControlInput",placeholder:"State",value:P.state,name:"state",onChange:L,error:Z.state}),Z&&(0,x.jsx)("p",{className:"text-danger",children:Z.state})]})}),(0,x.jsx)(l.b7,{md:6,children:(0,x.jsxs)("div",{className:"mb-3",children:[(0,x.jsx)(l.L8,{htmlFor:"pinControlInput",children:"Area Pin Code"}),(0,x.jsx)(l.jO,{type:"text",id:"pinControlInput",placeholder:"Area Pin Code",value:P.pin,name:"pin",onChange:L,error:Z.pin}),Z&&(0,x.jsx)("p",{className:"text-danger",children:Z.pin})]})}),(0,x.jsx)(l.b7,{md:6,children:(0,x.jsxs)("div",{className:"mb-3",children:[(0,x.jsx)(l.L8,{htmlFor:"countryControlInput",children:"Country"}),(0,x.jsx)(l.jO,{type:"text",id:"countryControlInput",placeholder:"Country",value:P.country,name:"country",onChange:L,error:Z.country}),Z&&(0,x.jsx)("p",{className:"text-danger",children:Z.country})]})})]}),(0,x.jsxs)(l.rb,{children:[(0,x.jsx)(l.PO,{style:p,className:"mb-3",children:(0,x.jsx)("strong",{children:"Nominee's Details"})}),(0,x.jsx)(l.b7,{md:6,children:(0,x.jsxs)("div",{className:"mb-3",children:[(0,x.jsx)(l.L8,{htmlFor:"nomineeFirstNameControlInput",children:"First Name"}),(0,x.jsx)(l.jO,{type:"text",id:"nomineeFirstNameControlInput",placeholder:"First Name",value:P.nomineeFirstName,name:"nomineeFirstName",onChange:L,error:Z.nomineeFirstName}),Z&&(0,x.jsx)("p",{className:"text-danger",children:Z.nomineeFirstName})]})}),(0,x.jsx)(l.b7,{md:6,children:(0,x.jsxs)("div",{className:"mb-3",children:[(0,x.jsx)(l.L8,{htmlFor:"nomineeFirstNameControlInput",children:"Last Name"}),(0,x.jsx)(l.jO,{type:"text",id:"nomineeLastNameControlInput",placeholder:"Last Name",value:P.nomineeLastName,name:"nomineeLastName",onChange:L,error:Z.nomineeLastName}),Z&&(0,x.jsx)("p",{className:"text-danger",children:Z.nomineeLastName})]})}),(0,x.jsx)(l.b7,{md:6,children:(0,x.jsxs)("div",{className:"mb-3",children:[(0,x.jsx)(l.L8,{htmlFor:"nomineeDobControlInput",children:"Date Of Birth"}),(0,x.jsx)(l.jO,{type:"date",id:"nomineeDobControlInput",placeholder:"Dob",value:P.nomineeDob,name:"nomineeDob",onChange:L,error:Z.nomineeDob}),Z&&(0,x.jsx)("p",{className:"text-danger",children:Z.nomineeDob})]})}),(0,x.jsx)(l.b7,{md:6,children:(0,x.jsxs)("div",{className:"mb-3",children:[(0,x.jsx)(l.L8,{htmlFor:"nomineeRelationControlInput",children:"Relation"}),(0,x.jsx)(l.jO,{type:"text",id:"nomineeRelationControlInput",placeholder:"Relation",value:P.nomineeRelation,name:"nomineeRelation",onChange:L,error:Z.nomineeRelation}),Z&&(0,x.jsx)("p",{className:"text-danger",children:Z.nomineeRelation})]})})]}),(0,x.jsxs)(l.rb,{children:[(0,x.jsx)(l.PO,{style:p,className:"mb-3",children:(0,x.jsx)("strong",{children:"Select Any Package"})}),(0,x.jsx)(l.b7,{md:6,children:(0,x.jsxs)("div",{className:"mb-3",children:[(0,x.jsx)(l.L8,{htmlFor:"planFormControlInput",children:"Select Package"}),(0,x.jsx)(l.LX,{id:"planFormControlInput","aria-label":"Default select example",name:"packageId",onChange:L,disabled:!0,children:(0,x.jsx)("option",{value:P.packageId,children:!F&&(null===q||void 0===q?void 0:q.data[0].name)})}),Z&&(0,x.jsx)("p",{className:"text-danger",children:Z.packageId})]})})]}),(0,x.jsxs)(l.rb,{children:[(0,x.jsx)(l.PO,{style:p,className:"mb-3",children:(0,x.jsx)("strong",{children:"Set Password"})}),(0,x.jsx)(l.b7,{md:6,children:(0,x.jsxs)("div",{className:"mb-3",children:[(0,x.jsx)(l.L8,{htmlFor:"passwordControlInput",children:"Password"}),(0,x.jsx)(l.jO,{type:"password",id:"passwordControlInput",placeholder:"password",value:P.password,name:"password",onChange:L,error:Z.password}),Z&&(0,x.jsx)("p",{className:"text-danger",children:Z.password})]})}),(0,x.jsx)(l.b7,{md:6,children:(0,x.jsxs)("div",{className:"mb-3",children:[(0,x.jsx)(l.L8,{htmlFor:"cpasswordControlInput",children:"Confirm Password"}),(0,x.jsx)(l.jO,{type:"password",id:"cpasswordControlInput",placeholder:"cpassword",value:P.cpassword,name:"cpassword",onChange:L,error:Z.cpassword}),Z&&(0,x.jsx)("p",{className:"text-danger",children:Z.cpassword})]})})]})]})}),(0,x.jsx)("hr",{}),(0,x.jsx)(l.rb,{children:(0,x.jsx)(l.b7,{md:6,children:(0,x.jsx)("div",{className:"d-grid gap-2 mb-3",children:(0,x.jsx)(l.u5,{color:"primary",onClick:O,disabled:!(_&&R)||k.isLoading,children:"Create Account"})})})})]})})]})})})})]})}}}]);
//# sourceMappingURL=595.6704377a.chunk.js.map