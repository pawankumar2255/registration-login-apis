const logOutContols = (req,res)=>{
    res.clearCookie('User').send("Logged Out Successfully")
}

module.exports = logOutContols