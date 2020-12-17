import { setContext } from '@apollo/client/link/context';
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const httpLink = createHttpLink({
  uri: 'https://hz61n1td7e.execute-api.eu-west-2.amazonaws.com/graphql'
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('auth-token');
  const authorization = token ? `Bearer ${token}` : '';

  return { headers: { ...headers, authorization } };
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink)
});

