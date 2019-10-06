const router = require('express').Router();
const park = require('./park');

router.use('/', park);

module.exports = router;
