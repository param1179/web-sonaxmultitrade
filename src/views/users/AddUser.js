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

const AddUser = () => {
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

  const mutateCreate = adminApi.useCreateCoupon()

  const mutateDelete = adminApi.useDeleteCoupon()

  const onCreate = async (body) => {
    const resp = await mutateCreate.mutateAsync(body)
    if (resp?.status === 200) {
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
          onClick: async () => {},
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
      <CCol xs={12}>
        <CRow>
          <CCol>
            <CCard className="mb-4">
              <CCardHeader>
                <strong>Fill User Details</strong>
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
        </CRow>
      </CCol>
    </CRow>
  )
}

export default AddUser
