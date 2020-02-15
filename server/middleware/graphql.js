const {GraphQLSchema} = require('graphql');
const graphqlHTTP = require('express-graphql');

const query = require('../graphQL/resolvers')
const mutation = require('../graphQL/mutations');

const schema = new GraphQLSchema({
  query,
  mutation
});

module.exports = (app) => {
  app.use('/graphql_api', graphqlHTTP({
    schema,
    graphiql: true,
  }))
};
