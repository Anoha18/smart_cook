const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
} = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    lastName: { type: GraphQLString },
  }
});
