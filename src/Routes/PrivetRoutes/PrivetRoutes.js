import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-secondary"></div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ form: location }} replace />;
};

export default PrivetRoutes;
