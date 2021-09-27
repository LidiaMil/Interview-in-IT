'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('OrganizationQuestions', [

      {
        organization_id: 2,
        interview_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        organization_id: 1,
        interview_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        organization_id: 1,
        interview_id: 3,
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
