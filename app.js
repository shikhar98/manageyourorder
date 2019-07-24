const express=require('express')
const app=express()
const orderRouter = require('./routes/orderRouter');
const addorderRouter = require('./routes/addorderRouter');
const editorderRouter = require('./routes/editorderRouter');
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static("public"));
app.use('/', addorderRouter);
// app.use('/addorder', orderRouter);
// app.use('/editorder', editorderRouter);
app.listen(3000)