const express= require("express");
const app = express();

const importData= require('./legal.json');

let port=process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.send("Hello world");
})

app.get("/legal",(req,res)=>{
    res.send(importData);
})
app.listen(port,()=>{
    console.log(`App running on port http://localhost:${port}`)
})