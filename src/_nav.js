import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilDollar,
  cilGift,
  cilGraph,
  cilLibrary,
  cilPeople,
  cilSpeedometer,
  cilWallet,
} from '@coreui/icons'
import { CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
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
    name: 'Direct Register',
    to: '/direct',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'All Users',
    to: '/users',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Installments',
    to: '/emis',
    icon: <CIcon icon={cilDollar} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Rewards',
    to: '/prizes',
    icon: <CIcon icon={cilGift} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Wallet',
    to: '/wallet',
    icon: <CIcon icon={cilWallet} customClassName="nav-icon" />,
  },
]

export default _nav
