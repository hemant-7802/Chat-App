import React, { useState } from "react";
import User from '../sidebarUsers/User'
import Messages from './Messages'
import Input from '../inputs/Input'
import Button from '../Buttons/Button'
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

const ChatSelected = () => {

    const [message, setMessage] = useState("")
    const {loading, sendMessage} = useSendMessage()
    console.log(message)

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!message) return;
        await sendMessage(message);
        setMessage("");
    }
    return (
        <>
            {/* <User key={} /> */}
            <Messages />
            <form onSubmit={handleSubmit} className='px-3 relative' >
                <Input classname='focus:ring-0 focus:outline-none border-none text-sm rounded-xl' labelValue='false' placeholder='Type a message...' value={message} onChange = {(e) => setMessage(e.target.value)}/>
                <Button type='submit' className=' bg-red-500 flex items-center inset-y-0 pe-8 end-0 z-10 hover:bg-blue-400' disabled={loading} btnName={loading ? <div className="loading loading-spinner"></div> : <BsSend className="cursor-pointer hover:text-gray-200"/>}/>
            </form>
        </>
    )
}

export default ChatSelected