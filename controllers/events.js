const { response } = require('express'); // No vuelve a hacer la carga porque esta en memoria
const Event = require("../models/Event");

const getEvents = async (req, res = response) => {
    const events = await Event.find().populate('user', 'name');
    res.status(201).json({
        ok: true,
        events
    })
}

const addEvents = async (req, res = response) => {
    try {
        const eventDB = new Event(req.body)
        eventDB.user = req.uid;

        await eventDB.save();

        res.status(201).json({
            ok: true,
            event: eventDB,
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: "Error al crear un evento",
        })
    }
}

const updateEvents = async (req, res = response) => {
    const eventId = req.params.id;
    const uid = req.uid;
    try {
        const event = await Event.findById(eventId)

        if (!event) {
            return res.status(400).json({
                ok: false,
                msg: "Evento no existe",
            })
        }

        if (event.user.toString() !== uid) {
            return res.status(401).json({
                ok: false,
                msg: "No tiene privilegio de aditar este evento",
            })
        }
        const newEvent = {
            ...req.body,
            user: uid
        }
        //const eventUpdated = await Event.findByIdAndUpdate(eventId, newEvent) // Si lo dejamos asi devuelve el event viejo
        const eventUpdated = await Event.findByIdAndUpdate(eventId, newEvent, { new: true })
        res.status(201).json({
            ok: true,
            event: eventUpdated
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: "Hablar con el administrador",
        })
    }
}

const deleteEvents = async (req, res = response) => {
    const eventId = req.params.id;
    const uid = req.uid;
    try {
        const event = await Event.findById(eventId)

        if (!event) {
            return res.status(400).json({
                ok: false,
                msg: "Evento no existe",
            })
        }

        if (event.user.toString() !== uid) {
            return res.status(401).json({
                ok: false,
                msg: "No tiene privilegio de eliminar este evento",
            })
        }
        
        const eventDelete = await Event.findByIdAndDelete(eventId)
        res.status(201).json({
            ok: true,
            //event: eventDelete
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: "Hablar con el administrador",
        })
    }
}


module.exports = { getEvents, addEvents, updateEvents, deleteEvents }