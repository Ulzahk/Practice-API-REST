const express = require('express')
const booksController =  require('../controllers/booksController');


const booksAPI = (api) => {
  const router = express.Router();
  api.use('/api/v1/books', router);

  // List All Books
  router.get('/', booksController.getBooks);

  // List One Book
  router.get('/:bookId', booksController.getBookById);

  // Create A Book
  router.post('/', booksController.createBook);

  // Update A Book
  router.put('/:bookId', booksController.updateBook);

  // Delete A Book
};

module.exports = booksAPI;