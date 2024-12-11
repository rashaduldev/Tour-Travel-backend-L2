import { Router } from "express";
import { userController } from "./user.controller";

const userRouter=Router();
userRouter.post('/createuser', userController.createUser)
userRouter.get('/getallusers', userController.getUser)
userRouter.get('/getallusers/:userID', userController.getSingleUser)
userRouter.put('/getallusers/:userID', userController.updateUser)

export default userRouter;