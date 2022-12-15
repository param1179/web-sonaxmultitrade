import React from 'react'
import { cilPeople } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CTable, CTableBody, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react'
import PropTypes from 'prop-types'
import ActivityTableRows from './ActivityTableRows'
import { shortFullName } from 'src/helpers'

function ActivityTable({ data, isLoading }) {
  function sort() {
    let table = document.getElementsByClassName('table1')
    let trs = table.rows

    Array.from(trs)
      .sort(
        (a, b) =>
          new Date('1970/01/01 ' + b.cells[4].textContent) -
          new Date('1970/01/01 ' + a.cells[4].textContent),
      )
      .forEach((tr) => table.appendChild(tr))
  }

  setTimeout(() => {
    // sort()
  }, 200)

  return (
    <CTable align="middle" className="mb-0 border" hover responsive striped>
      <CTableHead color="light">
        <CTableRow>
          <CTableHeaderCell className="text-center">
            <CIcon icon={cilPeople} />
          </CTableHeaderCell>
          <CTableHeaderCell>Name</CTableHeaderCell>
          <CTableHeaderCell>Email</CTableHeaderCell>
          <CTableHeaderCell>Healthcare</CTableHeaderCell>
          <CTableHeaderCell>Logged In Time</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody className="table1">
        {data.map(
          (item, index) =>
            item.user.length > 0 && (
              <ActivityTableRows
                key={index}
                shortName={shortFullName(item.user[0]?.firstName, item.user[0]?.lastName)}
                name={item.user[0]?.firstName + ' ' + item.user[0]?.lastName}
                email={item.user[0]?.email}
                healthcare={item.user[0]?.healthcare}
                activity={item.activity.filter((res) => res[0].logOut !== null)}
              />
            ),
        )}
      </CTableBody>
    </CTable>
  )
}

export default ActivityTable

ActivityTable.propTypes = {
  data: PropTypes.array,
  isLoading: PropTypes.bool,
}
