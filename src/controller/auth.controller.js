const jwt = require("jsonwebtoken");
const { Users } = require("../models");
const { StatusCode, ResponseMessage } = require("../helpers/httpStatus");
const { compareSync } = require("bcrypt");
const bcrypt = require("bcrypt");
const { where } = require("sequelize");
// const { hashPassword, isEmailUsed } = require("../middleware/validate.users");

// user auth Login
exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(StatusCode.BAD_REQUEST).json({
      message: ResponseMessage.Notrequired,
    });
  }

  const user = await Users.findOne({
    where: {
      email: email,
    },
  });

  if (!user) {
    return res.status(StatusCode.BAD_REQUEST).json({
      message: ResponseMessage.Emailnot,
    });
  } else if (user.isActive === false) {
    return res.status(StatusCode.Unprocessable_Entity).json({
      message:
        "Email sudah terdaftar dan status akun telah nonaktif, silahkan menggunakan email yang lain",
    });
  }

  // check password
  const isPasswordCorrect = compareSync(password, user.password);

  if (!isPasswordCorrect) {
    return res.status(StatusCode.BAD_REQUEST).json({
      message: ResponseMessage.Wrongpass,
    });
  }

  // jwt
  const token = jwt.sign({ id: user.user_id }, "Library", {
    expiresIn: "1d",
  });

  return res.status(StatusCode.OK).json({
    message: ResponseMessage.LoginSuccess,
    token,
  });
};

exports.register = async (req, res) => {
  const { username, email, password } = req.body;

  // Validate user input
  if (!username || !email || !password) {
    return res.status(StatusCode.BAD_REQUEST).json({
      message: "Username, email, dan password dibutuhkan",
    });
  }

  try {
    // Check if email has been used
    const isEmailUsed = await Users.findOne({
      where: { email: email },
    });

    if (isEmailUsed) {
      return res.status(StatusCode.BAD_REQUEST).json({
        message: "Email sudah digunakan",
      });
    }

    // Create new user
    const newUser = await Users.create({
      username: username,
      email: email,
      password: password,
    });

    // Send response with user information
    return res.status(StatusCode.OK).json({
        message: ResponseMessage.SuksesRegistered,
        data: newUser
    })
  } catch (error) {
    console.error("Error while registering user:", error);
    return res.status(StatusCode.INTERNAL_SERVER_ERROR).json({
      message: ResponseMessage.FailRegistered,
      error: error.message,
    });
  }
};

// // user auth login
// exports.userLogin = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const userRecord = await adminFirebase.auth().getUserByEmail(email);
//     // Authenticated successfully
//     res.json({ message: "Login berhasil", user: userRecord.toJSON() });
//   } catch (error) {
//     res.status(401).json({ error: "gagal melakukan autentikasi" });
//   }
// };

// // auth google validate
// exports.googleValidate = (req, res) => {
//   const { uid, fcm_token } = req.body;
//   adminFirebase
//     .auth()
//     .getUser(uid)
//     .then((result) => {
//       const data = result.providerData[0];
//       User.findOne({ where: { uid } }).then((result) => {
//         if (!result) {
//           User.create({
//             uid,
//             fcm_token,
//             nama: data.displayName,
//             email: data.email,
//             role_id: 2,
//             isActive: true,
//             photo: data.photoURL,
//             no_telp: data.phoneNumber ? data.phoneNumber : null,
//           }).then((result) => {
//             // jwt
//             const token = jwt.sign({ id: result.user_id }, "Library", {
//               expiresIn: "30d",
//             });

//             return res.status(StatusCode.OK).json({
//               message: ResponseMessage.LoginSuccess,
//               token,
//               data,
//             });
//           });
//         } else if (result.isActive === false) {
//           return res.status(StatusCode.Unprocessable_Entity).json({
//             message:
//               "Email sudah terdaftar dan status akun telah nonaktif, silahkan menggunakan email yang lain",
//           });
//         } else {
//           const updateFcmToken = User.update(
//             {
//               fcm_token,
//             },
//             {
//               where: {
//                 uid,
//               },
//             }
//           );

//           // jwt
//           const token = jwt.sign({ id: result.user_id }, "Library", {
//             expiresIn: "30d",
//           });

//           return res.status(StatusCode.OK).json({
//             message: ResponseMessage.LoginSuccess,
//             token,
//             data,
//           });
//         }
//       });
//     })
//     .catch(() => {
//       return res.status(StatusCode.BAD_REQUEST).json({
//         message: ResponseMessage.LoginFailed,
//       });
//     });
// };
