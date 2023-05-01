// import http module that allows you to create a server:
const http = require("http");

// since this will be run from our pc:
const hostname = "127.0.0.1";
const port = 3000;

// const server = http.createServer((req, res) => {
//     // Extract the url path from the request
//     //v shorthand for url = req.url
//     const {url} = req;
//     console.log(`The URL path is: ${url}`);
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World')
// });

const server = http.createServer((req, res) => {
    // Extract the url path from the request.
    const {url} = req;
    console.log(`The URL path is: ${url}`);

    if (url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello World')
    } else if (url === '/favicon.ico') {
        res.statusCode = 200;
        res.end('')
    } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('This is not the home page')
    }
});

// start server by calling the listen() function:
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
