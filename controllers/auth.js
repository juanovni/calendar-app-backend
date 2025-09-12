const { response } = require('express'); // No vuelve a hacer la carga porque esta en memoria


const addUser = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'Create User'
    })
}

const loginUser = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'Login User'
    })
}

const renewToken = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'Renew Token'
    })
}



module.exports = { addUser, loginUser, renewToken }