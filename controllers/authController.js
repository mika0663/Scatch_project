const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {generateToken}= require("../utils/generatetokens");




module.exports.registerUser = async function(req,res){
    try{
    let {email, password, fullname }= req.body;

        let user= await userModel.findOne({email: email});
        if(user) return res.status(401).send("ALready exists, Please login");
        

        bcrypt.genSalt(10, function(err, salt){
            bcrypt.hash(password, salt,async function(err, hash){
                if(err) return res.send(err.message)
                    else{
                        let user = await userModel.create ({
                            email,
                            password: hash,
                            fullname
                        });
                   let token = generateToken(user);
                       res.cookie("token", token);
                       res.send("user Created sucessfully");
                }
            });
        });

    
} catch(err){
    res.send(err.message);

}
}


module.exports.loginUser = async function(req,res){
    let { email, password } = req.body;

    let user = await userModel.findOne({email: email});
    if(!user) return res.send("email or Password incorrect");

    bcrypt.compare(password ,user.password ,function(err,result){
        if(result){
            let token =  generateToken(user);
            res.cookie("token",token);
            res.redirect("/shop"); // Adjust this path as necessary

        }
        else{
            return res.send("email or Password incorrect");
        }
    })
};


