'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      }, name: {
        type: Sequelize.STRING
      }, password: {
        type: Sequelize.STRING
      }
    });

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable('users');

  }
};
