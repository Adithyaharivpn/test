var express = require("express");
var cors = require("cors")
require("../db")
var userRoute = require("../router/userRoute");
const productRoute = require("../router/productRoute");
var app= express();
app.use(cors());

app.use(express.json())
var port=3000;

app.use('/api',userRoute)
app.use('/product',productRoute)



app.listen(port,()=>{
    console.log(`server up and running on port ${port}`)
})
