var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/v2', function (req, res, next) {
    try {
        throw new Error("CUSTOM_ERROR_1")
        res.send({ error: false, msg: r })
    } catch (ex) {
        next(ex)
    }
});

module.exports = router;
