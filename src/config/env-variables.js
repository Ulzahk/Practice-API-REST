require('dotenv').config();

const config = {
  port: process.env.PORT || 4100,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  secret: process.env.SECRET,
};

module.exports = config;