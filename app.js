// const http = require('http'); ------ since we have used the alternative of those two lines of codes there, that's why commenting out this thing here.

const express = require('express');  // ---- third party package

const app = express();

app.use((req, res, next) => {
    console.log('In the middleware!!');
    next();
});

app.use((req, res, next) => {
    console.log('In the another middleware!!');
    res.send('<h1>Hello from Express!!')
});

// const server = http.createServer(app);
// server.listen(5000);
//----- here we are using the alternative of above written codes
app.listen(5000);