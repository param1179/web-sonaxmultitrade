import React, { useEffect, useState } from 'react'

import PropTypes from 'prop-types'
import { usersApi } from 'src/APIs'
import { CBadge, CTableDataCell, CTableRow } from '@coreui/react'
import { dateHelper } from 'src/helpers'
let users = []
function FamilyList({ count, item, num, StyledNode }) {
  const { childId } = item
  users = [...users, childId?._id !== null && childId]
  useEffect(() => {
    count += 1
  }, [])

  const { isloading, data: resp } = usersApi.useGetTeams(childId?._id)
  var pD = resp?.status === 200 && resp?.data?.parentId
  var childs = resp?.status === 200 ? resp?.data?.childs : []

  const hasChildren = childs && childs.length !== 0
  // sendDataToParent(arrUnique(filterUsers()))
  const newChild = () => {
    if (hasChildren) {
      return childs.map((child, n) => {
        return isloading && child?.childId?._id === null ? (
          <>OK</>
        ) : (
          <FamilyList count={count++} key={n} item={child} num={n} StyledNode={StyledNode} />
        )
      })
    }
    return null
  }

  const StyledTreeExample = () => (
    <>
      {childId._id !== null && (
        <CTableRow v-for="item in tableItems" key={num}>
          <CTableDataCell>{'#'}</CTableDataCell>
          <CTableDataCell>
            <div>{childId?.firstName + ' ' + childId?.lastName}</div>
            <div className="small text-medium-emphasis">
              <span>{'New |'}</span> Registered on: {dateHelper.formatRegister(childId?.createdAt)}
            </div>
          </CTableDataCell>

          <CTableDataCell>{childId?.uId}</CTableDataCell>
          <CTableDataCell>
            <h5>
              <CBadge id={childId?._id} color={childId?.isCompleted ? 'success' : 'danger'}>
                {childId?.isCompleted ? 'Active' : 'Inactive'}
              </CBadge>
            </h5>
          </CTableDataCell>
        </CTableRow>
      )}
      {newChild()}
    </>
  )

  return StyledTreeExample()
}

export default FamilyList

FamilyList.propTypes = {
  item: PropTypes.any,
  num: PropTypes.number,
  StyledNode: PropTypes.any,
}

function filterUsers() {
  if (users.length > 0) {
    users = users.filter((res) => res !== false)
  }
  return users
}

function arrUnique(arr) {
  var clean = arr.filter((arr, index, self) => index === self.findIndex((t) => t.uId === arr.uId))

  return clean
}
