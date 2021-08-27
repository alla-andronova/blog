const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class UserModel {
  constructor({ id = null, nickname, email, password }) {
    this.id = id;
    this.nickname = nickname;
    this.email = email;
    this.password = password;
  }

  async setPassword(plainPassword) {
    this.password = await bcrypt.hash(plainPassword, 10);
  }

  async isPasswordCorrect(plainPassword) {
    return await bcrypt.compare(plainPassword, this.password);
  }

  createToken() {
    return jwt.sign({ id: this.id }, process.env.ACCESS_TOKEN_SECRET);
  }
}

module.exports = UserModel;
