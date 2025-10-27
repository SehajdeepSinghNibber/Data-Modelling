import mongoose from "mongoose"

const userSchema= new mongoose.Schema({
    username: {
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    password: {
        type:String,
        required:[true,"password is required"],
    },
    email: {
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    isActive: Boolean,
    },
    {timestamp:true}
)

export const User =mongoose.model('user', userSchema)