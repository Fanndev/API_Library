const { Book } = require("../models");
const { ResponseMessage, StatusCode } = require("../helpers/httpStatus");
const { where } = require("sequelize");

//Get all Book
exports.GetallBook = (req, res) => {
  Book.findAll()
    .then((result) => {
      res.status(StatusCode.OK).json({
        message: ResponseMessage.Success,
        result,
      });
    })
    .catch((err) => {
      res.status(StatusCode.BAD_REQUEST).json({
        message: ResponseMessage.NotFound,
        err,
      });
    });
};

//Added Books
exports.addBook = async (req, res) => {
  const user_id = req.userId;
  let {
    judul,
    penulis,
    penerbit,
    tahun_terbit,
    genre,
    sinopsis,
    ketersediaan,
  } = req.body;
  try {
    const addBooks = await Book.create({
      user_id,
      judul,
      penulis,
      penerbit,
      tahun_terbit,
      genre,
      sinopsis,
      ketersediaan,
    });
    return res.status(StatusCode.CREATED).json({
      message: ResponseMessage.Added,
      data: addBooks,
    });
  } catch (error) {
    return res.status(StatusCode.BAD_REQUEST).json({
      message: ResponseMessage.FailAdded,
    });
  }
};

//Update Book
exports.update_Book = async (req, res) => {
  const user_id = req.userId;
  const book_id = req.params.id;
  let {
    judul,
    penulis,
    penerbit,
    tahun_terbit,
    genre,
    sinopsis,
    ketersediaan,
  } = req.body;

  try {
    const updateBook = await Book.update({
      judul,
      penulis,
      penerbit,
      tahun_terbit,
      genre,
      sinopsis,
      ketersediaan,
    },
    {
        where: {
            user_id,
            id: book_id
        }
    });
    return res.status(StatusCode.OK).json({
      message: ResponseMessage.Updated,
      data: updateBook,
    });
  } catch (error) {
    return res.status(StatusCode.BAD_REQUEST).json({
      message: ResponseMessage.FailUpdated,
    });
  }
};

//Delete Book
exports.DeleteBook = async (req, res) => {
  const user_id = req.userId;
  const book_id = req.params.id;

  try {
    const deleteBook = await Book.destroy({
      where: {
        user_id,
        id: book_id
      },
    });

    return res.status(StatusCode.OK).json({
        message: ResponseMessage.Removed,
        data: deleteBook
    })

  } catch (error) {
    return res.status(StatusCode.BAD_REQUEST).json({
        message: ResponseMessage.FailRemoved
    })
  }
};