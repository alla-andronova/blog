class PostModel {
  constructor({
    id = null,
    userId,
    title,
    text,
    createdAt = null,
    author = null,
  }) {
    this.id = id;
    this.userId = userId;
    this.title = title;
    this.text = text;
    this.createdAt = createdAt;
    this.author = author;
  }
}

module.exports = PostModel;
