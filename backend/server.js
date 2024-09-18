import express from "express"
import dotenv from "dotenv"

dotenv.config()
const app = express()
<<<<<<< HEAD
=======

const PORT = process.env.PORT 

console.log(PORT);
>>>>>>> d11cb2237f1485a8131bdf4fba55450dc6d74a66


app.listen(process.env.PORT, () =>{
    console.log(`Server running ${process.env.PORT}`);
})

app.get('/',(req,res)=>{
    res.send("Hello")
})