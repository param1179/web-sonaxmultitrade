import {
  CBadge,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { useFormik } from 'formik'
import React from 'react'
import { toast } from 'react-toastify'
import { adminApi } from 'src/APIs'
import { authSchema } from 'src/validators'
import PropTypes from 'prop-types'
import { dateHelper } from 'src/helpers'

export default function RewardsForm({ id }) {
  const { isLoading, data: resp, refetch } = adminApi.useUserRewards(id)

  const {
    values,
    handleChange,
    submitForm,
    errors,
    isValid,
    dirty,
    resetForm,
    touched,
    handleBlur,
  } = useFormik({
    initialValues: {
      title: '',
      date: '',
      price: '',
    },
    validationSchema: authSchema.addRewardsbyAdmin,
    onSubmit: (values) => onCreate(values),
  })

  const mutateCreate = adminApi.useAddRewardByAdmin()

  const onCreate = async (body) => {
    const resp = await mutateCreate.mutateAsync({ body, id })
    if (resp?.status === 200) {
      toast.success("User's reward added")
      refetch()
      resetForm()
    }
  }

  return (
    <CCol md={12}>
      <CRow>
        <CCol md={12}>
          <CCard className="mb-2">
            <CCardHeader>Add Rewards</CCardHeader>
            <CCardBody>
              <CForm>
                <CRow>
                  <CCol md={4}>
                    <div className="mb-3">
                      <CFormInput
                        type="text"
                        id="titleControlInput"
                        placeholder="Title"
                        value={values.title}
                        name="title"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.title}
                      />
                      {touched.title && errors && <p className="text-danger">{errors.title}</p>}
                    </div>
                  </CCol>
                  <CCol md={4}>
                    <div className="mb-3">
                      <CFormInput
                        type="date"
                        id="dateControlInput"
                        placeholder="date"
                        value={values.date}
                        name="date"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.date}
                      />
                      {touched.date && errors && <p className="text-danger">{errors.date}</p>}
                    </div>
                  </CCol>
                  <CCol md={4}>
                    <div className="mb-3">
                      <CFormInput
                        id="priceControlInput"
                        placeholder="Price"
                        value={values.price}
                        name="price"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.price}
                      />
                      {touched.price && errors && <p className="text-danger">{errors.price}</p>}
                    </div>
                  </CCol>
                  <CCol md={4}>
                    <div className="d-grid gap-2 mb-3">
                      <CButton
                        color="primary"
                        onClick={submitForm}
                        disabled={!(isValid && dirty) || mutateCreate.isLoading}
                      >
                        Save
                      </CButton>
                    </div>
                  </CCol>
                </CRow>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol md={12}>
          <CCard className="mb-2">
            <CCardHeader>
              <strong>User&apos;s Archive Rewars.</strong>{' '}
              <strong className="float-end">
                Total Earned: <i>{!isLoading && resp?.total}</i>
              </strong>
            </CCardHeader>
            <CCardBody>
              <CRow className="table-row">
                <CTable align="middle" bordered className="mb-0 border" hover responsive striped>
                  <CTableHead color="light">
                    <CTableRow>
                      <CTableHeaderCell>S. No.</CTableHeaderCell>
                      <CTableHeaderCell>Reward Title</CTableHeaderCell>
                      <CTableHeaderCell>Reward Date</CTableHeaderCell>
                      <CTableHeaderCell>Price</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {!isLoading &&
                      resp?.rewards.map((item, index) => (
                        <CTableRow v-for="item in tableItems" key={index}>
                          <CTableDataCell>{index + 1}</CTableDataCell>
                          <CTableDataCell>{item.title}</CTableDataCell>
                          <CTableDataCell>{dateHelper.formatRegister(item.date)}</CTableDataCell>

                          <CTableDataCell>Rs. {item.price}</CTableDataCell>
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
  )
}

RewardsForm.propTypes = {
  id: PropTypes.any,
}
