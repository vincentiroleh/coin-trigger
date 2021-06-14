const router = require('express').Router();
const Controller = require('../controllers');

router.get('/', Controller.getCoins);
router.get('/api/v1/coin/new', Controller.getCoinsAPI)

module.exports = router;