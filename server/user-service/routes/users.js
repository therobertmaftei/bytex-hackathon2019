const router = require('express').Router();
const { userController } = require('../controllers');

router.get('/status', userController.checkStatus);
router.get('/notifications', userController.getNotifications);
router.get('/', userController.getUser);

module.exports = router;
