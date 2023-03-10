import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { CImage, CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react'
import CIcon from '@coreui/icons-react'

import { AppSidebarNav } from './AppSidebarNav'
import { sygnet } from 'src/assets/brand/sygnet'

import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

// sidebar nav config
import navigation from '../_nav'
import navigationAdmin from '../_navAdmin'
import { commonSelector } from 'src/redux'
import { changeState } from 'src/redux/slices/common'
import brand from 'src/assets/sonaxmultitrade.png'
import { getProfileData } from 'src/helpers/tokenLS'

const AppSidebar = () => {
  const dispatch = useDispatch()
  const { sidebarUnfoldable, sidebarShow } = useSelector(commonSelector)
  const vars = {
    '--cui-sidebar-nav-link-hover-bg': '#f11a2e73',
    '--cui-sidebar-nav-link-active-bg': '#f11a2e',
    '--cui-sidebar-bg': '#333232',
  }

  const profile = getProfileData()

  return (
    <CSidebar
      style={vars}
      position="fixed"
      unfoldable={sidebarUnfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch(changeState({ type: 'set', sidebarShow: visible }))
      }}
    >
      <CSidebarBrand className="d-none d-md-flex" to="/">
        <CImage src={brand} width="70" />
        Sonax Multitrade
        <CIcon className="sidebar-brand-narrow" icon={sygnet} height={35} />
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav
            items={profile && profile.role === 'superAdmin' ? navigationAdmin : navigation}
          />
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() =>
          dispatch(changeState({ type: 'set', sidebarUnfoldable: !sidebarUnfoldable }))
        }
      />
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
