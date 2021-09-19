'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Interview extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Question,Organization,OrganizationQuestion,User,Categorey}) {
      // define association here
      Interview.belongsToMany(Organization, {
        through: OrganizationQuestion,
        foreignKey:'interview_id'
      });
      Interview.belongsTo(User, {
        foreignKey: "user_id",
      });
      Interview.belongsTo(Categorey, {
        foreignKey: "categorey_id",
      });
      Interview.hasMany(Question,{
        foreignKey: "interview_id",
      })
    }
  };
  Interview.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    data: DataTypes.DATEONLY,
    level: DataTypes.STRING,
    categorey_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Interview',
  });
  return Interview;
};
