import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink to="/">Главная</NavLink>
      {isLoggedIn && <NavLink to="/phonebook">Phonebook</NavLink>}
    </nav>
  );
};

export default Navigation;
