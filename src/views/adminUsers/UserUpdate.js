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
} from '@coreui/react'
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { adminApi } from 'src/APIs'
import { authSchema } from 'src/validators'

function UserUpdate() {
  const { id } = useParams()
  const { isLoading, data: user, refetch } = adminApi.useGetUser(id)

  const {
    values,
    handleChange,
    setFieldValue,
    submitForm,
    errors,
    isValid,
    dirty,
    touched,
    handleBlur,
  } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      mobile: '',
    },
    validationSchema: authSchema.updateUser,
    onSubmit: (values) => onCreate(values),
  })

  useEffect(() => {
    setFieldValue('firstName', user?.user.firstName)
    setFieldValue('lastName', user?.user.lastName)
    setFieldValue('mobile', user?.user.mobile)
  }, [isLoading])

  const mutateCreate = adminApi.useEditUser()

  const onCreate = async (body) => {
    const resp = await mutateCreate.mutateAsync({ id, body })
    if (resp?.status === 200) {
      refetch()
    }
  }
  return (
    <CRow>
      <CCol md={12}>
        <CCard>
          <CCardHeader>
            <strong>User ID: {user?.user.uId}</strong>
          </CCardHeader>
          <CCardBody>
            {!isLoading && (
              <CForm>
                <CRow>
                  <CCol md={3}>
                    <div className="mb-3">
                      <CFormInput
                        type="text"
                        id="firstNameControlInput"
                        placeholder="First Name"
                        value={values.firstName || ''}
                        name="firstName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.firstName}
                      />
                      {touched.firstName && errors && (
                        <p className="text-danger">{errors.firstName}</p>
                      )}
                    </div>
                  </CCol>
                  <CCol md={3}>
                    <div className="mb-3">
                      <CFormInput
                        type="text"
                        id="lastNameControlInput"
                        placeholder="Last Name"
                        value={values.lastName || ''}
                        name="lastName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.lastName}
                      />
                      {touched.lastName && errors && (
                        <p className="text-danger">{errors.lastName}</p>
                      )}
                    </div>
                  </CCol>
                  <CCol md={3}>
                    <div className="mb-3">
                      <CFormInput
                        type="text"
                        id="mobileControlInput"
                        placeholder="Mobile number"
                        value={values.mobile || ''}
                        name="mobile"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.mobile}
                      />
                      {touched.mobile && errors && <p className="text-danger">{errors.mobile}</p>}
                    </div>
                  </CCol>
                  <CCol md={3}>
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
            )}
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default UserUpdate
