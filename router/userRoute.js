var express = require("express")
var router = express.Router();
var userModel = require("../model/user")

router.get('/user',async(req,res)=>{
    try {
        var data = await userModel.find()
        res.send(data)
    } catch (error) {
        res.send(error)
    }
})

router.post('/login',async(req,res)=>{
    const user = await userModel.findOne({ email: req.body.email });
    if (!user) {
      return res.send("error")
    }  
    try {
        if (user.password === req.body.password) {
            res.send("login successful")
        } else {
            res.send("invalid crendentials")
        }
    } catch (error) {
        res.send(error)
    }
})

module.exports = router