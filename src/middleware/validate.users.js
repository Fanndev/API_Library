// const { Users } = require("../models");
// const bcrypt = require("bcrypt");

// // Fungsi untuk memeriksa apakah email sudah digunakan sebelumnya
// const isEmailUsed = async (email) => {
//   try {
//     // Misalnya, menggunakan model User untuk melakukan pencarian email
//     const existingUser = await Users.findOne({
//       where: { email: email }, // Menentukan kondisi pencarian di sini
//     });
//     return !!existingUser; // Mengembalikan true jika ditemukan, false jika tidak
//   } catch (error) {
//     console.error("Error while checking email:", error);
//     throw error; // Melempar error jika terjadi kesalahan
//   }
// };


// // Fungsi untuk mengenkripsi password
// const hashPassword = async (password) => {
//   const hashedPassword = await bcrypt.hash(password, 10); // Menggunakan salt dengan nilai 10
//   return hashedPassword;
// };

// module.exports = { isEmailUsed, hashPassword };
