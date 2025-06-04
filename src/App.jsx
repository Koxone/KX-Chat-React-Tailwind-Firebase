import { useState } from "react";
import Footer from "./components/nav/Footer";
import ChatListcontainer from "./components/containers/ChatListcontainer";
import MainView from "./pages/MainView";  
import ChatView from "./pages/ChatView";

function App() {
  return (
    <>
      {/* <MainView /> */}
      <ChatView />
    </>
  );
}

export default App;
