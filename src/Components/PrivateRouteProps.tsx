// Guarding Routes with TypeScript in React
 import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import ProtectedComponent from './ProtectedComponent'; 

interface PrivateRouteProps {
  element: React.ReactNode;
  isAuthenticated: boolean;
  path?: string;  
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element, isAuthenticated, ...rest }) => {
  return isAuthenticated ? (
    <Route {...rest} element={<ProtectedComponent />} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;
