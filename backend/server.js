import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import morgan from "morgan"
import connectToMongoDB from "./mongoDB/connect.js"
import cookieParser from "cookie-parser"
import authRoutes from "./routers/auth.route.js"
import questionRoute from "./routers/question.route.js"
import session from "express-session"
import passport from "./utils/passport.config.js"
dotenv.config()

const app = express()

const ServerPORT = process.env.PORT || 3005

app.use(cors(
    {
        origin: "http://localhost:5173",  // ✅ Allow requests from your frontend
        credentials: true  // ✅ Allow cookies and authentication headers
    }
));
app.use(express.json());
app.use(cookieParser());

app.use(morgan("dev"))


// employer signup
app.use('/api/auth',authRoutes)

// app.post('/api/auth/google',(req,res) =>{
//     console.log("Hit google route")
//     return res.status(200).json({message:"Hit backend"})
// })


// api for fecting questions
app.use('/api/questions',questionRoute)

app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.listen(ServerPORT, () =>{
    try {
        // console.log(process.env.MONGO_DB_URI)   
        // mongoose.connect("mongodb://localhost:27017/indirect-survey")
        console.log(`Server running on PORT ${ServerPORT}`);
        
        connectToMongoDB();

    } catch (error) {
        console.log(error.message)
    }
})