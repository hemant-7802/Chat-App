import React from 'react'
import Input from '../inputs/Input'
import Button from '../Buttons/Button'

const SearchInput = () => {
  return (
    <form action="" className='w-full flex gap-2 items-center p-1'>
      <Input type='text' placeholder='Search...' classname='rounded-full' divClassname='gap-0 p-0' />
      <Button className='btn btn-circle' btnName='search' type='submit'/>
    </form>
  )
}

export default SearchInput
