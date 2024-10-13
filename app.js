const http = require('http');

const routes = require('./routes');

const server = http.createServer(routes);

// ------ Had we used Second alternative of exporting there in the routes.js file, these below lines could have been used 
// console.log(routes.someText);
// const server = http.createServer(routes.handler);

server.listen(5000);