const http = require('http');

const express = require('express');  // ---- third party package

const app = express();

app.use((req, res, next) => {
    console.log('In the middleware!!');
    next(); // ----- next() allows the request to continue to the next middleware in line.
}); // ----- use allows us to add a new middleware function. It accepts an array of so-called handlers here and it has some other use cases too.

app.use((req, res, next) => {
    console.log('In the another middleware!!');
});

const server = http.createServer(app);


server.listen(5000);