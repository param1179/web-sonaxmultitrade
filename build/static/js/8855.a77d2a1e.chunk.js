"use strict";(self.webpackChunksonaxmultitrade=self.webpackChunksonaxmultitrade||[]).push([[8855],{9724:function(n,e,t){t.d(e,{N:function(){return a},i:function(){return r}});var r={};t.r(r),t.d(r,{useSignIn:function(){return m},useUserSignIn:function(){return p}});var a={};t.r(a),t.d(a,{fetchCoupons:function(){return C},fetchManage:function(){return L},useActivity:function(){return I},useAdmins:function(){return P},useCoupons:function(){return z},useCreateAdmin:function(){return B},useCreateAdminUser:function(){return H},useCreateCoupon:function(){return V},useCreateSchool:function(){return G},useDeleteAdmin:function(){return $},useDeleteCoupon:function(){return q},useDeleteUser:function(){return nn},useGetPackages:function(){return X},useGetTeams:function(){return J},useGetUsers:function(){return K},useLogOut:function(){return R},useManage:function(){return _},useProfile:function(){return F},useSchools:function(){return E},useServices:function(){return Q},useToggleBan:function(){return Y}});var s=t(74165),c=t(15861),u=t(70610),o=t(91933),i=t(57689),l=t(88077),f=function(){var n=(0,c.Z)((0,s.Z)().mark((function n(e){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.put("admin/login",e);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,c.Z)((0,s.Z)().mark((function n(e){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.put("users/login",e);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),m=function(n){var e=(0,i.s0)();return(0,o.useMutation)(f,{onSuccess:function(n){200===(null===n||void 0===n?void 0:n.status)&&(l.Tj.setToken(n.data.accessToken),l.Tj.setProfileData(n.data),e("/dashboardAdmin"))},onError:function(e){400===(null===e||void 0===e?void 0:e.status)&&n({email:e.message})}})},p=function(n){var e=(0,i.s0)();return(0,o.useMutation)(d,{onSuccess:function(n){200===(null===n||void 0===n?void 0:n.status)&&(l.Tj.setToken(n.data.accessToken),l.Tj.setProfileData(n.data),e("/dashboard"))},onError:function(e){400===(null===e||void 0===e?void 0:e.status)&&n({uId:e.message})}})},h=t(59434),x=t(33050),v=function(){var n=(0,c.Z)((0,s.Z)().mark((function n(){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("users/profile");case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),Z=function(){var n=(0,c.Z)((0,s.Z)().mark((function n(e){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("users/teams/".concat(e));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),j=function(){var n=(0,c.Z)((0,s.Z)().mark((function n(){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("admin/gets");case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),g=function(){var n=(0,c.Z)((0,s.Z)().mark((function n(){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("admin/services");case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),b=function(){var n=(0,c.Z)((0,s.Z)().mark((function n(){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("admin/schools");case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),w=function(){var n=(0,c.Z)((0,s.Z)().mark((function n(e){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("admin/activity/".concat(e));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),N=function(){var n=(0,c.Z)((0,s.Z)().mark((function n(e){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.delete("admin/delete/".concat(e));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),y=function(){var n=(0,c.Z)((0,s.Z)().mark((function n(e){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.delete("admin/coupon/".concat(e));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),k=function(){var n=(0,c.Z)((0,s.Z)().mark((function n(e){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.post("admin/create",e);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),A=function(){var n=(0,c.Z)((0,s.Z)().mark((function n(e){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.post("users/add",e);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),U=function(){var n=(0,c.Z)((0,s.Z)().mark((function n(e){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.post("admin/schools",e);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),S=function(){var n=(0,c.Z)((0,s.Z)().mark((function n(e){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.post("admin/coupon",e);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),C=function(){var n=(0,c.Z)((0,s.Z)().mark((function n(e){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("admin/coupons?page=".concat(e));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),T=function(){var n=(0,c.Z)((0,s.Z)().mark((function n(){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("admin/logOut");case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),L=function(){var n=(0,c.Z)((0,s.Z)().mark((function n(e,t,r){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("admin/users/".concat(e,"?page=").concat(t,"&email=").concat(r));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),M=function(){var n=(0,c.Z)((0,s.Z)().mark((function n(e,t,r){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("admin/users/get?page=".concat(t,"&limit=").concat(e,"&search=").concat(r));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),O=function(){var n=(0,c.Z)((0,s.Z)().mark((function n(e){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("admin/ban/".concat(e));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),D=function(){var n=(0,c.Z)((0,s.Z)().mark((function n(){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("users/packages");case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),W=function(){var n=(0,c.Z)((0,s.Z)().mark((function n(e){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.delete("admin/deleteUser/".concat(e));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),F=function(){return(0,o.useQuery)("users/profile",v,{refetchOnWindowFocus:!1})},Q=function(){return(0,o.useQuery)("get/services",g,{refetchOnWindowFocus:!1})},E=function(){return(0,o.useQuery)("get/schools",b,{refetchOnWindowFocus:!1})},I=function(n){return(0,o.useQuery)("get/activity/".concat(n),(function(){return w(n)}),{refetchOnWindowFocus:!1})},P=function(){return(0,o.useQuery)("get/admins",j,{refetchOnWindowFocus:!1})},z=function(n){return(0,o.useQuery)("get/coupons/".concat(n),(function(){return C(n)}),{refetchOnWindowFocus:!1})},$=function(){return(0,o.useMutation)(N)},q=function(){return(0,o.useMutation)(y)},B=function(n){return(0,o.useMutation)(k,{onError:function(e){400===(null===e||void 0===e?void 0:e.status)&&n({email:e.message})}})},H=function(n){return(0,o.useMutation)(A,{onError:function(e){400===(null===e||void 0===e?void 0:e.status)&&n({email:e.message})}})},V=function(){return(0,o.useMutation)(S,{onError:function(n){null===n||void 0===n||n.status}})},G=function(){return(0,o.useMutation)(U,{onError:function(n){null===n||void 0===n||n.status}})},R=function(){var n=(0,h.I0)(),e=(0,i.s0)();return(0,o.useMutation)(T,{onSuccess:function(t){200===(null===t||void 0===t?void 0:t.status)&&(l.Tj.removeToken(),n((0,x.kS)()),e("/"))}})},_=function(n,e,t){return(0,o.useQuery)("get/".concat(n,"/").concat(e,"/").concat(t),(function(){return L(n,e,t)}),{refetchOnWindowFocus:!1})},K=function(n,e,t){return(0,o.useQuery)("admin/users/".concat(e,"/").concat(n,"/").concat(t),(function(){return M(n,e,t)}),{refetchOnWindowFocus:!1})},X=function(n,e,t){return(0,o.useQuery)("users/packages",(function(){return D()}),{refetchOnWindowFocus:!1})},J=function(n){return(0,o.useQuery)("users/teams/".concat(n),(function(){return n&&Z(n)}),{refetchOnWindowFocus:!1})},Y=function(){return(0,o.useMutation)(O)},nn=function(){return(0,o.useMutation)(W)}},71427:function(n,e,t){t.d(e,{TY:function(){return R},x6:function(){return p},Lk:function(){return x},qh:function(){return Z},tf:function(){return M},S8:function(){return H},ns:function(){return K},q3:function(){return rn},cG:function(){return Y}});var r=t(1413),a=t(72791),s=t(57689),c=a.lazy((function(){return t.e(1915).then(t.bind(t,61915))})),u=a.lazy((function(){return t.e(4309).then(t.bind(t,64309))})),o=a.lazy((function(){return Promise.all([t.e(9809),t.e(6780)]).then(t.bind(t,96780))})),i=a.lazy((function(){return Promise.all([t.e(7673),t.e(1595)]).then(t.bind(t,91595))})),l=[{path:"/",exact:!0,name:"Home"},{path:"/dashboardAdmin",name:"Dashboard Admin",element:u},{path:"/dashboard",name:"Dashboard",element:c},{path:"/users",name:"Users",element:o},{path:"/add",name:"Add User",element:i},{path:"/adminAdd",name:"Admin Add User",element:a.lazy((function(){return Promise.all([t.e(7673),t.e(2610)]).then(t.bind(t,22610))}))},{path:"/activities",name:"Users Activities",element:i},{path:"/coupons",name:"Coupons",element:i}],f=t(78983),d=t(80184),m=function(){var n=(0,s.TH)().pathname,e=function(n){var e=[];return n.split("/").reduce((function(n,t,r,a){var s="".concat(n,"/").concat(t),c=function(n,e){var t=e.find((function(e){return e.path===n}));return!!t&&t.name}(s,l);return c&&e.push({pathname:s,name:c,active:r+1===a.length}),s})),e}(n);return(0,d.jsxs)(f.fj,{className:"m-0 ms-2",children:[(0,d.jsx)(f.Sd,{href:"/",children:"Home"}),e.map((function(n,e){return(0,a.createElement)(f.Sd,(0,r.Z)((0,r.Z)({},n.active?{active:!0}:{href:n.pathname}),{},{key:e}),n.name)}))]})},p=a.memo(m),h=function(){return(0,d.jsx)(f.KB,{lg:!0,children:(0,d.jsx)(a.Suspense,{fallback:(0,d.jsx)(f.LQ,{color:"primary"}),children:(0,d.jsxs)(s.Z5,{children:[l.map((function(n,e){return n.element&&(0,d.jsx)(s.AW,{path:n.path,exact:n.exact,name:n.name,element:(0,d.jsx)(n.element,{})},e)})),(0,d.jsx)(s.AW,{path:"/",element:(0,d.jsx)(s.Fg,{to:"login",replace:!0})})]})})})},x=a.memo(h),v=function(){return(0,d.jsx)(f.pG,{children:(0,d.jsx)("div",{})})},Z=a.memo(v),j=t(11087),g=t(59434),b=t(24846),w=t(31389),N=t(62412),y=t(65487),k=t(63232);var A=t.p+"static/media/sonaxmultitrade.753fc9fec7f63d022aeb1c676ec6de1d.svg",U=function(n){return n.commonStore},S=(t(51236),t(9724)),C=function(){(0,g.v9)(U).profile;var n=S.N.useLogOut().mutate;return(0,d.jsxs)(f.w5,{variant:"nav-item",children:[(0,d.jsx)(f.SQ,{placement:"bottom-end",className:"py-0",caret:!1,children:(0,d.jsx)(f.cU,{status:"success",className:"",src:A,size:"md"})}),(0,d.jsxs)(f.$H,{className:"pt-0",placement:"bottom-end",children:[(0,d.jsx)(f.nR,{className:"bg-light fw-semibold py-2",children:"Account"}),(0,d.jsxs)(f.$f,{href:"#",children:[(0,d.jsx)(b.Z,{icon:N.E,className:"me-2"}),"Profile"]}),(0,d.jsxs)(f.$f,{href:"#",children:[(0,d.jsx)(b.Z,{icon:y.M,className:"me-2"}),"Settings"]}),(0,d.jsx)(f.lK,{}),(0,d.jsxs)(f.$f,{onClick:n,children:[(0,d.jsx)(b.Z,{icon:k.U,className:"me-2"}),"Logout Account"]})]})]})},T=t(29352),L=t(33050),M=function(){var n=(0,g.I0)(),e=(0,g.v9)(U).sidebarShow;return(0,d.jsxs)(f.PO,{position:"sticky",className:"mb-4",children:[(0,d.jsxs)(f.KB,{fluid:!0,children:[(0,d.jsx)(f.X4,{className:"ps-1",onClick:function(){return n((0,L.$p)({type:"set",sidebarShow:!e}))},children:(0,d.jsx)(b.Z,{icon:w.N,size:"lg"})}),(0,d.jsxs)(f.qy,{className:"mx-auto d-md-none",to:"/",children:[(0,d.jsx)(f.DW,{src:T,height:50,alt:"Logo"}),"Sonax Multitrade"]}),(0,d.jsx)(f.g3,{className:"d-none d-md-flex me-auto",children:(0,d.jsx)(f.U6,{children:(0,d.jsx)(f.AQ,{to:"/dashboard",component:j.OL,children:"Dashboard"})})}),(0,d.jsx)(f.g3,{className:"ms-3",children:(0,d.jsx)(C,{})})]}),(0,d.jsx)(f.rc,{}),(0,d.jsx)(f.KB,{fluid:!0,children:(0,d.jsx)(p,{})})]})},O=t(44925),D=["component","name","badge","icon"],W=["component","name","icon","to"],F=function(n){var e=n.items,t=(0,s.TH)(),c=function(n,e,t){return(0,d.jsxs)(d.Fragment,{children:[e&&e,n&&n,t&&(0,d.jsx)(f.C_,{color:t.color,className:"ms-auto",children:t.text})]})},u=function(n,e){var t=n.component,s=n.name,u=n.badge,o=n.icon,i=(0,O.Z)(n,D),l=t;return(0,a.createElement)(l,(0,r.Z)((0,r.Z)({},i.to&&!i.items&&{component:j.OL}),{},{key:e},i),c(s,o,u))},o=function n(e,a){var s,o=e.component,i=e.name,l=e.icon,f=e.to,m=(0,O.Z)(e,W),p=o;return(0,d.jsx)(p,(0,r.Z)((0,r.Z)({idx:String(a),toggler:c(i,l),visible:t.pathname.startsWith(f)},m),{},{children:null===(s=e.items)||void 0===s?void 0:s.map((function(e,t){return e.items?n(e,t):u(e,t)}))}),a)};return(0,d.jsx)(a.Fragment,{children:e&&e.map((function(n,e){return n.items?o(n,e):u(n,e)}))})},Q=["160 160",'\n  <title>coreui logo</title>\n  <g>\n    <g style="fill:#fff;">\n      <path d="M125,47.091,86,24.5743a12,12,0,0,0-12,0L35,47.091a12.0336,12.0336,0,0,0-6,10.3923v45.0334a12.0335,12.0335,0,0,0,6,10.3923l39,22.5166a11.9993,11.9993,0,0,0,12,0l39-22.5166a12.0335,12.0335,0,0,0,6-10.3923V57.4833A12.0336,12.0336,0,0,0,125,47.091Zm-2,55.4257a4,4,0,0,1-2,3.464L82,128.4974a4,4,0,0,1-4,0L39,105.9807a4,4,0,0,1-2-3.464V57.4833a4,4,0,0,1,2-3.4641L78,31.5025a4,4,0,0,1,4,0l39,22.5167a4,4,0,0,1,2,3.4641Z"/>\n      <path d="M103.0216,93.0379h-2.866a4,4,0,0,0-1.9246.4935L80.95,103.0167,61,91.4981V68.5206L80.95,57.002l17.2894,9.455a4,4,0,0,0,1.9192.4905h2.8632a2,2,0,0,0,2-2V62.2357a2,2,0,0,0-1.04-1.7547L84.793,49.9854a8.0391,8.0391,0,0,0-7.8428.09L57,61.5929A8.0243,8.0243,0,0,0,53,68.5216v22.976a8,8,0,0,0,4,6.9283l19.95,11.5185a8.0422,8.0422,0,0,0,7.8433.0879l19.19-10.5311a2,2,0,0,0,1.0378-1.7534v-2.71A2,2,0,0,0,103.0216,93.0379Z"/>\n    </g>\n  </g>\n'],E=t(34358),I=(t(82454),t(34708)),P=t(85602),z=[{component:f.U6,name:"Dashboard",to:"/dashboard",icon:(0,d.jsx)(b.Z,{icon:I.h,customClassName:"nav-icon"}),badge:{color:"info",text:"NEW"}},{component:f.fd,name:"Users"},{component:f.U6,name:"All Users",to:"/users",icon:(0,d.jsx)(b.Z,{icon:P.g,customClassName:"nav-icon"})}],$=[{component:f.U6,name:"Dashboard Admin",to:"/dashboardAdmin",icon:(0,d.jsx)(b.Z,{icon:I.h,customClassName:"nav-icon"}),badge:{color:"info",text:"NEW"}},{component:f.fd,name:"Users"},{component:f.U6,name:"Admin Add New User",to:"/adminAdd",icon:(0,d.jsx)(b.Z,{icon:P.g,customClassName:"nav-icon"})},{component:f.U6,name:"All Users",to:"/users",icon:(0,d.jsx)(b.Z,{icon:P.g,customClassName:"nav-icon"})}],q=t(51692),B=function(){var n=(0,g.I0)(),e=(0,g.v9)(U),t=e.sidebarUnfoldable,r=e.sidebarShow,a=(0,q.getProfileData)();return(0,d.jsxs)(f.z3,{style:{"--cui-sidebar-nav-link-hover-bg":"#f11a2e73","--cui-sidebar-nav-link-active-bg":"#f11a2e","--cui-sidebar-bg":"#333232"},position:"fixed",unfoldable:t,visible:r,onVisibleChange:function(e){n((0,L.$p)({type:"set",sidebarShow:e}))},children:[(0,d.jsxs)(f.Dl,{className:"d-none d-md-flex",to:"/",children:[(0,d.jsx)(f.DW,{src:T,width:"70"}),"Sonax Multitrade",(0,d.jsx)(b.Z,{className:"sidebar-brand-narrow",icon:Q,height:35})]}),(0,d.jsx)(f.Xk,{children:(0,d.jsx)(E.Z,{children:(0,d.jsx)(F,{items:a&&"superAdmin"===a.role?$:z})})}),(0,d.jsx)(f.iv,{className:"d-none d-lg-flex",onClick:function(){return n((0,L.$p)({type:"set",sidebarUnfoldable:!t}))}})]})},H=a.memo(B),V=function(n){var e=n.shortName,t=n.name,r=n.email,a=n.healthcare;var s=function(n){var e=0;return n.forEach((function(n){e+=n})),e}(n.activity.map((function(n){if(null!==n[0].logOut)return function(n,e){var t=e.getTime()-n.getTime();return Math.round(t%864e5%36e5/6e4)}(new Date(n[0].logIn),new Date(n[0].logOut))})));return(0,d.jsx)(d.Fragment,{children:s>0?(0,d.jsxs)(f.T6,{"v-for":"item in tableItems",children:[(0,d.jsx)(f.NN,{className:"text-center",children:e}),(0,d.jsx)(f.NN,{children:(0,d.jsx)("div",{className:"text-capitalize",children:t})}),(0,d.jsx)(f.NN,{children:(0,d.jsx)("div",{className:"clearfix",children:r})}),(0,d.jsx)(f.NN,{children:(0,d.jsx)("div",{className:"text-capitalize",children:a})}),(0,d.jsx)(f.NN,{children:function(n){var e=Math.floor(n/60),t=n%60;return t=t<10?"0"+t:t,"".concat(e=e<10?"0"+e:e,":").concat(t)}(s)})]}):"No Data Found"})},G=t(88077);var R=function(n){var e=n.data;return n.isLoading,setTimeout((function(){}),200),(0,d.jsxs)(f.Sx,{align:"middle",className:"mb-0 border",hover:!0,responsive:!0,striped:!0,children:[(0,d.jsx)(f.V,{color:"light",children:(0,d.jsxs)(f.T6,{children:[(0,d.jsx)(f.is,{className:"text-center",children:(0,d.jsx)(b.Z,{icon:P.g})}),(0,d.jsx)(f.is,{children:"Name"}),(0,d.jsx)(f.is,{children:"Email"}),(0,d.jsx)(f.is,{children:"Healthcare"}),(0,d.jsx)(f.is,{children:"Logged In Time"})]})}),(0,d.jsx)(f.NR,{className:"table1",children:e.map((function(n,e){var t,r,a,s,c,u;return n.user.length>0&&(0,d.jsx)(V,{shortName:(0,G.JU)(null===(t=n.user[0])||void 0===t?void 0:t.firstName,null===(r=n.user[0])||void 0===r?void 0:r.lastName),name:(null===(a=n.user[0])||void 0===a?void 0:a.firstName)+" "+(null===(s=n.user[0])||void 0===s?void 0:s.lastName),email:null===(c=n.user[0])||void 0===c?void 0:c.email,healthcare:null===(u=n.user[0])||void 0===u?void 0:u.healthcare,activity:n.activity.filter((function(n){return null!==n[0].logOut}))},e)}))})]})},_=function(n){var e=n.content,t=n.href,r=n.name,a="s"===r.slice(-1),s="https://coreui.io/react/docs/".concat(t);return(0,d.jsxs)(f.e_,{color:"info",className:"bg-white",children:[e||"A React ".concat(r," component ").concat(a?"have":"has"," been created as a native React.js version\n      of Bootstrap ").concat(r,". ").concat(r," ").concat(a?"are":"is"," delivered with some new features,\n      variants, and unique design that matches CoreUI Design System requirements."),(0,d.jsx)("br",{}),(0,d.jsx)("br",{}),"For more information please visit our official"," ",(0,d.jsx)(f.h7,{href:s,target:"_blank",children:"documentation of CoreUI Components Library for React.js"}),"."]})},K=a.memo(_),X=["href","name","text"],J=function(n){var e=n.href,t=n.name,a=n.text,s=(0,O.Z)(n,X),c=t?"https://coreui.io/react/docs/components/".concat(t):e;return(0,d.jsx)("div",{className:"float-end",children:(0,d.jsx)(f.h7,(0,r.Z)((0,r.Z)({},s),{},{href:c,rel:"noreferrer noopener",target:"_blank",className:"card-header-action",children:(0,d.jsx)("small",{className:"text-medium-emphasis",children:a||"docs"})}))})},Y=a.memo(J),nn=t(52001),en=t(87857),tn=function(n){var e=n.children,t=n.href,r="https://coreui.io/react/docs/".concat(t);return(0,d.jsxs)("div",{className:"example",children:[(0,d.jsxs)(f.n2,{variant:"tabs",children:[(0,d.jsx)(f.U6,{children:(0,d.jsxs)(f.AQ,{href:"#",active:!0,children:[(0,d.jsx)(b.Z,{icon:nn.B,className:"me-2"}),"Preview"]})}),(0,d.jsx)(f.U6,{children:(0,d.jsxs)(f.AQ,{href:r,target:"_blank",children:[(0,d.jsx)(b.Z,{icon:en.I,className:"me-2"}),"Code"]})})]}),(0,d.jsx)(f.gr,{className:"rounded-bottom",children:(0,d.jsx)(f.IA,{className:"p-3 preview",visible:!0,children:e})})]})},rn=a.memo(tn)},66265:function(n,e,t){t.r(e);t(72791);var r=t(71427),a=t(80184);e.default=function(){return(0,a.jsxs)("div",{children:[(0,a.jsx)(r.S8,{}),(0,a.jsxs)("div",{className:"wrapper d-flex flex-column min-vh-100 bg-light",children:[(0,a.jsx)(r.tf,{}),(0,a.jsx)("div",{className:"body flex-grow-1 px-3",children:(0,a.jsx)(r.Lk,{})}),(0,a.jsx)(r.qh,{})]})]})}},29352:function(n,e,t){n.exports=t.p+"static/media/sonaxmultitrade.29f6ec52e5160d1f3bbb.png"}}]);
//# sourceMappingURL=8855.a77d2a1e.chunk.js.map