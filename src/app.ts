import express, { Request, Response } from 'express';
import userRouter from './module/user/user.route';
const app = express();

// middleware
app.use(express.json());
app.use("/users", userRouter)
app.get("/",(req:Request, res:Response) => {
    res.send({
        status:true,
        message:"Server is running 🏃‍♂️",
    })
})

export default app;