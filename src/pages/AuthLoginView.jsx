import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

// Firebase
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig"; // Ajusta la ruta según tu estructura

// Componentes UI
import AuthMailInput from "../components/inputs/AuthMailInput";
import AuthPasswordInput from "../components/inputs/AuthPasswordInput";

function AuthLoginView() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/"); // Redirige al home
    } catch (error) {
      alert("Invalid email or password");
      console.log(error);
    }
  };

  return (
    <div className="bg-[var(--foreground)] w-full min-h-screen rounded-2xl py-12 px-4 flex flex-col justify-center items-center gap-4">
      <img className="w-20" src="/public/Logo.png" alt="icon logo" />
      <p className="text-gray-400">Sign in to chat!</p>

      <form className="w-full flex flex-col gap-4" onSubmit={handleLogin}>
        <AuthMailInput text="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
        <AuthPasswordInput text="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white text-[16px] py-3 rounded-[8px] cursor-pointer w-full"
        >
          Login
        </button>
      </form>

      <div className="mt-4 text-white">
        No account yet?{" "}
        <Link to="/signup" className="text-blue-400 underline">
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default AuthLoginView;
