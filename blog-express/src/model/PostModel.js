class PostModel {
  constructor(id, userId, title, text, createdAt) {
    this.id = id;
    this.userId = userId;
    this.title = title;
    this.text = text;
    this.createdAt = createdAt;
  }
}

module.exports = PostModel;
