const http = require('node:http');
const fs = require('node:fs');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});

    if (req.url === '/') {
        res.write("Home page");    }
    // } else if (req.url === '/about') {

    //     let aboutFileBuffer = fs.readFileSync('./about.html');
    //     let aboutHtml = aboutFileBuffer.toString();

    //     aboutHtml = aboutHtml.replace('[about]', 'demo');

    //     res.write(aboutHtml);   
    // } else {
    //     res.writeHead(404, {'Content-Type': 'text/html'});

    //     res.write(`<html><body>
    //         <h1>404</h1></body></html>`);   
    // }

    res.end();
  })
  .listen(8080);