import React from "react";
import ChatHeader from "../components/header/ChatHeader";
import ChatFooter from "../components/footer/ChatFooter";
import MessagesContainer from "../components/containers/MessagesContainer";

function ChatView() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-[url('/background/background.png')] bg-cover bg-center min-h-screen w-full">
      <ChatHeader />
      <MessagesContainer />
      <ChatFooter />
    </div>
  );
}

export default ChatView;
