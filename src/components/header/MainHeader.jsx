// MainHeader.jsx
import React from "react";
import SearchInput from "../inputs/SearchInput";

function MainHeader({ search, setSearch, inputRef, onFocus }) {
  return (
    <div className="flex flex-col gap-3 p-4 relative" ref={inputRef}>
      <h1 className="text-[34px] font-bold text-white">Chats</h1>
      <SearchInput
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onFocus={onFocus}
      />
    </div>
  );
}

export default MainHeader;
