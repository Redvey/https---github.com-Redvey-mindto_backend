import express, {Express} from "express"
import http from "http"
import cors from "cors"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import router from "./routes/routes"

const app: Express = express()
const server= http.createServer(app)

//Express Configuration
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.set("PORT", 3000)
app.set("BASE_URL", "Localhost")

//configure .env files
dotenv.config()

//Define the Routes

app.use( "/api/v1",router)


//Mongo connection

const mongoURI = process.env.Mongo_DB_URI
if(!mongoURI){
    console.error("MongoDB URL is not defined")
    process.exit(1)
}
mongoose.connect(mongoURI, {}).then(
    ()=> {
        console.log("MongoDB is connected")
    }
)
.catch((error)=>{
    console.log(error)
})


//start the server
try{
    const port: Number= app.get("PORT")
    const baseUrl: String= app.get("BASE_URL")
    server.listen(port, (): void =>{
        console.log("my server is listening")
    })
}catch(error){
    console.log(error)
}


export default server