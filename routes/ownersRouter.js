const express = require('express');
const router = express.Router();
const ownerModel = require("../models/ownerModel");



router.get("/", function(req,res){
    res.send("Hey its working");
})




router.post("/create", function(req,res){
    res.send("working");
})

module.exports = router;