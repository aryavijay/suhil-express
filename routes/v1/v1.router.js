var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/v1', function (req, res, next) {
    res.send({ "name": "vijay", "title": "Sample proj", "version": 1 })
});


/* GET home page. */
router.post('/v1', function (req, res, next) {
    res.send({ "name": "vijay", "title": "Sample proj", "version": 1, "method": "post" })
});

module.exports = router;
