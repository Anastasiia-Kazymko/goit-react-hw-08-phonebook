import React from 'react';
import { AutorizLink, Login } from './AuthNav.styled';

export default function AuthNav() {
  return (
    <Login>
      <AutorizLink to="/register">Registration</AutorizLink>
      <AutorizLink to="/login">Log in</AutorizLink>
    </Login>
  );
}
