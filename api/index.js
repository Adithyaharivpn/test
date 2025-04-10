var express = require("express");
var cors = require("cors")
require("../db")
var userRoute = require("../router/userRoute");
const productRoute = require("../router/productRoute");
var app= express();
app.use(cors());

app.use(express.json())
const port = process.env.PORT || 3000;

app.use('/api',userRoute)
app.use('/product',productRoute)

//test
//module.exports = (req, res) => {
 //   app(req, res);  // Handle the request using Express
//  };
 app.listen(port,()=>{
     console.log(`server up and running on port ${port}`)
 })
