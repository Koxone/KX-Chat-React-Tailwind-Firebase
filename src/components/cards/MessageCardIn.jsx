// MessageCardIn.jsx
import React from "react";

function MessageCardIn({ text, time }) {
  return (
    <div className="bg-green-600 text-white px-4 py-2 rounded-full flex self-end items-center gap-2 shadow-lg w-max max-w-[335px] relative">
      <span className="absolute -bottom-[5px] right-[4px] w-0 h-0 border-t-[12px] border-t-green-600 border-l-[12px] border-l-transparent" />
      <span className="text-sm font-medium break-words flex-1 min-w-0">
        {text}
      </span>
      <span className="text-xs opacity-80 ml-auto">{time}</span>
    </div>
  );
}

export default MessageCardIn;
