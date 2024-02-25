require("dotenv").config();
const userController = require("../../controller/user.controller");

module.exports = (express, app, default_router) => {
  const router = express.Router();

  router.get("/users", userController.findAllUser); // user findall

  app.use(default_router, router);
};
