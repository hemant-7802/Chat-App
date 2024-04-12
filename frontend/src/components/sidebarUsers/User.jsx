import useConversation from "../../zustand/useConversation"

const User = ({ conversation, lastIdx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation()

  const isSelected = selectedConversation?._id === conversation._id
  return (
    <>
      <div className={`flex gap-3 items-center hover:bg-gray-600 rounded p-2 py-1.5 cursor-pointer ${isSelected ? "bg-gray-600" : ""}`} onClick={()=> setSelectedConversation(conversation)}>
        <div className='avatar online'>
          <div className='w-12 rounded-full'>
            <img
              src={conversation.profilePic}
              alt="User Avatar"
            />
          </div>
        </div>

        <div className='flex flex-col flex-1'>
          <div className='flex flex-col'>
            <p className='font-bold text-gray-200'>{conversation.fullName}</p>
            <span className='text-sm'>{conversation.username}</span>
          </div>
        </div>
      </div>

      {!lastIdx && <div className='divider my-0 py-0 h-1' />}
    </>
  )
}

export default User
