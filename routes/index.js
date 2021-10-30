const router = require('express').Router();
const UserRouter = require('./UserRouter');
const MovieRouter = require('./MovieRouter');
const WatchListRouter = require('./WatchListRouter');
const errorHandler = require('../middlewares/errorHandler');

router.get('/', (req, res) => {
  res.send('Hello World!')
})

router.use('/users', UserRouter);
router.use('/movies', MovieRouter);
router.use('/watchlists', WatchListRouter);
router.use(errorHandler);

module.exports = router