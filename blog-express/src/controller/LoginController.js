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
      res.json({ validations: error }).status();
      return;
    }

    const { email, password } = req.body;

    try {
      const user = await userRepository.findByEmail(email);
      if (!user) {
        res.json({ error: 'login failed' });
        return;
      }

      if (!(await user.isPasswordCorrect(password))) {
        res.json({ error: 'login failed' });
        return;
      }
    } catch (error) {
      res
        .json({
          error: 'something went wrong',
        })
        .status(500);
      return;
    }

    const token = user.createToken();
    res.json({
      message: 'user logged in succesfully',
      token,
      user,
    });
  }
}

module.exports = new LoginController(userRepository);