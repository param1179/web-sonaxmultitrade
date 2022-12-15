import { cilBan, cilTrash, cilPeople, cifUs, cibCcMastercard, cilCheckCircle } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {
  CAvatar,
  CButton,
  CCol,
  CForm,
  CFormInput,
  CImage,
  CProgress,
  CRow,
  CSpinner,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CToaster,
} from '@coreui/react'
import React, { useEffect, useRef, useState } from 'react'
import { useQueryClient } from 'react-query'
import { adminApi } from 'src/APIs'
import Pagination from 'src/components/Pagination'
import PropTypes from 'prop-types'
import { dateHelper, shortFullName, correctFullName } from 'src/helpers'
import { BASE_URL } from 'src/config'
import { confirmAlert } from 'react-confirm-alert'
import AppToaster from 'src/components/AppToaster'

function AllUsers({ type }) {
  const queryClient = useQueryClient()

  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')
  const [toast, addToast] = useState(0)
  const toaster = useRef()
  const { isLoading, data: resp } = adminApi.useManage(type, page, search)
  const banF = adminApi.useToggleBan()
  const deleteF = adminApi.useDeleteUser()

  const onDelete = async (id) => {
    confirmAlert({
      title: `Delete this user`,
      message: `Are you sure?`,
      buttons: [
        {
          label: 'Yes',
          onClick: async () => {
            const resp = await deleteF.mutateAsync(id)
            if (resp?.status === 200) {
              addToast(AppToaster({ color: 'danger', content: 'User deleted!' }))
              queryClient.prefetchQuery(`get/${type}/${page}/${search}`, () =>
                adminApi.fetchManage(type, page, search),
              )
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

  const onBan = async (b, id) => {
    confirmAlert({
      title: `${b} this user`,
      message: `Are you sure?`,
      buttons: [
        {
          label: 'Yes',
          onClick: async () => {
            const resp = await banF.mutateAsync(id)
            if (resp?.status === 200) {
              addToast(
                AppToaster({
                  color: b === 'Ban' ? 'danger' : 'success',
                  content: b === 'Ban' ? 'This user Banned!' : 'This user Unbanned!',
                }),
              )
              queryClient.prefetchQuery(`get/${type}/${page}/${search}`, () =>
                adminApi.fetchManage(type, page, search),
              )
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
    if (resp?.data.hasNextPage) {
      queryClient.prefetchQuery(`get/${type}/${page + 1}/${search}`, () =>
        adminApi.fetchManage(type, page + 1, search),
      )
    }
    // eslint-disable-next-line
  }, [resp, page, queryClient, search])

  useEffect(() => {
    handleSearch('')
  }, [type])

  const columns = [
    { key: 'mentor', _props: { scope: 'col' } },
    { key: 'fullName', _props: { scope: 'col' } },
    { key: 'registerDate', label: 'Register Date', _props: { scope: 'col' } },
    { key: 'contact', label: 'Contact', _props: { scope: 'col' } },
    { key: 'completedTask', label: 'Completed Task', _props: { scope: 'col' } },
    { key: 'actions', label: 'Actions', _props: { scope: 'col' } },
  ]

  const itemsK = resp?.data.users.map((res, i) => {
    const k = {
      avatar: {
        src: null,
        status: 'success',
        firstName: res.firstName,
        lastName: res.lastName,
      },
      user: {
        name: correctFullName(res.firstName, res.lastName),
        new: false,
        registered: dateHelper.formatRegister(res.createdAt),
      },
      completedTask: { task: 0 },
      contactEmail: {
        email: res.email,
      },
      healthcare: { name: res.healthcare },
      actions: {
        ban: (
          <>
            {res.ban ? (
              <CIcon
                icon={cilBan}
                size="lg"
                role="button"
                className="text-danger"
                title="Unban"
                onClick={() => onBan('Unban', res._id)}
              />
            ) : (
              <CIcon
                icon={cilCheckCircle}
                size="lg"
                role="button"
                className="text-success"
                title="Ban"
                onClick={() => onBan('Ban', res._id)}
              />
            )}
          </>
        ),
        delete: (
          <CIcon
            icon={cilTrash}
            size="lg"
            role="button"
            className="text-danger ms-3"
            title="Delete"
            onClick={() => onDelete(res._id)}
          />
        ),
      },
    }

    return k
  })

  return (
    <CRow className="mt-4 mb-4">
      <CCol xs={12}>
        <CRow className="mb-4">
          <CCol xs={6}>
            <CForm className="d-flex">
              <CFormInput
                type="search"
                className="me-2"
                placeholder={`Search ${type}: 'Email, Name'`}
                name="search"
                value={search}
                onChange={onChangeHandle}
              />
            </CForm>
          </CCol>
        </CRow>
        {isLoading ? (
          <>
            <CSpinner color="primary" variant="grow" />
          </>
        ) : (
          <CRow>
            <CRow className="table-row">
              <CTable align="middle" className="mb-0 border" hover responsive striped>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell>
                      {type === 'both' ? 'All' : type === 'mentee' ? 'Mentee' : 'Mentors'}
                    </CTableHeaderCell>
                    <CTableHeaderCell>Contact Email</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Completed Task</CTableHeaderCell>
                    <CTableHeaderCell>Healthcare</CTableHeaderCell>
                    <CTableHeaderCell>Actions</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {itemsK.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        {item.avatar.src ? (
                          <CAvatar size="md" src={item.avatar.src} status={item.avatar.status} />
                        ) : (
                          item.avatar.firstName &&
                          shortFullName(item.avatar.firstName, item.avatar.lastName)
                        )}
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.user.name}</div>
                        <div className="small text-medium-emphasis">
                          <span>{item.user.new ? 'New |' : ''}</span> Registered:{' '}
                          {item.user.registered}
                        </div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="clearfix">{item.contactEmail.email}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>{item.completedTask.task}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>
                          {item.healthcare.name === 'preStudent'
                            ? 'Pre Student'
                            : item.healthcare.name === 'student'
                            ? 'Student'
                            : item.healthcare.name === 'switching'
                            ? 'Switching'
                            : 'Professional'}
                        </div>
                      </CTableDataCell>
                      <CTableDataCell>
                        {item.actions.ban}
                        {item.actions.delete}
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
        )}
      </CCol>
      <CToaster ref={toaster} push={toast} placement="top-end" />
    </CRow>
  )
}

export default AllUsers

AllUsers.propTypes = {
  type: PropTypes.string,
}
