"use strict";(self.webpackChunksonaxmultitrade=self.webpackChunksonaxmultitrade||[]).push([[304],{96066:function(e,r,s){s.d(r,{Z:function(){return i}});var i={};s.r(i),s.d(i,{Cp:function(){return t},kC:function(){return c},r4:function(){return u},zB:function(){return o},ii:function(){return m}});var a=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,d=/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,n=/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,l=s(62797),o=l.Ry().shape({email:l.Z_().matches(d,"Email is not correct!").required("Email is require field!"),password:l.Z_().matches(a,"Password is not correct!").max(15,"Max 15 symbol!").required("Password is require field!")}),t=(l.Ry().shape({password:l.Z_().matches(a,"Password is not correct!").max(15,"Max 15 symbol!").required("Password is require field!"),confirmPassword:l.Z_().oneOf([l.iH("password"),null],"Passwords must match!").required("Passwords must match!")}),l.Ry().shape({email:l.Z_().matches(d,"Email is not correct!").required("Email is require field!"),password:l.Z_().matches(a,"Password is not correct!").max(15,"Max 15 symbol!").required("Password is require field!"),confirmPassword:l.Z_().oneOf([l.iH("password"),null],"Passwords must match!").required("Passwords must match!")}),l.Ry().shape({oldPassword:l.Z_().max(15,"Max 15 symbol!").required("Password is require field!"),password:l.Z_().max(15,"Max 15 symbol!").notOneOf([l.iH("oldPassword"),null],"Password should not same as old password!").required("Password is require field!"),cPassword:l.Z_().oneOf([l.iH("password"),null],"Passwords must match!").required("Passwords must match!")})),u=l.Ry().shape({firstName:l.Z_().required("First name is require field!"),lastName:l.Z_().required("Last name is require field!"),gender:l.Z_().required("Last name is require field!"),dob:l.hT().required("Date of birth required"),nomineeFirstName:l.Z_().required("First name is require field!"),nomineeLastName:l.Z_().required("First name is require field!"),nomineeDob:l.hT().required("Date of birth required"),nomineeRelation:l.Z_().required("Relation is require field!"),mobile:l.Z_().matches(n,"Phone number is not valid").required("Mobile is require field!").min(10,"Phone number too short").max(10,"Phone number too long"),email:l.Z_().matches(d,"Email is not correct!").required("Email is require field!"),password:l.Z_().max(15,"Max 15 symbol!").required("Password is require field!"),cpassword:l.Z_().oneOf([l.iH("password"),null],"Passwords must match!").required("Passwords must match!")}),c=(l.Ry().shape({code:l.Z_().max(30,"Max value 20.").required("Coupon Name is require field!"),percent:l.Rx().typeError("You must specify a number").min(1,"Min value 1.").max(100,"Max value 100.").required("This field is required!"),endDate:l.hT().min(new Date,"end date can't be before current date")}),l.Ry().shape({email:l.Z_().matches(d,"Email is not correct!").required("Email is require field!"),schoolName:l.Z_().required("Name is require field!")}),l.Ry().shape({rewardLevel:l.Z_().required("Reward Level is require field!"),onPairs:l.Rx().required("Pairs is require field!"),reward:l.Z_().required("Reward name is require field!")})),m=l.Ry().shape({uId:l.Z_().required("UID is require field!"),password:l.Z_().max(15,"Max 15 symbol!").required("Password is require field!")})},16304:function(e,r,s){s.r(r);var i=s(74165),a=s(15861),d=(s(72791),s(78983)),n=s(82035),l=s(92506),o=s(96066),t=s(80184);r.default=function(){var e=n.Nq.useGetRewards(),r=e.isLoading,s=e.data,u=e.refetch,c=(0,l.TA)({initialValues:{rewardLevel:"",onPairs:"",reward:""},validationSchema:o.Z.kC,onSubmit:function(e){return P(e)}}),m=c.values,h=c.handleChange,w=c.submitForm,x=c.errors,q=c.isValid,f=c.dirty,p=c.resetForm,j=c.touched,b=c.handleBlur,v=n.Nq.useCreateAdminRewards(),P=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(r){var s;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.mutateAsync(r);case 2:200===(null===(s=e.sent)||void 0===s?void 0:s.status)&&(u(),p());case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();return(0,t.jsx)(d.rb,{children:(0,t.jsx)(d.b7,{md:12,children:(0,t.jsxs)(d.xH,{children:[(0,t.jsx)(d.bn,{children:(0,t.jsx)("strong",{children:"Rewards"})}),(0,t.jsxs)(d.sl,{children:[(0,t.jsx)(d.lx,{children:(0,t.jsxs)(d.rb,{children:[(0,t.jsx)(d.b7,{md:3,children:(0,t.jsxs)("div",{className:"mb-3",children:[(0,t.jsx)(d.jO,{type:"text",id:"rewardLevelControlInput",placeholder:"Reward Level",value:m.rewardLevel,name:"rewardLevel",onChange:h,onBlur:b,error:x.rewardLevel}),j.rewardLevel&&x&&(0,t.jsx)("p",{className:"text-danger",children:x.rewardLevel})]})}),(0,t.jsx)(d.b7,{md:3,children:(0,t.jsxs)("div",{className:"mb-3",children:[(0,t.jsx)(d.jO,{type:"number",id:"onPairsControlInput",placeholder:"On Pairs",value:m.onPairs,name:"onPairs",onChange:h,onBlur:b,error:x.onPairs}),j.onPairs&&x&&(0,t.jsx)("p",{className:"text-danger",children:x.onPairs})]})}),(0,t.jsx)(d.b7,{md:3,children:(0,t.jsxs)("div",{className:"mb-3",children:[(0,t.jsx)(d.jO,{type:"text",id:"rewardControlInput",placeholder:"Reward Name",value:m.reward,name:"reward",onChange:h,onBlur:b,error:x.reward}),j.reward&&x&&(0,t.jsx)("p",{className:"text-danger",children:x.reward})]})}),(0,t.jsx)(d.b7,{md:3,children:(0,t.jsx)("div",{className:"d-grid gap-2 mb-3",children:(0,t.jsx)(d.u5,{color:"primary",onClick:w,disabled:!(q&&f)||v.isLoading,children:"Save"})})})]})}),(0,t.jsx)(d.rb,{className:"table-row",children:(0,t.jsxs)(d.Sx,{align:"middle",bordered:!0,className:"mb-0 border",hover:!0,responsive:!0,striped:!0,children:[(0,t.jsx)(d.V,{color:"light",children:(0,t.jsxs)(d.T6,{children:[(0,t.jsx)(d.is,{children:"S. No."}),(0,t.jsx)(d.is,{children:"Reward Level"}),(0,t.jsx)(d.is,{children:"On Pairs"}),(0,t.jsx)(d.is,{children:"Reward Name"})]})}),(0,t.jsx)(d.NR,{children:!r&&(null===s||void 0===s?void 0:s.rewards.map((function(e,r){return(0,t.jsxs)(d.T6,{children:[(0,t.jsx)(d.NN,{children:r+1}),(0,t.jsx)(d.NN,{children:(0,t.jsx)("div",{children:e.rewardLevel})}),(0,t.jsx)(d.NN,{children:(0,t.jsx)("h5",{children:(0,t.jsx)(d.C_,{color:"success",children:e.onPairs})})}),(0,t.jsx)(d.NN,{children:e.reward})]},e._id)})))})]})})]})]})})})}}}]);
//# sourceMappingURL=304.846278d9.chunk.js.map