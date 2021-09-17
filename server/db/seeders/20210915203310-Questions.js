'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Questions', [
      {
        text: "1. Как правильно подключать скрипт и чем отличается атрибуты asinc и defer?",
        data: new Date(),
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: "Типы данный. Чем отличается null от undefined?",
        data: new Date(),
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: "Что не нравится в js?",
        data: new Date(),
        user_id: 1,
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
