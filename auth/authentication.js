const { json } = require('express')
const jwt = require('jsonwebtoken')
const Users = require('../models/model')
require('dotenv').config()


const generatingToken = (id)=>{
    return jwt.sign(id, process.env.SECRET_KEY)
}

const verificationOfToken = async (req,res,next)=>{
    if (req.headers.cookie){
        const extractedToken = req.headers.cookie.split('=')[1]
        const idFromExtractedToken = jwt.verify(extractedToken,process.env.SECRET_KEY)

        const userFromExtractedIdFromToken = await Users.findOne({where:{_id:idFromExtractedToken._id}})
        // console.log(userFromExtractedIdFromToken.id);
        req.userData = userFromExtractedIdFromToken
        console.log(req.userData);


        next()
    }
    else{
        res.send("login first")
    }
    
}

module.exports = { generatingToken, verificationOfToken }