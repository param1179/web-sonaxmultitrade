import React from 'react'
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
} from '@coreui/react'
import { usersApi } from 'src/APIs'
import { dateHelper } from 'src/helpers'

function Emis() {
  const { isLoading, data: resp } = usersApi.useIntallments()
  console.log(resp)
  return (
    <CRow>
      <CCol md={12}>
        <CCard>
          <CCardHeader>
            <strong>Installments Chart</strong>
          </CCardHeader>
          <CCardBody>
            <CRow className="table-row">
              <CTable align="middle" bordered className="mb-0 border" hover responsive striped>
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
                          {item.status && `Paid on: ${dateHelper.formatRegister(item.updatedAt)} `}
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
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Emis
