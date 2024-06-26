import React from 'react'
import SearchInput from '../searchInput/SearchInput'
import Users from './Users'
import Button from '../Buttons/Button'
import { BiLogOut } from "react-icons/bi"
import useLogout from '../../hooks/useLogout.js'
import User from '../sidebarUsers/User.jsx'
import { useAuthContext } from '../../context/AuthContext.jsx'
import useConversation from '../../zustand/useConversation.js'
import { useEffect } from 'react'

const Sidebar = () => {
  const { loading, logout } = useLogout()
  const { authUser } = useAuthContext()
  const { selectedConversation, setSelectedConversation } = useConversation()

  useEffect(() => {

    // Cleanup Function
    return () => setSelectedConversation(null)
  }, [setSelectedConversation])

  return (
    <div className={`overflow-auto sm:border-r sm:border-slate-400 p-2 flex-col relative ${selectedConversation ? 'hidden sm:flex w-[30%]' : 'flex w-[100%] sm:w-[30%]'}`}>
      <div className=''>
        <h1 className='px-5 text-xl capitalize text-gray-200 select-none'>my account</h1>
        <User fullName={authUser.fullName} profilePic={authUser.profilePic} username={authUser.username} className="py-5 px-5 bg-transparent shadow-inner shadow-purple-500 select-none rounded-b-none"  />
        <SearchInput />
      </div>
      {/* <div className='divider my-0 py-0 h-1' /> */}
      <div className='overflow-auto scroll-smooth'>
        <Users />
      </div>
      <div className='py-2'>
        {!loading ? (
          <Button disabled={loading} btnName={<BiLogOut className='text-3xl absolute bottom-2 transition-all duration-200 text-red-600 hover:text-red-700 cursor-pointer z-10' onClick={logout} />} />
        ) : (
          <span className='loading loading-spinner'></span>
        )}
      </div>
    </div>
  )
}

export default Sidebar
