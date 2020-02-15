const {
  GraphQLObjectType
} = require('graphql');
const UserMutations = require('./UserMutations')

const Mutations = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    ...UserMutations,
  }
})

module.exports = Mutations;