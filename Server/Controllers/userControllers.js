import { userModel } from '../Models/UserSchema.js'
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import ErrorResponse from "../config/errorResponse.js"
import { sendEmail } from '../config/mockEmail.js'
//----------------------------------User Registration-----------------------------------



const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'Lax',
    path: '/',
    maxAge: 3600000 // 1 hour
};


export const handleUserRegistration = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return next(new ErrorResponse("All Fields are Required!", 400));
        }

        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return next(new ErrorResponse("Account with this email already exists. Try another email.", 409));
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const user = new userModel({
            username,
            email,
            password: hashedPassword,
        });



        await user.save();

        const payload = {
            userId: user._id,
            email: user.email,
            role: user.role,
        };

        const token = jwt.sign(payload, process.env.jwtSecret, { expiresIn: "1h" });




        res.cookie('token', token, cookieOptions)
            .status(201)
            .json({
                success: true,
                message: 'User registered successfully. OTP sent(mock).',
            });

    } catch (error) {
        next(error); // pass error to centralized middleware
    }
};


//--------------------------User Signup----------------------------------
export const handleUserSignUp = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return next(new ErrorResponse("All Fields are Required!", 400));
        }

        const user = await userModel.findOne({ email });
        if (!user) {
            return next(new ErrorResponse("Account Not Found.", 404));
        }

        const isPasswordMatched = await bcrypt.compare(password, user.password);
        if (!isPasswordMatched) {
            return next(new ErrorResponse("Invalid credentials", 401));
        }

        const payload = {
            userId: user._id,
            email: user.email,
            role: user.role
        }

        const token = jwt.sign(payload, process.env.jwtSecret, { expiresIn: "1h" });

        return res.cookie("token", token,cookieOptions).
            status(200).
            json({ success: true, message: "User Logged Successfully" });

    } catch (error) {
        next(error); // pass unexpected errors to centralized middleware
    }
};

//-------------------------------logout Controller---------------------------------

export const logout = (req , res) => {

    try{
        res.clearCookie('token' ,cookieOptions)

    return res.status(200).json({success:true  , message: 'Logout Successfuly'})
    }
    catch(err)
    {
        return res.status(500).json({success :false , message :err.message})
    }
    
}