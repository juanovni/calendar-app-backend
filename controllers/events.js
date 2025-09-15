const { response } = require('express'); // No vuelve a hacer la carga porque esta en memoria

const getEvents = async (req, res = response) => {
    res.status(201).json({
        ok: true,
        msg: 'Get Events',
    })
}

const addEvents = async (req, res = response) => {
    res.status(201).json({
        ok: true,
        msg: 'Add Events',
    })
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