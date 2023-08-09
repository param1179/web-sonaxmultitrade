import React, { useEffect, useState } from 'react'
import { useQueryClient } from 'react-query'
import { adminApi } from 'src/APIs'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { Link, useNavigate } from 'react-router-dom'
import { confirmAlert } from 'react-confirm-alert'
import { dateHelper } from 'src/helpers'
import ResponsivePagination from 'react-responsive-pagination'
import 'react-responsive-pagination/themes/classic.css'

function GetUsers() {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)

  const [search, setSearch] = useState('')
  const { isLoading, data: resp, refetch } = adminApi.useGetUsers(limit, currentPage, search)
  const { data: usersList } = adminApi.useGetAllUsers()
  const totalUsers = resp?.totalUsers
  const users = resp?.users

  const update = adminApi.useUpdateUser()
  const updateSponser = adminApi.useUpdateSponserUser()

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

  const directHandler = async (id, uid) => {
    console.log(id, '===', uid)
    confirmAlert({
      title: `Update this user`,
      message: `Are you sure?`,
      buttons: [
        {
          label: 'Yes',
          onClick: async () => {
            const resp = await updateSponser.mutateAsync({ sid: id, uid })
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

  const handleSearch = (value) => {
    setSearch(value)
    setPage(1)
  }

  const onChangeHandle = (e) => {
    setSearch(e.target.value)
    setPage(1)
  }

  useEffect(() => {
    handleSearch('')
  }, [])

  const updateUser = (id) => {
    navigate(`/${id}`)
  }

  return (
    <CRow>
      <CCol md={12}>
        <CCard>
          <CCardHeader>
            <strong>All Users</strong>
          </CCardHeader>
          <CCardBody>
            <CRow className="mb-4">
              <CCol xs={6}>
                <CForm className="d-flex">
                  <CFormInput
                    type="search"
                    className="me-2"
                    placeholder={`Search: 'User ID'`}
                    name="search"
                    value={search}
                    onChange={onChangeHandle}
                  />
                </CForm>
              </CCol>
            </CRow>
            <CRow className="table-row">
              <CTable align="middle" bordered className="mb-0 border" hover responsive striped>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell>S. No.</CTableHeaderCell>
                    <CTableHeaderCell>Name</CTableHeaderCell>
                    <CTableHeaderCell>User Id</CTableHeaderCell>
                    <CTableHeaderCell>Status</CTableHeaderCell>
                    <CTableHeaderCell>Sponser By</CTableHeaderCell>
                    <CTableHeaderCell>Action</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {users?.map((item, index) => {
                    var sponserBy = item?.sponserBy && item?.sponserBy[0]
                    var sponser = sponserBy?.childs[0]?.sponserBy
                    return (
                      <CTableRow v-for="item in tableItems" key={index}>
                        <CTableDataCell>{index + 1}</CTableDataCell>
                        <CTableDataCell>
                          <div>{item.firstName + ' ' + item.lastName}</div>
                          <div className="small text-medium-emphasis">
                            Registered on: {dateHelper.formatRegister(item.createdAt)}
                          </div>
                          <div className="small text-medium-emphasis">
                            {item.isCompleted &&
                              `Active on: ${dateHelper.formatRegister(item.updatedAt)}`}
                          </div>
                        </CTableDataCell>

                        <CTableDataCell>{item.uId}</CTableDataCell>
                        <CTableDataCell>
                          <h5>
                            <CBadge
                              id={item._id}
                              onClick={statusHandler}
                              role="button"
                              color={item.isCompleted ? 'success' : 'danger'}
                            >
                              {item.isCompleted ? 'Active' : 'Inactive'}
                            </CBadge>
                          </h5>
                        </CTableDataCell>
                        <CTableDataCell>
                          {/* {sponser ? (
                            <>
                              <div>
                                {sponser?.firstName +
                                  ' ' +
                                  sponser?.lastName +
                                  ' (' +
                                  sponser?.uId +
                                  ')'}
                              </div>
                              <div className="small text-medium-emphasis">
                                Position: <b>{sponserBy?.childs[0]?.placement}</b>
                              </div>
                            </>
                          ) : ( */}
                          <div className="mb-3">
                            <CFormSelect
                              className="selectpicker"
                              aria-label="Default select example"
                              name="sponserId"
                              onChange={(e) => directHandler(e.target.value, item._id)}
                              data-live-search="true"
                            >
                              {isLoading && <option value="">Loading..</option>}

                              <option value="">Select Sponser</option>
                              {usersList?.users.map((res, i) => (
                                <option
                                  key={i}
                                  value={res._id}
                                  selected={res._id === sponser?._id}
                                >{`${res.firstName} ${res.lastName} (${res.uId})`}</option>
                              ))}
                            </CFormSelect>
                          </div>
                          {/* )} */}
                        </CTableDataCell>
                        <CTableDataCell className="gap-2">
                          <h5
                            role="button"
                            onClick={() =>
                              navigate('/payments', {
                                state: {
                                  id: item._id,
                                  name: item.firstName + ' ' + item.lastName,
                                  uId: item.uId,
                                },
                              })
                            }
                          >
                            <CBadge color="success">View</CBadge>
                          </h5>
                          <h5 onClick={() => updateUser(item._id)}>
                            <CBadge role="button" color="success">
                              Edit
                            </CBadge>
                          </h5>
                        </CTableDataCell>
                      </CTableRow>
                    )
                  })}
                </CTableBody>
              </CTable>
            </CRow>
            {!isLoading && (
              <div className="mt-4">
                <ResponsivePagination
                  current={currentPage}
                  total={Math.ceil(totalUsers / limit)}
                  onPageChange={setCurrentPage}
                />
              </div>
            )}
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default GetUsers
