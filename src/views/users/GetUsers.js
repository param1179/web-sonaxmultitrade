import React, { useEffect, useState } from 'react'
import { usersApi } from 'src/APIs'
import { Tree } from 'react-organizational-chart'
import styled from 'styled-components'
import { getProfileData } from 'src/helpers/tokenLS'
import brand from 'src/assets/sonaxmultitrade.png'
import FamilyTree from 'src/components/FamilyTree'
import {
  CBadge,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CHeader,
  CImage,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { useLocation, useNavigate } from 'react-router-dom'
import CIcon from '@coreui/icons-react'
import { cilArrowTop } from '@coreui/icons'
import LeftRightTeam from './LeftRightTeam'
import FamilyList from 'src/components/FamilyList'
import axios from 'src/axios'
import { dateHelper } from 'src/helpers'

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
  const [tabs, setTabs] = useState({ total: 0, active: 0, inActive: 0 })
  const [visible, setVisible] = useState({
    visible: false,
    position: 'Left',
  })
  const [visible2, setVisible2] = useState({
    visible: false,
    position: 'Direct',
  })

  // const [leftActive, setLeftActive] = useState(0)
  // const [rightActive, setRightActive] = useState(0)
  // useEffect(() => {
  //   async function fetchData() {
  //     await axios
  //       .get(`users/teamList/${user._id}?position=Left`)
  //       .then((response) => {
  //         setLeftActive(response?.active)
  //       })
  //       .then(
  //         async (casesHeaderFields) => await axios.get(`users/teamList/${user._id}?position=Right`),
  //       )
  //       .then((response) => {
  //         setRightActive(response?.active)
  //       })
  //   }
  //   fetchData()
  // }, [])

  useEffect(() => {
    navigate(location.pathname, {})
  }, [reload])

  const userId = state && state?.userId ? state?.userId : user._id
  const { data } = usersApi.useGetTeams(userId)
  const { isLoading: loa, data: directCount } = usersApi.useGetDirectTeams()
  const { isLoading: load, data: tbs, refetch } = usersApi.useGetTeamList(visible.position, userId)
  var childs = data?.data?.childs
  if (data?.data?.childs[0].placement === 'Right') {
    childs = data?.data?.childs.reverse()
  }
  useEffect(() => {
    refetch()
  }, [visible.position])

  return (
    <>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>All Team&apos;s Tree</strong>
              <div>
                <CButton
                  color="primary mx-2"
                  className="float-end"
                  onClick={() => setVisible2({ visible: !visible2.visible, position: 'Direct' })}
                >
                  Direct: {directCount?.direct.length}
                </CButton>
                <CButton
                  color="primary mx-2"
                  onClick={() => setVisible({ visible: !visible.visible, position: 'Left' })}
                  className=""
                >
                  Left
                </CButton>
                <CButton
                  color="primary mx-2"
                  onClick={() => setVisible({ visible: !visible.visible, position: 'Right' })}
                  className=""
                >
                  Right
                </CButton>
              </div>
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
                    {/* <>
                      {!state && !state?.userId && (
                        <>
                          <b>L</b> {leftActive}
                        </>
                      )}
                    </> */}
                    <CImage src={brand} height={50} alt="Logo" />
                    {/* <>
                      {!state && !state?.userId && (
                        <>
                          <b>R</b> {rightActive}
                        </>
                      )}
                    </> */}
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
        onClose={() => {
          setVisible({ ...visible, visible: false })
        }}
      >
        <CModalHeader>
          <CModalTitle>{visible.position} Side Team List</CModalTitle>
        </CModalHeader>
        <CModalBody className="overflow-auto">
          <CRow>
            {!load && (
              <CHeader>
                <h5>
                  <CBadge color={'primary'}>{'Total: ' + tbs?.total}</CBadge>
                </h5>
                <h5>
                  <CBadge color={'success'}>{'Active: ' + tbs?.active}</CBadge>
                </h5>
                <h5>
                  <CBadge color={'danger'}>{'Inactive: ' + tbs?.inActive}</CBadge>
                </h5>
              </CHeader>
            )}
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
      <CModal
        fullscreen="lg"
        visible={visible2.visible}
        onClose={() => {
          setVisible({ ...visible2, visible: false })
        }}
      >
        <CModalHeader>
          <CModalTitle>{visible2.position} Team List</CModalTitle>
        </CModalHeader>
        <CModalBody className="overflow-auto">
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
                {!loa &&
                  directCount?.direct.map((_child, num) => (
                    <CTableRow v-for="item in tableItems" key={num}>
                      <CTableDataCell>{'#' + (num + 1)}</CTableDataCell>
                      <CTableDataCell>
                        <div>
                          {_child.childs[0].childId?.firstName +
                            ' ' +
                            _child.childs[0].childId?.lastName}
                        </div>
                        <div className="small text-medium-emphasis">
                          <span>{'New |'}</span> Registered on:{' '}
                          {dateHelper.formatRegister(_child.childs[0].childId?.createdAt)}
                        </div>
                      </CTableDataCell>

                      <CTableDataCell>{_child.childs[0].childId?.uId}</CTableDataCell>
                      <CTableDataCell>
                        <h5>
                          <CBadge
                            id={_child.childs[0].childId?._id}
                            color={_child.childs[0].childId?.isCompleted ? 'success' : 'danger'}
                          >
                            {_child.childs[0].childId?.isCompleted ? 'Active' : 'Inactive'}
                          </CBadge>
                        </h5>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
              </CTableBody>
            </CTable>
          </CRow>
        </CModalBody>
      </CModal>
    </>
  )
}

export default GetUsers
