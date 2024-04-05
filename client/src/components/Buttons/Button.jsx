import React from 'react'

const Button = ({
  type = 'button',
  className = '',
  
}) => {
  return (
    <div>
      <button type={type}></button>
    </div>
  )
}

export default Button
