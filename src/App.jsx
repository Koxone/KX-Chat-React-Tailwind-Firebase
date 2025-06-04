import { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import MainView from "./pages/MainView";  
import ChatView from "./pages/ChatView";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainView />} />
        <Route path="/chat" element={<ChatView />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
