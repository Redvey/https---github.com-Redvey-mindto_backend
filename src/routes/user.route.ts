import { Router } from "express";
import { createUserController, deletedUserController, getUserController, updateUserController } from "../controllers/user.controller";



const userRouter = Router()


//Define the route paths

userRouter.get("/:userId",getUserController)
userRouter.post("/",createUserController)
userRouter.delete("/:userId",deletedUserController)
userRouter.put("/", updateUserController)


export default userRouter