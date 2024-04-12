import React, { useState } from 'react'
import Input from '../inputs/Input'
import Button from '../Buttons/Button'
import { IoSearchSharp } from "react-icons/io5";
import useConversation from '../../zustand/useConversation';
import useGetConversations from '../../hooks/useGetConversations';
import toast from 'react-hot-toast';

const SearchInput = () => {
  const [search, setSearch] = useState("")
  const {setSelectedConversation} = useConversation()
  const {conversations} = useGetConversations()

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!search) return;
    if(search.length < 3){
      return toast.error("Search term must be at least 3 character long")
    }

    const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()))

    if(conversation) {
      setSelectedConversation(conversation)
      setSearch('')
    } else toast.error('No such user found!');
  }
  return (
    <form onSubmit={handleSubmit} className='py-2 w-full flex gap-2 items-center'>
      <Input type='text' placeholder='Search...' labelValue='false' classname='rounded-full w-full outline-none shadow-none' divClassname='gap-0 p-0 w-full' value={search} onChange={(e) => setSearch(e.target.value)}/>
      <Button className='btn btn-circle bg-purple-600 hover:bg-purple-700 text-gray-200' btnName={<IoSearchSharp className='text-2xl' />} type='submit' disabled={false}/>
    </form>
  )
}

export default SearchInput
