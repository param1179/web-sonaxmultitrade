"use strict";(self.webpackChunksonaxmultitrade=self.webpackChunksonaxmultitrade||[]).push([[783],{35322:function(e,n,a){a.r(n),a.d(n,{default:function(){return X}});var s=a(72791),t=a(1413),i=a(57689),o=s.lazy((function(){return a.e(915).then(a.bind(a,61915))})),r=s.lazy((function(){return a.e(309).then(a.bind(a,64309))})),c=s.lazy((function(){return Promise.all([a.e(393),a.e(761),a.e(780)]).then(a.bind(a,96780))})),l=s.lazy((function(){return Promise.all([a.e(393),a.e(514)]).then(a.bind(a,48514))})),m=s.lazy((function(){return Promise.all([a.e(126),a.e(595)]).then(a.bind(a,91595))})),d=s.lazy((function(){return Promise.all([a.e(126),a.e(610)]).then(a.bind(a,22610))})),u=[{path:"/",exact:!0,name:"Home"},{path:"/dashboardAdmin",name:"Dashboard Admin",element:r},{path:"/dashboard",name:"Dashboard",element:o},{path:"/users",name:"Users",element:c},{path:"/adminUsers",name:"Users",element:l},{path:"/add",name:"Add User",element:m},{path:"/direct",name:"Direct Register",element:s.lazy((function(){return Promise.all([a.e(126),a.e(191)]).then(a.bind(a,49191))}))},{path:"/adminAdd",name:"Admin Add User",element:d},{path:"/activities",name:"Users Activities",element:m},{path:"/coupons",name:"Coupons",element:m},{path:"/emis",name:"Installments",element:s.lazy((function(){return a.e(525).then(a.bind(a,33525))}))},{path:"/password",name:"Change Password",element:s.lazy((function(){return Promise.all([a.e(126),a.e(935)]).then(a.bind(a,50935))}))}],h=a(78983),x=a(80184),f=function(){var e=(0,i.TH)().pathname,n=function(e){var n=[];return e.split("/").reduce((function(e,a,s,t){var i="".concat(e,"/").concat(a),o=function(e,n){var a=n.find((function(n){return n.path===e}));return!!a&&a.name}(i,u);return o&&n.push({pathname:i,name:o,active:s+1===t.length}),i})),n}(e);return(0,x.jsxs)(h.fj,{className:"m-0 ms-2",children:[(0,x.jsx)(h.Sd,{href:"/",children:"Home"}),n.map((function(e,n){return(0,s.createElement)(h.Sd,(0,t.Z)((0,t.Z)({},e.active?{active:!0}:{href:e.pathname}),{},{key:n}),e.name)}))]})},p=s.memo(f),j=function(){return(0,x.jsx)(h.KB,{lg:!0,children:(0,x.jsx)(s.Suspense,{fallback:(0,x.jsx)(h.LQ,{color:"primary"}),children:(0,x.jsxs)(i.Z5,{children:[u.map((function(e,n){return e.element&&(0,x.jsx)(i.AW,{path:e.path,exact:e.exact,name:e.name,element:(0,x.jsx)(e.element,{})},n)})),(0,x.jsx)(i.AW,{path:"/",element:(0,x.jsx)(i.Fg,{to:"login",replace:!0})})]})})})},b=s.memo(j),v=function(){return(0,x.jsx)(h.pG,{children:(0,x.jsx)("div",{})})},g=s.memo(v),N=a(11087),Z=a(59434),U=a(24846),A=a(31389),y=a(62412),C=a(65487),w=a(63232);var k=a.p+"static/media/sonaxmultitrade.753fc9fec7f63d022aeb1c676ec6de1d.svg",L=function(e){return e.commonStore},S=(a(51236),a(82035)),z=function(){var e=(0,i.s0)(),n=((0,Z.v9)(L).profile,S.Nq.useLogOut().mutate);return(0,x.jsxs)(h.w5,{variant:"nav-item",children:[(0,x.jsx)(h.SQ,{placement:"bottom-end",className:"py-0",caret:!1,children:(0,x.jsx)(h.cU,{status:"success",className:"",src:k,size:"md"})}),(0,x.jsxs)(h.$H,{className:"pt-0",placement:"bottom-end",children:[(0,x.jsx)(h.nR,{className:"bg-light fw-semibold py-2",children:"Account"}),(0,x.jsxs)(h.$f,{href:"#",children:[(0,x.jsx)(U.Z,{icon:y.E,className:"me-2"}),"Profile"]}),(0,x.jsxs)(h.$f,{href:"#",children:[(0,x.jsx)(U.Z,{icon:C.M,className:"me-2"}),"Settings"]}),(0,x.jsxs)(h.$f,{role:"button",onClick:function(){return e("/password")},children:[(0,x.jsx)(U.Z,{icon:C.M,className:"me-2"}),"Change Password"]}),(0,x.jsx)(h.lK,{}),(0,x.jsxs)(h.$f,{onClick:n,children:[(0,x.jsx)(U.Z,{icon:w.U,className:"me-2"}),"Logout Account"]})]})]})},D=a(29352),P=a(33050),$=function(){var e=(0,Z.I0)(),n=(0,Z.v9)(L).sidebarShow;return(0,x.jsxs)(h.PO,{position:"sticky",className:"mb-4",children:[(0,x.jsxs)(h.KB,{fluid:!0,children:[(0,x.jsx)(h.X4,{className:"ps-1",onClick:function(){return e((0,P.$p)({type:"set",sidebarShow:!n}))},children:(0,x.jsx)(U.Z,{icon:A.N,size:"lg"})}),(0,x.jsxs)(h.qy,{className:"mx-auto d-md-none",to:"/",children:[(0,x.jsx)(h.DW,{src:D,height:50,alt:"Logo"}),"Sonax Multitrade"]}),(0,x.jsx)(h.g3,{className:"d-none d-md-flex me-auto",children:(0,x.jsx)(h.U6,{children:(0,x.jsx)(h.AQ,{to:"/dashboard",component:N.OL,children:"Dashboard"})})}),(0,x.jsx)(h.g3,{className:"ms-3",children:(0,x.jsx)(z,{})})]}),(0,x.jsx)(h.rc,{}),(0,x.jsx)(h.KB,{fluid:!0,children:(0,x.jsx)(p,{})})]})},W=a(44925),M=["component","name","badge","icon"],E=["component","name","icon","to"],H=function(e){var n=e.items,a=(0,i.TH)(),o=function(e,n,a){return(0,x.jsxs)(x.Fragment,{children:[n&&n,e&&e,a&&(0,x.jsx)(h.C_,{color:a.color,className:"ms-auto",children:a.text})]})},r=function(e,n){var a=e.component,i=e.name,r=e.badge,c=e.icon,l=(0,W.Z)(e,M),m=a;return(0,s.createElement)(m,(0,t.Z)((0,t.Z)({},l.to&&!l.items&&{component:N.OL}),{},{key:n},l),o(i,c,r))},c=function e(n,s){var i,c=n.component,l=n.name,m=n.icon,d=n.to,u=(0,W.Z)(n,E),h=c;return(0,x.jsx)(h,(0,t.Z)((0,t.Z)({idx:String(s),toggler:o(l,m),visible:a.pathname.startsWith(d)},u),{},{children:null===(i=n.items)||void 0===i?void 0:i.map((function(n,a){return n.items?e(n,a):r(n,a)}))}),s)};return(0,x.jsx)(s.Fragment,{children:n&&n.map((function(e,n){return e.items?c(e,n):r(e,n)}))})},V=["160 160",'\n  <title>coreui logo</title>\n  <g>\n    <g style="fill:#fff;">\n      <path d="M125,47.091,86,24.5743a12,12,0,0,0-12,0L35,47.091a12.0336,12.0336,0,0,0-6,10.3923v45.0334a12.0335,12.0335,0,0,0,6,10.3923l39,22.5166a11.9993,11.9993,0,0,0,12,0l39-22.5166a12.0335,12.0335,0,0,0,6-10.3923V57.4833A12.0336,12.0336,0,0,0,125,47.091Zm-2,55.4257a4,4,0,0,1-2,3.464L82,128.4974a4,4,0,0,1-4,0L39,105.9807a4,4,0,0,1-2-3.464V57.4833a4,4,0,0,1,2-3.4641L78,31.5025a4,4,0,0,1,4,0l39,22.5167a4,4,0,0,1,2,3.4641Z"/>\n      <path d="M103.0216,93.0379h-2.866a4,4,0,0,0-1.9246.4935L80.95,103.0167,61,91.4981V68.5206L80.95,57.002l17.2894,9.455a4,4,0,0,0,1.9192.4905h2.8632a2,2,0,0,0,2-2V62.2357a2,2,0,0,0-1.04-1.7547L84.793,49.9854a8.0391,8.0391,0,0,0-7.8428.09L57,61.5929A8.0243,8.0243,0,0,0,53,68.5216v22.976a8,8,0,0,0,4,6.9283l19.95,11.5185a8.0422,8.0422,0,0,0,7.8433.0879l19.19-10.5311a2,2,0,0,0,1.0378-1.7534v-2.71A2,2,0,0,0,103.0216,93.0379Z"/>\n    </g>\n  </g>\n'],I=a(34358),K=(a(82454),a(34708)),O=a(85602),B=a(35425),F=[{component:h.U6,name:"Dashboard",to:"/dashboard",icon:(0,x.jsx)(U.Z,{icon:K.h,customClassName:"nav-icon"}),badge:{color:"info",text:"NEW"}},{component:h.fd,name:"Users"},{component:h.U6,name:"Direct Register",to:"/direct",icon:(0,x.jsx)(U.Z,{icon:O.g,customClassName:"nav-icon"})},{component:h.U6,name:"All Users",to:"/users",icon:(0,x.jsx)(U.Z,{icon:O.g,customClassName:"nav-icon"})},{component:h.U6,name:"Installments",to:"/emis",icon:(0,x.jsx)(U.Z,{icon:B.T,customClassName:"nav-icon"})}],Q=[{component:h.U6,name:"Dashboard Admin",to:"/dashboardAdmin",icon:(0,x.jsx)(U.Z,{icon:K.h,customClassName:"nav-icon"}),badge:{color:"info",text:"NEW"}},{component:h.fd,name:"Users"},{component:h.U6,name:"Admin Add New User",to:"/adminAdd",icon:(0,x.jsx)(U.Z,{icon:O.g,customClassName:"nav-icon"})},{component:h.U6,name:"All Users",to:"/adminUsers",icon:(0,x.jsx)(U.Z,{icon:O.g,customClassName:"nav-icon"})}],R=a(51692),T=function(){var e=(0,Z.I0)(),n=(0,Z.v9)(L),a=n.sidebarUnfoldable,s=n.sidebarShow,t=(0,R.getProfileData)();return(0,x.jsxs)(h.z3,{style:{"--cui-sidebar-nav-link-hover-bg":"#f11a2e73","--cui-sidebar-nav-link-active-bg":"#f11a2e","--cui-sidebar-bg":"#333232"},position:"fixed",unfoldable:a,visible:s,onVisibleChange:function(n){e((0,P.$p)({type:"set",sidebarShow:n}))},children:[(0,x.jsxs)(h.Dl,{className:"d-none d-md-flex",to:"/",children:[(0,x.jsx)(h.DW,{src:D,width:"70"}),"Sonax Multitrade",(0,x.jsx)(U.Z,{className:"sidebar-brand-narrow",icon:V,height:35})]}),(0,x.jsx)(h.Xk,{children:(0,x.jsx)(I.Z,{children:(0,x.jsx)(H,{items:t&&"superAdmin"===t.role?Q:F})})}),(0,x.jsx)(h.iv,{className:"d-none d-lg-flex",onClick:function(){return e((0,P.$p)({type:"set",sidebarUnfoldable:!a}))}})]})},q=s.memo(T);a(22469);var X=function(){return(0,x.jsxs)("div",{children:[(0,x.jsx)(q,{}),(0,x.jsxs)("div",{className:"wrapper d-flex flex-column min-vh-100 bg-light",children:[(0,x.jsx)($,{}),(0,x.jsx)("div",{className:"body flex-grow-1 px-3",children:(0,x.jsx)(b,{})}),(0,x.jsx)(g,{})]})]})}}}]);
//# sourceMappingURL=783.8256bd31.chunk.js.map