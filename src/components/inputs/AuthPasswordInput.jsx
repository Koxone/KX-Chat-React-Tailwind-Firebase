"use client";
import { useState } from "react";

function AuthPasswordInput({ text = "", className = "", atLeast = "", value, onChange }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col gap-1.5 w-full">
      <div className="flex flex-row justify-between items-center">
        <p className="text-sm font-medium leading-[1.2] tracking-[-0.2px] text-left">{text}</p>
      </div>

      <div className="w-full relative">
        <input
          className={`${className} text-white border border-neutral-600 py-3 w-full px-4 rounded-[8px] placeholder:text-neutral-500 bg-none bg-transparent outline-none`}
          type="password"
          name="password"
          required
          minLength={8}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default AuthPasswordInput;
