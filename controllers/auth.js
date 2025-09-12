const { response } = require('express'); // No vuelve a hacer la carga porque esta en memoria
const { validationResult } = require('express-validator');


const addUser = (req, res = response) => {
    const { name, email, password } = req.body;
    // se reemplazo todo esto con ayuda del middleware validateFields
    /* const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped(),
        })
    } */

    /* if (name.length < 5) {
        return res.status(400).json({
            ok: false,
            msg: 'El nombre debe tener 5 letras',
        })
    } */

    res.status(201).json({
        ok: true,
        msg: 'Create User',
        name: name,
        email: email,
        password: password
    })
}

const loginUser = (req, res = response) => {
    const { name, password } = req.body;
    /*  const errors = validationResult(req);
 
     if (!errors.isEmpty()) {
         return res.status(400).json({
             ok: false,
             errors: errors.mapped(),
         })
     } */
    res.status(200).json({
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