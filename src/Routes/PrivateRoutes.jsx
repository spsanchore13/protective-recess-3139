import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../Contexts/AppContext";

function PrivateRoutes({ children }) {
  const { isAuth } = useContext(AppContext);

  if (!isAuth) {
    return <Navigate to="/" />;
  }

  return children;
}

export default PrivateRoutes;
