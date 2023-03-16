"use strict";(self.webpackChunksonaxmultitrade=self.webpackChunksonaxmultitrade||[]).push([[925],{82035:function(n,t,r){r.d(t,{Nq:function(){return u},iJ:function(){return e},g8:function(){return c}});var e={};r.r(e),r.d(e,{useSignIn:function(){return l},useUserSignIn:function(){return h}});var u={};r.r(u),r.d(u,{fetchAllUsers:function(){return I},fetchCoupons:function(){return E},fetchManage:function(){return G},fetchRewards:function(){return j},fetchUsers:function(){return D},useActivity:function(){return H},useAdmins:function(){return K},useCoupons:function(){return V},useCreateAdmin:function(){return $},useCreateAdminRewards:function(){return nn},useCreateAdminUser:function(){return _},useCreateCoupon:function(){return tn},useCreateSchool:function(){return rn},useDeleteAdmin:function(){return X},useDeleteCoupon:function(){return Y},useDeleteUser:function(){return ln},useGetAllUsers:function(){return an},useGetPackages:function(){return pn},useGetRewards:function(){return fn},useGetTeams:function(){return dn},useGetUsers:function(){return on},useIntallments:function(){return J},useLogOut:function(){return cn},useManage:function(){return sn},useProfile:function(){return q},useSchools:function(){return z},useServices:function(){return N},useToggleBan:function(){return Zn},useUpdatePayment:function(){return vn},useUpdateUser:function(){return hn},useUserTabs:function(){return en}});var c={};r.r(c),r.d(c,{fetchCoupons:function(){return Sn},fetchManage:function(){return En},useActivity:function(){return qn},useAdmins:function(){return Jn},useChangePassword:function(){return Yn},useCoupons:function(){return Nn},useCreateAdmin:function(){return Kn},useCreateCoupon:function(){return $n},useCreateSchool:function(){return _n},useCreateUser:function(){return Vn},useDeleteAdmin:function(){return zn},useDeleteCoupon:function(){return Hn},useDeleteUser:function(){return at},useGetPackages:function(){return et},useGetTeamList:function(){return st},useGetTeams:function(){return ct},useGetUsers:function(){return rt},useIntallments:function(){return ut},useLogOut:function(){return nt},useManage:function(){return tt},useProfile:function(){return Ln},useRegisterUser:function(){return Xn},useSchools:function(){return Bn},useServices:function(){return Rn},useToggleBan:function(){return ot}});var s=r(74165),o=r(15861),a=r(70610),i=r(91933),f=r(57689),p=r(22469),d=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.put("admin/login",t);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),Z=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.put("users/login",t);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(n){var t=(0,f.s0)();return(0,i.useMutation)(d,{onSuccess:function(n){200===(null===n||void 0===n?void 0:n.status)&&(p.Tj.setToken(n.data.accessToken),p.Tj.setProfileData(n.data),t("/dashboardAdmin"))},onError:function(t){400===(null===t||void 0===t?void 0:t.status)&&n({email:t.message})}})},h=function(n){var t=(0,f.s0)();return(0,i.useMutation)(Z,{onSuccess:function(n){200===(null===n||void 0===n?void 0:n.status)&&(p.Tj.setToken(n.data.accessToken),p.Tj.setProfileData(n.data),t("/dashboard"))},onError:function(t){400===(null===t||void 0===t?void 0:t.status)&&n({uId:t.message})}})},v=r(59434),m=r(33050),w=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("users/profile");case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),x=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("users/teams/".concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),g=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("admin/user/".concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),y=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("admin/payment/".concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),k=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("admin/installments/".concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),b=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("admin/gets");case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),O=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("admin/services");case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),M=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("admin/schools");case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),F=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("admin/activity/".concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),Q=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.delete("admin/delete/".concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),W=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.delete("admin/coupon/".concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),C=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.post("admin/create",t);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),T=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.post("admin/users/add",t);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),U=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.post("admin/rewards",t);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),S=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.post("admin/schools",t);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),A=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.post("admin/coupon",t);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),E=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("admin/coupons?page=".concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),P=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("admin/logOut");case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),G=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t,r,e){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("admin/users/".concat(t,"?page=").concat(r,"&email=").concat(e));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t,r,e){return n.apply(this,arguments)}}(),D=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t,r,e){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("admin/users?page=".concat(r,"&limit=").concat(t,"&search=").concat(e));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t,r,e){return n.apply(this,arguments)}}(),I=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("admin/users/list");case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),j=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("admin/rewards");case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),L=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("admin/ban/".concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),R=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("admin/packages");case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),B=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.delete("admin/deleteUser/".concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),q=function(){return(0,i.useQuery)("users/profile",w,{refetchOnWindowFocus:!1})},J=function(n){return(0,i.useQuery)("admin/installments/".concat(n),(function(){return k(n)}),{refetchOnWindowFocus:!1})},N=function(){return(0,i.useQuery)("get/services",O,{refetchOnWindowFocus:!1})},z=function(){return(0,i.useQuery)("get/schools",M,{refetchOnWindowFocus:!1})},H=function(n){return(0,i.useQuery)("get/activity/".concat(n),(function(){return F(n)}),{refetchOnWindowFocus:!1})},K=function(){return(0,i.useQuery)("get/admins",b,{refetchOnWindowFocus:!1})},V=function(n){return(0,i.useQuery)("get/coupons/".concat(n),(function(){return E(n)}),{refetchOnWindowFocus:!1})},X=function(){return(0,i.useMutation)(Q)},Y=function(){return(0,i.useMutation)(W)},$=function(n){return(0,i.useMutation)(C,{onError:function(t){400===(null===t||void 0===t?void 0:t.status)&&n({email:t.message})}})},_=function(n){return(0,i.useMutation)(T,{onError:function(t){400===(null===t||void 0===t?void 0:t.status)&&n({email:t.message})}})},nn=function(n){return(0,i.useMutation)(U,{onError:function(t){400===(null===t||void 0===t?void 0:t.status)&&n({email:t.message})}})},tn=function(){return(0,i.useMutation)(A,{onError:function(n){null===n||void 0===n||n.status}})},rn=function(){return(0,i.useMutation)(S,{onError:function(n){null===n||void 0===n||n.status}})},en=function(n,t){return(0,i.useQuery)("admin/userTabs/".concat(t,"/").concat(n),(function(){return t&&un(n,t)}),{refetchOnWindowFocus:!1})},un=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t,r){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("admin/userTabs/".concat(r,"?position=").concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t,r){return n.apply(this,arguments)}}(),cn=function(){var n=(0,v.I0)(),t=(0,f.s0)();return(0,i.useMutation)(P,{onSuccess:function(r){200===(null===r||void 0===r?void 0:r.status)&&(p.Tj.removeToken(),n((0,m.kS)()),t("/"))}})},sn=function(n,t,r){return(0,i.useQuery)("get/".concat(n,"/").concat(t,"/").concat(r),(function(){return G(n,t,r)}),{refetchOnWindowFocus:!1})},on=function(n,t,r){return(0,i.useQuery)("admin/users/".concat(t,"/").concat(n,"/").concat(r),(function(){return D(n,t,r)}),{refetchOnWindowFocus:!1})},an=function(){return(0,i.useQuery)("admin/users/list",(function(){return I()}),{refetchOnWindowFocus:!1})},fn=function(){return(0,i.useQuery)("admin/rewards",(function(){return j()}),{refetchOnWindowFocus:!1})},pn=function(n,t,r){return(0,i.useQuery)("admin/packages",(function(){return R()}),{refetchOnWindowFocus:!1})},dn=function(n){return(0,i.useQuery)("users/teams/".concat(n),(function(){return n&&x(n)}),{refetchOnWindowFocus:!1})},Zn=function(){return(0,i.useMutation)(L)},ln=function(){return(0,i.useMutation)(B)},hn=function(){return(0,i.useMutation)(g)},vn=function(){return(0,i.useMutation)(y)},mn=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("users/profile");case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),wn=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("users/teams/".concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),xn=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t,r){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("users/teamList/".concat(r,"?position=").concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t,r){return n.apply(this,arguments)}}(),gn=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("admin/gets");case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),yn=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("admin/services");case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),kn=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("admin/schools");case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),bn=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("admin/activity/".concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),On=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.delete("admin/delete/".concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),Mn=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.delete("admin/coupon/".concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),Fn=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.post("admin/create",t);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),Qn=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.post("users/add",t);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),Wn=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.post("users/register",t);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),Cn=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.post("admin/schools",t);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),Tn=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.post("admin/coupon",t);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),Un=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.post("users/changePassword",t);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),Sn=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("admin/coupons?page=".concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),An=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("admin/logOut");case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),En=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t,r,e){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("admin/users/".concat(t,"?page=").concat(r,"&email=").concat(e));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t,r,e){return n.apply(this,arguments)}}(),Pn=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t,r,e){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("admin/users?page=".concat(r,"&limit=").concat(t,"&search=").concat(e));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t,r,e){return n.apply(this,arguments)}}(),Gn=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("admin/ban/".concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),Dn=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("users/packages");case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),In=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("users/installments");case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),jn=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.delete("admin/deleteUser/".concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),Ln=function(){return(0,i.useQuery)("users/profile",mn,{refetchOnWindowFocus:!1})},Rn=function(){return(0,i.useQuery)("get/services",yn,{refetchOnWindowFocus:!1})},Bn=function(){return(0,i.useQuery)("get/schools",kn,{refetchOnWindowFocus:!1})},qn=function(n){return(0,i.useQuery)("get/activity/".concat(n),(function(){return bn(n)}),{refetchOnWindowFocus:!1})},Jn=function(){return(0,i.useQuery)("get/admins",gn,{refetchOnWindowFocus:!1})},Nn=function(n){return(0,i.useQuery)("get/coupons/".concat(n),(function(){return Sn(n)}),{refetchOnWindowFocus:!1})},zn=function(){return(0,i.useMutation)(On)},Hn=function(){return(0,i.useMutation)(Mn)},Kn=function(n){return(0,i.useMutation)(Fn,{onError:function(t){400===(null===t||void 0===t?void 0:t.status)&&n({email:t.message})}})},Vn=function(n){return(0,i.useMutation)(Qn,{onError:function(t){400===(null===t||void 0===t?void 0:t.status)&&n({email:t.message})}})},Xn=function(n){return(0,i.useMutation)(Wn,{onError:function(t){400===(null===t||void 0===t?void 0:t.status)&&n({email:t.message})}})},Yn=function(n){return(0,i.useMutation)(Un,{onError:function(t){400===(null===t||void 0===t?void 0:t.status)&&n({oldPassword:t.message})}})},$n=function(){return(0,i.useMutation)(Tn,{onError:function(n){null===n||void 0===n||n.status}})},_n=function(){return(0,i.useMutation)(Cn,{onError:function(n){null===n||void 0===n||n.status}})},nt=function(){var n=(0,v.I0)(),t=(0,f.s0)();return(0,i.useMutation)(An,{onSuccess:function(r){200===(null===r||void 0===r?void 0:r.status)&&(p.Tj.removeToken(),n((0,m.kS)()),t("/"))}})},tt=function(n,t,r){return(0,i.useQuery)("get/".concat(n,"/").concat(t,"/").concat(r),(function(){return En(n,t,r)}),{refetchOnWindowFocus:!1})},rt=function(n,t,r){return(0,i.useQuery)("admin/users/".concat(t,"/").concat(n,"/").concat(r),(function(){return Pn(n,t,r)}),{refetchOnWindowFocus:!1})},et=function(n,t,r){return(0,i.useQuery)("users/packages",(function(){return Dn()}),{refetchOnWindowFocus:!1})},ut=function(){return(0,i.useQuery)("users/installments",(function(){return In()}),{refetchOnWindowFocus:!1})},ct=function(n){return(0,i.useQuery)("users/teams/".concat(n),(function(){return n&&wn(n)}),{refetchOnWindowFocus:!1})},st=function(n,t){return(0,i.useQuery)("users/teamList/".concat(t,"/").concat(n),(function(){return t&&xn(n,t)}),{refetchOnWindowFocus:!1})},ot=function(){return(0,i.useMutation)(Gn)},at=function(){return(0,i.useMutation)(jn)}},29352:function(n,t,r){n.exports=r.p+"static/media/sonaxmultitrade.29f6ec52e5160d1f3bbb.png"}}]);
//# sourceMappingURL=925.9aa39a85.chunk.js.map