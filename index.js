const express = require("express");
require('dotenv').config(); // variables de entorno


// CREAR SERVIDOR EXPRESS
const app = express();



// MIDDEWLARE - sSe ejecutan antes de cualquier PETICIN GET, POST
app.use(express.static('public'));


// PETICIONES
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
