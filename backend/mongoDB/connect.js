import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()
const connectToMongoDB = async () =>{

    try {
        await mongoose.connect(process.env.MONGO_DB_URI)
        console.log("Database connected");
        
    } catch (error) {
        console.log(error.message);
        console.log("Connection failed");
    }
}

export default connectToMongoDB;