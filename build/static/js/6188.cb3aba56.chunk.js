"use strict";(self.webpackChunksonaxmultitrade=self.webpackChunksonaxmultitrade||[]).push([[6188],{9724:function(e,r,n){n.d(r,{N:function(){return u},i:function(){return t}});var t={};n.r(t),n.d(t,{useSignIn:function(){return p},useUserSignIn:function(){return m}});var u={};n.r(u),n.d(u,{fetchCoupons:function(){return _},fetchManage:function(){return C},useActivity:function(){return D},useAdmins:function(){return R},useCoupons:function(){return Q},useCreateAdmin:function(){return L},useCreateAdminUser:function(){return H},useCreateCoupon:function(){return $},useCreateSchool:function(){return z},useDeleteAdmin:function(){return U},useDeleteCoupon:function(){return W},useDeleteUser:function(){return ee},useGetPackages:function(){return X},useGetTeams:function(){return J},useGetUsers:function(){return B},useLogOut:function(){return G},useManage:function(){return Y},useProfile:function(){return A},useSchools:function(){return V},useServices:function(){return S},useToggleBan:function(){return K}});var s=n(74165),a=n(15861),i=n(70610),o=n(91933),c=n(57689),d=n(88077),f=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(r){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.put("admin/login",r);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(r){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.put("users/login",r);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(e){var r=(0,c.s0)();return(0,o.useMutation)(f,{onSuccess:function(e){200===(null===e||void 0===e?void 0:e.status)&&(d.Tj.setToken(e.data.accessToken),d.Tj.setProfileData(e.data),r("/dashboardAdmin"))},onError:function(r){400===(null===r||void 0===r?void 0:r.status)&&e({email:r.message})}})},m=function(e){var r=(0,c.s0)();return(0,o.useMutation)(l,{onSuccess:function(e){200===(null===e||void 0===e?void 0:e.status)&&(d.Tj.setToken(e.data.accessToken),d.Tj.setProfileData(e.data),r("/dashboard"))},onError:function(r){400===(null===r||void 0===r?void 0:r.status)&&e({uId:r.message})}})},h=n(59434),Z=n(33050),x=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("users/profile");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(r){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("users/teams/".concat(r));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),w=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("admin/gets");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("admin/services");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("admin/schools");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(r){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("admin/activity/".concat(r));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),q=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(r){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.delete("admin/delete/".concat(r));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),k=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(r){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.delete("admin/coupon/".concat(r));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),j=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(r){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.post("admin/create",r);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),M=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(r){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.post("users/add",r);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),N=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(r){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.post("admin/schools",r);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),P=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(r){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.post("admin/coupon",r);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),_=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(r){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("admin/coupons?page=".concat(r));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),T=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("admin/logOut");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(r,n,t){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("admin/users/".concat(r,"?page=").concat(n,"&email=").concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(r,n,t){return e.apply(this,arguments)}}(),E=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(r,n,t){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("admin/users/get?page=".concat(n,"&limit=").concat(r,"&search=").concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(r,n,t){return e.apply(this,arguments)}}(),F=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(r){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("admin/ban/".concat(r));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),O=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("users/packages");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(r){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.delete("admin/deleteUser/".concat(r));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),A=function(){return(0,o.useQuery)("users/profile",x,{refetchOnWindowFocus:!1})},S=function(){return(0,o.useQuery)("get/services",g,{refetchOnWindowFocus:!1})},V=function(){return(0,o.useQuery)("get/schools",b,{refetchOnWindowFocus:!1})},D=function(e){return(0,o.useQuery)("get/activity/".concat(e),(function(){return y(e)}),{refetchOnWindowFocus:!1})},R=function(){return(0,o.useQuery)("get/admins",w,{refetchOnWindowFocus:!1})},Q=function(e){return(0,o.useQuery)("get/coupons/".concat(e),(function(){return _(e)}),{refetchOnWindowFocus:!1})},U=function(){return(0,o.useMutation)(q)},W=function(){return(0,o.useMutation)(k)},L=function(e){return(0,o.useMutation)(j,{onError:function(r){400===(null===r||void 0===r?void 0:r.status)&&e({email:r.message})}})},H=function(e){return(0,o.useMutation)(M,{onError:function(r){400===(null===r||void 0===r?void 0:r.status)&&e({email:r.message})}})},$=function(){return(0,o.useMutation)(P,{onError:function(e){null===e||void 0===e||e.status}})},z=function(){return(0,o.useMutation)(N,{onError:function(e){null===e||void 0===e||e.status}})},G=function(){var e=(0,h.I0)(),r=(0,c.s0)();return(0,o.useMutation)(T,{onSuccess:function(n){200===(null===n||void 0===n?void 0:n.status)&&(d.Tj.removeToken(),e((0,Z.kS)()),r("/"))}})},Y=function(e,r,n){return(0,o.useQuery)("get/".concat(e,"/").concat(r,"/").concat(n),(function(){return C(e,r,n)}),{refetchOnWindowFocus:!1})},B=function(e,r,n){return(0,o.useQuery)("admin/users/".concat(r,"/").concat(e,"/").concat(n),(function(){return E(e,r,n)}),{refetchOnWindowFocus:!1})},X=function(e,r,n){return(0,o.useQuery)("users/packages",(function(){return O()}),{refetchOnWindowFocus:!1})},J=function(e){return(0,o.useQuery)("users/teams/".concat(e),(function(){return v(e)}),{refetchOnWindowFocus:!1})},K=function(){return(0,o.useMutation)(F)},ee=function(){return(0,o.useMutation)(I)}},96066:function(e,r,n){n.d(r,{Z:function(){return t}});var t={};n.r(t),n.d(t,{Fr:function(){return d},TX:function(){return f},r4:function(){return c},zB:function(){return o},ii:function(){return l}});var u=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,s=/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,a=/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,i=n(81724),o=i.Ry().shape({email:i.Z_().matches(s,"Email is not correct!").required("Email is require field!"),password:i.Z_().matches(u,"Password is not correct!").max(15,"Max 15 symbol!").required("Password is require field!")}),c=(i.Ry().shape({password:i.Z_().matches(u,"Password is not correct!").max(15,"Max 15 symbol!").required("Password is require field!"),confirmPassword:i.Z_().oneOf([i.iH("password"),null],"Passwords must match!").required("Passwords must match!")}),i.Ry().shape({email:i.Z_().matches(s,"Email is not correct!").required("Email is require field!"),password:i.Z_().matches(u,"Password is not correct!").max(15,"Max 15 symbol!").required("Password is require field!"),confirmPassword:i.Z_().oneOf([i.iH("password"),null],"Passwords must match!").required("Passwords must match!")}),i.Ry().shape({firstName:i.Z_().required("First name is require field!"),lastName:i.Z_().required("Last name is require field!"),gender:i.Z_().required("Last name is require field!"),dob:i.hT().required("Date of birth required"),nomineeFirstName:i.Z_().required("First name is require field!"),nomineeLastName:i.Z_().required("First name is require field!"),nomineeDob:i.hT().required("Date of birth required"),nomineeRelation:i.Z_().required("Relation is require field!"),mobile:i.Z_().matches(a,"Phone number is not valid").required("Mobile is require field!").min(10,"Phone number too short").max(10,"Phone number too long"),email:i.Z_().matches(s,"Email is not correct!").required("Email is require field!"),password:i.Z_().max(15,"Max 15 symbol!").required("Password is require field!"),cpassword:i.Z_().oneOf([i.iH("password"),null],"Passwords must match!").required("Passwords must match!")})),d=i.Ry().shape({code:i.Z_().max(30,"Max value 20.").required("Coupon Name is require field!"),percent:i.Rx().typeError("You must specify a number").min(1,"Min value 1.").max(100,"Max value 100.").required("This field is required!"),endDate:i.hT().min(new Date,"end date can't be before current date")}),f=i.Ry().shape({email:i.Z_().matches(s,"Email is not correct!").required("Email is require field!"),schoolName:i.Z_().required("Name is require field!")}),l=i.Ry().shape({uId:i.Z_().required("UID is require field!"),password:i.Z_().max(15,"Max 15 symbol!").required("Password is require field!")})},16188:function(e,r,n){n.r(r),n.d(r,{default:function(){return Z}});var t=n(74165),u=n(15861),s=n(72791),a=n(78983),i=n(57689),o=n(51692),c=n(92506),d=n(96066),f=n(9724),l=n(24846),p=n(62412),m=n(63232),h=n(80184);function Z(){var e=(0,i.s0)(),r=(0,o.getToken)();(0,s.useEffect)((function(){r&&e("/dashboard")}),[]);var n=(0,c.TA)({initialValues:{uId:"",password:""},validationSchema:d.Z.ii,onSubmit:function(){var e=(0,u.Z)((0,t.Z)().mark((function e(r){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(r);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}),Z=n.values,x=n.handleChange,v=n.submitForm,w=n.errors,g=n.setErrors,b=n.isValid,y=n.dirty,q=f.i.useUserSignIn(g),k=q.isLoading,j=q.mutate;return(0,h.jsx)("section",{className:"background-radial-gradient overflow-hidden",children:(0,h.jsx)("div",{className:"container px-4 py-5 px-md-5 text-center text-lg-start my-5",children:(0,h.jsxs)("div",{className:"row gx-lg-5 align-items-center mb-5",children:[(0,h.jsxs)("div",{className:"col-lg-6 mb-5 mb-lg-0",style:{zIndex:10},children:[(0,h.jsxs)("h1",{className:"my-5 display-5 fw-bold ls-tight",style:{color:"hsl(218, 81%, 95%)"},children:["The best offer ",(0,h.jsx)("br",{}),(0,h.jsx)("span",{style:{color:"hsl(218, 81%, 75%)"},children:"for your business"})]}),(0,h.jsx)("p",{className:"mb-4 opacity-70",style:{color:"hsl(218, 81%, 85%)"},children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, expedita iusto veniam atque, magni tempora mollitia dolorum consequatur nulla, neque debitis eos reprehenderit quasi ab ipsum nisi dolorem modi. Quos?"})]}),(0,h.jsxs)("div",{className:"col-lg-6 mb-5 mb-lg-0 position-relative",children:[(0,h.jsx)("div",{id:"radius-shape-1",className:"position-absolute rounded-circle shadow-5-strong"}),(0,h.jsx)("div",{id:"radius-shape-2",className:"position-absolute shadow-5-strong"}),(0,h.jsx)("div",{className:"card bg-glass",children:(0,h.jsx)("div",{className:"card-body px-4 py-5 px-md-5",children:(0,h.jsxs)(a.lx,{children:[(0,h.jsx)("h1",{children:"User Login"}),(0,h.jsx)("p",{className:"text-medium-emphasis",children:"Sign In to your account"}),(0,h.jsxs)(a.YR,{className:"mb-3",children:[(0,h.jsx)(a.wV,{children:(0,h.jsx)(l.Z,{icon:p.E})}),(0,h.jsx)(a.jO,{placeholder:"UID",autoComplete:"uId",value:Z.uId,name:"uId",onChange:x,error:w.uId})]}),w&&(0,h.jsx)("p",{className:"text-danger",children:w.uId}),(0,h.jsxs)(a.YR,{className:"mb-4",children:[(0,h.jsx)(a.wV,{children:(0,h.jsx)(l.Z,{icon:m.U})}),(0,h.jsx)(a.jO,{type:"password",placeholder:"Password",autoComplete:"current-password",value:Z.password,name:"password",onChange:x,error:w.password})]}),w&&(0,h.jsx)("p",{className:"text-danger",children:w.password}),(0,h.jsxs)(a.rb,{children:[(0,h.jsx)(a.b7,{xs:6,children:(0,h.jsx)(a.u5,{color:"primary",className:"px-4",onClick:v,disabled:!(b&&y)||k,children:"Login"})}),(0,h.jsx)(a.b7,{xs:6,className:"text-right",children:(0,h.jsx)(a.u5,{color:"link",className:"px-0",children:"Forgot password?"})})]})]})})})]})]})})})}},63232:function(e,r,n){n.d(r,{U:function(){return t}});var t=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M384,200V144a128,128,0,0,0-256,0v56H88V328c0,92.635,75.364,168,168,168s168-75.365,168-168V200ZM160,144a96,96,0,0,1,192,0v56H160ZM392,328c0,74.99-61.01,136-136,136s-136-61.01-136-136V232H392Z' class='ci-primary'/>"]},62412:function(e,r,n){n.d(r,{E:function(){return t}});var t=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M411.6,343.656l-72.823-47.334,27.455-50.334A80.23,80.23,0,0,0,376,207.681V128a112,112,0,0,0-224,0v79.681a80.236,80.236,0,0,0,9.768,38.308l27.455,50.333L116.4,343.656A79.725,79.725,0,0,0,80,410.732V496H448V410.732A79.727,79.727,0,0,0,411.6,343.656ZM416,464H112V410.732a47.836,47.836,0,0,1,21.841-40.246l97.66-63.479-41.64-76.341A48.146,48.146,0,0,1,184,207.681V128a80,80,0,0,1,160,0v79.681a48.146,48.146,0,0,1-5.861,22.985L296.5,307.007l97.662,63.479h0A47.836,47.836,0,0,1,416,410.732Z' class='ci-primary'/>"]}}]);
//# sourceMappingURL=6188.cb3aba56.chunk.js.map