// libraries
import React from 'react';
import { Route, Routes } from 'react-router-dom';
// components
import ClientArea from 'components/ClientArea';
import ErrorPage from 'components/layout/Pages/ErrorPage';
import NotFound from 'components/layout/Pages/NotFound';
import BaseLayout from 'components/layout/BaseLayout';
import UserInfoPage from 'components/UserInfoPage';
// styles
import 'styles/index.scss';

const Router = () => (
  <Routes>
    <Route
      element={<BaseLayout />}
      errorElement={<ErrorPage />}
      path="/"
    >
      <Route
        element={<ClientArea />}
        errorElement={<ErrorPage />}
        index
      />
      <Route
        element={<UserInfoPage />}
        errorElement={<ErrorPage />}
        path=":userId"
      />
    </Route>
    <Route
      element={<NotFound />}
      errorElement={<ErrorPage />}
      path="*"
    />
  </Routes>
);

export default Router;
