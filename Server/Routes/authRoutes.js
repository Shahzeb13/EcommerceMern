import express from 'express';
import { handleUserRegistration , handleUserSignUp  , logout , sendOtp , verifyOtp} from '../Controllers/userControllers.js';
import { protect } from '../middleware/authMiddleware.js';
const userRouter = express.Router();


userRouter.post("/register" , handleUserRegistration);
userRouter.post("/login" , handleUserSignUp);
userRouter.post("/logout" , logout);
userRouter.post("/sendOtp" , protect , sendOtp );
userRouter.post("/verifyOtp" ,protect , verifyOtp)

export default userRouter;