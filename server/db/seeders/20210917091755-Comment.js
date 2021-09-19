'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Comments', [
      {
        user_id: 2,
        question_id: 1,
        text: "Киты, удачки, всем! Вы все большие молодцы! У вас все получится!",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        question_id: 2,
        text: "P3W1D4 - Redux",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 3,
        question_id: 2,
        text: "lalala",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 2,
        question_id: 2,
        text: "qweqweqwe",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        question_id: 3,
        text: "P3W2D1 - Thunk, Saga",
        createdAt: new Date(),
        updatedAt: new Date()
      },
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
