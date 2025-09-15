const express = require("express");
require('dotenv').config(); // variables de entorno
const { dbConntection } = require("./database/config")
const cors = require("cors")

// CREAR SERVIDOR EXPRESS
const app = express();

// DB
dbConntection();

// CORS
app.use(cors())

// MIDDEWLARE - Se ejecuta antes de cualquier peticion GET, POST, DELETE
app.use(express.static('public'));

// PARSE DEL BODY <request>
app.use(express.json());

// PETICIONES
app.use('/api/auth', require('./routes/auth'))
// example
/* app.get("/", (req, resp) => {
    resp.json({
        ok: true,
    })
})
 */

// ESCUCHA PETICIONES
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`)
})
