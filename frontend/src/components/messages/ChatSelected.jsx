import React, { useState } from "react";
import User from '../sidebarUsers/User'
import Messages from './Messages'
import Input from '../inputs/Input'
import Button from '../Buttons/Button'
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

const ChatSelected = ({ selectedConversation }) => {

    const [message, setMessage] = useState("")
    const { loading, sendMessage } = useSendMessage()

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!message) return;
        await sendMessage(message);
        setMessage("");
    }
    return (
        <>
            <User fullName={selectedConversation.fullName} profilePic={selectedConversation.profilePic} username={"Tap here to exit chat"} activeClassName={`${selectedConversation ? "online" : ""}`}/>
            <Messages />
            <form onSubmit={handleSubmit} className='px-2 relative' >
                <Input classname='ring-0 outline-none focus:ring-0 focus:outline-none border-none text-sm rounded-xl' labelValue='false' placeholder='Type a message...' value={message} onChange={(e) => setMessage(e.target.value)} />
                <Button type='submit' className='absolute flex items-center inset-y-0 pe-6 end-0' disabled={loading} btnName={loading ? <div className="loading loading-spinner"></div> : <BsSend className="cursor-pointer hover:text-gray-200" />} />
            </form>
        </>
    )
}

export default ChatSelected