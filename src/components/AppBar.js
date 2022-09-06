import Navigation from './Navigation';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
//import { useAuth } from 'hooks';

export default function AppBar() {
  //const { isLoggedIn } = useAuth();
  return (
    <header>
      <Navigation />
      <UserMenu />
      <AuthNav />
      {/*isLoggedIn ? <UserMenu /> : <AuthNav />*/}
    </header>
  );
}
