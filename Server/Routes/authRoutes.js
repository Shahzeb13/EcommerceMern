import express from 'express';
import { handleUserRegistration , handleUserSignUp } from '../Controllers/userControllers.js';

const userRouter = express.Router();


userRouter.post("/register" , handleUserRegistration);
userRouter.post("/login" , handleUserSignUp)


export default userRouter;