import { Outlet } from 'react-router-dom';
import AppBar from '.././AppBar/AppBar';
import { Suspense } from 'react';
import { Container } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
