'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Books', {
      book_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      judul: {
        type: Sequelize.STRING
      },
      penulis: {
        type: Sequelize.STRING
      },
      penerbit: {
        type: Sequelize.STRING
      },
      tahun_terbit: {
        type: Sequelize.STRING
      },
      genre: {
        type: Sequelize.STRING
      },
      sinopsis: {
        type: Sequelize.STRING
      },
      ketersediaan: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Books');
  }
};