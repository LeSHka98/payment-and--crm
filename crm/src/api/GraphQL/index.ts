// api
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
// helpers
import { getFromLocalStorage } from 'helpers/localStorage';

export const getTokenClient = () => {
  const token = getFromLocalStorage('token');
  const httpLink = createHttpLink({
    uri: '/sb-crm-gateway/graphql',
    headers: {
      AuthUser: token || '',
    },
  });

  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });
};
