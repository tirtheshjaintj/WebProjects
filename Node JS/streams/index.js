const express=require('express');
const fs=require('fs');
const status=require("express-status-monitor");
const app=express();
const zlib=require("zlib");

fs.createReadStream("./data.txt","utf-8").pipe(
zlib.createGzip().pipe(fs.createWriteStream("./data.zip"))
);


app.use(status());
app.get("/",(req,res)=>{
    // return res.send("Hello Boi");
// fs.readFile("data.txt",(err,data)=>{
// return res.send(data.toString());
// });
const stream=fs.createReadStream("./data.txt","utf-8");
stream.on("data",(chunk)=>{
    console.log(chunk);
    res.write(chunk);
});
stream.on("end",()=>res.end());
});


app.listen(8000,(req,res)=>console.log("Server Started"));