// importar dependencia
const express = require('express');
const path = require("path");
const pages = require("./pages.js");


// iniciando o express
const server = express();

// ligar o servidor
server
    // utilizando os arquivos estáticos
    .use(express.static("public"))

    // configurar template engine
    .set("views", path.join(__dirname, "views"))
    .set("view engine", "hbs")

    .use(express.urlencoded({ extended: true }))


    // rotas de aplicação
    .get("/", pages.index)
    .get("/orphanage", pages.orphanage)
    .get("/orphanages", pages.orphanages)
    .get("/create-orphanage", pages.createOrphanage)
    .post("/save-orphanage", pages.saveOrphanage);

server.listen(5500, () => {
    console.log("Server started");
});
