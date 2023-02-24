import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { usersApi } from 'src/APIs'
import {
  CBadge,
  CHeader,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

function LeftRightTeam({ position, userId }) {
  const { isLoading, data: resp } = usersApi.useGetTeamList(position, userId)

  return (
    <CRow className="table-row">
      <CHeader>
        <h5>
          <CBadge color={'primary'}>{'Total: ' + resp?.total}</CBadge>
        </h5>
        <h5>
          <CBadge color={'success'}>{'Active: ' + resp?.active}</CBadge>
        </h5>
        <h5>
          <CBadge color={'danger'}>{'Inactive: ' + resp?.inActive}</CBadge>
        </h5>
      </CHeader>
      <CTable align="middle" bordered className="mb-0 border" hover responsive striped>
        <CTableHead color="light">
          <CTableRow>
            <CTableHeaderCell>S. No.</CTableHeaderCell>
            <CTableHeaderCell>Name</CTableHeaderCell>
            <CTableHeaderCell>User Id</CTableHeaderCell>
            <CTableHeaderCell>Status</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {!isLoading &&
            resp?.data.map((item, index) => (
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
                    <CBadge id={item._id} color={item.isCompleted ? 'success' : 'danger'}>
                      {item.isCompleted ? 'Active' : 'Inactive'}
                    </CBadge>
                  </h5>
                </CTableDataCell>
              </CTableRow>
            ))}
        </CTableBody>
      </CTable>
    </CRow>
  )
}

export default LeftRightTeam

LeftRightTeam.propTypes = {
  position: PropTypes.string,
  userId: PropTypes.any,
}
