import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://hz61n1td7e.execute-api.eu-west-2.amazonaws.com/graphql',
  cache: new InMemoryCache()
});

