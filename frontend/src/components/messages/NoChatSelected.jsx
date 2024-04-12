import React from "react";
import { LuMessagesSquare } from "react-icons/lu";
import { useAuthContext } from "../../context/AuthContext";

const NoChatSelected = () => {
    const {authUser} = useAuthContext()

    return (
        <div className="flex justify-center items-center h-full">
            <div className="flex flex-col gap-2 justify-center items-center">
                <h1 className="text-3xl capitalize">welcome <strong className="text-blue-500">{authUser.fullName}</strong></h1>
                <p className="text-lg">Select a chat to start conversataion</p>
                <LuMessagesSquare className="text-7xl text-blue-400" />
            </div>
        </div>
    )
}

export default NoChatSelected