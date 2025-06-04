import React from "react";
import { useAuth } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

function RequireAuth({ children }) {
  const { user } = useAuth();

  if (user === undefined) {
    return <div className="text-white text-center">Cargando...</div>;
  }

  if (!user) {
    return <Navigate to="/signup" replace />;
  }

  return children;
}

export default RequireAuth;
