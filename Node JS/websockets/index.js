const express=require('express');
const {Server}=require('socket.io');
const http=require('http'); 
const app=express();
const PORT=9000;
const server= http.createServer(app);
const io=new Server(server);


app.use(express.static("./public"));
app.get("/",(req,res)=>{
    return res.sendFile("/public/index.html");
});

io.on("connection",(socket)=>{
    console.log("A new user Has been connected",socket.id);
    socket.on("userMessage",message=>{
        console.log("New user Message",message);
        io.emit("message",message);
    })

});

server.listen(PORT,()=>console.log("Server Started"));

// app.listen(8000,()=>{console.log("Server Strated")});