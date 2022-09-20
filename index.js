const express = require("express");
// const cors= require("cors");
// require("./database/config");

const User = require('./database/Users'); 
const app = express();



app.use(express.json());
// app.use(cors());


app.post("/register",async (req,res)=>{

      
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    res.send(result);
})

app.post("/login",async(req,res)=>{
    
    let user = await User.findOne(req.body);
    res.send(user);
    // res.send(req.body);
})

app.listen(5000);


module.exports = app;