const router = require('express').Router();
const { parkController } = require('../controllers');

const { checkAdmin } = require('../middlewares');

router.get('/', parkController.getParks);
router.get('/:id', parkController.getPark);
router.post('/', parkController.createPark);
router.delete('/:id', checkAdmin, parkController.deletePark);
router.patch('/:id', checkAdmin, parkController.updatePark);

module.exports = router;
