const router = require('express').Router();
const { reportsController } = require('../controllers');

router.get('/', reportsController.getReports);
router.get('/:id', reportsController.getReport);
router.delete('/:id', reportsController.deleteReport);
router.post('/', reportsController.createReport)

module.exports = router;
