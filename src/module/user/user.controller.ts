// req and res manage

import { Request, Response } from "express";
import User from "./user.model";
import { userServices } from "./user.service";

 
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
      const result = await userServices.getUsers()
  
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
  // get single user

  const getSingleUser=async (req:Request,res:Response)=>{
    try {
      console.log(req.params.userID);
      
      const userID=req.params.userID      
      const result=await userServices.getSingleUser(userID)
      res.send({
        status: true,
        message: 'One Users getting successfully',
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

  // update single user info
  const updateUser=async (req:Request,res:Response)=>{
    try {
      const userID=req.params.userID;
      console.log(userID);
      
    const result=await userServices.updatesingleUser(userID)
    res.send({
      status: true,
      message: 'One Users updated successfully',
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
    getUser,
    getSingleUser,
    updateUser
}