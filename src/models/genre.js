"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Genre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Genre.init(
    {
      genre_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "genre_id", // Nama kolom sebenarnya di database
      },
      nama_genre: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Genre",
    }
  );
  return Genre;
};
