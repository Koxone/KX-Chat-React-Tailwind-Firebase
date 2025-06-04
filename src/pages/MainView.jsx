import React from "react";
import Footer from "../components/nav/Footer";
import ChatListcontainer from "../components/containers/ChatListcontainer";
import MainHeader from "../components/header/MainHeader";

function MainView() {
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      <MainHeader />
      <div className="flex-1 overflow-y-auto scroll-smooth pb-20">
        <ChatListcontainer />
      </div>
      <Footer />
    </div>
  );
}

export default MainView;
