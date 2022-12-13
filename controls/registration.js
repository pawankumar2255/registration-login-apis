const Users = require('../models/model')
const bcrypt = require('bcrypt')


const registrationControls = async(req,res)=>{
    try {
        const dataForUser = {
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            confirmPassword:req.body.confirmPassword,
            phone:req.body.phone
        }
        const isUserAlreadyExist = await Users.find({email:dataForUser.email})
        if (isUserAlreadyExist.length !== 0){
            res.send('User by this email is already exist')
        }
        else {
            if ( dataForUser.password === dataForUser.confirmPassword){
            
                const hashedPassword = await bcrypt.hash(dataForUser.password, Number(process.env.HASHING_SALT))
                console.log();
    
                dataForUser.password = hashedPassword
                const newUser = await Users(dataForUser).save()
                console.log(newUser);
                res
                .send({
                    status:201,
                    data:newUser,
                    Message:"User Registration SuccessFull"
                })
            }else{
                console.log("Password not matched");
                res.send({
                    status:400,
                    Message:"Bad Request"
                })
            }
        } 
    } catch (error) {
        console.log(error.message);
        res.send({
            status:400,
            message:"something went wrong"
        })
    }
}


const allUser = async (req,res)=>{
    try {
        const allUsers = await Users.find()
        res.send({
            status:200,
            Message:"All User are here",
            Data : allUsers
        })
    } catch (error) {
        console.log(error.message);
        res.send({
            status:400,
            message:"something went wrong"
        })
    }
}


const userByEmailId = async (req,res)=>{
    try {
        const email= req.params.email
        const user = await Users.findOne({where:{email}})
        res.send({
            status:200,
            Data:user
        })
    } catch (error) {
        console.log(error.message);
        res.send({
            status:400,
            message:"something went wrong"
        })
    }
}




module.exports = {registrationControls,allUser,userByEmailId}