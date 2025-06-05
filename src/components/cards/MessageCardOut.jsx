// MessageCardOut.jsx
import React from "react";

function MessageCardOut({ text, time }) {
  return (
    <div className="bg-neutral-500 text-white px-4 py-2 rounded-full flex self-start items-center gap-2 shadow-lg w-max max-w-[335px] relative">
      <span className="absolute -bottom-[8px] left-[10px] w-0 h-0 border-t-[12px] border-t-neutral-500 border-r-[12px] border-r-transparent" />
      <span className="text-sm font-medium break-words flex-1 min-w-0">
        {text}
      </span>
      <span className="text-xs opacity-80 ml-auto">{time}</span>
    </div>
  );
}

export default MessageCardOut;
