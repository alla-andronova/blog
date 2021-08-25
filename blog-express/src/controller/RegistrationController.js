const Joi = require('joi');
const userRepository = require('../repository/UserRepository');
const UserModel = require('../model/UserModel');

const schema = Joi.object({
  nickname: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
    })
    .required(),
});

class RegistrationController {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async handleRegistration(req, res) {
    const { error } = schema.validate(req.body);
    if (error) {
      res.json({ validations: error });
      return;
    }

    const user = await this.userRepository.findByEmail(req.body.email);
    if (user) {
      res.json({ error: 'user already exist' });
      return;
    }

    const newUser = new UserModel(req.body);
    await newUser.setPassword(req.body.password);
    this.userRepository.createUser(newUser);
    const token = newUser.createToken();
    res.json({
      message: 'user created succesfully',
      token,
    });
  }
}

module.exports = new RegistrationController(userRepository);
