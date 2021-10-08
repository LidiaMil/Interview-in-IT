'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Comments', [
      {
        user_id: 2,
        question_id: 1,
        text: "Киты, удачки, всем! Вы все большие молодцы! У вас все получится!",
        data:new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        question_id: 2,
        text: "Не знаю",
        data:new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 3,
        question_id: 2,
        text: "+undefined // NaN",
        data:new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 2,
        question_id: 2,
        text: "Только у массивов, у объектов нет.",
        data:new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 3,
        question_id: 5,
        text: "Ничем не отличается, тоже самое!",
        data:new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 2,
        question_id: 5,
        text: " == значения и тип данных, а === сравнивает только значения",
        data:new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 3,
        question_id: 4,
        text: "Это функция со всеми внешними переменными, доступными ей.",
        data:new Date(),
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
