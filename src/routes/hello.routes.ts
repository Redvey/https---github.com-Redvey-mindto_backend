import { Router,Request,Response } from "express";


const helloRouter = Router()


//Define the route paths

helloRouter.get("/", (req: Request,res: Response)=> {
    res.json({
        "data": "My server is Live"
    }) 
})



export default helloRouter