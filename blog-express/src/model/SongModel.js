class SongModel {
  constructor({
    id = null,
    user_id,
    title,
    artist,
    genre,
    album,
    albumImageUrl,
    createdAt = null,
    addedBy = null,
  }) {
    this.id = id;
    this.user_id = user_id;
    this.title = title;
    this.artist = artist;
    this.genre = genre;
    this.album = album;
    this.albumImageUrl = albumImageUrl;
    this.createdAt = createdAt;
    this.addedBy = addedBy;
  }
}
module.exports = SongModel;
