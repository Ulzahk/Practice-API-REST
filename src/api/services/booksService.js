const MongoDatabase = require('../../config/database');

class BooksService {
  constructor(){
    this.collection = 'books';
    this.mongoDB = new MongoDatabase();
  };

  async getBooks () {
    const books = await this.mongoDB.getAll(this.collection);
    return books || [];
  };

  async getBookById ({ bookId }) {
    const book = await this.mongoDB.getById(this.collection, bookId);
    return book || [];
  }

  async createBook ({ book }) {
    const createdBook = await this.mongoDB.create(this.collection, book);
    return createdBook || [];
  }

  async updateBook ({ bookId, book }) {
    const updatedBook = await this.mongoDB.update(this.collection, bookId, book);
    return updatedBook || [];
  }

  async deleteBook ({ bookId }) {
    const deletedBook = await this.mongoDB.delete(this.collection, bookId);
    return deletedBook || [];
  }
}

module.exports = BooksService;