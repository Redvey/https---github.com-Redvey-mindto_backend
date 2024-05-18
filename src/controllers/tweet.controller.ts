import { Request,Response } from "express";
import { getTweetRepo,updateTweetRepo,deleteTweetRepo,createTweetRepo } from "../repositories/tweet.repository";

import exp from "constants";
import { ITweetInterface } from "../database/interfaces/tweet.interface";

export const getTweetController =async(req: Request,res: Response)=>{
    const tweetId =req.query.tweetId as string;
    try{
        const tweet=await getTweetRepo(tweetId)
        if(tweetId){
            res.status(200).json({data:tweet})
        }else{
            res.status(200).json({error:" tweet not found"})
        }
    }catch(error){
        console.log(error);
        res.status(500).json({error:error});
    }
}

export const createTweetController =async(req: Request,res: Response)=>{
    const tweet: ITweetInterface=req.body;
    try{
        const success=await createTweetRepo(tweet)
        if(success){
            res.status(200).json({data:tweet})
        }else{
            res.status(200).json({error:" tweet not found"})
        }
    }catch(error){
        console.log(error);
        res.status(500).json({error:error});
    }
}


export const updateTweetController =async(req: Request,res: Response)=>{
    const updatedTweet: ITweetInterface=req.body;
    try{
        const success=await updateTweetRepo(updatedTweet.tweetId, updatedTweet)
        if(success){
            res.status(200).json({data:"tweet updated"})
        }else{
            res.status(200).json({error:" tweet not updated"})
        }
    }catch(error){
        console.log(error);
        res.status(500).json({error:error});
    }
}

export const deletedTweetController =async(req: Request,res: Response)=>{
    const tweetId =req.query.tweetId as string;
    try{
        const success=await deleteTweetRepo(tweetId)
        if(success){
            res.status(200).json({data:"tweet deleted"})
        }else{
            res.status(200).json({error:" tweet not deleted"})
        }
    }catch(error){
        console.log(error);
        res.status(500).json({error:error});
    }
}