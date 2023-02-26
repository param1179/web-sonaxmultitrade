import React, { useEffect } from 'react'

import PropTypes from 'prop-types'
import { usersApi } from 'src/APIs'
import { CBadge, CTableDataCell, CTableRow } from '@coreui/react'
import { dateHelper } from 'src/helpers'

function FamilyList({ count, item, num, StyledNode, pId }) {
  const { childId } = item

  useEffect(() => {
    count += 1
  }, [])

  const { isloading, data: resp } = usersApi.useGetTeams(childId?._id)
  var pD = resp?.status === 200 && resp?.data?.parentId
  var childs = resp?.status === 200 ? resp?.data?.childs : []

  const hasChildren = childs && childs.length !== 0

  if (hasChildren && resp?.data?.childs[0].placement === 'Right') {
    childs = resp?.data?.childs.reverse()
  }
  const newChild = () => {
    if (hasChildren) {
      return childs.map((child, n) => {
        return isloading ? (
          <>OK</>
        ) : (
          <FamilyList key={n} item={child} num={n} StyledNode={StyledNode} pId={pD} />
        )
      })
    }
    return null
  }

  const StyledTreeExample = () => (
    <>
      {childId._id !== null && (
        <CTableRow v-for="item in tableItems" key={num}>
          <CTableDataCell>{num + 1}</CTableDataCell>
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
  pId: PropTypes.any,
  StyledNode: PropTypes.any,
}
