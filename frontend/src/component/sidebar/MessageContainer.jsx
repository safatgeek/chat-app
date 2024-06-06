import React, { useEffect } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { TiMessages } from "react-icons/ti";
import useConversation from "../../zustand/useConversation";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => { 
  const {selectedConversation, setSelectedtedConversation} = useConversation()
  
  
  useEffect(() => {
    return () => setSelectedtedConversation(null)
  }, [setSelectedtedConversation])
  
  return (
    <div className="md:min-w-[450px] flex flex-col">
      {!selectedConversation ? (
    
        // @ts-ignore
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-slate-500 px-4 py-2 mb-2">
            <span className="label-text">To:</span>{" "}
            <span className="text-gray-900 font-bold">{selectedConversation.fullname}</span>
          </div>

          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  const { authUser } = useAuthContext()
  return (
    <div className="flex items-center justify-center w-full h-full">
    <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
      <p>Welcome 👋 {authUser.fullname}</p>
      <img src={authUser.profilePic} className="w-12 rounded-full" />
      <p>Select a chat to start messaging</p>
      <TiMessages className="text-3xl md:text-6xl" />
    </div>
  </div>
  )
};
