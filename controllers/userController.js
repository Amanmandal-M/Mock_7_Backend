const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Models Location
const { userModel } = require("../models/userModel");

const registerUser = async (req,res) => {
    const{ name,email,password,address} = req.body;
    try {
        const isPresent = await userModel.findOne({email});
        if(isPresent) return res.status(200).send({
            "Message":"User already exists"
        });

        bcrypt.hash(password , 5 , async (err,hash)=>{
            if(err) return res.status(500).send({
                "Message":"Contact to administrator"
            })

            const data = new userModel({ 
                name,
                email,
                password:hash,
                address
            });
            await data.save();

            res.status(201).send({
                "Message":"User Registered Successfully",
                "Data": data
            })
        })

        
    } catch (error) {
        res.status(500).send({
            "message":error.message
        });
        console.log(error.message);
    }
};

const loginUser = async (req,res) => {
    const { email, password } = req.body;
    try {
        const isPresent = await userModel.findOne({email: email});
        if(!isPresent) return res.status(401).send({
            "Message":"User not found"
        });

        const hashedPassword = isPresent?.password;

        bcrypt.compare(password, hashedPassword,(err,result)=>{
            if(!result) return res.status(404).send({
                "Message":"login failed"
            });
            
            const Normal_Token = jwt.sign({"masai":"masai"}, process.env.NORMAL_KEY,{expiresIn:"7d"});
                
            res.cookie("Normal_Token", Normal_Token);

            res.status(201).send({
                "Message":"Login successful",
                "Token": Normal_Token,
                "Data" : isPresent
            });
        })  
    } catch (error) {
        res.status(500).send({
            "message":error.message
        });
        console.log(error.message);
    }
};

const resetPassword = async (req,res) => {
    const { password } = req.body;
    const Id = req.params.id
    try {
        bcrypt.hash(password , 5 , async (err,hashed)=>{
            if(err) return res.status(401).send({
                "message": "Contact to administrator"
            });

            const data = await userModel.findByIdAndUpdate({_id:Id},{password : hashed});
            res.status(204).send({
                "Message":"Password Changed successfully"
            })
        });
        
    } catch (error) {
        res.status(500).send({
            "message":error.message
        });
        console.log(error.message);
    }
};

module.exports = { registerUser , loginUser , resetPassword}