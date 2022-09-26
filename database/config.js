const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27107/testing")
.then(() => console.log("Database connected!"))
.catch(err => console.log(err));;