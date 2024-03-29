const express=require("express");
const app=express();

//Clustering Means Running Multiple Threads of Servers And Workers


app.get("/",(req,res)=>{
    return res.json({message:`Hello How Are ${process.pid} You`});
});



app.listen(8000,()=>{
    console.log("Server Started");
});