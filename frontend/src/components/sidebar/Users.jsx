import React from 'react'
import User from '../sidebarUsers/User'
import useGetConversations from '../../hooks/useGetConversations'

const Users = () => {
  const { loading, conversations } = useGetConversations()
  return (
    <div className='py-2 flex flex-col overflow-auto'>
      {conversations.map((conversation, idx) => (
        <User
          key={conversation._id}
          lastIdx={idx === conversations.length - 1}
          conversation={conversation}
          id={conversation._id}
          fullName={conversation.fullName}
          username={conversation.username}
          profilePic={conversation.profilePic}
        />
      ))}

      {loading ? <span className='loading loading-spinner mx-auto'></span> : null}
    </div>
  )
}

export default Users
