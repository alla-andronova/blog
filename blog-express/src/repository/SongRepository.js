const db = require('../../mysql-connection');
const SongModel = require('../model/SongModel');

class SongRepository {
  constructor(db) {
    this._db = db;
  }

  async createSong(song) {
    const [
      rows,
    ] = await this._db
      .promise()
      .execute(
        'INSERT INTO songs ( user_id, title, artist, genre, album, albumImageUrl) VALUES(?,?,?,?,?,?) ',
        [
          song.user_id,
          song.title,
          song.artist,
          song.genre,
          song.album,
          song.albumImageUrl,
        ],
      );
  }

  async findSongsByUserId(user_id) {
    const [
      rows,
    ] = await this._db
      .promise()
      .execute('SELECT * FROM songs WHERE user_id=? ', [user_id]);
    return rows.map(
      row =>
        new SongModel({
          id: row.id,
          user_id: row.user_id,
          title: row.title,
          artist: row.artist,
          genre: row.genre,
          album: row.album,
          albumImageUrl: row.albumImageUrl,
          createdAt: row.createdAt,
        }),
    );
  }

  async findAllSongs() {
    const [rows] = await this._db
      .promise()
      .execute(
        'SELECT songs.*, users.nickname FROM songs JOIN users on users.id = songs.user_id',
      );
    return rows.map(
      row =>
        new SongModel({
          id: row.id,
          user_id: row.user_id,
          title: row.title,
          artist: row.artist,
          genre: row.genre,
          album: row.album,
          albumImageUrl: row.albumImageUrl,
          createdAt: row.createdAt,
          author: row.nickname,
        }),
    );
  }

  async findRecentSongs(count) {
    const [
      rows,
    ] = await this._db
      .promise()
      .execute(
        'SELECT songs.*, users.nickname FROM songs JOIN users on users.id = songs.user_id ORDER BY songs.id DESC LIMIT ?',
        [count],
      );
    return rows.map(
      row =>
        new SongModel({
          id: row.id,
          user_id: row.user_id,
          title: row.title,
          artist: row.artist,
          genre: row.genre,
          album: row.album,
          albumImageUrl: row.albumImageUrl,
          createdAt: row.createdAt,
          addedBy: row.nickname,
        }),
    );
  }
}

module.exports = new SongRepository(db);
