"use strict";(self.webpackChunksonaxmultitrade=self.webpackChunksonaxmultitrade||[]).push([[925],{82035:function(n,t,r){r.d(t,{Nq:function(){return u},iJ:function(){return e},g8:function(){return c}});var e={};r.r(e),r.d(e,{useSignIn:function(){return l},useUserSignIn:function(){return v}});var u={};r.r(u),r.d(u,{fetchCoupons:function(){return S},fetchManage:function(){return E},fetchUsers:function(){return A},useActivity:function(){return L},useAdmins:function(){return q},useCoupons:function(){return J},useCreateAdmin:function(){return z},useCreateAdminUser:function(){return H},useCreateCoupon:function(){return K},useCreateSchool:function(){return V},useDeleteAdmin:function(){return N},useDeleteCoupon:function(){return R},useDeleteUser:function(){return rn},useGetPackages:function(){return _},useGetTeams:function(){return nn},useGetUsers:function(){return $},useLogOut:function(){return X},useManage:function(){return Y},useProfile:function(){return G},useSchools:function(){return B},useServices:function(){return I},useToggleBan:function(){return tn},useUpdateUser:function(){return en}});var c={};r.r(c),r.d(c,{fetchCoupons:function(){return xn},fetchManage:function(){return yn},useActivity:function(){return Tn},useAdmins:function(){return Sn},useChangePassword:function(){return Gn},useCoupons:function(){return Un},useCreateAdmin:function(){return Pn},useCreateCoupon:function(){return In},useCreateSchool:function(){return Bn},useCreateUser:function(){return Dn},useDeleteAdmin:function(){return En},useDeleteCoupon:function(){return An},useDeleteUser:function(){return Kn},useGetPackages:function(){return Nn},useGetTeams:function(){return zn},useGetUsers:function(){return Jn},useIntallments:function(){return Rn},useLogOut:function(){return Ln},useManage:function(){return qn},useProfile:function(){return Qn},useRegisterUser:function(){return jn},useSchools:function(){return Cn},useServices:function(){return Wn},useToggleBan:function(){return Hn}});var s=r(74165),o=r(15861),a=r(70610),i=r(91933),f=r(57689),p=r(22469),d=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.put("admin/login",t);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),Z=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.put("users/login",t);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(n){var t=(0,f.s0)();return(0,i.useMutation)(d,{onSuccess:function(n){200===(null===n||void 0===n?void 0:n.status)&&(p.Tj.setToken(n.data.accessToken),p.Tj.setProfileData(n.data),t("/dashboardAdmin"))},onError:function(t){400===(null===t||void 0===t?void 0:t.status)&&n({email:t.message})}})},v=function(n){var t=(0,f.s0)();return(0,i.useMutation)(Z,{onSuccess:function(n){200===(null===n||void 0===n?void 0:n.status)&&(p.Tj.setToken(n.data.accessToken),p.Tj.setProfileData(n.data),t("/dashboard"))},onError:function(t){400===(null===t||void 0===t?void 0:t.status)&&n({uId:t.message})}})},h=r(59434),m=r(33050),w=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("users/profile");case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),x=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("users/teams/".concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),g=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("admin/user/".concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),y=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("admin/gets");case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),k=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("admin/services");case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),b=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("admin/schools");case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),M=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("admin/activity/".concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),O=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.delete("admin/delete/".concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),F=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.delete("admin/coupon/".concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),Q=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.post("admin/create",t);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),W=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.post("admin/users/add",t);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),C=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.post("admin/schools",t);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),T=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.post("admin/coupon",t);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),S=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("admin/coupons?page=".concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),U=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("admin/logOut");case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),E=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t,r,e){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("admin/users/".concat(t,"?page=").concat(r,"&email=").concat(e));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t,r,e){return n.apply(this,arguments)}}(),A=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t,r,e){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("admin/users?page=".concat(r,"&limit=").concat(t,"&search=").concat(e));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t,r,e){return n.apply(this,arguments)}}(),P=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("admin/ban/".concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),D=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("admin/packages");case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),j=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.delete("admin/deleteUser/".concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),G=function(){return(0,i.useQuery)("users/profile",w,{refetchOnWindowFocus:!1})},I=function(){return(0,i.useQuery)("get/services",k,{refetchOnWindowFocus:!1})},B=function(){return(0,i.useQuery)("get/schools",b,{refetchOnWindowFocus:!1})},L=function(n){return(0,i.useQuery)("get/activity/".concat(n),(function(){return M(n)}),{refetchOnWindowFocus:!1})},q=function(){return(0,i.useQuery)("get/admins",y,{refetchOnWindowFocus:!1})},J=function(n){return(0,i.useQuery)("get/coupons/".concat(n),(function(){return S(n)}),{refetchOnWindowFocus:!1})},N=function(){return(0,i.useMutation)(O)},R=function(){return(0,i.useMutation)(F)},z=function(n){return(0,i.useMutation)(Q,{onError:function(t){400===(null===t||void 0===t?void 0:t.status)&&n({email:t.message})}})},H=function(n){return(0,i.useMutation)(W,{onError:function(t){400===(null===t||void 0===t?void 0:t.status)&&n({email:t.message})}})},K=function(){return(0,i.useMutation)(T,{onError:function(n){null===n||void 0===n||n.status}})},V=function(){return(0,i.useMutation)(C,{onError:function(n){null===n||void 0===n||n.status}})},X=function(){var n=(0,h.I0)(),t=(0,f.s0)();return(0,i.useMutation)(U,{onSuccess:function(r){200===(null===r||void 0===r?void 0:r.status)&&(p.Tj.removeToken(),n((0,m.kS)()),t("/"))}})},Y=function(n,t,r){return(0,i.useQuery)("get/".concat(n,"/").concat(t,"/").concat(r),(function(){return E(n,t,r)}),{refetchOnWindowFocus:!1})},$=function(n,t,r){return(0,i.useQuery)("admin/users/".concat(t,"/").concat(n,"/").concat(r),(function(){return A(n,t,r)}),{refetchOnWindowFocus:!1})},_=function(n,t,r){return(0,i.useQuery)("admin/packages",(function(){return D()}),{refetchOnWindowFocus:!1})},nn=function(n){return(0,i.useQuery)("users/teams/".concat(n),(function(){return n&&x(n)}),{refetchOnWindowFocus:!1})},tn=function(){return(0,i.useMutation)(P)},rn=function(){return(0,i.useMutation)(j)},en=function(){return(0,i.useMutation)(g)},un=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("users/profile");case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),cn=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("users/teams/".concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),sn=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("admin/gets");case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),on=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("admin/services");case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),an=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("admin/schools");case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),fn=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("admin/activity/".concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),pn=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.delete("admin/delete/".concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),dn=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.delete("admin/coupon/".concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),Zn=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.post("admin/create",t);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),ln=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.post("users/add",t);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),vn=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.post("users/register",t);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),hn=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.post("admin/schools",t);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),mn=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.post("admin/coupon",t);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),wn=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.post("users/changePassword",t);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),xn=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("admin/coupons?page=".concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),gn=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("admin/logOut");case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),yn=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t,r,e){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("admin/users/".concat(t,"?page=").concat(r,"&email=").concat(e));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t,r,e){return n.apply(this,arguments)}}(),kn=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t,r,e){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("admin/users?page=".concat(r,"&limit=").concat(t,"&search=").concat(e));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t,r,e){return n.apply(this,arguments)}}(),bn=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("admin/ban/".concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),Mn=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("users/packages");case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),On=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("users/installments");case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),Fn=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.delete("admin/deleteUser/".concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),Qn=function(){return(0,i.useQuery)("users/profile",un,{refetchOnWindowFocus:!1})},Wn=function(){return(0,i.useQuery)("get/services",on,{refetchOnWindowFocus:!1})},Cn=function(){return(0,i.useQuery)("get/schools",an,{refetchOnWindowFocus:!1})},Tn=function(n){return(0,i.useQuery)("get/activity/".concat(n),(function(){return fn(n)}),{refetchOnWindowFocus:!1})},Sn=function(){return(0,i.useQuery)("get/admins",sn,{refetchOnWindowFocus:!1})},Un=function(n){return(0,i.useQuery)("get/coupons/".concat(n),(function(){return xn(n)}),{refetchOnWindowFocus:!1})},En=function(){return(0,i.useMutation)(pn)},An=function(){return(0,i.useMutation)(dn)},Pn=function(n){return(0,i.useMutation)(Zn,{onError:function(t){400===(null===t||void 0===t?void 0:t.status)&&n({email:t.message})}})},Dn=function(n){return(0,i.useMutation)(ln,{onError:function(t){400===(null===t||void 0===t?void 0:t.status)&&n({email:t.message})}})},jn=function(n){return(0,i.useMutation)(vn,{onError:function(t){400===(null===t||void 0===t?void 0:t.status)&&n({email:t.message})}})},Gn=function(n){return(0,i.useMutation)(wn,{onError:function(t){400===(null===t||void 0===t?void 0:t.status)&&n({oldPassword:t.message})}})},In=function(){return(0,i.useMutation)(mn,{onError:function(n){null===n||void 0===n||n.status}})},Bn=function(){return(0,i.useMutation)(hn,{onError:function(n){null===n||void 0===n||n.status}})},Ln=function(){var n=(0,h.I0)(),t=(0,f.s0)();return(0,i.useMutation)(gn,{onSuccess:function(r){200===(null===r||void 0===r?void 0:r.status)&&(p.Tj.removeToken(),n((0,m.kS)()),t("/"))}})},qn=function(n,t,r){return(0,i.useQuery)("get/".concat(n,"/").concat(t,"/").concat(r),(function(){return yn(n,t,r)}),{refetchOnWindowFocus:!1})},Jn=function(n,t,r){return(0,i.useQuery)("admin/users/".concat(t,"/").concat(n,"/").concat(r),(function(){return kn(n,t,r)}),{refetchOnWindowFocus:!1})},Nn=function(n,t,r){return(0,i.useQuery)("users/packages",(function(){return Mn()}),{refetchOnWindowFocus:!1})},Rn=function(){return(0,i.useQuery)("users/installments",(function(){return On()}),{refetchOnWindowFocus:!1})},zn=function(n){return(0,i.useQuery)("users/teams/".concat(n),(function(){return n&&cn(n)}),{refetchOnWindowFocus:!1})},Hn=function(){return(0,i.useMutation)(bn)},Kn=function(){return(0,i.useMutation)(Fn)}},29352:function(n,t,r){n.exports=r.p+"static/media/sonaxmultitrade.29f6ec52e5160d1f3bbb.png"}}]);
//# sourceMappingURL=925.c58a22df.chunk.js.map