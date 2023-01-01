import React from 'react'

import { Tree, TreeNode } from 'react-organizational-chart'
import styled from 'styled-components'

export default function FamilyTree({ children }) {
  const StyledNode = styled.div`
    padding: 5px;
    border-radius: 8px;
    display: inline-block;
    border: 1px solid red;
  `
  return (
    <Tree
      lineWidth={'2px'}
      lineColor={'green'}
      lineBorderRadius={'10px'}
      label={<StyledNode>{user.firstName + ' ' + user.lastName}</StyledNode>}
    >
      {children}
    </Tree>
  )
}
