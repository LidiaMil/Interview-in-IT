'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('CommentRatings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      comment_id: {
        type: Sequelize.INTEGER,
        references: {
          model: { 
            tableName: "Comments" 
          },
          key: "id"
        },
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: { 
            tableName: "Users" 
          },
          key: "id"
        },
      },
      count: {
        type: Sequelize.DOUBLE
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
    await queryInterface.dropTable('CommentRatings');
  }
};
