import express from "express"
import dotenv from "dotenv"

dotenv.config()
const app = express()

const PORT = process.env.PORT 

console.log(PORT);

app.listen(PORT, () =>{
    console.log(`Server running ${PORT}`);
})

app.get('/',(req,res)=>{
    res.send("Hello")
})