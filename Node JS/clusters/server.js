const express=require("express");
const os=require("os");
const cluster=require("cluster");

//Clustering Means Running Multiple Threads of Servers And Workers
const totalCPU=os.cpus().length;
if(cluster.isPrimary){
    for(let i=0;i<totalCPU;i++){
        cluster.fork();
    }
}
else{
    const app=express();
    app.get("/",(req,res)=>{
        return res.json({message:`Hello How Are ${process.pid} You`});
    });
    app.listen(8000,()=>{
        console.log("Server Started");
    });
}