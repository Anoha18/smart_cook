const {
  GraphQLString
} = require('graphql')
const UserModel = require('../types/UserType');
const User = require('../controllers/User')

module.exports = {
  setUser: {
    type: UserModel,
    args: {
      name: {type: GraphQLString},
      lastname: {type: GraphQLString},
      password: {type: GraphQLString},
      email: {type: GraphQLString},
      phone: {type: GraphQLString}
    },
    async resolve(parentValue, args) {
      console.log(parentValue),
      console.log(args);
      return await User.createUser(args);
    }
  }
}