import { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import MainView from "./pages/MainView";
import ChatView from "./pages/ChatView";
import SignUpView from "./pages/SignUpView";
import AuthLoginView from "./pages/AuthLoginView";
import RequireAuth from "./components/auth/RequireAuth";
import UsersList from "./components/auth/UserList";

function App() {
  return (
    <AuthProvider>
      <HashRouter>
        <Routes>
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
          <Route path="/signup" element={<SignUpView />} />
          <Route path="/login" element={<AuthLoginView />} />
          <Route
            path="/users"
            element={
              <RequireAuth>
                <UsersList />
              </RequireAuth>
            }
          />
        </Routes>
      </HashRouter>
    </AuthProvider>
  );
}

export default App;
