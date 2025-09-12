const express = require("express");


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
app.listen("4000", () => {
    console.log("Servidor correriendo en el puerto 4000")
})
