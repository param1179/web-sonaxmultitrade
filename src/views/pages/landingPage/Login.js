import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CImage,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { authSchema } from 'src/validators'
import { useFormik } from 'formik'
import { authApi } from 'src/APIs'
import { getToken } from 'src/helpers/tokenLS'
import brand from 'src/assets/sonaxmultitrade.png'

const Login = () => {
  const navigate = useNavigate()
  const token = getToken()

  useEffect(() => {
    if (token) {
      navigate('/dashboard')
    }
  }, [])

  const { values, handleChange, submitForm, errors, setErrors, isValid, dirty } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: authSchema.signIn,
    onSubmit: async (values) => await mutate(values),
  })

  const { isLoading, mutate } = authApi.useSignIn(setErrors)

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Admin Login</h1>
                    <p className="text-medium-emphasis">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="Username"
                        autoComplete="username"
                        value={values.email}
                        name="email"
                        onChange={handleChange}
                        error={errors.email}
                      />
                    </CInputGroup>
                    {errors && <p className="text-danger">{errors.email}</p>}
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        value={values.password}
                        name="password"
                        onChange={handleChange}
                        error={errors.password}
                      />
                    </CInputGroup>
                    {errors && <p className="text-danger">{errors.password}</p>}
                    <CRow>
                      <CCol xs={6}>
                        <CButton
                          color="primary"
                          className="px-4"
                          onClick={submitForm}
                          disabled={!(isValid && dirty) || isLoading}
                        >
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5">
                <CCardBody className="text-center">
                  <div>
                    <h2>Sonax Multitrade</h2>
                    <CImage src={brand} width="200" />
                    <p>We understand your world</p>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
