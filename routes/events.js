/* 
    Rutas de Eventos / Event
    host + /api/events
*/

const { Router } = require("express");
const { validateJWT } = require("../middlewares/validate-jwt")
const { getEvents, addEvents, updateEvents, deleteEvents } = require("../controllers/events")

const route = Router();

route.use(validateJWT)// de aqui para abajo se protegen las rutas o de forma saltada

//1. Primera forma
/* route.get("/", getEvents);
route.use(validateJWT)
route.post("/", addEvents); */


// 2. Forma
route.get("/", getEvents);
route.post("/", addEvents);
route.put("/:id", updateEvents);
route.delete("/:id", deleteEvents);

/* route.get("/", validateJWT, getEvents);
route.post("/", validateJWT, addEvents);
route.put("/:id", validateJWT, updateEvents);
route.delete("/:id", validateJWT, deleteEvents); */

module.exports = route;