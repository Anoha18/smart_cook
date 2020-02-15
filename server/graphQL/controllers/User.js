const { getRepository } = require('typeorm')
const UserModel = require('../models/UserModel');

class User {
  static async getOne(user_id) {
    try {
      const result = await getRepository(UserModel).findOne({ 
        user_id 
      })
  
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  static async createUser(user) {
    return true;
  }


}

module.exports = User;
