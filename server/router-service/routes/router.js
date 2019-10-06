const router = require('express').Router();
const { routerController } = require('../controllers');

router.get('/', routerController.getRouters);
router.get('/:id', routerController.getRouter);
router.post('/', routerController.createRouter);
router.delete('/:id', routerController.deleteRouter);
router.patch('/:id', routerController.updateRouter);

module.exports = router;
