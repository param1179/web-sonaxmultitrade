import React from 'react'
import { adminApi } from 'src/APIs'
import { Tree } from 'react-organizational-chart'
import styled from 'styled-components'
import { getProfileData } from 'src/helpers/tokenLS'
import brand from 'src/assets/sonaxmultitrade.png'
import FamilyTree from 'src/components/FamilyTree'
import { CCard, CCardBody, CCardHeader, CCol, CImage, CRow } from '@coreui/react'

const StyledNode = styled.div`
  padding: 5px;
  display: inline-block;
`
function GetUsers() {
  const user = getProfileData()
  const { isLoading, data } = adminApi.useGetTeams(user._id)
  var childs = data?.data?.childs
  if (data?.data?.childs[0].placement === 'Right') {
    childs = data?.data?.childs.reverse()
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>All Team&apos;s Tree</strong>
          </CCardHeader>
          <CCardBody className="divScroll">
            <Tree
              lineWidth={'2px'}
              lineColor={'green'}
              lineBorderRadius={'10px'}
              label={
                <StyledNode>
                  <CImage src={brand} height={50} alt="Logo" />
                  <div className="border border-success tree-content app-bg">
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
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default GetUsers
