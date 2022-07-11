// Librerias
const express = require("express");

// Modelo


// Libreria rutas
const router = express.Router();


// Routes code

router.route("/").get((req, res) => {
    res.status(200).send({msg: "Hola!, Bienvenido al servidor"});
});


module.exports = router;


