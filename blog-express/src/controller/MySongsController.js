const Joi = require('joi');
const songRepository = require('../repository/SongRepository');

const schema = Joi.object({
  title: Joi.string().min(3).max(100).required(),
  artist: Joi.string().min(3).required(),
  genre: Joi.string().min(3).required(),
  album: Joi.string().min(3).required(),
  albumImageUrl: Joi.string().min(3).required(),
});

class MySongsController {
  constructor(songRepository) {
    this.songRepository = songRepository;
  }

  async createSong(req, res) {
    const { error } = schema.validate(req.body);
    if (error) {
      res.json({ validations: error }).status(400);
      console.log(error);
      return;
    }
    const { title, artist, genre, album, albumImageUrl } = req.body;
    //расшифрованный пейлоад из токена в котором хранится текущий айди юзера
    const user_id = req.user.id;

    try {
      await this.songRepository.createSong({
        title,
        artist,
        genre,
        album,
        albumImageUrl,
        user_id,
      });

      res.json({
        message: 'the song created succesfully',
      });
    } catch (error) {
      res
        .json({
          error: 'something went wrong',
        })
        .status(500);
    }
  }

  async getAllSongs(req, res) {
    const user_id = req.user.id;
    try {
      const usersSongs = await this.songRepository.findSongsByUserId(user_id);

      res.json(usersSongs);
    } catch (error) {
      res
        .json({
          error: 'something went wrong',
        })
        .status(500);
    }
  }

  async deleteSong(req, res) {
    const { id } = req.params;
    const user_id = req.user.id;
    try {
      const song = await songRepository.findSongById(id);

      if (!song || song.user_id !== user_id) {
        res
          .json({
            error: 'song not found',
          })
          .status(404);
      } else {
        await songRepository.deleteSong(id);

        res.json({ message: 'song deleted succesfully' });
      }
    } catch (error) {
      res
        .json({
          error: 'something went wrong',
        })
        .status(500);
    }
  }

  async updateSong(req, res) {
    const { error } = schema.validate(req.body);
    if (error) {
      res.json({ validations: error }).status(400);
      return;
    }

    const { id } = req.params;
    const user_id = req.user.id;
    try {
      const song = await songRepository.findSongById(id);

      if (!song || song.user_id !== user_id) {
        res
          .json({
            error: 'song not found',
          })
          .status(404);
      } else {
        const { title, artist, genre, album, albumImageUrl } = req.body;
        (song.title = title),
          (song.artist = artist),
          (song.genre = genre),
          (song.album = album),
          (song.albumImageUrl = albumImageUrl),
          await songRepository.updateSong(song);

        res.json(song);
      }
    } catch (error) {
      res
        .json({
          error: 'something went wrong',
        })
        .status(500);
    }
  }
}

module.exports = new MySongsController(songRepository);
