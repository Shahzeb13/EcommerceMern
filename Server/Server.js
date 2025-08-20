import express from 'express';
import dotenv from 'dotenv'
import userRouter from './Routes/authRoutes.js';
import adminRouter from './Routes/adminRoutes.js';
import { ConnectToDatabase } from './config/dbConnection.js';
import errorHandler from './middleware/errorMiddleware.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
const app = express();

app.use(cors({
    origin : "http://localhost:5173",
    methods: ["POST" , "GET" , "DELETE" , "PUT"],
    credentials: true
}))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
dotenv.config();



const PORT = process.env.PORT || 5000;
ConnectToDatabase();

app.use("/api/auth" , userRouter);
app.use("/api/admin" , adminRouter);
app.get("/" , (req , res) => {
    res.send("Hello World!")
})


app.use(errorHandler);

const server = app.listen(PORT, (req , res) => {

    console.log(`✔️  App is listening on http://localhost:${PORT}`)
})


// server.on("error", (err) => {
//     console.error(`❌  Error Starting Server! Something Went wrong`);
// });
  

 