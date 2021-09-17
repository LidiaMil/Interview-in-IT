'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Question,Role,Comment, Raiting}) {
      // define association here
      User.hasMany(Question, {
        foreignKey: "user_id",
      });
      User.belongsTo(Role, {
        foreignKey: "role_id",
      });
      User.hasMany(Comment, {
        foreignKey: "user_id",
      });
      User.hasMany(Raiting, {
        foreignKey: "user_id",
      });
    }
  };
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    photo: DataTypes.TEXT,
    parol: DataTypes.STRING,
    role_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
