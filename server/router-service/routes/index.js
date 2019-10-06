const router = require('express').Router();
const router = require('./router');

router.use('/', router);

module.exports = router;
