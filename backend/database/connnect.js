const mongoose = require("mongoose")

const connect = (req, res) => {
    mongoose.connect(process.env.MONGO_URI)
    .then((connnect) => console.log("Database connected"))
    .catch((err) => console.log(err))
}

module.exports = connect