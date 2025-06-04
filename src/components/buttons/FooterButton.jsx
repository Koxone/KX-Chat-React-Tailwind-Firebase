import React from "react";

function FooterButton({ iconSrc, label }) {
  return (
    <button className="flex flex-col items-center text-[#959394] text-[9px] cursor-pointer">
      <img src={iconSrc} alt={label} />
      {label}
    </button>
  );
}

export default FooterButton;