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

    try {
      const user = await this.userRepository.findByEmail(req.body.email);
      if (user) {
        res.json({ error: 'user already exist' });
        return;
      }

      const newUser = new UserModel(req.body);
      await newUser.setPassword(req.body.password);

      await this.userRepository.createUser(newUser);

      res.json({
        message: 'user created succesfully',
        newUser,
      });
    } catch (error) {
      res
        .json({
          error: 'something went wrong',
        })
        .status(500);
      return;
    }
  }
}

module.exports = new RegistrationController(userRepository);
