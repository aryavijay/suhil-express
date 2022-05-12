'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('users', 'update_at', {
      type: Sequelize.DATE
    });
    await queryInterface.addColumn('users', 'created_at', {
      type: Sequelize.DATE
    });
  },

  async down(queryInterface, Sequelize) {
    /** ̰
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
