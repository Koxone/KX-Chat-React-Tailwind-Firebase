import React from "react";

function UserSearchModal({ results, visible, inputRef }) {
  if (!visible) return null;

  return (
    <div
      className="absolute left-1/2 -translate-x-1/2 mt-2 z-50 bg-[#181B1B] border border-neutral-800 rounded-xl shadow-xl max-h-72 overflow-y-auto"
      style={{
        width: 200,
      }}
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
              className="cursor-pointer p-3 hover:bg-neutral-700 flex items-center justify-center gap-2"
            >
              <span className="font-semibold text-white">@{user.username}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserSearchModal;
