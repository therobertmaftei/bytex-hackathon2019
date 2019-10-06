const router = require('express').Router();
const { carController } = require('../controllers');

router.get('/', carController.getCars);
router.get('/:id', carController.getCar);
router.post('/', carController.createCar);
router.delete('/:id', carController.deleteCar)
router.patch('/:id', carController.updateCar);

module.exports = router;
