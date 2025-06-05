// components/cards/ChatCard.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ChatCard({ user }) {
  const [unreadCount, setUnreadCount] = useState(0); 
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/chat", { state: { user } });
  };

  // Texto y hora del último mensaje
  const lastMsg = user.lastMessage?.trim() || "Start chatting…";
  const timeString = user.updatedAt
    ? user.updatedAt.toDate().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })
    : "";

  return (
    <div onClick={handleClick} className="group relative overflow-hidden">
      <div
        className="flex items-center gap-4 px-4 py-3 w-full cursor-pointer transition-all duration-300 ease-in-out 
        hover:bg-gradient-to-r hover:from-neutral-800/40 hover:to-neutral-700/20 active:bg-gradient-to-r active:from-neutral-800/40 active:to-neutral-700/20 border-b border-neutral-800/60 group-hover:border-neutral-700/80 group-active:border-neutral-700/80"
      >
        {/* Avatar */}
        <div className="relative flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-teal-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300" />
          <img
            src={user.avatar || "/avatar/profile-pic-2.png"}
            alt={`${user.username}'s avatar`}
            className="relative w-14 h-14 rounded-full object-cover ring-2 ring-transparent group-hover:ring-emerald-400/30 group-active:ring-emerald-400/30 transition-all duration-300 shadow-lg"
          />
          {/* Online indicator (decorativo) */}
          <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-emerald-500 border-3 border-neutral-900 rounded-full shadow-lg animate-pulse" />
        </div>

        {/* Contenido del chat */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            {/* Izquierda: nombre + último mensaje */}
            <div className="flex flex-col min-w-0 flex-1 space-y-1">
              <h2 className="text-white text-base font-semibold tracking-wide group-hover:text-emerald-100 group-active:text-emerald-100 transition-colors duration-300">
                {user.username}
              </h2>
              <p className="text-neutral-400 text-sm leading-relaxed group-hover:text-neutral-300 group-active:text-neutral-300 transition-colors duration-300 line-clamp-2">
                {lastMsg}
              </p>
            </div>

            {/* Derecha: hora + badge de no-leídos */}
            <div className="flex flex-col items-end gap-2 ml-4 flex-shrink-0">
              <p className="text-emerald-400 text-xs font-medium tracking-wider uppercase group-hover:text-emerald-300 group-active:text-emerald-300 transition-colors duration-300">
                {timeString}
              </p>
              {unreadCount > 0 && (
                <div className="relative">
                  <div className="absolute inset-0 bg-emerald-400 rounded-full blur-sm opacity-50 scale-110" />
                  <div className="relative flex items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-500 min-w-[20px] h-[20px] px-1.5 shadow-lg group-hover:scale-110 group-active:scale-110 transition-transform duration-300">
                    <span className="text-neutral-900 text-xs font-bold">{unreadCount}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Decoraciones */}
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-emerald-400/50 to-transparent opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300" />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </div>
  );
}

export default ChatCard;
