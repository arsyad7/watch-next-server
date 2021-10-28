const UserController = require('../controllers/UserController');

const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Hello World!')
})

router.post('/register', UserController.register);

module.exports = router