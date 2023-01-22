import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormInput,
  CFormLabel,
  CRow,
} from '@coreui/react'
import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { usersApi } from 'src/APIs'
import { authSchema } from 'src/validators'

function ChangePassword() {
  const navigation = useNavigate()
  const { values, handleChange, submitForm, errors, isValid, dirty, resetForm, setErrors } =
    useFormik({
      initialValues: {
        password: '',
        oldPassword: '',
        cPassword: '',
      },
      validationSchema: authSchema.changePassword,
      onSubmit: (values) => onCreate(values),
    })

  const mutateCreate = usersApi.useChangePassword(setErrors)

  async function onCreate(body) {
    delete body.cPassword
    const resp = await mutateCreate.mutateAsync(body)
    if (resp?.status === 200) {
      resetForm()
      navigation('/dashboard')
    }
  }
  return (
    <CRow>
      <CCol xs={12}>
        <CCard>
          <CCardHeader>
            <strong>Change Password</strong>
          </CCardHeader>
          <CCardBody>
            <div className="mb-3">
              <CFormLabel htmlFor="oldControlInput">Old Password</CFormLabel>
              <CFormInput
                type="password"
                id="oldControlInput"
                placeholder="Old Password"
                value={values.oldPassword}
                name="oldPassword"
                onChange={handleChange}
                error={errors.oldPassword}
              />
              {errors && <p className="text-danger">{errors.oldPassword}</p>}
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="pswControlInput">Password</CFormLabel>
              <CFormInput
                type="password"
                id="pswControlInput"
                placeholder="Password"
                value={values.password}
                name="password"
                onChange={handleChange}
                error={errors.password}
              />
              {errors && <p className="text-danger">{errors.password}</p>}
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="cControlInput">Confirm Password</CFormLabel>
              <CFormInput
                type="password"
                id="cControlInput"
                placeholder="Confirm Password"
                value={values.cPassword}
                name="cPassword"
                onChange={handleChange}
                error={errors.cPassword}
              />
              {errors && <p className="text-danger">{errors.cPassword}</p>}
            </div>
            <div className="d-grid gap-2 mb-3">
              <CButton
                color="primary"
                onClick={submitForm}
                disabled={!(isValid && dirty) || mutateCreate.isLoading}
              >
                Confirm
              </CButton>
            </div>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default ChangePassword
