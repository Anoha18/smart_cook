const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLBoolean
} = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'User',
  fields: {
    user_id: { type: GraphQLID },
    name: { type: GraphQLString },
    lastname: { type: GraphQLString },
    deleted: { type: GraphQLBoolean },
    email: { type: GraphQLString }
  }
});
