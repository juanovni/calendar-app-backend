const { response } = require('express'); // No vuelve a hacer la carga porque esta en memoria
const User = require("../models/User");
const bcrypt = require("bcryptjs")

const addUser = async (req, res = response) => {
    try {
        const { name, email, password } = req.body;
        let user = await User.findOne({ email });

        if (user) {
            res.status(400).json({
                ok: false,
                msg: 'Un usuario existe con ese correo',
            })
        }

        user = new User(req.body);
        // Encriptar contrasna
        const salt = bcrypt.genSaltSync(); // default 10
        user.password = bcrypt.hashSync(password, salt);

        await user.save();

        res.status(201).json({
            ok: true,
            msg: 'Create User',
            id: User.id
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: "Error al crear el user",
        })
    }
    /*  const { name, email, password } = req.body; */
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


}

const loginUser = (req, res = response) => {
    const { name, password } = req.body;

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