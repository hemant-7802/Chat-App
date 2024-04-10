import React from 'react'
import Input from '../inputs/Input'
import Button from '../Buttons/Button'
import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
  return (
    <form action="" className='w-full flex gap-2 items-center'>
      <Input type='text' placeholder='Search...' labelValue='false' classname='rounded-full w-full' divClassname='gap-0 p-0 w-full' />
      <Button className='btn btn-circle' btnName={<IoSearchSharp  className='text-2xl'/>} type='submit'/>
    </form>
  )
}

export default SearchInput
