import React, { useEffect, useState } from 'react'
import { usersApi } from 'src/APIs'
import { Tree } from 'react-organizational-chart'
import styled from 'styled-components'
import { getProfileData } from 'src/helpers/tokenLS'
import brand from 'src/assets/sonaxmultitrade.png'
import FamilyTree from 'src/components/FamilyTree'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CImage,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
  CRow,
  CTable,
  CTableBody,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { useLocation, useNavigate } from 'react-router-dom'
import CIcon from '@coreui/icons-react'
import { cilArrowTop } from '@coreui/icons'
import LeftRightTeam from './LeftRightTeam'
import FamilyList from 'src/components/FamilyList'

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
  const [reload, setReload] = useState(1)
  const [visible, setVisible] = useState({
    visible: false,
    position: '',
  })
  useEffect(() => {
    navigate(location.pathname, {})
  }, [reload])
  const userId = state && state?.userId ? state?.userId : user._id
  const { isLoading, data } = usersApi.useGetTeams(userId)
  var childs = data?.data?.childs
  if (data?.data?.childs[0].placement === 'Right') {
    childs = data?.data?.childs.reverse()
  }

  return (
    <>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>All Team&apos;s Tree</strong>
              {/* <CButton
                color="primary mx-2"
                onClick={() => setVisible(!visible)}
                className="float-end"
              >
                Direct: {data?.direct.length}
              </CButton> */}
              <CButton
                color="primary mx-2"
                onClick={() => setVisible({ visible: !visible.visible, position: 'Right' })}
                className="float-end"
              >
                Right
              </CButton>
              <CButton
                color="primary mx-2"
                onClick={() => setVisible({ visible: !visible.visible, position: 'Left' })}
                className="float-end"
              >
                Left
              </CButton>
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

      <CModal
        fullscreen="lg"
        visible={visible.visible}
        onClose={() => setVisible({ ...visible, visible: false })}
      >
        <CModalHeader>
          <CModalTitle>{visible.position} Side Team List</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CRow>
            <CTable align="middle" bordered className="mb-0 border" hover responsive striped>
              <CTableHead color="light">
                <CTableRow>
                  <CTableHeaderCell>S. No.</CTableHeaderCell>
                  <CTableHeaderCell>Name</CTableHeaderCell>
                  <CTableHeaderCell>User Id</CTableHeaderCell>
                  <CTableHeaderCell>Status</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {childs && (
                  <FamilyList
                    count={instancesCount}
                    key={0}
                    item={childs.filter((res) => res.placement === visible.position)[0]}
                    num={0}
                    StyledNode={StyledNode}
                    pId={data?.data.parentId}
                  />
                )}
              </CTableBody>
            </CTable>
          </CRow>
        </CModalBody>
      </CModal>
    </>
  )
}

export default GetUsers
