// libraries
import React from 'react';
import { Route, Routes } from 'react-router-dom';
// components
import ClientArea from 'components/Client/Clients';
import ErrorPage from 'components/layout/Pages/ErrorPage';
import NotFound from 'components/layout/Pages/NotFound';
import BaseLayout from 'components/layout/BaseLayout';
import ClientInfoPage from 'components/Client/ClientInfoPage';
import UsersTable from 'components/Users/Table';
import UserPage from 'components/Users/UserPage';
import EditUser from 'components/Users/EditUser';
import CreateUser from 'components/Users/CreateUser';
import Verification from 'components/Verification';
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
        element={<ClientInfoPage />}
        errorElement={<ErrorPage />}
        path=":clientId"
      />
      <Route
        element={<UsersTable />}
        errorElement={<ErrorPage />}
        path="users"
      />
      <Route
        element={<CreateUser />}
        errorElement={<ErrorPage />}
        path="users/create"
      />
      <Route
        element={<UserPage />}
        errorElement={<ErrorPage />}
        path="users/:userId"
      />
      <Route
        element={<EditUser />}
        errorElement={<ErrorPage />}
        path="users/:userId/edit"
      />
      <Route
        element={<Verification />}
        errorElement={<ErrorPage />}
        path="verification"
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
