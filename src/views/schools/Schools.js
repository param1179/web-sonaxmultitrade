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
  CFormSelect,
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

const Schools = () => {
  const { values, handleChange, submitForm, errors, setErrors, isValid, dirty, resetForm } =
    useFormik({
      initialValues: {
        schoolName: '',
        email: '',
        activeSchool: true,
        subscription: 'free',
      },
      validationSchema: authSchema.createSchool,
      onSubmit: (values) => onCreate(values),
    })

  const { isLoading, data: resp, refetch } = adminApi.useSchools()

  const mutateCreate = adminApi.useCreateSchool()

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
            console.log(id)
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
      <CCol xs={12}>
        <CRow>
          <CCol xs={3}>
            <CCard className="mb-4">
              <CCardHeader>
                <strong>Create School Profile</strong>
              </CCardHeader>
              <CCardBody>
                <CForm>
                  <div className="mb-3">
                    <CFormLabel htmlFor="exampleFormControlInput1">School Name</CFormLabel>
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput1"
                      placeholder="School Name"
                      value={values.schoolName}
                      name="schoolName"
                      onChange={handleChange}
                      error={errors.schoolName}
                    />
                    {errors && <p className="text-danger">{errors.schoolName}</p>}
                  </div>

                  <div className="mb-3">
                    <CFormLabel htmlFor="exampleFormControlInput1">School Email</CFormLabel>
                    <CFormInput
                      type="text"
                      id="exampleFormControlInput1"
                      placeholder="School Email"
                      value={values.email}
                      name="email"
                      onChange={handleChange}
                      error={errors.email}
                    />
                    {errors && <p className="text-danger">{errors.email}</p>}
                  </div>

                  <div className="mb-3">
                    <CFormLabel htmlFor="exampleFormControlInput1">School Status</CFormLabel>
                    <CFormSelect
                      aria-label="Default select example"
                      name="activeSchool"
                      onChange={handleChange}
                    >
                      <option value={true}>Active</option>
                      <option value={false}>Inactive</option>
                    </CFormSelect>
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
                <strong>All Schools</strong>
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
                          <CTableHeaderCell>School Name</CTableHeaderCell>
                          <CTableHeaderCell>School Email</CTableHeaderCell>
                          <CTableHeaderCell>Status</CTableHeaderCell>
                          <CTableHeaderCell>Action</CTableHeaderCell>
                        </CTableRow>
                      </CTableHead>
                      <CTableBody>
                        {resp?.schools.map((item, index) => (
                          <CTableRow v-for="item in tableItems" key={index}>
                            <CTableDataCell>{'#'}</CTableDataCell>
                            <CTableDataCell>{item.schoolName}</CTableDataCell>
                            <CTableDataCell>{item.email}</CTableDataCell>
                            <CTableDataCell>
                              {item.activeSchool ? 'Active' : 'Inactive'}
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
                </CRow>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CCol>
    </CRow>
  )
}

export default Schools
