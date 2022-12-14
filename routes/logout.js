const express = require('express')
const logOutContols = require('../controls/signout')
const logOutRoute = express.Router()

logOutRoute.get('/',logOutContols)

module.exports  =  logOutRoute