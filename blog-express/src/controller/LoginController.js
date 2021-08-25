const userRepository = require('../repository/UserRepository');
const Joi = require('joi');

const schema = Joi.object({
  password: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
    })
    .required(),
});

class LoginController {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async handleLogin(req, res) {
    const { error } = schema.validate(req.body);
    if (error) {
      res.json({ validations: error });
      return;
    }

    const { email, password } = req.body;
    const user = await userRepository.findByEmail(email);
    if (!user) {
      res.json({ error: 'login failed' });
      return;
    }

    if (!(await user.isPasswordCorrect(password))) {
      res.json({ error: 'login failed' });
      return;
    }
    const token = user.createToken();
    res.json({
      message: 'user logged in succesfully',
      token,
    });
  }
}

module.exports = new LoginController(userRepository);
