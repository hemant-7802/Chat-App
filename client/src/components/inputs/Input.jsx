import React from 'react'

const Input = ({
  name = '',
  type = '',
  placeholder = '',
  classname = '',
  value = '',
  onChange = () => { }

}) => {
  return (
    <div>
      <input type={type} name={name} placeholder={placeholder} className={` ${classname}`} value={value} onChange={onChange} />
    </div>
  )
}

export default Input
