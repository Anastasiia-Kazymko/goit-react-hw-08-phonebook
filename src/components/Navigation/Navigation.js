import React from 'react';
import { NavigLink } from './Navigation.styled';

//import { useAuth } from 'hooks';

const Navigation = () => {
  //const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavigLink to="/">Home</NavigLink>
      <NavigLink to="/phonebook">Phonebook</NavigLink>
      {/* isLoggedIn && <NavLink to="/phonebook">Phonebook</NavLink> */}
    </nav>
  );
};

export default Navigation;
