import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

// Firebase Auth
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

// Componentes de UI
import AuthMailInput from "../components/inputs/AuthMailInput";
import AuthPasswordInput from "../components/inputs/AuthPasswordInput";
import AuthUserNameInput from "../components/inputs/AuthUserNameInput";

// 👇 Función para subir imagen a ImgBB
import { uploadAvatarImgbb } from "../utils/uploadAvatarImgbb";

function SignUpView() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [avatarFile, setAvatarFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;

      let avatarUrl = "";
      if (avatarFile) {
        avatarUrl = await uploadAvatarImgbb(avatarFile);
      }

      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        username: username,
        avatar: avatarUrl,
        createdAt: serverTimestamp(),
      });

      navigate("/");
    } catch (error) {
      alert("Registration error");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[var(--foreground)] w-full min-h-screen rounded-2xl py-12 px-4 flex flex-col justify-center items-center gap-4">
      <img className="w-20" src="/Logo.png" alt="icon logo" />
      <p className="text-gray-400">Sign up to chat!</p>

      <form className="w-full flex flex-col gap-4" onSubmit={handleSignUp}>
        <AuthUserNameInput value={username} onChange={(e) => setUsername(e.target.value)} />
        <AuthMailInput onChange={(e) => setEmail(e.target.value)} value={email} text="Email Address" />
        <AuthPasswordInput
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          text="Password"
          atLeast="At least 8 characters"
        />

        {/* Avatar uploader con preview y estilos */}
        <div className="flex flex-col items-center gap-2">
          <label
            htmlFor="avatar-input"
            className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-gray-600/60 flex items-center justify-center active:scale-95 transition-transform cursor-pointer"
          >
            {avatarFile ? (
              <img src={URL.createObjectURL(avatarFile)} alt="preview" className="object-cover w-full h-full" />
            ) : (
              <svg className="w-10 h-10 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12a3 3 0 100-6 3 3 0 000 6z" />
                <path
                  fillRule="evenodd"
                  d="M2 18a4 4 0 014-4h12a4 4 0 014 4v1a1 1 0 11-2 0v-1a2 2 0 00-2-2H6a2 2 0 00-2 2v1a1 1 0 11-2 0v-1z"
                  clipRule="evenodd"
                />
              </svg>
            )}
            <span className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 bg-emerald-500 text-white w-7 h-7 rounded-full flex items-center justify-center shadow-md ring-2 ring-gray-900/50">
              +
            </span>
          </label>

          <input
            id="avatar-input"
            type="file"
            accept="image/*"
            onChange={(e) => setAvatarFile(e.target.files[0] || null)}
            className="hidden"
          />

          <span className="text-xs text-gray-400">Tap to add photo</span>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-green-500 hover:bg-green-700 text-white text-[16px] py-3 rounded-[8px] cursor-pointer w-full"
        >
          {loading ? "Creating..." : "Sign Up"}
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
