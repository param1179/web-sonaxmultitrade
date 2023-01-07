import React, { useEffect } from 'react'

import { Tree, TreeNode } from 'react-organizational-chart'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { adminApi } from 'src/APIs'
import { cilUser } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { useNavigate } from 'react-router-dom'

export default function FamilyTree({ item, num, StyledNode }) {
  const navigation = useNavigate()

  var resp
  const { childId, placement, parentId } = item
  if (childId._id) {
    resp = adminApi.useGetTeams(childId._id).data
  }

  var childs = resp?.data?.childs
  if (resp?.data?.childs[0].placement === 'Right') {
    childs = resp?.data?.childs.reverse()
  }

  const hasChildren = childs && childs.length !== 0

  const newChild = () => {
    if (hasChildren) {
      return childs.map((child, n) => {
        return <FamilyTree key={n} item={child} num={n} StyledNode={StyledNode} />
      })
    } else {
      return null
    }
  }

  const renderBranch = () => {
    return (
      <StyledNode>
        <div
          role="button"
          onClick={() =>
            navigation('/add', {
              state: {
                pId: childId?._id ? childId?._id : parentId,
                placement: num === 0 ? 'Left' : 'Right',
              },
            })
          }
        >
          <CIcon className="sidebar-brand-narrow" icon={cilUser} height={50} />
          <div>
            {childId.uId ? childId.uId : ''}
            {` (${childId.firstName})`}
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
  StyledNode: PropTypes.any,
}
