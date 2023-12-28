const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
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
        }); //going to our request and registring event listener. For create server, node implicitly creates one for us, now we do this on our own by using the "on" method. Now "on" allows us to listen to certain events and the event i want to listen here is the data event.
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message);

        });

        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }


    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title> My first page </title></head>');
    res.write('<body><h1> Hello from my NodeJS server! </h1></body>');
    res.write('</html>');
    res.end();
});
// above is our create server callback function

server.listen(5000);