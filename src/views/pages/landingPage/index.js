import React, { useEffect } from 'react'
import {
  CButton,
  CCol,
  CForm,
  CFormInput,
  CImage,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import { useNavigate } from 'react-router-dom'
import { getToken } from 'src/helpers/tokenLS'
import { useFormik } from 'formik'
import { authSchema } from 'src/validators'
import { authApi } from 'src/APIs'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import brand from 'src/assets/sonaxmultitrade.png'

export default function LandingPage() {
  const navigate = useNavigate()
  const token = getToken()

  useEffect(() => {
    if (token) {
      navigate('/dashboard')
    }
    // eslint-disable-next-line
  }, [])
  const { values, handleChange, submitForm, errors, setErrors, isValid, dirty } = useFormik({
    initialValues: {
      uId: '',
      password: '',
    },
    validationSchema: authSchema.userSignIn,
    onSubmit: async (values) => await mutate(values),
  })

  const { isLoading, mutate } = authApi.useUserSignIn(setErrors)

  return (
    <section className="background-radial-gradient overflow-hidden">
      <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
        <a href="/" className="navbar-brand p-0">
          <CImage src={brand} height={50} alt="Logo" />
          <strong className="m-0 text-light">Sonax Multitrade</strong>
        </a>
      </nav>
      <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
        <div className="row gx-lg-5 align-items-center mb-5">
          <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
            <h1 className="my-5 display-5 fw-bold ls-tight" style={{ color: 'hsl(218, 81%, 95%)' }}>
              The best offer <br />
              <span style={{ color: 'hsl(218, 81%, 75%)' }}>for your business</span>
            </h1>
            {/* <p className="mb-4 opacity-70" style={{ color: 'hsl(218, 81%, 85%)' }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, expedita iusto
              veniam atque, magni tempora mollitia dolorum consequatur nulla, neque debitis eos
              reprehenderit quasi ab ipsum nisi dolorem modi. Quos?
            </p> */}
          </div>

          <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
            <div
              id="radius-shape-1"
              className="position-absolute rounded-circle shadow-5-strong"
            ></div>
            <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

            <div className="card bg-glass">
              <div className="card-body px-4 py-5 px-md-5">
                <CForm>
                  <h3 className="text-light">User Login</h3>
                  <p className="text-light">Sign In to your account</p>
                  {errors && <span className="text-danger">{errors.uId}</span>}
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="UID"
                      autoComplete="uId"
                      value={values.uId}
                      name="uId"
                      onChange={handleChange}
                      error={errors.uId}
                    />
                  </CInputGroup>
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
                    {/* <CCol xs={6} className="text-right">
                      <CButton color="link" className="px-0">
                        Forgot password?
                      </CButton>
                    </CCol> */}
                  </CRow>
                </CForm>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
