const Users = require('../models/model')
const bcrypt = require('bcrypt')
const { generatingToken, verificationOfToken } = require('../auth/authentication')


const logInControls = async (req, res) => {
    try {
        const dataForLogIn = {
            email: req.body.email,
            password: req.body.password
        }
        const dataOfUserWhoLoggingIn = await Users.find({ email: dataForLogIn.email })
        // console.log(dataOfUserWhoLoggingIn[0]._id.id);

        const isPasswordValid = await bcrypt.compare(dataForLogIn.password, dataOfUserWhoLoggingIn[0].password)
        if (isPasswordValid && dataForLogIn.email == dataOfUserWhoLoggingIn[0].email) {
            console.log(dataOfUserWhoLoggingIn[0]._id);
            const tokenGeneratedFromUserId = generatingToken(dataOfUserWhoLoggingIn[0]._id.id)
            res.cookie("User", tokenGeneratedFromUserId)
            .send({
                status:200,
                Message: `${dataOfUserWhoLoggingIn[0].name} Is Logged In SuccessFull`
            })
        }
        else{
            console.log("Invalid Credentials");
            res.send({
                Message: " Invalid User Credentials"
            })
        }
    } catch (error) {
        console.log(error.message);
        res.send({
            status: 400,
            message: "something went wrong"
        })
    }
}

module.exports = logInControls