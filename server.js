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
<<<<<<< HEAD
const Role = db.Role;





=======
// const Role = db.role;

// db.mongoose
//     .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`,{
//         useNewUrlParser : true,
//         useUnifiedTopology: true
//     })
//     .then(() =>{
//         console.log("Successfully connected to Mongo Database");
//         initial();
//     })
//     .catch(err =>{
//         console.error("connection error", err);
//         process.exit();
//     });
 
>>>>>>> 5a84f20a461e8381455bcd5cb39b1012755ee607

app.get("/", (req,res) =>{
    res.json({ message : "Welcome To login api application"});
});


// setting port 
const PORT = process.env.PORT || 8080;

app.listen(PORT, ()=>{
    console.log(`server is running on port : ${PORT}.`)
<<<<<<< HEAD
});
=======
});



// function initial(){
//     Role.estimatedDocumentCount((err, count) =>{
//         if(!err && count === 0){
//             new Role({
//                 name:"user"
//             }).save(err=>{
//                 if(err) {
//                     console.log("error",err);
//                 }
//                 console.log("added 'user' to roles collection");
//             })
//         }
//     })
// }
>>>>>>> 5a84f20a461e8381455bcd5cb39b1012755ee607
