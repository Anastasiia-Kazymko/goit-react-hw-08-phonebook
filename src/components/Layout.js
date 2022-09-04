import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import AppBar from './AppBar';
//import { Box } from './Box';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div maxWidth={1440} margin="0 auto" px={16}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
