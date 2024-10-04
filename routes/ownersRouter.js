const express = require('express');
const router = express.Router();
const ownerModel = require("../models/ownerModel");



router.get("/", function(req,res){
    res.send("Hey its working");
})

if(process.env.NODE_ENV ==="development"){
    router.post("/create", function(req, res){
        res.send("its working");
    })
}


router.post("/create", function(req,res){
    res.send("working");
})

module.exports = router;