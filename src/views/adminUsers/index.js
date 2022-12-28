import React, { useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CNav,
  CNavItem,
  CNavLink,
  CRow,
  CTabContent,
  CTabPane,
} from '@coreui/react'
import AllUsers from './allUsers'

function Users() {
  const [activeKey, setActiveKey] = useState(1)
  const [type, setType] = useState('both')
  return (
    <>
      <CRow>
        <CCol xs={12}>
          <CRow>
            <CCard className="mb-4">
              <CCardHeader>
                <strong>All Users</strong>
              </CCardHeader>
              <CCardBody>
                <CNav variant="tabs" role="tablist">
                  <CNavItem>
                    <CNavLink
                      active={activeKey === 1}
                      onClick={() => {
                        setActiveKey(1)
                        setType('both')
                      }}
                    >
                      All
                    </CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink
                      active={activeKey === 2}
                      onClick={() => {
                        setActiveKey(2)
                        setType('mentor')
                      }}
                    >
                      Mentor
                    </CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink
                      active={activeKey === 3}
                      onClick={() => {
                        setActiveKey(3)
                        setType('mentee')
                      }}
                    >
                      Mentee
                    </CNavLink>
                  </CNavItem>
                </CNav>
                <CTabContent>
                  <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 1}>
                    <AllUsers type={type} />
                  </CTabPane>
                  <CTabPane role="tabpanel" aria-labelledby="profile-tab" visible={activeKey === 2}>
                    <AllUsers type={type} />
                  </CTabPane>
                  <CTabPane role="tabpanel" aria-labelledby="contact-tab" visible={activeKey === 3}>
                    <AllUsers type={type} />
                  </CTabPane>
                </CTabContent>
              </CCardBody>
            </CCard>
          </CRow>
        </CCol>
      </CRow>
    </>
  )
}

export default Users
