'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Languages', [
      {
        programmingLanguage: "Rust",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        programmingLanguage: "Clojure",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        programmingLanguage: "TypeScript",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        programmingLanguage: "Elixir",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        programmingLanguage: "Julia",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        programmingLanguage: "Python",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        programmingLanguage: "JavaScript",
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
