const Joi = require('joi');
const postRepository = require('../repository/PostRepository');

const schema = Joi.object({
  title: Joi.string().min(3).max(100).required(),
  text: Joi.string().min(20).required(),
});

class MyPostsController {
  constructor(postRepository) {
    this.postRepository = postRepository;
  }

  async createPost(req, res) {
    const { error } = schema.validate(req.body);
    if (error) {
      res.json({ validations: error }).status(400);
      return;
    }
    const { title, text } = req.body;
    //расшифрованный пейлоад из токена в котором хранится текущий айди юзера
    const userId = req.user.id;

    try {
      await this.postRepository.createPost({ title, text, userId });

      res.json({
        message: 'the post created succesfully',
      });
    } catch (error) {
      res
        .json({
          error: 'something went wrong',
        })
        .status(500);
    }
  }

  async updatePost(req, res) {
    const { error } = schema.validate(req.body);
    if (error) {
      res.json({ validations: error }).status(400);
      return;
    }

    const { id } = req.params;
    const userId = req.user.id;
    try {
      const post = await postRepository.findPostById(id);

      if (!post || post.userId !== userId) {
        res
          .json({
            error: 'post not found',
          })
          .status(404);
      } else {
        const { title, text } = req.body;
        post.title = title;
        post.text = text;

        await postRepository.updatePost(post);

        res.json(post);
      }
    } catch (error) {
      res
        .json({
          error: 'something went wrong',
        })
        .status(500);
    }
  }

  async getAllPosts(req, res) {
    const userId = req.user.id;
    try {
      const usersPosts = await this.postRepository.findPostsByUserId(userId);

      res.json(usersPosts);
    } catch (error) {
      res
        .json({
          error: 'something went wrong',
        })
        .status(500);
    }
  }
}

module.exports = new MyPostsController(postRepository);
