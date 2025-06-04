import { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import MainView from "./pages/MainView";
import ChatView from "./pages/ChatView";
import SignUpView from "./pages/SignUpView";
import AuthLoginView from "./pages/AuthLoginView";
import RequireAuth from "./components/auth/RequireAuth";

function App() {
  return (
    <AuthProvider>
      <HashRouter>
        <Routes>
          {/* Ruta protegida */}
          <Route
            path="/"
            element={
              <RequireAuth>
                <MainView />
              </RequireAuth>
            }
          />
          <Route
            path="/chat"
            element={
              <RequireAuth>
                <ChatView />
              </RequireAuth>
            }
          />
          {/* Rutas públicas */}
          <Route path="/signup" element={<SignUpView />} />
          <Route path="/login" element={<AuthLoginView />} />
        </Routes>
      </HashRouter>
    </AuthProvider>
  );
}

export default App;
