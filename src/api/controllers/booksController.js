// const express = require('express');
const BooksService = require('../services/booksService');
const bookService = new BooksService();

module.exports = {
  getBooks: async (req, res, next) =>{
    try {
      const books = await  bookService.getBooks();
      const totalBooks = books.length.toString();
      res.status(200).json({
        message: 'Books Listed',
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
      const book = await bookService.getBookById({ bookId });
      res.status(200).json({
        message: 'Book Listed',
        book
      });
    } catch (err) {
      next(err)
    }
  },
  createBook: async (req, res, next) => {
    const { body: book } = req; 
    try {
      const createdBook = await bookService.createBook({ book })
      res.status(201).json({
        message: 'Book Created',
        data: createdBook
      })
    } catch (err) {
      next(err)
    }
  },
  updateBook: async (req, res, next) => {
    const { bookId } = req.params;
    const { body: book } = req;
    try {
      const updatedBook = await bookService.updateBook({ bookId, book });
      res.status(200).json({
        message: 'Book Updated',
        data: updatedBook
      })
    } catch (err) {
      next(err)
    }
  }
}