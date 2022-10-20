import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { iUserProviderData, UserContext } from "../../contexts/UserContext";

function ProtectedRoutes() {
  const { user } = useContext<iUserProviderData>(UserContext);

  return user ? <Outlet /> : <Navigate to="/login" replace />;
}

export default ProtectedRoutes;
