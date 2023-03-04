// local module

const { add } = require('./other.js')

const http=require('http')

const server=http.createServer((req, res) => {
    res.end('hello from your first server!')
});

const PORT=5000;
server.listen(PORT)
console.log(`Server is running at : ${PORT}`);