const {
  GraphQLObjectType
} = require('graphql');
const UserResolvers = require('./UserResolvers')

const RootQuery = new GraphQLObjectType({
  name: 'Query',
  fields: {
    ...UserResolvers,
  }
})

module.exports = RootQuery;