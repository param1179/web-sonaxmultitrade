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
import React, { useState } from 'react'
import { adminApi } from 'src/APIs'
import { authSchema } from 'src/validators'
const vars = {
  '--cui-header-bg': '#E4e4e4',
}

const AddUser = () => {
  const { data: packages } = adminApi.useGetPackages()
  const { isLoading, data: users } = adminApi.useGetAllUsers()

  const { values, handleChange, submitForm, errors, isValid, dirty, resetForm, setFieldValue } =
    useFormik({
      initialValues: {
        parentId: '',
        sponserId: '',
        packageId: packages?.data[0]._id,
        placement: 'Left',
        firstName: '',
        lastName: '',
        dob: '',
        mobile: '',
        email: '',
        gender: 'Male',
        activeUser: 'Active',
        password: '',
        cpassword: '',
        spouseOrFather: '',
        nomineeFirstName: '',
        nomineeLastName: '',
        nomineeDob: '',
        nomineeRelation: '',
        locality: '',
        city: '',
        district: '',
        state: '',
        pin: '',
        country: '',
      },
      validationSchema: authSchema.createUser,
      onSubmit: (values) => onCreate(values),
    })

  const mutateCreate = adminApi.useCreateAdminUser()

  const onCreate = async (body) => {
    body.packageId = packages?.data[0]?._id
    const resp = await mutateCreate.mutateAsync(body)
    if (resp?.status === 200) {
      resetForm()
    }
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CRow>
          <CCol>
            <CCard className="mb-4">
              <CCardHeader>
                <strong>Fill All Details</strong>
              </CCardHeader>
              <CCardBody>
                <CForm>
                  <CRow>
                    <CCol md={12}>
                      <CRow>
                        <CHeader style={vars} className="mb-3">
                          <strong>Sponser&apos;s Details</strong>
                        </CHeader>

                        <CCol md={6}>
                          <div className="mb-3">
                            <CFormLabel htmlFor="exampleFormControlInput1">
                              Select Sponsered By
                            </CFormLabel>
                            <CFormSelect
                              aria-label="Default select example"
                              name="sponserId"
                              onChange={(e) => setFieldValue('sponserId', e.target.value)}
                            >
                              {isLoading && <option value="">Loading..</option>}

                              <option value="">Select Sponser</option>
                              {users?.users.map((res, i) => (
                                <option
                                  key={i}
                                  value={res._id}
                                >{`${res.firstName} ${res.lastName} (${res.uId})`}</option>
                              ))}
                            </CFormSelect>
                          </div>
                        </CCol>
                        <CCol md={6}>
                          <div className="mb-3">
                            <CFormLabel htmlFor="placementControlInput">Placement</CFormLabel>
                            <CFormCheck
                              type="radio"
                              name="placement"
                              id="flexRadioDisabled1"
                              label="Left"
                              value="Left"
                              onChange={handleChange}
                              defaultChecked={values.placement === 'Left'}
                            />
                            <CFormCheck
                              type="radio"
                              name="placement"
                              id="flexRadioCheckedDisabled1"
                              label="Right"
                              value="Right"
                              onChange={handleChange}
                              defaultChecked={values.placement === 'Right'}
                            />
                          </div>
                        </CCol>
                      </CRow>
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
                              value={values.firstName}
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
                              value={values.lastName}
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
                              value={values.dob}
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
                              value={values.spouseOrFather}
                              name="spouseOrFather"
                              onChange={handleChange}
                              error={errors.spouseOrFather}
                            />
                            {errors && <p className="text-danger">{errors.spouseOrFather}</p>}
                          </div>
                        </CCol>
                        <CCol md={6}>
                          <div className="mb-3">
                            <CFormLabel htmlFor="genderControlInput">Gender</CFormLabel>
                            <CFormCheck
                              type="radio"
                              name="gender"
                              id="genderControlInput1"
                              label="Male"
                              value="Male"
                              onChange={handleChange}
                              defaultChecked={values.gender === 'Male'}
                            />
                            <CFormCheck
                              type="radio"
                              name="gender"
                              id="genderControlInput2"
                              label="Female"
                              value="Female"
                              onChange={handleChange}
                              defaultChecked={values.gender === 'Female'}
                            />
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
                              value={values.mobile}
                              name="mobile"
                              onChange={handleChange}
                              error={errors.mobile}
                            />
                            {errors && <p className="text-danger">{errors.mobile}</p>}
                          </div>
                        </CCol>
                        <CCol md={6}>
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
                        </CCol>
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
                              value={values.locality}
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
                              value={values.city}
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
                              value={values.district}
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
                              value={values.state}
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
                              value={values.pin}
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
                              value={values.country}
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
                              value={values.nomineeFirstName}
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
                              value={values.nomineeLastName}
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
                              value={values.nomineeDob}
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
                              value={values.nomineeRelation}
                              name="nomineeRelation"
                              onChange={handleChange}
                              error={errors.nomineeRelation}
                            />
                            {errors && <p className="text-danger">{errors.nomineeRelation}</p>}
                          </div>
                        </CCol>
                      </CRow>
                      <CRow>
                        <CHeader style={vars} className="mb-3">
                          <strong>Select Any Package</strong>
                        </CHeader>
                        <CCol md={6}>
                          <div className="mb-3">
                            <CFormLabel htmlFor="planFormControlInput">Select Package</CFormLabel>
                            <CFormSelect
                              id="planFormControlInput"
                              aria-label="Default select example"
                              name="packageId"
                              onChange={handleChange}
                              disabled
                            >
                              <option value={values.packageId}>
                                {!isLoading && packages?.data[0].name}
                              </option>
                            </CFormSelect>
                            {errors && <p className="text-danger">{errors.packageId}</p>}
                          </div>
                        </CCol>
                      </CRow>
                      <CRow>
                        <CHeader style={vars} className="mb-3">
                          <strong>Set Password</strong>
                        </CHeader>
                        <CCol md={6}>
                          <div className="mb-3">
                            <CFormLabel htmlFor="passwordControlInput">Password</CFormLabel>
                            <CFormInput
                              type="password"
                              id="passwordControlInput"
                              placeholder="password"
                              value={values.password}
                              name="password"
                              onChange={handleChange}
                              error={errors.password}
                            />
                            {errors && <p className="text-danger">{errors.password}</p>}
                          </div>
                        </CCol>
                        <CCol md={6}>
                          <div className="mb-3">
                            <CFormLabel htmlFor="cpasswordControlInput">
                              Confirm Password
                            </CFormLabel>
                            <CFormInput
                              type="password"
                              id="cpasswordControlInput"
                              placeholder="cpassword"
                              value={values.cpassword}
                              name="cpassword"
                              onChange={handleChange}
                              error={errors.cpassword}
                            />
                            {errors && <p className="text-danger">{errors.cpassword}</p>}
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
                          Create Account
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

export default AddUser
