import React, { useEffect } from 'react'

import { TreeNode } from 'react-organizational-chart'
import PropTypes from 'prop-types'
import { usersApi } from 'src/APIs'
import { useNavigate } from 'react-router-dom'
import brand from 'src/assets/sonaxmultitrade.png'
import { CImage } from '@coreui/react'

function FamilyTree({ count, item, num, StyledNode, pId }) {
  const navigation = useNavigate()
  const { childId, parentId } = item
  useEffect(() => {
    count += 1
  }, [])

  const renderBranch = () => {
    return (
      <StyledNode>
        <div
          // role={!childId.uId ? 'button' : ''}
          role="button"
          onClick={() =>
            !childId.uId
              ? navigation('/add', {
                  state: {
                    pId: pId,
                    placement: num === 0 ? 'Left' : 'Right',
                  },
                })
              : navigation('/users', {
                  state: {
                    userId: childId._id,
                  },
                })
          }
        >
          <CImage src={brand} height={50} alt="Logo" />
          <div
            className={
              !childId.uId
                ? 'border border-success tree-content app-bg-2'
                : `border border-success tree-content ${
                    !childId.isCompleted ? 'app-bg-inactive' : 'app-bg-active'
                  }`
            }
          >
            <div>{childId.uId ? childId.uId : ''}</div>
            <div>{childId.firstName}</div>
          </div>
        </div>
      </StyledNode>
    )
  }

  const { isloading, data: resp } = usersApi.useGetTeams(childId._id)
  var pD = resp?.status === 200 && resp?.data?.parentId
  var childs = resp?.status === 200 ? resp?.data?.childs : []

  const hasChildren = childs && childs.length !== 0

  if (hasChildren && resp?.data?.childs[0].placement === 'Right') {
    childs = resp?.data?.childs.reverse()
  }

  const newChild = () => {
    if (hasChildren && count < 6) {
      return childs.map((child, n) => {
        return isloading ? (
          <>OK</>
        ) : (
          <FamilyTree key={n} item={child} num={n} StyledNode={StyledNode} pId={pD._id} />
        )
      })
    }
    return null
  }

  const StyledTreeExample = () => (
    <TreeNode key={num} label={renderBranch()}>
      {newChild()}
    </TreeNode>
  )

  return StyledTreeExample()
}

export default FamilyTree

FamilyTree.propTypes = {
  item: PropTypes.object,
  num: PropTypes.number,
  pId: PropTypes.any,
  StyledNode: PropTypes.any,
}
