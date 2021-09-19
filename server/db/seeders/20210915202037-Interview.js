'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Interviews', [
      {
        name: "1. Как правильно подключать скрипт и чем отличается атрибуты asinc и defer?",
        description:'ffvgbh njkm nb',
        data: new Date(),
        level: "middle",
        categorey_id:1,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Типы данный. Чем отличается null от undefined?",
        description:'fuuuuuuuuuuuck',
        data: new Date(),
        level: "middle + ",
        categorey_id:2,
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Что не нравится в js?",
        description:'eeeeeeeeeeeeee',
        data: new Date(),
        level: "senior",
        categorey_id:1,
        user_id: 2,
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
