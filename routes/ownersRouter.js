const express = require('express');
const router = express.Router();
const ownerModel = require("../models/ownerModel");



router.get("/", function (req, res) {
    res.send("Hey its working");
})

if (process.env.NODE_ENV === "development") {
    router.post("/create", async function (req, res) {
        let owners = await ownerModel.find();
        if (owners.length > 0) {
            return res
                .status(503)
                .send("you dont have permission to create an owner");
        }

        let { fullname , email, password } = req.body;


         let createduser = await ownerModel.create({
            fullname,
            email,
            password,
        
        });
        res.status(201).send(createduser);

    })
}


module.exports = router;