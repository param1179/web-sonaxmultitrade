import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { usersApi } from 'src/APIs'
import {
  CBadge,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

function LeftRightTeam({ position, userId }) {
  var child = []
  var done = false

  getTeam(userId)
  function getTeam(userId) {
    const { isLoading, data: resp } = usersApi.useGetTeams(userId)
    if (!isLoading) {
      var childs = resp?.status === 200 ? resp?.data?.childs : []

      const chi = childs.filter((child) => child.placement === position)
      if (chi && chi.length !== 0 && chi[0]?.childId?._id !== null) {
        child = [...child, chi[0]?.childId?._id !== null && chi[0].childId]
        getTeam(chi[0]?.childId?._id)
      }
    }
    done = true
  }

  return (
    <CRow className="table-row">
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
          {done &&
            child?.map((item, index) => (
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
