import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilPeople, cilSpeedometer, cilGift } from '@coreui/icons'
import { CNavItem, CNavTitle } from '@coreui/react'

const _navAdmin = [
  {
    component: CNavItem,
    name: 'Dashboard Admin',
    to: '/dashboardAdmin',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Users',
  },
  {
    component: CNavItem,
    name: 'Admin Add New User',
    to: '/adminAdd',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'All Users',
    to: '/adminUsers',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Rewards',
    to: '/rewards',
    icon: <CIcon icon={cilGift} customClassName="nav-icon" />,
  },
]

export default _navAdmin
