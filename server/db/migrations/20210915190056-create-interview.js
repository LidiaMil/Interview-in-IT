'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Interviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      data: {
        type: Sequelize.DATEONLY
      },
      level: {
        type: Sequelize.STRING
      },
      categorey_id:{
        type: Sequelize.Sequelize.INTEGER,
        references: {
          model: { 
            tableName: "Categoreys" 
          },
          key: "id"
        },
        // onUpdate: 'CASCADE',
        onDelete:'CASCADE'
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: { 
            tableName: "Users" 
          },
          key: "id"
        },
        // onUpdate: 'CASCADE',
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
    await queryInterface.dropTable('Interviews');
  }
};
