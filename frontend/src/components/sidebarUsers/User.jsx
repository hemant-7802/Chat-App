import { useSocketContext } from "../../context/SocketContext"
import useConversation from "../../zustand/useConversation"

const User = ({ conversation, id, fullName, username, profilePic, lastIdx, className='', activeClassName ='' }) => {
  const { selectedConversation, setSelectedConversation } = useConversation()

  const isSelected = selectedConversation?._id === id
  // const defaultSelected = false;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(id);
  return (
    <>
      <div className={`flex gap-3 items-center hover:bg-gray-800 transition-all duration-200 rounded-xl p-2 py-1.5 cursor-pointer ${isSelected ? "bg-gray-900" : ""} ${className}`} onClick={() => setSelectedConversation(conversation)}>
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className='w-12 rounded-full'>
            <img
              src={profilePic}
              alt="User Avatar"
            />
          </div>
        </div>

        <div className='flex flex-col flex-1'>
          <div className='flex flex-col'>
            <p className='font-semibold tracking-wide text-gray-200'>{fullName}</p>
            <span className='text-sm'>{username}</span>
          </div>
        </div>
      </div>

      {!lastIdx && <div className='divider my-0 py-0 h-1' />}
    </>
  )
}

export default User
