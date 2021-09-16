'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        firstName: "Mira",
        lastName: "Vasina",
        email: "o@outlook.com",
        photo: "https://n1s1.hsmedia.ru/4b/a0/ef/4ba0efe7ef4efa3bd00e9cc1003b4bc3/728x542_1_c9bc11e9dc242624c105f6ed5c38e1c2@1000x745_0xac120003_1637656321581345514.jpg",
        parol: 123,
        role_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "Miha",
        lastName: "Mirov",
        email: "kaft93x@outlook.com",
        photo: "https://st3.depositphotos.com/14803258/18261/i/600/depositphotos_182619200-stock-photo-skincare.jpg",
        parol: 123,
        role_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "Lika",
        lastName: "Rull",
        email: "dcu@yandex.ru",
        photo: "https://n1s1.hsmedia.ru/4b/a0/ef/4ba0efe7ef4efa3bd00e9cc1003b4bc3/728x542_1_c9bc11e9dc242624c105f6ed5c38e1c2@1000x745_0xac120003_1637656321581345514.jpg",
        parol: 123,
        role_id: 1,
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
