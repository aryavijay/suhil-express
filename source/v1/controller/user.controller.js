const UserModel = require('../../../models/user.model')

function createUser(req, res, next){

    const user = UserModel.create({
        name: 'vijay',
        password: 'vijay',
    })
   res.send({msg:"In create User", user})
}


function listUser(req, res, next){

}


function editUser(req, res, next){

}


function deleteUser(req, res, next){

}

module.exports = {
    createUser,
    listUser,
    editUser,
    deleteUser
}