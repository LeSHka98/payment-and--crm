// libraries
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
// components
import RegistrationPage from 'components/Registration/RegistrationPage';
import ErrorPage from 'components/layout/Pages/ErrorPage';
import NotFound from 'components/layout/Pages/NotFound';
import LoginPage from 'components/Login/LoginPage';
import UserInfoPage from 'components/UserInfo/UserInfoPage';
import Credit from 'components/Credit';
import BaseLayout from 'components/layout/BaseLayout';
import Payment from 'components/Credit/Payment';
import CreditList from 'components/Credit/CreditList';
// hooks
import { useAuth } from 'hooks/useAuthProvider';

const Router = () => {
  const { isAuth } = useAuth();

  return (
    <Routes>
      <Route
        element={isAuth ? <BaseLayout /> : <Navigate replace to="/login" />}
        errorElement={<ErrorPage />}
        path="/"
      >
        <Route
          element={<Credit />}
          errorElement={<ErrorPage />}
          index
        />
        <Route
          element={<Payment />}
          errorElement={<ErrorPage />}
          path="payment"
        />
        <Route
          element={<CreditList />}
          errorElement={<ErrorPage />}
          path="creditList"
        />
      </Route>
      <Route
        element={isAuth ? <Navigate replace to="/" /> : <RegistrationPage />}
        errorElement={<ErrorPage />}
        path="/registration"
      />
      <Route
        element={isAuth ? <Navigate replace to="/" /> : <LoginPage />}
        errorElement={<ErrorPage />}
        path="/login"
      />
      <Route
        element={<UserInfoPage />}
        errorElement={<ErrorPage />}
        path="/user"
      />
      <Route
        element={<NotFound />}
        errorElement={<ErrorPage />}
        path="*"
      />
    </Routes>
  );
};

export default Router;
