import React from 'react'
import PropTypes from 'prop-types'
import { CToast, CToastBody, CToastHeader } from '@coreui/react'

const AppToaster = ({ color, content }) => {
  return (
    <CToast color={color}>
      <CToastHeader closeButton>
        <svg
          className="rounded me-2"
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          role="img"
        >
          <rect width="100%" height="100%" fill="#007aff"></rect>
        </svg>
        <strong className="me-auto">Medsembly</strong>
        <small>0 min ago</small>
      </CToastHeader>
      <CToastBody>{content}</CToastBody>
    </CToast>
  )
}

export default AppToaster
AppToaster.propTypes = {
  color: PropTypes.string,
  content: PropTypes.string,
}
