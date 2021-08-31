const postRepository = require('../repository/PostRepository');

class PostsController {
  constructor(postRepository) {
    this.postRepository = postRepository;
  }

  async getAllPosts(req, res) {
    try {
      const allPosts = await this.postRepository.findAllPosts();

      res.json(allPosts);
    } catch (error) {
      res
        .json({
          error: 'something went wrong',
        })
        .status(500);
    }
  }

  async getRecentPosts(req, res) {
    try {
      const recentPosts = await this.postRepository.findRecentPosts(3);

      res.json(recentPosts);
    } catch (error) {
      res
        .json({
          error: 'something went wrong',
        })
        .status(500);
    }
  }
}

module.exports = new PostsController(postRepository);
