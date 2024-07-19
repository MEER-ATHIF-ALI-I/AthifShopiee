const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express()
var db = require('./db')
var productsRoute = require('./routes/productsRoute')
var userRoute = require('./routes/userRoute')
var orderRoute = require('./routes/orderRoute')
app.use(bodyParser.json());
app.use(cors({
    origin:["https://mern-athif-shopiee.vercel.app/"],
    methods:["GET","POST", "PUT", "DELETE"],
    credentials: true
  }))
const path = require('path');
app.use('/api/products/' , productsRoute)
app.use('/api/users/',userRoute)
app.use('/api/orders/',orderRoute)


   

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Node JS Server Started`));