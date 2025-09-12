const { response } = require('express'); // No vuelve a hacer la carga porque esta en memoria


const addUser = (req, res = response) => {
    const { name, email, password } = req.body;
    res.json({
        ok: true,
        msg: 'Create User',
        name: name,
        email: email,
        password: password
    })
}

const loginUser = (req, res = response) => {
    const { name, password } = req.body;

    res.json({
        ok: true,
        msg: 'Login User',
        name: name,
        password: password
    })
}

const renewToken = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'Renew Token'
    })
}



module.exports = { addUser, loginUser, renewToken }