const {
  GraphQLObjectType,
  GraphQLInt,
} = require('graphql');
const UserType = require('../types/UserType');

const users = [
  {
    id: 1,
    name: 'Vlad',
    lastName: 'Anokhin'
  },
  {
    id: 2,
    name: 'Serega',
    lastName: 'Ivanov'
  }
]

module.exports = {
  type: UserType,
  args: {
    id: { type: GraphQLInt }
  },
  resolve(source, args) {
    const user = users.find((elem, index) => {
      if (elem.id == args.id) return true;
    })

    return user;
  }
};
