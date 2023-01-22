import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const DashboardAdmin = React.lazy(() => import('./views/dashboard/DashboardAdmin'))
const GetUsers = React.lazy(() => import('./views/users/GetUsers'))
const GetAdminUsers = React.lazy(() => import('./views/adminUsers/GetUsers'))
const AddUser = React.lazy(() => import('./views/users/AddUser'))
const AdminAddUser = React.lazy(() => import('./views/adminUsers/AddUser'))
const DirectRegister = React.lazy(() => import('./views/users/DirectRegister'))
const ChangePassword = React.lazy(() => import('./views/users/ChangePassword'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboardAdmin', name: 'Dashboard Admin', element: DashboardAdmin },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },

  { path: '/users', name: 'Users', element: GetUsers },
  { path: '/adminUsers', name: 'Users', element: GetAdminUsers },
  { path: '/add', name: 'Add User', element: AddUser },
  { path: '/direct', name: 'Direct Register', element: DirectRegister },
  { path: '/adminAdd', name: 'Admin Add User', element: AdminAddUser },
  { path: '/activities', name: 'Users Activities', element: AddUser },
  { path: '/coupons', name: 'Coupons', element: AddUser },
  { path: '/password', name: 'Change Password', element: ChangePassword },
]

export default routes
