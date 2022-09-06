import React from 'react';
import { NavLink } from 'react-router-dom';

export default function AuthNav() {
  return (
    <div>
      <NavLink to="/register">Registration</NavLink>
      <NavLink to="/login">Log in</NavLink>
    </div>
  );
}
