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
    const createdBookId = await this.mongoDB.create(this.collection, book);
    return createdBookId || [];
  }
}

module.exports = BooksService;