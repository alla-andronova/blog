require('dotenv').config();
const jwt = require('jsonwebtoken');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
require("dotenv").config();

const server = express();

// used to parse req.body(form) for POST,PUT requests
server.use(bodyParser.urlencoded({ extended: false }));
server.use(express.json());
server.use(cors({ origin: '*' }));

const RegistrationController = require('./src/controller/RegistrationController');
const LoginController = require('./src/controller/LoginController');
const MyPostsController = require('./src/controller/MyPostsController');
const PostsController = require('./src/controller/PostsController');
const SongsController = require('./src/controller/SongsController');
const MySongsController = require('./src/controller/MySongsController');

server.post('/login', LoginController.handleLogin.bind(LoginController));

server.post(
  '/registration',
  RegistrationController.handleRegistration.bind(RegistrationController),
);

server.post(
  '/add-song',
  authenticateToken,
  MySongsController.createSong.bind(MySongsController),
);

server.post(
  '/my-posts',
  authenticateToken,
  MyPostsController.createPost.bind(MyPostsController),
);
server.get(
  '/my-posts',
  authenticateToken,
  MyPostsController.getAllPosts.bind(MyPostsController),
);

server.get('/posts', PostsController.getAllPosts.bind(PostsController));
server.get(
  '/posts/recent',
  PostsController.getRecentPosts.bind(PostsController),
);

server.put(
  '/my-posts/:id(\\d+)',
  authenticateToken,
  MyPostsController.updatePost.bind(MyPostsController),
);

server.delete(
  '/my-posts/:id(\\d+)',
  authenticateToken,
  MyPostsController.deletePost.bind(MyPostsController),
);

server.get('/posts', PostsController.getAllPosts.bind(PostsController));
server.get(
  '/posts/recent',
  PostsController.getRecentPosts.bind(PostsController),
);

server.post(
  '/add-song',
  authenticateToken,
  MySongsController.createSong.bind(MySongsController),
);

server.get(
  '/my-songs',
  authenticateToken,
  MySongsController.getAllSongs.bind(MySongsController),
);


server.get('/songs', SongsController.getAllSongs.bind(SongsController));

server.get('/home', SongsController.getAllSongs.bind(SongsController));
server.get(
  '/home/recent',
  SongsController.getRecentSongs.bind(SongsController),
);

server.get(
  '/my-songs',
  authenticateToken,
  MySongsController.getAllSongs.bind(MySongsController),
);

server.put(
  '/song/:id(\\d+)',
  authenticateToken,
  MySongsController.updateSong.bind(MySongsController),
);

server.delete(
  '/song/:id(\\d+)',
  authenticateToken,
  MySongsController.deleteSong.bind(MySongsController),
);

server.get(
  '/song/:id(\\d+)',
  SongsController.getSongById.bind(SongsController),
);

//middleware
function authenticateToken(req, res, next) {
  //?????????? ?????????????? ???????????????? ?? ????????????
  const authHeader = req.headers['authorization'];
  //???????????? ?? ?????????????? ???????????? ?????? ???????????? ?? ?????????? ????????????????????  "Bearer eyJhbGc....."
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.sendStatus(401);

  //?????????? ???????? ?????? jwt ???????????????? ???????? ???? ?????????? ???????? ???????????????????? ???????????? ?? ???????????????????????? ???????????????????????????? ???????????? ?? ?????????????? ????????????  id ??????????
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
    if (err) return res.sendStatus(403);
    req.user = payload;

    next();
  });
}
const port = 3000;
// start server
server.listen(port, function () {
  console.log(`Server running at http://localhost:${port}`);
});
