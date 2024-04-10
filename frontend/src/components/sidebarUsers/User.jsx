import React from 'react'

const User = ({ profilePic= '', fullName= '', username= '' }) => {
  return (
    <>
      <div className='flex gap-2 items-center hover:bg-gray-600 rounded p-2 py-1.5 cursor-pointer'>
        <div className='avatar online'>
          <div className='w-12 rounded-full'>
            <img src={profilePic} alt="User Avatar" />
          </div>
        </div>

        <div className='flex flex-col flex-1'>
          <div className='flex flex-col'>
            <p className='font-bold text-gray-200'>{fullName}</p>
            <span className='text-sm'>{username}</span>
          </div>
        </div>
      </div>

      <div className='divider my-0 py-0 h-1' />
    </>
  )
}

export default User
