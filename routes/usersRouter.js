const express = require('express');
const router = express.Router();
const isLoggedIn = require("../middleware/isLoggedin");
const newLocal = '../controllers/authController';
const { registerUser, loginUser} = require(newLocal);

router.get("/", function(req,res){
    res.send("Hey its working");
})
router.post("/register", registerUser);
router.post("/login", loginUser);


module.exports = router;