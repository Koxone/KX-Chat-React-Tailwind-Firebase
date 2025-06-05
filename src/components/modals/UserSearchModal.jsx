import React from "react";
import { useNavigate } from "react-router-dom";

function UserSearchModal({ results, visible, inputRef }) {
  const navigate = useNavigate();

  if (!visible) return null;

  const handleUserSelect = (user) => {
    navigate("/chat", { state: { user } });
  };

  return (
    <div
      className="absolute left-1/2 -translate-x-1/2 mt-2 z-50 bg-[#181B1B] border border-neutral-800 rounded-xl shadow-xl max-h-72 overflow-y-auto"
      style={{ width: 200 }}
    >
      {results.length === 0 ? (
        <div className="p-4 text-gray-400 text-center">
          No se encontró ningún usuario.
        </div>
      ) : (
        <ul>
          {results.map((user) => (
            <li
              key={user.uid}
              /* Usamos onMouseDown para que dispare antes del blur/focus-out */
              onMouseDown={() => handleUserSelect(user)}
              className="cursor-pointer p-3 hover:bg-neutral-700 flex items-center justify-center gap-2"
            >
              <span className="font-semibold text-white">
                @{user.username}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserSearchModal;
