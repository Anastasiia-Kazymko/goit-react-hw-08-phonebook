import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children }) {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? children : <Navigate to="/login" />;
}
