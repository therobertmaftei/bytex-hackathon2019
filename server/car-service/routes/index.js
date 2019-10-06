const router = require('express').Router();
const car = require('./car');

router.use('/', car);

module.exports = router;
