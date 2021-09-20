'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categorey extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Interview}) {
      // define association here
      Categorey.hasMany(Interview, {
        foreignKey: "categorey_id",
      });
    }
  };
  Categorey.init({
    categorey: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Categorey',
  });
  return Categorey;
};
