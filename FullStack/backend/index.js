import express from 'express';
const app=express();
import cors from 'cors';
// app.use(cors());
app.use(express.static('dist'));
app.get("/",(req,res)=>{
     res.send("Server Is Ready");
})
app.get("/api/jokes",(req,res)=>{
    const jokes=[
        {
            id:1,
            title:'A Joke 1',
            content:"This Is A JOke 1"
        },
        {
            id:2,
            title:'A Joke 2',
            content:"This Is A JOke 2"
        }
        ,
        {
            id:3,
            title:'A Joke 3',
            content:"This Is A JOke 3"
        }
        ,
        {
            id:4,
            title:'A Joke 4',
            content:"This Is A JOke 4"
        }
    ];

    res.send(jokes);
})

app.listen(process.env.PORT||8000,()=>{console.log("Server Started")});




