import React from "react";
import ChatSendButton from "../buttons/ChatSendButton";

function ChatFooter() {
  return (
    <div className="fixed bottom-0 h-20 inset-x-0 backdrop-blur-md bg-gray-800/60 border-t border-gray-700 shadow-[0_-2px_8px_rgba(0,0,0,0.45)]">
      <div className="mx-auto flex max-w-3xl items-center gap-4 px-6 py-3">
        <input
          className="flex-1 rounded-full bg-gray-700/70 px-4 py-2 text-base text-[var(--text-color-main)] placeholder-gray-400 outline-none "
          type="text"
        />
        <ChatSendButton />
      </div>
    </div>
  );
}

export default ChatFooter;
