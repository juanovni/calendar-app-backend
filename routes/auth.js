/* 
    Rutas de Usuarios / Auth
    host + /api/auth
*/


const { Router } = require("express");
const { check } = require('express-validator');
const route = Router();

const { addUser, loginUser, renewToken } = require("../controllers/auth");

route.post("/new",
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe de ser de 6 caracteres').isLength({ min: 6 })
    ],
    addUser
);
route.post("/login",
    [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe de ser de 6 caracteres').isLength({ min: 6 })
    ],
    loginUser
);

route.get("/renew", renewToken)

module.exports = route;