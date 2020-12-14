const { MongoClient, ObjectId } = require('mongodb');
const { dbUser, dbPassword, dbHost, dbName } = require ('./env-variables');

const DB_USER = encodeURIComponent(dbUser);
const DB_PASSWORD = encodeURIComponent(dbPassword);
const DB_HOST = encodeURIComponent(dbHost);
const DB_NAME = encodeURIComponent(dbName);

const DB_URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

class MongoDatabase {
  constructor() {
    this.client = new MongoClient(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    this.dbName = DB_NAME
  };

  connect() {
    if(!MongoDatabase.connection){
      MongoDatabase.connection = new Promise((resolve, reject) => {
        this.client.connect( err => {
          if(err){
            reject(err);
          }
          console.log('Connected succesfully to MongoDB');
          resolve(this.client.db(this.dbName));
        })
      });
    }
    return MongoDatabase.connection;
  };

  getAll(collection, query){
    return this.connect().then(db => {
      return db.collection(collection).find(query).toArray();
    });
  };

  getById(collection, id){
    return this.connect().then(db => {
      return db.collection(collection).findOne({_id: ObjectId(id)});
    });
  };

  create(collection, data){
    return this.connect().then(db => {
      return db.collection(collection).insertOne(data);
    }).then(result => result.ops[0]);
  };

  update(collection, id, data){
    return this.connect().then(db => {
      return db.collection(collection).findOneAndUpdate({_id: ObjectId(id)}, {$set: data}, {returnOriginal: false});
    }).then(result => result.value || id)
  };

  delete(collection, id){
    return this.connect().then(db => {
      return db.collection(collection).deleteOne({_id: ObjectId(id)});
    }).then(() => id)
  }
}

module.exports = MongoDatabase;