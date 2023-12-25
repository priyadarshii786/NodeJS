const http = require('http'); //now this is simply the way you import files in nodeJS, "require()" either takes a path to another file, or if you don't have a path to one of your files, you can also import a core module, like http

/*
function rqListener(req, res) {

}
http.createServer(rqListener);
----- you don't have to explicitly create such a function though, you can also use so-called anonymous function...see below

http.createServer(function (req, res) {

});

*/

// or you can use an arrow function where you omit the function keyword and just have the two arguments followed by an equal sign and a greater sign....see below

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
        fs.writeFileSync('message.txt', 'DUMMY');
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