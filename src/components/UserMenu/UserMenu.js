import { useDispatch } from 'react-redux';
//import { Box } from '../Box';
import { authOperations } from '../../redux/auth';
import defaultAvatar from './default-avatar.png';
import { useAuth } from 'hooks';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const avatar = defaultAvatar;

  return (
    <div>
      <img src={avatar} alt="" width="32" />
      <span>Welcome, {user.name}</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Log out
      </button>
    </div>
  );
}
