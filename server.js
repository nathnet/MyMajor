//const express = require('express');
const http = require('http');

const hostname = 'localhost';
const port = 3000;

//const app = express();

const server = http.createServer();

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`);
});