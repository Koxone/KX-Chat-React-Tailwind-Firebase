import React from "react";

function MessageCardOut() {
  return (
    <div className="bg-neutral-500 text-white px-4 py-2 rounded-full flex self-start items-center gap-2 shadow-lg w-max max-w-[335px] relative">
      <span className="absolute -bottom-[8px] left-[10px] w-0 h-0 border-t-[12px] border-t-neutral-500 border-r-[12px] border-r-transparent" />

      {/* Icono para mensaje temporal */}
      {/* <div className="">
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="4 4"
        >
          <circle cx="12" cy="12" r="9" />
        </svg>
      </div> */}

      {/* Texto */}
      <span className="text-sm font-medium break-words flex-1 min-w-0">koxone</span>

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

export default MessageCardOut;
