
import mongoose from "mongoose"


const userSchema = new mongoose.Schema({
    username : { type : String , required : true , trim : true , lowercase: true},
    email : { type: String , required :true , unique: true  , lowercase:true},
    password : {type : String  , required: true},
    role: {type: String , enum: ["admin" , "customer" , "seller"] , default: "customer" , required: true , lowercase: true} ,
    otp: {
        code : {type: Number},
        receivedAt: {type: Date},
        expiresAt: {type: Date}
    }
,
    passwordOtp: {
        code: {type: Number},
        receivedAt: {type: Date},
        expiresAt : {type: Date} 
    }
} , {timestamps: true})


export const userModel = mongoose.models.User || mongoose.model("User" , userSchema )