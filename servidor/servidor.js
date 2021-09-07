const express = require('express')
const app = express()
const port = 8084
    //Es Necesario instalar (npm install cors --save) y activar CORS en servidor.js
var cors = require("cors");

app.use(cors());

let listaLibros = [];
listaLibros.push({ isbn: "1", titulo: "Java", autor: "Juan" });
listaLibros.push({ isbn: "2", titulo: "Java 2", autor: "Juan 2" });
app.get('/', (req, res) => {
    res.send('Hello World Node!')
})

app.get('/libros', (req, res) => {
    res.send(listaLibros);
})

app.listen(port, () => {
    console.log(`Node Corriendo en http://localhost:${port}`)
})