import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';

export default function PublicRoute({ children, restricted = false }) {
  const { isLoggedIn } = useAuth();
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to="/phonebook" /> : children;
}
