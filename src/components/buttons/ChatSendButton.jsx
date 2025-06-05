import React from "react";

const ChatSendButton = ({ onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`p-2 rounded-full transition-all ${
      disabled
        ? "opacity-40 cursor-not-allowed"
        : "bg-emerald-500 hover:bg-emerald-600 text-white"
    }`}
  >
    <img src="/icons/general/send.png" alt="send" className="w-5 h-5" />
  </button>
);

export default ChatSendButton;
