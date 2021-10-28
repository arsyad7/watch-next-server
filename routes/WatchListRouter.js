const router = require('express').Router();
const WatchListController = require('../controllers/WatchListController');
const authentication = require('../middlewares/authentication');

router.get('/', (req, res) => {
  res.send('Hello World!')
})

router.use(authentication);
router.get('/', WatchListController.getWatchLists);
router.post('/', WatchListController.addWatchList);
router.delete('/', WatchListController.deleteWatchList);

module.exports = router