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
        organization_id: 3,
        interview_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        organization_id: 4,
        interview_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        organization_id: 5,
        interview_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        organization_id: 6,
        interview_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },  
        {
        organization_id: 7,
        interview_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        organization_id: 8,
        interview_id: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        organization_id: 9,
        interview_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        organization_id: 10,
        interview_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
         {
        organization_id: 11,
        interview_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        organization_id: 12,
        interview_id: 12,
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
