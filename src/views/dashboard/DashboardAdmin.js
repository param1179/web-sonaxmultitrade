import React from 'react'

import {
  CAvatar,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CHeader,
  CImage,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CWidgetStatsC,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilDollar, cilPeople } from '@coreui/icons'

import { adminApi } from 'src/APIs'
import { dateHelper } from 'src/helpers'
import { confirmAlert } from 'react-confirm-alert'

const DashboardAdmin = () => {
  const { isLoading, data: resp, refetch } = adminApi.usePaymentRequests()
  const update = adminApi.useUpdatePaymentRequest()

  const requestUpdate = (_id) => {
    const id = _id
    confirmAlert({
      title: `Approve this payment`,
      message: `Are you sure?`,
      buttons: [
        {
          label: 'Yes',
          onClick: async () => {
            const resp = await update.mutateAsync(id)
            if (resp?.status === 200) {
              refetch()
            }
          },
        },
        {
          label: 'No',
          // onClick: () => alert("Click No")
        },
      ],
    })
  }
  return (
    <>
      <CRow>
        <CCol xs={12}>
          <CCard>
            <CCardHeader>Payment Requests</CCardHeader>
            <CCardBody>
              <CRow className="table-row">
                {!isLoading && resp?.requests.length !== 0 ? (
                  <CTable align="middle" bordered className="mb-0 border" hover responsive striped>
                    <CTableHead color="light">
                      <CTableRow>
                        <CTableHeaderCell>S. No.</CTableHeaderCell>
                        <CTableHeaderCell>Request By</CTableHeaderCell>
                        <CTableHeaderCell>Payment</CTableHeaderCell>
                        <CTableHeaderCell>Action</CTableHeaderCell>
                      </CTableRow>
                    </CTableHead>
                    <CTableBody>
                      {resp?.requests.map((item, index) => (
                        <CTableRow v-for="item in tableItems" key={index}>
                          <CTableDataCell>{index + 1}</CTableDataCell>
                          <CTableDataCell>
                            {`${item.requestBy?.firstName}(${item.requestBy?.uId})`}
                            <div className="small text-medium-emphasis">
                              <span></span>{' '}
                              {`Request on: ${dateHelper.formatRegister(item.createdAt)} `}
                            </div>
                          </CTableDataCell>
                          <CTableDataCell>Rs. {item.payment}</CTableDataCell>
                          <CTableDataCell>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                              {item.status === 'paid' ? (
                                `Paid on: ${dateHelper.formatRegister(item.updatedAt)} `
                              ) : (
                                <CButton color="success" onClick={() => requestUpdate(item._id)}>
                                  Pay
                                </CButton>
                              )}
                            </div>
                          </CTableDataCell>
                        </CTableRow>
                      ))}
                    </CTableBody>
                  </CTable>
                ) : (
                  <div className="p-3 text-center">Requests not available</div>
                )}
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default DashboardAdmin
