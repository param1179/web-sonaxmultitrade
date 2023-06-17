import React, { useEffect, useState } from 'react'
import {
  CBadge,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CContainer,
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
import { adminApi } from 'src/APIs'
import { useLocation } from 'react-router-dom'
import { dateHelper } from 'src/helpers'
import { confirmAlert } from 'react-confirm-alert'
import axios from 'src/axios'
import { useFormik } from 'formik'
import { authSchema } from 'src/validators'
import { toast } from 'react-toastify'
import UsersWallet from './UsersWallet'

function Installments() {
  const { state } = useLocation()
  const { id, name, uId } = state
  const [leftActive, setLeftActive] = useState(0)
  const [rightActive, setRightActive] = useState(0)
  const [pairs, setPairs] = useState(0)
  const { isLoading, data: resp, refetch } = adminApi.useIntallments(id)
  const { isLoading: load, data: rewards } = adminApi.useGetRewards()
  const update = adminApi.useUpdatePayment()

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(`admin/userTabs/${id}?position=Left`)
        .then((response) => {
          setLeftActive(response?.active)
        })
        .then(async (casesHeaderFields) => await axios.get(`admin/userTabs/${id}?position=Right`))
        .then((response) => {
          setRightActive(response?.active)
        })
    }
    fetchData()
  }, [])

  useEffect(() => {
    getPairs()
  }, [rightActive])

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
      password: '',
      cpassword: '',
    },
    validationSchema: authSchema.changePasswordByAdmin,
    onSubmit: (values) => onCreate(values),
  })

  const mutateCreate = adminApi.useChangePasswordByAdmin()

  const onCreate = async (body) => {
    const resp = await mutateCreate.mutateAsync({ body, id })
    if (resp?.status === 200) {
      toast.success("User's password changed")
      resetForm()
    }
  }

  const getPairs = () => {
    const lessSide = rightActive <= leftActive ? rightActive : leftActive
    const pair = Math.floor((lessSide * 2) / 2)
    setPairs(pair)
  }

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
                <div>
                  <CBadge color="success" className="mx-2">
                    Left Active: {leftActive}
                  </CBadge>
                  <CBadge color="success" className="mx-2">
                    Right Active: {rightActive}
                  </CBadge>
                  <CBadge color="success" className="mx-2">
                    Total Pairs: {pairs && pairs}
                  </CBadge>
                </div>
              </CCardHeader>
              <CCardBody>
                <CContainer>
                  <CRow>
                    <div className="">
                      <h5>Rewards Time Line</h5>
                      <ul className="timeline">
                        {!load &&
                          rewards.rewards.map((res, i) => (
                            <li key={i} className={res.onPairs <= pairs ? 'achive' : ''}>
                              <p
                                className={
                                  res.onPairs <= pairs ? 'text-success float-right' : 'float-right'
                                }
                              >
                                {res.rewardLevel} on {res.onPairs} Pairs
                              </p>
                              <p
                                className={
                                  res.onPairs <= pairs ? 'text-success float-right' : 'float-right'
                                }
                              >
                                ({res.reward})
                              </p>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </CRow>
                </CContainer>
              </CCardBody>
            </CCard>
            <CCard className="mb-2">
              <CCardHeader>Change Password</CCardHeader>
              <CCardBody>
                <CForm>
                  <CRow>
                    <CCol md={12}>
                      <div className="mb-3">
                        <CFormInput
                          type="text"
                          id="passwordControlInput"
                          placeholder="New Password"
                          value={values.password}
                          name="password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.password}
                        />
                        {touched.password && errors && (
                          <p className="text-danger">{errors.password}</p>
                        )}
                      </div>
                    </CCol>
                    <CCol md={12}>
                      <div className="mb-3">
                        <CFormInput
                          id="cpasswordControlInput"
                          placeholder="Confirm Password"
                          value={values.cpassword}
                          name="cpassword"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.cpassword}
                        />
                        {touched.cpassword && errors && (
                          <p className="text-danger">{errors.cpassword}</p>
                        )}
                      </div>
                    </CCol>
                    <CCol md={12}>
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
                                onClick={(e) => (!item.status ? statusHandler(e) : '')}
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
            <UsersWallet userId={id} />
          </CCol>
        </CRow>
      </CCol>
    </CRow>
  )
}

export default Installments
