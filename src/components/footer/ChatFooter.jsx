import React from "react";
import ChatSendButton from "../buttons/ChatSendButton";

function ChatFooter() {
  return (
    <div className="flex items-start justify-center w-full h-20 gap-10 backdrop-blur bg-gray-800/50 pt-1 fixed bottom-0">
      <div className="flex items-center w-full px-6 gap-4 pt-1">
        <input
          className="text-[var(--text-color-main)] rounded-2xl p-2 bg-[#272727] text-base placeholder:text-sm outline-none w-full border-transparent"
          type="text"
        />
        <ChatSendButton />
      </div>
    </div>
  );
}

export default ChatFooter;
