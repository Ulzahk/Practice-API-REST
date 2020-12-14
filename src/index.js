const express = require("express");
const cors = require('cors');
const { port } = require('./config/env-variables');
const booksAPI = require("./api/routes/booksRoutes");

// API
const api = express();

// JSON Parser
api.use(express.json({extended: true, limit: '5mb'}));

//CORS
api.use(cors())

// Router
booksAPI(api);
api.get('/', (req, res, next) => (
  res.send('Server Status: [🟢 Online]\nFor more information go to https://github.com/Ulzahk/Practice-API-REST')
))

// Server
const server = api.listen(port, () =>{
  console.log(`Server listening at http://localhost:${server.address().port}`)
});
