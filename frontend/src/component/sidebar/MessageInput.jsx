// @ts-nocheck
import React, { useState } from "react";
import { RiSendPlane2Fill } from "react-icons/ri";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
  const [ message, setMessage ] = useState("")
  const { loading, sendMessage } = useSendMessage()

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log("submit clicked")
    if (!message) return
    await sendMessage(message)
    setMessage("")
  }
  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
          placeholder="Send a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3">
            {loading ? <div className="laoding loading-spinner"></div> : <RiSendPlane2Fill />}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
