import React, { useEffect, useState } from 'react'
import { useQueryClient } from 'react-query'
import { adminApi } from 'src/APIs'
import { Tree, TreeNode } from 'react-organizational-chart'
import styled from 'styled-components'
import { getProfileData } from 'src/helpers/tokenLS'
import { useNavigate } from 'react-router-dom'

function GetUsers() {
  const navigation = useNavigate()
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
      {data?.data?.map((res, i) => {
        var childs = res.childs
        if (res.childs[0].placement === 'Right') {
          childs = res.childs.reverse()
        }
        return childs.map((child, n) => {
          return (
            <TreeNode
              key={n}
              label={
                <StyledNode>
                  <div
                    onClick={() =>
                      navigation('/add', {
                        state: {
                          pId: child.childId?._id ? child.childId?._id : user._id,
                          placement: n === 0 ? 'Left' : 'Right',
                        },
                      })
                    }
                  >
                    {child.childId.uId + ` (${child.childId.firstName})`}
                  </div>
                </StyledNode>
              }
            />
          )
        })
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
