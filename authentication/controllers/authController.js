import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

async function register(req,res){
    try {
        const {fullName, email, password }  = req.body;

        //Checking if user already exists
        const existingUser = await User.findOne({email});
        if (existingUser)
            return res.status(400).json({message: "User already exists"});

        //Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        console.log(req.body);
        //Create user
        const newUser = new User({
            fullName,
            email,
            password: hashedPassword
        });
        
        await newUser.save();
        res.status(201).json({message: "User registered successfully"});
    } catch (error) {
        res.status(500).json({message: "Server error", error});
    }
};

async function login (req, res){
    try {
        const {email, password} = req.body;

        //Check if user exists
        const user = await User.findOne({email});
        if (!user) {
            return res.status(404).json({message: "User not found"})
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch){
            return res.status(401).json({message: "Invalid credentials"});
        }

        //Generate JWT
        const token = jwt.sign(
            {userId: user._id, role: user.role },
            process.env.JWT_SECRET,
            {expiresIn: "7d"}
        );

        res.json({
            token,
            user: {
                _id: user._id,
                fullName: user.fullName,
                email: user.email,
                role: user.role
            }
        });
    } catch (error) {
        res.status(500).json({error: "Server error", details: error.message});
    }
};

async function getProfile(req,res) {
    try {
        const user = await User.findById(req.user.userId).select("-password");
        if (!user) {
            return res.status(404).json({message: "User not found"});
        } else {
            res.json(user)
        }
    } catch (error) {
        res.status(500).json({message: "server error", error})
    }
}
export default {
    register, login, getProfile
}