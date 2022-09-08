import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import { FormStyled, Button, Title } from '../RegisterView/RegisterView.styled';

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
      <Title>Log in form</Title>

      <FormStyled onSubmit={handleSubmit} autoComplete="off">
        <label>
          <p>Email</p>
          <input
            type="email"
            name="email"
            placeholder="example@email.com"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label>
          <p>Password</p>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <Button type="submit">Log in</Button>
      </FormStyled>
    </div>
  );
}
