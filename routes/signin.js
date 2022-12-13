const express = require('express')
const logInControls = require('../controls/signin')
const logInRoutes = express.Router()

logInRoutes.post('/', logInControls)

module.exports = logInRoutes