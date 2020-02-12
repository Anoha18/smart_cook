const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLNonNull
} = require('graphql');
const { getRepository } = require('typeorm')
const UserType = require('../../types/UserType');
const UserModel = require('../../models/UserModel');

module.exports = {
  getUserById: {
    type: UserType,
    args: {
      user_id: { type: new GraphQLNonNull(GraphQLInt) }
    },
    async resolve(source, args) {
      const result = await getRepository(UserModel).findOne({ 
        user_id: args.user_id 
      })
  
      return result;
    }
  }
};
