import React, { useEffect, useState } from 'react'
import { useQueryClient } from 'react-query'
import { adminApi } from 'src/APIs'
import { Tree, TreeNode } from 'react-organizational-chart'
import Pagination from 'src/components/Pagination'
import {
  CBadge,
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
import { Link } from 'react-router-dom'
import { confirmAlert } from 'react-confirm-alert'

function GetUsers() {
  const queryClient = useQueryClient()
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)

  const [search, setSearch] = useState('')
  const { isLoading, data: resp, refetch } = adminApi.useGetUsers(limit, currentPage, search)
  const totalUsers = resp?.totalUsers
  const users = resp?.users

  const update = adminApi.useUpdateUser()

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
                    placeholder={`Search: 'Email, Name'`}
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
                    <CTableHeaderCell>Action</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {users?.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell>{index + 1}</CTableDataCell>
                      <CTableDataCell>
                        <div>{item.firstName + ' ' + item.lastName}</div>
                        <div className="small text-medium-emphasis">
                          <span>{'New |'}</span> Registered on: {'01/02/2023'}
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
                        <Link to={'/details'}>
                          <h5>
                            <CBadge color="success">View</CBadge>
                          </h5>
                        </Link>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CRow>
            {!isLoading && (
              <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={totalUsers}
                pageSize={users?.length}
                onPageChange={(page) => setCurrentPage(page)}
              />
            )}
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default GetUsers
