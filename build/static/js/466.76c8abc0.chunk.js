"use strict";(self.webpackChunksonaxmultitrade=self.webpackChunksonaxmultitrade||[]).push([[466],{2466:function(e,t,n){n.r(t);var r=n(74165),s=n(15861),a=n(29439),o=n(72791),c=n(78983),l=n(82035),i=n(57689),u=n(22469),d=n(30337),f=n(70610),m=n(80184);t.default=function(){var e=(0,i.TH)().state,t=e.id,n=e.name,p=e.uId,h=(0,o.useState)(0),v=(0,a.Z)(h,2),b=v[0],y=v[1],x=(0,o.useState)(0),g=(0,a.Z)(x,2),j=g[0],C=g[1],k=(0,o.useState)(0),N=(0,a.Z)(k,2),w=N[0],E=N[1],O=l.Nq.useIntallments(t),P=(O.isLoading,O.data),I=O.refetch,Z=l.Nq.useGetRewards(),_=Z.isLoading,A=Z.data,L=l.Nq.useUpdatePayment();(0,o.useEffect)((function(){function e(){return e=(0,s.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.Z.get("admin/userTabs/".concat(t,"?position=Left")).then((function(e){y(null===e||void 0===e?void 0:e.active)})).then(function(){var e=(0,s.Z)((0,r.Z)().mark((function e(n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.Z.get("admin/userTabs/".concat(t,"?position=Right"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(e){C(null===e||void 0===e?void 0:e.active)}));case 2:case"end":return e.stop()}}),e)}))),e.apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),(0,o.useEffect)((function(){R()}),[j]);var R=function(){var e=j<=b?j:b,t=Math.floor(2*e/2);E(t)},U=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.target.id,(0,d._1)({title:"Update this user",message:"Are you sure?",buttons:[{label:"Yes",onClick:function(){var e=(0,s.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.mutateAsync(n);case 2:200===(null===(t=e.sent)||void 0===t?void 0:t.status)&&I();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{label:"No"}]});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,m.jsx)(c.rb,{children:(0,m.jsx)(c.b7,{md:12,children:(0,m.jsxs)(c.rb,{children:[(0,m.jsx)(c.b7,{md:4,children:(0,m.jsxs)(c.xH,{className:"mb-2",children:[(0,m.jsxs)(c.bn,{children:[(0,m.jsx)("strong",{children:"Rewards Achievement Chart"}),(0,m.jsxs)("div",{children:[(0,m.jsxs)(c.C_,{color:"success",className:"mx-2",children:["Left Active: ",b]}),(0,m.jsxs)(c.C_,{color:"success",className:"mx-2",children:["Right Active: ",j]}),(0,m.jsxs)(c.C_,{color:"success",className:"mx-2",children:["Total Pairs: ",w&&w]})]})]}),(0,m.jsx)(c.sl,{children:(0,m.jsx)(c.KB,{children:(0,m.jsx)(c.rb,{children:(0,m.jsxs)("div",{className:"",children:[(0,m.jsx)("h5",{children:"Rewards Time Line"}),(0,m.jsx)("ul",{className:"timeline",children:!_&&A.rewards.map((function(e,t){return(0,m.jsxs)("li",{className:e.onPairs<=w?"achive":"",children:[(0,m.jsxs)("p",{className:e.onPairs<=w?"text-success float-right":"float-right",children:[e.rewardLevel," on ",e.onPairs," Pairs"]}),(0,m.jsxs)("p",{className:e.onPairs<=w?"text-success float-right":"float-right",children:["(",e.reward,")"]})]},t)}))})]})})})})]})}),(0,m.jsx)(c.b7,{md:8,children:(0,m.jsxs)(c.xH,{children:[(0,m.jsx)(c.bn,{children:(0,m.jsxs)("strong",{children:[n,"'s ","("+p+")"," Installments Chart"]})}),(0,m.jsx)(c.sl,{children:(0,m.jsx)(c.rb,{className:"table-row",children:(0,m.jsxs)(c.Sx,{align:"middle",bordered:!0,className:"mb-0 border",hover:!0,responsive:!0,striped:!0,children:[(0,m.jsx)(c.V,{color:"light",children:(0,m.jsxs)(c.T6,{children:[(0,m.jsx)(c.is,{children:"S. No."}),(0,m.jsx)(c.is,{children:"Installments"}),(0,m.jsx)(c.is,{children:"Amount"}),(0,m.jsx)(c.is,{children:"Status"})]})}),(0,m.jsx)(c.NR,{children:null===P||void 0===P?void 0:P.data.map((function(e,t){return(0,m.jsxs)(c.T6,{"v-for":"item in tableItems",children:[(0,m.jsx)(c.NN,{children:t+1}),(0,m.jsxs)(c.NN,{children:[(0,m.jsx)("div",{children:0===t?"Downpayment":"Payment"}),(0,m.jsxs)("div",{className:"small text-medium-emphasis",children:[(0,m.jsx)("span",{children:!e.status&&" Unpaid |"})," ",e.status&&"Paid on: ".concat(u.YM.formatRegister(e.updatedAt)," ")]})]}),(0,m.jsxs)(c.NN,{children:["Rs. ",e.price]}),(0,m.jsx)(c.NN,{children:(0,m.jsx)("h5",{children:(0,m.jsx)(c.C_,{id:e._id,role:e.status?void 0:"button",color:e.status?"success":"danger",onClick:function(t){return e.status?"":U(t)},children:e.status?"Paid":"Pay"})})})]},t)}))})]})})})]})})]})})})}},30337:function(e,t,n){var r,s,a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t._1=function(e){document.body.classList.add("react-confirm-alert-body-element"),function(){if(document.getElementById("react-confirm-alert-firm-svg"))return;var e="http://www.w3.org/2000/svg",t=document.createElementNS(e,"feGaussianBlur");t.setAttribute("stdDeviation","0.3");var n=document.createElementNS(e,"filter");n.setAttribute("id","gaussian-blur"),n.appendChild(t);var r=document.createElementNS(e,"svg");r.setAttribute("id","react-confirm-alert-firm-svg"),r.setAttribute("class","react-confirm-alert-svg"),r.appendChild(n),document.body.appendChild(r)}(),function(e){var t=document.getElementById(e.targetId||v);e.targetId&&!t&&console.error("React Confirm Alert:","Can not get element id (#"+e.targetId+")");t||(document.body.children[0].classList.add("react-confirm-alert-blur"),(t=document.createElement("div")).id=v,document.body.appendChild(t)),(h=(0,u.createRoot)(t)).render(l.default.createElement(p,e))}(e)};var c=n(72791),l=d(c),i=d(n(52007)),u=n(1250);function d(e){return e&&e.__esModule?e:{default:e}}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var p=(s=r=function(e){function t(){var e,n,r;f(this,t);for(var s=arguments.length,a=Array(s),o=0;o<s;o++)a[o]=arguments[o];return n=r=m(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r.handleClickButton=function(e){e.onClick&&e.onClick(),r.close()},r.handleClickOverlay=function(e){var t=r.props,n=t.closeOnClickOutside,s=t.onClickOutside,a=e.target===r.overlay;n&&a&&(s(),r.close()),e.stopPropagation()},r.close=function(){var e=r.props.afterClose;x(),y(r.props),b(e)},r.keyboard=function(e){var t=r.props,n=t.closeOnEscape,s=t.onKeypressEscape,a=t.onkeyPress,o=t.keyCodeForClose,c=e.keyCode,l=27===c;o.includes(c)&&r.close(),n&&l&&(s(e),r.close()),a&&a()},r.componentDidMount=function(){document.addEventListener("keydown",r.keyboard,!1)},r.componentWillUnmount=function(){document.removeEventListener("keydown",r.keyboard,!1),r.props.willUnmount()},r.renderCustomUI=function(){var e=r.props,t=e.title,n=e.message,s=e.buttons;return(0,e.customUI)({title:t,message:n,buttons:s,onClose:r.close})},m(r,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.title,r=t.message,s=t.buttons,o=t.childrenElement,c=t.customUI,i=t.overlayClassName;return l.default.createElement("div",{className:"react-confirm-alert-overlay "+i,ref:function(t){return e.overlay=t},onClick:this.handleClickOverlay},l.default.createElement("div",{className:"react-confirm-alert"},c?this.renderCustomUI():l.default.createElement("div",{className:"react-confirm-alert-body"},n&&l.default.createElement("h1",null,n),r,o(),l.default.createElement("div",{className:"react-confirm-alert-button-group"},s.map((function(t,n){return l.default.createElement("button",a({key:n,className:t.className},t,{onClick:function(n){return e.handleClickButton(t)}}),t.label)}))))))}}]),t}(c.Component),r.propTypes={title:i.default.string,message:i.default.string,buttons:i.default.array.isRequired,childrenElement:i.default.func,customUI:i.default.func,closeOnClickOutside:i.default.bool,closeOnEscape:i.default.bool,keyCodeForClose:i.default.arrayOf(i.default.number),willUnmount:i.default.func,afterClose:i.default.func,onClickOutside:i.default.func,onKeypressEscape:i.default.func,onkeyPress:i.default.func,overlayClassName:i.default.string},r.defaultProps={buttons:[{label:"Cancel",onClick:function(){return null},className:null},{label:"Confirm",onClick:function(){return null},className:null}],childrenElement:function(){return null},closeOnClickOutside:!0,closeOnEscape:!0,keyCodeForClose:[],willUnmount:function(){return null},afterClose:function(){return null},onClickOutside:function(){return null},onKeypressEscape:function(){return null}},s);var h=null,v="react-confirm-alert";function b(e){var t=document.getElementById("react-confirm-alert-firm-svg");t&&t.parentNode.removeChild(t),document.body.children[0].classList.remove("react-confirm-alert-blur"),e()}function y(e){var t=document.getElementById(e.targetId||v);t&&h.unmount(t)}function x(){document.body.classList.remove("react-confirm-alert-body-element")}}}]);
//# sourceMappingURL=466.76c8abc0.chunk.js.map