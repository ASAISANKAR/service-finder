import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '../UserContext';

const ProtectedRoute = ({ role, component: Component }) => {
  const { role: userRole } = useUser();

  if (userRole !== role) {
    return <Navigate to="/login" />;
  }

  return <Component />;
};

export default ProtectedRoute;
