import React from 'react'
import SearchInput from '../searchInput/SearchInput'
import Users from './Users'
import Button from '../Buttons/Button'
import { BiLogOut } from "react-icons/bi"
import useLogout from '../../hooks/useLogout.js'

const Sidebar = () => {
  const { loading, logout } = useLogout()

  return (
    <div className='w-[100%] sm:w-[25%] flex sm:border-r sm:border-slate-400 p-2 flex-col'>
      <SearchInput />
      <div className='divider' />
      <Users />
      <div className='mt-auto relative'>
        {!loading ? (
          <Button disabled={loading} btnName={<BiLogOut className='text-2xl absolute bottom-2 hover:text-gray-200 cursor-pointer z-10' onClick={logout} />} />
        ) : (
          <span className='loading loading-spinner'></span>
        )}
      </div>
    </div>
  )
}

export default Sidebar
