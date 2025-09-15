const { response } = require('express'); // No vuelve a hacer la carga porque esta en memoria
const Event = require("../models/Event");

const getEvents = async (req, res = response) => {
    res.status(201).json({
        ok: true,
        msg: 'Get Events',
    })
}

const addEvents = async (req, res = response) => {


    try {
        const eventDB = new Event(req.body)
        eventDB.user = req.uid;

        await eventDB.save();


        res.status(201).json({
            ok: true,
            msg: 'Add Events',
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: "Error al crear el user",
        })
    }

}

const updateEvents = async (req, res = response) => {
    res.status(201).json({
        ok: true,
        msg: 'Update Events',
    })
}

const deleteEvents = async (req, res = response) => {
    res.status(201).json({
        ok: true,
        msg: 'Delete Events',
    })
}


module.exports = { getEvents, addEvents, updateEvents, deleteEvents }