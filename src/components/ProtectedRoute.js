// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '../UserContext';

const ProtectedRoute = ({ component: Component, role }) => {
  const { role: userRole } = useUser(); // Get the role from context

  return userRole === role ? <Component /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
