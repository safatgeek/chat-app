import User from "../models/user.model.js";
import bcryptjs from "bcryptjs"

export const signup = async (req, res) => {
    try {
        const { fullname, username, password, gender, confirmPassword } = req.body;


        if(password !== confirmPassword) {
            return res.status(400).json({error:"Passwords don't match !"})
        }

        const user = await User.findOne({username})

        if(user) {
            return res.status(400).json({error: "User already exists !"})

        }

        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const newUser = new User({
            fullname,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        });

        await newUser.save()

        newUser.password = undefined;

        res.status(201).json(
            newUser
        )



        // https://avatar.iran.liara.run/public/44


         
    } catch (error) {
        
    }
};

export const login =  (req, res) => {
    res.send("login Route");
    console.log("Login user")
};

export const logout =  (req, res) => {
    res.send("logout Route");
    console.log("Logout user")
};