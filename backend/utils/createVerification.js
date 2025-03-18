import twilio from "twilio"
import dotenv from "dotenv"

dotenv.config()

 const  createVerification = async (number) =>{
    const client = twilio(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN)
    const verfication = await client.verify.v2.services(process.env.SERVICE_SID).verifications.create({
        channel : "sms",
        to : number
    })

    return verfication
}

export default createVerification


    