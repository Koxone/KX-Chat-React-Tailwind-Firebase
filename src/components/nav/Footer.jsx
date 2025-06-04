import React from "react";
import FooterButton from "../buttons/FooterButton";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig"; // Ajusta la ruta

function Footer() {
  const navigate = useNavigate();

  const handleClick = async () => {
    await signOut(auth);
    navigate("/signup");
  };

  return (
    <div className="flex items-start justify-center w-full h-20 gap-10 backdrop-blur bg-gray-800/50 pt-1 fixed bottom-0">
      <FooterButton iconSrc="/icons/general/messages.png" label="Chats" />
      <FooterButton onClick={handleClick} iconSrc="/icons/general/logout.svg" label="Logout" />
    </div>
  );
}

export default Footer;
