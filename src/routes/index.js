module.exports = (express, app) => {
  const api_default = `/api`;

  require("./api/auth.routes")(express, app, api_default);
  require("./api/book.routes")(express, app, api_default);
  require("./api/user.routes")(express, app, api_default);
};
