require("dotenv").config();
const userController = require("../../controller/user.controller");
const Authjwt = require('../../middleware/auth.jwt');

module.exports = (express, app, default_router) => {
  const router = express.Router();

  router.get("/users",[Authjwt], userController.findAllUser); // user findall

  app.use(default_router, router);
};
