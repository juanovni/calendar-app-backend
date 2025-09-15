/* 
    Rutas de Eventos / Event
    host + /api/events
*/

const { Router } = require("express");
const { validateJWT } = require("../middlewares/validate-jwt")
const { getEvents, addEvents, updateEvents, deleteEvents } = require("../controllers/events")
const { check } = require('express-validator');
const { validateFields } = require("../middlewares/validate-fields");
const { isDate } = require("../helpers/isDate");

const route = Router();

route.use(validateJWT)// de aqui para abajo se protegen las rutas o de forma saltada

//1. Primera forma
/* route.get("/", getEvents);
route.use(validateJWT)
route.post("/", addEvents); */


// 2. Forma
route.get("/", getEvents);

route.post("/", [
    check("title", "El titulo es obligatorio").not().isEmpty(),
    check("start", "Fecha de inicio es obligatorio").custom(isDate),
    check("end", "Fecha fin es obligatorio").custom(isDate),
    validateFields
], addEvents);

route.put("/:id", updateEvents);
route.delete("/:id", deleteEvents);

/* route.get("/", validateJWT, getEvents);
route.post("/", validateJWT, addEvents);
route.put("/:id", validateJWT, updateEvents);
route.delete("/:id", validateJWT, deleteEvents); */

module.exports = route;