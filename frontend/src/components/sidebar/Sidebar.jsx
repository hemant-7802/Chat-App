import React from 'react'
import SearchInput from '../searchInput/SearchInput'
import Users from './Users'
import Button from '../Buttons/Button'
import { BiLogOut } from "react-icons/bi";

const Sidebar = () => {
  return (
    <div className='w-[100%] sm:w-[25%] flex sm:border-r sm:border-slate-400 p-2 flex-col'>
      <SearchInput />
      <div className='divider'/>
      <Users />
      <Button btnName={<BiLogOut className='text-2xl absolute bottom-2'/>}/>
    </div>
  )
}

export default Sidebar
