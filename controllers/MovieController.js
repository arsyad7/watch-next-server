const axios = require('axios');

class MovieController {
    static async getPopularMovies(req, res, next) {
        try {
            const { page } = req.query;
            const { data } = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=6050f6c6b5615e7729f58503aa2eeea9&language=en-US&page=${page}`)
            res.status(200).json(data)
        } catch (err) {
            console.log(err);
        }
    }

    static async getMovieDetail(req, res, next) {
        try {
            const { id } = req.params;

            const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=6050f6c6b5615e7729f58503aa2eeea9&language=en-US`)
            res.status(200).json(data)
        } catch (err) {
            console.log(err)
        }
    }
}

module.exports = MovieController;