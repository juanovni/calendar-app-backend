const { response } = require('express'); // No vuelve a hacer la carga porque esta en memoria
const User = require("../models/User");
const bcrypt = require("bcryptjs")
const { generateJWT } = require("../helpers/jwt")

const addUser = async (req, res = response) => {
    try {
        const { email, password } = req.body;
        let user = await User.findOne({ email });

        if (user) {
            res.status(400).json({
                ok: false,
                msg: 'Un usuario existe con ese correo',
            })
        }

        user = new User(req.body);
        // Encriptar contrasena
        const salt = bcrypt.genSaltSync(); // default 10
        user.password = bcrypt.hashSync(password, salt);

        await user.save();

        // GENERAR UN TOKEN
        const token = await generateJWT(user.id, user.name);

        res.status(201).json({
            ok: true,
            msg: 'Create User',
            id: user.id,
            name: user.name,
            token
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

const loginUser = async (req, res = response) => {
    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });

        if (!user) {
            res.status(400).json({
                ok: false,
                msg: 'El email o password incorrecto!',
            })
        }

        // Confirmar passwords
        const validPassword = bcrypt.compareSync(password, user.password)
        if (!validPassword) {
            res.status(400).json({
                ok: false,
                msg: 'El password es incorrecto!',
            })
        }

        // GENERAR UN TOKEN
        const token = await generateJWT(user.id, user.name)

        res.status(200).json({
            ok: true,
            msg: 'Login User',
            id: user.id,
            name: user.name,
            token
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: "Se debe comunicar con el administrador",
        })
    }


}

const renewToken = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'Renew Token'
    })
}



module.exports = { addUser, loginUser, renewToken }