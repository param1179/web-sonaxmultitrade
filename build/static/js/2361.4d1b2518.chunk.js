"use strict";(self.webpackChunksonaxmultitrade=self.webpackChunksonaxmultitrade||[]).push([[2361],{72039:function(e,r,t){var n=t(78983),a=(t(72791),t(80184));r.Z=function(e){var r=e.data,t=e.setPage;return(0,a.jsxs)(n.E7,{align:"end","aria-label":"Page navigation example",children:[(0,a.jsx)(n.tn,{onClick:function(){return t(r.page-1)},disabled:!r.hasPrevPage,children:"Previous"}),(0,a.jsx)(n.tn,{onClick:function(){return t(1)},active:1===r.page,children:"1"}),r.totalPages>1&&(0,a.jsxs)(a.Fragment,{children:[r.totalPages>1&&(0,a.jsx)(n.tn,{onClick:function(){return t(2)},active:2===r.page,children:"2"}),r.totalPages>2&&(0,a.jsx)(n.tn,{onClick:function(){return t(3)},active:3===r.page,children:"3"}),4===r.page&&(0,a.jsx)(n.tn,{onClick:function(){return t(4)},active:4===r.page,children:"4"}),r.totalPages>4&&(0,a.jsx)(n.tn,{children:"..."}),r.page>4&&r.totalPages-1!==r.page&&r.totalPages!==r.page&&(0,a.jsx)(n.tn,{onClick:function(){return t()},active:r.page>4,children:r.page}),r.totalPages>5&&r.page!==r.totalPages-2&&(0,a.jsx)(n.tn,{children:"..."}),r.totalPages>5&&(0,a.jsx)(n.tn,{onClick:function(){return t(r.totalPages-1)},active:r.totalPages-1===r.page,children:r.totalPages-1}),r.totalPages>5&&(0,a.jsx)(n.tn,{onClick:function(){return t(r.totalPages)},active:r.totalPages===r.page,children:r.totalPages})]}),(0,a.jsx)(n.tn,{onClick:function(){return t(r.page+1)},disabled:!r.hasNextPage,children:"Next"})]})}},96066:function(e,r,t){t.d(r,{Z:function(){return n}});var n={};t.r(n),t.d(n,{Fr:function(){return u},TX:function(){return d},r4:function(){return c},zB:function(){return s},ii:function(){return m}});var a=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,i=/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,o=/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,l=t(81724),s=l.Ry().shape({email:l.Z_().matches(i,"Email is not correct!").required("Email is require field!"),password:l.Z_().matches(a,"Password is not correct!").max(15,"Max 15 symbol!").required("Password is require field!")}),c=(l.Ry().shape({password:l.Z_().matches(a,"Password is not correct!").max(15,"Max 15 symbol!").required("Password is require field!"),confirmPassword:l.Z_().oneOf([l.iH("password"),null],"Passwords must match!").required("Passwords must match!")}),l.Ry().shape({email:l.Z_().matches(i,"Email is not correct!").required("Email is require field!"),password:l.Z_().matches(a,"Password is not correct!").max(15,"Max 15 symbol!").required("Password is require field!"),confirmPassword:l.Z_().oneOf([l.iH("password"),null],"Passwords must match!").required("Passwords must match!")}),l.Ry().shape({firstName:l.Z_().required("First name is require field!"),lastName:l.Z_().required("Last name is require field!"),gender:l.Z_().required("Last name is require field!"),dob:l.hT().required("Date of birth required"),nomineeFirstName:l.Z_().required("First name is require field!"),nomineeLastName:l.Z_().required("First name is require field!"),nomineeDob:l.hT().required("Date of birth required"),nomineeRelation:l.Z_().required("Relation is require field!"),mobile:l.Z_().matches(o,"Phone number is not valid").required("Mobile is require field!").min(10,"Phone number too short").max(10,"Phone number too long"),email:l.Z_().matches(i,"Email is not correct!").required("Email is require field!"),password:l.Z_().max(15,"Max 15 symbol!").required("Password is require field!"),cpassword:l.Z_().oneOf([l.iH("password"),null],"Passwords must match!").required("Passwords must match!")})),u=l.Ry().shape({code:l.Z_().max(30,"Max value 20.").required("Coupon Name is require field!"),percent:l.Rx().typeError("You must specify a number").min(1,"Min value 1.").max(100,"Max value 100.").required("This field is required!"),endDate:l.hT().min(new Date,"end date can't be before current date")}),d=l.Ry().shape({email:l.Z_().matches(i,"Email is not correct!").required("Email is require field!"),schoolName:l.Z_().required("Name is require field!")}),m=l.Ry().shape({uId:l.Z_().required("UID is require field!"),password:l.Z_().max(15,"Max 15 symbol!").required("Password is require field!")})},42361:function(e,r,t){t.r(r);var n=t(74165),a=t(15861),i=t(29439),o=t(66619),l=t(22800),s=t(24846),c=t(78983),u=t(92506),d=t(72426),m=t.n(d),p=t(72791),f=t(91933),h=t(9724),x=t(72039),y=t(96066),v=t(30337),g=t(80184);r.default=function(){var e=(0,f.useQueryClient)(),r=(0,p.useState)(1),t=(0,i.Z)(r,2),d=t[0],C=t[1],b=(0,u.TA)({initialValues:{code:"",percent:"",endDate:"",isUsed:!1,type:"Single"},validationSchema:y.Z.Fr,onSubmit:function(e){return A(e)}}),j=b.values,N=b.handleChange,w=b.submitForm,P=b.errors,k=(b.setErrors,b.isValid),Z=b.dirty,q=b.resetForm,E=h.N.useCoupons(d),_=(E.isLoading,E.data),O=E.refetch,D=h.N.useCreateCoupon(),M=h.N.useDeleteCoupon(),A=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.mutateAsync(r);case 2:200===(null===(t=e.sent)||void 0===t?void 0:t.status)&&(O(),q());case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),F=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(0,v._1)({title:"Delete this coupon",message:"Are you sure to do this?",buttons:[{label:"Yes",onClick:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.mutateAsync(r);case 2:200===(null===(t=e.sent)||void 0===t?void 0:t.status)&&O();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{label:"No"}]});case 1:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),I=null===_||void 0===_?void 0:_.data.coupons;return(0,p.useEffect)((function(){I&&10===I.length&&e.prefetchQuery("get/coupons/".concat(d),(function(){return h.N.fetchCoupons(d+1)}))}),[_,d,e]),(0,g.jsx)(c.rb,{children:(0,g.jsx)(c.b7,{xs:12,children:(0,g.jsxs)(c.rb,{children:[(0,g.jsx)(c.b7,{xs:3,children:(0,g.jsxs)(c.xH,{className:"mb-4",children:[(0,g.jsx)(c.bn,{children:(0,g.jsx)("strong",{children:"Create Promo Code"})}),(0,g.jsx)(c.sl,{children:(0,g.jsxs)(c.lx,{children:[(0,g.jsxs)("div",{className:"mb-3",children:[(0,g.jsx)(c.L8,{htmlFor:"exampleFormControlInput1",children:"Coupon Name"}),(0,g.jsx)(c.jO,{type:"text",id:"exampleFormControlInput1",placeholder:"Coupon Name",value:j.code,name:"code",onChange:N,error:P.code}),P&&(0,g.jsx)("p",{className:"text-danger",children:P.code})]}),(0,g.jsxs)("div",{className:"mb-3",children:[(0,g.jsx)(c.L8,{htmlFor:"exampleFormControlInput1",children:"Discount Type"}),(0,g.jsx)(c.jO,{type:"text",id:"exampleFormControlInput1",placeholder:"Discount Type in %",value:j.percent,name:"percent",onChange:N,error:P.percent}),P&&(0,g.jsx)("p",{className:"text-danger",children:P.percent})]}),(0,g.jsxs)("div",{className:"mb-3",children:[(0,g.jsx)(c.L8,{htmlFor:"exampleFormControlInput1",children:"Coupon Type"}),(0,g.jsx)(c.EC,{type:"radio",name:"type",id:"flexRadioDisabled",label:"Single",value:"Single",onChange:N,defaultChecked:"Single"===j.type}),(0,g.jsx)(c.EC,{type:"radio",name:"type",id:"flexRadioCheckedDisabled",label:"Multiple",value:"Multiple",onChange:N,defaultChecked:"Multiple"===j.type})]}),(0,g.jsxs)("div",{className:"mb-3",children:[(0,g.jsx)(c.L8,{htmlFor:"exampleFormControlInput1",children:"Expire Date"}),(0,g.jsx)(c.jO,{type:"date",id:"exampleFormControlInput1",value:j.endDate,name:"endDate",onChange:N,error:P.endDate}),P&&(0,g.jsx)("p",{className:"text-danger",children:P.endDate})]}),(0,g.jsx)("div",{className:"d-grid gap-2 mb-3",children:(0,g.jsx)(c.u5,{color:"primary",onClick:w,disabled:!(k&&Z)||D.isLoading,children:"Save"})})]})})]})}),(0,g.jsx)(c.b7,{xs:9,children:(0,g.jsxs)(c.xH,{className:"mb-4",children:[(0,g.jsx)(c.bn,{children:(0,g.jsx)("strong",{children:"All Promo Codes"})}),(0,g.jsx)(c.sl,{children:(0,g.jsxs)(c.rb,{children:[(0,g.jsx)(c.rb,{children:(0,g.jsxs)(c.Sx,{align:"middle",className:"mb-0 border",hover:!0,responsive:!0,striped:!0,children:[(0,g.jsx)(c.V,{color:"light",children:(0,g.jsxs)(c.T6,{children:[(0,g.jsx)(c.is,{className:"text-center",children:(0,g.jsx)(s.Z,{icon:o.A})}),(0,g.jsx)(c.is,{children:"Coupon Code Name"}),(0,g.jsx)(c.is,{children:"Coupon Code %"}),(0,g.jsx)(c.is,{children:"Coupon Type"}),(0,g.jsx)(c.is,{children:"Coupon Used"}),(0,g.jsx)(c.is,{children:"Coupon End date"}),(0,g.jsx)(c.is,{children:"Action"})]})}),(0,g.jsx)(c.NR,{children:null===I||void 0===I?void 0:I.map((function(e,r){return(0,g.jsxs)(c.T6,{"v-for":"item in tableItems",children:[(0,g.jsx)(c.NN,{children:"#"}),(0,g.jsx)(c.NN,{children:e.code}),(0,g.jsx)(c.NN,{children:e.percent}),(0,g.jsx)(c.NN,{children:e.type}),(0,g.jsx)(c.NN,{children:e.isUsed?"Yes":"No"}),(0,g.jsx)(c.NN,{children:e.endDate?m()(e.endDate).format("MMMM Do YYYY"):"-- -- ----"}),(0,g.jsx)(c.NN,{children:(0,g.jsx)(s.Z,{icon:l.N,size:"lg",role:"button",className:"text-danger",title:"Delete",onClick:function(){return F(e._id)}})})]},r)}))})]})}),(0,g.jsx)(c.rb,{className:"mt-4",children:(null===_||void 0===_?void 0:_.data)&&(0,g.jsx)(x.Z,{data:null===_||void 0===_?void 0:_.data,setPage:C})})]})})]})})]})})})}},66619:function(e,r,t){t.d(r,{A:function(){return n}});var n=["512 512","<rect width='264' height='32' x='208' y='80' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M40,96a64,64,0,1,0,64-64A64.072,64.072,0,0,0,40,96Zm64-32A32,32,0,1,1,72,96,32.036,32.036,0,0,1,104,64Z' class='ci-primary'/><rect width='264' height='32' x='208' y='240' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M104,320a64,64,0,1,0-64-64A64.072,64.072,0,0,0,104,320Zm0-96a32,32,0,1,1-32,32A32.036,32.036,0,0,1,104,224Z' class='ci-primary'/><rect width='264' height='32' x='208' y='400' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M104,480a64,64,0,1,0-64-64A64.072,64.072,0,0,0,104,480Zm0-96a32,32,0,1,1-32,32A32.036,32.036,0,0,1,104,384Z' class='ci-primary'/>"]},22800:function(e,r,t){t.d(r,{N:function(){return n}});var n=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z' class='ci-primary'/><rect width='32' height='200' x='168' y='216' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='200' x='240' y='216' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='200' x='312' y='216' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z' class='ci-primary'/>"]},30337:function(e,r,t){var n,a,i=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o=function(){function e(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(r,t,n){return t&&e(r.prototype,t),n&&e(r,n),r}}();r._1=function(e){document.body.classList.add("react-confirm-alert-body-element"),function(){if(document.getElementById("react-confirm-alert-firm-svg"))return;var e="http://www.w3.org/2000/svg",r=document.createElementNS(e,"feGaussianBlur");r.setAttribute("stdDeviation","0.3");var t=document.createElementNS(e,"filter");t.setAttribute("id","gaussian-blur"),t.appendChild(r);var n=document.createElementNS(e,"svg");n.setAttribute("id","react-confirm-alert-firm-svg"),n.setAttribute("class","react-confirm-alert-svg"),n.appendChild(t),document.body.appendChild(n)}(),function(e){var r=document.getElementById(e.targetId||x);e.targetId&&!r&&console.error("React Confirm Alert:","Can not get element id (#"+e.targetId+")");r||(document.body.children[0].classList.add("react-confirm-alert-blur"),(r=document.createElement("div")).id=x,document.body.appendChild(r)),(h=(0,u.createRoot)(r)).render(s.default.createElement(f,e))}(e)};var l=t(72791),s=d(l),c=d(t(52007)),u=t(1250);function d(e){return e&&e.__esModule?e:{default:e}}function m(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function p(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!==typeof r&&"function"!==typeof r?e:r}var f=(a=n=function(e){function r(){var e,t,n;m(this,r);for(var a=arguments.length,i=Array(a),o=0;o<a;o++)i[o]=arguments[o];return t=n=p(this,(e=r.__proto__||Object.getPrototypeOf(r)).call.apply(e,[this].concat(i))),n.handleClickButton=function(e){e.onClick&&e.onClick(),n.close()},n.handleClickOverlay=function(e){var r=n.props,t=r.closeOnClickOutside,a=r.onClickOutside,i=e.target===n.overlay;t&&i&&(a(),n.close()),e.stopPropagation()},n.close=function(){var e=n.props.afterClose;g(),v(n.props),y(e)},n.keyboard=function(e){var r=n.props,t=r.closeOnEscape,a=r.onKeypressEscape,i=r.onkeyPress,o=r.keyCodeForClose,l=e.keyCode,s=27===l;o.includes(l)&&n.close(),t&&s&&(a(e),n.close()),i&&i()},n.componentDidMount=function(){document.addEventListener("keydown",n.keyboard,!1)},n.componentWillUnmount=function(){document.removeEventListener("keydown",n.keyboard,!1),n.props.willUnmount()},n.renderCustomUI=function(){var e=n.props,r=e.title,t=e.message,a=e.buttons;return(0,e.customUI)({title:r,message:t,buttons:a,onClose:n.close})},p(n,t)}return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}(r,e),o(r,[{key:"render",value:function(){var e=this,r=this.props,t=r.title,n=r.message,a=r.buttons,o=r.childrenElement,l=r.customUI,c=r.overlayClassName;return s.default.createElement("div",{className:"react-confirm-alert-overlay "+c,ref:function(r){return e.overlay=r},onClick:this.handleClickOverlay},s.default.createElement("div",{className:"react-confirm-alert"},l?this.renderCustomUI():s.default.createElement("div",{className:"react-confirm-alert-body"},t&&s.default.createElement("h1",null,t),n,o(),s.default.createElement("div",{className:"react-confirm-alert-button-group"},a.map((function(r,t){return s.default.createElement("button",i({key:t,className:r.className},r,{onClick:function(t){return e.handleClickButton(r)}}),r.label)}))))))}}]),r}(l.Component),n.propTypes={title:c.default.string,message:c.default.string,buttons:c.default.array.isRequired,childrenElement:c.default.func,customUI:c.default.func,closeOnClickOutside:c.default.bool,closeOnEscape:c.default.bool,keyCodeForClose:c.default.arrayOf(c.default.number),willUnmount:c.default.func,afterClose:c.default.func,onClickOutside:c.default.func,onKeypressEscape:c.default.func,onkeyPress:c.default.func,overlayClassName:c.default.string},n.defaultProps={buttons:[{label:"Cancel",onClick:function(){return null},className:null},{label:"Confirm",onClick:function(){return null},className:null}],childrenElement:function(){return null},closeOnClickOutside:!0,closeOnEscape:!0,keyCodeForClose:[],willUnmount:function(){return null},afterClose:function(){return null},onClickOutside:function(){return null},onKeypressEscape:function(){return null}},a);var h=null,x="react-confirm-alert";function y(e){var r=document.getElementById("react-confirm-alert-firm-svg");r&&r.parentNode.removeChild(r),document.body.children[0].classList.remove("react-confirm-alert-blur"),e()}function v(e){var r=document.getElementById(e.targetId||x);r&&h.unmount(r)}function g(){document.body.classList.remove("react-confirm-alert-body-element")}}}]);
//# sourceMappingURL=2361.4d1b2518.chunk.js.map