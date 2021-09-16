'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // await queryInterface.bulkInsert('Roles', [
    //   {
    //     role: "admin",
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   },
    //   {
    //     role: "guest",
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   }
    // ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
