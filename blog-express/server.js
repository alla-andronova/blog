require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const server = express();

// used to parse req.body(form) for POST,PUT requests
server.use(bodyParser.urlencoded({ extended: false }));
server.use(express.json());

const RegistrationController = require('./src/controller/RegistrationController');
const LoginController = require('./src/controller/LoginController');

server.post('/login', LoginController.handleLogin.bind(LoginController));
server.post(
  '/registration',
  RegistrationController.handleRegistration.bind(RegistrationController),
  //bind потому что колбек
);

const port = 3000;
// start server
server.listen(port, function () {
  console.log(`Server running at http://localhost:${port}`);
});
