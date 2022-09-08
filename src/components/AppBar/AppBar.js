import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import { Header } from './AppBar.styled';
//import { useAuth } from 'hooks';

export default function AppBar() {
  //const { isLoggedIn } = useAuth();
  return (
    <Header>
      <Navigation />
      <UserMenu />
      <AuthNav />
      {/*isLoggedIn ? <UserMenu /> : <AuthNav />*/}
    </Header>
  );
}
