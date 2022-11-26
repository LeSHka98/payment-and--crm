// libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
// api
import { ApolloProvider } from '@apollo/client';
import { getTokenClient } from 'api/GraphQL';
// components
import App from 'components';
// constants
import { token } from 'constants/graphql';
// helpers
import { saveToLocalStorage } from 'helpers/localStorage';
// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'index.css';

saveToLocalStorage('token', token);
const client = getTokenClient();
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
);
