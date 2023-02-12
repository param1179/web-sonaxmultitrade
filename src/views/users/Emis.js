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
                  {/* {itemsK.map((item, index) => ( */}
                  <CTableRow v-for="item in tableItems" key={''}>
                    <CTableDataCell>1</CTableDataCell>
                    <CTableDataCell>
                      <div>{'Downpayment'}</div>
                      <div className="small text-medium-emphasis">
                        <span>{'New |'}</span> Paid on: {'01/02/2023'}
                      </div>
                    </CTableDataCell>

                    <CTableDataCell>1600</CTableDataCell>
                    <CTableDataCell>
                      <h5>
                        <CBadge color="success">Paid</CBadge>
                      </h5>
                    </CTableDataCell>
                  </CTableRow>
                  {/* ))} */}
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
