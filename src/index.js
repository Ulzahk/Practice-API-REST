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

/* api.use(router);

const books = [
    {
        titulo : 'Lo que el viento se llevo',
        id_autor : '2',
        id_genero : '2'
    },
    {
        titulo : 'La Iliada',
        id_autor : '1',
        id_genero : '1'
    },
    {
        titulo : 'La Odisea',
        id_autor : '1',
        id_genero : '1'
    }
  ]


router.get("/", function(req, res) {
  console.log(req.query);
  console.log(req.body);

  res.json(books)
}); */


// Server
const server = api.listen(port, () =>{
  console.log(`Server listening at http://localhost:${server.address().port}`)
});
