import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { apolloEndpoint } from 'utils/api';

const httpLink = createHttpLink({
  uri: apolloEndpoint,
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('sc-token');
  return {
    headers: {
      ...headers,
      authorization: token ? token : '',
    },
  };
});

export const createApolloClient = () =>
  new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
