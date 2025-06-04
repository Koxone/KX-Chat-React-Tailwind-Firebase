import React from "react";

function ChatHeader() {
  return (
    <div className="flex items-end pb-2 pl-3 gap-5 backdrop-blur bg-gray-800/50 h-24">
      <button className="cursor-pointer hover:border hover:border-neutral-700 rounded-xl hover:bg-neutral-800 transition-normal duration-300">
        <img src="/icons/general/arrow-left.png" alt="left arrow icon" />
      </button>
      <div className="flex items-center gap-4 group cursor-pointer w-full">
        <img className="w-9" src="/avatar/profile-pic-1.png" alt="avatar icon" />
        <h2
          className="text-white text-base font-semibold tracking-wide group-hover:text-emerald-100 group-active:text-emerald-100 
              transition-colors duration-300"
        >
          Jenny
        </h2>
      </div>
    </div>
  );
}

export default ChatHeader;
