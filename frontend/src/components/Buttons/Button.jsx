import React from 'react'

const Button = ({
  type = 'button',
  className = 'w-full',
  btnName = '',
}) => {
  return <button type={type} className={`${className} border-none`} >{btnName}</button>
}

export default Button
