import React from 'react'
import SearchInput from '../searchInput/SearchInput'
import Users from './Users'
import Button from '../Buttons/Button'

const Sidebar = () => {
  return (
    <div className='w-[25%] hidden sm:flex border-r border-slate-400 p-2 flex-col'>
      <SearchInput />
      <div className='divider'/>
      <Users />
      <Button btnName='logout'/>
    </div>
  )
}

export default Sidebar
