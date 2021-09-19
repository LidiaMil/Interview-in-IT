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
    static associate({Interview,OrganizationQuestion,Raiting}) {
      // define association here
      Organization.belongsToMany(Interview, {
        through: OrganizationQuestion,
        foreignKey:'interview_id'
      });
      Organization.hasMany(Raiting, {
        foreignKey: "organization_id",
      });
    }
  };
  Organization.init({
    title: DataTypes.STRING,
    areaOfActivity: DataTypes.STRING,
    photo: DataTypes.TEXT,
    rating: DataTypes.INTEGER,
    address: DataTypes.STRING,
    link: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Organization',
  });
  return Organization;
};
