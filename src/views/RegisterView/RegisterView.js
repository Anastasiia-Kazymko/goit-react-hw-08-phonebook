import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import { FormStyled, Button, Title } from './RegisterView.styled';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <Title>Registration</Title>

      <FormStyled onSubmit={handleSubmit} autoComplete="off">
        <label>
          <p>Name</p>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={handleChange}
          />
        </label>

        <label>
          <p>E-mail</p>
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

        <Button type="submit">Registration</Button>
      </FormStyled>
    </div>
  );
}
