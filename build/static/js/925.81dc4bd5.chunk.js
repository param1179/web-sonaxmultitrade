"use strict";(self.webpackChunksonaxmultitrade=self.webpackChunksonaxmultitrade||[]).push([[925],{82035:function(n,t,r){r.d(t,{Nq:function(){return u},iJ:function(){return e},g8:function(){return c}});var e={};r.r(e),r.d(e,{useSignIn:function(){return h},useUserSignIn:function(){return l}});var u={};r.r(u),r.d(u,{fetchAllUsers:function(){return j},fetchCoupons:function(){return G},fetchManage:function(){return D},fetchRewards:function(){return R},fetchUsers:function(){return I},useActivity:function(){return V},useAdmins:function(){return X},useCoupons:function(){return Y},useCreateAdmin:function(){return nn},useCreateAdminRewards:function(){return rn},useCreateAdminUser:function(){return tn},useCreateCoupon:function(){return en},useCreateSchool:function(){return un},useDeleteAdmin:function(){return $},useDeleteCoupon:function(){return _},useDeleteUser:function(){return mn},useEditUser:function(){return xn},useGetAllUsers:function(){return dn},useGetPackages:function(){return hn},useGetRewards:function(){return Zn},useGetTeams:function(){return ln},useGetUser:function(){return pn},useGetUsers:function(){return fn},useIntallments:function(){return z},useLogOut:function(){return on},useManage:function(){return an},useProfile:function(){return N},useSchools:function(){return K},useServices:function(){return H},useToggleBan:function(){return vn},useUpdatePayment:function(){return gn},useUpdateUser:function(){return wn},useUserTabs:function(){return cn}});var c={};r.r(c),r.d(c,{fetchCoupons:function(){return Pn},fetchManage:function(){return In},fetchRewards:function(){return Jn},useActivity:function(){return Vn},useAdmins:function(){return Xn},useChangePassword:function(){return et},useCoupons:function(){return Yn},useCreateAdmin:function(){return nt},useCreateCoupon:function(){return ut},useCreateSchool:function(){return ct},useCreateUser:function(){return tt},useDeleteAdmin:function(){return $n},useDeleteCoupon:function(){return _n},useDeleteUser:function(){return ht},useGetPackages:function(){return it},useGetRewards:function(){return Hn},useGetTeamList:function(){return dt},useGetTeams:function(){return pt},useGetUsers:function(){return at},useIntallments:function(){return ft},useLogOut:function(){return st},useManage:function(){return ot},useProfile:function(){return Nn},useRegisterUser:function(){return rt},useSchools:function(){return Kn},useServices:function(){return zn},useToggleBan:function(){return Zt}});var s=r(74165),o=r(15861),a=r(70610),i=r(91933),f=r(57689),p=r(22469),d=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.put("admin/login",t);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),Z=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.put("users/login",t);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(n){var t=(0,f.s0)();return(0,i.useMutation)(d,{onSuccess:function(n){200===(null===n||void 0===n?void 0:n.status)&&(p.Tj.setToken(n.data.accessToken),p.Tj.setProfileData(n.data),t("/dashboardAdmin"))},onError:function(t){400===(null===t||void 0===t?void 0:t.status)&&n({email:t.message})}})},l=function(n){var t=(0,f.s0)();return(0,i.useMutation)(Z,{onSuccess:function(n){200===(null===n||void 0===n?void 0:n.status)&&(p.Tj.setToken(n.data.accessToken),p.Tj.setProfileData(n.data),t("/dashboard"))},onError:function(t){400===(null===t||void 0===t?void 0:t.status)&&n({uId:t.message})}})},v=r(59434),m=r(33050),w=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("users/profile");case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),x=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("users/teams/".concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),g=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("admin/user/".concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),y=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){var r,e;return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.id,e=t.body,n.next=3,a.Z.put("admin/user/".concat(r),e);case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),k=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("admin/payment/".concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),b=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("admin/installments/".concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),O=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("admin/gets");case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),M=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("admin/services");case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),F=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("admin/schools");case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),Q=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("admin/activity/".concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),W=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.delete("admin/delete/".concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),C=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.delete("admin/coupon/".concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),T=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.post("admin/create",t);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),U=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.post("admin/users/add",t);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),E=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.post("admin/rewards",t);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),S=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.post("admin/schools",t);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),A=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.post("admin/coupon",t);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),G=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("admin/coupons?page=".concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),P=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("admin/logOut");case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),D=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t,r,e){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("admin/users/".concat(t,"?page=").concat(r,"&email=").concat(e));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t,r,e){return n.apply(this,arguments)}}(),I=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t,r,e){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("admin/users?page=".concat(r,"&limit=").concat(t,"&search=").concat(e));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t,r,e){return n.apply(this,arguments)}}(),j=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("admin/users/list");case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),R=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("admin/rewards");case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),L=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("admin/ban/".concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),B=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("admin/info/".concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),q=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("admin/packages");case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),J=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.delete("admin/deleteUser/".concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),N=function(){return(0,i.useQuery)("users/profile",w,{refetchOnWindowFocus:!1})},z=function(n){return(0,i.useQuery)("admin/installments/".concat(n),(function(){return b(n)}),{refetchOnWindowFocus:!1})},H=function(){return(0,i.useQuery)("get/services",M,{refetchOnWindowFocus:!1})},K=function(){return(0,i.useQuery)("get/schools",F,{refetchOnWindowFocus:!1})},V=function(n){return(0,i.useQuery)("get/activity/".concat(n),(function(){return Q(n)}),{refetchOnWindowFocus:!1})},X=function(){return(0,i.useQuery)("get/admins",O,{refetchOnWindowFocus:!1})},Y=function(n){return(0,i.useQuery)("get/coupons/".concat(n),(function(){return G(n)}),{refetchOnWindowFocus:!1})},$=function(){return(0,i.useMutation)(W)},_=function(){return(0,i.useMutation)(C)},nn=function(n){return(0,i.useMutation)(T,{onError:function(t){400===(null===t||void 0===t?void 0:t.status)&&n({email:t.message})}})},tn=function(n){return(0,i.useMutation)(U,{onError:function(t){400===(null===t||void 0===t?void 0:t.status)&&n({email:t.message})}})},rn=function(n){return(0,i.useMutation)(E,{onError:function(t){400===(null===t||void 0===t?void 0:t.status)&&n({email:t.message})}})},en=function(){return(0,i.useMutation)(A,{onError:function(n){null===n||void 0===n||n.status}})},un=function(){return(0,i.useMutation)(S,{onError:function(n){null===n||void 0===n||n.status}})},cn=function(n,t){return(0,i.useQuery)("admin/userTabs/".concat(t,"/").concat(n),(function(){return t&&sn(n,t)}),{refetchOnWindowFocus:!1})},sn=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t,r){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("admin/userTabs/".concat(r,"?position=").concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t,r){return n.apply(this,arguments)}}(),on=function(){var n=(0,v.I0)(),t=(0,f.s0)();return(0,i.useMutation)(P,{onSuccess:function(r){200===(null===r||void 0===r?void 0:r.status)&&(p.Tj.removeToken(),n((0,m.kS)()),t("/"))}})},an=function(n,t,r){return(0,i.useQuery)("get/".concat(n,"/").concat(t,"/").concat(r),(function(){return D(n,t,r)}),{refetchOnWindowFocus:!1})},fn=function(n,t,r){return(0,i.useQuery)("admin/users/".concat(t,"/").concat(n,"/").concat(r),(function(){return I(n,t,r)}),{refetchOnWindowFocus:!1})},pn=function(n){return(0,i.useQuery)("admin/info/".concat(n),(function(){return B(n)}),{refetchOnWindowFocus:!1})},dn=function(){return(0,i.useQuery)("admin/users/list",(function(){return j()}),{refetchOnWindowFocus:!1})},Zn=function(){return(0,i.useQuery)("admin/rewards",(function(){return R()}),{refetchOnWindowFocus:!1})},hn=function(n,t,r){return(0,i.useQuery)("admin/packages",(function(){return q()}),{refetchOnWindowFocus:!1})},ln=function(n){return(0,i.useQuery)("users/teams/".concat(n),(function(){return n&&x(n)}),{refetchOnWindowFocus:!1})},vn=function(){return(0,i.useMutation)(L)},mn=function(){return(0,i.useMutation)(J)},wn=function(){return(0,i.useMutation)(g)},xn=function(){return(0,i.useMutation)(y)},gn=function(){return(0,i.useMutation)(k)},yn=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("users/profile");case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),kn=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("users/teams/".concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),bn=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t,r){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("users/teamList/".concat(r,"?position=").concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t,r){return n.apply(this,arguments)}}(),On=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("admin/gets");case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),Mn=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("admin/services");case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),Fn=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("admin/schools");case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),Qn=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("admin/activity/".concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),Wn=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.delete("admin/delete/".concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),Cn=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.delete("admin/coupon/".concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),Tn=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.post("admin/create",t);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),Un=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.post("users/add",t);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),En=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.post("users/register",t);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),Sn=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.post("admin/schools",t);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),An=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.post("admin/coupon",t);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),Gn=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.post("users/changePassword",t);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),Pn=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("admin/coupons?page=".concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),Dn=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("admin/logOut");case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),In=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t,r,e){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("admin/users/".concat(t,"?page=").concat(r,"&email=").concat(e));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t,r,e){return n.apply(this,arguments)}}(),jn=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t,r,e){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("admin/users?page=".concat(r,"&limit=").concat(t,"&search=").concat(e));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t,r,e){return n.apply(this,arguments)}}(),Rn=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("admin/ban/".concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),Ln=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("users/packages");case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),Bn=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("users/installments");case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),qn=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.delete("admin/deleteUser/".concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),Jn=function(){var n=(0,o.Z)((0,s.Z)().mark((function n(){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("users/rewards");case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),Nn=function(){return(0,i.useQuery)("users/profile",yn,{refetchOnWindowFocus:!1})},zn=function(){return(0,i.useQuery)("get/services",Mn,{refetchOnWindowFocus:!1})},Hn=function(){return(0,i.useQuery)("users/rewards",(function(){return Jn()}),{refetchOnWindowFocus:!1})},Kn=function(){return(0,i.useQuery)("get/schools",Fn,{refetchOnWindowFocus:!1})},Vn=function(n){return(0,i.useQuery)("get/activity/".concat(n),(function(){return Qn(n)}),{refetchOnWindowFocus:!1})},Xn=function(){return(0,i.useQuery)("get/admins",On,{refetchOnWindowFocus:!1})},Yn=function(n){return(0,i.useQuery)("get/coupons/".concat(n),(function(){return Pn(n)}),{refetchOnWindowFocus:!1})},$n=function(){return(0,i.useMutation)(Wn)},_n=function(){return(0,i.useMutation)(Cn)},nt=function(n){return(0,i.useMutation)(Tn,{onError:function(t){400===(null===t||void 0===t?void 0:t.status)&&n({email:t.message})}})},tt=function(n){return(0,i.useMutation)(Un,{onError:function(t){400===(null===t||void 0===t?void 0:t.status)&&n({email:t.message})}})},rt=function(n){return(0,i.useMutation)(En,{onError:function(t){400===(null===t||void 0===t?void 0:t.status)&&n({email:t.message})}})},et=function(n){return(0,i.useMutation)(Gn,{onError:function(t){400===(null===t||void 0===t?void 0:t.status)&&n({oldPassword:t.message})}})},ut=function(){return(0,i.useMutation)(An,{onError:function(n){null===n||void 0===n||n.status}})},ct=function(){return(0,i.useMutation)(Sn,{onError:function(n){null===n||void 0===n||n.status}})},st=function(){var n=(0,v.I0)(),t=(0,f.s0)();return(0,i.useMutation)(Dn,{onSuccess:function(r){200===(null===r||void 0===r?void 0:r.status)&&(p.Tj.removeToken(),n((0,m.kS)()),t("/"))}})},ot=function(n,t,r){return(0,i.useQuery)("get/".concat(n,"/").concat(t,"/").concat(r),(function(){return In(n,t,r)}),{refetchOnWindowFocus:!1})},at=function(n,t,r){return(0,i.useQuery)("admin/users/".concat(t,"/").concat(n,"/").concat(r),(function(){return jn(n,t,r)}),{refetchOnWindowFocus:!1})},it=function(n,t,r){return(0,i.useQuery)("users/packages",(function(){return Ln()}),{refetchOnWindowFocus:!1})},ft=function(){return(0,i.useQuery)("users/installments",(function(){return Bn()}),{refetchOnWindowFocus:!1})},pt=function(n){return(0,i.useQuery)("users/teams/".concat(n),(function(){return n&&kn(n)}),{refetchOnWindowFocus:!1})},dt=function(n,t){return(0,i.useQuery)("users/teamList/".concat(t,"/").concat(n),(function(){return t&&bn(n,t)}),{refetchOnWindowFocus:!1})},Zt=function(){return(0,i.useMutation)(Rn)},ht=function(){return(0,i.useMutation)(qn)}},29352:function(n,t,r){n.exports=r.p+"static/media/sonaxmultitrade.29f6ec52e5160d1f3bbb.png"}}]);
//# sourceMappingURL=925.81dc4bd5.chunk.js.map