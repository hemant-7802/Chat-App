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
    <div className='flex flex-col w-[70%]'>
      {!selectedConversation ? <NoChatSelected /> : <ChatSelected selectedConversation={selectedConversation}/>}
    </div>
  )
}

export default MessagesContainer
