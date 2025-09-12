/* 
    Rutas de Usuarios / Auth
    host + /api/auth
*/
const { Router } = require("express");
const route = Router();

route.get("/", (req, resp) => {
    resp.json({
        ok: true,
    })
})

module.exports = route;