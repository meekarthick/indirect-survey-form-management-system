import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import connectToMongoDB from "./mongoDB/connect.js"
import cookieParser from "cookie-parser"
import authRoutes from "./routers/auth.route.js"
import { fetchQuestions } from "./fetch_and_post/fetchUserQuestions.js"
import questionRoute from "./routers/question.route.js"
dotenv.config()

const app = express()


const ServerPORT = process.env.PORT || 7000
console.log(ServerPORT);

app.use(express.json());
app.use(cookieParser());


//middleware for employer signup
app.use('/api/auth',authRoutes)



// api for fecting questions
app.use('/api/questions',questionRoute)



app.get('/',(req,res)=>{
    res.send("Hello World")
})


//connecting mongoDB

// app.listen(ServerPORT,() =>{
//     connectToMongoDB();
//     console.log("Server is runing ");
// })

app.listen(process.env.PORT, () =>{
    try {
        // console.log(process.env.MONGO_DB_URI)   
        // mongoose.connect("mongodb://localhost:27017/indirect-survey")
        connectToMongoDB();
        console.log("DB connected")

    } catch (error) {
        console.log(error.message)
    }
})