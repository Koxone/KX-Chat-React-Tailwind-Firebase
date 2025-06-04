import React from "react";

function FooterButton({ iconSrc, label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center text-[#959394] text-[9px] cursor-pointer w-14 transition-all duration-300 ease-in-out hover:bg-neutral-800 hover:rounded-2xl p-1 hover:border border-neutral-700"
    >
      <img src={iconSrc} alt={label} />
      {label}
    </button>
  );
}

export default FooterButton;
