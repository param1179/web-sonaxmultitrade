import React, { useEffect, useState } from 'react'
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
import { getProfileData } from 'src/helpers/tokenLS'
import axios from 'src/axios'

const Rewards = () => {
  const profile = getProfileData()
  const [leftActive, setLeftActive] = useState(0)
  const [rightActive, setRightActive] = useState(0)
  const [pairs, setPairs] = useState(0)
  const { isLoading: load, data: rewards } = usersApi.useGetRewards()
  useEffect(() => {
    async function fetchData() {
      await axios
        .get(`users/teamList/${profile._id}?position=Left`)
        .then((response) => {
          setLeftActive(response?.active)
        })
        .then(
          async (casesHeaderFields) =>
            await axios.get(`users/teamList/${profile._id}?position=Right`),
        )
        .then((response) => {
          setRightActive(response?.active)
        })
    }
    fetchData()
    getPairs()
  }, [])

  const getPairs = () => {
    const lessSide = rightActive <= leftActive ? rightActive : leftActive
    const pair = Math.floor((lessSide * 2) / 2)
    setPairs(pair)
  }

  return (
    <CRow>
      <CCol md={12}>
        <CCard>
          <CCardHeader>
            <strong>Rewards</strong>
            <CBadge color="success" className="float-end mx-2">
              Total Pairs: {pairs}
            </CBadge>
            <CBadge color="success" className="float-end mx-2">
              Right Active: {rightActive}
            </CBadge>
            <CBadge color="success" className="float-end mx-2">
              Left Active: {leftActive}
            </CBadge>
          </CCardHeader>
          <CCardBody>
            <div className="">
              <ul className="timeline">
                {!load &&
                  rewards.rewards.map((res, i) => (
                    <li key={i} className={res.onPairs <= pairs ? 'achive' : ''}>
                      <p
                        className={
                          res.onPairs <= pairs ? 'text-success float-right' : 'float-right'
                        }
                      >
                        {res.rewardLevel} on {res.onPairs} Pairs
                      </p>
                      <p
                        className={
                          res.onPairs <= pairs ? 'text-success float-right' : 'float-right'
                        }
                      >
                        ({res.reward})
                      </p>
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
