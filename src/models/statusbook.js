'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StatusBook extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StatusBook.init(
    {
      status_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: "id", // Nama kolom sebenarnya di database
      },
      ketersediaan: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "StatusBook",
    }
  );
  return StatusBook;
};