var mongoose = require("mongoose")

mongoose.connect("mongodb+srv://adithyaharivpn:adithyahari@cluster0.acj9utp.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("Connnected to DB")
}).catch((error)=>{
    console.log(error)
})