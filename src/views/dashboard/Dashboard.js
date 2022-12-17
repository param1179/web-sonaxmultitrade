import React from 'react'

import {
  CAvatar,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CImage,
  CRow,
  CWidgetStatsC,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilDollar, cilPeople } from '@coreui/icons'

import { adminApi } from 'src/APIs'

const Dashboard = () => {
  const { isLoading, data: resp } = adminApi.useStatistics()

  return (
    <>
      <CRow>
        <CCol xs={12}>
          <CRow>
            <CCard>
              <CCardHeader>
                <strong>Medsembly Dashboard</strong>
              </CCardHeader>
              <CCardBody>
                Medsembly Is The Premier Network Bringing Students And Professionals Together Under
                One Community
              </CCardBody>
            </CCard>
          </CRow>
        </CCol>
        {/* <div className="clearfix">
          <CImage
            className="rounded-circle mt-5 bg-dark"
            align="center"
            src={'/static/media/favicon.b9135d337a3bf35494052799fdf069cc.svg'}
            width={200}
            height={200}
          />
        </div> */}
      </CRow>
      <CRow>
        {resp?.data?.statistic.map((item, i) => (
          <CCol key={i} xs={3}>
            <CWidgetStatsC
              className="mb-3 mt-3"
              icon={<CIcon icon={i === 3 ? cilDollar : cilPeople} height={36} />}
              progress={{ color: 'success', value: 100 }}
              text="Widget helper text"
              title={item.title}
              value={item.value}
            />
          </CCol>
        ))}
      </CRow>
    </>
  )
}

export default Dashboard
