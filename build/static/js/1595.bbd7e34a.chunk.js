"use strict";(self.webpackChunksonaxmultitrade=self.webpackChunksonaxmultitrade||[]).push([[1595],{96066:function(e,r,s){s.d(r,{Z:function(){return a}});var a={};s.r(a),s.d(a,{Fr:function(){return m},TX:function(){return c},r4:function(){return o},zB:function(){return d},ii:function(){return h}});var n=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,i=/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,l=/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,t=s(81724),d=t.Ry().shape({email:t.Z_().matches(i,"Email is not correct!").required("Email is require field!"),password:t.Z_().matches(n,"Password is not correct!").max(15,"Max 15 symbol!").required("Password is require field!")}),o=(t.Ry().shape({password:t.Z_().matches(n,"Password is not correct!").max(15,"Max 15 symbol!").required("Password is require field!"),confirmPassword:t.Z_().oneOf([t.iH("password"),null],"Passwords must match!").required("Passwords must match!")}),t.Ry().shape({email:t.Z_().matches(i,"Email is not correct!").required("Email is require field!"),password:t.Z_().matches(n,"Password is not correct!").max(15,"Max 15 symbol!").required("Password is require field!"),confirmPassword:t.Z_().oneOf([t.iH("password"),null],"Passwords must match!").required("Passwords must match!")}),t.Ry().shape({firstName:t.Z_().required("First name is require field!"),lastName:t.Z_().required("Last name is require field!"),gender:t.Z_().required("Last name is require field!"),dob:t.hT().required("Date of birth required"),nomineeFirstName:t.Z_().required("First name is require field!"),nomineeLastName:t.Z_().required("First name is require field!"),nomineeDob:t.hT().required("Date of birth required"),nomineeRelation:t.Z_().required("Relation is require field!"),mobile:t.Z_().matches(l,"Phone number is not valid").required("Mobile is require field!").min(10,"Phone number too short").max(10,"Phone number too long"),email:t.Z_().matches(i,"Email is not correct!").required("Email is require field!"),password:t.Z_().max(15,"Max 15 symbol!").required("Password is require field!"),cpassword:t.Z_().oneOf([t.iH("password"),null],"Passwords must match!").required("Passwords must match!")})),m=t.Ry().shape({code:t.Z_().max(30,"Max value 20.").required("Coupon Name is require field!"),percent:t.Rx().typeError("You must specify a number").min(1,"Min value 1.").max(100,"Max value 100.").required("This field is required!"),endDate:t.hT().min(new Date,"end date can't be before current date")}),c=t.Ry().shape({email:t.Z_().matches(i,"Email is not correct!").required("Email is require field!"),schoolName:t.Z_().required("Name is require field!")}),h=t.Ry().shape({uId:t.Z_().required("UID is require field!"),password:t.Z_().max(15,"Max 15 symbol!").required("Password is require field!")})},91595:function(e,r,s){s.r(r);var a=s(74165),n=s(15861),i=s(29439),l=s(78983),t=s(92506),d=s(72791),o=s(57689),m=s(9724),c=s(51692),h=s(96066),u=s(80184),x={"--cui-header-bg":"#E4e4e4"};r.default=function(){var e=(0,o.TH)().state,r=(0,d.useState)(!1),s=(0,i.Z)(r,2),p=(s[0],s[1],(0,c.getProfileData)()),j=m.N.useGetPackages(),b=j.isLoading,N=j.data,C=(0,t.TA)({initialValues:{parentId:null!==e&&void 0!==e&&e.pId?e.pId:p&&p._id,sponserId:p&&p._id,packageId:null===N||void 0===N?void 0:N.data[0]._id,placement:null!==e&&void 0!==e&&e.placement?e.placement:"Left",firstName:"",lastName:"",dob:"",mobile:"",email:"",gender:"Male",activeUser:"Active",password:"",cpassword:"",spouseOrFather:"",nomineeFirstName:"",nomineeLastName:"",nomineeDob:"",nomineeRelation:"",locality:"",city:"",district:"",state:"",pin:"",country:""},validationSchema:h.Z.r4,onSubmit:function(e){return L(e)}}),g=C.values,f=C.handleChange,y=C.submitForm,v=C.errors,F=C.isValid,I=C.dirty,w=C.resetForm,q=(C.setFieldValue,m.N.useCreateAdminUser()),L=function(){var e=(0,n.Z)((0,a.Z)().mark((function e(r){var s;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.mutateAsync(r);case 2:200===(null===(s=e.sent)||void 0===s?void 0:s.status)&&w();case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();return(0,u.jsx)(l.rb,{children:(0,u.jsx)(l.b7,{xs:12,children:(0,u.jsx)(l.rb,{children:(0,u.jsx)(l.b7,{children:(0,u.jsxs)(l.xH,{className:"mb-4",children:[(0,u.jsx)(l.bn,{children:(0,u.jsx)("strong",{children:"Fill All Details"})}),(0,u.jsx)(l.sl,{children:(0,u.jsxs)(l.lx,{children:[(0,u.jsx)(l.rb,{children:(0,u.jsxs)(l.b7,{md:12,children:[(0,u.jsxs)(l.rb,{children:[(0,u.jsx)(l.PO,{style:x,className:"mb-3",children:(0,u.jsx)("strong",{children:"Sponser's Details"})}),(0,u.jsx)(l.b7,{md:6,children:(0,u.jsxs)("div",{className:"mb-3",children:[(0,u.jsx)(l.L8,{htmlFor:"exampleFormControlInput1",children:"Select Sponsered By"}),(0,u.jsx)(l.LX,{"aria-label":"Default select example",name:"sponserId",onChange:f,disabled:!0,children:(0,u.jsx)("option",{value:g.sponserId,children:p.firstName+" "+p.lastName})})]})}),(0,u.jsx)(l.b7,{md:6,children:(0,u.jsxs)("div",{className:"mb-3",children:[(0,u.jsx)(l.L8,{htmlFor:"placementControlInput",children:"Placement"}),(0,u.jsx)(l.EC,{type:"radio",name:"placement",id:"flexRadioDisabled1",label:"Left",value:"Left",onChange:f,disabled:!0,defaultChecked:"Left"===g.placement}),(0,u.jsx)(l.EC,{type:"radio",name:"placement",id:"flexRadioCheckedDisabled1",label:"Right",value:"Right",onChange:f,disabled:!0,defaultChecked:"Right"===g.placement})]})})]}),(0,u.jsxs)(l.rb,{children:[(0,u.jsx)(l.PO,{style:x,className:"mb-3",children:(0,u.jsx)("strong",{children:"User's Personal Details"})}),(0,u.jsx)(l.b7,{md:6,children:(0,u.jsxs)("div",{className:"mb-3",children:[(0,u.jsx)(l.L8,{htmlFor:"fistNameControlInput",children:"First Name"}),(0,u.jsx)(l.jO,{type:"text",id:"fistNameControlInput",placeholder:"First Name",value:g.firstName,name:"firstName",onChange:f,error:v.firstName}),v&&(0,u.jsx)("p",{className:"text-danger",children:v.firstName})]})}),(0,u.jsx)(l.b7,{md:6,children:(0,u.jsxs)("div",{className:"mb-3",children:[(0,u.jsx)(l.L8,{htmlFor:"lastNameControlInput",children:"Last Name"}),(0,u.jsx)(l.jO,{type:"text",id:"lastNameControlInput",placeholder:"Last Name",value:g.lastName,name:"lastName",onChange:f,error:v.lastName}),v&&(0,u.jsx)("p",{className:"text-danger",children:v.lastName})]})}),(0,u.jsx)(l.b7,{md:6,children:(0,u.jsxs)("div",{className:"mb-3",children:[(0,u.jsx)(l.L8,{htmlFor:"dobFormControlInput",children:"Date Of Birth"}),(0,u.jsx)(l.jO,{type:"date",id:"dobFormControlInput",value:g.dob,name:"dob",onChange:f,error:v.dob}),v&&(0,u.jsx)("p",{className:"text-danger",children:v.dob})]})}),(0,u.jsx)(l.b7,{md:6,children:(0,u.jsxs)("div",{className:"mb-3",children:[(0,u.jsx)(l.L8,{htmlFor:"spouseOrFatherControlInput",children:"Father's/Spouse's Name"}),(0,u.jsx)(l.jO,{type:"text",id:"spouseOrFatherControlInput",placeholder:"Father's/Spouse Name",value:g.spouseOrFather,name:"spouseOrFather",onChange:f,error:v.spouseOrFather}),v&&(0,u.jsx)("p",{className:"text-danger",children:v.spouseOrFather})]})}),(0,u.jsx)(l.b7,{md:6,children:(0,u.jsxs)("div",{className:"mb-3",children:[(0,u.jsx)(l.L8,{htmlFor:"genderControlInput",children:"Gender"}),(0,u.jsx)(l.EC,{type:"radio",name:"gender",id:"genderControlInput1",label:"Male",value:"Male",onChange:f,defaultChecked:"Male"===g.gender}),(0,u.jsx)(l.EC,{type:"radio",name:"gender",id:"genderControlInput2",label:"Female",value:"Female",onChange:f,defaultChecked:"Female"===g.gender})]})})]}),(0,u.jsxs)(l.rb,{children:[(0,u.jsx)(l.PO,{style:x,className:"mb-3",children:(0,u.jsx)("strong",{children:"User's Contact Details"})}),(0,u.jsx)(l.b7,{md:6,children:(0,u.jsxs)("div",{className:"mb-3",children:[(0,u.jsx)(l.L8,{htmlFor:"mobileControlInput",children:"Mobile Number"}),(0,u.jsx)(l.jO,{type:"text",id:"mobileControlInput",placeholder:"Mobile Number",value:g.mobile,name:"mobile",onChange:f,error:v.mobile}),v&&(0,u.jsx)("p",{className:"text-danger",children:v.mobile})]})}),(0,u.jsx)(l.b7,{md:6,children:(0,u.jsxs)("div",{className:"mb-3",children:[(0,u.jsx)(l.L8,{htmlFor:"emailControlInput",children:"Email Id"}),(0,u.jsx)(l.jO,{type:"text",id:"emailControlInput",placeholder:"Email Id",value:g.email,name:"email",onChange:f,error:v.email}),v&&(0,u.jsx)("p",{className:"text-danger",children:v.email})]})})]}),(0,u.jsxs)(l.rb,{children:[(0,u.jsx)(l.PO,{style:x,className:"mb-3",children:(0,u.jsx)("strong",{children:"User Address Details"})}),(0,u.jsx)(l.b7,{md:6,children:(0,u.jsxs)("div",{className:"mb-3",children:[(0,u.jsx)(l.L8,{htmlFor:"localityControlInput",children:"House Number/Vilaage/Post Office"}),(0,u.jsx)(l.jO,{type:"text",id:"localityControlInput",placeholder:"House Number/Vilaage/Post Office",value:g.locality,name:"locality",onChange:f,error:v.locality}),v&&(0,u.jsx)("p",{className:"text-danger",children:v.locality})]})}),(0,u.jsx)(l.b7,{md:6,children:(0,u.jsxs)("div",{className:"mb-3",children:[(0,u.jsx)(l.L8,{htmlFor:"cityControlInput",children:"City"}),(0,u.jsx)(l.jO,{type:"text",id:"cityControlInput",placeholder:"Last Name",value:g.city,name:"city",onChange:f,error:v.city}),v&&(0,u.jsx)("p",{className:"text-danger",children:v.city})]})}),(0,u.jsx)(l.b7,{md:6,children:(0,u.jsxs)("div",{className:"mb-3",children:[(0,u.jsx)(l.L8,{htmlFor:"districtControlInput",children:"District"}),(0,u.jsx)(l.jO,{type:"text",id:"districtControlInput",placeholder:"District",value:g.district,name:"district",onChange:f,error:v.district}),v&&(0,u.jsx)("p",{className:"text-danger",children:v.district})]})}),(0,u.jsx)(l.b7,{md:6,children:(0,u.jsxs)("div",{className:"mb-3",children:[(0,u.jsx)(l.L8,{htmlFor:"stateControlInput",children:"State"}),(0,u.jsx)(l.jO,{type:"text",id:"stateControlInput",placeholder:"State",value:g.state,name:"state",onChange:f,error:v.state}),v&&(0,u.jsx)("p",{className:"text-danger",children:v.state})]})}),(0,u.jsx)(l.b7,{md:6,children:(0,u.jsxs)("div",{className:"mb-3",children:[(0,u.jsx)(l.L8,{htmlFor:"pinControlInput",children:"Area Pin Code"}),(0,u.jsx)(l.jO,{type:"text",id:"pinControlInput",placeholder:"Area Pin Code",value:g.pin,name:"pin",onChange:f,error:v.pin}),v&&(0,u.jsx)("p",{className:"text-danger",children:v.pin})]})}),(0,u.jsx)(l.b7,{md:6,children:(0,u.jsxs)("div",{className:"mb-3",children:[(0,u.jsx)(l.L8,{htmlFor:"countryControlInput",children:"Country"}),(0,u.jsx)(l.jO,{type:"text",id:"countryControlInput",placeholder:"Country",value:g.country,name:"country",onChange:f,error:v.country}),v&&(0,u.jsx)("p",{className:"text-danger",children:v.country})]})})]}),(0,u.jsxs)(l.rb,{children:[(0,u.jsx)(l.PO,{style:x,className:"mb-3",children:(0,u.jsx)("strong",{children:"Nominee's Details"})}),(0,u.jsx)(l.b7,{md:6,children:(0,u.jsxs)("div",{className:"mb-3",children:[(0,u.jsx)(l.L8,{htmlFor:"nomineeFirstNameControlInput",children:"First Name"}),(0,u.jsx)(l.jO,{type:"text",id:"nomineeFirstNameControlInput",placeholder:"First Name",value:g.nomineeFirstName,name:"nomineeFirstName",onChange:f,error:v.nomineeFirstName}),v&&(0,u.jsx)("p",{className:"text-danger",children:v.nomineeFirstName})]})}),(0,u.jsx)(l.b7,{md:6,children:(0,u.jsxs)("div",{className:"mb-3",children:[(0,u.jsx)(l.L8,{htmlFor:"nomineeFirstNameControlInput",children:"Last Name"}),(0,u.jsx)(l.jO,{type:"text",id:"nomineeLastNameControlInput",placeholder:"Last Name",value:g.nomineeLastName,name:"nomineeLastName",onChange:f,error:v.nomineeLastName}),v&&(0,u.jsx)("p",{className:"text-danger",children:v.nomineeLastName})]})}),(0,u.jsx)(l.b7,{md:6,children:(0,u.jsxs)("div",{className:"mb-3",children:[(0,u.jsx)(l.L8,{htmlFor:"nomineeDobControlInput",children:"Date Of Birth"}),(0,u.jsx)(l.jO,{type:"date",id:"nomineeDobControlInput",placeholder:"Dob",value:g.nomineeDob,name:"nomineeDob",onChange:f,error:v.nomineeDob}),v&&(0,u.jsx)("p",{className:"text-danger",children:v.nomineeDob})]})}),(0,u.jsx)(l.b7,{md:6,children:(0,u.jsxs)("div",{className:"mb-3",children:[(0,u.jsx)(l.L8,{htmlFor:"nomineeRelationControlInput",children:"Relation"}),(0,u.jsx)(l.jO,{type:"text",id:"nomineeRelationControlInput",placeholder:"Relation",value:g.nomineeRelation,name:"nomineeRelation",onChange:f,error:v.nomineeRelation}),v&&(0,u.jsx)("p",{className:"text-danger",children:v.nomineeRelation})]})})]}),(0,u.jsxs)(l.rb,{children:[(0,u.jsx)(l.PO,{style:x,className:"mb-3",children:(0,u.jsx)("strong",{children:"Select Any Package"})}),(0,u.jsx)(l.b7,{md:6,children:(0,u.jsxs)("div",{className:"mb-3",children:[(0,u.jsx)(l.L8,{htmlFor:"planFormControlInput",children:"Select Package"}),(0,u.jsx)(l.LX,{id:"planFormControlInput","aria-label":"Default select example",name:"packageId",onChange:f,disabled:!0,children:(0,u.jsx)("option",{value:g.packageId,children:!b&&(null===N||void 0===N?void 0:N.data[0].name)})}),v&&(0,u.jsx)("p",{className:"text-danger",children:v.packageId})]})})]}),(0,u.jsxs)(l.rb,{children:[(0,u.jsx)(l.PO,{style:x,className:"mb-3",children:(0,u.jsx)("strong",{children:"Set Password"})}),(0,u.jsx)(l.b7,{md:6,children:(0,u.jsxs)("div",{className:"mb-3",children:[(0,u.jsx)(l.L8,{htmlFor:"passwordControlInput",children:"Password"}),(0,u.jsx)(l.jO,{type:"password",id:"passwordControlInput",placeholder:"password",value:g.password,name:"password",onChange:f,error:v.password}),v&&(0,u.jsx)("p",{className:"text-danger",children:v.password})]})}),(0,u.jsx)(l.b7,{md:6,children:(0,u.jsxs)("div",{className:"mb-3",children:[(0,u.jsx)(l.L8,{htmlFor:"cpasswordControlInput",children:"Confirm Password"}),(0,u.jsx)(l.jO,{type:"password",id:"cpasswordControlInput",placeholder:"cpassword",value:g.cpassword,name:"cpassword",onChange:f,error:v.cpassword}),v&&(0,u.jsx)("p",{className:"text-danger",children:v.cpassword})]})})]})]})}),(0,u.jsx)("hr",{}),(0,u.jsx)(l.rb,{children:(0,u.jsx)(l.b7,{md:6,children:(0,u.jsx)("div",{className:"d-grid gap-2 mb-3",children:(0,u.jsx)(l.u5,{color:"primary",onClick:y,disabled:!(F&&I)||q.isLoading,children:"Create Account"})})})})]})})]})})})})})}}}]);
//# sourceMappingURL=1595.bbd7e34a.chunk.js.map