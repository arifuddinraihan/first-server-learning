// local module

const { add } = require('./other.js')

const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.writeHead(200, { "Content-type": "application/json" });
        res.write(JSON.stringify({course : "ACC Node Mongo"}));
        res.end();
    }
    else if (req.url == "/contact") {
        res.writeHead(200, { "Content-type": "text/html" });
        res.write('<p>This is Contact Page</p>');
        res.end();
    }
    else if (req.url == "/about") {
        res.writeHead(200, { "Content-type": "text/html" });
        res.write('<p>This is About Page</p>');
        res.end();
    }
});

const PORT = 5000;
server.listen(PORT)
console.log(`Server is running at : ${PORT}`);