const mongoose=require('mongoose');

//Connection Promise

async function connectMongoDB(url){

mongoose.connect(url)
.then(()=>console.log("MongoDB Connected"))
.catch(()=>console.log("MongoDB Connection Failed due to "+err));
}

module.exports={connectMongoDB};