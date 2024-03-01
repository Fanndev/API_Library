require("dotenv").config();
const BookController = require("../../controller/book.controller");
const authjwt = require("../../middleware/auth.jwt");

module.exports = (express, app, default_router) => {
  const router = express.Router();

  //Book
  router.get("/books", [authjwt], BookController.GetallBook); //get allBook
  router.post("/add-books", [authjwt], BookController.addBook); //Added Books
  router.put("/books/:id", [authjwt], BookController.update_Book); //Update Books
  router.delete("/book/:id", [authjwt], BookController.DeleteBook); //Delete Books

  app.use(default_router, router);
};
