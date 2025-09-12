const express = require("express");
require('dotenv').config(); // variables de entorno
const { dbConntection } = require("./database/config")

// CREAR SERVIDOR EXPRESS
const app = express();

// DB
dbConntection();

// MIDDEWLARE - sSe ejecutan antes de cualquier PETICIN GET, POST
app.use(express.static('public'));


// POST Y PARSE DEL BODY
app.use(express.json());

// PETICIONES
app.use('/api/auth', require('./routes/auth'))
/* app.get("/", (req, resp) => {
    resp.json({
        ok: true,
    })
})
 */

// ESCUCHA PETICIONES
app.listen(process.env.PORT, () => {
    console.log(`ervidor correriendo en el puerto ${process.env.PORT}`)
})
