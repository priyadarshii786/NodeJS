const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title> Enter Message </title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title> My first page </title></head>');
    res.write('<body><h1> Hello from my NodeJS server! </h1></body>');
    res.write('</html>');
    res.end();
};

module.exports = requestHandler; // ------ this line is basically written so that this file successfully gets exported to the app.js file......there is multiple alternative of this line. See below.

/*
First alternative: -------- sometimes you export many things and you could do that by having an object which has like the handler "key" and requestHandler function.

module.exports = {
    handler: requestHandler;
    someText: 'Some hard coded text'
};


Second alternative: --------

module.exports.handler = requestHandler;
module.exports.someText = 'Some hard coded text'


Third alternative(shortcut):

exports.handler = requestHandler;
exports.someText = 'Some hard coded text'




*/