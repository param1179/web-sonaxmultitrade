"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[8855],{9724:function(n,e,t){t.d(e,{N:function(){return a},i:function(){return r}});var r={};t.r(r),t.d(r,{useSignIn:function(){return f}});var a={};t.r(a),t.d(a,{fetchCoupons:function(){return k},fetchManage:function(){return A},useActivity:function(){return H},useAdmins:function(){return _},useCoupons:function(){return O},useCreateAdmin:function(){return Q},useCreateCoupon:function(){return q},useCreateSchool:function(){return I},useDeleteAdmin:function(){return T},useDeleteCoupon:function(){return F},useDeleteUser:function(){return E},useLogOut:function(){return D},useManage:function(){return W},useSchools:function(){return U},useServices:function(){return L},useStatistics:function(){return S},useToggleBan:function(){return z}});var c=t(74165),s=t(15861),o=t(70610),i=t(91933),u=t(57689),l=t(88077),d=function(){var n=(0,s.Z)((0,c.Z)().mark((function n(e){return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.post("admin/signIn",e);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(n){var e=(0,u.s0)();return(0,i.useMutation)(d,{onSuccess:function(n){200===(null===n||void 0===n?void 0:n.status)&&(l.Tj.setToken(n.data.accessToken),e("/dashboard"))},onError:function(e){400===(null===e||void 0===e?void 0:e.status)&&n({email:e.message})}})},h=t(59434),m=t(33050),p=function(){var n=(0,s.Z)((0,c.Z)().mark((function n(){return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("admin/statistics");case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),v=function(){var n=(0,s.Z)((0,c.Z)().mark((function n(){return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("admin/gets");case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),x=function(){var n=(0,s.Z)((0,c.Z)().mark((function n(){return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("admin/services");case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),Z=function(){var n=(0,s.Z)((0,c.Z)().mark((function n(){return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("admin/schools");case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),j=function(){var n=(0,s.Z)((0,c.Z)().mark((function n(e){return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("admin/activity/".concat(e));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),g=function(){var n=(0,s.Z)((0,c.Z)().mark((function n(e){return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.delete("admin/delete/".concat(e));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),b=function(){var n=(0,s.Z)((0,c.Z)().mark((function n(e){return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.delete("admin/coupon/".concat(e));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),N=function(){var n=(0,s.Z)((0,c.Z)().mark((function n(e){return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.post("admin/create",e);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),w=function(){var n=(0,s.Z)((0,c.Z)().mark((function n(e){return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.post("admin/schools",e);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),y=function(){var n=(0,s.Z)((0,c.Z)().mark((function n(e){return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.post("admin/coupon",e);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),k=function(){var n=(0,s.Z)((0,c.Z)().mark((function n(e){return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("admin/coupons?page=".concat(e));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),V=function(){var n=(0,s.Z)((0,c.Z)().mark((function n(){return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("admin/logOut");case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),A=function(){var n=(0,s.Z)((0,c.Z)().mark((function n(e,t,r){return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("admin/users/".concat(e,"?page=").concat(t,"&email=").concat(r));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),M=function(){var n=(0,s.Z)((0,c.Z)().mark((function n(e){return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("admin/ban/".concat(e));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),C=function(){var n=(0,s.Z)((0,c.Z)().mark((function n(e){return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.delete("admin/deleteUser/".concat(e));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),S=function(){return(0,i.useQuery)("get/statistics",p,{refetchOnWindowFocus:!1})},L=function(){return(0,i.useQuery)("get/services",x,{refetchOnWindowFocus:!1})},U=function(){return(0,i.useQuery)("get/schools",Z,{refetchOnWindowFocus:!1})},H=function(n){return(0,i.useQuery)("get/activity/".concat(n),(function(){return j(n)}),{refetchOnWindowFocus:!1})},_=function(){return(0,i.useQuery)("get/admins",v,{refetchOnWindowFocus:!1})},O=function(n){return(0,i.useQuery)("get/coupons/".concat(n),(function(){return k(n)}),{refetchOnWindowFocus:!1})},T=function(){return(0,i.useMutation)(g)},F=function(){return(0,i.useMutation)(b)},Q=function(n){return(0,i.useMutation)(N,{onError:function(e){400===(null===e||void 0===e?void 0:e.status)&&n({email:e.message})}})},q=function(){return(0,i.useMutation)(y,{onError:function(n){null===n||void 0===n||n.status}})},I=function(){return(0,i.useMutation)(w,{onError:function(n){null===n||void 0===n||n.status}})},D=function(){var n=(0,h.I0)(),e=(0,u.s0)();return(0,i.useMutation)(V,{onSuccess:function(t){200===(null===t||void 0===t?void 0:t.status)&&(l.Tj.removeToken(),n((0,m.kS)()),e("/"))}})},W=function(n,e,t){return(0,i.useQuery)("get/".concat(n,"/").concat(e,"/").concat(t),(function(){return A(n,e,t)}),{refetchOnWindowFocus:!1})},z=function(){return(0,i.useMutation)(M)},E=function(){return(0,i.useMutation)(C)}},89915:function(n,e,t){t.d(e,{TY:function(){return $},x6:function(){return l},Lk:function(){return f},qh:function(){return m},tf:function(){return M},S8:function(){return W},ns:function(){return P},q3:function(){return nn},cG:function(){return J}});var r=t(1413),a=t(72791),c=t(57689),s=[{path:"/",exact:!0,name:"Home"},{path:"/dashboard",name:"Dashboard",element:a.lazy((function(){return t.e(4435).then(t.bind(t,84435))}))},{path:"/users",name:"Users",element:a.lazy((function(){return t.e(7412).then(t.bind(t,67412))}))},{path:"/activities",name:"Users Activities",element:a.lazy((function(){return t.e(217).then(t.bind(t,10217))}))},{path:"/coupons",name:"Coupons",element:a.lazy((function(){return Promise.all([t.e(7673),t.e(2361)]).then(t.bind(t,42361))}))},{path:"/schools",name:"Schools",element:a.lazy((function(){return Promise.all([t.e(7673),t.e(9735)]).then(t.bind(t,89735))}))}],o=t(78983),i=t(80184),u=function(){var n=(0,c.TH)().pathname,e=function(n){var e=[];return n.split("/").reduce((function(n,t,r,a){var c="".concat(n,"/").concat(t),o=function(n,e){var t=e.find((function(e){return e.path===n}));return!!t&&t.name}(c,s);return o&&e.push({pathname:c,name:o,active:r+1===a.length}),c})),e}(n);return(0,i.jsxs)(o.fj,{className:"m-0 ms-2",children:[(0,i.jsx)(o.Sd,{href:"/",children:"Home"}),e.map((function(n,e){return(0,a.createElement)(o.Sd,(0,r.Z)((0,r.Z)({},n.active?{active:!0}:{href:n.pathname}),{},{key:e}),n.name)}))]})},l=a.memo(u),d=function(){return(0,i.jsx)(o.KB,{lg:!0,children:(0,i.jsx)(a.Suspense,{fallback:(0,i.jsx)(o.LQ,{color:"primary"}),children:(0,i.jsxs)(c.Z5,{children:[s.map((function(n,e){return n.element&&(0,i.jsx)(c.AW,{path:n.path,exact:n.exact,name:n.name,element:(0,i.jsx)(n.element,{})},e)})),(0,i.jsx)(c.AW,{path:"/",element:(0,i.jsx)(c.Fg,{to:"login",replace:!0})})]})})})},f=a.memo(d),h=function(){return(0,i.jsx)(o.pG,{children:(0,i.jsx)("div",{})})},m=a.memo(h),p=t(11087),v=t(59434),x=t(24846),Z=t(31389),j=t(62412),g=t(65487),b=t(63232);var N=t.p+"static/media/favicon.ed15dca2d0f37178a496faaeb6563b8f.svg",w=function(n){return n.commonStore},y=(t(51236),t(9724)),k=function(){(0,v.v9)(w).profile;var n=y.N.useLogOut().mutate;return(0,i.jsxs)(o.w5,{variant:"nav-item",children:[(0,i.jsx)(o.SQ,{placement:"bottom-end",className:"py-0",caret:!1,children:(0,i.jsx)(o.cU,{status:"success",className:"bg-dark",src:N,size:"md"})}),(0,i.jsxs)(o.$H,{className:"pt-0",placement:"bottom-end",children:[(0,i.jsx)(o.nR,{className:"bg-light fw-semibold py-2",children:"Account"}),(0,i.jsxs)(o.$f,{href:"#",children:[(0,i.jsx)(x.Z,{icon:j.E,className:"me-2"}),"Profile"]}),(0,i.jsxs)(o.$f,{href:"#",children:[(0,i.jsx)(x.Z,{icon:g.M,className:"me-2"}),"Settings"]}),(0,i.jsx)(o.lK,{}),(0,i.jsxs)(o.$f,{onClick:n,children:[(0,i.jsx)(x.Z,{icon:b.U,className:"me-2"}),"Logout Account"]})]})]})},V=["608 134",'\n  <title>coreui react pro</title>\n  <g>\n    <g style="fill:#00a1ff">\n      <path d="M362.0177,90.1512,353.25,69.4149a.2507.2507,0,0,0-.2559-.1914H343.01a.2263.2263,0,0,0-.2559.2559V90.0233a.5657.5657,0,0,1-.64.64h-1.2163a.5652.5652,0,0,1-.64-.64V46.5028a.5655.5655,0,0,1,.64-.64H353.442a9.9792,9.9792,0,0,1,7.7437,3.2324A12.2,12.2,0,0,1,364.13,57.64a12.4389,12.4389,0,0,1-2.24,7.584,9.37,9.37,0,0,1-6.08,3.7441c-.1709.086-.2139.1915-.128.3194l8.7041,20.6084.064.2558q0,.5127-.5757.5118h-1.1523A.703.703,0,0,1,362.0177,90.1512ZM342.754,48.3593v18.496a.2259.2259,0,0,0,.2559.2559h10.3037a7.6713,7.6713,0,0,0,6.0166-2.5918,9.8807,9.8807,0,0,0,2.3037-6.8164,10.2875,10.2875,0,0,0-2.272-6.9756,7.6033,7.6033,0,0,0-6.0483-2.624H343.01A.2263.2263,0,0,0,342.754,48.3593Z"/>\n      <path d="M401.3263,48.1034H381.2945a.2262.2262,0,0,0-.2558.2559v18.496a.2259.2259,0,0,0,.2558.2559h13.8238a.5664.5664,0,0,1,.6406.64v.96a.5663.5663,0,0,1-.6406.6406H381.2945a.2263.2263,0,0,0-.2558.2559v18.56a.2258.2258,0,0,0,.2558.2558h20.0318a.5671.5671,0,0,1,.6406.6407v.96a.566.566,0,0,1-.6406.64H379.1827a.5653.5653,0,0,1-.64-.64V46.5028a.5656.5656,0,0,1,.64-.64h22.1436a.5664.5664,0,0,1,.6406.64v.96A.5663.5663,0,0,1,401.3263,48.1034Z"/>\n      <path d="M439.047,90.1512l-2.4317-8.832a.2971.2971,0,0,0-.32-.1924H419.5274a.2957.2957,0,0,0-.32.1924l-2.3681,8.7676a.6577.6577,0,0,1-.7036.5762H414.919a.5385.5385,0,0,1-.5756-.7041l12.0317-43.584a.6436.6436,0,0,1,.7041-.5117h1.6a.6442.6442,0,0,1,.7041.5117l12.16,43.584.0644.1923q0,.5127-.64.5118h-1.2163A.6428.6428,0,0,1,439.047,90.1512ZM419.9435,78.9188a.3031.3031,0,0,0,.2236.0967h15.4883a.3048.3048,0,0,0,.2236-.0967c.0645-.0635.0742-.1162.0322-.1592l-7.872-28.9287c-.043-.0849-.086-.1279-.128-.1279s-.0859.043-.1279.1279L419.9112,78.76C419.8683,78.8026,419.879,78.8553,419.9435,78.9188Z"/>\n      <path d="M456.6017,87.911a11.6372,11.6372,0,0,1-3.3277-8.7041V57.1913a11.4158,11.4158,0,0,1,3.36-8.5762,12.0941,12.0941,0,0,1,8.8-3.2637,12.2566,12.2566,0,0,1,8.8643,3.2315,11.3927,11.3927,0,0,1,3.36,8.6084v.64a.5663.5663,0,0,1-.6406.6407l-1.28.0634q-.6408,0-.64-.5761v-.8321a9.289,9.289,0,0,0-2.6558-6.9121,10.6734,10.6734,0,0,0-14.0161,0,9.2854,9.2854,0,0,0-2.6563,6.9121V79.3993a9.2808,9.2808,0,0,0,2.6563,6.9121,10.67,10.67,0,0,0,14.0161,0,9.2843,9.2843,0,0,0,2.6558-6.9121v-.7686q0-.5757.64-.5752l1.28.0635a.5667.5667,0,0,1,.6406.6406v.5118a11.4952,11.4952,0,0,1-3.36,8.64,13.6227,13.6227,0,0,1-17.6963,0Z"/>\n      <path d="M514.4376,46.5028v.96a.5658.5658,0,0,1-.64.6406H503.046a.2263.2263,0,0,0-.2559.2559v41.664a.566.566,0,0,1-.6406.64h-1.2158a.5652.5652,0,0,1-.64-.64V48.3593a.2266.2266,0,0,0-.2558-.2559H489.8619a.5656.5656,0,0,1-.64-.6406v-.96a.5656.5656,0,0,1,.64-.64H513.798A.5658.5658,0,0,1,514.4376,46.5028Z"/>\n      <path d="M522.0665,89.5116a2.8385,2.8385,0,0,1-.8-2.0488,2.9194,2.9194,0,0,1,.8-2.1114,2.7544,2.7544,0,0,1,2.08-.832,2.8465,2.8465,0,0,1,2.9438,2.9434,2.7541,2.7541,0,0,1-.832,2.08,2.9221,2.9221,0,0,1-2.1118.8008A2.754,2.754,0,0,1,522.0665,89.5116Z"/>\n      <path d="M542.4054,88.0077a11.3123,11.3123,0,0,1-3.2-8.416v-5.44a.5656.5656,0,0,1,.64-.64h1.2158a.5661.5661,0,0,1,.64.64v5.5039a9.1424,9.1424,0,0,0,2.5283,6.72,8.9745,8.9745,0,0,0,6.6875,2.5605,8.7908,8.7908,0,0,0,9.28-9.28V46.5028a.5655.5655,0,0,1,.64-.64h1.2163a.566.566,0,0,1,.64.64V79.5917a11.2545,11.2545,0,0,1-3.2325,8.416,13.0618,13.0618,0,0,1-17.0556,0Z"/>\n      <path d="M580.35,88.1034a10.4859,10.4859,0,0,1-3.36-8.1279v-1.792a.5663.5663,0,0,1,.64-.6407h1.0884a.5668.5668,0,0,1,.64.6407v1.6a8.5459,8.5459,0,0,0,2.752,6.6562,10.5353,10.5353,0,0,0,7.36,2.4961,9.8719,9.8719,0,0,0,6.9761-2.3681,8.2161,8.2161,0,0,0,2.56-6.336,8.4,8.4,0,0,0-1.12-4.416,11.3812,11.3812,0,0,0-3.3281-3.3926,71.6714,71.6714,0,0,0-6.1763-3.7119,71.0479,71.0479,0,0,1-6.24-3.84,12.1711,12.1711,0,0,1-3.4238-3.68,10.2614,10.2614,0,0,1-1.28-5.3438,9.8579,9.8579,0,0,1,3.0718-7.7441,12.0122,12.0122,0,0,1,8.32-2.752q5.6954,0,8.96,3.1036a10.8251,10.8251,0,0,1,3.2642,8.2246v1.6a.5658.5658,0,0,1-.64.64h-1.1519a.5652.5652,0,0,1-.64-.64V56.8075a8.8647,8.8647,0,0,0-2.624-6.6885,9.9933,9.9933,0,0,0-7.232-2.5273,9.37,9.37,0,0,0-6.5278,2.1435,7.8224,7.8224,0,0,0-2.3682,6.1123,7.8006,7.8006,0,0,0,1.0244,4.16,10.387,10.387,0,0,0,3.0078,3.0391,62.8714,62.8714,0,0,0,5.9522,3.4882,71.0575,71.0575,0,0,1,6.72,4.2559,13.4674,13.4674,0,0,1,3.648,3.9365,10.049,10.049,0,0,1,1.28,5.1836,10.7177,10.7177,0,0,1-3.2637,8.1924q-3.2637,3.0717-8.832,3.0723Q583.71,91.1757,580.35,88.1034Z"/>\n    </g>\n    <g style="fill:#3c4b64">\n      <g>\n        <path d="M99.835,36.0577l-39-22.5167a12,12,0,0,0-12,0l-39,22.5166a12.0339,12.0339,0,0,0-6,10.3924V91.4833a12.0333,12.0333,0,0,0,6,10.3923l39,22.5167a12,12,0,0,0,12,0l39-22.5167a12.0331,12.0331,0,0,0,6-10.3923V46.45A12.0334,12.0334,0,0,0,99.835,36.0577Zm-2,55.4256a4,4,0,0,1-2,3.4641l-39,22.5167a4.0006,4.0006,0,0,1-4,0l-39-22.5167a4,4,0,0,1-2-3.4641V46.45a4,4,0,0,1,2-3.4642l39-22.5166a4,4,0,0,1,4,0l39,22.5166a4,4,0,0,1,2,3.4642Z"/>\n        <path d="M77.8567,82.0046h-2.866a4,4,0,0,0-1.9247.4934L55.7852,91.9833,35.835,80.4648V57.4872l19.95-11.5185,17.2893,9.4549a3.9993,3.9993,0,0,0,1.9192.4906h2.8632a2,2,0,0,0,2-2V51.2024a2,2,0,0,0-1.04-1.7547L59.628,38.9521a8.0391,8.0391,0,0,0-7.8428.09L31.8346,50.56a8.0246,8.0246,0,0,0-4,6.9287v22.976a8,8,0,0,0,4,6.9283l19.95,11.5186a8.0429,8.0429,0,0,0,7.8433.0879l19.19-10.5312a2,2,0,0,0,1.0378-1.7533v-2.71A2,2,0,0,0,77.8567,82.0046Z"/>\n      </g>\n      <g>\n        <path d="M172.58,45.3618a15.0166,15.0166,0,0,0-15,14.9995V77.6387a15,15,0,0,0,30,0V60.3613A15.0166,15.0166,0,0,0,172.58,45.3618Zm7,32.2769a7,7,0,0,1-14,0V60.3613a7,7,0,0,1,14,0Z"/>\n        <path d="M135.9138,53.4211a7.01,7.01,0,0,1,7.8681,6.0752.9894.9894,0,0,0,.9843.865h6.03a1.0108,1.0108,0,0,0,.9987-1.0971,15.0182,15.0182,0,0,0-15.7162-13.8837,15.2881,15.2881,0,0,0-14.2441,15.4163V77.2037A15.288,15.288,0,0,0,136.0792,92.62a15.0183,15.0183,0,0,0,15.7162-13.8842,1.0107,1.0107,0,0,0-.9987-1.0971h-6.03a.9894.9894,0,0,0-.9843.865,7.01,7.01,0,0,1-7.8679,6.0757,7.1642,7.1642,0,0,1-6.0789-7.1849V60.6057A7.1638,7.1638,0,0,1,135.9138,53.4211Z"/>\n        <path d="M218.7572,72.9277a12.1585,12.1585,0,0,0,7.1843-11.0771V58.1494A12.1494,12.1494,0,0,0,213.7921,46H196.835a1,1,0,0,0-1,1V91a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V74h6.6216l7.9154,17.4138a1,1,0,0,0,.91.5862h6.5911a1,1,0,0,0,.91-1.4138Zm-.8157-11.0771A4.1538,4.1538,0,0,1,213.7926,66h-9.8511V54h9.8511a4.1538,4.1538,0,0,1,4.1489,4.1494Z"/>\n        <path d="M260.835,46h-26a1,1,0,0,0-1,1V91a1,1,0,0,0,1,1h26a1,1,0,0,0,1-1V85a1,1,0,0,0-1-1h-19V72h13a1,1,0,0,0,1-1V65a1,1,0,0,0-1-1h-13V54h19a1,1,0,0,0,1-1V47A1,1,0,0,0,260.835,46Z"/>\n        <path d="M298.835,46h-6a1,1,0,0,0-1,1V69.6475a7.0066,7.0066,0,1,1-14,0V47a1,1,0,0,0-1-1h-6a1,1,0,0,0-1,1V69.6475a15.0031,15.0031,0,1,0,30,0V47A1,1,0,0,0,298.835,46Z"/>\n        <rect x="307.835" y="46" width="8" height="38" rx="1"/>\n      </g>\n    </g>\n  </g>\n'],A=t(33050),M=function(){var n=(0,v.I0)(),e=(0,v.v9)(w).sidebarShow;return(0,i.jsxs)(o.PO,{position:"sticky",className:"mb-4",children:[(0,i.jsxs)(o.KB,{fluid:!0,children:[(0,i.jsx)(o.X4,{className:"ps-1",onClick:function(){return n((0,A.$p)({type:"set",sidebarShow:!e}))},children:(0,i.jsx)(x.Z,{icon:Z.N,size:"lg"})}),(0,i.jsx)(o.qy,{className:"mx-auto d-md-none",to:"/",children:(0,i.jsx)(x.Z,{icon:V,height:48,alt:"Logo"})}),(0,i.jsx)(o.g3,{className:"d-none d-md-flex me-auto",children:(0,i.jsx)(o.U6,{children:(0,i.jsx)(o.AQ,{to:"/dashboard",component:p.OL,children:"Dashboard"})})}),(0,i.jsx)(o.g3,{className:"ms-3",children:(0,i.jsx)(k,{})})]}),(0,i.jsx)(o.rc,{}),(0,i.jsx)(o.KB,{fluid:!0,children:(0,i.jsx)(l,{})})]})},C=t(44925),S=["component","name","badge","icon"],L=["component","name","icon","to"],U=function(n){var e=n.items,t=(0,c.TH)(),s=function(n,e,t){return(0,i.jsxs)(i.Fragment,{children:[e&&e,n&&n,t&&(0,i.jsx)(o.C_,{color:t.color,className:"ms-auto",children:t.text})]})},u=function(n,e){var t=n.component,c=n.name,o=n.badge,i=n.icon,u=(0,C.Z)(n,S),l=t;return(0,a.createElement)(l,(0,r.Z)((0,r.Z)({},u.to&&!u.items&&{component:p.OL}),{},{key:e},u),s(c,i,o))},l=function n(e,a){var c,o=e.component,l=e.name,d=e.icon,f=e.to,h=(0,C.Z)(e,L),m=o;return(0,i.jsx)(m,(0,r.Z)((0,r.Z)({idx:String(a),toggler:s(l,d),visible:t.pathname.startsWith(f)},h),{},{children:null===(c=e.items)||void 0===c?void 0:c.map((function(e,t){return e.items?n(e,t):u(e,t)}))}),a)};return(0,i.jsx)(a.Fragment,{children:e&&e.map((function(n,e){return n.items?l(n,e):u(n,e)}))})},H=["160 160",'\n  <title>coreui logo</title>\n  <g>\n    <g style="fill:#fff;">\n      <path d="M125,47.091,86,24.5743a12,12,0,0,0-12,0L35,47.091a12.0336,12.0336,0,0,0-6,10.3923v45.0334a12.0335,12.0335,0,0,0,6,10.3923l39,22.5166a11.9993,11.9993,0,0,0,12,0l39-22.5166a12.0335,12.0335,0,0,0,6-10.3923V57.4833A12.0336,12.0336,0,0,0,125,47.091Zm-2,55.4257a4,4,0,0,1-2,3.464L82,128.4974a4,4,0,0,1-4,0L39,105.9807a4,4,0,0,1-2-3.464V57.4833a4,4,0,0,1,2-3.4641L78,31.5025a4,4,0,0,1,4,0l39,22.5167a4,4,0,0,1,2,3.4641Z"/>\n      <path d="M103.0216,93.0379h-2.866a4,4,0,0,0-1.9246.4935L80.95,103.0167,61,91.4981V68.5206L80.95,57.002l17.2894,9.455a4,4,0,0,0,1.9192.4905h2.8632a2,2,0,0,0,2-2V62.2357a2,2,0,0,0-1.04-1.7547L84.793,49.9854a8.0391,8.0391,0,0,0-7.8428.09L57,61.5929A8.0243,8.0243,0,0,0,53,68.5216v22.976a8,8,0,0,0,4,6.9283l19.95,11.5185a8.0422,8.0422,0,0,0,7.8433.0879l19.19-10.5311a2,2,0,0,0,1.0378-1.7534v-2.71A2,2,0,0,0,103.0216,93.0379Z"/>\n    </g>\n  </g>\n'],_=t(34358),O=(t(82454),t(34708)),T=t(85602),F=t(9594),Q=t(89229),q=t(63316),I=[{component:o.U6,name:"Dashboard",to:"/dashboard",icon:(0,i.jsx)(x.Z,{icon:O.h,customClassName:"nav-icon"}),badge:{color:"info",text:"NEW"}},{component:o.fd,name:"Users"},{component:o.U6,name:"All Users",to:"/users",icon:(0,i.jsx)(x.Z,{icon:T.g,customClassName:"nav-icon"})},{component:o.U6,name:"User Activities",to:"/activities",icon:(0,i.jsx)(x.Z,{icon:F.o,customClassName:"nav-icon"})},{component:o.fd,name:"Coupons"},{component:o.U6,name:"Coupons",to:"/coupons",icon:(0,i.jsx)(x.Z,{icon:Q.J,customClassName:"nav-icon"})},{component:o.fd,name:"Schools"},{component:o.U6,name:"Schools",to:"/schools",icon:(0,i.jsx)(x.Z,{icon:q.J,customClassName:"nav-icon"})}],D=function(){var n=(0,v.I0)(),e=(0,v.v9)(w),t=e.sidebarUnfoldable,r=e.sidebarShow;return(0,i.jsxs)(o.z3,{style:{"--cui-sidebar-nav-link-hover-bg":"#f11a2e73","--cui-sidebar-nav-link-active-bg":"#f11a2e"},position:"fixed",unfoldable:t,visible:r,onVisibleChange:function(e){n((0,A.$p)({type:"set",sidebarShow:e}))},children:[(0,i.jsxs)(o.Dl,{className:"d-none d-md-flex",to:"/",children:[(0,i.jsx)("div",{className:"",children:(0,i.jsx)("img",{alt:"Logo",width:"70",src:N})}),(0,i.jsx)(x.Z,{className:"sidebar-brand-narrow",icon:H,height:35})]}),(0,i.jsx)(o.Xk,{children:(0,i.jsx)(_.Z,{children:(0,i.jsx)(U,{items:I})})}),(0,i.jsx)(o.iv,{className:"d-none d-lg-flex",onClick:function(){return n((0,A.$p)({type:"set",sidebarUnfoldable:!t}))}})]})},W=a.memo(D),z=function(n){var e=n.shortName,t=n.name,r=n.email,a=n.healthcare;var c=function(n){var e=0;return n.forEach((function(n){e+=n})),e}(n.activity.map((function(n){if(null!==n[0].logOut)return function(n,e){var t=e.getTime()-n.getTime();return Math.round(t%864e5%36e5/6e4)}(new Date(n[0].logIn),new Date(n[0].logOut))})));return(0,i.jsx)(i.Fragment,{children:c>0?(0,i.jsxs)(o.T6,{"v-for":"item in tableItems",children:[(0,i.jsx)(o.NN,{className:"text-center",children:e}),(0,i.jsx)(o.NN,{children:(0,i.jsx)("div",{className:"text-capitalize",children:t})}),(0,i.jsx)(o.NN,{children:(0,i.jsx)("div",{className:"clearfix",children:r})}),(0,i.jsx)(o.NN,{children:(0,i.jsx)("div",{className:"text-capitalize",children:a})}),(0,i.jsx)(o.NN,{children:function(n){var e=Math.floor(n/60),t=n%60;return t=t<10?"0"+t:t,"".concat(e=e<10?"0"+e:e,":").concat(t)}(c)})]}):"No Data Found"})},E=t(88077);var $=function(n){var e=n.data;return n.isLoading,setTimeout((function(){}),200),(0,i.jsxs)(o.Sx,{align:"middle",className:"mb-0 border",hover:!0,responsive:!0,striped:!0,children:[(0,i.jsx)(o.V,{color:"light",children:(0,i.jsxs)(o.T6,{children:[(0,i.jsx)(o.is,{className:"text-center",children:(0,i.jsx)(x.Z,{icon:T.g})}),(0,i.jsx)(o.is,{children:"Name"}),(0,i.jsx)(o.is,{children:"Email"}),(0,i.jsx)(o.is,{children:"Healthcare"}),(0,i.jsx)(o.is,{children:"Logged In Time"})]})}),(0,i.jsx)(o.NR,{className:"table1",children:e.map((function(n,e){var t,r,a,c,s,o;return n.user.length>0&&(0,i.jsx)(z,{shortName:(0,E.JU)(null===(t=n.user[0])||void 0===t?void 0:t.firstName,null===(r=n.user[0])||void 0===r?void 0:r.lastName),name:(null===(a=n.user[0])||void 0===a?void 0:a.firstName)+" "+(null===(c=n.user[0])||void 0===c?void 0:c.lastName),email:null===(s=n.user[0])||void 0===s?void 0:s.email,healthcare:null===(o=n.user[0])||void 0===o?void 0:o.healthcare,activity:n.activity.filter((function(n){return null!==n[0].logOut}))},e)}))})]})},B=function(n){var e=n.content,t=n.href,r=n.name,a="s"===r.slice(-1),c="https://coreui.io/react/docs/".concat(t);return(0,i.jsxs)(o.e_,{color:"info",className:"bg-white",children:[e||"A React ".concat(r," component ").concat(a?"have":"has"," been created as a native React.js version\n      of Bootstrap ").concat(r,". ").concat(r," ").concat(a?"are":"is"," delivered with some new features,\n      variants, and unique design that matches CoreUI Design System requirements."),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"For more information please visit our official"," ",(0,i.jsx)(o.h7,{href:c,target:"_blank",children:"documentation of CoreUI Components Library for React.js"}),"."]})},P=a.memo(B),R=["href","name","text"],K=function(n){var e=n.href,t=n.name,a=n.text,c=(0,C.Z)(n,R),s=t?"https://coreui.io/react/docs/components/".concat(t):e;return(0,i.jsx)("div",{className:"float-end",children:(0,i.jsx)(o.h7,(0,r.Z)((0,r.Z)({},c),{},{href:s,rel:"noreferrer noopener",target:"_blank",className:"card-header-action",children:(0,i.jsx)("small",{className:"text-medium-emphasis",children:a||"docs"})}))})},J=a.memo(K),G=t(52001),X=t(87857),Y=function(n){var e=n.children,t=n.href,r="https://coreui.io/react/docs/".concat(t);return(0,i.jsxs)("div",{className:"example",children:[(0,i.jsxs)(o.n2,{variant:"tabs",children:[(0,i.jsx)(o.U6,{children:(0,i.jsxs)(o.AQ,{href:"#",active:!0,children:[(0,i.jsx)(x.Z,{icon:G.B,className:"me-2"}),"Preview"]})}),(0,i.jsx)(o.U6,{children:(0,i.jsxs)(o.AQ,{href:r,target:"_blank",children:[(0,i.jsx)(x.Z,{icon:X.I,className:"me-2"}),"Code"]})})]}),(0,i.jsx)(o.gr,{className:"rounded-bottom",children:(0,i.jsx)(o.IA,{className:"p-3 preview",visible:!0,children:e})})]})},nn=a.memo(Y)},66265:function(n,e,t){t.r(e);t(72791);var r=t(89915),a=t(80184);e.default=function(){return(0,a.jsxs)("div",{children:[(0,a.jsx)(r.S8,{}),(0,a.jsxs)("div",{className:"wrapper d-flex flex-column min-vh-100 bg-light",children:[(0,a.jsx)(r.tf,{}),(0,a.jsx)("div",{className:"body flex-grow-1 px-3",children:(0,a.jsx)(r.Lk,{})}),(0,a.jsx)(r.qh,{})]})]})}}}]);
//# sourceMappingURL=8855.77eacb91.chunk.js.map