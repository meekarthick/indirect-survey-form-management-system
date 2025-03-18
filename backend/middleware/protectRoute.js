import jwt from "jsonwebtoken"

const protectRoute = (req,res,next) =>{

    const token = req.cookies.jwt

    if(!token){
        return res.status(403).json({message:"Access Denied, token not provided"})
    }

    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY)
        
        req.user = decodedToken

        next()
        
    } catch (error) {

        return res.status(400).json({message:"Invalid or expire Token"})
    }
}

export default protectRoute