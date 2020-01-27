const {
  GraphQLObjectType,
  GraphQLString,
} = require('graphql');
// const getUser = require('./resolvers/User/getUser');
const resolvers = require('./resolvers');

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    hello: {
      type: GraphQLString,

      resolve() {
        return 'Hello world'
      }
    },
    ...resolvers
  }
})

module.exports = {queryType};