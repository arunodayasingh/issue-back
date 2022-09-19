const express = require("express");
require("./database/config");

const User = require('./db/config'); 

const app = express();

app.post("/login",(req,res)=>{
    res.send("api in progress")
})

app.listen(9000);
