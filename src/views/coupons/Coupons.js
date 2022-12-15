import { cilList, cilTrash } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
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
  CFormTextarea,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { useFormik } from 'formik'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { useQueryClient } from 'react-query'
import { adminApi } from 'src/APIs'
import Pagination from 'src/components/Pagination'
import { authSchema } from 'src/validators'
import { confirmAlert } from 'react-confirm-alert'

const Coupons = () => {
  const queryClient = useQueryClient()

  const [page, setPage] = useState(1)

  const { values, handleChange, submitForm, errors, setErrors, isValid, dirty, resetForm } =
    useFormik({
      initialValues: {
        code: '',
        percent: '',
        endDate: '',
        isUsed: false,
        type: 'Single',
      },
      validationSchema: authSchema.createCoupone,
      onSubmit: (values) => onCreate(values),
    })

  const { isLoading, data: resp, refetch } = adminApi.useCoupons(page)

  const mutateCreate = adminApi.useCreateCoupon()

  const mutateDelete = adminApi.useDeleteCoupon()

  const onCreate = async (body) => {
    const resp = await mutateCreate.mutateAsync(body)
    if (resp?.status === 200) {
      refetch()
      resetForm()
    }
  }

  const onDelete = async (id) => {
    confirmAlert({
      title: 'Delete this coupon',
      message: 'Are you sure to do this?',
      buttons: [
        {
          label: 'Yes',
          onClick: async () => {
            const resp = await mutateDelete.mutateAsync(id)
            if (resp?.status === 200) refetch()
          },
        },
        {
          label: 'No',
          // onClick: () => alert("Click No")
        },
      ],
    })
  }

  const coupons = resp?.data.coupons

  useEffect(() => {
    if (coupons && coupons.length === 10) {
      queryClient.prefetchQuery(`get/coupons/${page}`, () => adminApi.fetchCoupons(page + 1))
    }
    // eslint-disable-next-line
  }, [resp, page, queryClient])

  return (
    <CRow>
      <CCol xs={12}>
        <CRow>
          <CCol xs={3}>
            <CCard className="mb-4">
              <CCardHeader>
                <strong>Create Promo Code</strong>
              </CCardHeader>
              <CCardBody>
                <CForm>
                  <div className="mb-3">
                    <CFormLabel htmlFor="exampleFormControlInput1">Coupon Name</CFormLabel>
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput1"
                      placeholder="Coupon Name"
                      value={values.code}
                      name="code"
                      onChange={handleChange}
                      error={errors.code}
                    />
                    {errors && <p className="text-danger">{errors.code}</p>}
                  </div>

                  <div className="mb-3">
                    <CFormLabel htmlFor="exampleFormControlInput1">Discount Type</CFormLabel>
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput1"
                      placeholder="Discount Type in %"
                      value={values.percent}
                      name="percent"
                      onChange={handleChange}
                      error={errors.percent}
                    />
                    {errors && <p className="text-danger">{errors.percent}</p>}
                  </div>

                  <div className="mb-3">
                    <CFormLabel htmlFor="exampleFormControlInput1">Coupon Type</CFormLabel>
                    <CFormCheck
                      type="radio"
                      name="type"
                      id="flexRadioDisabled"
                      label="Single"
                      value="Single"
                      onChange={handleChange}
                      defaultChecked={values.type === 'Single'}
                    />
                    <CFormCheck
                      type="radio"
                      name="type"
                      id="flexRadioCheckedDisabled"
                      label="Multiple"
                      value="Multiple"
                      onChange={handleChange}
                      defaultChecked={values.type === 'Multiple'}
                    />
                  </div>
                  <div className="mb-3">
                    <CFormLabel htmlFor="exampleFormControlInput1">Expire Date</CFormLabel>
                    <CFormInput
                      type="date"
                      id="exampleFormControlInput1"
                      value={values.endDate}
                      name="endDate"
                      onChange={handleChange}
                      error={errors.endDate}
                    />
                    {errors && <p className="text-danger">{errors.endDate}</p>}
                  </div>
                  <div className="d-grid gap-2 mb-3">
                    <CButton
                      color="primary"
                      onClick={submitForm}
                      disabled={!(isValid && dirty) || mutateCreate.isLoading}
                    >
                      Save
                    </CButton>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs={9}>
            <CCard className="mb-4">
              <CCardHeader>
                <strong>All Promo Codes</strong>
              </CCardHeader>
              <CCardBody>
                <CRow>
                  <CRow>
                    <CTable align="middle" className="mb-0 border" hover responsive striped>
                      <CTableHead color="light">
                        <CTableRow>
                          <CTableHeaderCell className="text-center">
                            <CIcon icon={cilList} />
                          </CTableHeaderCell>
                          <CTableHeaderCell>Coupon Code Name</CTableHeaderCell>
                          <CTableHeaderCell>Coupon Code %</CTableHeaderCell>
                          <CTableHeaderCell>Coupon Type</CTableHeaderCell>
                          <CTableHeaderCell>Coupon Used</CTableHeaderCell>
                          <CTableHeaderCell>Coupon End date</CTableHeaderCell>
                          <CTableHeaderCell>Action</CTableHeaderCell>
                        </CTableRow>
                      </CTableHead>
                      <CTableBody>
                        {coupons?.map((item, index) => (
                          <CTableRow v-for="item in tableItems" key={index}>
                            <CTableDataCell>{'#'}</CTableDataCell>
                            <CTableDataCell>{item.code}</CTableDataCell>
                            <CTableDataCell>{item.percent}</CTableDataCell>
                            <CTableDataCell>{item.type}</CTableDataCell>
                            <CTableDataCell>{item.isUsed ? 'Yes' : 'No'}</CTableDataCell>
                            <CTableDataCell>
                              {item.endDate
                                ? moment(item.endDate).format('MMMM Do YYYY')
                                : '-- -- ----'}
                            </CTableDataCell>
                            <CTableDataCell>
                              <CIcon
                                icon={cilTrash}
                                size="lg"
                                role="button"
                                className="text-danger"
                                title="Delete"
                                onClick={() => onDelete(item._id)}
                              />
                            </CTableDataCell>
                          </CTableRow>
                        ))}
                      </CTableBody>
                    </CTable>
                  </CRow>
                  <CRow className="mt-4">
                    {resp?.data && <Pagination data={resp?.data} setPage={setPage} />}
                  </CRow>
                </CRow>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CCol>
    </CRow>
  )
}

export default Coupons
