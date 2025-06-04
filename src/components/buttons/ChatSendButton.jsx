import React from "react";

function ChatSendButton() {
  return (
    <button className="grid place-items-center w-8 h-8 rounded-full bg-green-600 cursor-pointer hover:bg-teal-400 active:scale-95 transition transform duration-150 shadow-lg">
      <img className="w-5 h-5" src="/icons/general/send.png" alt="send icon" />
    </button>
  );
}

export default ChatSendButton;
