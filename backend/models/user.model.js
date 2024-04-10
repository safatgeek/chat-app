import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    fullname:{
        type: String,
        requied: true
    },
    username:{
        type: String,
        requied: true,
        unique: true
    },
    password:{
        type: String,
        requied: true,
        minlength: 6
    },
    gender:{
        type: String,
        requied: true,
        enum:["male", "female"]
    },
    profilePic:{
        type: String,
        default: ""
    },

}, { timestamps: true })

const User = mongoose.model("User", userSchema)

export default User;