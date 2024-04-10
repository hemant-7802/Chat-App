import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessagesContainer from '../../components/messages/MessagesContainer'

const Home = () => {
  return (
    <div className='flex w-full h-[90vh] justify-center'>
      <Sidebar />
      <MessagesContainer />
    </div>
  )
}

export default Home
