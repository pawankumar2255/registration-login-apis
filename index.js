require('dotenv').config()
const bodyParser = require('body-parser')
const express = require("express")
const profileRoute = require('./routes/profile')
const registrationRouter = require('./routes/registration')
const logInRoutes = require('./routes/signin')
const application = express()
require('./db/db')
const port = process.env.PORT || 8000

application.use(express.json())
application.use(bodyParser.urlencoded({extended:false}))

application.get('/',(req,res)=>{
    console.log("Successfully Running in new application");
    res.send({
        status:200,
        Message: 'SuccessFull Running'
    })
})

application.use('/register',registrationRouter)
application.use('/login',logInRoutes)
application.use('/profile',profileRoute)

application.listen(port,()=>{
    console.log('====================================');
    console.log(`Server is listening to the port number ${port}`);
    console.log('====================================');
})

