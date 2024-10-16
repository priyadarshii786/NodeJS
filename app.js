const http = require('http');

const express = require('express');  // ---- third party package

const app = express();

const server = http.createServer(app);

// ------ Had we used Second alternative of exporting there in the routes.js file, these below lines could have been used
// console.log(routes.someText);
// const server = http.createServer(routes.handler);

server.listen(5000);