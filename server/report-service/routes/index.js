const router = require('express').Router();
const reports = require('./reports');

router.use('/', reports);

module.exports = router;
