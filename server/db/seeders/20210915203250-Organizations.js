'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Organizations', [
      {
        title: "Сбербанк",
        areaOfActivity: 'Банк',
        address: 'Россия, Москва, ул. Вавилова, 19.',
        link: "https://www.sberbank.ru",
        photo:"https://regnum.ru/uploads/pictures/news/2020/11/11/regnum_picture_160507890570607_normal.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Яндекс' ,
        areaOfActivity: "Поисковая система",
        address: 'Россия, Москва,ул. Льва Толстого, 16.',
        link: "https://yandex.ru",
        photo:"https://avatars.mds.yandex.net/get-bunker/135516/b5d842dd0e03a26c54749891dd1b0876edbae05d/orig",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Газпром",
        areaOfActivity: 'Энергетическая компания',
        address: 'Россия, Москва, ул. Наметкина, д. 16.',
        link: "https://www.gazprom.ru",
        photo:"https://upload.wikimedia.org/wikipedia/ru/thumb/2/2d/Gazprom-Logo-rus.svg/1280px-Gazprom-Logo-rus.svg.png",
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
