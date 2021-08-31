class SongModel {
    constructor({
        id = null,
        userId,
        title,
        artist,
        genre,
        album,
        albumImageUrl,
        createdAt = null,
        author = null,
    }) {
        this.id = id;
        this.userId = userId;
        this.title = title;
        this.artist = artist;
        this.genre = genre;
        this.album = album;
        this.albumImageUrl = albumImageUrl;
        this.createdAt = createdAt;
        this.author = author;
    }
}
module.exports = SongModel;
