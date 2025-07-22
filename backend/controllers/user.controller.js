import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// User registeration
export const register = async (req, res) =>{
    try {
        // taking this inputs from user for registeration
        const {fullname, email, password} = req.body;
        if(!fullname || !email || !password)
        {
            return res.status(400).json({
                mesaage : "All fields are required.",
                success : false
            })
        };

        // if use already exists
        const user = await User.findOne({email});
        if(user)
        {
            return res.status(400).json({
                message : "User with this mail already exists.",
                success : false
            })
        };

        // creating user
        const hashedPassword = await bcrypt.hash(password, 10); // 10 default salt number
        await User.create({
            fullname,
            email,
            password : hashedPassword
        });

        return res.status(201).json({
            message : "Acoount ceate successfully.",
            success : true
        })
    } catch (error) {
        console.log(error);
        
    }
}



// User login
export const login = async(req, res) =>{
    try {
        const {email, password} = req.body;
        if(!email || !password)
        {
            return res.status(400).json({
                mesaage : "All fields are required.",
                success : false
            })
        };

        const user = await User.findOne({email});
        if(!user)
        {
            return res.status(400).json({
                message : "Incorrect email or password.",
                success : false
            })
        };

        // password matching
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if(!isPasswordMatch)
        {
            return res.status(400).json({
                message : "Incorrect email or password.",
                success : false
            })
        };

        // generating jwt token
        const tokenData = {
            userID : user._id
        }

        const token = await jwt.sign(tokenData, process.env.SECRET_KEY, {expiresIn:'1d'});  // token is generated
        // cookie
        return res.status(200).cookie("token", token, {maxAge:1*24*60*60*1000, httpOnly:true, samesite:'strict'}).json({
            message : `Welocme back ${user.fullname}`,
            success:true
        })

    } catch (error) {
        console.log(error);
        
    }
}



// User logout 
export const logout = async (req,res)=>{
    try {
        return res.status(200).cookie("token", "", {maxAge:0}).json({
            message : "User logout successfully.",
            success : true
        })
    } catch (error) {
        console.log(error);
        
    }
}