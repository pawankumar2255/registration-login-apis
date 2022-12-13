const express = require('express')
const { verificationOfToken } = require('../auth/authentication')
const profileControls = require('../controls/profile')
const profileRoute = express.Router()

profileRoute.get('/', verificationOfToken, profileControls)

module.exports = profileRoute