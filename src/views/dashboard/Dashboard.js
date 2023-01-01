import React from 'react'

import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'

import { adminApi } from 'src/APIs'

const Dashboard = () => {
  const { isLoading, data: resp } = adminApi.useProfile()

  const pos = resp?.data?.sponserBY?.childs?.filter((res) => res.childId._id === resp?.data?._id)

  return (
    <>
      <CRow>
        <CCol xs={12}>
          <CRow>
            <CCol md={4}>
              <CCard>
                <CCardHeader>
                  <strong>User&apos;s Details</strong>
                </CCardHeader>
                <CCardBody>
                  <CRow>
                    <CCol>UID:</CCol>
                    <CCol>{resp?.data.uId}</CCol>
                  </CRow>
                  <hr />
                  <CRow>
                    <CCol>Full Name:</CCol>
                    <CCol>
                      {resp?.data.firstName} {resp?.data.lastName}
                    </CCol>
                  </CRow>
                  <hr />
                  <CRow>
                    <CCol>Mobile Number:</CCol>
                    <CCol>+91 {resp?.data.mobile}</CCol>
                  </CRow>
                  <hr />
                </CCardBody>
              </CCard>
            </CCol>
            <CCol md={4}>
              <CCard>
                <CCardHeader>
                  <strong>User&apos;s Address</strong>
                </CCardHeader>
                <CCardBody>
                  <CRow>
                    <CCol>Hno./Vill/PO:</CCol>
                    <CCol>{resp?.data.locality}</CCol>
                  </CRow>
                  <hr />
                  <CRow>
                    <CCol>City:</CCol>
                    <CCol>{resp?.data.city}</CCol>
                  </CRow>
                  <hr />
                  <CRow>
                    <CCol>District:</CCol>
                    <CCol>{resp?.data.district}</CCol>
                  </CRow>
                  <hr />
                  <CRow>
                    <CCol>State:</CCol>
                    <CCol>{resp?.data.state}</CCol>
                  </CRow>
                  <hr />
                  <CRow>
                    <CCol>Area Pin:</CCol>
                    <CCol>{resp?.data.pin}</CCol>
                  </CRow>
                  <hr />
                </CCardBody>
              </CCard>
            </CCol>
            <CCol md={4}>
              <CCard>
                <CCardHeader>
                  <strong>User&apos;s Nominee</strong>
                </CCardHeader>
                <CCardBody>
                  <CRow>
                    <CCol>Full Name:</CCol>
                    <CCol>
                      {resp?.data?.nominee?.firstName} {resp?.data?.nominee?.lastName}
                    </CCol>
                  </CRow>
                  <hr />
                  <CRow>
                    <CCol>Date of birth:</CCol>
                    <CCol>{resp?.data?.nominee.dob}</CCol>
                  </CRow>
                  <hr />
                  <CRow>
                    <CCol>Relation:</CCol>
                    <CCol>{resp?.data?.nominee.relation}</CCol>
                  </CRow>
                  <hr />
                </CCardBody>
              </CCard>
            </CCol>
            <CCol md={4}>
              <CCard>
                <CCardHeader>
                  <strong>Sponser By</strong>
                </CCardHeader>
                <CCardBody>
                  {resp?.data.sponserBY && (
                    <>
                      <CRow>
                        <CCol>Full Name:</CCol>
                        <CCol>
                          {resp?.data.sponserBY?.parentId.firstName +
                            ' ' +
                            resp?.data.sponserBY?.parentId.lastName}
                        </CCol>
                      </CRow>
                      <hr />
                      <CRow>
                        <CCol>UID:</CCol>
                        <CCol>{resp?.data.sponserBY?.parentId.uId}</CCol>
                      </CRow>
                      <hr />
                      <CRow>
                        <CCol>Email:</CCol>
                        <CCol>{resp?.data.sponserBY?.parentId.email}</CCol>
                      </CRow>
                      <hr />
                      <CRow>
                        <CCol>Mobile Number:</CCol>
                        <CCol>{resp?.data.sponserBY?.parentId.mobile}</CCol>
                      </CRow>
                      <hr />
                      <CRow>
                        <CCol>Position in Team:</CCol>
                        <CCol>{pos[0].placement}</CCol>
                      </CRow>
                    </>
                  )}
                  <hr />
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
