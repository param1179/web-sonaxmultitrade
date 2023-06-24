import React, { useState } from 'react'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CWidgetStatsA,
  CWidgetStatsC,
} from '@coreui/react'
import { usersApi } from 'src/APIs'
import { dateHelper } from 'src/helpers'
import CIcon from '@coreui/icons-react'
import { cil3d, cilChartPie, cilWallet } from '@coreui/icons'
import { getProfileData } from 'src/helpers/tokenLS'

function Wallet() {
  const [wallet] = useState(false)
  const profile = getProfileData()
  const { isLoading, data: resp } = usersApi.useIntallments()
  return (
    <CRow>
      <CCol md={12}>
        <CRow>
          <CCol md={4}>
            <CWidgetStatsC
              className="mb-3"
              icon={<CIcon icon={cilWallet} height={36} />}
              color="success"
              inverse
              progress={{ value: 0 }}
              text="Widget helper text"
              title="Wallet Balance"
              value={`Rs. ${resp?.wallet}`}
            />
            <CWidgetStatsC
              className="mb-3"
              icon={<CIcon icon={cil3d} height={36} />}
              color="success"
              inverse
              progress={{ value: 0 }}
              text="Widget helper text"
              title="Total Points"
              value={resp?.points}
            />
          </CCol>
          <CCol md={8}>
            <CCard>
              <CCardHeader>
                <strong>Transactions</strong>
              </CCardHeader>
              <CCardBody>
                <CRow className="table-row">
                  {!isLoading && resp?.walletHistory.length !== 0 ? (
                    <CTable
                      align="middle"
                      bordered
                      className="mb-0 border"
                      hover
                      responsive
                      striped
                    >
                      <CTableHead color="light">
                        <CTableRow>
                          <CTableHeaderCell>S. No.</CTableHeaderCell>
                          <CTableHeaderCell>Payment</CTableHeaderCell>
                          <CTableHeaderCell>Payment By</CTableHeaderCell>
                          <CTableHeaderCell>Level By</CTableHeaderCell>
                        </CTableRow>
                      </CTableHead>
                      <CTableBody>
                        {resp?.walletHistory.map((item, index) => (
                          <CTableRow v-for="item in tableItems" key={index}>
                            <CTableDataCell>{index + 1}</CTableDataCell>
                            <CTableDataCell>
                              <div>Rs. {item.payment}</div>
                              <div className="small text-medium-emphasis">
                                <span></span>{' '}
                                {`Received on: ${dateHelper.formatRegister(item.createdAt)} `}
                              </div>
                            </CTableDataCell>

                            <CTableDataCell>{`${item.paymentBy?.firstName}(${item.paymentBy?.uId})`}</CTableDataCell>
                            <CTableDataCell>
                              <h5>
                                <CBadge color={'success'}>{item.levelBy}</CBadge>
                              </h5>
                            </CTableDataCell>
                          </CTableRow>
                        ))}
                      </CTableBody>
                    </CTable>
                  ) : (
                    <div className="p-3 text-center">History not available</div>
                  )}
                </CRow>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CCol>
    </CRow>
  )
}

export default Wallet
