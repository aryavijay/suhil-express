var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/v2', function (req, res, next) {
    res.send({ "name": "vijay", "title": "Sample proj", "version": 2 })
});

module.exports = router;
