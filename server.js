const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin : "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({extended: true}));

const db = require("./app/models/");
const Role = db.Role;






app.get("/", (req,res) =>{
    res.json({ message : "Welcome To login api application"});
});


// setting port 
const PORT = process.env.PORT || 8080;

app.listen(PORT, ()=>{
    console.log(`server is running on port : ${PORT}.`)
});