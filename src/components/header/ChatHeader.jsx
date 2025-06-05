import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function ChatHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state?.user;

  // Redirige a la pantalla principal si no hay usuario seleccionado
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  // Si no hay usuario, no renderiza nada mientras redirige
  if (!user) return null;

  return (
    <div className="flex items-end justify-between pb-1 backdrop-blur-md bg-gray-900/80 h-28 fixed top-0 w-full z-10 border-b border-gray-700/50 shadow-xl">
      {/* Sección izquierda: botón atrás y datos del usuario */}
      <div className="flex items-center gap-1 px-4">
        {/* Botón atrás */}
        <button
          onClick={() => navigate("/")}
          className="p-2 cursor-pointer hover:bg-gray-700/50 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95"
        >
          <img
            src="/icons/general/arrow-left.png"
            alt="left arrow icon"
            className="w-6 h-6 opacity-80 hover:opacity-100 transition-opacity duration-200"
          />
        </button>

        {/* Info usuario */}
        <div className="flex items-center gap-3 group cursor-pointer py-2 px-2 rounded-xl hover:bg-gray-800/40 transition-all duration-200">
          <div className="relative">
            <img
              className="w-10 h-10 rounded-full border-2 border-gray-600/30 group-hover:border-emerald-400/50 transition-all duration-300 shadow-lg"
              src={user.avatar || "/avatar/profile-pic-1.png"}
              alt="avatar icon"
            />
          </div>
          <div className="flex flex-col">
            <h2 className="text-white text-base font-semibold tracking-wide group-hover:text-emerald-100 transition-colors duration-300">
              {user.username}
            </h2>
            <span className="text-xs text-gray-400 group-hover:text-emerald-200/80 transition-colors duration-300">
              En línea
            </span>
          </div>
        </div>
      </div>

      {/* Sección derecha: botones de acción */}
      <div className="flex items-center gap-2 px-4">
        {/* Video call */}
        <button className="p-2 rounded-xl hover:bg-gray-700/50 transition-all duration-200 hover:opacity-50 hover:cursor-not-allowed hover:scale-105 active:scale-95 group">
          <svg
            className="w-6 h-6 text-gray-400 group-hover:text-emerald-400 transition-colors duration-200"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17 10.5V7a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h12a1 1 0 001-1v-3.5l4 4v-11l-4 4z" />
          </svg>
        </button>
        {/* Voice call */}
        <button className="p-2 rounded-xl hover:opacity-50 hover:cursor-not-allowed hover:bg-gray-700/50 transition-all duration-200 hover:scale-105 active:scale-95 group">
          <svg
            className="w-6 h-6 text-gray-400 group-hover:text-emerald-400 transition-colors duration-200"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
        </button>
        {/* Más opciones */}
        <button className="p-2 rounded-xl hover:opacity-50 hover:cursor-not-allowed hover:bg-gray-700/50 transition-all duration-200 hover:scale-105 active:scale-95 group">
          <svg
            className="w-6 h-6 text-gray-400 group-hover:text-emerald-400 transition-colors duration-200"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default ChatHeader;
