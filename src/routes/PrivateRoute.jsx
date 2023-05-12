import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (user) {
    return children;
  }

  //   replace is used so that this redirection is not saved in history
  return <Navigate to="/login" replace></Navigate>;
};

export default PrivateRoute;
