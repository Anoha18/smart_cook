const {
  GraphQLObjectType,
  GraphQLString,
} = require('graphql');
const getUser = require('./resolvers/getUser');

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    hello: {
      type: GraphQLString,

      resolve() {
        return 'Hello world'
      }
    },
    user: getUser,
  }
})

module.exports = {queryType};