const http = require('node:http');
const fs = require('node:fs');

const pokemons = [
    {
        name: 'Pikachu',
        age: 20,
        color: 'Yellow'
    },
    {
        name: 'Pikachu 2',
        age: 30,
        color: 'Red'
    }
];

// /post
// /post/1
// /post/2

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'});


    let url = req.url;

    if (url === '/posts') {
        res.write(JSON.stringify(pokemons))
    } else if (url.startsWith('/posts/')) {
        let urlPaths = url.split('/');
        let id = urlPaths[urlPaths.length - 1];

        res.write(`${id}`);
    }

    
    
    res.end();
  })
  .listen(3000);

  // Social media site UI
  // render using http module - /logic
  // create api using shared array
    // - /posts
    // - /posts/1
