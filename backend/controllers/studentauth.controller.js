import Student from "../model/StudentSchema.js"
import generateTokenandSetcookie from "../utils/generateToken.js"

export const studentLogin = async (req,res) =>{
    try {
        const {token} = req.body

    const userResponseInfo = await fetch(`https://www.googleapis.com/oauth2/v2/userinfo`,{
        headers : {Authorization : `Bearer ${token}`}
    })

    const userInfo = await userResponseInfo.json()

    if(!userInfo.email){
        return res.status(400).json({message : "Invalid Google Token"})
    }

    // let user = await Student.findOne({email : userInfo.email})

    // const isDomain = user.Email.endsWith("@bitsathy.ac.in")

    // if(!isDomain){
    //     return res.status(401).json({error:"Unauthorized Access"})
    // }

    // if(!user){
    //     return res.status(401).json({message : "User not found"})
    // }

    // generateTokenandSetcookie(user,res)

    // return res.status(200).json({
    //     id : user._id,
    //     name : user.Name,
    //     email : user.Email
    // })

    if(userInfo.hd !== "bitsathy.ac.in"){
        return res.status(401).json({error:"Unauthorized Access"})
    }

    return res.status(200).json({info:userInfo})
    
    
    } catch (error) {
        console.log("Student Login error",error.message)
        return res.status(500).json({error:"Internal Server Error"})
    }
}