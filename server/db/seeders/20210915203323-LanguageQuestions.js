'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('LanguageQuestions', [
      {
        language_id: 1,
        question_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        language_id: 1,
        question_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        language_id: 3,
        question_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        language_id: 1,
        question_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        language_id: 3,
        question_id: 1,
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
