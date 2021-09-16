'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Organization extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Question,OrganizationQuestion}) {
      // define association here
      Organization.belongsToMany(Question, {
        through: OrganizationQuestion,
        foreignKey:'organization_id'
      });
    }
  };
  Organization.init({
    title: DataTypes.STRING,
    areaOfActivity: DataTypes.STRING,
    photo: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Organization',
  });
  return Organization;
};
