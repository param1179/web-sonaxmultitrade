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
import { adminApi } from 'src/APIs'
import { useLocation } from 'react-router-dom'
import { dateHelper } from 'src/helpers'
import { confirmAlert } from 'react-confirm-alert'

function Installments() {
  const { state } = useLocation()
  const { id } = state
  const { isLoading, data: resp, refetch } = adminApi.useIntallments(id)
  const update = adminApi.useUpdatePayment()

  const statusHandler = async (event) => {
    const id = event.target.id
    confirmAlert({
      title: `Update this user`,
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
                    <CTableHeaderCell>Installments</CTableHeaderCell>
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
                          <CBadge
                            id={item._id}
                            role={!item.status && 'button'}
                            color={item.status ? 'success' : 'danger'}
                            onClick={!item.status && statusHandler}
                          >
                            {item.status ? 'Paid' : 'Pay'}
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

export default Installments
