const http = require("http");
const fs = require("fs");
const url = require("url");
const express=require("express");



//Handler FUnction Provided By Express
const app=express();
app.get("/",(req,res)=>{
    return res.send(`Home Page Here ${req.query.name} Age is ${req.query.age}`);
});

app.get("/about",(req,res)=>{
    return res.send("About Page Here");
});

app.listen(8000,()=>{console.log("Server Started");});
