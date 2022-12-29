import React, { useEffect, useState } from 'react'
import { useQueryClient } from 'react-query'
import { adminApi } from 'src/APIs'
import { Tree, TreeNode } from 'react-organizational-chart'
import styled from 'styled-components'
import { getProfileData } from 'src/helpers/tokenLS'

function GetUsers() {
  const user = getProfileData()
  const { isLoading, data } = adminApi.useGetTeams()
  const StyledNode = styled.div`
    padding: 5px;
    border-radius: 8px;
    display: inline-block;
    border: 1px solid red;
  `

  const StyledTreeExample = () => (
    <Tree
      lineWidth={'2px'}
      lineColor={'green'}
      lineBorderRadius={'10px'}
      label={<StyledNode>{user.firstName + ' ' + user.lastName}</StyledNode>}
    >
      {data?.data.map((res, i) => {
        if (res.placement === 'Left') {
          return (
            <>
              <TreeNode key={i} label={<StyledNode>{res.userId.firstName}</StyledNode>} />
            </>
          )
        }
      })}
    </Tree>
  )

  return (
    <div>
      <strong>All Teams</strong>
      <StyledTreeExample />
    </div>
  )
}

export default GetUsers
