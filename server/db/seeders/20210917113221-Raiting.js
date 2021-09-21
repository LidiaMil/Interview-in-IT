'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) =>  {
    await queryInterface.bulkInsert('Raitings', [
    { organization_id: 1,
      user_id: 1,
      number: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      organization_id:2,
      user_id: 1,
      number: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      organization_id:3, 
      user_id: 2,
      number: 3,
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
  }
