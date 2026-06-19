import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

export default function HomeRedirect() {
  const { getHomePath } = useAuth();

  return <Navigate to={getHomePath()} replace />;
}
