// import http module that allows you to create a server:
const http = require("http");

// since this will be run from our pc:
const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello World");
});

// start server by calling the listen() function:
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
