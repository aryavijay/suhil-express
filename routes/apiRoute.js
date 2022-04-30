var express = require('express');
var router = express.Router();
const v1 = require('./v1/v1.router')
const v2 = require('./v2/v2.router')
/* GET home page. */
router.use('/api', v1)
router.use('/api', v2)

module.exports = router;
