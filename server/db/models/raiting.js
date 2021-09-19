'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Raiting extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Organization,User}) {
      // define association here
      Raiting.belongsTo(Organization, {
        foreignKey: "organization_id",
      });
      Raiting.belongsTo(User, {
        foreignKey: "user_id",
      });
    }
  };
  Raiting.init({
    user_id: DataTypes.INTEGER,
    organization_id: DataTypes.INTEGER,
    number: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Raiting',
  });
  return Raiting;
};
