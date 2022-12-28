import React from 'react'

import {
  CAvatar,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CHeader,
  CImage,
  CRow,
  CWidgetStatsC,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilDollar, cilPeople } from '@coreui/icons'

import { adminApi } from 'src/APIs'

const DashboardAdmin = () => {
  return (
    <>
      <CRow>
        <CCol xs={12}>
          <CHeader>Admin Dashboard</CHeader>
        </CCol>
      </CRow>
    </>
  )
}

export default DashboardAdmin
