import React from 'react'
import { CAvatar, CTableDataCell, CTableRow } from '@coreui/react'
import PropTypes from 'prop-types'

const ActivityTableRows = ({ shortName, name, email, healthcare, activity }) => {
  function diff_hours(dt1, dt2) {
    const diffMs = dt2.getTime() - dt1.getTime()
    const msInHour = 1000 * 60 * 60
    var diffMins = Math.round(((diffMs % 86400000) % msInHour) / 60000)
    return diffMins
  }

  function sumArray(array) {
    let sum = 0

    /*Go through each item in the array and execute this function which adds
      each item to sum 
      */
    array.forEach((item) => {
      sum += item
    })

    return sum
  }

  const convertMinsToHrsMins = (mins) => {
    let h = Math.floor(mins / 60)
    let m = mins % 60
    h = h < 10 ? '0' + h : h // (or alternatively) h = String(h).padStart(2, '0')
    m = m < 10 ? '0' + m : m // (or alternatively) m = String(m).padStart(2, '0')
    return `${h}:${m}`
  }

  const data = activity.map((res) => {
    if (res[0].logOut !== null) {
      const dt1 = new Date(res[0].logIn)
      const dt2 = new Date(res[0].logOut)
      return diff_hours(dt1, dt2)
    }
  })
  const min = sumArray(data)

  return (
    <>
      {min > 0 ? (
        <CTableRow v-for="item in tableItems">
          <CTableDataCell className="text-center">{shortName}</CTableDataCell>
          <CTableDataCell>
            <div className="text-capitalize">{name}</div>
            {/* <div className="small text-medium-emphasis">
          <span>{item.user.new ? 'New |' : ''}</span> Registered: {item.user.registered}
        </div> */}
          </CTableDataCell>
          <CTableDataCell>
            <div className="clearfix">{email}</div>
          </CTableDataCell>
          <CTableDataCell>
            <div className="text-capitalize">{healthcare}</div>
          </CTableDataCell>
          <CTableDataCell>{convertMinsToHrsMins(min)}</CTableDataCell>
        </CTableRow>
      ) : (
        'No Data Found'
      )}
    </>
  )
}

export default ActivityTableRows

ActivityTableRows.propTypes = {
  shortName: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string,
  healthcare: PropTypes.string,
  activity: PropTypes.array,
}
