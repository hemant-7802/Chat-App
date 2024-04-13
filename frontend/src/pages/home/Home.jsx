import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessagesContainer from '../../components/messages/MessagesContainer'

const Home = () => {
  return (
    <div className='home flex w-[95%] sm:w-[80%] h-[90vh] justify-center bg-gray-900 rounded-2xl p-2 shadow-xl'>
      <Sidebar />
      <MessagesContainer />
    </div>
  )
}

export default Home
