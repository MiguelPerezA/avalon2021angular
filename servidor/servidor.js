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
app.delete('/libros/:isbn', (req, res) => {
    let libroBorrar = listaLibros.filter(function(elem) {
        return elem.isbn == req.params.isbn;
    })[0];

    let posicion = listaLibros.indexOf(libroBorrar);

    listaLibros.splice(posicion, 1);
    //res.status(204).send();
    res.sendStatus(204);
})

app.listen(port, () => {
    console.log(`Node Corriendo en http://localhost:${port}`)
})