import React from 'react'
import Input from '../inputs/Input'

const GenderCheckBox = ({onCheckBoxChange, selectedGender}) => {
  return (
    <div className='flex'>
      <Input divClassname='flex flex-row items-center' labelClassname={`cursor-pointer ${selectedGender === 'male' ? "selected" : ""}`} type='checkbox' classname='checkbox p-2 w-7 h-7 focus:ring-0 checkbox-primary' label='Male' checked={selectedGender === 'male'} onChange={() => {onCheckBoxChange('male')}}/>
      <Input divClassname='flex flex-row items-center' labelClassname={`cursor-pointer ${selectedGender === 'female' ? "selected" : ""}`} type='checkbox' classname='checkbox p-2 w-7 h-7 focus:ring-0 checkbox-primary' label='Female' checked={selectedGender === 'female'} onChange={() => {onCheckBoxChange('female')}}/>
    </div>
  )
}

export default GenderCheckBox
