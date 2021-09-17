'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Organizations', [
      {
        title: 'Сбербанк',
        areaOfActivity: 'Банк',
        photo:'https://regnum.ru/uploads/pictures/news/2020/11/11/regnum_picture_160507890570607_normal.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Поисковая система',
        areaOfActivity: 'Яндекс',
        photo:'https://avatars.mds.yandex.net/get-bunker/135516/b5d842dd0e03a26c54749891dd1b0876edbae05d/orig',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Газпром',
        areaOfActivity: 'Энергетическая компания',
        photo:'https://upload.wikimedia.org/wikipedia/ru/thumb/2/2d/Gazprom-Logo-rus.svg/1280px-Gazprom-Logo-rus.svg.png',
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
