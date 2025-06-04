import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

// Firebase Auth
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

// Componentes de UI
import AuthMailInput from "../components/inputs/AuthMailInput";
import AuthPasswordInput from "../components/inputs/AuthPasswordInput";

function SignUpView() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault(); // Previene el reload si usas form
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/"); // Redirige al home
    } catch (error) {
      alert("Invalid email or password");
      console.log(error);
    }
  };

  const handleFoToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="bg-[var(--foreground)] w-full min-h-screen rounded-2xl py-12 px-4 flex flex-col justify-center items-center gap-4">
      <img className="w-20" src="/public/Logo.png" alt="icon logo" />
      <p className="text-gray-400">Sign up to chat!</p>

      <form className="w-full flex flex-col gap-4" onSubmit={handleSignUp}>
        <AuthMailInput onChange={(e) => setEmail(e.target.value)} value={email} text="Email Address" />
        <AuthPasswordInput
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          text="Password"
          atLeast="At least 8 characters"
        />
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white text-[16px] py-3 rounded-[8px] cursor-pointer w-full"
        >
          Sign Up
        </button>
      </form>

      <div className="mt-4 text-white">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-400 underline">
          Login
        </Link>
      </div>
    </div>
  );
}

export default SignUpView;
