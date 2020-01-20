const {GraphQLSchema} = require('graphql');
const graphqlHTTP = require('express-graphql');

const {queryType} = require('../graphQL');

const schema = new GraphQLSchema({ query: queryType });

module.exports = (app) => {
  app.use('/api', graphqlHTTP({
    schema,
    graphiql: true,
  }))
}