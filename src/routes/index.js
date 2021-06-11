const router = require('express').Router();
const Controller = require('../controllers');

router.get('/', Controller.getCoins);

module.exports = router;