'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ChartData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ChartData.init({
    x: DataTypes.INTEGER,
    y: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ChartData',
  });
  return ChartData;
};