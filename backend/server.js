import express from "express"
import dotenv from "dotenv"
import connectToMongoDB from "./mongoDB/connect.js"
import cookieParser from "cookie-parser"
import authRoutes from "./routers/auth.route.js"

dotenv.config()

const app = express()


const ServerPORT = process.env.PORT || 7000
console.log(ServerPORT);

app.use(express.json());
app.use(cookieParser());


//middleware for employer signup
app.use('/api/auth',authRoutes)

app.get('/',(req,res)=>{
    res.send("Hello World")
})


//connecting mongoDB

app.listen(ServerPORT,() =>{
    connectToMongoDB();
    console.log("Server is runing ");
})