import React from 'react'
import { adminApi } from 'src/APIs'
import { Tree } from 'react-organizational-chart'
import styled from 'styled-components'
import { getProfileData } from 'src/helpers/tokenLS'
import CIcon from '@coreui/icons-react'
import { cilUser } from '@coreui/icons'
import FamilyTree from 'src/components/FamilyTree'

function GetUsers() {
  const user = getProfileData()
  const { isLoading, data } = adminApi.useGetTeams(user._id)
  var childs = data?.data?.childs
  if (data?.data?.childs[0].placement === 'Right') {
    childs = data?.data?.childs.reverse()
  }

  const StyledNode = styled.div`
    padding: 5px;
    border-radius: 8px;
    display: inline-block;
    border: 1px solid red;
  `

  return (
    <div>
      <strong>All Teams</strong>

      <Tree
        lineWidth={'2px'}
        lineColor={'green'}
        lineBorderRadius={'10px'}
        label={
          <StyledNode>
            <div>
              <CIcon className="sidebar-brand-narrow" icon={cilUser} height={50} />
              <div>{user.uId ? user.uId : ''}</div>
              <div>{user.firstName}</div>
            </div>
          </StyledNode>
        }
      >
        {childs &&
          childs?.map((child, n) => {
            return (
              <FamilyTree
                key={n}
                item={child}
                num={n}
                StyledNode={StyledNode}
                pId={data?.data.parentId}
              />
            )
          })}
      </Tree>
    </div>
  )
}

export default GetUsers
