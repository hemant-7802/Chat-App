import React from 'react'
import ChatSelected from './ChatSelected'
import NoChatSelected from './NoChatSelected'

const MessagesContainer = () => {
  const noChatSelected = true;
  return (
    <div className='hidden sm:flex flex-col w-[50%]'>
      {noChatSelected ==true ? <NoChatSelected /> : <ChatSelected />}
    </div>
  )
}

export default MessagesContainer
