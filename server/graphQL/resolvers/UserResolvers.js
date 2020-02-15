const {
  GraphQLInt,
  GraphQLNonNull
} = require('graphql');
const UserType = require('../types/UserType');
const User = require('../controllers/User')

module.exports = {
  user: {
    type: UserType,
    args: {
      user_id: { type: new GraphQLNonNull(GraphQLInt) }
    },
    async resolve(source, args) {
      return await User.getOne(args.user_id);
    }
  }
};