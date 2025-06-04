import React from "react";

function SearchInput() {
  return (
    <div className="flex items-center border border-transparent p-1 bg-[#232626] rounded-2xl">
      <img src="/src/assets/icons/general/search.png" alt="icon" />
      <input
        className="text-[var(--text-color-main)] text-xs placeholder:text-sm outline-none w-full"
        type="text"
        placeholder="Search or start a new chat"
      />
    </div>
  );
}

export default SearchInput;
