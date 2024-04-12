import React, { useEffect } from 'react'
import ChatSelected from './ChatSelected'
import NoChatSelected from './NoChatSelected'
import useConversation from '../../zustand/useConversation'

const MessagesContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation()

  useEffect(() => {

    // Cleanup Function
    return () => setSelectedConversation(null)
  }, [setSelectedConversation])
  return (
    <div className='hidden sm:flex flex-col w-[50%]'>
      {!selectedConversation ? <NoChatSelected /> : <ChatSelected />}
    </div>
  )
}

export default MessagesContainer
