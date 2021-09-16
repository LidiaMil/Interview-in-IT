'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Language extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Question,LanguageQuestion}) {
      // define association here
      Language.belongsToMany(Question, {
        through: LanguageQuestion,
        foreignKey:'language_id'
      });
    }
  };
  Language.init({
    programmingLanguage: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Language',
  });
  return Language;
};
