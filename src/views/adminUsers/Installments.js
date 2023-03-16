import React from 'react'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CContainer,
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
  const { id, name, uId } = state
  const { isLoading, data: resp, refetch } = adminApi.useIntallments(id)
  const { isLoading: load, data: rewards } = adminApi.useGetRewards()
  const { isLoading: loadLeft, data: tbsLeft } = adminApi.useUserTabs('Left', id)
  const { isLoading: loadRight, data: tbsRight } = adminApi.useUserTabs('Right', id)
  const pairs = !loadLeft && !loadRight ? Math.floor((tbsRight.active + tbsLeft.active) / 2) : 0
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
        <CRow>
          <CCol md={4}>
            <CCard className="mb-2">
              <CCardHeader>
                <strong>Rewards Achievement Chart</strong>
              </CCardHeader>
              <CCardBody>
                <CContainer>
                  <CRow>
                    {!loadLeft && (
                      <CCol sm={6}>
                        <CRow>
                          <CBadge className="mb-1" color="info">
                            Left Total {tbsLeft.total}
                          </CBadge>
                          <CBadge className="mb-1" color="success">
                            Left Active {tbsLeft.active}
                          </CBadge>
                        </CRow>
                      </CCol>
                    )}
                    {!loadRight && (
                      <CCol sm={6}>
                        <CRow>
                          <CBadge className="mb-1" color="info">
                            Right Total {tbsRight.active}
                          </CBadge>
                          <CBadge className="mb-1" color="success">
                            Right Active {tbsRight.active}
                          </CBadge>
                        </CRow>
                      </CCol>
                    )}
                    {!loadRight && !loadLeft && (
                      <CCol sm={6}>
                        <CRow>
                          <CBadge className="mb-1" color="success">
                            Total Active {tbsRight.active + tbsLeft.active}
                          </CBadge>
                        </CRow>
                      </CCol>
                    )}
                    {!loadRight && !loadLeft && (
                      <CCol sm={6}>
                        <CRow>
                          <CBadge className="mb-1" color="success">
                            Total Pairs {pairs}
                          </CBadge>
                        </CRow>
                      </CCol>
                    )}
                    <div className="">
                      <h5>Rewards Time Line</h5>
                      <ul className="timeline">
                        {!load &&
                          rewards.rewards.map((res, i) => (
                            <li key={i}>
                              <p className="float-right">{res.rewardLevel}</p>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </CRow>
                </CContainer>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol md={8}>
            <CCard>
              <CCardHeader>
                <strong>
                  {name}&apos;s {'(' + uId + ')'} Installments Chart
                </strong>
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
                              {item.status &&
                                `Paid on: ${dateHelper.formatRegister(item.updatedAt)} `}
                            </div>
                          </CTableDataCell>

                          <CTableDataCell>Rs. {item.price}</CTableDataCell>
                          <CTableDataCell>
                            <h5>
                              <CBadge
                                id={item._id}
                                role={!item.status ? 'button' : undefined}
                                color={item.status ? 'success' : 'danger'}
                                onClick={() => (!item.status ? statusHandler() : '')}
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
      </CCol>
    </CRow>
  )
}

export default Installments
