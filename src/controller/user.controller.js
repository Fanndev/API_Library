const { StatusCode, ResponseMessage } = require("../helpers/httpStatus");
const bcrypt = require("bcrypt");
const { Users } = require("../models");

// find all user
exports.findAllUser = (req, res) => {
  Users.findAll()
    .then((result) => {
      res.status(StatusCode.OK).json({
        message: ResponseMessage.Success,
        result,
      });
    })
    .catch((err) => {
      res.status(StatusCode.BAD_REQUEST).json({
        message: ResponseMessage.FailLoaded,
        err,
      });
    });
};
