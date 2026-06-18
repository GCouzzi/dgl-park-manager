import type { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import type { Role } from '../config/navigation';
import { homePathForRole } from './auth';
import { useAuth } from './AuthContext';

interface ProtectedRouteProps {
  children: ReactNode;
  allowedRoles?: Role[];
}

export default function ProtectedRoute({ children, allowedRoles }: ProtectedRouteProps) {
  const location = useLocation();
  const { appRole, isAuthenticated } = useAuth();

  if (!isAuthenticated || !appRole) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  if (allowedRoles && !allowedRoles.includes(appRole)) {
    return <Navigate to={homePathForRole(appRole)} replace />;
  }

  return <>{children}</>;
}
