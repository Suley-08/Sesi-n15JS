//NODE.JS
/*
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type' , 'text/plain');
    res.end('Hola Mundo');
});

server.listen(port, hostname, () => {
    console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
});
*/

//EXPRESS.JS
/*
const express = require('express');

const app = express()
const port = 3000;

app.get('/' , (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`El servidor se está esccuhando en http://localhost:${port}/`);
});
/*
