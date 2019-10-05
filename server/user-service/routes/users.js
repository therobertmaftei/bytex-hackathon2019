const router = require('express').Router();
const { userController } = require('../controllers');

router.get('/status', userController.checkStatus)

module.exports = router;
