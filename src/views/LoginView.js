import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Log in form</h1>

      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          email
          <input
            type="email"
            name="email"
            placeholder="example@email.com"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label>
          password
          <input
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Log in</button>
      </form>
    </div>
  );
}
