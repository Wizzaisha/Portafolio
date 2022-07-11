// Import librerias
const { json } = require("express");
const express = require("express");
const morgan = require("morgan");

// App
const app = express();


// Routes import
const home = require("./routes/home.js");


// Morgan
app.use(morgan("dev"));

// JSON parser
app.use(express.json());


// Routes

app.use("/", home);




// Module export
module.exports = app;