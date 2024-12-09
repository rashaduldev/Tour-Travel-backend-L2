// req and res manage

import { Request, Response } from "express";
import User from "./user.model";

 
const createUser=async (req:Request , res:Response)=>{
    try {
        const payload=req.body;
        const result=await User.create(payload)
        res.json({
            status:true,
            message:"User created successfully",
            data:result
        })

    } catch (error) {
        res.json({
            status:false,
            message:"Something went wrong",
            error
        })
    }
}
const getUser = async (req: Request, res: Response) => {
    try {
      const result = await userService.getUser()
  
      res.send({
        status: true,
        message: 'Users getting successfully',
        result,
      })
    } catch (error) {
      res.json({
        status: false,
        message: 'Something went wrong',
        error,
      })
    }
  }

export const userController={
    createUser,
    getUser
}