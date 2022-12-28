// libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// styles
import 'index.css';
import 'react-toastify/dist/ReactToastify.min.css';
// router
import Router from 'components';
import AuthProvider from 'hooks/useAuthProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <AuthProvider>
      <Router />
    </AuthProvider>
  </BrowserRouter>,
);
