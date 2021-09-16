'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Language,LanguageQuestion,User,Organization,OrganizationQuestion}) {
      Question.belongsToMany(Language, {
        through: LanguageQuestion,
        foreignKey:'question_id'
      });
      Question.belongsToMany(Organization, {
        through: OrganizationQuestion,
        foreignKey:'question_id'
      });
      Question.belongsTo(User, {
        foreignKey: "user_id",

      });
      // define association here
    }
  };
  Question.init({
    text: DataTypes.TEXT,
    data: DataTypes.DATEONLY,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};
