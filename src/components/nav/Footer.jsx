import React from "react";
import FooterButton from "../buttons/FooterButton";

function Footer() {
  return (
    <div className="flex items-start justify-center w-full h-20 gap-10 backdrop-blur bg-gray-800/50 pt-1 fixed bottom-0">
      <FooterButton iconSrc="/src/assets/icons/general/messages.png" label="Chats" />
      <FooterButton iconSrc="/src/assets/icons/general/settings.png" label="Settings" />
    </div>
  );
}

export default Footer;
