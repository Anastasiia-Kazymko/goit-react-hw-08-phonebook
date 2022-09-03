import { useEffect, lazy } from 'react';
//import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';

const HomeView = lazy(() => import('../views/HomeView'));
const RegisterView = lazy(() => import('../views/RegisterView'));
const LoginView = lazy(() => import('../views/LoginView'));
const PhonebookView = lazy(() => import('../views/PhonebookView'));

export default function Phonebook() {
  //const dispatch = useDispatch();
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeView />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/phonebook" element={<PhonebookView />} />
      </Route>
    </Routes>
  );
}
