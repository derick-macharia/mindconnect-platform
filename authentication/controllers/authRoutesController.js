import bcrypt from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import User from "../models/userModel.js"

export async function register(req, res){
    try {
        const {username, email, password, role} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({username, email, password:hashedPassword, role});
        await newUser.save();
        res.status(201).json({message: `Successfy registerd ${username} as ${role}`});
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
};

export async function login(req, res) {
    try {
        const {username, password} = req.body;
        const user = await User.findOne({username});

        if(!user){
            return res.status(404).json({message: `${username} is not registered`});
        }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if(!isPasswordMatch){
        return res.status(400).json({message: `Incorrect password`});
    }
    const token = jwt.sign({id: user._id, role:user.role},
        process.env.JWT_SECRET,
        {expiresIn: "1h"}
    );
    if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET is not defined in environment variables");
    }
    res.status(200).json({token});
    } catch (error){
        res.status(500).json({message: `Internal Server Erroe`});
    }
}

