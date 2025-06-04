import React from "react";

function MessageCardIn() {
  return (
    <div className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-lg max-w-xs">
      {/* Icono de WhatsApp */}
      <div className="w-5 h-5 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>

      {/* Texto */}
      <span className="text-sm font-medium">Opened</span>

      {/* Hora */}
      <span className="text-xs opacity-80 ml-auto">10:21</span>

      {/* Doble check azul */}
      <div className="flex">
        <svg className="w-4 h-4 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          ></path>
        </svg>
        <svg className="w-4 h-4 text-blue-300 -ml-1" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default MessageCardIn;
