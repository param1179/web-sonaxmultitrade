import React from 'react'

import { TreeNode } from 'react-organizational-chart'
import PropTypes from 'prop-types'
import { usersApi } from 'src/APIs'
import { useNavigate } from 'react-router-dom'
import brand from 'src/assets/sonaxmultitrade.png'
import { CImage } from '@coreui/react'

function FamilyTree({ item, num, StyledNode, pId }) {
  const navigation = useNavigate()
  const { childId, parentId } = item
  const renderBranch = () => {
    return (
      <StyledNode>
        <div
          role={!childId.uId ? 'button' : ''}
          onClick={() =>
            !childId.uId &&
            navigation('/add', {
              state: {
                pId: typeof pId === 'string' ? pId : parentId,
                placement: num === 0 ? 'Left' : 'Right',
              },
            })
          }
        >
          <CImage src={brand} height={50} alt="Logo" />
          <div
            className={
              !childId.uId
                ? 'border border-success tree-content app-bg-2'
                : 'border border-success tree-content app-bg'
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
    if (hasChildren) {
      return childs.map((child, n) => {
        return isloading ? (
          <>OK</>
        ) : (
          <FamilyTree key={n} item={child} num={n} StyledNode={StyledNode} pId={pD} />
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
