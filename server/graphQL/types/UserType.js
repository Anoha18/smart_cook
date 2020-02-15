const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean
} = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'User',
  fields: {
    user_id: {type: GraphQLInt},
    name: {type: GraphQLString},
    lastname: {type: GraphQLString},
    email: {type: GraphQLString},
    phone: {type: GraphQLString},
    deleted: {type: GraphQLBoolean}
  }
});