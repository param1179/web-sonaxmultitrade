"use strict";(self.webpackChunksonaxmultitrade=self.webpackChunksonaxmultitrade||[]).push([[4],{29004:function(i,l,e){e.r(l),e.d(l,{default:function(){return T}});var d=e(1413),n=e(29439),s=e(30168),o=e(72791),t=e(82035),r=e(58393),c=e(90082),a=e(51692),u=e(29352),v=e(57689),h=e(78983),x=e(80184);var m=function i(l){var e,d,n,s=l.count,c=l.item,a=l.num,m=l.StyledNode,j=(l.pId,(0,v.s0)());console.log(c);var p=c.childId,f=c.parentId;(0,o.useEffect)((function(){s+=1}),[]);var g,N=t.g8.useGetTeams(p._id),b=N.isloading,I=N.data,C=200===(null===I||void 0===I?void 0:I.status)&&(null===I||void 0===I||null===(e=I.data)||void 0===e?void 0:e.parentId),T=200===(null===I||void 0===I?void 0:I.status)?null===I||void 0===I||null===(d=I.data)||void 0===d?void 0:d.childs:[],S=T&&0!==T.length;return S&&"Right"===(null===I||void 0===I||null===(n=I.data)||void 0===n?void 0:n.childs[0].placement)&&(T=null===I||void 0===I||null===(g=I.data)||void 0===g?void 0:g.childs.reverse()),(0,x.jsx)(r.O,{label:(0,x.jsx)(m,{children:(0,x.jsxs)("div",{role:"button",onClick:function(){return p.uId?j("/users",{state:{userId:p._id}}):j("/add",{state:{pId:f,placement:0===a?"Left":"Right"}})},children:[(0,x.jsx)(h.DW,{src:u,height:50,alt:"Logo"}),(0,x.jsxs)("div",{className:p.uId?"border border-success tree-content ".concat(p.isCompleted?"app-bg-active":"app-bg-inactive"):"border border-success tree-content app-bg-2",children:[(0,x.jsx)("div",{children:p.uId?p.uId:""}),(0,x.jsx)("div",{children:p.firstName})]})]})}),children:S&&s<6?T.map((function(l,e){return b?(0,x.jsx)(x.Fragment,{children:"OK"}):(0,x.jsx)(i,{item:l,num:e,StyledNode:m,pId:C},e)})):null},a)},j=e(24846),p=e(22655);var f=e(93433),g=e(22469),N=[];var b=function i(l){var e,d,n=l.count,s=l.item,r=l.num,c=l.StyledNode,a=s.childId;N=[].concat((0,f.Z)(N),[null!==(null===a||void 0===a?void 0:a._id)&&a]),(0,o.useEffect)((function(){n+=1}),[]);var u=t.g8.useGetTeams(null===a||void 0===a?void 0:a._id),v=u.isloading,m=u.data,j=(200===(null===m||void 0===m?void 0:m.status)&&(null===m||void 0===m||null===(e=m.data)||void 0===e||e.parentId),200===(null===m||void 0===m?void 0:m.status)?null===m||void 0===m||null===(d=m.data)||void 0===d?void 0:d.childs:[]),p=j&&0!==j.length;return(0,x.jsxs)(x.Fragment,{children:[null!==a._id&&(0,x.jsxs)(h.T6,{"v-for":"item in tableItems",children:[(0,x.jsx)(h.NN,{children:"#"}),(0,x.jsxs)(h.NN,{children:[(0,x.jsx)("div",{children:(null===a||void 0===a?void 0:a.firstName)+" "+(null===a||void 0===a?void 0:a.lastName)}),(0,x.jsxs)("div",{className:"small text-medium-emphasis",children:[(0,x.jsx)("span",{children:"New |"})," Registered on: ",g.YM.formatRegister(null===a||void 0===a?void 0:a.createdAt)]})]}),(0,x.jsx)(h.NN,{children:null===a||void 0===a?void 0:a.uId}),(0,x.jsx)(h.NN,{children:(0,x.jsx)("h5",{children:(0,x.jsx)(h.C_,{id:null===a||void 0===a?void 0:a._id,color:null!==a&&void 0!==a&&a.isCompleted?"success":"danger",children:null!==a&&void 0!==a&&a.isCompleted?"Active":"Inactive"})})})]},r),p?j.map((function(l,e){var d;return v&&null===(null===l||void 0===l||null===(d=l.childId)||void 0===d?void 0:d._id)?(0,x.jsx)(x.Fragment,{children:"OK"}):(0,x.jsx)(i,{count:n++,item:l,num:e,StyledNode:c},e)})):null]})};e(70610);var I,C=c.ZP.div(I||(I=(0,s.Z)(["\n  padding: 5px;\n  display: inline-block;\n"])));var T=function(){var i,l,e,s,c,f,N,I,T,S,_,k,R,Z=(0,v.TH)().state,y=void 0===Z?null:Z,L=(0,v.TH)(),D=(0,v.s0)(),A=(0,a.getProfileData)(),w=(0,o.useState)(1),G=(0,n.Z)(w,2),E=G[0],F=G[1],O=(0,o.useState)({total:0,active:0,inActive:0}),H=(0,n.Z)(O,2),M=(H[0],H[1],(0,o.useState)({visible:!1,position:"Left"})),P=(0,n.Z)(M,2),W=P[0],K=P[1],U=(0,o.useState)({visible:!1,position:"Direct"}),V=(0,n.Z)(U,2),Y=V[0],z=V[1];(0,o.useEffect)((function(){D(L.pathname,{})}),[E]);var B,q=y&&null!==y&&void 0!==y&&y.userId?null===y||void 0===y?void 0:y.userId:A._id,J=t.g8.useGetTeams(q).data,Q=t.g8.useGetDirectTeams(),X=Q.isLoading,$=Q.data,ii=t.g8.useGetTeamList(W.position,q),li=ii.isLoading,ei=ii.data,di=ii.refetch,ni=null===J||void 0===J||null===(i=J.data)||void 0===i?void 0:i.childs;return"Right"===(null===J||void 0===J||null===(l=J.data)||void 0===l?void 0:l.childs[0].placement)&&(ni=null===J||void 0===J||null===(B=J.data)||void 0===B?void 0:B.childs.reverse()),(0,o.useEffect)((function(){di()}),[W.position]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(h.rb,{children:(0,x.jsx)(h.b7,{xs:12,children:(0,x.jsxs)(h.xH,{className:"mb-4",children:[(0,x.jsxs)(h.bn,{children:[(0,x.jsx)("strong",{children:"All Team's Tree"}),(0,x.jsxs)("div",{children:[(0,x.jsxs)(h.u5,{color:"primary mx-2",className:"float-end",onClick:function(){return z({visible:!Y.visible,position:"Direct"})},children:["Direct: ",null===$||void 0===$?void 0:$.direct.length]}),(0,x.jsx)(h.u5,{color:"primary mx-2",onClick:function(){return K({visible:!W.visible,position:"Left"})},className:"",children:"Left"}),(0,x.jsx)(h.u5,{color:"primary mx-2",onClick:function(){return K({visible:!W.visible,position:"Right"})},className:"",children:"Right"})]})]}),(0,x.jsxs)(h.sl,{className:"divScroll",children:[y&&(null===y||void 0===y?void 0:y.userId)&&(0,x.jsxs)(h.u5,{size:"sm",onClick:function(){return F(Math.random())},children:["Go to top",(0,x.jsx)(j.Z,{icon:p.T})]}),(0,x.jsx)(r.m,{lineWidth:"2px",lineColor:"green",lineBorderRadius:"10px",label:(0,x.jsxs)(C,{children:[(0,x.jsx)(h.DW,{src:u,height:50,alt:"Logo"}),(0,x.jsxs)("div",{className:"border border-success tree-content ".concat(y?null!==J&&void 0!==J&&null!==(c=J.data)&&void 0!==c&&null!==(f=c.parentId)&&void 0!==f&&f.isCompleted?"app-bg-active":"app-bg-inactive":null!==J&&void 0!==J&&null!==(e=J.data)&&void 0!==e&&null!==(s=e.parentId)&&void 0!==s&&s.isCompleted?"app-bg-active":"app-bg-top"),children:[(0,x.jsx)("div",{children:null!==J&&void 0!==J&&null!==(N=J.data)&&void 0!==N&&null!==(I=N.parentId)&&void 0!==I&&I.uId?null===J||void 0===J||null===(T=J.data)||void 0===T||null===(S=T.parentId)||void 0===S?void 0:S.uId:""}),(0,x.jsx)("div",{children:null===J||void 0===J||null===(_=J.data)||void 0===_||null===(k=_.parentId)||void 0===k?void 0:k.firstName})]})]}),children:ni&&(null===(R=ni)||void 0===R?void 0:R.map((function(i,l){return(0,x.jsx)(m,{count:0,item:i,num:l,StyledNode:C,pId:null===J||void 0===J?void 0:J.data.parentId},l)})))})]})]})})}),(0,x.jsxs)(h.Tk,{fullscreen:"lg",visible:W.visible,onClose:function(){K((0,d.Z)((0,d.Z)({},W),{},{visible:!1}))},children:[(0,x.jsx)(h.p0,{children:(0,x.jsxs)(h.fl,{children:[W.position," Side Team List"]})}),(0,x.jsx)(h.sD,{className:"overflow-auto",children:(0,x.jsxs)(h.rb,{children:[!li&&(0,x.jsxs)(h.PO,{children:[(0,x.jsx)("h5",{children:(0,x.jsx)(h.C_,{color:"primary",children:"Total: "+(null===ei||void 0===ei?void 0:ei.total)})}),(0,x.jsx)("h5",{children:(0,x.jsx)(h.C_,{color:"success",children:"Active: "+(null===ei||void 0===ei?void 0:ei.active)})}),(0,x.jsx)("h5",{children:(0,x.jsx)(h.C_,{color:"danger",children:"Inactive: "+(null===ei||void 0===ei?void 0:ei.inActive)})})]}),(0,x.jsxs)(h.Sx,{align:"middle",bordered:!0,className:"mb-0 border",hover:!0,responsive:!0,striped:!0,children:[(0,x.jsx)(h.V,{color:"light",children:(0,x.jsxs)(h.T6,{children:[(0,x.jsx)(h.is,{children:"S. No."}),(0,x.jsx)(h.is,{children:"Name"}),(0,x.jsx)(h.is,{children:"User Id"}),(0,x.jsx)(h.is,{children:"Status"})]})}),(0,x.jsx)(h.NR,{children:ni&&(0,x.jsx)(b,{count:0,item:ni.filter((function(i){return i.placement===W.position}))[0],num:0,StyledNode:C,pId:null===J||void 0===J?void 0:J.data.parentId},0)})]})]})})]}),(0,x.jsxs)(h.Tk,{fullscreen:"lg",visible:Y.visible,onClose:function(){K((0,d.Z)((0,d.Z)({},Y),{},{visible:!1}))},children:[(0,x.jsx)(h.p0,{children:(0,x.jsxs)(h.fl,{children:[Y.position," Team List"]})}),(0,x.jsx)(h.sD,{className:"overflow-auto",children:(0,x.jsx)(h.rb,{children:(0,x.jsxs)(h.Sx,{align:"middle",bordered:!0,className:"mb-0 border",hover:!0,responsive:!0,striped:!0,children:[(0,x.jsx)(h.V,{color:"light",children:(0,x.jsxs)(h.T6,{children:[(0,x.jsx)(h.is,{children:"S. No."}),(0,x.jsx)(h.is,{children:"Name"}),(0,x.jsx)(h.is,{children:"User Id"}),(0,x.jsx)(h.is,{children:"Status"})]})}),(0,x.jsx)(h.NR,{children:!X&&(null===$||void 0===$?void 0:$.direct.map((function(i,l){var e,d,n,s,o,t,r;return(0,x.jsxs)(h.T6,{"v-for":"item in tableItems",children:[(0,x.jsx)(h.NN,{children:"#"+(l+1)}),(0,x.jsxs)(h.NN,{children:[(0,x.jsx)("div",{children:(null===(e=i.childs[0].childId)||void 0===e?void 0:e.firstName)+" "+(null===(d=i.childs[0].childId)||void 0===d?void 0:d.lastName)}),(0,x.jsxs)("div",{className:"small text-medium-emphasis",children:[(0,x.jsx)("span",{children:"New |"})," Registered on:"," ",g.YM.formatRegister(null===(n=i.childs[0].childId)||void 0===n?void 0:n.createdAt)]})]}),(0,x.jsx)(h.NN,{children:null===(s=i.childs[0].childId)||void 0===s?void 0:s.uId}),(0,x.jsx)(h.NN,{children:(0,x.jsx)("h5",{children:(0,x.jsx)(h.C_,{id:null===(o=i.childs[0].childId)||void 0===o?void 0:o._id,color:null!==(t=i.childs[0].childId)&&void 0!==t&&t.isCompleted?"success":"danger",children:null!==(r=i.childs[0].childId)&&void 0!==r&&r.isCompleted?"Active":"Inactive"})})})]},l)})))})]})})})]})]})}}}]);
//# sourceMappingURL=4.e9e5a4ee.chunk.js.map