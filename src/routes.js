import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const DashboardAdmin = React.lazy(() => import('./views/dashboard/DashboardAdmin'))
const GetUsers = React.lazy(() => import('./views/users/GetUsers'))
const GetAdminUsers = React.lazy(() => import('./views/adminUsers/GetUsers'))
const Rewards = React.lazy(() => import('./views/adminUsers/Rewards'))
const UserUpdate = React.lazy(() => import('./views/adminUsers/UserUpdate'))
const Prizes = React.lazy(() => import('./views/users/Rewards'))
const AddUser = React.lazy(() => import('./views/users/AddUser'))
const AdminAddUser = React.lazy(() => import('./views/adminUsers/AddUser'))
const DirectRegister = React.lazy(() => import('./views/users/DirectRegister'))
const Emis = React.lazy(() => import('./views/users/Emis'))
const Wallet = React.lazy(() => import('./views/users/Wallet'))

const Installments = React.lazy(() => import('./views/adminUsers/Installments'))
const ChangePassword = React.lazy(() => import('./views/users/ChangePassword'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboardAdmin', name: 'Dashboard Admin', element: DashboardAdmin },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },

  { path: '/users', name: 'Users', element: GetUsers },
  { path: '/adminUsers', name: 'Users', element: GetAdminUsers },
  { path: '/rewards', name: 'Users', element: Rewards },
  { path: '/add', name: 'Add User', element: AddUser },
  { path: '/direct', name: 'Direct Register', element: DirectRegister },
  { path: '/adminAdd', name: 'Admin Add User', element: AdminAddUser },
  { path: '/payments', name: 'Installments', element: Installments },
  { path: '/emis', name: 'Installments', element: Emis },
  { path: '/prizes', name: 'Users', element: Prizes },

  { path: '/wallet', name: 'Wallet', element: Wallet },
  { path: '/:id', name: 'Wallet', element: UserUpdate },
  { path: '/password', name: 'Change Password', element: ChangePassword },
]

export default routes
