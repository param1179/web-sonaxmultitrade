import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CHeader,
  CRow,
} from '@coreui/react'
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { adminApi } from 'src/APIs'
import { authSchema } from 'src/validators'

const vars = {
  '--cui-header-bg': '#E4e4e4',
}

function UserUpdate() {
  const { id } = useParams()
  const { isLoading, data, refetch } = adminApi.useGetUserProfile(id)

  const initialValues = {
    firstName: data?.data.user.firstName,
    lastName: data?.data.user.lastName,
    dob: data?.data.user.dob,
    mobile: data?.data.user.mobile,
    email: data?.data.user.email,
    spouseOrFather: data?.data.user.spouseOrFather,
    nomineeFirstName: data?.data.nominee.firstName,
    nomineeLastName: data?.data.nominee.lastName,
    nomineeDob: data?.data.nominee.dob,
    nomineeRelation: data?.data.nominee.relation,
    locality: data?.data.user.locality,
    city: data?.data.user.city,
    district: data?.data.user.district,
    state: data?.data.user.state,
    pin: data?.data.user.pin,
    country: data?.data.user.country,
  }

  const {
    values,
    handleChange,
    setValues,
    submitForm,
    errors,
    isValid,
    dirty,
    touched,
    handleBlur,
  } = useFormik({
    initialValues,
    validationSchema: authSchema.updateUser,
    onSubmit: (values) => onCreate(values),
  })

  useEffect(() => {
    setValues({ ...initialValues })
  }, [isLoading, data])

  const mutateCreate = adminApi.useEditUser()

  const onCreate = async (body) => {
    const resp = await mutateCreate.mutateAsync({ id, body })
    if (resp?.status === 200) {
      toast.success('User updated')
      refetch()
    }
  }
  return (
    <CRow>
      <CCol xs={12}>
        <CRow>
          <CCol>
            <CCard className="mb-4">
              <CCardHeader>
                <strong>Update Details</strong>
              </CCardHeader>
              <CCardBody>
                <CForm>
                  <CRow>
                    <CCol md={12}>
                      <CRow>
                        <CHeader style={vars} className="mb-3">
                          <strong>User&apos;s Personal Details</strong>
                        </CHeader>
                        <CCol md={6}>
                          <div className="mb-3">
                            <CFormLabel htmlFor="fistNameControlInput">First Name</CFormLabel>
                            <CFormInput
                              type="text"
                              id="fistNameControlInput"
                              placeholder="First Name"
                              value={values.firstName || ''}
                              name="firstName"
                              onChange={handleChange}
                              error={errors.firstName}
                            />
                            {errors && <p className="text-danger">{errors.firstName}</p>}
                          </div>
                        </CCol>
                        <CCol md={6}>
                          <div className="mb-3">
                            <CFormLabel htmlFor="lastNameControlInput">Last Name</CFormLabel>
                            <CFormInput
                              type="text"
                              id="lastNameControlInput"
                              placeholder="Last Name"
                              value={values.lastName || ''}
                              name="lastName"
                              onChange={handleChange}
                              error={errors.lastName}
                            />
                            {errors && <p className="text-danger">{errors.lastName}</p>}
                          </div>
                        </CCol>
                        <CCol md={6}>
                          <div className="mb-3">
                            <CFormLabel htmlFor="dobFormControlInput">Date Of Birth</CFormLabel>
                            <CFormInput
                              type="date"
                              id="dobFormControlInput"
                              value={values.dob || ''}
                              name="dob"
                              onChange={handleChange}
                              error={errors.dob}
                            />
                            {errors && <p className="text-danger">{errors.dob}</p>}
                          </div>
                        </CCol>
                        <CCol md={6}>
                          <div className="mb-3">
                            <CFormLabel htmlFor="spouseOrFatherControlInput">
                              Father&apos;s/Spouse&apos;s Name
                            </CFormLabel>
                            <CFormInput
                              type="text"
                              id="spouseOrFatherControlInput"
                              placeholder="Father's/Spouse Name"
                              value={values.spouseOrFather || ''}
                              name="spouseOrFather"
                              onChange={handleChange}
                              error={errors.spouseOrFather}
                            />
                            {errors && <p className="text-danger">{errors.spouseOrFather}</p>}
                          </div>
                        </CCol>
                      </CRow>
                      <CRow>
                        <CHeader style={vars} className="mb-3">
                          <strong>User&apos;s Contact Details</strong>
                        </CHeader>
                        <CCol md={6}>
                          <div className="mb-3">
                            <CFormLabel htmlFor="mobileControlInput">Mobile Number</CFormLabel>
                            <CFormInput
                              type="text"
                              id="mobileControlInput"
                              placeholder="Mobile Number"
                              value={values.mobile || ''}
                              name="mobile"
                              onChange={handleChange}
                              error={errors.mobile}
                            />
                            {errors && <p className="text-danger">{errors.mobile}</p>}
                          </div>
                        </CCol>
                        {/* <CCol md={6}>
                          <div className="mb-3">
                            <CFormLabel htmlFor="emailControlInput">Email Id</CFormLabel>
                            <CFormInput
                              type="text"
                              id="emailControlInput"
                              placeholder="Email Id"
                              value={values.email}
                              name="email"
                              onChange={handleChange}
                              error={errors.email}
                            />
                            {errors && <p className="text-danger">{errors.email}</p>}
                          </div>
                        </CCol> */}
                      </CRow>
                      <CRow>
                        <CHeader style={vars} className="mb-3">
                          <strong>User Address Details</strong>
                        </CHeader>
                        <CCol md={6}>
                          <div className="mb-3">
                            <CFormLabel htmlFor="localityControlInput">
                              House Number/Vilaage/Post Office
                            </CFormLabel>
                            <CFormInput
                              type="text"
                              id="localityControlInput"
                              placeholder="House Number/Vilaage/Post Office"
                              value={values.locality || ''}
                              name="locality"
                              onChange={handleChange}
                              error={errors.locality}
                            />
                            {errors && <p className="text-danger">{errors.locality}</p>}
                          </div>
                        </CCol>
                        <CCol md={6}>
                          <div className="mb-3">
                            <CFormLabel htmlFor="cityControlInput">City</CFormLabel>
                            <CFormInput
                              type="text"
                              id="cityControlInput"
                              placeholder="Last Name"
                              value={values.city || ''}
                              name="city"
                              onChange={handleChange}
                              error={errors.city}
                            />
                            {errors && <p className="text-danger">{errors.city}</p>}
                          </div>
                        </CCol>
                        <CCol md={6}>
                          <div className="mb-3">
                            <CFormLabel htmlFor="districtControlInput">District</CFormLabel>
                            <CFormInput
                              type="text"
                              id="districtControlInput"
                              placeholder="District"
                              value={values.district || ''}
                              name="district"
                              onChange={handleChange}
                              error={errors.district}
                            />
                            {errors && <p className="text-danger">{errors.district}</p>}
                          </div>
                        </CCol>
                        <CCol md={6}>
                          <div className="mb-3">
                            <CFormLabel htmlFor="stateControlInput">State</CFormLabel>
                            <CFormInput
                              type="text"
                              id="stateControlInput"
                              placeholder="State"
                              value={values.state || ''}
                              name="state"
                              onChange={handleChange}
                              error={errors.state}
                            />
                            {errors && <p className="text-danger">{errors.state}</p>}
                          </div>
                        </CCol>
                        <CCol md={6}>
                          <div className="mb-3">
                            <CFormLabel htmlFor="pinControlInput">Area Pin Code</CFormLabel>
                            <CFormInput
                              type="text"
                              id="pinControlInput"
                              placeholder="Area Pin Code"
                              value={values.pin || ''}
                              name="pin"
                              onChange={handleChange}
                              error={errors.pin}
                            />
                            {errors && <p className="text-danger">{errors.pin}</p>}
                          </div>
                        </CCol>
                        <CCol md={6}>
                          <div className="mb-3">
                            <CFormLabel htmlFor="countryControlInput">Country</CFormLabel>
                            <CFormInput
                              type="text"
                              id="countryControlInput"
                              placeholder="Country"
                              value={values.country || ''}
                              name="country"
                              onChange={handleChange}
                              error={errors.country}
                            />
                            {errors && <p className="text-danger">{errors.country}</p>}
                          </div>
                        </CCol>
                      </CRow>
                      <CRow>
                        <CHeader style={vars} className="mb-3">
                          <strong>Nominee&apos;s Details</strong>
                        </CHeader>
                        <CCol md={6}>
                          <div className="mb-3">
                            <CFormLabel htmlFor="nomineeFirstNameControlInput">
                              First Name
                            </CFormLabel>
                            <CFormInput
                              type="text"
                              id="nomineeFirstNameControlInput"
                              placeholder="nomineeFirstName"
                              value={values.nomineeFirstName || ''}
                              name="nomineeFirstName"
                              onChange={handleChange}
                              error={errors.nomineeFirstName}
                            />
                            {errors && <p className="text-danger">{errors.nomineeFirstName}</p>}
                          </div>
                        </CCol>
                        <CCol md={6}>
                          <div className="mb-3">
                            <CFormLabel htmlFor="nomineeFirstNameControlInput">
                              Last Name
                            </CFormLabel>
                            <CFormInput
                              type="text"
                              id="nomineeLastNameControlInput"
                              placeholder="nomineeLastName"
                              value={values.nomineeLastName || ''}
                              name="nomineeLastName"
                              onChange={handleChange}
                              error={errors.nomineeLastName}
                            />
                            {errors && <p className="text-danger">{errors.nomineeLastName}</p>}
                          </div>
                        </CCol>
                        <CCol md={6}>
                          <div className="mb-3">
                            <CFormLabel htmlFor="nomineeDobControlInput">Date Of Birth</CFormLabel>
                            <CFormInput
                              type="date"
                              id="nomineeDobControlInput"
                              placeholder="nomineeDob"
                              value={values.nomineeDob || ''}
                              name="nomineeDob"
                              onChange={handleChange}
                              error={errors.nomineeDob}
                            />
                            {errors && <p className="text-danger">{errors.nomineeDob}</p>}
                          </div>
                        </CCol>
                        <CCol md={6}>
                          <div className="mb-3">
                            <CFormLabel htmlFor="nomineeRelationControlInput">Relation</CFormLabel>
                            <CFormInput
                              type="text"
                              id="nomineeRelationControlInput"
                              placeholder="nomineeRelation"
                              value={values.nomineeRelation || ''}
                              name="nomineeRelation"
                              onChange={handleChange}
                              error={errors.nomineeRelation}
                            />
                            {errors && <p className="text-danger">{errors.nomineeRelation}</p>}
                          </div>
                        </CCol>
                      </CRow>
                    </CCol>
                  </CRow>
                  <hr />
                  <CRow>
                    <CCol md={6}>
                      <div className="d-grid gap-2 mb-3">
                        <CButton
                          color="primary"
                          onClick={submitForm}
                          disabled={!(isValid && dirty) || mutateCreate.isLoading}
                        >
                          Update Account
                        </CButton>
                      </div>
                    </CCol>
                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CCol>
    </CRow>
  )
}

export default UserUpdate
