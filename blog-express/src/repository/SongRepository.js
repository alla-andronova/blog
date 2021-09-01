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
        .execute('INSERT INTO songs ( user_id, title, artist, genre, album, albumImageUrl) VALUES(?,?,?,?,?,?) ', [
            song.user_id,
            song.title,
            song.artist,
            song.genre,
            song.album,
            song.albumImageUrl,
        ]);
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

    async findSongById(id) {
        const [
        rows,
        ] = await this._db
        .promise()
        .execute(
            'SELECT songs.*, users.nickname FROM songs JOIN users on users_id = songs.user_id WHERE songs.id=? ',
                [id],
            );
            if (rows.length === 0) {
            return null;
            }
        
            const row = rows[0];
        
            return new SongModel({
            id: row.id,
            user_id: row.user_id,
            title: row.title,
            artist: row.artist,
            genre: row.genre,
            album: row.album,
            albumImageUrl: row.albumImageUrl,
            createdAt: row.createdAt,
            });
        }
        
        async updateSong(song) {
            const [
            rows,
            ] = await this._db
            .promise()
            .execute('UPDATE songs SET title = ?, artist = ?, genre = ?, album = ?, albumImageUrl = ?', [
                song.title,
                song.artist,
                song.genre,
                song.album,
                song.albumImageUrl
            ]);
        }
        
        async deleteSong(id) {
            const [
            rows,
            ] = await this._db.promise().execute('DELETE FROM songs where id=?', [id]);
        }
        

        async findAllSongs() {
            const [rows] = await this._db
            .promise()
            .execute(
                'SELECT songs.*, users.nickname FROM songs JOIN users on user_id = songs.user_id',
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
            'SELECT * FROM songs',
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
            }),
        );
    }
    }

module.exports = new SongRepository(db);
