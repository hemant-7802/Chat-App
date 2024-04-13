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
    <div className={`${selectedConversation ? 'w-[100%] sm:w-[70%] flex' : 'hidden sm:flex w-[70%]'} flex-col`}>
      {!selectedConversation ? <NoChatSelected /> : <ChatSelected selectedConversation={selectedConversation} />}
    </div>
  )
}

export default MessagesContainer
