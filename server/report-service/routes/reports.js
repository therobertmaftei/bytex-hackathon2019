const router = require('express').Router();
const { reportsController } = require('../controllers');

const { checkAdmin } = require('../middlewares');

router.get('/', reportsController.getReports);
router.get('/:id', reportsController.getReport);
router.delete('/:id', checkAdmin, reportsController.deleteReport);
router.post('/', reportsController.createReport);

module.exports = router;
