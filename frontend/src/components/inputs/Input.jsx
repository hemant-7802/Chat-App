import React from 'react'

const Input = ({
  label ='',
  name = '',
  type = '',
  placeholder = '',
  classname = 'rounded-md',
  labelClassname = '',
  divClassname = 'flex-col',
  value = '',
  onChange = () => { }

}) => {
  return (
    <div className={`flex gap-2 w-full p-1 ${divClassname}`}>
      <label htmlFor={name} className={`label font-medium text-base ${labelClassname}`}><span className='label-text'>{label}</span></label>
      <input type={type} name={name} placeholder={placeholder} className={`w-full input input-bordered focus:ring-1 focus:ring-sky-300 shadow-sm shadow-gray-600 text-gray-300 ${classname}`} onChange={onChange} />
    </div>
  )
}

export default Input
