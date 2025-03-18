import Parents from "../model/parentSchema.js"
import createVerification from "../utils/createVerification.js"
import dotenv from "dotenv"
import verificationCheck from "../utils/verifyOTP.js"

dotenv.config()

export const SendOTP = async (req,res) =>{
    try {

        const {phone} = req.body

        if(!phone){
            return  res.status(400).json({error:"Missing phone number"})
        }

        // const parent = await Parents.find(phone)

        // if(!parent){
        //     return res.status(401).json({error:"Un Authorized Access"})
        // }

       const verfication = await createVerification(phone)
       
       console.log()

        res.status(200).json("Sent OTP")

    } catch (error) {
        console.log(error.message)
        res.status(500).json({error:error.message})
    }
}

export const verifyOtp = async (req,res) =>{
    try {
        const {phone,otp} = req.body

        const verification = await verificationCheck(phone,otp)

        if(verification.status === "approved"){
            return res.status(200).json({message:"Verified"})
        }

       res.status(400).json({error:"Invalid OTP"})

    } catch (error) {
        console.log(error.message)
        return res.status(500).json({error:error.message})
    }
}