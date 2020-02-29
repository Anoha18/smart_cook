import ApolloClient from 'apollo-boost';

const apolloClient = new ApolloClient({
  uri: 'http://localhost:3000/graphql_api'
});

apolloClient.defaultOptions.query = {
  fetchPolicy: 'no-cache'
};

export default apolloClient;
