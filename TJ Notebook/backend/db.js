const mongoose = require('mongoose');
mongoose.set("strictQuery", false);
require('dotenv').config();
// const mongoURI = "mongodb://localhost:27017/notebook"
const mongoURI=process.env.MONGO_DB;
const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongoose Successfully");
    })
}

module.exports = connectToMongo;