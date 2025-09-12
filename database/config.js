const mongoose = require("mongoose");

const dbConntection = async () => {
    try {

        //console.log(process.env.DB_CNN)
        await mongoose.connect(process.env.DB_CNN, {
        });

        console.log("Online DB")

    } catch (error) {
        console.log(error);
        throw new Error("Error al conectarse a la Bd");
    }
}


module.exports = { dbConntection }