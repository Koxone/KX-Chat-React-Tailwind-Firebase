import React from "react";

function ChatSendButton() {
  return (
    <button className="flex items-center justify-center w-8 h-8 p-1 cursor-pointer bg-green-600 rounded-full hover:bg-green-300 transition-colors duration-200">
      <img src="/icons/general/send.png" alt="send icon" />
    </button>
  );
}

export default ChatSendButton;
