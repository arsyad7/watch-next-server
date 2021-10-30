const router = require('express').Router();
const MovieController = require('../controllers/MovieController');

router.get('/', MovieController.getPopularMovies);
router.get('/:id', MovieController.getMovieDetail);

module.exports = router