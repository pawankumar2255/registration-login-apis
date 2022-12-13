const mongoose = require('mongoose')
require('dotenv').config()
// console.log(process.env.DATABASE,"yyyyyyyy");
mongoose.set('strictQuery',true)
mongoose.connect(`mongodb://localhost:27017/${process.env.DATABASE}`).then(()=>{
    console.log(`database connected successfully`);
}).catch((err)=>{
    console.log(err.message);
})