'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('LanguageQuestions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      language_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Languages"
          },
          key: "id"
        },
      },
      question_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Questions"
          },
          key: "id"
        },
        onDelete:'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('LanguageQuestions');
  }
};
