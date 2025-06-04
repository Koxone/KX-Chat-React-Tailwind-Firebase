import { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import MainView from "./pages/MainView";  
import ChatView from "./pages/ChatView";
import SignUpView from "./pages/SignUpView";
import AuthLoginView from "./pages/AuthLoginView";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainView />} />
        <Route path="/chat" element={<ChatView />} />
        <Route path="/signup" element={<SignUpView />} />
        <Route path="/login" element={<AuthLoginView />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
