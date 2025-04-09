var express = require("express")
var router = express.Router();
var productModel = require("../model/product")



router.get('/get',async(req,res)=>{
    try {
        var data = await productModel.find()
        res.send(data)
    } catch (error) {
        res.send(error)
    }
})

router.get('/get/:id',async(req,res)=>{
    try {
        var data = await productModel.findById(req.params.id)
        res.send(data)
    } catch (error) {
        res.send(error)
    }
})

router.post('/post',(req,res)=>{
    try {
        productModel(req.body).save()
        res.send("Data added")
    } catch (error) {
        console.log(error)
    }
})

router.put('/update/:id',async(req,res)=>{
    try {
        await productModel.findByIdAndUpdate(req.params.id,req.body)
        res.send("Data Updated")//set body in postman
    } catch (error) {
        console.log(error)
    }
})

router.delete('/delete/:id',async(req,res)=>{
    try {
        await productModel.findByIdAndDelete(req.params.id,req.body)
        res.send("Data Deleted")
    } catch (error) {
        console.log(error)
    }
})

module.exports = router