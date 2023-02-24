import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const token = window.localStorage.getItem("token");

  if (!token || token === "undefined") {
    // user is not authenticated
    return <Navigate to="/login" />;
  }
  return children;
};
