"use strict";(self.webpackChunksonaxmultitrade=self.webpackChunksonaxmultitrade||[]).push([[466],{96066:function(e,r,s){s.d(r,{Z:function(){return t}});var t={};s.r(t),s.d(t,{Cp:function(){return c},h3:function(){return h},kC:function(){return d},r4:function(){return u},zB:function(){return l},Nq:function(){return m},ii:function(){return f}});var n=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,a=/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,i=/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,o=s(62797),l=o.Ry().shape({email:o.Z_().matches(a,"Email is not correct!").required("Email is require field!"),password:o.Z_().matches(n,"Password is not correct!").max(15,"Max 15 symbol!").required("Password is require field!")}),c=(o.Ry().shape({password:o.Z_().matches(n,"Password is not correct!").max(15,"Max 15 symbol!").required("Password is require field!"),confirmPassword:o.Z_().oneOf([o.iH("password"),null],"Passwords must match!").required("Passwords must match!")}),o.Ry().shape({email:o.Z_().matches(a,"Email is not correct!").required("Email is require field!"),password:o.Z_().matches(n,"Password is not correct!").max(15,"Max 15 symbol!").required("Password is require field!"),confirmPassword:o.Z_().oneOf([o.iH("password"),null],"Passwords must match!").required("Passwords must match!")}),o.Ry().shape({oldPassword:o.Z_().max(15,"Max 15 symbol!").required("Password is require field!"),password:o.Z_().max(15,"Max 15 symbol!").notOneOf([o.iH("oldPassword"),null],"Password should not same as old password!").required("Password is require field!"),cPassword:o.Z_().oneOf([o.iH("password"),null],"Passwords must match!").required("Passwords must match!")})),u=o.Ry().shape({firstName:o.Z_().required("First name is require field!"),lastName:o.Z_().required("Last name is require field!"),gender:o.Z_().required("Last name is require field!"),dob:o.hT().required("Date of birth required"),nomineeFirstName:o.Z_().required("First name is require field!"),nomineeLastName:o.Z_().required("First name is require field!"),nomineeDob:o.hT().required("Date of birth required"),nomineeRelation:o.Z_().required("Relation is require field!"),mobile:o.Z_().matches(i,"Phone number is not valid").required("Mobile is require field!").min(10,"Phone number too short").max(10,"Phone number too long"),email:o.Z_().matches(a,"Email is not correct!").required("Email is require field!"),password:o.Z_().max(15,"Max 15 symbol!").required("Password is require field!"),cpassword:o.Z_().oneOf([o.iH("password"),null],"Passwords must match!").required("Passwords must match!")}),d=(o.Ry().shape({code:o.Z_().max(30,"Max value 20.").required("Coupon Name is require field!"),percent:o.Rx().typeError("You must specify a number").min(1,"Min value 1.").max(100,"Max value 100.").required("This field is required!"),endDate:o.hT().min(new Date,"end date can't be before current date")}),o.Ry().shape({email:o.Z_().matches(a,"Email is not correct!").required("Email is require field!"),schoolName:o.Z_().required("Name is require field!")}),o.Ry().shape({rewardLevel:o.Z_().required("Reward Level is require field!"),onPairs:o.Rx().required("Pairs is require field!"),reward:o.Z_().required("Reward name is require field!")})),m=o.Ry().shape({firstName:o.Z_().required("First name is require field!"),lastName:o.Z_().required("Last name is require field!"),mobile:o.Z_().matches(i,"Phone number is not valid").required("Mobile is require field!").min(10,"Phone number too short").max(10,"Phone number too long")}),f=o.Ry().shape({uId:o.Z_().required("UID is require field!"),password:o.Z_().max(15,"Max 15 symbol!").required("Password is require field!")}),h=o.Ry().shape({password:o.Z_().max(15,"Max 15 symbol!").required("Password is require field!"),cpassword:o.Z_().oneOf([o.iH("password"),null],"Passwords must match!").required("Passwords must match!")})},2466:function(e,r,s){s.r(r);var t=s(74165),n=s(15861),a=s(29439),i=s(72791),o=s(78983),l=s(82035),c=s(57689),u=s(22469),d=s(30337),m=s(70610),f=s(92506),h=s(96066),p=s(9085),b=s(80184);r.default=function(){var e=(0,c.TH)().state,r=e.id,s=e.name,x=e.uId,w=(0,i.useState)(0),v=(0,a.Z)(w,2),y=v[0],q=v[1],j=(0,i.useState)(0),g=(0,a.Z)(j,2),C=g[0],P=g[1],N=(0,i.useState)(0),Z=(0,a.Z)(N,2),_=Z[0],k=Z[1],E=l.Nq.useIntallments(r),O=(E.isLoading,E.data),R=E.refetch,I=l.Nq.useGetRewards(),A=I.isLoading,L=I.data,M=l.Nq.useUpdatePayment();(0,i.useEffect)((function(){function e(){return e=(0,n.Z)((0,t.Z)().mark((function e(){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.Z.get("admin/userTabs/".concat(r,"?position=Left")).then((function(e){q(null===e||void 0===e?void 0:e.active)})).then(function(){var e=(0,n.Z)((0,t.Z)().mark((function e(s){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.Z.get("admin/userTabs/".concat(r,"?position=Right"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()).then((function(e){P(null===e||void 0===e?void 0:e.active)}));case 2:case"end":return e.stop()}}),e)}))),e.apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),(0,i.useEffect)((function(){G()}),[C]);var T=(0,f.TA)({initialValues:{password:"",cpassword:""},validationSchema:h.Z.h3,onSubmit:function(e){return Y(e)}}),U=T.values,B=T.handleChange,S=T.submitForm,F=T.errors,H=T.isValid,D=T.dirty,$=T.resetForm,K=T.touched,z=T.handleBlur,V=l.Nq.useChangePasswordByAdmin(),Y=function(){var e=(0,n.Z)((0,t.Z)().mark((function e(s){var n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.mutateAsync({body:s,id:r});case 2:200===(null===(n=e.sent)||void 0===n?void 0:n.status)&&(p.Am.success("User's password changed"),$());case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),G=function(){var e=C<=y?C:y,r=Math.floor(2*e/2);k(r)},W=function(){var e=(0,n.Z)((0,t.Z)().mark((function e(r){var s;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=r.target.id,(0,d._1)({title:"Update this user",message:"Are you sure?",buttons:[{label:"Yes",onClick:function(){var e=(0,n.Z)((0,t.Z)().mark((function e(){var r;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.mutateAsync(s);case 2:200===(null===(r=e.sent)||void 0===r?void 0:r.status)&&R();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{label:"No"}]});case 2:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();return(0,b.jsx)(o.rb,{children:(0,b.jsx)(o.b7,{md:12,children:(0,b.jsxs)(o.rb,{children:[(0,b.jsxs)(o.b7,{md:4,children:[(0,b.jsxs)(o.xH,{className:"mb-2",children:[(0,b.jsxs)(o.bn,{children:[(0,b.jsx)("strong",{children:"Rewards Achievement Chart"}),(0,b.jsxs)("div",{children:[(0,b.jsxs)(o.C_,{color:"success",className:"mx-2",children:["Left Active: ",y]}),(0,b.jsxs)(o.C_,{color:"success",className:"mx-2",children:["Right Active: ",C]}),(0,b.jsxs)(o.C_,{color:"success",className:"mx-2",children:["Total Pairs: ",_&&_]})]})]}),(0,b.jsx)(o.sl,{children:(0,b.jsx)(o.KB,{children:(0,b.jsx)(o.rb,{children:(0,b.jsxs)("div",{className:"",children:[(0,b.jsx)("h5",{children:"Rewards Time Line"}),(0,b.jsx)("ul",{className:"timeline",children:!A&&L.rewards.map((function(e,r){return(0,b.jsxs)("li",{className:e.onPairs<=_?"achive":"",children:[(0,b.jsxs)("p",{className:e.onPairs<=_?"text-success float-right":"float-right",children:[e.rewardLevel," on ",e.onPairs," Pairs"]}),(0,b.jsxs)("p",{className:e.onPairs<=_?"text-success float-right":"float-right",children:["(",e.reward,")"]})]},r)}))})]})})})})]}),(0,b.jsxs)(o.xH,{className:"mb-2",children:[(0,b.jsx)(o.bn,{children:"Change Password"}),(0,b.jsx)(o.sl,{children:(0,b.jsx)(o.lx,{children:(0,b.jsxs)(o.rb,{children:[(0,b.jsx)(o.b7,{md:12,children:(0,b.jsxs)("div",{className:"mb-3",children:[(0,b.jsx)(o.jO,{type:"text",id:"passwordControlInput",placeholder:"New Password",value:U.password,name:"password",onChange:B,onBlur:z,error:F.password}),K.password&&F&&(0,b.jsx)("p",{className:"text-danger",children:F.password})]})}),(0,b.jsx)(o.b7,{md:12,children:(0,b.jsxs)("div",{className:"mb-3",children:[(0,b.jsx)(o.jO,{id:"cpasswordControlInput",placeholder:"Confirm Password",value:U.cpassword,name:"cpassword",onChange:B,onBlur:z,error:F.cpassword}),K.cpassword&&F&&(0,b.jsx)("p",{className:"text-danger",children:F.cpassword})]})}),(0,b.jsx)(o.b7,{md:12,children:(0,b.jsx)("div",{className:"d-grid gap-2 mb-3",children:(0,b.jsx)(o.u5,{color:"primary",onClick:S,disabled:!(H&&D)||V.isLoading,children:"Save"})})})]})})})]})]}),(0,b.jsx)(o.b7,{md:8,children:(0,b.jsxs)(o.xH,{children:[(0,b.jsx)(o.bn,{children:(0,b.jsxs)("strong",{children:[s,"'s ","("+x+")"," Installments Chart"]})}),(0,b.jsx)(o.sl,{children:(0,b.jsx)(o.rb,{className:"table-row",children:(0,b.jsxs)(o.Sx,{align:"middle",bordered:!0,className:"mb-0 border",hover:!0,responsive:!0,striped:!0,children:[(0,b.jsx)(o.V,{color:"light",children:(0,b.jsxs)(o.T6,{children:[(0,b.jsx)(o.is,{children:"S. No."}),(0,b.jsx)(o.is,{children:"Installments"}),(0,b.jsx)(o.is,{children:"Amount"}),(0,b.jsx)(o.is,{children:"Status"})]})}),(0,b.jsx)(o.NR,{children:null===O||void 0===O?void 0:O.data.map((function(e,r){return(0,b.jsxs)(o.T6,{"v-for":"item in tableItems",children:[(0,b.jsx)(o.NN,{children:r+1}),(0,b.jsxs)(o.NN,{children:[(0,b.jsx)("div",{children:0===r?"Downpayment":"Payment"}),(0,b.jsxs)("div",{className:"small text-medium-emphasis",children:[(0,b.jsx)("span",{children:!e.status&&" Unpaid |"})," ",e.status&&"Paid on: ".concat(u.YM.formatRegister(e.updatedAt)," ")]})]}),(0,b.jsxs)(o.NN,{children:["Rs. ",e.price]}),(0,b.jsx)(o.NN,{children:(0,b.jsx)("h5",{children:(0,b.jsx)(o.C_,{id:e._id,role:e.status?void 0:"button",color:e.status?"success":"danger",onClick:function(r){return e.status?"":W(r)},children:e.status?"Paid":"Pay"})})})]},r)}))})]})})})]})})]})})})}},30337:function(e,r,s){var t,n,a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var s=arguments[r];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(e[t]=s[t])}return e},i=function(){function e(e,r){for(var s=0;s<r.length;s++){var t=r[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(r,s,t){return s&&e(r.prototype,s),t&&e(r,t),r}}();r._1=function(e){document.body.classList.add("react-confirm-alert-body-element"),function(){if(document.getElementById("react-confirm-alert-firm-svg"))return;var e="http://www.w3.org/2000/svg",r=document.createElementNS(e,"feGaussianBlur");r.setAttribute("stdDeviation","0.3");var s=document.createElementNS(e,"filter");s.setAttribute("id","gaussian-blur"),s.appendChild(r);var t=document.createElementNS(e,"svg");t.setAttribute("id","react-confirm-alert-firm-svg"),t.setAttribute("class","react-confirm-alert-svg"),t.appendChild(s),document.body.appendChild(t)}(),function(e){var r=document.getElementById(e.targetId||b);e.targetId&&!r&&console.error("React Confirm Alert:","Can not get element id (#"+e.targetId+")");r||(document.body.children[0].classList.add("react-confirm-alert-blur"),(r=document.createElement("div")).id=b,document.body.appendChild(r)),(p=(0,u.createRoot)(r)).render(l.default.createElement(h,e))}(e)};var o=s(72791),l=d(o),c=d(s(52007)),u=s(1250);function d(e){return e&&e.__esModule?e:{default:e}}function m(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function f(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!==typeof r&&"function"!==typeof r?e:r}var h=(n=t=function(e){function r(){var e,s,t;m(this,r);for(var n=arguments.length,a=Array(n),i=0;i<n;i++)a[i]=arguments[i];return s=t=f(this,(e=r.__proto__||Object.getPrototypeOf(r)).call.apply(e,[this].concat(a))),t.handleClickButton=function(e){e.onClick&&e.onClick(),t.close()},t.handleClickOverlay=function(e){var r=t.props,s=r.closeOnClickOutside,n=r.onClickOutside,a=e.target===t.overlay;s&&a&&(n(),t.close()),e.stopPropagation()},t.close=function(){var e=t.props.afterClose;v(),w(t.props),x(e)},t.keyboard=function(e){var r=t.props,s=r.closeOnEscape,n=r.onKeypressEscape,a=r.onkeyPress,i=r.keyCodeForClose,o=e.keyCode,l=27===o;i.includes(o)&&t.close(),s&&l&&(n(e),t.close()),a&&a()},t.componentDidMount=function(){document.addEventListener("keydown",t.keyboard,!1)},t.componentWillUnmount=function(){document.removeEventListener("keydown",t.keyboard,!1),t.props.willUnmount()},t.renderCustomUI=function(){var e=t.props,r=e.title,s=e.message,n=e.buttons;return(0,e.customUI)({title:r,message:s,buttons:n,onClose:t.close})},f(t,s)}return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}(r,e),i(r,[{key:"render",value:function(){var e=this,r=this.props,s=r.title,t=r.message,n=r.buttons,i=r.childrenElement,o=r.customUI,c=r.overlayClassName;return l.default.createElement("div",{className:"react-confirm-alert-overlay "+c,ref:function(r){return e.overlay=r},onClick:this.handleClickOverlay},l.default.createElement("div",{className:"react-confirm-alert"},o?this.renderCustomUI():l.default.createElement("div",{className:"react-confirm-alert-body"},s&&l.default.createElement("h1",null,s),t,i(),l.default.createElement("div",{className:"react-confirm-alert-button-group"},n.map((function(r,s){return l.default.createElement("button",a({key:s,className:r.className},r,{onClick:function(s){return e.handleClickButton(r)}}),r.label)}))))))}}]),r}(o.Component),t.propTypes={title:c.default.string,message:c.default.string,buttons:c.default.array.isRequired,childrenElement:c.default.func,customUI:c.default.func,closeOnClickOutside:c.default.bool,closeOnEscape:c.default.bool,keyCodeForClose:c.default.arrayOf(c.default.number),willUnmount:c.default.func,afterClose:c.default.func,onClickOutside:c.default.func,onKeypressEscape:c.default.func,onkeyPress:c.default.func,overlayClassName:c.default.string},t.defaultProps={buttons:[{label:"Cancel",onClick:function(){return null},className:null},{label:"Confirm",onClick:function(){return null},className:null}],childrenElement:function(){return null},closeOnClickOutside:!0,closeOnEscape:!0,keyCodeForClose:[],willUnmount:function(){return null},afterClose:function(){return null},onClickOutside:function(){return null},onKeypressEscape:function(){return null}},n);var p=null,b="react-confirm-alert";function x(e){var r=document.getElementById("react-confirm-alert-firm-svg");r&&r.parentNode.removeChild(r),document.body.children[0].classList.remove("react-confirm-alert-blur"),e()}function w(e){var r=document.getElementById(e.targetId||b);r&&p.unmount(r)}function v(){document.body.classList.remove("react-confirm-alert-body-element")}}}]);
//# sourceMappingURL=466.3072ca40.chunk.js.map