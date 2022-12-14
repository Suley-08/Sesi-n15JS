//node.js

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type' , 'text/plain');
    res.end('Hello Karen!');
});

server.listen(port, hostname, () => {
    console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`)
    console.log(`Karen Rivera Huamanricra`)
});



//express.js
/*
const express = require('express');

const app = express()
const port = 3000;

app.get('/' , (req, res) => {
    res.send('Hello World!');
    console.log('Karen Rivera ♥');
});

app.listen(port, () => {
    console.log(`El servidor se está escuchando en http://localhost:${port}/`)
    console.log(6*15);
});
*/