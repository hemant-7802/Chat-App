import React from 'react'
import Input from '../inputs/Input'

const GenderCheckBox = () => {
  return (
    <div className='flex'>
      <Input divClassname='form-control flex flex-row items-center' labelClassname='cursor-pointer' type='checkbox' classname='checkbox p-2 w-6 h-6' label='Male'/>
      <Input divClassname='form-control flex flex-row items-center' labelClassname='cursor-pointer' type='checkbox' classname='checkbox p-2 w-6 h-6' label='Female'/>
    </div>
  )
}

export default GenderCheckBox
