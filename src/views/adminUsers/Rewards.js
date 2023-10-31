import React from 'react'
import {
  CBadge,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
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
import { useFormik } from 'formik'
import { authSchema } from 'src/validators'
import { confirmAlert } from 'react-confirm-alert'

const Rewards = () => {
  const { isLoading, data: rewards, refetch } = adminApi.useGetRewards()
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
      rewardLevel: '',
      rewardPrice: '',
      onPairs: '',
      reward: '',
    },
    validationSchema: authSchema.createRewards,
    onSubmit: (values) => onCreate(values),
  })

  const mutateCreate = adminApi.useCreateAdminRewards()
  const mutateDelete = adminApi.useDeleteReward()

  const onCreate = async (body) => {
    const resp = await mutateCreate.mutateAsync(body)
    if (resp?.status === 200) {
      refetch()
      resetForm()
    }
  }

  const onDelete = async (id) => {
    confirmAlert({
      title: 'Delete this reward',
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

  return (
    <CRow>
      <CCol md={12}>
        <CCard>
          <CCardHeader>
            <strong>Rewards</strong>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <CRow>
                <CCol md={3}>
                  <div className="mb-3">
                    <CFormInput
                      type="text"
                      id="rewardLevelControlInput"
                      placeholder="Reward Level"
                      value={values.rewardLevel}
                      name="rewardLevel"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.rewardLevel}
                    />
                    {touched.rewardLevel && errors && (
                      <p className="text-danger">{errors.rewardLevel}</p>
                    )}
                  </div>
                </CCol>
                <CCol md={3}>
                  <div className="mb-3">
                    <CFormInput
                      type="number"
                      id="onPairsControlInput"
                      placeholder="On Pairs"
                      value={values.onPairs}
                      name="onPairs"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.onPairs}
                    />
                    {touched.onPairs && errors && <p className="text-danger">{errors.onPairs}</p>}
                  </div>
                </CCol>
                <CCol md={3}>
                  <div className="mb-3">
                    <CFormInput
                      type="text"
                      id="rewardControlInput"
                      placeholder="Reward Name"
                      value={values.reward}
                      name="reward"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.reward}
                    />
                    {touched.reward && errors && <p className="text-danger">{errors.reward}</p>}
                  </div>
                </CCol>
                <CCol md={3}>
                  <div className="mb-3">
                    <CFormInput
                      type="text"
                      id="rewardPriceControlInput"
                      placeholder="Reward Price"
                      value={values.rewardPrice}
                      name="rewardPrice"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.rewardPrice}
                    />
                    {touched.rewardPrice && errors && (
                      <p className="text-danger">{errors.rewardPrice}</p>
                    )}
                  </div>
                </CCol>
                <CCol md={3}>
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
            <CRow className="table-row">
              <CTable align="middle" bordered className="mb-0 border" hover responsive striped>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell>S. No.</CTableHeaderCell>
                    <CTableHeaderCell>Reward Level</CTableHeaderCell>
                    <CTableHeaderCell>On Pairs</CTableHeaderCell>
                    <CTableHeaderCell>Reward Name</CTableHeaderCell>
                    <CTableHeaderCell>Reward Price</CTableHeaderCell>
                    <CTableHeaderCell>Action</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {!isLoading &&
                    rewards?.rewards.map((item, index) => (
                      <CTableRow key={item._id}>
                        <CTableDataCell>{index + 1}</CTableDataCell>
                        <CTableDataCell>
                          <div>{item.rewardLevel}</div>
                        </CTableDataCell>
                        <CTableDataCell>
                          <h5>
                            <CBadge color={'success'}>{item.onPairs}</CBadge>
                          </h5>
                        </CTableDataCell>
                        <CTableDataCell>{item.reward}</CTableDataCell>
                        <CTableDataCell>
                          <div>{item.rewardPrice}</div>
                        </CTableDataCell>
                        <CTableDataCell>
                          <h5 onClick={() => onDelete(item._id)}>
                            <CBadge role="button" color="danger">
                              Delete
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
      </CCol>
    </CRow>
  )
}

export default Rewards
