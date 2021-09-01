const songRepository = require('../repository/SongRepository');

class SongsController {
    constructor(songRepository) {
        this.songRepository = songRepository;
    }

    async getAllSongs(req, res) {
        try {
        const allSongs = await this.songRepository.findAllSongs();

        res.json(allSongs);
        } catch (error) {
        res
            .json({
            error: 'something went wrong',
            })
            .status(500);
        }
    }

    async getRecentSongs(req, res) {
        try {
        const recentSongs = await this.songRepository.findRecentSongs(15);

        res.json(recentSongs);
        } catch (error) {
        res
            .json({
            error: 'something went wrong',
            })
            .status(500);
        }
    }
}

module.exports = new SongsController(songRepository);