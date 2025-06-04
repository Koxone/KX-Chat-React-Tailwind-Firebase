import React from "react";
import SearchInput from "../inputs/SearchInput";

function MainHeader() {
  return (
    <div className="flex flex-col gap-3 p-4">
      <h1 className="text-[34px] font-bold text-white">Chats</h1>
      <SearchInput />
    </div>
  );
}

export default MainHeader;
