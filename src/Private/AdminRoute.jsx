import React, { Children } from "react";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = ({ Children }) => {
  const { user, loader } = useAuth();
  const [isAdmin, isLoading] = useAdmin();
  const location = useLocation();

  if (loader || isLoading) {
    return <progress className="progress w-56"></progress>;
  }
  if (user) {
    return Children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
