// libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// api
import { ApolloProvider } from '@apollo/client';
import { getTokenClient } from 'api/GraphQL';
// components
import Router from 'components';
// constants
import { token } from 'constants/graphql';
// helpers
import { saveToLocalStorage } from 'helpers/localStorage';
// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.min.css';
import 'index.css';

saveToLocalStorage('token', token);
const client = getTokenClient();
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
);
