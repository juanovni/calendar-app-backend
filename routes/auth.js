/* 
    Rutas de Usuarios / Auth
    host + /api/auth
*/


const { Router } = require("express");
const route = Router();

const { addUser, loginUser, renewToken } = require("../controllers/auth");

route.post("/new", addUser)
route.post("/login", loginUser)
route.get("/renew", renewToken)

module.exports = route;