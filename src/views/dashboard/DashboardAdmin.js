import React, { useEffect, useState } from 'react'

import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
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
import { cilBank, cilUser } from '@coreui/icons'

import { adminApi } from 'src/APIs'
import { dateHelper } from 'src/helpers'
import { confirmAlert } from 'react-confirm-alert'
import { useFormik } from 'formik'
import { authSchema } from 'src/validators'
import { useQueryClient } from 'react-query'

const DashboardAdmin = () => {
  const queryClient = useQueryClient()
  const [dates, setDates] = useState({
    from: new Date(),
    to: new Date(),
  })
  const { isLoading, data: resp, refetch } = adminApi.usePaymentRequests()
  const { isLoading: load, data, refetch: ref } = adminApi.useBusiness(dates)
  const update = adminApi.useUpdatePaymentRequest()

  const { values, handleChange, submitForm, errors, isValid, dirty, resetForm, setFieldValue } =
    useFormik({
      initialValues: {
        from: '',
        to: '',
      },
      validationSchema: authSchema.searchDataByDates,
      onSubmit: (values) => onCreate(values),
    })

  const onCreate = async (body) => {
    setDates({ ...body })
    // const data = await adminApi.fetchBusiness(body)

    // console.log(data)
  }

  useEffect(() => {
    queryClient.prefetchQuery(`admin/business/${dates.from}/${dates.to}`, () =>
      adminApi.fetchBusiness(dates),
    )
  }, [dates, queryClient])

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
          <CRow>
            <CCol md={4} className="mb-3">
              <CCard>
                <CCardHeader>Search by Dates</CCardHeader>
                <CCardBody>
                  <CRow>
                    <CForm>
                      <CCol md={12}>
                        <div className="mb-3">
                          <CFormLabel htmlFor="fromControlInput">From Date</CFormLabel>
                          <CFormInput
                            type="date"
                            id="fromControlInput"
                            placeholder="From Date"
                            value={values.from}
                            name="from"
                            onChange={handleChange}
                            error={errors.from}
                          />
                          {errors && <p className="text-danger">{errors.from}</p>}
                        </div>
                      </CCol>
                      <CCol md={12}>
                        <div className="mb-3">
                          <CFormLabel htmlFor="toControlInput">To Date</CFormLabel>
                          <CFormInput
                            type="date"
                            id="toControlInput"
                            placeholder="To Date"
                            value={values.to}
                            name="to"
                            onChange={handleChange}
                            error={errors.to}
                          />
                          {errors && <p className="text-danger">{errors.to}</p>}
                        </div>
                      </CCol>
                      <CCol md={12}>
                        <div className="d-grid gap-2 mb-3">
                          <CButton
                            color="primary"
                            onClick={submitForm}
                            disabled={!(isValid && dirty)}
                          >
                            Search
                          </CButton>
                        </div>
                      </CCol>
                    </CForm>
                  </CRow>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol md={8}>
              <CRow>
                <CCol md={6}>
                  <CWidgetStatsC
                    className="mb-3"
                    icon={<CIcon icon={cilBank} height={36} />}
                    color="info"
                    inverse
                    progress={{ value: 100 }}
                    text="Widget helper text"
                    title="By Months"
                    value={`Rs. ${!load ? data.monthlyBusiness : 'Loading...'}`}
                  />
                </CCol>
                <CCol md={6}>
                  <CWidgetStatsC
                    className="mb-3"
                    icon={<CIcon icon={cilBank} height={36} />}
                    color="info"
                    inverse
                    progress={{ value: 100 }}
                    text="Widget helper text"
                    title="Total Business"
                    value={`Rs. ${!load ? data.totalBusiness : 'Loading...'}`}
                  />
                </CCol>
                <CCol md={6}>
                  <CWidgetStatsC
                    className="mb-3"
                    icon={<CIcon icon={cilUser} height={36} />}
                    color="info"
                    inverse
                    progress={{ value: 100 }}
                    text="Widget helper text"
                    title="By Months Active Users"
                    value={`${!load ? data.usersMonthly : 'Loading...'}`}
                  />
                </CCol>
                <CCol md={6}>
                  <CWidgetStatsC
                    className="mb-3"
                    icon={<CIcon icon={cilUser} height={36} />}
                    color="info"
                    inverse
                    progress={{ value: 100 }}
                    text="Widget helper text"
                    title="Total Active Users"
                    value={`${!load ? data.users : 'Loading...'}`}
                  />
                </CCol>
              </CRow>
            </CCol>
          </CRow>
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
