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

function Wallet() {
  const [wallet] = useState(false)
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
              value="Rs. 0"
            />
            <CWidgetStatsC
              className="mb-3"
              icon={<CIcon icon={cil3d} height={36} />}
              color="success"
              inverse
              progress={{ value: 0 }}
              text="Widget helper text"
              title="Points"
              value="0"
            />
          </CCol>
          <CCol md={8}>
            <CCard>
              <CCardHeader>
                <strong>Transactions</strong>
              </CCardHeader>
              <CCardBody>
                <CRow className="table-row">
                  {wallet ? (
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
                          <CTableHeaderCell>Installments Date & Payment Type</CTableHeaderCell>
                          <CTableHeaderCell>Amount</CTableHeaderCell>
                          <CTableHeaderCell>Status</CTableHeaderCell>
                        </CTableRow>
                      </CTableHead>
                      <CTableBody>
                        {resp?.data.map((item, index) => (
                          <CTableRow v-for="item in tableItems" key={index}>
                            <CTableDataCell>{index + 1}</CTableDataCell>
                            <CTableDataCell>
                              <div>{index === 0 ? 'Downpayment' : 'Payment'}</div>
                              <div className="small text-medium-emphasis">
                                <span>{!item.status && ' Unpaid |'}</span>{' '}
                                {item.status &&
                                  `Paid on: ${dateHelper.formatRegister(item.updatedAt)} `}
                              </div>
                            </CTableDataCell>

                            <CTableDataCell>Rs. {item.price}</CTableDataCell>
                            <CTableDataCell>
                              <h5>
                                <CBadge color={item.status ? 'success' : 'danger'}>
                                  {item.status ? 'Paid' : 'Due'}
                                </CBadge>
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
