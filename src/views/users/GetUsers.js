import React, { useEffect, useState } from 'react'
import { usersApi } from 'src/APIs'
import { Tree } from 'react-organizational-chart'
import styled from 'styled-components'
import { getProfileData } from 'src/helpers/tokenLS'
import brand from 'src/assets/sonaxmultitrade.png'
import FamilyTree from 'src/components/FamilyTree'
import { CButton, CCard, CCardBody, CCardHeader, CCol, CImage, CRow } from '@coreui/react'
import { useLocation, useNavigate } from 'react-router-dom'
import CIcon from '@coreui/icons-react'
import { cilArrowTop } from '@coreui/icons'

const StyledNode = styled.div`
  padding: 5px;
  display: inline-block;
`
function GetUsers() {
  let instancesCount = 0
  const { state = null } = useLocation()
  const location = useLocation()
  const navigate = useNavigate()
  const user = getProfileData()
  const [reload, setReload] = useState('')
  const { data } = usersApi.useGetTeams(state && state?.userId ? state?.userId : user._id)
  var childs = data?.data?.childs
  if (data?.data?.childs[0].placement === 'Right') {
    childs = data?.data?.childs.reverse()
  }
  useEffect(() => {
    navigate(location.pathname, {})
  }, [reload])

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>All Team&apos;s Tree</strong>
            <CButton color="primary mx-2" onClick={''} className="float-end">
              Direct: {data?.direct.length}
            </CButton>
            {/* <CButton color="primary mx-2" onClick={''} className="float-end">
              Right: {data?.direct.length}
            </CButton>
            <CButton color="primary mx-2" onClick={''} className="float-end">
              Left: {data?.direct.length}
            </CButton> */}
          </CCardHeader>
          <CCardBody className="divScroll">
            {state && state?.userId && (
              <CButton size="sm" onClick={() => setReload(Math.random())}>
                {'Go to top'}
                <CIcon icon={cilArrowTop} />
              </CButton>
            )}
            <Tree
              lineWidth={'2px'}
              lineColor={'green'}
              lineBorderRadius={'10px'}
              label={
                <StyledNode>
                  <CImage src={brand} height={50} alt="Logo" />
                  <div
                    className={`border border-success tree-content ${
                      !state
                        ? data?.data?.parentId?.isCompleted
                          ? 'app-bg-active'
                          : 'app-bg-top'
                        : data?.data?.parentId?.isCompleted
                        ? 'app-bg-active'
                        : 'app-bg-inactive'
                    }`}
                  >
                    <div>{data?.data?.parentId?.uId ? data?.data?.parentId?.uId : ''}</div>
                    <div>{data?.data?.parentId?.firstName}</div>
                  </div>
                </StyledNode>
              }
            >
              {childs &&
                childs?.map((child, n) => {
                  return (
                    <FamilyTree
                      count={instancesCount}
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
