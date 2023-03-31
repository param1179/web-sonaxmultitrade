import React from 'react'
import {
  CBadge,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { usersApi } from 'src/APIs'

const Rewards = () => {
  const { isLoading: load, data: rewards } = usersApi.useGetRewards()

  return (
    <CRow>
      <CCol md={12}>
        <CCard>
          <CCardHeader>
            <strong>Rewards</strong>
          </CCardHeader>
          <CCardBody>
            <div className="">
              <ul className="timeline">
                {!load &&
                  rewards.rewards.map((res, i) => (
                    <li key={i}>
                      <p className={'float-right'}>
                        {res.rewardLevel} on {res.onPairs} Pairs
                      </p>
                      <p className={'float-right'}>({res.reward})</p>
                    </li>
                  ))}
              </ul>
            </div>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Rewards
