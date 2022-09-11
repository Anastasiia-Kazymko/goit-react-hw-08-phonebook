import React from 'react';
import { NavigLink } from './Navigation.styled';
import { useAuth } from 'hooks';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavigLink to="/">Home</NavigLink>
      {isLoggedIn && <NavigLink to="/phonebook">Phonebook</NavigLink>}
    </nav>
  );
};

export default Navigation;
