const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    birthday:{
        type:String,
        required:true
    },
    avatar:{
        type:Array,
        required:true
    }
})

module.exports = mongoose.model("User", userSchema)