import React, { useEffect } from 'react'

import { Tree, TreeNode } from 'react-organizational-chart'
import PropTypes from 'prop-types'
import { adminApi } from 'src/APIs'
import { cilUser } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { useNavigate } from 'react-router-dom'
import brand from 'src/assets/sonaxmultitrade.png'
import { CImage } from '@coreui/react'

export default function FamilyTree({ item, num, StyledNode, pId }) {
  const navigation = useNavigate()

  const { childId, parentId } = item
  const resp = childId._id && adminApi.useGetTeams(childId._id).data
  var pD = resp ? resp?.data?.parentId : ''
  var childs = resp ? resp?.data?.childs : []

  const hasChildren = childs && childs.length !== 0

  if (hasChildren && resp?.data?.childs[0].placement === 'Right') {
    childs = resp?.data?.childs.reverse()
  }
  const newChild = () => {
    if (hasChildren) {
      return (
        childs &&
        childs.map((child, n) => {
          return <FamilyTree key={n} item={child} num={n} StyledNode={StyledNode} pId={pD} />
        })
      )
    }
    return null
  }

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
  const StyledTreeExample = () => (
    <TreeNode key={num} label={renderBranch()}>
      {newChild()}
    </TreeNode>
  )

  return StyledTreeExample()
}

FamilyTree.propTypes = {
  item: PropTypes.object,
  num: PropTypes.number,
  pId: PropTypes.any,
  StyledNode: PropTypes.any,
}
