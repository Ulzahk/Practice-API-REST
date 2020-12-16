const MongoDatabase = require('../../config/database');

class UsersService {
  constructor(){
    this.collection = 'users';
    this.mongoDB =  new MongoDatabase();
  }

  async getUsers () {
    const users = await this.mongoDB.getAll(this.collection);
    return users || [];
  }

  async getUserById ({  userId }) {
    const user = await this.mongoDB.getById(this.collection, userId);
    return user || [];
  }

  async createUser ({ user }) {
    const createdUser = await this.mongoDB.create(this.collection, user);
    return createdUser || [];
  }

  async updateUser ({ userId, user }) {
    const updatedUser = await this.mongoDB.update(this.collection, userId, user);
    return updatedUser || [];
  }

  async deleteUser ({ userId }) {
    const deletedUser = await this.mongoDB.delete(this.collection, userId);
    return deletedUser || [];
  }
}

module.exports = UsersService;