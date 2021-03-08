/* eslint-disable react/button-has-type */
import React from 'react'
import PropTypes from 'prop-types'

const Button = props => {
  const { type, handleOnClick, content, disabled } = props

  const handleClick = ( e ) => handleOnClick( e )

  return (
    <button
     className="bg-primary px-4 py-2 rounded-xl shadow disabled:opacity-50" 
     type={type}
     onClick={handleClick}
     disabled={disabled}
     >
       {content}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  handleOnClick: PropTypes.func.isRequired,
  content: PropTypes.string,
  disabled: PropTypes.bool
}

Button.defaultProps = {
  type: `button`,
  content: `enter`,
  disabled: false
}

export default Button