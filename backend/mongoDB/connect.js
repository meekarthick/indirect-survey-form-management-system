import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()
const connectToMongoDB = async () =>{

    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/indirect-survey")
        console.log("Database connected");
        
    } catch (error) {
        console.log(error.message);
        console.log("Connection failed");
    }
}

export default connectToMongoDB;
