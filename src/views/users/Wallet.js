import React, { useRef, useState } from 'react'
import {
  CBadge,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CHeader,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CToaster,
  CWidgetStatsA,
  CWidgetStatsC,
} from '@coreui/react'
import { usersApi } from 'src/APIs'
import { dateHelper } from 'src/helpers'
import CIcon from '@coreui/icons-react'
import { cil3d, cilChartPie, cilWallet } from '@coreui/icons'
import { getProfileData } from 'src/helpers/tokenLS'
import { authSchema } from 'src/validators'
import { useFormik } from 'formik'
import AppToaster from 'src/components/AppToaster'

const vars = {
  '--cui-header-bg': '#E4e4e4',
}
function Wallet() {
  const [wallet] = useState(false)
  const profile = getProfileData()
  const [visible, setVisible] = useState(false)
  const toaster = useRef()
  const [toast, addToast] = useState(0)
  const { isLoading, data: resp } = usersApi.useIntallments()

  const { values, handleChange, submitForm, errors, isValid, dirty, resetForm, setErrors } =
    useFormik({
      initialValues: {
        paymentRequest: '',
      },
      validationSchema: authSchema.createPaymentRequest,
      onSubmit: (values) => onCreate(values),
    })
  const mutateCreate = usersApi.usePaymentRequest(setErrors)

  const onCreate = async (body) => {
    const resp = await mutateCreate.mutateAsync(body)
    if (resp?.status === 200) {
      resetForm()
      addToast(AppToaster({ color: 'success', content: 'Request Sent!' }))
      setVisible(false)
      // navigation('/users')
    }
  }
  return (
    <>
      <CToaster ref={toaster} push={toast} placement="top-end" />
      <CModal alignment="center" visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>Payment Withdrawal request to Admin</CModalTitle>
        </CModalHeader>
        <CForm>
          <CModalBody>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            <CRow className="mt-5">
              <CCol md={12}>
                <CRow>
                  <div className="mb-3">
                    <CFormLabel htmlFor="fistNameControlInput">Withdrawal Amount</CFormLabel>
                    <CFormInput
                      type="text"
                      id="fistNameControlInput"
                      placeholder="Enter Amount"
                      value={values.paymentRequest}
                      name="paymentRequest"
                      onChange={handleChange}
                      error={errors.paymentRequest}
                    />
                    {errors && <p className="text-danger">{errors.paymentRequest}</p>}
                  </div>
                </CRow>
              </CCol>
            </CRow>
          </CModalBody>
          <CModalFooter>
            <CButton color="secondary" onClick={() => setVisible(false)}>
              Cancel
            </CButton>
            <CButton
              color="primary"
              onClick={submitForm}
              disabled={!(isValid && dirty) || mutateCreate.isLoading}
            >
              Create Withdrawal Request
            </CButton>
          </CModalFooter>
        </CForm>
      </CModal>
      <CRow>
        <CCol md={12}>
          <CRow>
            <CCol md={4}>
              <CWidgetStatsC
                className="mb-3"
                icon={<CIcon icon={cilWallet} height={36} />}
                color="success"
                inverse
                progress={{ value: 0 }}
                text="Widget helper text"
                title="Wallet Balance"
                value={`Rs. ${resp?.wallet}`}
              />
              <CWidgetStatsC
                className="mb-3"
                icon={<CIcon icon={cil3d} height={36} />}
                color="success"
                inverse
                progress={{ value: 0 }}
                text="Widget helper text"
                title="Total Points"
                value={resp?.points}
              />
            </CCol>
            <CCol md={8}>
              <CCard>
                <CCardHeader>
                  <strong>Transactions</strong>
                  <CButton
                    color="primary"
                    className="float-end"
                    onClick={() => setVisible(!visible)}
                  >
                    Withdrawal
                  </CButton>
                </CCardHeader>
                <CCardBody>
                  <CRow className="table-row">
                    {!isLoading && resp?.walletHistory.length !== 0 ? (
                      <CTable
                        align="middle"
                        bordered
                        className="mb-0 border"
                        hover
                        responsive
                        striped
                      >
                        <CTableHead color="light">
                          <CTableRow>
                            <CTableHeaderCell>S. No.</CTableHeaderCell>
                            <CTableHeaderCell>Payment</CTableHeaderCell>
                            <CTableHeaderCell>Payment By</CTableHeaderCell>
                            <CTableHeaderCell>Level By</CTableHeaderCell>
                            <CTableHeaderCell>Payment Type</CTableHeaderCell>
                          </CTableRow>
                        </CTableHead>
                        <CTableBody>
                          {resp?.walletHistory.map((item, index) => (
                            <CTableRow v-for="item in tableItems" key={index}>
                              <CTableDataCell>{index + 1}</CTableDataCell>
                              <CTableDataCell
                                className={
                                  item.transactionType !== 'withdrawal' ? 'bg-success' : 'bg-danger'
                                }
                              >
                                <div>Rs. {item.payment}</div>
                                <div className="small text-medium-emphasis">
                                  <span></span>{' '}
                                  {`${
                                    item.transactionType !== 'withdrawal'
                                      ? 'Received on:'
                                      : 'Withdrawal'
                                  } ${dateHelper.formatRegister(item.createdAt)} `}
                                </div>
                              </CTableDataCell>

                              <CTableDataCell>
                                {item.paymentBy
                                  ? `${item.paymentBy?.firstName}(${item.paymentBy?.uId})`
                                  : 'Admin'}
                              </CTableDataCell>
                              <CTableDataCell>
                                <h5>
                                  <CBadge color={'success'}>{item.levelBy}</CBadge>
                                </h5>
                              </CTableDataCell>
                              <CTableDataCell>{`${
                                item.paymentType !== 'regularEmi'
                                  ? item.paymentType !== 'withdrawal'
                                    ? 'Joining'
                                    : 'Withdrawal'
                                  : 'Regular Emi'
                              }`}</CTableDataCell>
                            </CTableRow>
                          ))}
                        </CTableBody>
                      </CTable>
                    ) : (
                      <div className="p-3 text-center">History not available</div>
                    )}
                  </CRow>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CCol>
      </CRow>
    </>
  )
}

export default Wallet
