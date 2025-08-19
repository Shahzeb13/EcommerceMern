import   jwt  from "jsonwebtoken";
import ErrorResponse from "../config/errorResponse.js";

export const protect = (req , res , next) =>{

    try{
        const token = req.cookies.token;

        if(!token){
            return next(new ErrorResponse("Token not Found" , 401))
        }

        const decodedToken = jwt.decode(token , process.env.jwtSecret);
        req.user = decodedToken;
        next();
    }
    catch(err){
        next(err)
    }

}