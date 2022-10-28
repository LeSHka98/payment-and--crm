// libraries
import React from 'react';
import { Route, Routes } from 'react-router-dom';
// components
import RegistrationPage from 'components/Registration/RegistrationPage';
import ErrorPage from 'components/layout/Pages/ErrorPage';
import NotFound from 'components/layout/Pages/NotFound';
import LoginPage from 'components/Login/LoginPage';
import UserInfoPage from 'components/UserInfo/UserInfoPage';

const Router = () => (
  <Routes>
    <Route
      element={<RegistrationPage />}
      errorElement={<ErrorPage />}
      path="/registration"
    />
    <Route
      element={<LoginPage />}
      errorElement={<ErrorPage />}
      path="/"
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

export default Router;
