const express = require("express");
const app = express();

const PORT = 8080;
const HOST = '0.0.0.0';


app.get('/', (req, res) => {
    res.json({msg:"message from container 1"});
});

app.listen(HOST,PORT,()=>{
    console.log("server start");
});