import React from 'react'
import User from '../sidebarUsers/User'

const Users = () => {
  return (
    <div className='py-2 flex flex-col overflow-auto'>
      <User fullName='Hemant Bhargav' username='user123'/>
      <User fullName='Hemant Bhargav' username='user123'/>
      <User fullName='Hemant Bhargav' username='user123'/>
      <User fullName='Hemant Bhargav' username='user123'/>
      <User fullName='Hemant Bhargav' username='user123'/>
      <User fullName='Hemant Bhargav' username='user123'/>
    </div>
  )
}

export default Users
