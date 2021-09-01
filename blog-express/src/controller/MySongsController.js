const Joi = require('joi');
const songRepository = require('../repository/SongRepository');

const schema = Joi.object({
    title: Joi.string().min(3).max(100).required(),
    text: Joi.string().min(20).required(),
    });

    class MySongsController {
    constructor(songRepository) {
        this.songRepository = songRepository;
    }

    async createSong(req, res) {
        const { error } = schema.validate(req.body);
        if (error) {
        res.json({ validations: error }).status(400);
        return;
        }
        const { title, artist, genre, album, albumImageUrl } = req.body;
        //расшифрованный пейлоад из токена в котором хранится текущий айди юзера
        const user_id = req.user.id;

        try {
        await this.songRepository.createSong({ title, artist, genre, album, albumImageUrl, user_id });

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
}

module.exports = new MySongsController(songRepository);