/*! For license information please see 514.d86785e3.chunk.js.LICENSE.txt */
(self.webpackChunksonaxmultitrade=self.webpackChunksonaxmultitrade||[]).push([[514],{48514:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return C}});var r=n(74165),a=n(15861),o=n(29439),l=n(72791),i=n(91933),s=n(82035),c=(n(58393),n(4942)),u=n(81694),d=n.n(u),f=n(93433),m="...",p=function(e,t){var n=t-e+1;return Array.from({length:n},(function(t,n){return n+e}))},h=n(80184),v=function(e){var t=e.onPageChange,n=e.totalCount,r=e.siblingCount,a=void 0===r?1:r,o=e.currentPage,i=e.pageSize,s=e.className,u=function(e){var t=e.totalCount,n=e.pageSize,r=e.siblingCount,a=void 0===r?1:r,o=e.currentPage;return(0,l.useMemo)((function(){var e=Math.ceil(t/n);if(a+5>=e)return p(1,e);var r=Math.max(o-a,1),l=Math.min(o+a,e),i=r>2,s=l<e-2,c=1,u=e;if(!i&&s){var d=p(1,3+2*a);return[].concat((0,f.Z)(d),[m,e])}if(i&&!s){var h=p(e-(3+2*a)+1,e);return[c,m].concat((0,f.Z)(h))}if(i&&s){var v=p(r,l);return[c,m].concat((0,f.Z)(v),[m,u])}}),[t,n,a,o])}({currentPage:o,totalCount:n,siblingCount:a,pageSize:i});if(0===o||u.length<2)return null;var v=u[u.length-1];return(0,h.jsxs)("ul",{className:d()("pagination-container",(0,c.Z)({},s,s)),children:[(0,h.jsx)("li",{className:d()("pagination-item",{disabled:1===o}),onClick:function(){t(o-1)},children:(0,h.jsx)("div",{className:"arrow left"})}),u.map((function(e,n){return e===m?(0,h.jsx)("li",{className:"pagination-item dots",children:"\u2026"},n):(0,h.jsx)("li",{className:d()("pagination-item",{selected:e===o}),onClick:function(){return t(e)},children:e},n)})),(0,h.jsx)("li",{className:d()("pagination-item",{disabled:o===v}),onClick:function(){t(o+1)},children:(0,h.jsx)("div",{className:"arrow right"})})]})},b=n(78983),g=n(57689),y=n(30337);var C=function(){var e=(0,g.s0)(),t=((0,i.useQueryClient)(),(0,l.useState)(10)),n=(0,o.Z)(t,2),c=n[0],u=(n[1],(0,l.useState)(10)),d=(0,o.Z)(u,2),f=(d[0],d[1]),m=(0,l.useState)(1),p=(0,o.Z)(m,2),C=p[0],x=p[1],j=(0,l.useState)(""),N=(0,o.Z)(j,2),k=N[0],E=N[1],w=s.Nq.useGetUsers(c,C,k),O=w.isLoading,S=w.data,I=w.refetch,P=null===S||void 0===S?void 0:S.totalUsers,U=null===S||void 0===S?void 0:S.users,_=s.Nq.useUpdateUser(),A=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.target.id,(0,y._1)({title:"Update this user",message:"Are you sure?",buttons:[{label:"Yes",onClick:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.mutateAsync(n);case 2:200===(null===(t=e.sent)||void 0===t?void 0:t.status)&&I();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{label:"No"}]});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,l.useEffect)((function(){E(""),f(1)}),[]),(0,h.jsx)(b.rb,{children:(0,h.jsx)(b.b7,{md:12,children:(0,h.jsxs)(b.xH,{children:[(0,h.jsx)(b.bn,{children:(0,h.jsx)("strong",{children:"All Users"})}),(0,h.jsxs)(b.sl,{children:[(0,h.jsx)(b.rb,{className:"mb-4",children:(0,h.jsx)(b.b7,{xs:6,children:(0,h.jsx)(b.lx,{className:"d-flex",children:(0,h.jsx)(b.jO,{type:"search",className:"me-2",placeholder:"Search: 'Email, Name'",name:"search",value:k,onChange:function(e){E(e.target.value),f(1)}})})})}),(0,h.jsx)(b.rb,{className:"table-row",children:(0,h.jsxs)(b.Sx,{align:"middle",bordered:!0,className:"mb-0 border",hover:!0,responsive:!0,striped:!0,children:[(0,h.jsx)(b.V,{color:"light",children:(0,h.jsxs)(b.T6,{children:[(0,h.jsx)(b.is,{children:"S. No."}),(0,h.jsx)(b.is,{children:"Name"}),(0,h.jsx)(b.is,{children:"User Id"}),(0,h.jsx)(b.is,{children:"Status"}),(0,h.jsx)(b.is,{children:"Action"})]})}),(0,h.jsx)(b.NR,{children:null===U||void 0===U?void 0:U.map((function(t,n){return(0,h.jsxs)(b.T6,{"v-for":"item in tableItems",children:[(0,h.jsx)(b.NN,{children:n+1}),(0,h.jsxs)(b.NN,{children:[(0,h.jsx)("div",{children:t.firstName+" "+t.lastName}),(0,h.jsxs)("div",{className:"small text-medium-emphasis",children:[(0,h.jsx)("span",{children:"New |"})," Registered on: ","01/02/2023"]})]}),(0,h.jsx)(b.NN,{children:t.uId}),(0,h.jsx)(b.NN,{children:(0,h.jsx)("h5",{children:(0,h.jsx)(b.C_,{id:t._id,onClick:A,role:"button",color:t.isCompleted?"success":"danger",children:t.isCompleted?"Active":"Inactive"})})}),(0,h.jsx)(b.NN,{children:(0,h.jsx)("h5",{role:"button",onClick:function(){return e("/payments",{state:{id:t._id,name:t.firstName+" "+t.lastName,uId:t.uId}})},children:(0,h.jsx)(b.C_,{color:"success",children:"View"})})})]},n)}))})]})}),!O&&(0,h.jsx)(v,{className:"pagination-bar",currentPage:C,totalCount:P,pageSize:null===U||void 0===U?void 0:U.length,onPageChange:function(e){return x(e)}})]})]})})})}},81694:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var l=a.apply(null,n);l&&e.push(l)}}else if("object"===o){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var i in n)r.call(n,i)&&n[i]&&e.push(i)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},30337:function(e,t,n){"use strict";var r,a,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t._1=function(e){document.body.classList.add("react-confirm-alert-body-element"),function(){if(document.getElementById("react-confirm-alert-firm-svg"))return;var e="http://www.w3.org/2000/svg",t=document.createElementNS(e,"feGaussianBlur");t.setAttribute("stdDeviation","0.3");var n=document.createElementNS(e,"filter");n.setAttribute("id","gaussian-blur"),n.appendChild(t);var r=document.createElementNS(e,"svg");r.setAttribute("id","react-confirm-alert-firm-svg"),r.setAttribute("class","react-confirm-alert-svg"),r.appendChild(n),document.body.appendChild(r)}(),function(e){var t=document.getElementById(e.targetId||v);e.targetId&&!t&&console.error("React Confirm Alert:","Can not get element id (#"+e.targetId+")");t||(document.body.children[0].classList.add("react-confirm-alert-blur"),(t=document.createElement("div")).id=v,document.body.appendChild(t)),(h=(0,u.createRoot)(t)).render(s.default.createElement(p,e))}(e)};var i=n(72791),s=d(i),c=d(n(52007)),u=n(1250);function d(e){return e&&e.__esModule?e:{default:e}}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var p=(a=r=function(e){function t(){var e,n,r;f(this,t);for(var a=arguments.length,o=Array(a),l=0;l<a;l++)o[l]=arguments[l];return n=r=m(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),r.handleClickButton=function(e){e.onClick&&e.onClick(),r.close()},r.handleClickOverlay=function(e){var t=r.props,n=t.closeOnClickOutside,a=t.onClickOutside,o=e.target===r.overlay;n&&o&&(a(),r.close()),e.stopPropagation()},r.close=function(){var e=r.props.afterClose;y(),g(r.props),b(e)},r.keyboard=function(e){var t=r.props,n=t.closeOnEscape,a=t.onKeypressEscape,o=t.onkeyPress,l=t.keyCodeForClose,i=e.keyCode,s=27===i;l.includes(i)&&r.close(),n&&s&&(a(e),r.close()),o&&o()},r.componentDidMount=function(){document.addEventListener("keydown",r.keyboard,!1)},r.componentWillUnmount=function(){document.removeEventListener("keydown",r.keyboard,!1),r.props.willUnmount()},r.renderCustomUI=function(){var e=r.props,t=e.title,n=e.message,a=e.buttons;return(0,e.customUI)({title:t,message:n,buttons:a,onClose:r.close})},m(r,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),l(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.title,r=t.message,a=t.buttons,l=t.childrenElement,i=t.customUI,c=t.overlayClassName;return s.default.createElement("div",{className:"react-confirm-alert-overlay "+c,ref:function(t){return e.overlay=t},onClick:this.handleClickOverlay},s.default.createElement("div",{className:"react-confirm-alert"},i?this.renderCustomUI():s.default.createElement("div",{className:"react-confirm-alert-body"},n&&s.default.createElement("h1",null,n),r,l(),s.default.createElement("div",{className:"react-confirm-alert-button-group"},a.map((function(t,n){return s.default.createElement("button",o({key:n,className:t.className},t,{onClick:function(n){return e.handleClickButton(t)}}),t.label)}))))))}}]),t}(i.Component),r.propTypes={title:c.default.string,message:c.default.string,buttons:c.default.array.isRequired,childrenElement:c.default.func,customUI:c.default.func,closeOnClickOutside:c.default.bool,closeOnEscape:c.default.bool,keyCodeForClose:c.default.arrayOf(c.default.number),willUnmount:c.default.func,afterClose:c.default.func,onClickOutside:c.default.func,onKeypressEscape:c.default.func,onkeyPress:c.default.func,overlayClassName:c.default.string},r.defaultProps={buttons:[{label:"Cancel",onClick:function(){return null},className:null},{label:"Confirm",onClick:function(){return null},className:null}],childrenElement:function(){return null},closeOnClickOutside:!0,closeOnEscape:!0,keyCodeForClose:[],willUnmount:function(){return null},afterClose:function(){return null},onClickOutside:function(){return null},onKeypressEscape:function(){return null}},a);var h=null,v="react-confirm-alert";function b(e){var t=document.getElementById("react-confirm-alert-firm-svg");t&&t.parentNode.removeChild(t),document.body.children[0].classList.remove("react-confirm-alert-blur"),e()}function g(e){var t=document.getElementById(e.targetId||v);t&&h.unmount(t)}function y(){document.body.classList.remove("react-confirm-alert-body-element")}}}]);
//# sourceMappingURL=514.d86785e3.chunk.js.map