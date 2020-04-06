const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLString
} = require('graphql');
const { getRepository } = require('typeorm')
const db = require('../../../db/');
const UserType = require('../../types/UserType');
const UserModel = require('../../models/UserModel.ts');

module.exports = {
    type: UserType,
    args: {
        login: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) }
    },
    async resolve(source, {login,password}) {
        // const result = await getRepository(UserModel).findOne({
        //     login: login
        // })
        //console.log(db);
        const user = await db.manager.query(`select * from login(${login}, ${password})`);

        return user;
    }
};