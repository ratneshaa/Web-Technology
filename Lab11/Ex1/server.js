const http = require('http');

const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'text/html');

    res.write('<h1>Welcome to Node.js Server</h1>');
    res.write('<p>This is my first Node.js web server.</p>');

    res.end();

});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});