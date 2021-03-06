const router = require('express').Router();
const WatchListController = require('../controllers/WatchListController');
const authentication = require('../middlewares/authentication');

router.use(authentication);
router.get('/', WatchListController.getWatchLists);
router.post('/', WatchListController.addWatchList);
router.delete('/:id', WatchListController.deleteWatchList);

module.exports = router