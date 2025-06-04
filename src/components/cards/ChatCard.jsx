import React from "react";

function ChatCard() {
  return (
    <div className="group relative overflow-hidden">
      {/* Container with border bottom that matches height */}
      <div className="flex items-center gap-4 px-4 py-3 w-full cursor-pointer transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-neutral-800/40 hover:to-neutral-700/20 active:bg-neutral-700/30 border-b border-neutral-800/60 group-hover:border-neutral-700/80">
        {/* Avatar with glow effect */}
        <div className="relative flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-teal-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <img
            src="/src/assets/avatar/Profile pic-1.png"
            alt="Mom's avatar"
            className="relative w-14 h-14 rounded-full object-cover ring-2 ring-transparent group-hover:ring-emerald-400/30 transition-all duration-300 shadow-lg"
          />
          {/* Online indicator */}
          <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-emerald-500 border-3 border-neutral-900 rounded-full shadow-lg animate-pulse"></div>
        </div>

        {/* Chat content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            {/* Left content */}
            <div className="flex flex-col min-w-0 flex-1 space-y-1">
              <h2 className="text-white text-base font-semibold tracking-wide group-hover:text-emerald-100 transition-colors duration-300">
                Mom
              </h2>
              <p className="text-neutral-400 text-sm leading-relaxed group-hover:text-neutral-300 transition-colors duration-300 line-clamp-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...
              </p>
            </div>

            {/* Right content */}
            <div className="flex flex-col items-end gap-2 ml-4 flex-shrink-0">
              <p className="text-emerald-400 text-xs font-medium tracking-wider uppercase group-hover:text-emerald-300 transition-colors duration-300">
                12:30 PM
              </p>
              <div className="relative">
                {/* Glow effect behind badge */}
                <div className="absolute inset-0 bg-emerald-400 rounded-full blur-sm opacity-50 scale-110"></div>
                {/* Badge */}
                <div className="relative flex items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-500 min-w-[20px] h-[20px] px-1.5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-neutral-900 text-xs font-bold">3</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle left accent line */}
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-emerald-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      </div>
    </div>
  );
}

export default ChatCard;
