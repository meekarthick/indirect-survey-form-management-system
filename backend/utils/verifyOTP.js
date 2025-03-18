import twilio from "twilio"
import dotenv from "dotenv"

dotenv.config()

const verificationCheck = async (phone,otp) =>{
    try {
        
        const client = twilio(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN)
        

        const verifyOTP = await client.verify.v2.services(process.env.SERVICE_SID)
        .verificationChecks.create({
            code :otp ,
            to : phone
        })


        return verifyOTP

    } catch (error) {
        console.log(error.message)
    }
}

export default verificationCheck;