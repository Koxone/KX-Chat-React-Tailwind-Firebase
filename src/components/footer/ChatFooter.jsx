import React from "react";
import FooterButton from "../buttons/FooterButton";

function ChatFooter() {
  return (
    <div className="flex items-start justify-center w-full h-20 gap-10 backdrop-blur bg-gray-800/50 pt-1 fixed bottom-0 border border-white">
      <div className="w-full px-6 pt-1">
        <input
          className="text-[var(--text-color-main)] rounded-2xl p-2 bg-[#272727] text-xs placeholder:text-sm outline-none w-full border-transparent"
          type="text"
        />
      </div>
    </div>
  );
}

export default ChatFooter;
