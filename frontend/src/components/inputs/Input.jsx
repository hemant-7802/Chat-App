import React from 'react'

const Input = ({
  label ='',
  name = '',
  type = '',
  placeholder = '',
  classname = '',
  // value = '',
  onChange = () => { }

}) => {
  return (
    <div className='flex flex-col gap-2 bg-lime-400 min-w-[300px] w-[500px] p-2'>
      <label className='text-lg font-medium'>{label}</label>
      <input type={type} name={name} placeholder={placeholder} className={`w-full py-2 px-1 outline-none ring-1 ring-sky-200 focus:ring-2 focus:ring-sky-200 shadow-md shadow-gray-600 text-gray-500 ${classname}`} onChange={onChange} />
    </div>
  )
}

export default Input
