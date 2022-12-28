import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormCheck,
  CFormLabel,
  CRow,
  CSpinner,
} from '@coreui/react'
import React, { useState } from 'react'
import { adminApi } from 'src/APIs'
import { ActivityTable } from 'src/components'

function Activities() {
  const date = new Date()
  const EST_TIME = new Date(
    date.toLocaleString('en-US', {
      timeZone: 'America/New_York',
    }),
  ).getTime()

  const [filterDate, setFilterDate] = useState(EST_TIME)
  const { isLoading, data: resp } = adminApi.useActivity(filterDate)

  function getDate(d) {
    let date = new Date(d).toLocaleDateString('en-us', { day: 'numeric' })
    let month = new Date(d).toLocaleDateString('en-us', { month: 'long' })
    const FormattedDate = `${date}-${month}`
    return FormattedDate
  }

  function getPreviousMonday(d) {
    var date = new Date(d)
    var day = date.getDay()
    var prevMonday = new Date(d)
    if (date.getDay() === 0) {
      prevMonday.setDate(date.getDate() - 7)
    } else {
      prevMonday.setDate(date.getDate() - (day - 1))
    }
    return prevMonday
  }

  function getMonth(d) {
    var date = new Date(d)
    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1)
    //var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    return firstDay
  }

  return (
    <CRow className="mt-4 mb-4">
      <CCol xs={12}>
        <CRow>
          <CCol xs={3}>
            <CCard className="mb-4">
              <CCardHeader>
                <strong>Activities Filters</strong>
              </CCardHeader>
              <CCardBody>
                <CForm className="d-flex">
                  <div className="mb-3">
                    <CFormLabel htmlFor="exampleFormControlInput1">Filter Types</CFormLabel>
                    <CFormCheck
                      className="mb-3"
                      type="radio"
                      name="type"
                      id="flexRadioDisabled"
                      label={`Today (${getDate(EST_TIME)})`}
                      value={EST_TIME}
                      onChange={(e) => setFilterDate(e.target.value)}
                      defaultChecked={true}
                    />
                    <CFormCheck
                      className="mb-3"
                      type="radio"
                      name="type"
                      id="flexRadioCheckedDisabled"
                      label={`This Week (${getDate(getPreviousMonday(EST_TIME))} Onward)`}
                      value={getPreviousMonday(EST_TIME).getTime()}
                      onChange={(e) => setFilterDate(e.target.value)}
                    />
                    <CFormCheck
                      className="mb-3"
                      type="radio"
                      name="type"
                      id="flexRadioCheckedDisabled1"
                      label={`This Month (${new Date(EST_TIME).toLocaleDateString('en-us', {
                        month: 'long',
                      })})`}
                      value={getMonth(EST_TIME).getTime()}
                      onChange={(e) => setFilterDate(e.target.value)}
                    />
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs={9}>
            <CCard className="mb-4">
              <CCardHeader>
                <strong>User Activities</strong>
              </CCardHeader>
              <CCardBody>
                {isLoading ? (
                  <>
                    <CSpinner color="primary" variant="grow" />
                  </>
                ) : (
                  <CRow>
                    <CRow className="table-row">
                      <ActivityTable data={resp?.data} isLoading={isLoading} />
                    </CRow>
                  </CRow>
                )}
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CCol>
    </CRow>
  )
}

export default Activities
