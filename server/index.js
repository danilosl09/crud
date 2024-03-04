const express = require("express");
const app = express();
const db = require("mysql");

const port = 3001;


app.listen(port, () => {
    console.log('Servidor rodando na porta ' + port);
})