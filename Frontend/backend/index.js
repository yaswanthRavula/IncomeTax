const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const app=express();
const mongoose=require('mongoose');
app.use(cors());
app.use(bodyParser.json());
const PORT=process.env.PORT||"8080";


app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.listen(PORT,()=>{console.log("port is listening")})
mongoose.connect("mongodb+srv://yaswanth07:Yy8309328761@cluster0.fgrp3.mongodb.net/?retryWrites=true&w=majority")
.then(console.log("MongoDb Connected"));
const clientRouter=require('./clientController');
app.use("/clients",clientRouter);