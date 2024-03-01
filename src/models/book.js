"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
       Book.belongsTo(models.Users, { foreignKey: "user_id" });
    }
  }
  Book.init(
    {
      user_id: DataTypes.INTEGER,
      judul: DataTypes.STRING,
      penulis: DataTypes.STRING,
      penerbit: DataTypes.STRING,
      tahun_terbit: DataTypes.STRING,
      genre: DataTypes.STRING,
      sinopsis: DataTypes.STRING,
      ketersediaan: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Book",
    }
  );
  return Book;
};
