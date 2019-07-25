const express=require('express')
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const app=express()
app.set("view engine", "ejs");
const orderRouter = require('./routes/orderRouter');
const addorderRouter = require('./routes/addorderRouter');
const editorderRouter = require('./routes/editorderRouter');
const deleteorderRouter = require('./routes/deleteorderRouter');
app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static("public"));
app.use(bodyParser.json())
app.use('/addorder', addorderRouter);
app.use('/', orderRouter);
app.use('/editorder', editorderRouter);
app.use('/deleteorder', deleteorderRouter);
app.listen( 3000 || process.env.PORT,()=>{
    console.log("Server is running")
});