import { Request,Response } from "express";
import { getUserRepo,updateUserRepo,deleteUserRepo,createUserRepo } from "../repositories/user.repository";

import exp from "constants";
import { IUserInterface } from "../database/interfaces/user.interface";

export const getUserController =async(req: Request,res: Response)=>{
    const userId =req.query.userId as string;
    try{
        const user=await getUserRepo(userId)
        if(userId){
            res.status(200).json({data:user})
        }else{
            res.status(200).json({error:" user not found"})
        }
    }catch(error){
        console.log(error);
        res.status(500).json({error:error});
    }
}

export const createUserController =async(req: Request,res: Response)=>{
    const user: IUserInterface=req.body;
    try{
        const success=await createUserRepo(user)
        if(success){
            res.status(200).json({data:user})
        }else{
            res.status(200).json({error:" user not found"})
        }
    }catch(error){
        console.log(error);
        res.status(500).json({error:error});
    }
}


export const updateUserController =async(req: Request,res: Response)=>{
    const updatedUser: IUserInterface=req.body;
    try{
        const success=await updateUserRepo(updatedUser.uid, updatedUser)
        if(success){
            res.status(200).json({data:"user updated"})
        }else{
            res.status(200).json({error:" user not updated"})
        }
    }catch(error){
        console.log(error);
        res.status(500).json({error:error});
    }
}

export const deletedUserController =async(req: Request,res: Response)=>{
    const userId =req.query.userId as string;
    try{
        const success=await deleteUserRepo(userId)
        if(success){
            res.status(200).json({data:"user deleted"})
        }else{
            res.status(200).json({error:" user not deleted"})
        }
    }catch(error){
        console.log(error);
        res.status(500).json({error:error});
    }
}