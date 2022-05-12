const Sequelize = require('sequelize')
const db = require('./index')

const userModel = db.sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    update_at: {
        type: Sequelize.DATE,
        defaultValue:Sequelize.fn('now')
    },
    created_at: {
        type: Sequelize.DATE,
    defaultValue:Sequelize.fn('now')
    }
},{
    // freezeTableName: true,
    timestamps: false
})


module.exports = userModel