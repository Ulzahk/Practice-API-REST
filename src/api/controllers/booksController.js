// const express = require('express');
const BooksService = require('../services/booksService');
const booksController = new BooksService();

module.exports = {
  getBooks: async (req, res, next) =>{
    try {
      const books = await  booksController.getBooks();
      const totalBooks = books.length.toString();
      res.status(200).json({
        message: 'books listed',
        totalBooks,
        books
      });
    } catch (err) {
      next(err)
    }
  },
  getBookById : async (req, res, next) => {
    try {
      const { bookId } = req.params;
      const book = await booksController.getBookById({ bookId });
      res.status(200).json({
        message: 'book listed',
        book
      });
    } catch (err) {
      next(err)
    }
  },
  createBook: async (req, res, next) => {
    const { body: book } = req; 
    try {
      const createdBookId = await booksController.createBook({ book })
      res.status(201).json({
        message: 'book created',
        data: createdBookId
      })
    } catch (err) {
      next(err)
    }
  },
}