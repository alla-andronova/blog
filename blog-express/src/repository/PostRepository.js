const db = require('../../mysql-connection');
const PostModel = require('../model/PostModel');

class PostRepository {
  constructor(db) {
    this._db = db;
  }

  async createPost(post) {
    const [
      rows,
    ] = await this._db
      .promise()
      .execute('INSERT INTO posts ( user_id, title, text) VALUES(?,?,?) ', [
        post.userId,
        post.title,
        post.text,
      ]);
  }

  async findPostsByUserId(userId) {
    const [
      rows,
    ] = await this._db
      .promise()
      .execute('SELECT * FROM posts WHERE user_id=? ', [userId]);
    return rows.map(
      row =>
        new PostModel({
          id: row.id,
          userId: row.user_id,
          title: row.title,
          text: row.text,
          createdAt: row.created_at,
        }),
    );
  }

  async findAllPosts() {
    const [rows] = await this._db
      .promise()
      .execute(
        'SELECT posts.*, users.nickname FROM posts JOIN users on users.id = posts.user_id',
      );
    return rows.map(
      row =>
        new PostModel({
          id: row.id,
          userId: row.user_id,
          title: row.title,
          text: row.text,
          createdAt: row.created_at,
          author: row.nickname,
        }),
    );
  }

  async findRecentPosts(count) {
    const [
      rows,
    ] = await this._db
      .promise()
      .execute(
        'SELECT posts.*, users.nickname FROM posts JOIN users on users.id = posts.user_id ORDER BY posts.id DESC LIMIT ?',
        [count],
      );
    return rows.map(
      row =>
        new PostModel({
          id: row.id,
          userId: row.user_id,
          title: row.title,
          text: row.text,
          createdAt: row.created_at,
          author: row.nickname,
        }),
    );
  }
}

module.exports = new PostRepository(db);
