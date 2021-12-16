const express = require("express");
const bodyParser = require("body-parser");
const app = express()
var db = require('./db')
var productsRoute = require('./routes/productsRoute')
var userRoute = require('./routes/userRoute')
var orderRoute = require('./routes/orderRoute')
app.use(bodyParser.json());
const path = require('path');
app.use('/api/products/' , productsRoute)
app.use('/api/users/',userRoute)
app.use('/api/orders/',orderRoute)

//----------deployment-----------------

__dirname = path.resolve();

if(process.env.NODE_ENV==="production") {
 app.use(express.static(path.join(__dirname,"/frontend/build")));

 app.get('*',(req,res)=>{
   res.sendFile(path.resolve(__dirname,"frontend","build","index.html"));
 });
}else{
	app.get("/", (req, res)=>{
      res.send("API is running..");
	});
}


//----------deployment-----------
   

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Node JS Server Started`));