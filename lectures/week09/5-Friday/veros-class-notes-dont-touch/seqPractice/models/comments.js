'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      models.comments.belongsTo(models.blogs, {foreignKey: 'blogID'})
    }
  };
  comments.init({
    username: DataTypes.STRING,
    content: DataTypes.STRING,
    isApproved: DataTypes.BOOLEAN,
    blogID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'comments',
  });
  return comments;
};