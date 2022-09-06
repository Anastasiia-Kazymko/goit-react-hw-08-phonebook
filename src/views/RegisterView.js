import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';
import { authOperations } from '../redux/auth';

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
      <Helmet>
        <title>Registration</title>
      </Helmet>

      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Имя
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={handleChange}
          />
        </label>

        <label>
          Почта
          <input
            type="email"
            name="email"
            placeholder="example@email.com"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label>
          Пароль
          <input
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Registration</button>
      </form>
    </div>
  );
}
