var express = require("express")
var router = express.Router();
var userModel = require("../model/user")

router.post('/',(req,res)=>{
    try {
        userModel(req.body).save()
        res.send("Data added")
    } catch (error) {
        console.log(error)
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