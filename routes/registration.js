const express = require('express')
const {registrationControls, allUser, userByEmailId} = require('../controls/registration')

const registrationRouter = express.Router()

registrationRouter.post('/',registrationControls)
registrationRouter.get('/', allUser)
registrationRouter.get('/:email', userByEmailId)


module.exports = registrationRouter