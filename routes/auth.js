/* 
    Rutas de Usuarios / Auth
    host + /api/auth
*/


const { Router } = require("express");
const { check } = require('express-validator');
const { validateFields } = require("../middlewares/validate-fields")
const { addUser, loginUser, renewToken } = require("../controllers/auth");
const { validateJWT } = require("../middlewares/validate-jwt")

const route = Router();

route.post("/new",
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe de ser de 6 caracteres').isLength({ min: 6 }),
        validateFields
    ],
    addUser
);
route.post("/login",
    [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe de ser de 6 caracteres').isLength({ min: 6 }),
        validateFields
    ],
    loginUser
);

route.get("/renew", validateJWT, renewToken)

module.exports = route;