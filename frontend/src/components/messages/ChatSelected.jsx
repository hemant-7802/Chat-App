import React from "react";
import User from '../sidebarUsers/User'
import Messages from './Messages'
import Input from '../inputs/Input'
import Button from '../Buttons/Button'
import { BsSend } from "react-icons/bs";

const ChatSelected = () => {
    return (
        <>
            <User fullName='Hemant Bhargav' />
            <Messages />
            <form action="" className='px-3 relative'>
                <Input classname='focus:ring-0 focus:outline-none border-none text-sm rounded-xl' labelValue='false' placeholder='Type a message...' />
                <Button type='submit' className='absolute flex items-center inset-y-0 pe-8 end-0' btnName={<BsSend />} />
            </form>
        </>
    )
}

export default ChatSelected