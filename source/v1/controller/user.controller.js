const UserModel = require('../../../models/user.model')

async function createUser(req, res, next){
    try {
        const user = await UserModel.create({
            name: 'vijay',
            password: 'vijay',
        })
        res.send({msg: "In create User", user})
    }catch(err){
        next(err)
    }
}


async function listUser(req, res, next){
    try {
        const userList = await UserModel.findAndCountAll()
        res.send({msg: "In User List", userList})
    }catch(err){
        next(err)
    }
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