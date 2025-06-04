import React from 'react'

function AuthUserNameInput({ value, onChange }) {
  return (
    <div className="flex flex-col w-full">
      <p className="text-sm font-medium leading-[1.2] tracking-[-0.2px] text-left">Username</p>
      <input
        className="border text-white border-neutral-600 py-3 px-4 rounded-[8px] placeholder:text-neutral-500 bg-none w-full bg-transparent outline-none"
        type="text"
        name="username"
        placeholder="Username"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default AuthUserNameInput