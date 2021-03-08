import React from 'react'
import PropTypes from 'prop-types'

const MobileView = props => {
  const { children } = props
  return (
    <div className="flex flex-col justify-center items-center h-screen p-4">
      {children}
    </div>

  )
}

MobileView.propTypes = {
  children: PropTypes.element
}

export default MobileView