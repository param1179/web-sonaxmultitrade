"use strict";(self.webpackChunksonaxmultitrade=self.webpackChunksonaxmultitrade||[]).push([[349],{26349:function(e,s,t){t.r(s);var n=t(74165),r=t(15861),a=t(29439),i=t(72791),c=t(78983),o=t(82035),l=t(51692),u=t(70610),d=t(80184);s.default=function(){var e=(0,l.getProfileData)(),s=(0,i.useState)(0),t=(0,a.Z)(s,2),f=t[0],h=t[1],x=(0,i.useState)(0),p=(0,a.Z)(x,2),m=p[0],v=p[1],j=(0,i.useState)(0),g=(0,a.Z)(j,2),w=g[0],Z=g[1],N=o.g8.useGetRewards(),P=N.isLoading,b=N.data;(0,i.useEffect)((function(){function s(){return s=(0,r.Z)((0,n.Z)().mark((function s(){return(0,n.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,u.Z.get("users/teamList/".concat(e._id,"?position=Left")).then((function(e){h(null===e||void 0===e?void 0:e.active)})).then(function(){var s=(0,r.Z)((0,n.Z)().mark((function s(t){return(0,n.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,u.Z.get("users/teamList/".concat(e._id,"?position=Right"));case 2:return s.abrupt("return",s.sent);case 3:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}()).then((function(e){v(null===e||void 0===e?void 0:e.active)}));case 2:case"end":return s.stop()}}),s)}))),s.apply(this,arguments)}!function(){s.apply(this,arguments)}(),k()}),[]);var k=function(){var e=m<=f?m:f,s=Math.floor(2*e/2);Z(s)};return(0,d.jsx)(c.rb,{children:(0,d.jsx)(c.b7,{md:12,children:(0,d.jsxs)(c.xH,{children:[(0,d.jsxs)(c.bn,{children:[(0,d.jsx)("strong",{children:"Rewards"}),(0,d.jsxs)(c.C_,{color:"success",className:"float-end mx-2",children:["Total Pairs: ",w]}),(0,d.jsxs)(c.C_,{color:"success",className:"float-end mx-2",children:["Right Active: ",m]}),(0,d.jsxs)(c.C_,{color:"success",className:"float-end mx-2",children:["Left Active: ",f]})]}),(0,d.jsx)(c.sl,{children:(0,d.jsx)("div",{className:"",children:(0,d.jsx)("ul",{className:"timeline",children:!P&&b.rewards.map((function(e,s){return(0,d.jsxs)("li",{className:e.onPairs<=w?"achive":"",children:[(0,d.jsxs)("p",{className:e.onPairs<=w?"text-success float-right":"float-right",children:[e.rewardLevel," on ",e.onPairs," Pairs"]}),(0,d.jsxs)("p",{className:e.onPairs<=w?"text-success float-right":"float-right",children:["(",e.reward,")"]})]},s)}))})})})]})})})}}}]);
//# sourceMappingURL=349.c31ee7a4.chunk.js.map