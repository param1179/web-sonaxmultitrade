"use strict";(self.webpackChunksonaxmultitrade=self.webpackChunksonaxmultitrade||[]).push([[783],{35322:function(e,n,a){a.r(n),a.d(n,{default:function(){return te}});var t=a(72791),s=a(1413),o=a(57689),i=t.lazy((function(){return a.e(915).then(a.bind(a,61915))})),r=t.lazy((function(){return a.e(309).then(a.bind(a,64309))})),c=t.lazy((function(){return Promise.all([a.e(260),a.e(4)]).then(a.bind(a,29004))})),l=t.lazy((function(){return a.e(85).then(a.bind(a,48085))})),m=t.lazy((function(){return Promise.all([a.e(126),a.e(304)]).then(a.bind(a,16304))})),d=t.lazy((function(){return Promise.all([a.e(126),a.e(224)]).then(a.bind(a,15224))})),u=t.lazy((function(){return a.e(349).then(a.bind(a,26349))})),h=t.lazy((function(){return Promise.all([a.e(126),a.e(595)]).then(a.bind(a,91595))})),x=t.lazy((function(){return Promise.all([a.e(126),a.e(610)]).then(a.bind(a,22610))})),f=t.lazy((function(){return Promise.all([a.e(126),a.e(191)]).then(a.bind(a,49191))})),p=t.lazy((function(){return a.e(525).then(a.bind(a,33525))})),j=t.lazy((function(){return Promise.all([a.e(126),a.e(8)]).then(a.bind(a,27008))})),b=[{path:"/",exact:!0,name:"Home"},{path:"/dashboardAdmin",name:"Dashboard Admin",element:r},{path:"/dashboard",name:"Dashboard",element:i},{path:"/users",name:"Users",element:c},{path:"/adminUsers",name:"Users",element:l},{path:"/rewards",name:"Users",element:m},{path:"/add",name:"Add User",element:h},{path:"/direct",name:"Direct Register",element:f},{path:"/adminAdd",name:"Admin Add User",element:x},{path:"/payments",name:"Installments",element:t.lazy((function(){return Promise.all([a.e(126),a.e(573)]).then(a.bind(a,53573))}))},{path:"/emis",name:"Installments",element:p},{path:"/prizes",name:"Users",element:u},{path:"/wallet",name:"Wallet",element:j},{path:"/:id",name:"Wallet",element:d},{path:"/password",name:"Change Password",element:t.lazy((function(){return Promise.all([a.e(126),a.e(935)]).then(a.bind(a,50935))}))}],v=a(78983),g=a(80184),N=function(){var e=(0,o.TH)().pathname,n=function(e){var n=[];return e.split("/").reduce((function(e,a,t,s){var o="".concat(e,"/").concat(a),i=function(e,n){var a=n.find((function(n){return n.path===e}));return!!a&&a.name}(o,b);return i&&n.push({pathname:o,name:i,active:t+1===s.length}),o})),n}(e);return(0,g.jsxs)(v.fj,{className:"m-0 ms-2",children:[(0,g.jsx)(v.Sd,{href:"/",children:"Home"}),n.map((function(e,n){return(0,t.createElement)(v.Sd,(0,s.Z)((0,s.Z)({},e.active?{active:!0}:{href:e.pathname}),{},{key:n}),e.name)}))]})},Z=t.memo(N),y=function(){return(0,g.jsx)(v.KB,{lg:!0,children:(0,g.jsx)(t.Suspense,{fallback:(0,g.jsx)(v.LQ,{color:"primary"}),children:(0,g.jsxs)(o.Z5,{children:[b.map((function(e,n){return e.element&&(0,g.jsx)(o.AW,{path:e.path,exact:e.exact,name:e.name,element:(0,g.jsx)(e.element,{})},n)})),(0,g.jsx)(o.AW,{path:"/",element:(0,g.jsx)(o.Fg,{to:"login",replace:!0})})]})})})},U=t.memo(y),A=function(){return(0,g.jsx)(v.pG,{children:(0,g.jsx)("div",{})})},w=t.memo(A),C=a(11087),z=a(59434),k=a(24846),L=a(31389),P=a(62412),S=a(65487),D=a(63232);var W=a.p+"static/media/sonaxmultitrade.753fc9fec7f63d022aeb1c676ec6de1d.svg",$=function(e){return e.commonStore},M=(a(51236),a(82035)),E=function(){var e=(0,o.s0)(),n=((0,z.v9)($).profile,M.Nq.useLogOut().mutate);return(0,g.jsxs)(v.w5,{variant:"nav-item",children:[(0,g.jsx)(v.SQ,{placement:"bottom-end",className:"py-0",caret:!1,children:(0,g.jsx)(v.cU,{status:"success",className:"",src:W,size:"md"})}),(0,g.jsxs)(v.$H,{className:"pt-0",placement:"bottom-end",children:[(0,g.jsx)(v.nR,{className:"bg-light fw-semibold py-2",children:"Account"}),(0,g.jsxs)(v.$f,{href:"#",children:[(0,g.jsx)(k.Z,{icon:P.E,className:"me-2"}),"Profile"]}),(0,g.jsxs)(v.$f,{href:"#",children:[(0,g.jsx)(k.Z,{icon:S.M,className:"me-2"}),"Settings"]}),(0,g.jsxs)(v.$f,{role:"button",onClick:function(){return e("/password")},children:[(0,g.jsx)(k.Z,{icon:S.M,className:"me-2"}),"Change Password"]}),(0,g.jsx)(v.lK,{}),(0,g.jsxs)(v.$f,{onClick:n,children:[(0,g.jsx)(k.Z,{icon:D.U,className:"me-2"}),"Logout Account"]})]})]})},H=a(29352),I=a(33050),R=function(){var e=(0,z.I0)(),n=(0,z.v9)($).sidebarShow;return(0,g.jsxs)(v.PO,{position:"sticky",className:"mb-4",children:[(0,g.jsxs)(v.KB,{fluid:!0,children:[(0,g.jsx)(v.X4,{className:"ps-1",onClick:function(){return e((0,I.$p)({type:"set",sidebarShow:!n}))},children:(0,g.jsx)(k.Z,{icon:L.N,size:"lg"})}),(0,g.jsxs)(v.qy,{className:"mx-auto d-md-none",to:"/",children:[(0,g.jsx)(v.DW,{src:H,height:50,alt:"Logo"}),"Sonax Multitrade"]}),(0,g.jsx)(v.g3,{className:"d-none d-md-flex me-auto",children:(0,g.jsx)(v.U6,{children:(0,g.jsx)(v.AQ,{to:"/dashboard",component:C.OL,children:"Dashboard"})})}),(0,g.jsx)(v.g3,{className:"ms-3",children:(0,g.jsx)(E,{})})]}),(0,g.jsx)(v.rc,{}),(0,g.jsx)(v.KB,{fluid:!0,children:(0,g.jsx)(Z,{})})]})},V=a(44925),K=["component","name","badge","icon"],O=["component","name","icon","to"],B=function(e){var n=e.items,a=(0,o.TH)(),i=function(e,n,a){return(0,g.jsxs)(g.Fragment,{children:[n&&n,e&&e,a&&(0,g.jsx)(v.C_,{color:a.color,className:"ms-auto",children:a.text})]})},r=function(e,n){var a=e.component,o=e.name,r=e.badge,c=e.icon,l=(0,V.Z)(e,K),m=a;return(0,t.createElement)(m,(0,s.Z)((0,s.Z)({},l.to&&!l.items&&{component:C.OL}),{},{key:n},l),i(o,c,r))},c=function e(n,t){var o,c=n.component,l=n.name,m=n.icon,d=n.to,u=(0,V.Z)(n,O),h=c;return(0,g.jsx)(h,(0,s.Z)((0,s.Z)({idx:String(t),toggler:i(l,m),visible:a.pathname.startsWith(d)},u),{},{children:null===(o=n.items)||void 0===o?void 0:o.map((function(n,a){return n.items?e(n,a):r(n,a)}))}),t)};return(0,g.jsx)(t.Fragment,{children:n&&n.map((function(e,n){return e.items?c(e,n):r(e,n)}))})},F=["160 160",'\n  <title>coreui logo</title>\n  <g>\n    <g style="fill:#fff;">\n      <path d="M125,47.091,86,24.5743a12,12,0,0,0-12,0L35,47.091a12.0336,12.0336,0,0,0-6,10.3923v45.0334a12.0335,12.0335,0,0,0,6,10.3923l39,22.5166a11.9993,11.9993,0,0,0,12,0l39-22.5166a12.0335,12.0335,0,0,0,6-10.3923V57.4833A12.0336,12.0336,0,0,0,125,47.091Zm-2,55.4257a4,4,0,0,1-2,3.464L82,128.4974a4,4,0,0,1-4,0L39,105.9807a4,4,0,0,1-2-3.464V57.4833a4,4,0,0,1,2-3.4641L78,31.5025a4,4,0,0,1,4,0l39,22.5167a4,4,0,0,1,2,3.4641Z"/>\n      <path d="M103.0216,93.0379h-2.866a4,4,0,0,0-1.9246.4935L80.95,103.0167,61,91.4981V68.5206L80.95,57.002l17.2894,9.455a4,4,0,0,0,1.9192.4905h2.8632a2,2,0,0,0,2-2V62.2357a2,2,0,0,0-1.04-1.7547L84.793,49.9854a8.0391,8.0391,0,0,0-7.8428.09L57,61.5929A8.0243,8.0243,0,0,0,53,68.5216v22.976a8,8,0,0,0,4,6.9283l19.95,11.5185a8.0422,8.0422,0,0,0,7.8433.0879l19.19-10.5311a2,2,0,0,0,1.0378-1.7534v-2.71A2,2,0,0,0,103.0216,93.0379Z"/>\n    </g>\n  </g>\n'],Q=a(34358),T=(a(82454),a(34708)),X=a(85602),q=a(35425),G=a(45569),_=a(65163),J=[{component:v.U6,name:"Dashboard",to:"/dashboard",icon:(0,g.jsx)(k.Z,{icon:T.h,customClassName:"nav-icon"}),badge:{color:"info",text:"NEW"}},{component:v.fd,name:"Users"},{component:v.U6,name:"Direct Register",to:"/direct",icon:(0,g.jsx)(k.Z,{icon:X.g,customClassName:"nav-icon"})},{component:v.U6,name:"All Users",to:"/users",icon:(0,g.jsx)(k.Z,{icon:X.g,customClassName:"nav-icon"})},{component:v.U6,name:"Installments",to:"/emis",icon:(0,g.jsx)(k.Z,{icon:q.T,customClassName:"nav-icon"})},{component:v.U6,name:"Rewards",to:"/prizes",icon:(0,g.jsx)(k.Z,{icon:G.A,customClassName:"nav-icon"})},{component:v.U6,name:"Wallet",to:"/wallet",icon:(0,g.jsx)(k.Z,{icon:_.X,customClassName:"nav-icon"})}],Y=[{component:v.U6,name:"Dashboard Admin",to:"/dashboardAdmin",icon:(0,g.jsx)(k.Z,{icon:T.h,customClassName:"nav-icon"}),badge:{color:"info",text:"NEW"}},{component:v.fd,name:"Users"},{component:v.U6,name:"Admin Add New User",to:"/adminAdd",icon:(0,g.jsx)(k.Z,{icon:X.g,customClassName:"nav-icon"})},{component:v.U6,name:"All Users",to:"/adminUsers",icon:(0,g.jsx)(k.Z,{icon:X.g,customClassName:"nav-icon"})},{component:v.U6,name:"Rewards",to:"/rewards",icon:(0,g.jsx)(k.Z,{icon:G.A,customClassName:"nav-icon"})}],ee=a(51692),ne=function(){var e=(0,z.I0)(),n=(0,z.v9)($),a=n.sidebarUnfoldable,t=n.sidebarShow,s=(0,ee.getProfileData)();return(0,g.jsxs)(v.z3,{style:{"--cui-sidebar-nav-link-hover-bg":"#f11a2e73","--cui-sidebar-nav-link-active-bg":"#f11a2e","--cui-sidebar-bg":"#333232"},position:"fixed",unfoldable:a,visible:t,onVisibleChange:function(n){e((0,I.$p)({type:"set",sidebarShow:n}))},children:[(0,g.jsxs)(v.Dl,{className:"d-none d-md-flex",to:"/",children:[(0,g.jsx)(v.DW,{src:H,width:"70"}),"Sonax Multitrade",(0,g.jsx)(k.Z,{className:"sidebar-brand-narrow",icon:F,height:35})]}),(0,g.jsx)(v.Xk,{children:(0,g.jsx)(Q.Z,{children:(0,g.jsx)(B,{items:s&&"superAdmin"===s.role?Y:J})})}),(0,g.jsx)(v.iv,{className:"d-none d-lg-flex",onClick:function(){return e((0,I.$p)({type:"set",sidebarUnfoldable:!a}))}})]})},ae=t.memo(ne);a(22469);var te=function(){return(0,g.jsxs)("div",{children:[(0,g.jsx)(ae,{}),(0,g.jsxs)("div",{className:"wrapper d-flex flex-column min-vh-100 bg-light",children:[(0,g.jsx)(R,{}),(0,g.jsx)("div",{className:"body flex-grow-1 px-3",children:(0,g.jsx)(U,{})}),(0,g.jsx)(w,{})]})]})}}}]);
//# sourceMappingURL=783.952dcd6e.chunk.js.map