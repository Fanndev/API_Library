"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Books", [
      {
        user_id: 1,
        judul: "Knigh moon",
        penulis: "Marvel",
        penerbit: "Marvel",
        tahun_terbit: "01-10-2020",
        genre: "fantasy, action",
        sinopsis: "Cerita marvel",
        ketersediaan: "Tersedia",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
