const router = require('express').Router();
const { homeController } = require('../controllers');

router.get('/', homeController.getHomes);
router.get('/:id', homeController.getHome);
router.post('/', homeController.createHome);
router.post('/:id', homeController.alertHome);
router.delete('/:id', homeController.deleteHome);
router.patch('/:id', homeController.updateHome);

module.exports = router;
