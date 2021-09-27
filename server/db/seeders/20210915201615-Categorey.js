'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categoreys', [
      {
        categorey: "Дизайн",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categorey: "Разработка",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categorey: "Data Analyst",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categorey: "DevOps Engineer",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categorey: "Database Administrator",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
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
