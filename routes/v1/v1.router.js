var express = require('express');
var router = express.Router();
const {createUser, deleteUser, editUser, listUser} =  require('../../source/v1/controller/user.controller')

/* GET home page. */
// router.get('/v1', function (req, res, next) {
//     res.send({ "name": "vijay", "title": "Sample proj", "version": 1 })
// });
//
//
// /* GET home page. */
// router.post('/v1', function (req, res, next) {
//     res.send({ "name": "vijay", "title": "Sample proj", "version": 1, "method": "post" })
// });

// Create User

router.post("/v1/user", createUser)

module.exports = router;
