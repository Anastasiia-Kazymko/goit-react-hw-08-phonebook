import React from 'react';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { authOperations } from '../redux/auth';
import { Layout } from './Layout/Layout';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';

const HomeView = lazy(() => import('../views/HomeView/HomeView'));
const RegisterView = lazy(() => import('../views/RegisterView/RegisterView'));
const LoginView = lazy(() => import('../views/LoginView/LoginView'));
const PhonebookView = lazy(() =>
  import('../views/PhonebookView/PhonebookView')
);

export const Phonebook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeView />} />
        <Route
          path="/register"
          element={
            <PublicRoute restricted redirectTo="/phonebook">
              <RegisterView />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute restricted redirectTo="/phonebook">
              <LoginView />
            </PublicRoute>
          }
        />
        <Route
          path="/phonebook"
          element={
            <PrivateRoute redirectTo="/login">
              <PhonebookView />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
};
