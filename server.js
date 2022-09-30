const express = require("express");
const mongoose = require("mongoose");

const app = express();


const connectDB = async()=>{

    mongoose.connect('mongodb://localhost:27017/testing');
    const userSchema = new mongoose.Schema({});
    const users = mongoose.model('users',userSchema);
    const data = await users.find();
    console.warn(data);
}

connectDB();


// setting port 
const PORT = process.env.PORT || 8000;

app.listen(PORT, ()=>{
    console.log(`server is running on port : ${PORT}.`)
});
