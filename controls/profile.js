const profileControls =  (req,res)=>{
    try {
        userProfileData = {
            Name: req.userData.name,
            Email: req.userData.email,
            Phone : req.userData.phone
        }
        console.log(userProfileData);
        
    
        res.status(200).send(userProfileData)
    } catch (error) {
        console.log(error.message);
    }

}

module.exports  = profileControls