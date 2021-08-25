const db = require('../../mysql-connection');
const UserModel = require('../model/UserModel');

class UserRepository {
  constructor(db) {
    this._db = db;
  }

  async findByEmail(email) {
    const [
      rows,
    ] = await this._db
      .promise()
      .execute('SELECT * FROM `users` WHERE `email` = ? ', [email]);
    if (rows.length === 0) {
      return null;
    }
    return new UserModel(rows[0]);
  }

  async createUser(user) {
    const [
      rows,
    ] = await this._db
      .promise()
      .execute('INSERT INTO users (nickname,email,password) VALUES(?,?,?) ', [
        user.nickname,
        user.email,
        user.password,
      ]);
  }
}

module.exports = new UserRepository(db);
