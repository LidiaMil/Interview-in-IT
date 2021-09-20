'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Questions', [
      {
        text: "Что такое паттерн в реакте и какие знаешь?",
        interview_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: "React.pureComponent аналог React.memo. Или аналог метод shouldComponentUpdate(nextProps, nextState)",
        interview_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: "Хуки",
        interview_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: "компонент высшего порядка",
        interview_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: "React.createContext",
        interview_id: 2,
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
