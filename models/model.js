const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    confirmPassword:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    }
})

const Users = mongoose.model('userinfo',userSchema)
module.exports = Users