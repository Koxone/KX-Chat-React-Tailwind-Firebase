import React from "react";

function SearchInput() {
  return (
    <div className="flex items-center border border-transparent p-1 bg-[#232626] rounded-2xl">
      <img src="/icons/general/search.png" alt="icon" />
      <input
        className="text-[var(--text-color-main)] text-base placeholder:text-sm outline-none w-full"
        type="text"
        placeholder="Search by Username or Chat Name"
      />
    </div>
  );
}

export default SearchInput;
